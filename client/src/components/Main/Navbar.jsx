import React from "react";
import Button from "../Primary/PrimaryButton.jsx";
import Brand from "../../assets/brand.svg";
import { Link } from "react-router-dom";
import './Main.css'
export default function Navbar() {
  const isSmallScreen = window.innerWidth < 640; // Define the breakpoint for small screens

  return (
    <nav className="p-5 flex justify-between items-center">
      <div>
        <img src={Brand} alt="brand" className="h-10" />
      </div>
      <div className="space-x-5">
        <Link to="/registration">
          <Button styleName="secondary">Get Projects</Button>
        </Link>
        {!isSmallScreen && ( // Render the button only if not on a small screen
          <Button id="Onboard-btn" styleName="primary">Onboard Talent</Button>
        )}
      </div>
    </nav>
  );
}
