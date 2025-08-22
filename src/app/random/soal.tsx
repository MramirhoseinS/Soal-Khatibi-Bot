"use client";

import { useEffect, useState } from "react";

interface ISoal {
  p: any;
  children: React.ReactNode;
  id: number;
}

const Soal = ({ p, children, id }: ISoal) => {
  const [doc, setdoc] = useState<any>("");
  const [gozine, setGozine] = useState<any>("");
  const [pasokh, setPashokh] = useState<any>("");

  function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const soal = document.getElementById(`soal${id}`)?.childNodes;
    setdoc(soal);

    const number = [1, 2, 3, 4];

    number.sort(() => Math.random() - 0.5);
    setGozine(number);

    let qValue: any;
    switch (p) {
      case "الف":
        qValue = 1;
        break;
      case "ب":
        qValue = 2;
        break;
      case "ج":
        qValue = 3;
        break;
      case "د":
        qValue = 4;
        break;
      default:
        break;
    }

    const pasokh = number.findIndex((item: any) => {
      return item === qValue;
    });
    setPashokh(pasokh);
  }, []);

  return (
    <>
      <div className="text-white font-semibold">
        <div dir="RTL" className="lg:text-2xl text-xl mb-6">
          <span className="hidden">{children}</span>
          <p className="mb-3">{doc && doc[0].innerText}</p>
          <p className="mb-0.5">الف) {doc && doc[gozine[0]].innerText}</p>
          <p className="mb-0.5">ب) {doc && doc[gozine[1]].innerText}</p>
          <p className="mb-0.5">ج) {doc && doc[gozine[2]].innerText}</p>
          <p className="mb-0.5">د) {doc && doc[gozine[3]].innerText}</p>
        </div>
        <div className="flex flex-row-reverse justify-center items-center pt-1 mb-3 group transition-all duration-300 ">
          <button className=" bg-violet-600 px-3 py-1 rounded-lg lg:text-2xl text-xl focus:bg-violet-400 transition-all duration-300">
            پاسخ صحیح
          </button>
          <span
            className={`h-0 overflow-hidden mr-5 lg:text-2xl text-xl font-bold bg-teal-500 pr-2 pl-1.5 rounded-lg 
            transition-all duration-300 lg:group-focus-within:h-[37px] group-focus-within:h-[30px] flex
            `}
          >
            <span className="pt-1">{pasokh === 0 && "الف"}</span>
            <span>{pasokh === 1 && "ب"}</span>
            <span>{pasokh === 2 && "ج"}</span>
            <span className="pt-0.5">{pasokh === 3 && "د"}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Soal;
