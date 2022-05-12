import React, { useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from './../firebase.init';
import Loading from "./Shared/Loading";

const Login = () => {
    const [email,setEmail]=useState('')
    console.log(email)

    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm();

    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
    
    const navigate=useNavigate()
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, pResetError] =
      useSendPasswordResetEmail(auth);

    if (loading || gLoading || sending) {
      return <Loading />;
    }

    if (user || gUser) {
      navigate(from, { replace: true });
    }

const onSubmit = (data) => {
    console.log(data)
    signInWithEmailAndPassword(data.email,data.password)
};
  return (
    <div className="w-1/2 mx-auto shadow-xl p-10 my-10 rounded-xl">
      <div>
        <h1 className="text-center text-2xl font-bold text-secondary  ">
          Please Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control ">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
            onBlur={(e)=>setEmail(e.target.value)}
              type="email"
              class="input input-bordered w-full "
              {...register("email", {
                required: {
                  value: true,
                  message: "email is requires",
                },
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Provide a valid email",
                },
              })}
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              class="input input-bordered w-full"
              {...register("password", {
                required: {
                  value: true,
                  message: "password is requires",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
            <label class="label">
              {errors.password?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span class="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn w-2/5 mx-auto block"
            type="submit"
            value="Login"
          />
        </form>
      </div>
      {(error || gError || pResetError) && (
        <p className="text-center text-red-600">
          {error?.message} {gError?.message} {pResetError?.message}
        </p>
      )}

      <p className="text-center mt-4">
        New to doctors portal?{" "}
        <Link to="/register" className="text-secondary">
          Create new account
        </Link>
      </p>
      <p className="text-center mt-4">
        Forgat Password?{" "}
        <button
          className="text-secondary"
          onClick={async () => {
            await sendPasswordResetEmail(email);
            alert("Sent email");
          }}
        >
          Reset Password
        </button>
      </p>
      <div class="divider">OR</div>
      <div className="flex justify-center">
        <button onClick={() => signInWithGoogle()} class="btn btn-outline">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
