import React, { useState } from 'react'
import about_img from '../../assets/img/about/about-vision.png'
import user_icon from '../../assets/icon/user.png'
import mail_icon from '../../assets/icon/mail_icon.png'
import password_icon from '../../assets/icon/password.png'
// import { Link, useNavigate } from "react-router-dom";
import {Link, useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermAccepted] = useState(false);

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {}
        if (!name.trim()) newErrors.name = "Please enter ur name";
        if (!email.trim()) newErrors.email = "Please enter ur email"
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Wrong email";
        if (!password.trim()) newErrors.password = "Please enter ur password";
        if (!confirmPassword.trim()) newErrors.confirmPassword = "Please enter ur password"
        else if (confirmPassword !== password) newErrors.confirmPassword = "Confirm password different from password.";
        if (!termsAccepted) newErrors.termsAccepted = "Please accept term and policy"
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            if (validate()) {
                const res = await fetch('http://localhost:3001/api/auth/register', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({name, email, password }),
                });
                const data = await res.json();
                console.log("status:", res.status);
                console.log("response:", data);
                if (!res.ok) {
                    alert(data.message || "Register failed");
                    return;
                }

                alert('Đăng ký thành công');
                navigate('/home1')

                console.log("Form submitted:", `name: ${name}; email: ${email}; password: ${password};`)
            };
        } catch (error) {
            alert("Something went wrong");
        }
    }

    return (
        <div className="bg-white md:h-screen">
            <div className="grid md:grid-cols-2 items-center gap-8 h-full">

                <div className="max-md:order-1 p-4">
                    <img src={about_img} className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto" alt="login-image" />
                </div>

                <div className="flex items-center lg:p-12 p-8 bg-pink-400 -mx-8 h-full lg:w-11/12 lg:ml-auto">
                    <form className="max-w-lg space-y-5 w-full mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-12">
                            <h1 className="text-4xl font-semibold text-white">Create an account</h1>
                        </div>      

                        <div>
                            <label className="text-white font-semibold block mb-2">Full Name</label>
                            <div className="relative flex items-center">
                                <input name="name" type="text" required className="w-full bg-white w-full border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6 py-4 text-gray-400 border-b focus:border-white outline-none" 
                                placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                                <img src={user_icon} alt="" className='w-6 absolute right-2'/>
                            </div>
                            {errors.name && (
                                <p className="text-red-700 text-shadow-lg text-shadow-black-300 tracking-[0.05rem] italic text-sm mt-1 text-left">
                                {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="text-white font-semibold block mb-2">Email</label>
                            <div className="relative flex items-center">
                                <input name="email" type="text" required className="w-full bg-white w-full border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6 py-4 text-gray-400 border-b focus:border-white outline-none"
                                placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <img src={mail_icon} alt="" className='w-6 absolute right-2'/>
                            </div>
                            {errors.email && (
                                <p className="text-red-700 text-shadow-lg text-shadow-black-300 tracking-[0.05rem] italic text-sm mt-1 text-left">
                                {errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="text-white font-semibold block mb-2">Password</label>
                            <div className="relative flex items-center">
                                <input name="name" type="password" required className="w-full bg-white w-full border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6 py-4 text-gray-400 border-b focus:border-white outline-none"
                                placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <img src={password_icon} alt="" className='w-6 absolute right-2'/>
                            
                            </div>
                            {errors.password && (
                                <p className="text-red-700 text-shadow-lg text-shadow-black-300 tracking-[0.05rem] italic text-sm mt-1 text-left">
                                {errors.password}
                                </p>
                            )}
                        </div>
                        <div>
                        <label className="text-white font-semibold block mb-2">Confirm password</label>
                            <div className="relative flex items-center">
                                <input name="name" type="password" required className="w-full bg-white w-full border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6 py-4 text-gray-400 border-b focus:border-white outline-none"
                                placeholder="Enter confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                <img src={password_icon} alt="" className='w-6 absolute right-2'/>
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-700 text-shadow-lg text-shadow-black-300 tracking-[0.05rem] italic text-sm mt-1 text-left">
                                {errors.confirmPassword}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center mt-8">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" 
                                onChange={() => setTermAccepted(!termsAccepted)}
                            />
                            <label htmlFor="remember-me" className="text-white ml-3 block text-sm">
                                I accept the <a href="javascript:void(0);" className="text-blue-300 text-shadow-lg font-semibold hover:underline ml-1">Terms and Conditions</a>
                            </label>
                        </div>
                        {errors.termsAccepted && (
                            <p className="text-red-700 text-shadow-lg text-shadow-black-300 tracking-[0.05rem] italic text-sm mt-1 text-left">
                            {errors.termsAccepted}
                            </p>
                        )}
                        
                        <div className="mt-8">
                            <button type="button" onClick={handleRegister}
                                className="w-max shadow-xl py-3 px-6 min-w-32 text-sm text-white font-medium rounded-sm bg-blue-400 hover:bg-blue-500 focus:outline-none cursor-pointer">
                                    Register
                            </button>
                            <p className="text-sm text-slate-300 mt-8">Already have an account? <Link to='/login' className="text-blue-300 font-semibold hover:underline ml-1 text-shadow-lg">Login here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
