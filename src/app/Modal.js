import React, { useState } from "react";

const faqData = [
  {
    question: "What is $SNAKE?",
    answer:
      "$SNAKE is a cryptocurrency token inspired by the wisdom, luck, and cunning of the snake, representing the Year of the Snake in the Chinese zodiac. It’s designed to bring fortune to its holders through a combination of utility, games, and rewards.",
  },
  {
    question: "What Blockchain is $SNAKE on?",
    answer: "$SNAKE is built on the Ethereum blockchain.",
  },
  {
    question: "Is there a Presale?",
    answer: "Detailed instructions are available in the Presale section.",
  },
  {
    question: "How do I buy the Presale?",
    answer: "Detailed instructions are available in the How to Buy section.",
  },
  {
    question: "What makes $SNAKE unique?",
    answer:
      "$SNAKE is not just a token - it’s an ecosystem. From interactive snake-themed games to exclusive token airdrops, $SNAKE combines community, fun, and utility. It also symbolizes the Year of the Snake, aligning with themes of wisdom and fortune.",
  },
];

const steps = [
  {
    number: "1",
    title: "SET UP A CRYPTO WALLET",
    description:
      "To buy $SNAKE, you'll need an Ethereum-compatible wallet like MetaMask, Trust Wallet, or Coinbase Wallet. Download the wallet app, create your account, and securely save your recovery phrase.",
  },
  {
    number: "2",
    title: "FUND YOUR WALLET WITH ETHEREUM (ETH)",
    description:
      "You'll need ETH to buy $SNAKE and to cover gas fees. Purchase ETH on exchanges such as Binance or Coinbase, and transfer it to your wallet using your wallet address.",
  },
  {
    number: "3",
    title: "BUY $SNAKE ON A DECENTRALIZED EXCHANGE (DEX)",
    description:
      "With ETH in your wallet, connect to a DEX like Uniswap. Search for $SNAKE using its contract address to ensure accuracy. Enter the amount of ETH you want to swap, confirm the transaction, and $SNAKE will be sent to your wallet after paying the gas fees.",
  },
  {
    number: "4",
    title: "ADD $SNAKE TO YOUR WALLET",
    description:
      "To see your $SNAKE tokens in your wallet, simply add the $SNAKE contract address to your wallet. Once added, your $SNAKE tokens will appear. Welcome aboard!",
  },
];

const Modal = ({ isOpen, onClose, Heading, Text }) => {
  if (!isOpen) return null;

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (Heading === "FAQs") {
    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <img
            src="/back.png" // Replace with your image path
            alt="Close"
            style={styles.closeIcon}
            onClick={onClose}
          />
          <img
            src="/assets/t3.png"
            style={{
              width: "50%", // Make sure the image fits inside the div
              height: "15%",
              objectFit: "cover",
              marginLeft: "28.5%",
            }}
          />
          <img
            src={"/chinese_border.png"}
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "15%",
            }}
          />
          <div style={styles.faqContainer}>
            {faqData.map((faq, index) => (
              <div key={index} style={styles.faqItem}>
                <div
                  style={styles.question}
                  onClick={() => toggleExpand(index)}
                >
                  <span>{faq.question}</span>
                  <span style={styles.icon}>
                    {expandedIndex === index ? "▲" : "▼"}
                  </span>
                </div>
                <div
                  style={{
                    ...styles.answer,
                    maxHeight: expandedIndex === index ? "200px" : "0",
                    opacity: expandedIndex === index ? 1 : 0,
                    transition: "max-height 0.5s ease, opacity 0.5s ease",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (Heading == "Games") {
    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <img
            src="/back.png" // Replace with your image path
            alt="Close"
            style={styles.closeIcon}
            onClick={onClose}
          />

          <img
            src={"/assets/t6.png"}
            style={{
              width: "50%", // Make sure the image fits inside the div
              height: "15%",
              objectFit: "cover",
              marginLeft: "28.5%",
            }}
          />

          <img
            src={"/chinese_border.png"}
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "15%",
            }}
          />

          <p
            style={{
              textAlign: "left",
              padding: 10,
              paddingLeft: 30,
              paddingRight: 30,
              lineHeight: 3,
            }}
          >
            <p>
              Step into Jin’s temple and take on exciting games for a chance to
              earn exclusive tokens at launch. Solve puzzles, face challenges,
              and unlock hidden treasures as you play your way to rewards. Ready
              to claim your fortune?
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px", // Add spacing between images
                // justifyContent: "center",
                alignItems: "center", // Align items vertically
                marginTop: "20px", // Add some margin for spacing
              }}
            >
              {[
                "/game_1.jpg",
                "/game_2.jpg",
                "/game_3.jpg",
                "/game_4.jpg",
                "/game_5.jpg",
                "/game_1.jpg",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "30px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for better aesthetics
                    transition: "transform 0.3s ease", // Smooth hover animation
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  alt={`Game ${index + 1}`}
                />
              ))}
            </div>
          </p>
        </div>
      </div>
    );
  }

  if (Heading == "How to Buy?") {
    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <img
            src="/back.png" // Replace with your image path
            alt="Close"
            style={styles.closeIcon}
            onClick={onClose}
          />

          <img
            src={Heading === "Games" ? "/assets/t6.png" : "/assets/t4.png"}
            style={{
              width: "50%", // Make sure the image fits inside the div
              height: "15%",
              objectFit: "cover",
              marginLeft: "28.5%",
            }}
          />

          <img
            src={"/chinese_border.png"}
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "15%",
            }}
          />

          <div style={styles.stepsContainer}>
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  ...styles.stepItem,
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
              >
                <div style={styles.stepNumber}>{step.number}</div>
                <div style={styles.stepContent}>
                  <h2 style={styles.stepTitle}>{step.title}</h2>
                  <p style={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (Heading == "Tokenomics") {
    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <img
            src="/back.png" // Replace with your image path
            alt="Close"
            style={styles.closeIcon}
            onClick={onClose}
          />
          <img
            src={
              Heading == "How to Buy?"
                ? "/Snake-Game-6.gif"
                : Heading == "Tokenomics"
                ? "/Snake-Game-5.gif"
                : "/Snake-Game-4.gif"
            } // Replace with your image path
            alt="Close"
            style={styles.htbimg}
            onClick={onClose}
          />

          <img
            src={Heading === "Games" ? "/assets/t6.png" : "/assets/t4.png"}
            style={{
              width: "50%", // Make sure the image fits inside the div
              height: "15%",
              objectFit: "cover",
              marginLeft: "28.5%",
            }}
          />

          <img
            src={"/chinese_border.png"}
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "15%",
            }}
          />

          <p
            style={{
              textAlign: "left",
              padding: 10,
              paddingLeft: 30,
              paddingRight: 30,
              lineHeight: 3,
            }}
          >
            {Text}
          </p>
        </div>
      </div>
    );
  }

  if (Heading == "Presale") {
    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <img
            src="/back.png" // Replace with your image path
            alt="Close"
            style={styles.closeIcon}
            onClick={onClose}
          />

          <img
            src={Heading === "Games" ? "/assets/t6.png" : "/assets/t4.png"}
            style={{
              width: "50%", // Make sure the image fits inside the div
              height: "15%",
              objectFit: "cover",
              marginLeft: "28.5%",
            }}
          />

          <img
            src={"/chinese_border.png"}
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "15%",
            }}
          />

          <p
            style={{
              textAlign: "left",
              padding: 10,
              paddingLeft: 30,
              paddingRight: 30,
              lineHeight: 3,
            }}
          >
            {Text}
          </p>
        </div>
      </div>
    );
  }

  if (Heading === "About Us")
    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <img
            src="/back.png" // Replace with your image path
            alt="Close"
            style={styles.closeIcon}
            onClick={onClose}
          />
          <img
            src={"/assets/t1.png"}
            style={{
              width: "50%", // Make sure the image fits inside the div
              height: "15%",
              objectFit: "cover",
              marginLeft: "28.5%",
            }}
          />
          <img
            src={"/chinese_border.png"}
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "15%",
            }}
          />

          <p
            style={{
              textAlign: "left",
              padding: 10,
              paddingLeft: 30,
              paddingRight: 30,
              lineHeight: 3,
              fontSize: "24px",
            }}
          >
            For twelve long years, Jin, whose name means "gold" in Chinese, has
            coiled in his hidden temple, silently observing the world and
            waiting for the 'Year of the Snake'—a time destined for wisdom,
            transformation, and fortune. Master of patience and strategy, Jin
            has shaped the tides of the crypto world, aligning the bull run with
            this auspicious year. As the embodiment of luck and prosperity, he
            has filled his temple with treasures of wealth and enlightenment,
            now ready to bless those who seek their fortune. Will you embrace
            Jin’s power and claim your place in this era of boundless
            prosperity, or will you let this once-in-a-lifetime opportunity slip
            away?
          </p>
        </div>
      </div>
    );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(5px)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
  },
  modal: {
    background: "transparent",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    position: "relative", // Needed for positioning the close icon
    width: "80%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: "30px",
    right: "-10%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
  faqContainer: {
    marginTop: "20px",
  },
  faqItem: {
    marginBottom: "15px",
    backgroundColor: "rgba(255, 138, 101, 0.1)",
    padding: "15px",
    borderRadius: "10px",
    border: "2px solid #ff8a65",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  faqItemHover: {
    transform: "scale(1.02)",
  },
  question: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ff8a65",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  icon: {
    fontSize: "16px",
    color: "#ff8a65",
  },
  answer: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#fff",
    lineHeight: "1.5",
    overflow: "hidden",
    textAlign: "left",
  },
  stepsContainer: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  stepItem: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255, 138, 101, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid #ff8a65",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    position: "relative",
  },
  stepNumber: {
    backgroundColor: "#ff8a65",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20px",
    marginLeft: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ff8a65",
    marginBottom: "10px",
  },
  stepDescription: {
    fontSize: "16px",
    color: "#fff",
    lineHeight: "1.5",
  },
  htbimg: {
    position: "absolute",
    bottom: "10%",
    left: "-10%",
    width: "270px",
    height: "230px",
    cursor: "pointer",
  },
  closeButton: {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Modal;
