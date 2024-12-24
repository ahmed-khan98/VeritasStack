"use client"
import React from 'react';
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  name: string;
  email: string; 
  web: string; 
  message: string; 
}

const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    web: yup.string().required().label("Web Site"), 
    message: yup.string().required().label("Message"),
  })
  .required();


const TeamContactForm = () => {
  
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
        <div className="row">
          <div className="col-lg-6">
            <div className="postbox-review-form-input mb-25">
              <input type="text" {...register("name")} placeholder="Your Name" />
              <p className="form_error">{errors.name?.message}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="postbox-review-form-input mb-25">
              <input type="text" {...register("email")} placeholder="Your Email" />
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="postbox-review-form-input mb-25">
              <input type="text" {...register("web")} placeholder="Website" />
              <p className="form_error">{errors.web?.message}</p>
            </div>
            <div className="col-lg-12">
              <div className="postbox-review-form-input mb-25">
                <textarea {...register("message")} placeholder="Write Your Review"></textarea>
                <p className="form_error">{errors.web?.message}</p>
              </div>
            </div>
            <div className="postbox-review-submit-btn d-flex align-items-center">
              <button className="tp-btn mr-30" type='submit'>Send Your Review</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TeamContactForm;