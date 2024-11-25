import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserStatus, isUserExist } from "../store/userSlice";
import { Navigate } from "react-router-dom";
//import Loading from "../Loading/Loading";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, isUser }) => {
  const user = useSelector(getUser);
  const userStatus = useSelector(getUserStatus);

  const dispatch = useDispatch();

  const hasFetchedUser = useRef(false); // Add a ref to track the fetch

  useEffect(() => {
    if (!hasFetchedUser.current && userStatus === "idle") {
      hasFetchedUser.current = true; // Set the ref to true after the first fetch
      dispatch(isUserExist());
    }
  }, [dispatch, userStatus]);

  if (!isUser) {
    if (user.length === 0) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  if (isUser) {
    if (user.length !== 0) {
      return <Navigate to="/" />;
    }
    return children;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  isUser: PropTypes.bool,
};

export default ProtectedRoute;
