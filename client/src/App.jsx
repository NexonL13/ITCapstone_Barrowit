import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import FormikContainer from "./components/Formik/FormikContainer"
import DashboardContent from "./components/DashboardContent";
import Calendar from "./pages/Calendar";
import Approval from "./pages/Approval";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardContent/>}/>
            <Route path="default" element={<DashboardContent/>}/>
            <Route path="equipment" element={<Home />} />
            <Route path="add" element={<FormikContainer />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="approve" element={<Approval />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
