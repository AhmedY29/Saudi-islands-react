import React, { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      onClick={() => setOpen(!open)}
      className={`nav-section flex justify-center absolute bottom-0 w-full h-[15%]  ${
        open ? "h-[70%] lg:h-[40%]" : ""
      }   overflow-hidden bg-black/50 text-white py-5 z-10  transition-all duration-200 `}
    >
      <div className="nav-content flex flex-col justify-between items-center w-[80%] gap-10">
        <h1 className="text-4xl">جزر سعودية</h1>
        <div className="cards flex md:justify-between justify-center overflow-auto flex-wrap gap-5 ">
          <Link to={"/"}>
            <div className="card flex justify-center items-center shadow w-[15rem] h-[10rem] bg-cover brightness-50 hover:brightness-100 transition-all rounded-2xl cursor-pointer bg-[url(https://www.neom.com/content/dam/neom/sindalah/sindalah-map-new.png)]">
              <h1 className="text-2xl">سـندالة</h1>
            </div>
          </Link>
          <Link to={"/shebara"}>
            {" "}
            <div className="card flex justify-center items-center shadow w-[15rem] h-[10rem] bg-cover brightness-50 hover:brightness-100 transition-all rounded-2xl cursor-pointer bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSid-wzb1HPq86nkfTMzlKFq0jSuehH5U9AiA&s)]">
              <h1 className="text-2xl">شـيبارة</h1>
            </div>
          </Link>
          <Link to={"/shura"}>
            <div className="card flex justify-center items-center shadow w-[15rem] h-[10rem] bg-cover brightness-50 hover:brightness-100 transition-all rounded-2xl cursor-pointer bg-[url(https://saudipedia.com/saudipedia/uploads/images/2023/08/22/63421.jpg)]">
              <h1 className="text-2xl">شُورى</h1>
            </div>
          </Link>
          <Link to={"/omahat"}>
            <div className="card flex justify-center items-center shadow w-[15rem] h-[10rem] bg-cover brightness-50 hover:brightness-100 transition-all rounded-2xl cursor-pointer bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgho6WHMJfMi9vuNx0zMaZvmqYeH2N4WnSvw&s)]">
              <h1 className="text-2xl">أمهات</h1>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
