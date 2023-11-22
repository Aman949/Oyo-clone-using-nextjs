"use client";
import Image from "next/image";
const Header4 = () => {
  return (
    <div className="flex my-14 justify-between items-center border-2 rounded-lg border-gray-300 px-5">
      <div className="flex items-center">
        <Image
          src="/fire.jpg"
          width={200}
          height={200}
          className="w-20 h-20 rounded-full mr-5"
        />
        <div className="text-xl">
          <p className="font-bold">Get access to execlusive deals </p>
          <p>only the best deals </p>
        </div>
      </div>

      <div className="flex  ">
        <input
          type="email"
          className="px-6 py-3 rounded-lg mr-5  w-80 h-16 outline-none border border-gray-300"
          placeholder="eg.xyx@gmail.com"
        />
        <button type="submit" className="w-32  bg-red-500 text-xl rounded-lg  text-white cursor-pointer">Notify</button>
      </div>
    </div>
  );
};

export default Header4;
