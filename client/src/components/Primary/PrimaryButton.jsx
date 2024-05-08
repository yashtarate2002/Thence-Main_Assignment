import React from "react";

function PrimaryButton({ children, icon: Icon, styleName, ...otherProps }) {
  const styles =
    styleName === "primary"
      ? "bg-[#1C1C1C] hover:bg-[#4E4E4E] text-white"
      : "bg-[#F1F1F1] hover:bg-[#EAEAEA] text-black";
  return (
    <button
      className={`${styles} px-6 py-3 rounded-full ${
        Icon ? "flex gap-3 items-center" : ""
      }`}
      {...otherProps}
    >
      {children}
      <span>{Icon && <Icon />}</span>
    </button>
  );
}

export default PrimaryButton;