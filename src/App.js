import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { jwtDecode } from "jwt-decode"; // Correct import for jwt-decode

const App = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendGoogleDataToAPI = (userToken, email) => {
    setLoading(true);
    const apiURL = 'http://127.0.0.1:8000/api/auth/google/';

    // Send token_google and email to your backend API in the expected format
    axios.post(apiURL, {
      token_google: userToken, // Send Google token
      email: email             // Send user email (optional)
    })
    .then(response => {
      setLoading(false);
      console.log("API response", response.data); // Log API response
      if (response.data.access) {
        localStorage.setItem('accessToken', response.data.access);
        setMessage('Đăng nhập thành công!');
      } else {
        setMessage('Đăng nhập không thành công. Vui lòng thử lại.');
      }
    })
    .catch(error => {
      setLoading(false);
      setMessage('Đăng nhập không thành công. Vui lòng thử lại.');
      console.error("API error", error); // Log the error
    });
  };

  const fetchUserData = async (token) => {
    try {
      // Fetch Google user data using the token
      const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          Authorization: `Bearer ${token}`  // Pass the token in the Authorization header
        }
      });

      const userInfo = userInfoResponse.data;
      console.log("User Info:", userInfo); // Log user info
      
      // Extract email and pass it along with the Google token to your API
      const email = userInfo.email;
      sendGoogleDataToAPI(token, email); // Call to sendGoogleDataToAPI with the required data

    } catch (error) {
      console.error("Error fetching user info:", error.response ? error.response.data : error); // Log full error details
      setMessage('Failed to fetch user data. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Đăng nhập với Google</h1>
      {loading ? (
        <p>Đang tải...</p> // Display loading message
      ) : (
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log("Success:", credentialResponse);
            const token = credentialResponse.credential; // Extract token from Google response
            console.log("Google token:", token); // Log the token for troubleshooting

            // Optionally decode the JWT token to verify
            try {
              const decodedToken = jwtDecode(token); // Decode the Google token
              console.log("Decoded token:", decodedToken);
            } catch (error) {
              console.error("Error decoding token:", error);
            }

            // Fetch user data from Google and pass it to your backend API
            fetchUserData(token);
          }}
          onError={() => {
            setMessage('Đăng nhập không thành công. Vui lòng thử lại.');
            console.log('Đăng nhập thất bại');
          }}
        />
      )}
      {message && <p style={{ color: message.includes('thành công') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
};

const MainApp = () => {
  const clientId = "295487411588-4mflb8cmm4j9867lse5qq8anpog4jtb0.apps.googleusercontent.com"; // Replace with your Google Client ID

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  );
};

export default MainApp;


// 295487411588-4mflb8cmm4j9867lse5qq8anpog4jtb0.apps.googleusercontent.com
