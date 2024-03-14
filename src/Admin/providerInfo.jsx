import React,{useState} from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import NavBarAdmin from './navAdmin';
function ProviderAdmin() {
    const [users, setUsers] = useState([]);
React.useEffect(()=>{
    fetchProviders();
},[]);
  const fetchProviders = async () => {
    try {
      const response = await axios.post("https://service-backend-m9xm.onrender.com/admin/fetchProviders");
      setUsers((response.data));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return (
    <>
    <NavBarAdmin />
    <br /><br />
    <br />
    <center><h1>Service-Provider Info</h1></center>
    <br /><br /><br />
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Expert In</th>
            <th>Proof Pic</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user._id}>
              <td>{index+1}</td>
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.expert}</td>
              <td style={{ width: "6%" }}>
  <img src={`http://localhost:2006/uploads/${user.ipic}`} alt="Not Uploaded Yet" style={{ width: "100%", height: "auto" }} />
               </td>

            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default ProviderAdmin;