"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  return (
    <div class="bg-black  w-full h-screen min-h-screen overflow-auto">
      <div className=" relative min-h-full h-full p-5 rounded-lg text-center  w-full md:w-[80%] lg:w-[70%] mx-auto">
        <img
          src="/back_icon.png"
          alt="Close"
          style={{
            zIndex: 999999999,
          }}
          className="absolute z-50 top-6 right-4  md:top-6 md:right-6 w-8 h-8 md:w-14 md:h-14 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <img
          src="/how_to_buy_bg.png"
          className=" absolute inset-0 h-full w-full  "
        />

        <img
          src="/tokenomic_title.png"
          className="absolute top-[15.8%] left-[28.5%] !w-[42%] !h-[11%]  "
        />

        <div className=" absolute top-[36%] w-[90%] md:w-[95%]  mx-auto !h-[55%] overflow-auto ">
          <div className=" w-[60%] md:w-[60%]  mx-auto text-[#FFFFFFE5] font-bold">
            <div className="flex justify-center">
              <img
                src="/tokenomics_body.png"
                className="w-[150px] h-[150px] md:w-[280px] md:h-[280px] z-10"
              />
            </div>
            <div className="text-center space-y-2">
              {/* Total Supply */}
              <div className="text-xl md:text-2xl font-bold text-white flex gap-2 items-center justify-center">
                SUPPLY:
                <div>Glitch Text</div>
              </div>

              {/* Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 !mt-8">
                {/* Tax Box */}
                <div className="relative flex items-center justify-center border-2 border-[#E3B057] rounded-2xl bg-transparent  p-6 shadow-lg">
                  <span className="absolute -right-[15px] -top-[20px] text-orange-400 text-4xl font-bold">
                    <img src="/star.png" />
                  </span>
                  <h2 className="text-white text-lg md:text-xl font-bold font-sans uppercase">
                    TAX 0/0
                  </h2>
                </div>

                {/* Fair Launch Box */}
                <div className="relative flex items-center justify-center border-2 border-[#E3B057] rounded-2xl bg-transparent  p-6   shadow-lg">
                  <span className="absolute -right-[15px] -top-[20px] text-orange-400 text-4xl font-bold">
                    <img src="/star.png" />
                  </span>
                  <h2 className="text-white text-lg md:text-xl font-bold font-sans uppercase">
                    FAIR LAUNCH
                  </h2>
                </div>

                {/* LP Locked Box */}
                <div className="relative flex items-center justify-center border-2 border-[#E3B057] rounded-2xl bg-transparent p-6  shadow-lg">
                  <span className="absolute -right-[15px] -top-[20px] text-orange-400 text-4xl font-bold">
                    <img src="/star.png" />
                  </span>
                  <h2 className="text-white text-lg md:text-xl font-bold font-sans uppercase">
                    LOCKED LP
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
