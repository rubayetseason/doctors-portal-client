import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="h-[400px] mt-14 flex justify-center items-center">
      <div className="w-96 p-7 mt-14 border-2">
        <h2 className="text-2xl text-center font-bold underline mb-5">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              {" "}
              <span className="label-text">Forgot Password?</span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
        </form>
        <p className="mt-2">
          <small>
            New to Doctor's Portal?{" "}
            <Link to="/signup" className="text-secondary font-semibold">
              Create new account
            </Link>
          </small>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
