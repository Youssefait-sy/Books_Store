import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../Store/authSlice";

const Header = () => {
    const error = useSelector(data => data.booksData.error);
    const isLogedIn = useSelector(data => data.auth.isLogedIn);
    const dispatch = useDispatch();
    return (
        <>
        <div className="header d-flex justify-content-between text-white">
            <h3>My Book</h3>
            <button className="btn btn-outline-primary" onClick={() => dispatch(logInOut())}>
                {isLogedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
        {error !== null ? <div className="container mt-2 alert alert-danger">
                <p><strong>Error :</strong>{error}</p>
            </div> : ''}
        </>
    )
}

export default Header;