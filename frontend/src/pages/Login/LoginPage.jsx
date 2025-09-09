import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import BackgroundParticles from "../../components/UI/particle/BackgroundParticles";
import { useState } from "react";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; // For password visibility off
import VisibilityIcon from "@mui/icons-material/Visibility"; // For password visibility on

import PopupAlert from "../../components/Alerts/Popoup/PopupAlert";

import SpinnerLoading from "../../components/Spinner/SpinnerLoading";




function LoginPage() {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    // State to manage password visibility
    const [error, setError] = useState(''); // State for error messages
    const [success, setSuccess] = useState(''); // State for success messages
    const [loading, setLoading] = useState(false);

    const [spinnerLoading, setSpinnerLoading] = useState(false);


    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Function to handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess('');  // reset success message
        setError('');  // reset error message

        // basic validation before sending the data to the backend

        if (!formData.email || !formData.password) {
            setError('Please fill in all fields.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        setLoading(true); // Set loading state to true
        // If validation passes, proceed with the API call
       // login credentials
    }
    return (
        <>
            <BackgroundParticles />
            {error && (
                <PopupAlert
                    open={true}
                    message={error}
                    headingMessage="Error"
                    onClose={() => setError('')}
                />
            )}
            {success && (
                <PopupAlert
                    open={true}
                    message={success}
                    headingMessage="Success"
                    onClose={() => setSuccess('')}
                />
            )}
            <section
                className="h-[60vh] relative  p-3 md:p-0 md:h-screen  flex items-center justify-center"
                style={{ fontFamily: "Open sans", fontWeight: "bold" }}
            >
                <div className="bg-white dark:bg-neutral-800 dark:shadow-none shadow-neutral-500 rounded-lg shadow-lg p-13 w-full md:w-1/4">
                    <h1
                        className="md:text-5xl text-4xl font-bold mb-6 text-center text-[#1976d2] dark:text-[#90caf9]"
                        style={{ fontFamily: "Open Sans, sans-serif" }}
                    >
                        Login
                    </h1>
                    <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm md:text-sm md:font-medium"
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="p-2 placeholder:text-gray-400 placeholder:placeholder-opacity-50 rounded-sm md:rounded-md border-1 md:border-2 border-gray-300 w-full required"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm md:text-sm font-medium mb-2"
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    type={showPassword ? "text" : "password"}
                                    className="p-2 placeholder:text-gray-400 placeholder:placeholder-opacity-70 rounded-sm md:rounded-md border-1 md:border-2 border-gray-300 w-full required"
                                />
                                <button
                                    type="button"
                                    aria-label="toggle password visibility"
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
                            color="primary"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </Button>
                        <p className="text-center text-sm">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-blue-500 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
}

export default LoginPage;
