import { useState } from "react";
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import "./App.scss";
import Header from "./components/Header";
import ModalAddNew from "./components/ModalAddNew";
import TableUser from "./components/TableUser";

function App() {

  return (
    <>
      <div className="app-container">
        <Header />
        <Container>

          <TableUser />
        </Container>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
