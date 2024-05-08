import { Link } from "react-router-dom";
import "./Main.css";

export default function Footer() {
  return (
    <div className="mt-10 bg-[#F5F5F5] p-8 rounded-3xl flex flex-col justify-center items-center sm:flex-row sm:justify-between">
      <div className="copyright">
        <p style={{ color: "#1C1C1C", fontFamily: "Manrope", fontWeight: 500, fontSize: "15px" }} className="">
          © Talup {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
      <div className="footer-links space-x-5">
        <Link
          to="/"
          style={{ color: "#1C1C1C", fontFamily: "Manrope", fontWeight: 500, fontSize: "15px" }}
          className="underline underline-offset-1"
        >
          Terms & Conditions
        </Link>
        <Link
          to="/"
          style={{ color: "#1C1C1C", fontFamily: "Manrope", fontWeight: 500, fontSize: "15px" }}
          className="underline underline-offset-1"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
