import React from "react";

function Shebara() {
  return (
    <div>
      <video
        className="w-screen h-[100vh] object-cover"
        muted
        autoPlay
        loop
        src="https://objectstorage.me-jeddah-1.oraclecloud.com/n/axqkeco0itrs/b/shebara-assets/o/Shebara_90s_16x9_4_K_English_Only_Music_and_Logo_4e51af11f6.mp4"
      ></video>
      <div className=" flex flex-col justify-center items-center gap-3 text-4xl text-white absolute inset-0 w-full h-screen bg-black/40">
        <div className="flex flex-col gap-4 text-center p-5">
          <h1 className="text-7xl">شـيبارة</h1>
          <p className="font-light text-base">
            يُعد هذا الملاذ الفاخر موطنًا لمنتجع "شيبارة"، وهو أول منتجع تمتلكه
            وتُديره شركة "البحر الأحمر الدولية".
          </p>
        </div>
      </div>
    </div>
  );
}

export default Shebara;
