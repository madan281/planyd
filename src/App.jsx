import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const sendEmail = async (foodChoice) => {
    const formData = {
      access_key: "a6c38511-0e1b-46c0-a826-2d832f580d57",
      subject: "Date Plan Response 💌",
      date: selectedDate,
      time: selectedTime,
      food: foodChoice,
      message: `She selected ${foodChoice} on ${selectedDate} at ${selectedTime}`,
    };

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    setPage(5);
  };

  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const [noStyle, setNoStyle] = useState({
    transform: "translate(0px, 0px)",
  });

  const moveNoButton = () => {
    const x = Math.floor(Math.random() * 180) - 90;
    const y = Math.floor(Math.random() * 120) - 60;

    setNoStyle({
      transform: `translate(${x}px, ${y}px)`,
    });
  };

  const isDateTimeSelected = selectedDate !== "" && selectedTime !== "";

  if (page === 7) {
    return (
      <div className="container">
        <div className="card">
          <img src="/cat.gif" alt="Sad Cat" className="gif" />

          <h1>😭 Mission Failed</h1>

          <p>Well... it was worth a shot.</p>
          <p>Thanks for making it this far anyway 🌸</p>

          <button className="yesBtn" onClick={() => setPage(1)}>
            Start Over ↺
          </button>
        </div>
      </div>
    );
  }

  if (page === 6) {
    return (
      <div className="container">
        <div className="card largeCard">
          <h1>🥺 Wait... let&apos;s negotiate</h1>

          <p>Okay okay, what if I make the deal better?</p>

          <div className="foodGrid">
            <button className="foodBtn">☕ Coffee first?</button>
            <button className="foodBtn">🍕 Food included?</button>
            <button className="foodBtn">🌸 You pick the place?</button>
            <button className="foodBtn">🙃 I promise I&apos;ll behave</button>
          </div>

          <button className="yesBtn negotiationBtn" onClick={() => setPage(2)}>
            Okay fine, Yes 🌸
          </button>

          <button className="noFinalBtn" onClick={() => setPage(7)}>
            Still No 😭
          </button>
        </div>
      </div>
    );
  }

  if (page === 5) {
    return (
      <div className="container">
        <div className="card">
          <img src="/dog.gif" alt="Celebration" className="gif" />

          <h1>🎉 Date Approved!</h1>

          <p>Glad you didn&apos;t say no 😮‍💨</p>
          <p>The No button worked overtime for absolutely nothing.</p>
          <p>Be ready by {selectedTime}... I&apos;m coming to get you 🚗✨</p>
          <p>See you soon 🌸</p>

          <button className="yesBtn">❤️ Can&apos;t Wait</button>
        </div>
      </div>
    );
  }

  if (page === 4) {
    return (
      <div className="container">
        <div className="card largeCard">
          <h1>🍽️ Most important question...</h1>

          <p>What are we eating?</p>

          <div className="foodGrid">
            <button className="foodBtn" onClick={() => sendEmail("Pizza")}>
              🍕 Pizza
            </button>

            <button className="foodBtn" onClick={() => sendEmail("Café Date")}>
              ☕ We could go to a café
            </button>

            <button className="foodBtn" onClick={() => sendEmail("Pasta")}>
              🍝 Pasta
            </button>

            <button className="foodBtn" onClick={() => sendEmail("Tacos")}>
              🌮 Tacos
            </button>

            <button className="foodBtn" onClick={() => sendEmail("Sandwiches")}>
              🥪 Sandwiches
            </button>

            <button className="foodBtn" onClick={() => sendEmail("Surprise Me")}>
              🥞 Surprise me
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (page === 3) {
    return (
      <div className="container">
        <div className="card largeCard">
          <h1>📅 So... when are you free?</h1>
          <p>Pick a day and what time 🌸</p>

          <input
            type="date"
            className="dateInput"
            value={selectedDate}
            min={today}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          <div className="timeButtons">
            <button className="timeBtn" onClick={() => setSelectedTime("5 PM")}>
              5 PM — we eating with the retirees 👵👴
            </button>

            <button className="timeBtn" onClick={() => setSelectedTime("6 PM")}>
              6 PM — this is the right answer tbh 😌
            </button>

            <button className="timeBtn" onClick={() => setSelectedTime("7 PM")}>
              7 PM — you&apos;re making me hungry already 🍔
            </button>

            <button className="timeBtn" onClick={() => setSelectedTime("8 PM")}>
              8 PM — we eating dinner or breakfast? 😂
            </button>
          </div>

          {!isDateTimeSelected && (
            <p className="helperText">Pick both a date and time first 👀</p>
          )}

          {isDateTimeSelected && (
            <>
              <p className="selectedText">
                You picked {selectedDate} at {selectedTime}. Solid choice 😌
              </p>

              <button className="yesBtn" onClick={() => setPage(4)}>
                Let&apos;s set the deal →
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  if (page === 2) {
    return (
      <div className="container">
        <div className="card">
          <img src="/spongebob.gif" alt="Spongebob" className="gif" />

          <h1>😳 Wait... you actually said YES?</h1>

          <p>🫣 I genuinely thought you&apos;d spend all day chasing the No button.</p>

          <button className="yesBtn" onClick={() => setPage(3)}>
            Continue →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <img src="/cat.gif" alt="Cute Cat" className="gif" />

        <h1>🌸 Will you go out with me?</h1>

        <div className="buttons">
          <button className="yesBtn" onClick={() => setPage(2)}>
            Yes 🌸
          </button>

          <button
            className="noBtn"
            style={noStyle}
            onMouseEnter={moveNoButton}
            onTouchStart={() => setPage(6)}
            onClick={() => setPage(6)}
          >
            No 🙈
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;