import React from "react";

function Omahat() {
  return (
    <div>
      <img
        className="w-screen h-[100vh] object-cover"
        src="https://www.redseaglobal.com/o/adaptive-media/image/1151766/1920-2x/EJHRZ_Water_Villas_Aerial_11zon.jpg?t=1723020422092"
        alt="bg-Omahat"
      ></img>
      <div className=" flex flex-col justify-center items-center gap-3 text-4xl text-white absolute inset-0 w-full h-screen bg-black/40">
        <div className="flex flex-col gap-4 text-center p-5">
          <h1 className="text-7xl">جزيرة أمهات</h1>
          <p className="font-light text-sm">
            تضم جزيرة "أمهات" اثنان من أكثر منتجعات وجهة "البحر الأحمر" تميزًا،
            منتجع "سانت ريجس البحر الأحمر" ومنتجع "نجومه، ريتز- كارلتون ريزيرف"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Omahat;
