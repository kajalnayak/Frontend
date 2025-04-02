import Form from '../../components/shared/Form/Form';
import { useSelector } from 'react-redux';
import Spinner from '../../components/shared/Form/Spinner';



const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>

     {error && <span>{alert(error)}</span>}
      {loading? <Spinner/>:(
      <div className="row g-0">
        <div className="col-md-8 form-banner ">
            <img src="./assets/images/banner1.webp" alt="Login Page"/>
        </div>
        
        <div className="col-md-4 form-container ">
            <Form 
               formtitle={'Login Page'}
               submitBtn={'Login'}
               formType={'login'}
               />
        </div>
      </div>
    )}

  </>

  );
};

export default Login;
