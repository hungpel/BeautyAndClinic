import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/api/auth/profile`, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
        })
        .then(res => res.json())
        .then(data => {setUser(data);})
        .catch(err => console.log(err));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
        setDropdownOpen(false);
        navigate("/login");
    };

    if (!user) return <p>Loading profile...</p>;

    return (
        <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold text-[var(--bold-text-color)] mb-8">USER PROFILE</h1>

            <div className="p-8 bg-white shadow-lg rounded-xl max-w-lg w-full border border-gray-200">
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 font-medium">
                        <span className="font-semibold text-gray-900">ID:</span> {user.id}
                    </p>
                    <p className="text-lg text-gray-700 font-medium">
                        <span className="font-semibold text-gray-900">Email:</span> {user.email}
                    </p>
                    <p className="text-lg text-gray-700 font-medium">
                        <span className="font-semibold text-gray-900">Name:</span> {user.name}
                    </p>
                </div>
            </div>
            <div className="flex gap-10">
                <Link to='/' className="mt-6 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Home
                </Link>
                <Link to='/Login' className="mt-6 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Sign Out
                </Link>

            </div>

        </div>
    );
}

export default Profile;
