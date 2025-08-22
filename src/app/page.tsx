"use client";

import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="text-center container mx-auto h-screen flex flex-col justify-center items-center">
        <div>
          <p className="text-white font-extrabold text-3xl lg:text-5xl mb-20">سوالات سالمندان ۳ آقای خطیبی</p>
        </div>
        <Link
          className="px-3 py-1 bg-rose-600 font-extrabold text-3xl lg:text-4xl m-5 rounded-lg 
          hover:bg-slate-500 focus:bg-slate-500 transition-all duration-400"
          href="/random"
        >
          ورود به صفحه سوالات رندم
        </Link>
      </div>
    </>
  );
};

export default Home;
