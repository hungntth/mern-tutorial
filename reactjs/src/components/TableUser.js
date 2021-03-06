import { React, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import { fetchAllUser } from "../api/UserApi";
import ModalAddNew from "./ModalAddNew";
import ModalDelete from "./ModalDelete";
import ModalEditUser from "./ModalEditUser";

function TableUser(props) {
    const [userList, setUserList] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const [isShowModalEditUser, setIsShowModalEditUser] = useState(false);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataUserEdit, setDataUserEdit] = useState({});
    const [sortField, setSortField] = useState("-createdAt");
    const [page, setPage] = useState("");
    const [keyword, setKeyWord] = useState("");
    // const history = useHistory();

    useEffect(() => {
        getUsers(page, sortField, keyword);
        // history.push(`?page=${page}&sort=${sortField}&search=${keyword}`);

    }, [page, sortField, keyword]);

    const getUsers = async (page, sort, keyword) => {
        let res = await fetchAllUser(page, sort, keyword);
        if (res && res.data) {
            setUserList(res.data);
            setTotalUsers(res.total);
            setTotalPages(res.total_pages);
            setPage(res.page);
        }

    };
    const handleUpdateTable = () => {
        getUsers(page, sortField, keyword);
    };
    const handlePageClick = (event) => {
        getUsers(+event.selected + 1, sortField);
        setPage(+event.selected + 1);
        console.log(sortField);
    };

    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEditUser(false);
        setIsShowModalDelete(false);
    };
    const handleShow = () => {
        setIsShowModalAddNew(true);
    };
    const handleUpdateShow = (item) => {
        setIsShowModalEditUser(true);
        setDataUserEdit(item);
    };
    const handleDeleteShow = (item) => {
        setIsShowModalDelete(true);
        setDataUserEdit(item);
    };
    const handleSort = (sort) => {
        setSortField(sort);


    };

    const handleSearch = (event) => {
        setKeyWord(event.target.value);

    };

    return (
        <>
            <div className="my-3 add-new">
                <span>List User:</span>
                <button className="btn btn-primary" onClick={handleShow}>
                    Add new user
                </button>
            </div>
            <div className="col-12 col-sm-4 my-3">
                <input
                    className="form-control"
                    placeholder="Search user by email..."
                    defaultValue={keyword}
                    onChange={(event) => handleSearch(event)}
                />
            </div>
            <div className="table-user">
                <Table bordered hover >
                    <thead>
                        <tr>
                            <th>
                                <div className="sort-header">
                                    <span>Email</span>
                                    <span>
                                        <i
                                            className="fa-solid fa-arrow-down"
                                            onClick={() => handleSort("email")}
                                        ></i>
                                        <i
                                            className="fa-solid fa-arrow-up"
                                            onClick={() => handleSort("-email")}
                                        ></i>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <div className="sort-header">
                                    <span>Last Name</span>
                                    <span>
                                        <i
                                            className="fa-solid fa-arrow-down"
                                            onClick={() => handleSort("last_name")}
                                        ></i>
                                        <i
                                            className="fa-solid fa-arrow-up"
                                            onClick={() => handleSort("-last_name")}
                                        ></i>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <div className="sort-header">
                                    <span>First Name</span>
                                    <span>
                                        <i
                                            className="fa-solid fa-arrow-down"
                                            onClick={() => handleSort("first_name")}
                                        ></i>
                                        <i
                                            className="fa-solid fa-arrow-up"
                                            onClick={() => handleSort("-first_name")}
                                        ></i>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <div className="action-header">Actions</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList &&
                            userList.length > 0 &&
                            userList.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item.email}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.first_name}</td>
                                        <td>
                                            <div >
                                                <button
                                                    className="btn btn-warning mx-3 action-button"
                                                    onClick={() => handleUpdateShow(item)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger action-button"
                                                    onClick={() => handleDeleteShow(item)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            </div>
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
