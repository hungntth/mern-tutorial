import { React, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../api/UserApi';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';


TableUser.propTypes = {

};



function TableUser(props) {
    const [userList, setUserList] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        getUsers(1);
    }, [])

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);

        if (res && res.data) {
            setUserList(res.data)
            setTotalUsers(res.total)
            setTotalPages(res.total_pages)
        }
    }
    const handleUpdateTable = () => {
        getUsers(1)
    }
    const handlePageClick = (event) => {
        getUsers(+event.selected + 1);
    }
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const handleClose = () => {
        setIsShowModalAddNew(false)
    }
    const handleShow = () => {
        setIsShowModalAddNew(true)
    }

    return (
        <>
            <div className="my-3 add-new">
                <span>List User:</span>
                <button className="btn btn-primary" onClick={handleShow}>Add new user</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                    </tr>
                </thead>
                <tbody>
                    {userList && userList.length > 0 && userList.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
            <ModalAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />
        </>


    );
}

export default TableUser;