import React from "react";

function Shura() {
  return (
    <div>
      <img
        className="w-screen h-[100vh] object-cover"
        src="https://www.redseaglobal.com/o/adaptive-media/image/1190816/1920/DJI_0517.jpg?t=1725289289895"
        alt="bg-shura"
      ></img>
      <div className=" flex flex-col justify-center items-center gap-3 text-4xl text-white absolute inset-0 w-full h-screen bg-black/40">
        <div className="flex flex-col gap-4 text-center p-5">
          <h1 className="text-7xl">شُورى</h1>
          <p className="font-light text-base">
            تشبه جزيرة "شورى" بتكوينها الطبيعي شكل الدولفين، حيث تعتبر الجزيرة
            الرئيسية في وجهة "البحر الأحمر".
          </p>
        </div>
      </div>
    </div>
  );
}

export default Shura;
