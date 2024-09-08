import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (<>
        <div className="dark:text-black">
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}
                    method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").closest()}>
                            ✕</Link>
                        <h3 className="font-bold text-2xl text-center">Login</h3>
                        {/* Email */}
                        <div className="mt-5 space-y-2">
                            <span>Email</span><br />
                            <input type="email"
                                placeholder="Enter your email" 
                                className="w-80 px-3 py-2 border-rounded outline-none"
                                {...register("email", { required: true })}></input>
                                <br/>
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
                                <br/>
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
