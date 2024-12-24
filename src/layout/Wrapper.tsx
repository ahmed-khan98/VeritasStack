"use client";

import { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import { ToastContainer } from 'react-toastify';
import ScrollToTop from "@/components/common/ScrollToTop";
import { useDispatch } from "react-redux";
import { get_cart_products } from "@/redux/features/cartSlice";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: any) => {
  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);
  
    return () => clearTimeout(timer);  
  }, []);

  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(get_cart_products()); ;
    // dispatch(get_wishlist_products()); ;
  }, [dispatch]);

  return <ApolloProvider client={client}>
    {children}
    <ScrollToTop />
    <ToastContainer position="bottom-right"/>
  </ApolloProvider>;
};

export default Wrapper;
