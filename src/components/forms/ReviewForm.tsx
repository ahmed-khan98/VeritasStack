"use client"
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


interface FormData {
  name: string;
  email: string;
  message: string;
}


const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message"),
  })
  .required();



const ReviewForm = () => {

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
            <div className="postbox-review-form-input mb-30">
              <input type="text" {...register("name")} placeholder="Your Name" />
              <p className="form_error">{errors.name?.message}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="postbox-review-form-input mb-30">
              <input type="email" {...register("email")} placeholder="Email Address" />
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="postbox-review-form-input mb-30">
              <textarea {...register("message")} placeholder="Write Your Comment"></textarea>
              <p className="form_error">{errors.message?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="postbox-review-submit-btn mb-30">
              <div className="form-inner-check d-flex">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault01" />
                <label className="form-check-label" htmlFor="flexCheckDefault01">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-inner-btn">
              <button className="tp-btn">Post Your Comment</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ReviewForm;