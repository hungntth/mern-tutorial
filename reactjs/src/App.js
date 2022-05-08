import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "./App.scss";
import Header from "./components/Header";
import { handleRefresh } from './redux/actions/userAction';
import AppRoutes from './routes/AppRoutes';

function App() {
  const dispatch = useDispatch();
  const dataUserRedux = useSelector(state => state.user.account);

  console.log(dataUserRedux)


  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(handleRefresh())
    }
  }, [])

  return (
    <>

      <div className="app-container">
        <Header />
        <Container>
          <AppRoutes />
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
