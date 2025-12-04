import React from "react";
import dark_logo from "../../assets/logo/dark-logo.png";
import google_icon from "../../assets/icon/google.png";
import facebook_icon from "../../assets/icon/facebook.png";
import twitter_icon from "../../assets/icon/twitter.png";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../api/auth";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });


  const loginMutation = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
        localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);

      alert("Login success!");
      navigate("/");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
            </p>

            <p className="text-[15px] italic mt-6 lg:mt-12 text-slate-600">
              Don't have an account?
              <Link
                to="/register"
                className="text-[var(--pink-color)] px-2 font-semibold hover:underline ml-1"
              >
                Register here
              </Link>
            </p>
            <p className="text-[15px] italic mt-1 lg:mt-4 text-slate-600">
              Access without logging in?
              <Link
                to="/home1"
                className="text-[var(--pink-color)] px-2 font-semibold hover:underline ml-1"
              >
                Click here
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
                disabled={loginMutation.isPending}
                className="w-full shadow-xl py-3 px-4 text-[15px] font-medium rounded-2xl text-white bg-[var(--pink-color)] hover:shadow-lg hover:scale-105 focus:outline-none cursor-pointer"
              >
                {loginMutation.isPending ? "Processing..." : "Log in"}
              </button>
            </div>

            <div className="my-6 flex items-center gap-4">
              <hr className="w-full border-slate-300" />
              <p className="text-sm text-slate-900">or</p>
              <hr className="w-full border-slate-300" />
            </div>

            <div className="flex justify-center gap-x-6">
              <img src={facebook_icon} className="w-8 cursor-pointer" />
              <img src={google_icon} className="w-8 cursor-pointer" />
              <img src={twitter_icon} className="w-8 cursor-pointer" />
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Login;
