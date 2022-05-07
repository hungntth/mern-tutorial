import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "./App.scss";
import Header from "./components/Header";
import Home from './components/Home';
import TableUser from "./components/TableUser";

function App() {

  return (
    <>

      <div className="app-container">
        <Header />
        <Container>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/users" component={TableUser} exact />
          </Switch>
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
