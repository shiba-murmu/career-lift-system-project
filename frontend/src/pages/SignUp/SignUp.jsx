import React, { useState } from "react";
import { Button } from "@mui/material";
// import Link from "@mui/material";
// import Link from "@mui/material";
import { Link } from "react-router-dom";
// import axios from 'axios'; // 🔥 import axios to send data
import './signup.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
/**
 * Spinner component for loading state
 */
import SpinnerLoading from "../../components/Spinner/SpinnerLoading";

/**
 * 
 * @returns  Alert component that displays success or error messages
 */
import PopupAlert from "../../components/Alerts/Popoup/PopupAlert";
/**
 * 
 * @returns For navigate the page (like redirect)
 */
import { useNavigate } from "react-router-dom";
// 🔥 Importing the useNavigate hook to redirect after successful signup

import { toast } from "react-toastify";
function SignUp() {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL; // used to send api data
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    // 🔥 State for success and error messages
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const [loading, setLoading] = useState(false);

    // 🔥 Form state
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    // 🔧 Handle change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMsg(''); // Reset success message
        setErrorMsg(''); // Reset error message
        // console.log('Form data submitted:', formData);
        // 🔥 Basic validation before sending data to the backend
        if (!formData.first_name || !formData.last_name || !formData.email || !formData.password || !formData.confirm_password) {
            setErrorMsg("All fields are required.");
            return;
        }


        // Basic frontend validation **********************
        const { password, confirm_password, email } = formData;
        if (password !== confirm_password) {
            setErrorMsg("❌ Both password fields must be the same.");
            return;
        } else if (password.length < 6) {
            setErrorMsg("Password must be at least 6 characters long.");
            return;
        } else if (password.length > 20) {
            setErrorMsg("Password must be less than 20 characters long.");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMsg("That doesn’t look like a valid email address. Please try again.");
            return;
        }

        // ************************************************
        // 🔥 Send data to the backend
        setLoading(true);
        
        

        // try {
        //     const response = await fetch(`${BASE_URL}/api/users/register/`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     const data = await response.json();
        //     console.log(data);
        //     if (data.status === 'success') {
        //         // 🔥 Set success message
        //         // setSuccessMsg(data.message);
        //         toast.success(data.message , 
        //             {
        //                 position : "top-right",
        //                 autoClose : 3000,
        //                 theme : "colored"
        //             }
        //         )
        //         // 🔥 Clear form data
        //         setFormData({ first_name: '', last_name: '', email: '', password: '', confirm_password: '' });
        //         // 🔥 Redirect to login page
        //         navigate('/login');
        //     } else {
        //         // 🔥 Set error message
        //         setErrorMsg(data.message);
        //     }
        // } catch (error) {
        //     // 🔥 Handle any errors that occur during the fetch
        //     // console.error("Error during signup:", error);
        //     setErrorMsg("An error occurred while signing up. Please try again later.");
        //     setFormData({ first_name: '', last_name: '', email: '', password: '', confirm_password: '' });
        // } finally {
        //     // 🔥 Set loading state to false
        //     setLoading(false);
        // }
        // // Set loading state to true while processing
    };


    return (
        <>
            {/* Display success message */}
            {errorMsg && (
                <PopupAlert
                    key={errorMsg}
                    type="error"
                    message={errorMsg}
                    headingMessage="Failed!"
                    onClose={() => setErrorMsg("")}
                />
            )}
            {successMsg && (
                <PopupAlert
                    key={successMsg}
                    type="success"
                    message={successMsg}
                    headingMessage="Success!"
                    onClose={() => setSuccessMsg("")}
                />
            )}
            {/* Spinner component */}
            {
                loading && <SpinnerLoading />
            }

            <div className="flex flex-col justify-center items-center md:min-h-screen my-5 md:my-0 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Open sans', fontWeight: 'bold' }}>
                <div className="bg-white dark:bg-[#262626] shadow-2xl dark:shadow-0 rounded-xl p-6 sm:p-10 w-full max-w-md sm:max-w-lg">
                    <h2 className="text-2xl animateText md:text-3xl font-extrabold text-center text-amber-300 mb-6 sm:mb-8">
                        Create Your Account
                    </h2>

                    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-white" htmlFor="first-name">
                                First Name
                            </label>
                            <input
                                className="mt-1 sm:mt-2 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                id="first-name"
                                type="text"
                                placeholder="First name"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-white" htmlFor="last-name">
                                Last Name
                            </label>
                            <input
                                className="mt-1 sm:mt-2 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                id="last-name"
                                type="text"
                                placeholder="Last name"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-white" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="mt-1 sm:mt-2 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                id="email"
                                type="email"
                                placeholder="Email address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-white" htmlFor="password">
                                Password
                            </label>
                            <div className="relative mt-1 sm:mt-2">
                                <input
                                    className="block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-white focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-white" htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <div className="relative mt-1 sm:mt-2">
                                <input
                                    className="block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
                                    id="confirm-password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    name="confirm_password"
                                    value={formData.confirm_password}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-white focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={loading}
                            // style={{ backgroundColor: '#3b82f6' }} // Tailwind blue-500
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                        >
                            {loading ? "Creating Account..." : "Sign Up"}
                        </Button>
                    </form>

                    <p className="text-sm text-center text-gray-600 dark:text-white mt-4 sm:mt-6">
                        Already have an account?{" "}
                        <Link to="/login" >
                            <span className="text-blue-500 font-semibold hover:underline">Login</span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;


























// import React, { useState } from "react";
// import { Button } from "@mui/material";
// import './signup.css'
// // For password show and hide icons here
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';  // For password visibility off
// import VisibilityIcon from '@mui/icons-material/Visibility'; // For password visibility on

// function SignUp() {
//     const [showPassword, setShowPassword] = useState(false);

//     return (
//         <>
//             <div className="flex flex-col justify-center items-center md:min-h-screen my-16 md:my-0 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Open sans', fontWeight: 'bold' }}>

//                 <div className="bg-white  dark:bg-[#262626] shadow-2xl dark:shadow-0 rounded-xl p-6 sm:p-10 w-full max-w-md sm:max-w-lg">
//                     <h2 className="text-2xl animateText  md:text-3xl  font-extrabold text-center text-amber-300 mb-6 sm:mb-8">
//                         Create Your Account
//                     </h2>
//                     <form className="space-y-4 sm:space-y-6">
//                         <div>
//                             <label
//                                 className="block text-sm font-semibold text-gray-700 dark:text-white"
//                                 htmlFor="first-name"
//                             >
//                                 First Name
//                             </label>
//                             <input
//                                 className="mt-1 sm:mt-2 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
//                                 id="first-name"
//                                 type="text"
//                                 placeholder="First name"
//                                 autoComplete="given-name"
//                             />
//                         </div>
//                         <div>
//                             <label
//                                 className="block text-sm font-semibold text-gray-700 dark:text-white"
//                                 htmlFor="last-name"
//                             >
//                                 Last Name
//                             </label>
//                             <input
//                                 className="mt-1 sm:mt-2 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
//                                 id="last-name"
//                                 type="text"
//                                 placeholder="Last name"
//                                 autoComplete="family-name"
//                             />
//                         </div>
//                         <div>
//                             <label
//                                 className="block text-sm font-semibold text-gray-700 dark:text-white"
//                                 htmlFor="email"
//                             >
//                                 Email Address
//                             </label>
//                             <input
//                                 className="mt-1 sm:mt-2 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
//                                 id="email"
//                                 type="email"
//                                 placeholder="Email address"
//                                 autoComplete="email"
//                             />
//                         </div>
//                         <div>
//                             <label
//                                 className="block text-sm font-semibold text-gray-700 dark:text-white"
//                                 htmlFor="password"
//                             >
//                                 Password
//                             </label>
//                             <div className="relative mt-1 sm:mt-2">
//                                 <input
//                                     className="block  w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
//                                     id="password"
//                                     type={showPassword ? "text" : "password"}
//                                     placeholder="********"
//                                     name="password"
//                                     autoComplete="newpassword"
//                                 />
//                                 <button
//                                     type="button"
//                                     className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-white  focus:outline-none"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                 >
//                                     {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//                                 </button>
//                             </div>
//                         </div>
//                         <div>
//                             <label
//                                 className="block text-sm font-semibold text-gray-700 dark:text-white"
//                                 htmlFor="password"
//                             >
//                                 Password
//                             </label>
//                             <div className="relative mt-1 sm:mt-2">
//                                 <input
//                                     className="block  w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
//                                     id="password"
//                                     type={showPassword ? "text" : "password"}
//                                     placeholder="********"
//                                     autoComplete="current-password"
//                                     name="confirmpassword"
//                                 />
//                                 <button
//                                     type="button"
//                                     className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-white  focus:outline-none"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                 >
//                                     {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//                                 </button>
//                             </div>
//                         </div>
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             size="large"
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
//                         >
//                             Sign Up
//                         </Button>
//                     </form>
//                     <p className="text-sm text-center text-gray-600 dark:text-white mt-4 sm:mt-6">
//                         Already have an account?{" "}
//                         <a
//                             href="/login"
//                             className="text-blue-500 font-semibold hover:underline"
//                         >
//                             Log in
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default SignUp;
