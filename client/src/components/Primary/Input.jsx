import react ,{  ComponentPropsWithoutRef } from "react";
import { MdErrorOutline } from "react-icons/md";



export default function Input({ id, isError, error, ...props }) {
  return (
    <p className="space-y-1">
      <input
        className="px-8 py-5 bg-[#EFEFEF] rounded-full w-80 max-w-lg"
        id={id}
        {...props}
      />
      {isError && (
        <span className="text-[#FF0808] text-sm flex items-center gap-1 pl-4">
          <MdErrorOutline size={18} className="text-[#FF0808]" />
          {error}
        </span>
      )}
    </p>
  );
}
