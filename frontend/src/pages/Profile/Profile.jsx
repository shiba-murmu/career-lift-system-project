import React, { useEffect } from "react";
import "./profile.css"; // Your custom styles
import IconButtonWithBadge from "../../components/UI/button/IconButtonWithBadge";
import Logout from "../../components/Logout/Logout";
import { isAuthenticated } from "../../components/Auth/isAuthenticate";
import { toast } from "react-toastify";

function MoreContent() {
    return (
        <div>
            <div className=""><Logout /></div>
        </div>
    );
}

function Profile() {
    const isLoggedIn = isAuthenticated();
    const [firstName , setFirstName] = React.useState('');
    const [lastName , setLastName] = React.useState('');
    const BASE_URL = import.meta.env.VITE_API_BASE_URL; // used to send api data
    const fetchUserProfile = async () => {
        const token = localStorage.getItem('access');
        if (!token) {
            console.error("No access token found");
            return;
        }

        try {
            const response = await fetch(`${BASE_URL}/api/users/userdata/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.detail);
                console.error("Error fetching user data:", errorData);
                return;
            }

            const userData = await response.json();
            setFirstName(userData.first_name);
            setLastName(userData.last_name);
            // You can now use this data in your component state
            // setUser(userData); // if using useState
        } catch (error) {
            console.error("Network error:", error);
        }
    };



    // Show toast only once after login
    useEffect(() => {
        const toastShown = localStorage.getItem("profile_toast_shown");

        if (isLoggedIn && !toastShown) {
            toast.success("Welcome to your profile!", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
            });

            localStorage.setItem("profile_toast_shown", "true");
        }
        fetchUserProfile();

    }, [isLoggedIn]);

    return (
        <div className="min-h-screen w-full bg-[#e0e8ff] dark:bg-neutral-900">
            {/* Top Header Section */}
            <div className="w-full h-30 md:h-40 py-10 text-center"></div>

            {/* Profile Image Overlapping */}
            <div className="flex justify-center -mt-20 md:-mt-28">
                <img
                    //   src="/images/Online.jpg"
                    alt="User"
                    className="h-44 w-44 md:h-60 md:w-60 rounded-full md:rounded-[50%]  object-cover shadow-lg shadow-[#031424] dark:shadow-[#2a3c4b]"
                />
            </div>

            {/* Info Section */}
            <div className="px-6 md:px-32 py-5">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl text-center md:text-4xl md:font-bold" style={{ fontFamily: "Open Sans, sans-serif" }}>
                        <span className="text-[#1976d2] dark:text-[#90caf9]">{firstName}</span>
                        <span className="text-[#1976d2] dark:text-[#90caf9]"> {lastName}</span>
                    </h2>
                    <p className="mt-2 text-center text-lg dark:text-amber-400">
                        A passionate software developer.
                    </p>
                    <p className="mt-1 text-center text-base dark:text-blue-400">
                        I am a full-stack web developer with a passion for UI/UX design and writing.
                    </p>

                    {/* <div className="mt-6 flex flex-col md:flex-row justify-center gap-1">
            <IconButtonWithBadge
              text="CONNECTIONS"
              badgeNumber="5"
              badgeColor={"success"}
              btnColor={"primary"}
            />
            <IconButtonWithBadge
              text="ACTIVITES"
              badgeNumber="2"
              badgeColor={"primary"}
              btnColor={"secondary"}
            />
          </div> */}
                </div>
            </div>

            {/* More Content Section */}
            <MoreContent />
        </div>
    );
}

export default Profile;
