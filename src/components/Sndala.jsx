import React from "react";

import SndalaVid from "../assets/Sndala.mp4";

function Sndala() {
  return (
    <div>
      <img
        className="w-screen h-[100vh] object-cover"
        src="https://www.neom.com/content/dam/neom/sindalah/sindalah-map-new.png"
      />
      <div className=" flex flex-col justify-center items-center text-4xl text-white absolute inset-0 w-full h-screen bg-black/40">
        <div className=" flex flex-col gap-4 text-center p-5">
          <h1 className="text-7xl">سـندالة</h1>
          <p className="font-light text-base">
            جزيرة سندالة وجهة مثالية للسياحة البحرية الفاخرة، حيث يتناغم جمال
            الطبيعة فيها مع التصميم الهندسي المستدام والفن المعماري والتقنية
            المتطورة.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sndala;
