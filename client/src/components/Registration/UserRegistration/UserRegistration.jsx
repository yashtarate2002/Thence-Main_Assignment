import React, { useState } from "react";
import Input from "../../Primary/Input.jsx";
import Button from "../../Primary/PrimaryButton.jsx";
import brand from "../../../assets/brand.svg";
import { useNavigate } from "react-router-dom";
import { SlClose } from "react-icons/sl";
import "../Registration-Success/RegistrationSuccess.css";

export default function UserRegistration() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState(false);
 const [isvalid , setIsvalid] = useState(false);


  const formChangeHandler = (event) => {
    setIsvalid(true)
    setFormValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const registrationSubmitHandler = (event) => {
    event.preventDefault();

    const emailValid = isValidEmail(formValues.email);
    

    setError({
      email: !emailValid,
    });

    if (emailValid) {
      navigate("/registration-success");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <>
      <div className="main-registration">
        <div className="close registration-logo">
          <img src={brand} alt="brand" />
          <button onClick={handleClose}>
            <SlClose
              style={{
                height: "30px",
                width: "30px",
                position: "relative",
                top: "30px",
                left: "-35px",
                color: "#CACACA",
              }}
            />
          </button>
        </div>
        <section className="section mt-10 flex flex-col items-center">
          <div className="congratulations space-y-4">
            <h2 className="text-center font-coveredByYourGrace font-semibold text-[#2DA950] text-3xl">
              Registration Form
            </h2>
            <p className="text-center font-semibold text-4xl">
              Start your success <br></br> Journey here!
            </p>
          </div>
          <form
            onSubmit={registrationSubmitHandler}
            className="flex flex-col gap-4 mt-8"
          >
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formValues.name}
              onChange={formChangeHandler}
            />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              error="Enter a valid email address"
              name="email"
              value={formValues.email}
              onChange={formChangeHandler}
              isError={error.email}
            />
            
            <Button
              type="submit"
              style={{ backgroundColor: isvalid ? "#1C1C1C" : "#C9C9C9", color: 'white' }}
              onClick={registrationSubmitHandler}
            >
              Submit
            </Button>
          </form>
        </section>
      </div>
    </>
  );
}
