"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const router = useRouter();
  // Define an array of objects for games
  const games = [
    {
      src: "/game_1.jpg",
      title: "Jin's Battle Arena",
      status: "playNow",
    },
    {
      src: "/game_2.jpg",
      title: "Jin's Treasure Hunt",
      status: "comingSoon",
    },
    {
      src: "/game_3.jpg",
      title: "Jin's Puzzle Challenge",
      status: "comingSoon",
    },
    {
      src: "/game_4.jpg",
      title: "Jin's Adventure",
      status: "playNow",
    },
    {
      src: "/game_5.jpg",
      title: "Jin's Maze",
      status: "comingSoon",
    },
    {
      src: "/game_6.png",
      title: "Jin's Final Quest",
      status: "comingSoon",
    },
  ];

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
          src="/games_title.png"
          className="absolute top-[15.8%] left-[28.5%] !w-[42%] !h-[11%]  "
        />

        <div className=" absolute top-[37%] w-[90%] md:w-[97%]  mx-auto !h-[50%] overflow-auto ">
          <div className=" w-[60%] md:w-[65%]  mx-auto ">
            <p className=" text-center !text-[15px] font-bold max-w-[650px] mx-auto ">
              Step into Jin’s temple and take on exciting games for a chance to
              earn exclusive tokens at launch. Solve intricate puzzles, face
              daring challenges, and unlock hidden treasures as you journey
              through this immersive experience. Each step brings you closer to
              rewards and a wealth of fortune. Are you ready to claim your
              destiny?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {games.map((game, index) => {
                return (
                  <div className="relative" key={index}>
                    <img
                      src={game.src}
                      alt={game.title}
                      className="w-[300px] h-[228px] rounded-[25px] object-fill shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                    />
                    <div className="text-[20px] mt-2">{game.title}</div>
                    {game.status === "comingSoon" ? (
                      <button className="text-[#F59600] border-[1px] rounded-[8px] border-[#E3B057] border-solid px-1 hover:bg-[#E3B057] hover:text-white">
                        Coming Soon
                      </button>
                    ) : (
                      <button
                        className="text-[#F59600] border-[1px] rounded-[8px] border-[#E3B057] border-solid px-1 hover:bg-[#E3B057] hover:text-white"
                        onClick={() => router.push(`/play/${game.title}`)} // Example navigation for Play Now
                      >
                        Play Now
                      </button>
                    )}
                    <div className="absolute -right-[5px] -top-[10px]">
                      <img src="/star.png" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
