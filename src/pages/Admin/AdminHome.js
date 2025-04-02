import React from "react";
import Layout from "../../components/shared/Form/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
                Welcome to the Admin Dashboard, your central hub for managing and overseeing all aspects of the Blood
                Bank Management System. This page is designed with administrators in mind, offering a comprehensive set
                of tools to ensure the smooth operation of the system. As an admin, you have the ability to monitor blood
                donation activities, manage donor records, track inventory levels, and generate important reports.

                The dashboard provides real-time insights into donation trends, stock levels, and the status of requests, 
                enabling you to make informed decisions quickly. You can easily manage donor information, approve or reject
                donation requests, and ensure that all records are up to date. Additionally, the admin panel gives you the flexibility 
                to handle emergency cases, update inventory status, and send out notifications to donors when needed.

                Furthermore, the dashboard includes features for generating detailed reports on blood donations, 
                stock usage, and donor participation. This allows you to track the system’s performance over time and 
                identify any areas that need attention. The Admin Dashboard is designed to empower you with all the necessary
                tools to manage the blood bank efficiently, ensuring that it continues to operate smoothly and effectively for
                those in need.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;