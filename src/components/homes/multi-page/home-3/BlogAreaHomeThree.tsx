/* eslint-disable @next/next/no-img-element */
'use client'
import blog_data from '@/data/BlogData';
import '@/assets/css/Custom.css'
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';

const blog_content = {
  sub_title: "Our Latest Update",
  title: "Check Our Inside Story ",
}
const { sub_title, title } = blog_content

const BlogAreaHomeThree = ({onPageStyle} : any) => {
  const [show,setshow]=useState("com") 
 
  
  return (
    <> 
      <section id="blog-one-page" className={`blog-area pb-40 ${onPageStyle? "pt-60" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-blog-3-wrapper">
                <div className="tp-section tp-section-two text-center mb-50">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="tabs mb-5">
          <nav className="nav">
  <a href="#Com1"  id='Com1' className="nav-item" onClick={()=>setshow("com")} active-color="green">Company Mission</a>
  <a href="#Blue2" id='Blue2' onClick={()=>setshow("blue")} className="nav-item" active-color="blue">Our Vision</a>
  <a href="#Red2" id='Red2' className="nav-item"  onClick={()=>setshow("red")} active-color="red">Our Value</a>
  <span className="nav-indicator"></span>
</nav>

          </div>

          

          
{show=="com"?
       <div className="row mt-4" id='Com' >
       <div className="col-lg-6 col-md-6">
         <div className="tp-blog-two mb-40">
           <div className="tp-blog-two-item">
             <div className=" tp-blog-two-thumb overlay-anim tp-thumb-common fix">
               <div className="tp-thumb-common-overlay wow "></div>
               <Link href="#">
                 <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HNHTechSolutions" />
   
                 <div className="tp-blog-two-thumb-plus">
                   <i className="fa-regular fa-plus"></i>
                 </div>
               </Link>
             
       </div>
      

             </div>
           </div>
         </div>
         <div className="col-md-6 col-lg-6">
       <div className="tp-blog-two-content col-lg-12 col-md-6 col-sm-12">
                 <span>March 23, 2023 _ Touching Lives Through Technologyt </span>
                 <h2 className="tp-blog-two-title">
                   <Link href="#">Fingent’s Four Pillars Of Influence</Link>
                 </h2>
                 <span>Veritas Stack LLC has been providing IT Services since 2015 and has the ability to develop any genus of website or web application for any industry or individual. Our focus to specialize in the combination of high impact design with solid development of user-friendly and functional web  </span>
                 <div className="tp-blog-two-btn mt-3" style={{background:"blue",margin:"0 auto", width:"150px", textAlign:"center", color:"white", padding:"10px", borderRadius:"40px"}}>
                   <Link href="/about" style={{color:"white",}}> About Us</Link>
                 </div>
               </div>
       </div>
     </div>
          :  show=="blue"?
          <div className="row mt-4 " id='Blue' >
          <div className="col-lg-6 col-md-6">
            <div className="tp-blog-two mb-40">
              <div className="tp-blog-two-item">
                <div className=" tp-blog-two-thumb overlay-anim tp-thumb-common fix">
                  <div className="tp-thumb-common-overlay wow "></div>
                  <Link href="#">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HNHTechSolutions" />
      
                    <div className="tp-blog-two-thumb-plus">
                      <i className="fa-regular fa-plus"></i>
                    </div>
                  </Link>
                
          </div>
         
   
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
          <div className="tp-blog-two-content col-lg-12 col-md-6 col-sm-12">
                    <span>March 23, 2023 _ Insight Stands Out </span>
                    <h2 className="tp-blog-two-title">
                      <Link href="#">Share Your Hunger, Heart And Harmony.</Link>
                    </h2>
                    <span>We at Veritas Stack LLC guarantee tailor-built corporate web solutions and web 2.0 applications that not only stand out from the competition, but also helps build your reputation as a leader in your industry.  </span>
                    <div className="tp-blog-two-btn mt-3" style={{background:"blue",margin:"0 auto", width:"150px", textAlign:"center", color:"white", padding:"10px", borderRadius:"40px"}}>
                    <Link href="/about" style={{color:"white",}}> About Us</Link>
                    </div>
                  </div>
          </div>
        </div>
: show=="red"? 
<div className="row mt-4"  id='Red'>
<div className="col-lg-6 col-md-6">
  <div className="tp-blog-two mb-40">
    <div className="tp-blog-two-item">
      <div className=" tp-blog-two-thumb overlay-anim tp-thumb-common fix">
        <div className="tp-thumb-common-overlay wow "></div>
        <Link href="#">
          <img id='' src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HNHTechSolutions" />

          <div className="tp-blog-two-thumb-plus">
            <i className="fa-regular fa-plus"></i>
          </div>
        </Link>
      
</div>


      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-6">
<div className="tp-blog-two-content col-lg-12 col-md-6 col-sm-12">
          <span>March 23, 2023 _ Indulge your curiosity. </span>
          <h2 className="tp-blog-two-title">
            <Link href="#">An Award-Winning Company..</Link>
          </h2>
          <span>To offer reliable and innovative software-based business solutions that strategically help our clients’ build competitive advantage by leveraging cutting edge technology. </span>
          <div className="tp-blog-two-btn mt-3" style={{background:"blue",margin:"0 auto", width:"150px", textAlign:"center", color:"white", padding:"10px", borderRadius:"40px"}}>
          <Link href="/about" style={{color:"white",}}> About Us</Link>
          </div>
        </div>
</div>
</div>
 :''
}
        </div>
      </section>
    </>
    
  );
};

export default BlogAreaHomeThree;