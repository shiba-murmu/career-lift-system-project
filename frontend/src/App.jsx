import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation, this also has to import here commented because it is already imported
} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProtectedData from "./components/ProtectedData/ProtectedData";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// *****************************************************************
/**
 * Here using code for dark themes for whole website
 * its a global theme
 *
 *
 *
 *    {{{{Below code is full code for dark theme}}}}
 *
 * import { ThemeProvider, createTheme } from '@mui/material/styles';
 * import CssBaseline from '@mui/material/CssBaseline';
 *
 * const darkTheme = createTheme({
 *   palette: {
 *     mode: 'dark',
 *   },
 * });
 *
 * export default function App() {
 *   return (
 *     <ThemeProvider theme={darkTheme}>
 *       <CssBaseline />
 *       <main>This app is using the dark mode</main>
 *     </ThemeProvider>
 *   );
 * }
 *
 *
 */


// ****************************************************************

/**
 *
 * @returns In this app function we create routes for the
 * different pages.
 */
// *****************************************************
/**
 * Importing pages here...
 */
// Importing all the pages for the application
import Landingpage from "./pages/Landingpage"; // Landing page of the application
import Home from "./pages/Homepage/Home"; // Home page
import Footer from "./components/Footer/Footer"; // Footer component
import Header from "./components/Header/Header"; // Header component
import About from "./pages/About/About"; // About page
import Contact from "./pages/Contact/Contact"; // Contact page
import Ai from "./pages/Aiassistant/Ai"; // AI Assistant page
import SkillTest from "./pages/skilltest/SkillTest"; // Skill Test page
import ExploreCareer from "./pages/Explorecareer/ExploreCareer"; // Explore Career page
import Profile from "./pages/Profile/Profile"; // User Profile page
import Setting from "./pages/Settings/Setting"; // Settings page
import Account from "./pages/Account/Account"; // Account page
import Dashboard from "./pages/Dashboard/Dashboard"; // Dashboard page
import SignUp from "./pages/SignUp/SignUp"; // Sign Up page
import Matriculation from "./pages/Explorecareer/Matriculation/Matriculation"; // Matriculation page
import Graduation from "./pages/Explorecareer/Graduation/Graduation"; // Graduation page
import Intermediate from "./pages/Explorecareer/Intermediate/Intermediate"; // Intermediate page
import ArticleAndAdvice from "./pages/ArticleAndDevice/ArticleAndAdvice"; // Articles and Advice page
// import Login from './pages/Login/LoginPage'; // Login page (commented out)
import LoginPage from "./pages/Login/LoginPage"; // Login page
// import Admin from "./admin/adminprofile/Admin"; // Admin profile page (commented out)
import Admin from "./admin/adminprofile/Admin"; // Admin profile page
// import Admin from './admin/adminprofile/Admin'; // Admin profile page (duplicate commented out)
import EducationSinglePage from "./pages/Explorecareer/Singlepage/EducationSinglePage";

import ExamSinglePage from "./pages/Explorecareer/Singlepage/ExamSinglePage";

import JobSinglePage from "./pages/Explorecareer/Singlepage/JobSinglePage"; // Job Single page

// ****************************************************

// Layout component to manage header and footer visibility
const Layout = ({ children }) => {
  const location = useLocation();
  const hideheaderFooter = location.pathname === "/"; // Check if it's the landing page

  return (
    <>
      {!hideheaderFooter && <Header />} {/* Show header on all pages except landing page */}
      <main>{children}</main> {/* Main content */}
      {!hideheaderFooter && <Footer />} {/* Show footer on all pages except landing page */}
    </>
  );
};

// *******************************************************

/**
 * ScrollToTop component to automatically scroll to the top of the page
 * after navigating to a new route.
 */
function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current pathname

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner
  }, [pathname]); // Trigger effect when pathname changes
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  return null;
}

//************************************************** */

// Main App component
function App() {
  return (
    <>
      {/* Define all the routes for the application */}
      <Router>
        <Layout>
          <ScrollToTop /> {/* Scroll to top on route change */}
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Landingpage />} /> {/* Landing page route */}
            <Route path="/home" element={<Home />} /> {/* Home page route */}
            <Route path="/about" element={<About />} /> {/* About page route */}
            <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
            <Route path="/ai assistant" element={<ProtectedData> <Ai /> </ProtectedData>} /> {/* AI Assistant page route */}
            <Route path="/skill test" element={<ProtectedData> <SkillTest /> </ProtectedData>} /> {/* Skill Test page route */}
            <Route path="/explore career" element={<ExploreCareer />} /> {/* Explore Career page route */}
            {/* Private routes */}
            <Route path="/profile" element={<ProtectedData> <Profile /> </ProtectedData>} /> {/* Profile page route */}
            <Route path="/settings" element={<ProtectedData> <Setting /> </ProtectedData>} /> {/* Settings page route */}
            <Route path="/account" element={<ProtectedData> <Account /> </ProtectedData>} /> {/* Account page route */}
            <Route path="/dashboard" element={<ProtectedData > <Dashboard /> </ProtectedData>} /> {/* Dashboard page route */}
            <Route path="/signup" element={<SignUp />} /> {/* Sign Up page route */}
            <Route path="/article & advice" element={<ArticleAndAdvice />} /> {/* Articles and Advice page route */}
            <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
            <Route path="/admin" element={<ProtectedData> <Admin /> </ProtectedData>} /> {/* Admin profile page route */}
            {/* Dynamic routes for specific career paths */}
            <Route path="/matriculation/:id" element={<Matriculation />} /> {/* Matriculation page route */}
            <Route path="/graduation/:id" element={<Graduation />} /> {/* Graduation page route */}
            <Route path="/intermediate/:id" element={<Intermediate />} /> {/* Intermediate page route */}
            <Route path="/education/:id/post/:postId" element={<EducationSinglePage />} /> {/* Education single page route */}
            <Route path="/exams/:id/post/:postId" element={<ExamSinglePage />} /> {/* Graduation exams page route */}
            <Route path="/jobdetails/:id/post/:postId" element={<JobSinglePage />} /> {/* Job single page route */}
            {/* Add more routes as needed */}
          </Routes>
          <ToastContainer position="bottom-right" autoClose={3000} />
        </Layout>
      </Router>
    </>
  );
}

export default App;
