import { React, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../api/UserApi';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';
import ModalDelete from './ModalDelete';
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
    const [isShowModalEditUser, setIsShowModalEditUser] = useState(false);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataUserEdit, setDataUserEdit] = useState({})
    const handleClose = () => {
        setIsShowModalAddNew(false)
        setIsShowModalEditUser(false)
        setIsShowModalDelete(false)
    }
    const handleShow = () => {
        setIsShowModalAddNew(true)
    }
    const handleUpdateShow = (item) => {
        setIsShowModalEditUser(true);
        setDataUserEdit(item);
    }
    const handleDeleteShow = (item) => {
        setIsShowModalDelete(true);
        setDataUserEdit(item);
    }

    return (
        <>
            <div className="my-3 add-new">
                <span>List User:</span>
                <button className="btn btn-primary" onClick={handleShow}>Add new user</button>
            </div>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userList && userList.length > 0 && userList.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>
                                    <button className="btn btn-warning mx-3 my-2" onClick={() => handleUpdateShow(item)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDeleteShow(item)}>Delete</button>
                                </td>
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
            <ModalEditUser
                show={isShowModalEditUser}
                handleClose={handleClose}
                dataUserEdit={dataUserEdit}
                handleUpdateTable={handleUpdateTable}

            />

            <ModalDelete
                show={isShowModalDelete}
                dataUserEdit={dataUserEdit}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />
        </>


    );
}

export default TableUser;