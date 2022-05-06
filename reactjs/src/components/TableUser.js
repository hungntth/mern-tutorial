import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../api/UserApi';


TableUser.propTypes = {

};



function TableUser(props) {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        let res = await fetchAllUser();

        if (res && res.data) {
            setUserList(res.data)
        }
    }

    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                </tr>
            </thead>
            <tbody>
                {userList && userList.length > 0 && userList.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                        </tr>
                    )
                })}

            </tbody>
        </Table>

    );
}

export default TableUser;