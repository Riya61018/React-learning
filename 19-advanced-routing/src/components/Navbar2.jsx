import React from "react";
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {

      let navigate = useNavigate()


  return (
    <div className="py-3 px-5 bg-cyan-800">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-500 font-medium py-4 px-4 m-4 rounded courser-pointer active:scale-95"
      >
        Return To Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-500 font-medium py-4 px-4 m-4 rounded courser-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-amber-500 font-medium py-4 px-4 m-4 rounded courser-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
