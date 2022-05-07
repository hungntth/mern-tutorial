import { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "./App.scss";
import Header from "./components/Header";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import TableUser from "./components/TableUser";
import { UserContext } from './context/UserContext';

function App() {
  const { user, loginContext } = useContext(UserContext);
  console.log(user)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(localStorage.getItem("email"), localStorage.getItem("token"))
    }
  }, [])

  return (
    <>

      <div className="app-container">
        <Header />
        <Container>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/users" component={TableUser} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
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
