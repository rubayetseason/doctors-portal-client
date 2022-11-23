import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Appointment/Appointment";
import AddDoctor from "../Components/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../Components/Dashboard/AddDoctor/ManageDoctors";
import AllUsers from "../Components/Dashboard/AllUsers";
import MyAppointment from "../Components/Dashboard/MyAppointment";
import Payment from "../Components/Dashboard/Payment";
import About from "../Components/Pages/About";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import DisplayError from "../Components/Shared/DisplayError";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
            <Payment></Payment>
        ),
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-rubayetseason.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);
