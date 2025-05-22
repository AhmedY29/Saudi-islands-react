import React from "react";

function Shebara() {
  return (
    <div>
      <img
        className="w-screen h-[100vh] object-cover"
        src="https://objectstorage.me-jeddah-1.oraclecloud.com/n/axqkeco0itrs/b/shebara-assets/o/Shebara_D6_07564_3c0bf8d7d4.jpg"
      />
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
