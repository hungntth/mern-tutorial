import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putUpdateUser } from "../api/UserApi";

function EditUser(props) {
    const { handleClose, show, dataUserEdit, handleUpdateTable } = props;
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleEditUser = async () => {
        const body = {
            email: email,
            first_name: firstName,
            last_name: lastName,
        };
        let res = await putUpdateUser(dataUserEdit._id, body);
        handleClose();
        setEmail("");
        setFirstName("");
        setLastName("");
        toast.success("Update user succeed!");
        handleUpdateTable();
    };
    useEffect(() => {
        if (show) {
            console.log(dataUserEdit._id);
            setEmail(dataUserEdit.email);
            setFirstName(dataUserEdit.first_name);
            setLastName(dataUserEdit.last_name);
        }
    }, [dataUserEdit]);
    return (
        <>
            <Modal
                backdrop="static"
                keyboard={false}
                show={show}
                onHide={handleClose}
                animation={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <form>
                            <div className="mb-3">
                                <label className="mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(event) => setLastName(event.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={handleEditUser}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditUser;
