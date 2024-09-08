import React from 'react'
import { useForm } from "react-hook-form"
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="flex h-screen items-center justify-center text-pretty">
        <div className="items-center ml-10 md:w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h3 className="font-bold text-2xl text-center dark:text-black">Contact Us</h3>
              {/* Email */}
              <div className="mt-5 space-y-2 dark:text-black">
                <span>Email</span><br />
                <input type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-2 border-rounded outline-none"
                  {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required
                </span>}
              </div>
              {/* Subject */}
              <div className="mt-5 space-y-2 dark:text-black">
                <span>Subject</span><br />
                <input type="text"
                  placeholder="Enter your Subject"
                  className="w-80 px-3 py-2 border-rounded outline-none"
                  {...register("subject", { required: true })} />
                <br />
                {errors.subject && <span className="text-sm text-red-500">This field is required
                </span>}
              </div>
              {/* Message*/}
              <div className="mt-5 space-y-2 dark:text-black">
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                    {...register("message", { required: true })}
                  ></textarea>
                  <br />
                {errors.message && <span className="text-sm text-red-500">This field is required
                </span>}
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-around mt-3">
                <button type="submit" className="btn btn-accent dark:text-white items-center justify-between">Send</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
