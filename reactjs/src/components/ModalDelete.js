import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteUser } from "../api/UserApi";


function ModalDelete(props) {
    const { handleClose, show, dataUserEdit, handleUpdateTable } = props;
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const confirmDelete = async () => {
        await deleteUser(dataUserEdit._id)
        handleClose();
        handleUpdateTable();
        toast.success("Delete succeed!");
    }
    useEffect(() => {

        setEmail(dataUserEdit.email);
        setFirstName(dataUserEdit.first_name);
        setLastName(dataUserEdit.last_name);

    }, [dataUserEdit])
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
                    <Modal.Title>Delete user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <p>This action can't be undone! Do want to delete this user</p>
                        <p><b>Email: {email}</b></p>
                        <p><b>Fullname: {firstName} {lastName}</b></p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;
