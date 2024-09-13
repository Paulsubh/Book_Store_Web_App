import React from "react";
import { Link } from 'react-router-dom';
import Login from "./Login";
import { useForm } from "react-hook-form"
import axios from "../../node_modules/axios/index";
import toast from "../../node_modules/react-hot-toast/dist/index";
import { useLocation, useNavigate } from "../../node_modules/react-router-dom/dist/index";

function Signup() {
    const location = useLocation();
    const navigate=useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
        }
        await axios.post("https://book-store-web-app-omega.vercel.app/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Signup Successfull!');
                    navigate(from, {replace:true});
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))
            }).catch((err) => {
                toast.error("Error: " + err.response.data.message);
            })
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">
                                ✕</Link>
                            <h3 className="font-bold text-2xl text-center dark:text-black">Signup</h3>
                            {/* Name */}
                            <div className="mt-5 space-y-2 dark:text-black">
                                <span>Name</span><br />
                                <input type="text"
                                    placeholder="Enter your Name"
                                    className="w-80 px-3 py-2 border-rounded outline-none"
                                    {...register("name", { required: true })} />
                                <br />
                                {errors.name && <span className="text-sm text-red-500">This field is required
                                </span>}
                            </div>
                            {/* Email */}
                            <div className="mt-5 space-y-2  dark:text-black">
                                <span>Email</span><br />
                                <input type="email"
                                    placeholder="Enter your email"
                                    className="w-80 px-3 py-2 border-rounded outline-none"
                                    {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className="text-sm text-red-500">This field is required
                                </span>}
                            </div>
                            {/* Password */}
                            <div className="mt-5 space-y-2  dark:text-black">
                                <span>Password</span><br />
                                <input type="text"
                                    placeholder="Enter your password"
                                    className="w-80 px-3 py-2 border-rounded outline-none"
                                    {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className="text-sm text-red-500">
                                    This field is required</span>}
                            </div>

                            {/* Button */}
                            <div className="flex justify-around mt-3">
                                <button className="bg-sky-500 text-white rounded-md px-3 py-2 hover:bg-violet-800">
                                    Signup</button>
                                <p className="px-3 py-2 text-0.8xl">Already have an account?{" "}
                                    <button className="text-0.6xl underline text-blue-500 cursor-pointer"
                                        onClick={() => document.getElementById("my_modal_3").showModal()}>
                                        Login
                                    </button>{" "}
                                    <Login />
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
