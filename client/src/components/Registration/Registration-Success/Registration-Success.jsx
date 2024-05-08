import React ,{ useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import brand from '../../../assets/brand.svg'
import success from '../../../assets/success.svg'
import './RegistrationSuccess.css'


const RegistrationSuccess = ()=> {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (counter > 0) {
      const interval = setInterval(() => {
        setCounter((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [counter]);

  useEffect(() => {
    if (counter === 0) {
      navigate("/");
    }
  }, [counter, navigate]);

  return (
    <>
      <div className="main">
          <div className="registration-logo">
              <img src={brand} alt="brand" />
          </div>
          <div className="main-center flex flex-col items-center mt-10">
      <div className="space-y-6">
        <div className="congratulations space-y-2">
          <img src={success} alt="success" className="mx-auto" />
          <h2 className=" font-semibold text-center text-3xl text-[#2DA950] font-coveredByYourGrace">
            Success Submitted
          </h2>
        </div>
        <h3 className="success text-center font-semibold text-5xl">Congratulations</h3>
        <p className="text-[#727272] max-w-lg text-center text-xl">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>
      <div className="Redirection absolute bottom-5 text-center text-[#727272]">
        Redirection you to Homepage in <strong style={{color:'#727272'}}>{counter} Seconds</strong>
      </div>
    </div>
      </div>
    </>
  );
}



export default RegistrationSuccess;