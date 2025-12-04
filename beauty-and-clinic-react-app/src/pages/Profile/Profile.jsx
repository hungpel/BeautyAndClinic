import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

function Profile() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: user, isLoading, isError, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
        const res = await fetch(`${API_URL}/api/auth/profile`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        if (!res.ok) throw new Error("Failed to fetch profile");
        return res.json();
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    queryClient.removeQueries(["profile"]);
    navigate("/login");
  };

  if (isLoading) return <p>Loading profile...</p>;
  if (isError) return <p>Error: {error.message}</p>;

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
        <Link
          to="/"
          className="mt-6 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Home
        </Link>
        <button
          onClick={handleLogout}
          className="mt-6 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
