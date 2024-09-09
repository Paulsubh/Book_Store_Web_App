import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from "../../node_modules/axios/index";
import toast from '../../node_modules/react-hot-toast/dist/index';
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:5001/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {

                    toast.success('Login Successfull!');
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                    }, 2000)
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                    setTimeout(() => { }, 2000);
                }
            });
    };
    return (<>
        <div className="dark:text-black">
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}
                        method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}>
                            ✕</Link>
                        <h3 className="font-bold text-2xl text-center">Login</h3>
                        {/* Email */}
                        <div className="mt-5 space-y-2">
                            <span>Email</span><br />
                            <input type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-2 border-rounded outline-none"
                                {...register("email", { required: true })}></input>
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required
                            </span>}
                        </div>
                        {/* Password */}
                        <div className="mt-5 space-y-2">
                            <span>Password</span><br />
                            <input type="text"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-2 border-rounded outline-none"
                                {...register("password", { required: true })}></input>
                            <br />
                            {errors.password && <span className="text-sm text-red-500">
                                This field is required</span>}
                        </div>

                        {/* Button */}
                        <div className="flex justify-around mt-3">
                            <button type="submit" className="bg-sky-500 text-white rounded-md px-3 py-2 hover:bg-violet-800">Login</button>
                            <p className="px-3 py-2 text-0.6xl">Not registered yet?{" "}
                                <Link to="/signup" className="text-0.6xl underline text-blue-500 cursor-pointer">
                                    Signup</Link>{" "}
                            </p>
                        </div>
                    </form>

                </div>
            </dialog>
        </div>
    </>
    )
}

export default Login
