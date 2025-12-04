import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { registerApi, loginApi } from "../../api/auth";

import about_img from '../../assets/img/about/about-vision.png'
import user_icon from '../../assets/icon/user.png'
import mail_icon from '../../assets/icon/mail_icon.png'
import password_icon from '../../assets/icon/password.png'

import { Link, useNavigate } from 'react-router-dom'


const API_URL = import.meta.env.VITE_API_URL;

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Please enter your name")
        .min(2, "Name must be at least 2 characters"),
    email: yup
        .string()
        .trim()
        .email("Wrong email")
        .required("Please enter your email"),
    password: yup
        .string()
        .required("Please enter your password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number"
        )
        .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Confirm password different from password.")
        .required("Please enter confirm password"),
    termsAccepted: yup
        .boolean()
        .oneOf([true], "Please accept terms and policy"),
});


function Register() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const registerMutation = useMutation({
        mutationFn: registerApi,
    });

    const loginMutation = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/home1");
        }
    });

    const onSubmit = async (data) => {
        const payload = {
            name: data.name,
            email: data.email,
            password: data.password
        };

        registerMutation.mutate(payload, {
            onSuccess: () => {
                loginMutation.mutate({
                    email: data.email,
                    password: data.password,
                });
            },
            onError: (err) => {
                alert(err.message);
            }
        });
    };

    return (
        <div className="bg-white md:h-screen">
            <div className="grid md:grid-cols-2 items-center gap-8 h-full">

                <div className="max-md:order-1 p-4">
                    <img
                        src={about_img}
                        className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
                        alt="login-image"
                    />
                </div>

                <div className="flex items-center lg:p-12 p-8 bg-pink-400 -mx-8 h-full lg:w-11/12 lg:ml-auto">
                    <form
                        className="max-w-lg space-y-5 w-full mx-auto"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="mb-12">
                            <h1 className="text-4xl font-semibold text-white">Create an account</h1>
                        </div>

                        <div>
                            <label className="text-white font-semibold block mb-2">Full Name</label>
                            <div className="relative flex items-center">
                                <input
                                    {...register("name")}
                                    type="text"
                                    className="w-full bg-white border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6 py-4 text-gray-400 outline-none"
                                    placeholder="Enter name"
                                />
                                <img src={user_icon} alt="" className='w-6 absolute right-2' />
                            </div>
                            {errors.name && <p className="text-red-700 text-shadow-sm text-shadow-gray-200 italic text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="text-white font-semibold block mb-2">Email</label>
                            <div className="relative flex items-center">
                                <input
                                    {...register("email")}
                                    type="text"
                                    className="w-full bg-white border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6 py-4 text-gray-400 outline-none"
                                    placeholder="Enter email"
                                />
                                <img src={mail_icon} alt="" className='w-6 absolute right-2' />
                            </div>
                            {errors.email && <p className="text-red-700 text-shadow-sm text-shadow-gray-200 italic text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="text-white font-semibold block mb-2">Password</label>
                            <div className="relative flex items-center">
                                <input
                                    {...register("password")}
                                    type="password"
                                    className="w-full bg-white border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6 py-4 text-gray-400 outline-none"
                                    placeholder="Enter password"
                                />
                                <img src={password_icon} alt="" className='w-6 absolute right-2' />
                            </div>
                            {errors.password && <p className="text-red-700 text-shadow-sm text-shadow-gray-200 italic text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        <div>
                            <label className="text-white font-semibold block mb-2">Confirm password</label>
                            <div className="relative flex items-center">
                                <input
                                    {...register("confirmPassword")}
                                    type="password"
                                    className="w-full bg-white border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6 py-4 text-gray-400 outline-none"
                                    placeholder="Enter confirm password"
                                />
                                <img src={password_icon} alt="" className='w-6 absolute right-2' />
                            </div>
                            {errors.confirmPassword && <p className="text-red-700 text-shadow-sm text-shadow-gray-200 italic text-sm mt-1">{errors.confirmPassword.message}</p>}
                        </div>

                        <div className="flex items-center mt-8">
                            <input
                                type="checkbox"
                                {...register("termsAccepted")}
                                className="h-4 w-4 shrink-0 rounded"
                            />
                            <label className="text-white ml-3 block text-sm">
                                I accept the
                                <span className="text-blue-300 font-semibold ml-1">Terms and Conditions</span>
                            </label>
                        </div>
                        {errors.termsAccepted && <p className="text-red-700 text-shadow-sm text-shadow-gray-200 italic text-sm mt-1">{errors.termsAccepted.message}</p>}

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-max shadow-xl py-3 px-6 min-w-32 text-sm text-white font-medium rounded-sm bg-blue-400 hover:bg-blue-500"
                            >
                                Register
                            </button>

                            <p className="text-sm text-slate-300 mt-8">
                                Already have an account?
                                <Link to='/login' className="text-blue-300 font-semibold hover:underline ml-1">
                                    Login here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
