'use client'
import React from 'react';
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  Fname: string; 
  Lname: string; 
  email: string; 
  phone: string; 
  Cname: string; 
  subject: string; 
  message: string; 
}

const schema = yup
  .object({
    Fname: yup.string().required().label("First Name"),
    Lname: yup.string().required().label("Last Name"),
    email: yup.string().required().email().label("Email"),
    phone: yup.string().required().label("Phone"),
    Cname: yup.string().required().label("Company Name"),
    subject: yup.string().required().label("Subject"),
    message: yup.string().required().label("Message"),
  })
  .required();


const ContactForm = () => {

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
            <div className="tp-contact-details-form-input mb-20">
              <input type="text" placeholder="First Name" {...register("Fname")} />
              <span><i className="fa-light fa-user"></i></span>
              <p className="form_error">{errors.Fname?.message}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-contact-details-form-input mb-20">
              <input type="text" placeholder="Last Name" {...register("Lname")} />
              <span><i className="fa-light fa-user"></i></span>
              <p className="form_error">{errors.Lname?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-contact-details-form-input mb-20">
              <input type="text" placeholder="Email Address" {...register("email")} />
              <span><i className="fa-light fa-envelope"></i></span>
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-contact-details-form-input mb-20">
              <input type="text" placeholder="Phone Number" {...register("phone")} />
              <span><i className="fa-light fa-phone"></i></span>
              <p className="form_error">{errors.phone?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-contact-details-form-input mb-20">
              <input type="text" placeholder="Company Name" {...register("Cname")} />
              <span><i className="fa-light fa-user"></i></span>
              <p className="form_error">{errors.Cname?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-contact-details-form-input mb-20">
              <input type="text" placeholder="Your Subject" {...register("subject")} />
              <span><i className="fa-sharp fa-light fa-circle-info"></i></span>
              <p className="form_error">{errors.subject?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-contact-details-form-input mb-20">
              <textarea placeholder="Write Your Message" {...register("message")}></textarea>
              <span><i className="fa-light fa-pen"></i></span>
              <p className="form_error">{errors.message?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-contact-details-form-btn">
              <button className="tp-btn">Send a Message</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;