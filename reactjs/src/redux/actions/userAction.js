import { toast } from "react-toastify";
import { loginApi, registerApi } from "../../api/AuthApi";

export const USER_LOGIN = "USER_LOGIN";
export const FETCH_USER_LOGIN = "FETCH_USER_LOGIN";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REFRESH = "USER_REFRESH";

export const handleRegisterRedux = (email, password) => {
    return async (dispatch, getState) => {
        dispatch({ type: FETCH_USER_LOGIN });
        let res = await registerApi(email, password);
        if (res && res.token) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("email", email);
            dispatch(
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    data: { email: email, token: res.token },
                })
            );
            toast.success("Login success!")
        } else {
            toast.error(res.data);
            dispatch({ type: FETCH_USER_ERROR });
        }
    };
};

export const handleLogionRedux = (email, password) => {
    return async (dispatch, getState) => {
        dispatch({ type: FETCH_USER_LOGIN });
        let res = await loginApi(email, password);
        if (res && res.token) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("email", email);
            dispatch(
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    data: { email: email, token: res.token },
                })
            );
            toast.success("Login success!")
        } else {
            toast.error(res.data);
            dispatch({ type: FETCH_USER_ERROR });
        }
    };
};
export const handleRefresh = () => {
    return (dispatch, getState) => {
        dispatch({ type: USER_REFRESH });
    };
};
export const handleLogoutRedux = () => {
    return (dispatch, getState) => {
        dispatch({ type: USER_LOGOUT });
    };
};
