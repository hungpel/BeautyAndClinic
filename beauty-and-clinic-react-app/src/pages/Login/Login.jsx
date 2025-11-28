import React from "react";
import dark_logo from "../../assets/logo/dark-logo.png";
import google_icon from "../../assets/icon/google.png";
import facebook_icon from "../../assets/icon/facebook.png";
import twitter_icon from "../../assets/icon/twitter.png";

import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required")
});

function Login() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            const res = await fetch("http://localhost:3001/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const resData = await res.json();
            console.log("status:", res.status);
            console.log("response:", resData);

            if (!res.ok) {
                alert(resData.message || "Login failed");
                return;
            }

            localStorage.setItem("token", resData.token);

            alert("Login success!");

            navigate("/profile");
        } catch (error) {
            alert("Server error or BE not running");
        }
    };

    return (
        <section className="max-w-[1440px] mx-auto">
            <div className="lg:min-h-screen flex flex-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-start gap-10 max-w-6xl max-lg:max-w-lg w-full">

                    <div>
                        <img src={dark_logo} alt="" className="py-6" />
                        <h1 className="lg:text-5xl text-4xl font-bold text-[var(--bold-text-color)] leading-tight">
                            We are the best beauty clinic
                        </h1>
                        <p className="text-[15px] text-[#8B8B8B] mt-6 leading-relaxed">
                            Lorem ipsum dolor sit amet...
                        </p>
                        <p className="text-[15px] italic mt-6 lg:mt-12 text-slate-600">
                            Don't have an account?
                            <Link to="/register" className="text-[var(--pink-color)] px-2 font-semibold hover:underline ml-1">
                                Register here
                            </Link>
                        </p>
                    </div>

                    <form className="max-w-md lg:ml-auto w-full" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-[var(--bold-text-color)] text-4xl font-semibold mb-8">
                            Sign in
                        </h2>

                        <div className="space-y-6">

                            <div>
                                <label className="text-sm text-gray-600 font-medium mb-2 block">Email</label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    className="w-full h-[3.9rem] border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6"
                                    placeholder="Enter Email"
                                />
                                {errors.email && (
                                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="text-sm text-gray-600 font-medium mb-2 block">Password</label>
                                <input
                                    type="password"
                                    {...register("password")}
                                    className="w-full h-[3.9rem] border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6"
                                    placeholder="Enter Password"
                                />
                                {errors.password && (
                                    <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
                                )}
                            </div>

                        </div>

                        <div className="mt-12">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full shadow-xl py-3 px-4 text-[15px] font-medium rounded-2xl text-white bg-[var(--pink-color)] hover:shadow-lg hover:scale-105 focus:outline-none cursor-pointer"
                            >
                                {isSubmitting ? "Processing..." : "Log in"}
                            </button>
                        </div>

                        <div className="my-6 flex items-center gap-4">
                            <hr className="w-full border-slate-300" />
                            <p className="text-sm text-slate-900">or</p>
                            <hr className="w-full border-slate-300" />
                        </div>

                        <div className="flex justify-center gap-x-6">
                            <img src={facebook_icon} alt="facebook-icon" className="w-8 cursor-pointer" />
                            <img src={google_icon} alt="google-icon" className="w-8 cursor-pointer" />
                            <img src={twitter_icon} alt="twitter-icon" className="w-8 cursor-pointer" />
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default Login;
