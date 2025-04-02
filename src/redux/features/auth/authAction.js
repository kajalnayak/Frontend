import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API"
import { toast } from 'react-toastify';

export const userLogin=createAsyncThunk(
    'user/login',

    async({role,email,password},{rejectWithValue})=>{
        try {
            const{data}=await API.post('/user/login',{role,email,password})
            if(data.success){
                localStorage.setItem('token',data.token)
                toast.success(data.message)
                window.location.replace("/") 
            }
            return data;
        } catch (error) {
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }

    }

);

export const userRegister = createAsyncThunk(
  "user/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      console.log("Registering with:", { name, role, email, password, phone, organisationName, address, hospitalName, website });
      const { data } = await API.post("/user/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });
      if (data?.success) { 
        toast.success("User Registerd Successfully");
        window.location.replace("/login")
         return data.user;
      }

      
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);





export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/user/current-user");
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);