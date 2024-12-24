
"use client"
import {toast } from 'react-toastify';
import { Rating } from 'react-simple-star-rating';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


interface FormData {
  name: string;
  email: string;
  message: string;
  website: string;
}


const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message"),
    website: yup.string().required().label("website"),
  })
  .required();



const ShopReviewForm = () => {

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
        <div className="postbox-review-form-input mb-25">
          <textarea placeholder="Write Your Review" {...register("message")}></textarea>
          <p className="form_error">{errors.message?.message}</p>
        </div>
        <div className="postbox-review-form-wrap">
          <div className="row">
            <div className="col-lg-4">
              <div className="postbox-review-form-input mb-25">
                <input type="text" placeholder="Your Name" {...register("name")} />
                <p className="form_error">{errors.name?.message}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="postbox-review-form-input mb-25">
                <input type="text" placeholder="Your Email" {...register("email")} />
                <p className="form_error">{errors.email?.message}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="postbox-review-form-input mb-25">
                <input type="text" placeholder="Website" {...register("website")} />
                <p className="form_error">{errors.website?.message}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="postbox-review-rating d-flex align-items-center mb-30">
          <p>Your rating:</p>
          <Rating initialValue={5} size={20} readonly={true} /> 
        </div>
        <div className="postbox-review-submit-btn d-flex align-items-center flex-wrap">
          <button className="tp-btn mr-30 mb-15">Send Your Review</button>
          <div className="form-inner-check d-flex">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault01" />
            <label className="form-check-label" htmlFor="flexCheckDefault01">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default ShopReviewForm;