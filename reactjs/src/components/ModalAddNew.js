import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { postCreateUser } from '../api/UserApi';

ModalAddNew.propTypes = {

};

function ModalAddNew(props) {
    const { handleClose, show, handleUpdateTable } = props;
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleSaveUser = async () => {
        const body = {
            email: email,
            first_name: firstName,
            last_name: lastName
        }
        let res = await postCreateUser(body);
        console.log(res)
        handleClose();
        setEmail('');
        setFirstName('');
        setLastName('');
        toast.success("Created succeed!");
        handleUpdateTable();

    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
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
                    <Button variant="primary" onClick={handleSaveUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddNew;