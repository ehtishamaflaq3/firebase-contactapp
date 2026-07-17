import React from "react";
import { IoMdClose } from "react-icons/io";
const Inputmodal = ({ isopen, closemodal, children }) => {
  return (
    <div>
      {isopen && (
        <div className="fixed inset-0 backdrop-blur-sm items-center flex justify-center">
          <div className="bg-white absolute h-80 top-55 flex w-110 ml-20 flex-col rounded-lg">
            <IoMdClose
              className="size-12 cursor-pointer h-15 w-113 flex items-center justify-center pl-90"
              onClick={closemodal}
            />
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Inputmodal;
