import React from 'react';
// import GoogleSignIn from './GoogleSignIn';
// import FormImage from './FormImage';
import Header from './components/Header'
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';
import './App.scss'

const App = () => {
    return (
        <div className='app-container'>
            <Header />
            <Container>
                <div className='my-3 add-new'>
                    <span>List Users:</span>
                    <button className='btn btn-success'>Add</button>
                </div>
                <TableUsers />
            </Container>
        </div>
    );
};

export default App;






// import React, { useState } from "react";
// import axios from "axios";

// const SimpleForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = {
//       name: name,
//       emailz: email,
//       messagez: message,
//     };

//     // Post the form data to the Django backend
//     axios
//       .post("http://127.0.0.1:8000/api/try/try_add_api/", formData)
//       .then((response) => {
//         setResponseMessage(response.data.message);
//       })
//       .catch((error) => {
//         if (error.response) {
//           setResponseMessage(error.response.data.error);
//         } else {
//           setResponseMessage("An error occurred.");
//         }
//       });
//   };

//   return (
//     <div>
//       <h2>Submit a Simple Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name: </label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Message: </label>
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {responseMessage && <p>{responseMessage}</p>}
//     </div>
//   );
// };

// export default SimpleForm;
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import React, { useState } from 'react'
// import Sidebar from './Sidebar'
// import Home from './Home'
// // src/index.js



// function App() {
  
//   const [toggle, setToggle] = useState(false)
//   const Toggle = () => {
//     setToggle(!toggle)
//   }
//   return (
//     <div className='container-fluid bg-secondary min-vh-100'>
//       <div className='row'>
//         {toggle && <div className='col-2 bg-white vh-100 position-fixed'>
//           <Sidebar />
//         </div>}
//         {toggle && <div className='col-2'></div>}
//         <div className='col'>
//           <Home Toggle={Toggle}/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
