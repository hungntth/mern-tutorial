import "./App.scss";
import Header from "./components/Header";
import TableUser from "./components/TableUser";
import Container from 'react-bootstrap/Container'
import ModalAddNew from "./components/ModalAddNew";
import { useState } from "react";

function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const handleShow = () => {
    setIsShowModalAddNew(true)
  }
  const handleClose = () => {
    setIsShowModalAddNew(false)
  }
  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 add-new">
          <span>List User:</span>
          <button className="btn btn-primary" onClick={handleShow}>Add new user</button>
        </div>
        <TableUser />
      </Container>

      <ModalAddNew
        show={isShowModalAddNew}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
