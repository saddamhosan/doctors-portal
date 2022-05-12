import React from 'react';
import {
    useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Register = () => {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification :true});

    const [signInWithGoogle, gUser, gLoading, gError] =
      useSignInWithGoogle(auth);

      const [updateProfile, updating, uError] = useUpdateProfile(auth);

    if (loading || gLoading || updating) {
      return <Loading />;
    }

    if (user || gUser) {
      navigate("/");
    }

    const onSubmit = async(data) => {
      console.log(data);
      await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName :data.name});
    };
    return (
      <div className="w-1/2 mx-auto shadow-xl p-10 my-10 rounded-xl">
        <div>
          <h1 className="text-center text-2xl font-bold text-secondary  ">
            Please Register
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control ">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                class="input input-bordered w-full "
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is requires",
                  },
                })}
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control ">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
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
              value="Register"
            />
          </form>
        </div>
        {(error || gError || uError) && (
          <p className="text-center text-red-600">
            {error?.message} {gError?.message} {uError?.message}
          </p>
        )}

        <p className="text-center mt-4">
          Alread You Have an account?{" "}
          <Link to="/register" className="text-secondary">
            Please Login
          </Link>
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

export default Register;