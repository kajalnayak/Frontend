import React, { useEffect } from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Form/Spinner";

const Register = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      window.location.replace("/login");  
    }
  }, [user]); 

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner2.jpg" alt="Register Page" />
          </div>

          <div className="col-md-4 form-container">
            <Form formtitle={"Register Page"} submitBtn={"Register"} formType={"register"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
