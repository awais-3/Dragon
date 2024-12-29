"use client";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import "./page.css";
import Modal from "./Modal";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import BlinkingPoint from "./Blink";
import GlowingEffect from "./GlowingEffect";
import SliderMenu from "./SliderMenu";

function HoverImage({ setHeading, setText, setIsModalOpen }) {
  const [hoverText, setHoverText] = useState(""); // State to store the text to show
  const [showSnake, setShowSnake] = useState(false); // State to toggle the PNG visibility for the snake
  const [showBookStroke, setShowBookStroke] = useState(false); // State to toggle the PNG visibility for the book
  const [isLoading, setIsLoading] = useState(true); // State for managing the preloader visibility
  const [showBoxStroke, setShowBoxStroke] = useState(false); // State to toggle the PNG visibility for the book
  const [showGallery, setShowGallery] = useState(false); // State to toggle the PNG visibility for the book
  const [width, setWidth] = useState(0); // Initialize state with current window width
  const [snakestroke, setsnakestroke] = useState(false);
  const [scrollstroke, setscrollstroke] = useState(false);
  const [BlackSnakeReturnStroke, setBlackSnakeStrokeReturn] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const newAudio = new Audio("/assets/sounds/background.mp3");
    newAudio.loop = true; // Enable looping
    setAudio(newAudio);

    return () => {
      if (newAudio) {
        newAudio.pause(); // Ensure cleanup
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        const scrollWidth = document.body.scrollWidth;
        const clientWidth =
          document.documentElement.clientWidth || window.innerWidth;

        const centerScrollPosition = (scrollWidth - clientWidth) / 2;

        document.body.scrollLeft = centerScrollPosition;
        document.documentElement.scrollLeft = centerScrollPosition;
      }, 0);
    }
  }, []);

  const checkScrollAvailability = () => {
    const scrollLeft =
      document.body.scrollLeft || document.documentElement.scrollLeft;
    const scrollWidth = document.body.scrollWidth;
    const clientWidth = document.documentElement.clientWidth;

    const canScrollLeft = scrollLeft > 0;
    const canScrollRight = scrollLeft + clientWidth < scrollWidth - 1;

    // Only update state if values have changed
    setCanScrollLeft((prev) => (prev !== canScrollLeft ? canScrollLeft : prev));
    setCanScrollRight((prev) =>
      prev !== canScrollRight ? canScrollRight : prev
    );
  };

  // const scrollBody = (direction) => {
  //   const scrollAmount = 100;
  //   const currentScroll =
  //     document.body.scrollLeft || document.documentElement.scrollLeft;

  //   const newScroll =
  //     direction === "left"
  //       ? currentScroll - scrollAmount
  //       : currentScroll + scrollAmount;
  //   console.log(newScroll);
  //   document.body.scrollTo({
  //     left: newScroll,
  //     behavior: "smooth",
  //   });

  //   checkScrollAvailability();
  // };

  useEffect(() => {
    const scrollElement = document.body;

    if (window.innerWidth <= 768) {
      checkScrollAvailability();

      const handleScroll = () => {
        checkScrollAvailability();
      };

      scrollElement.addEventListener("scroll", handleScroll);

      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Set loading time to 3 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const playSound = () => {
    const audio = new Audio("/assets/sounds/gong_sound.mp3");
    audio.volume = 1.0; // Ensure full volume at the start

    audio
      .play()
      .then(() => {
        console.log("Sound is playing");

        setTimeout(() => {
          let fadeOutInterval = setInterval(() => {
            if (audio.volume > 0.1) {
              audio.volume = Math.max(0, audio.volume - 0.1);
            } else {
              clearInterval(fadeOutInterval);
              audio.pause();
              audio.currentTime = 0;
              console.log("Sound stopped after fading out");
            }
          }, 200);
        }, 2000);
      })
      .catch((error) => console.error("Error playing sound:", error));
  };

  if (isLoading) {
    return (
      <div className="preloader">
        <div className="">
          <div className="loader-container">
            <img
              src={"/Snake-Game-4.gif"}
              alt="Close"
              style={{
                height: "220px",
                cursor: "pointer",
              }}
            />
            <h1>ENTERING THE TEMPLE</h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 1,
        cursor: "url(/assets/fire.png), auto",
      }}
    >
      {/* Sound Icons */}
      <div
        style={{
          position: "fixed",
          top: "30px",
          left: "40px",
          cursor: "pointer",
          zIndex: 10000000,
          width: "50px",
          height: "50px",
          background: "white",
          borderRadius: "50%",
          padding: "10px",
        }}
        onClick={toggleSound}
      >
        <img
          src={isPlaying ? "/volume.png" : "/volume-mute.png"}
          alt={isPlaying ? "Sound On" : "Sound Off"}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      {/* Humberger */}
      <div
        style={{
          position: "fixed",
          top: "30px",
          right: "40px",
          cursor: "pointer",
          zIndex: 10000000,
          width: "50px",
          height: "50px",
        }}
        onClick={toggleMenu}
      >
        <img
          src={"/menu.png"}
          alt={"Menu"}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      {/* Slider Menu */}
      <SliderMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {/* Left Arrow */}
      {canScrollLeft && (
        <div
          style={{
            position: "fixed",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1000000,
          }}
          // onClick={() => scrollBody("left")}
        >
          <img
            src={"/assets/arrow.png"}
            alt="Close"
            style={{
              height: "40px",
              width: "40px",
              rotate: "180deg",
              // cursor: "pointer",
            }}
          />
        </div>
      )}
      {/* Right Arrow */}
      {canScrollRight && (
        <div
          style={{
            position: "fixed",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1000000,
          }}
          // onClick={() => scrollBody("right")}
        >
          <img
            src={"/assets/arrow.png"}
            alt="Close"
            style={{
              height: "40px",
              width: "40px",

              // cursor: "pointer",
            }}
          />
        </div>
      )}

      <div
        style={{
          position: "fixed",
          bottom: "4%",
          left: "4%",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          zIndex: 10000000,
        }}
      >
        <a className="" href="https://twitter.com" target="_blank">
          <img
            style={{ width: "40px", height: "40px" }}
            className=""
            src="/ttw.png"
            alt="Twitter"
          ></img>
        </a>
        <a className="" href="https://telegram.com" target="_blank">
          <img
            style={{ width: "40px", height: "40px" }}
            src="/telegram.png"
            alt="Twitter"
          ></img>
        </a>
      </div>
      <div style={{ position: "absolute", top: "72%", left: "32.5%" }}>
        <img
          src={"/the-sand-timer.gif"}
          style={{
            height: "80px",
            width: "80px",
            cursor: "pointer",
          }}
        />
      </div>
      {/* Snake Part */}
      {/* Snake Animation */}
      <div
        style={{
          position: "absolute",
          top: "52%",
          left: "54%",
          transform: "translate(-50%, -50%)",
          width: "22%",
          cursor: "url(/assets/fire.png), auto",
          borderRadius: "15px",
          transition: "all 0.3s ease-in-out",
          zIndex: 2, // Place above other elements
          opacity: showSnake ? 0 : 1, // Hide animation when hovered
        }}
        onClick={() => {
          playSound();
          setHeading("About Us");
          setText(
            `For twelve long years, Snake has coiled in his hidden temple, silently observing the world and awaiting the dawn of the 'Year of the Snake' - a time destined for wisdom, transformation, and unrivalled fortune. Master of patience and strategy, Snake has subtly shaped the tides of the crypto world, aligning the bull run with the Year of the Snake.
As the embodiment of luck and cunning, Snake has imbued his temple with treasures of enlightenment and wealth. These gifts are now ready to bless those who seek their fortune in the crypto realm.
As the temple doors swing open, Snake rises, poised to guide his followers into an era of boundless prosperity. Will you embrace the Snake’s power and claim your fortune, or will you let this once-in-a-lifetime opportunity slip away?`
          );
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("ABOUT");
          setShowSnake(true); // Hide animation on hover
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowSnake(false); // Show animation on hover out
        }}
      >
        <img
          className="snake"
          src="/Final-Snake-2.gif"
          alt="Stroke Snake PNG"
          style={{
            width: "65%",
            height: "65%",
            display: "block",
            borderRadius: "15px",
          }}
        />
      </div>
      {/* Stroke Snake PNG */}
      <img
        className="snake"
        src="/assets/strokeSnake.png"
        alt="Stroke Snake PNG"
        style={{
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "13%",
          borderRadius: "15px",
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF
          opacity: showSnake ? 1 : 0, // Show PNG only when hovered
        }}
      />
      {/* TABLES */}

      {/* Remove table */}
      {/* <img
        className="table"
        src="/assets/table.png"
        alt="Table"
        style={{
          position: "absolute",
          top: "67%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: width <= 768 ? "0%" : "20%",
          zIndex: 5,
        }}
      /> */}
      {/* Book Part */}
      {/* Book Animation */}
      <div
        className="responsive-div-book"
        style={{
          position: "absolute",
          top: "55.5%",
          left: "27%",
          transform: "translate(-50%, -50%)",
          width: width <= 768 ? "14%" : "14%",
          zIndex: 7, // Place above other elements
          transition: "all 0.3s ease-in-out",
          opacity: showBookStroke ? 0 : 1, // Hide animation when hovered
        }}
        onClick={() => {
          playSound();
          setHeading("How to Buy?");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("HOW TO BUY");
          setShowBookStroke(true); // Hide animation on hover
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowBookStroke(false); // Show animation on hover out
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Book.json")}
          loop={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="white" />
      </div>
      {/* ALMARI */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="white" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "56%",
          left: "54%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint />
      </div>
      <div
        style={{
          position: "absolute",
          top: "68%",
          left: "54%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="white" />
      </div>
      {/* BlackSnake */}
      <div
        style={{
          position: "absolute",
          top: "87%",
          left: "54%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="white" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "73%",
          left: "83%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="white" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "31.5%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <GlowingEffect />
      </div>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "8%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <GlowingEffect />
      </div>

      {/* Book Stroke PNG */}
      <img
        src="/assets/bookStroke.png"
        alt="Book Stroke PNG"
        style={{
          position: "absolute",
          top: "53%",
          left: "27%",
          transform: "translate(-50%, -50%)",
          width: "11%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF
          opacity: showBookStroke ? 1 : 0, // Show PNG only when hovered
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "81.5%",
          right: "4%",
          transform: "translate(-50%, -50%)",
          width: "17%",
          zIndex: 3, // Place above other elements
          transition: "all 0.3s ease-in-out",
          opacity: showBoxStroke ? 0 : 1, // Hide animation when hovered
        }}
        onClick={() => {
          playSound();
          setHeading("Tokenomics");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("TOKENOMICS");
          setShowBoxStroke(true); // Hide animation on hover
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowBoxStroke(false); // Show animation on hover out
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Treasure.json")}
          loop={true}
        />
      </div>
      <img
        src="/assets/sandookStroke.png"
        alt="Book Stroke PNG"
        style={{
          position: "absolute",
          top: "80.5%",
          right: "4%",
          transform: "translate(-50%, -50%)",
          width: "17%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF
          opacity: showBoxStroke ? 1 : 0, // Show PNG only when hovered
        }}
      />
      {/* ALMARI */}
      <div
        style={{
          height: "55%",
          width: "12%",
          position: "absolute",
          top: "20%",
          left: "8%",
          zIndex: 1,
        }}
        onMouseOver={() => {
          setHoverText("FAQ's");
          setsnakestroke(true); // Hide animation on hover
        }}
        onMouseOut={() => {
          setHoverText("");
          setsnakestroke(false); // Show animation on hover out
        }}
        onClick={() => {
          playSound();
          setHeading("FAQs");
          setText(
            ` What is $SNAKE/,
$SNAKE is a cryptocurrency token inspired by the wisdom, luck, and cunning of the snake, representing the Year of the Snake in the Chinese zodiac. It’s designed to bring fortune to its holders through a combination of utility, games, and rewards.

/,What Blockchain is $SNAKE on?/,
$SNAKE is built on the Ethereum blockchain.

/,Is there a Presale?/,
Detailed instructions are available in the Presale section

/,How do I buy the Presale?/,
Detailed instructions are available in the How to Buy section

/,What makes $SNAKE unique?/,
$SNAKE is not just a token - it’s an ecosystem. From interactive snake-themed games to exclusive token airdrops, $SNAKE combines community, fun, and utility. It also symbolizes the Year of the Snake, aligning with themes of wisdom and fortune.`
          );
          setIsModalOpen(true); // Show the Modal on click
        }}
      ></div>
      <img
        src="/assets/BlackSnake.png"
        alt="Almari PNG"
        style={{
          position: "absolute",
          top: "49%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          height: "100%",
          opacity: snakestroke ? 1 : 0, // Show PNG only when hovered
        }}
      />
      {/* Table */}
      <div
        style={{
          height: "14%",
          width: "19%",
          position: "absolute",
          top: "60%",
          left: "40%",
          zIndex: 9,
        }}
        onClick={() => {
          playSound();
          setHeading("Presale");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("PRESALE");
          setShowGallery(true); //
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowGallery(false);
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: width <= 768 ? "15%" : "12%",
          right: width <= 768 ? "-35%" : "-18%",
          transform: "translate(-50%, -50%)",
          width: width <= 768 ? "80%" : "70%",
          zIndex: 3,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <img
          src="/assets/light.gif"
          alt="Almari PNG"
          style={{
            transition: "all 0.3s ease-in-out",
            width: width <= 768 ? "80%" : "100%",
            height: "100%",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          height: "20.5%",
          width: "20%",
          top: "77%",
          left: "40%",
          zIndex: 13,
        }}
        onClick={() => {
          playSound();
          setHeading("Games");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("GAMES");
          setBlackSnakeStrokeReturn(true); //
        }}
        onMouseOut={() => {
          setHoverText("");
          setBlackSnakeStrokeReturn(false);
        }}
      ></div>
      <img
        src="/assets/BlackSnake2.png"
        alt="Almari PNG"
        style={{
          position: "absolute",
          top: "86.2%",
          left: "50.1%",
          transform: "translate(-50%, -50%)",
          width: "21.9%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          height: "34%",
          opacity: BlackSnakeReturnStroke ? 1 : 0, // Show PNG only when hovered
          zIndex: 11,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "53.0%",
          right: "-2%",
          transform: "translate(-50%, -50%)",
          width: "7%",
          zIndex: 3, // Place above other elements
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Smoke.json")}
          loop={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "47.2%",
          left: "36.7%",
          transform: "translate(-50%, -50%)",
          width: "12%",
          zIndex: 3, // Place above other elements
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Fire.json")}
          loop={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "47.1%",
          right: "24.7%",
          transform: "translate(-50%, -50%)",
          width: "12%",
          zIndex: 3, // Place above other elements
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Fire.json")}
          loop={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "70.2%",
          left: "5.1%",
          transform: "translate(-50%, -50%)",
          width: "10.5%",
          zIndex: 3, // Place above other elements
          transition: "all 0.1s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Fire_ball.json")}
          loop={true}
        />
      </div>
      {/* Electricity Part */}
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "88%",
          transform: "translate(-50%, -50%) rotate(45deg)", // Apply rotation (tilt) with 45-degree angle
          width: width <= 768 ? "6%" : "6.8%",
          zIndex: 2,
          pointerEvents: "none", // Ensures no hover interaction
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/lightning.json")} // Path to your JSON animation
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
      {/* Bubble Bottles */}
      <div
        style={{
          position: "absolute",
          top: "57.2%",
          left: "3.7%",
          width: "100px",
          height: "105px",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
          }}
        />
        <Lottie
          animationData={require("../../public/assets/Json/Liquid.json")} // Path to your JSON animation file
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
      {/* New Div 1 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "64%",
          width: "10%",
          height: "35%",
          borderRadius: "10px",

          zIndex: 5,
          transition: "all 0.3s ease-in-out",
        }}
        // onClick={() => {
        //   setHeading("Presale");
        //   setText(`NOT PROVIDED YET`);
        //   setIsModalOpen(true); // Show the Modal on click
        // }}
        // onMouseOver={() => {
        //   setHoverText("PRESALE");
        //   setShowGallery(true); //
        // }}
        // onMouseOut={() => {
        //   setHoverText("");
        //   setShowGallery(false);
        // }}
      ></div>
      <img
        src="/assets/gallery_hover.png"
        style={{
          position: "absolute",
          top: "67%",
          left: "50%",
          opacity: showGallery ? 1 : 0,
          transform: "translate(-50%, -67%)",
          width: "100%",
          zIndex: showGallery ? 5 : 0,
        }}
      />
      {/* New Div 2 */}
      <div
        style={{
          position: "absolute",
          top: "75%",
          left: "70%",
          width: "15%",
          height: "20%",
          borderRadius: "10px",
          zIndex: 2,
          transition: "all 0.3s ease-in-out",
        }}
        onClick={() => {
          playSound();
          setHeading("Tokenomics");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => setHoverText("TOKENOMICS")}
        onMouseOut={() => setHoverText("")}
      ></div>
      {/* BOX */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "4.5%",
          width: width <= 768 ? "130px" : "140px",
          height: width <= 768 ? "130px" : "140px",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/ice 2.json")}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
      {/* Centered Hover Text */}
      {hoverText === "ABOUT" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t1.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
      {hoverText === "PRESALE" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t2.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
      {hoverText === "FAQ's" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t3.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
      {hoverText === "TOKENOMICS" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t4.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
      {hoverText === "HOW TO BUY" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t5.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
      {hoverText === "GAMES" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t6.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
    </div>
  );
}
//PRESALE
//FAQ's TOKENOMICS
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heading, setHeading] = useState(""); // State to store the text to show
  const [text, setText] = useState(""); // State to store the text to show

  return (
    <>
      <div className="outer-container">
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          Heading={heading}
          Text={text}
        />
        <div className="inner-container">
          <HoverImage
            setHeading={setHeading}
            setText={setText}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </>
  );
}
