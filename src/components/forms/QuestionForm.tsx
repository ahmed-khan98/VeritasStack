
"use client";
import React from "react";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  name: string;
  email: string; 
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required().label("Full Name"),
    email: yup.string().required().email().label("Email"), 
    message: yup.string().required().label("Message"),
  })
  .required();

const QuestionForm = () => {

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => {
    const notify = () => toast("Message send successful");
    notify();
    reset();
    console.log(data);
  };

  return (
    <>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="tp-form-input">
          <input {...register("name")} type="text" placeholder="Your Full Name" />
          <p className="form_error mb-0">{errors.name?.message}</p>
        </div>
        <div className="tp-form-input">
          <input {...register("email")}  type="text" placeholder="Email Address" />
          <p className="form_error mb-0">{errors.email?.message}</p>
        </div>
        <div className="tp-form-input">
          <textarea {...register("message")} placeholder="Description"></textarea>
          <p className="form_error mb-0">{errors.message?.message}</p>
        </div>
        <div className="tp-form-btn-wrap mt-50">
          <button className="tp-btn" type='submit'>Send Question <i className="fa-light fa-arrow-right"></i></button>
        </div>
      </form>
    </>
  );
};

export default QuestionForm;