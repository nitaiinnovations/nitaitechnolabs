import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./Styles/index.css";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import getLPTheme from "./Components/getLPTheme";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CyberSecurity from "./Pages/CyberSecurity";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Blogs from "./Pages/Blogs";
import CreateBlog from "./Pages/CreateBlog";
import Account from "./Pages/Account";
import EditBlog from "./Pages/EditBlog";
import EditProfile from "./Pages/EditProfile";
import AboutUs from "./Pages/AboutUs";
import SoftwareTesting from "./Pages/SoftwareTesting";
import SoftwareDevelopment from "./Pages/SoftwareDevelopment";

export default function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const storedMode =
    localStorage.getItem("themeMode") || (isMobile ? "dark" : "light");
  const [mode, setMode] = React.useState(storedMode);

  const LPtheme = React.useMemo(() => createTheme(getLPTheme(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("themeMode", newMode); // Store the selected theme in localStorage
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Router>
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />
        <MainContent />
      </Router>
    </ThemeProvider>
  );
}

function MainContent() {
  const location = useLocation(); // Get the current location

  // Function to determine if the footer should be displayed
  const shouldShowFooter = () => {
    const hideFooterRoutes = [
      "/editProfile",
      "/createBlog",
      "/editBlog",
      "/account",
    ];
    return !hideFooterRoutes.includes(location.pathname);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cyberSecurity" element={<CyberSecurity />} />
        <Route path="/softwareTesting" element={<SoftwareTesting />} />
        <Route path="/softwareDevelopment" element={<SoftwareDevelopment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/account" element={<Account />} />
        <Route path="/editBlog" element={<EditBlog />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
      {shouldShowFooter() && <Footer />}
    </>
  );
}
