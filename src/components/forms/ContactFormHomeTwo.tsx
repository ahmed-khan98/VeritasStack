"use client"
import React from 'react';
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    phone: yup.string().required().label("Phone"),
    message: yup.string().required().label("Message"),
  })
  .required();


const ContactFormHomeTwo = () => {

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => {
    const notify = () => toast("Message send successful");
    notify();
    reset();
    console.log(data);
  };



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tp-form-input">
          <input type="text" {...register("name")} placeholder="Your Name" />
          <p className="form_error">{errors.name?.message}</p>
        </div>
        <div className="tp-form-input">
          <input type="text" {...register("email")} placeholder="Email Address" />
          <p className="form_error">{errors.email?.message}</p>
        </div>
        <div className="tp-form-input">
          <input type="text" {...register("phone")} placeholder="Phone Number" />
          <p className="form_error">{errors.phone?.message}</p>
        </div>
        <div className="tp-form-input">
          <textarea {...register("message")} placeholder="Your Comment"></textarea>
          <p className="form_error">{errors.message?.message}</p>
        </div>
        <div className="tp-form-btn">
          <button className="tp-btn" type='submit'>Send Your Message</button>
        </div>
      </form>
    </>
  );
};

export default ContactFormHomeTwo;