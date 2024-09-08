import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import UsersList from "./usersList";

export default function UsersValidation() {
  const [users, setUsers] = useState([]);

  const validation = Yup.object().shape({
    firstName: Yup.string().required("Write First name "),
    lastName: Yup.string().required("Write Last name"),
    userName: Yup.string().required("Write User name"),
    email: Yup.string().required("Write Email").email("Email is invalid"),
    password: Yup.string()
      .required("Write Password")
      .min(8, "Password must be 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validation),
  });

  const onSubmit = (data) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...data, id: Date.now()},
    ]);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input {...register("firstName")} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          <label>Last Name</label>
          <input {...register("lastName")} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div>
          <label>User Name</label>
          <input {...register("userName")} />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>

        <div>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Password</label>
          <input {...register("password")} type="password" />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">Save Data</button>
      </form>

      <h1>List of Users</h1>
      <UsersList users={users} />
    </div>
  );
}
