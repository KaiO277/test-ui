
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService'

const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = async () => {
        let res = await fetchAllUser();

        if (res ){
            setListUsers(res) 
        }    
    }
    console.log("Check res: ", listUsers)

    return(<>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>text_short</th>
          <th>text_long</th>
        </tr>
      </thead>
      <tbody>
        {listUsers && listUsers.length > 0 &&

        listUsers.map((user, index) => {
            return(
                <tr key={index} >
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.text_short}</td>
                <td>{user.text_long}</td>
            </tr>
            )
            
        })

        }
      </tbody>
    </Table>
    </>)
}

export default TableUsers