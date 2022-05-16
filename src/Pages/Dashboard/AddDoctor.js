import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const { data: specialtys, isLoading } = useQuery("specialty", () =>
    fetch("https://infinite-oasis-14663.herokuapp.com/service").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  const imgbbApiKey = "14d993e2b63688db0ed127eb22f26cc3";
  const url = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;
  const formData = new FormData();

  const onSubmit = (data) => {
    const image = data.img[0];
    formData.append("image", image);
    fetch(url, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img:img
          };
          fetch("https://infinite-oasis-14663.herokuapp.com/doctor", {
            method: "post",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
            body:JSON.stringify(doctor)
          }).then(res=>res.json()).then(added=>{
              if(added.insertedId){
                toast.success(`Added doctor ${data.name} successfully`)
                reset()
              }else{
                  toast.error('something went wrong');
              }
          })
        }
      });
  };

  return (
    <div>
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl text-center font-bold text-secondary uppercase">
          Add a new doctor
        </h1>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("name", {
              required: {
                value: true,
                message: "Name is requires",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full "
            {...register("email", {
              required: {
                value: true,
                message: "Email is requires",
              },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Provide a valid email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            class="select select-bordered w-full"
            {...register("specialty", {
              required: {
                value: true,
                message: "Specialty is requires",
              },
            })}
          >
            {specialtys.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
          <label className="label">
            {errors.specialty?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.specialty.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full "
            {...register("img", {
              required: {
                value: true,
                message: "img is requires",
              },
            })}
          />
          <label className="label">
            {errors.img?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.img.message}
              </span>
            )}
          </label>
        </div>

        <input className="btn w-2/5 mx-auto block" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddDoctor;
