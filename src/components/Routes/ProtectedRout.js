import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import API from "../../services/API";
import { getCurrentUser } from "../../redux/features/auth/authAction";
import { Navigate } from "react-router-dom";

const ProtectedRout = ({ children }) => {
const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const { data } = await API.get("/user/current-user");
      if (data?.success) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  });

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRout;







