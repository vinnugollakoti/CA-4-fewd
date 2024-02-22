import React, { useState, useEffect } from "react";
import Questions from "../questions";
import { useNavigate } from "react-router-dom";

export default function QuestionBox() {
  const [highlight, setHighlight] = useState("black");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = Questions[currentQuestionIndex];
  const [score, setScore] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#abd1c6");
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const Modes = (event) => {
    if (event.target.checked) {
      setBackgroundColor("#00302d"); // Change to dark mode color
    } else {
      setBackgroundColor("#abd1c6"); // Change to light mode color
    }
  };

  const handleHighlight = () => {
    setHighlight("#FFA500");
  };

  const removeHighlight = () => {
    setHighlight("black");
  };

  // const chooseOption = (optionText, isCorrect) => {
  //   if (currentQuestionIndex === 4) {
  //     console.log("No more questions available");
  //     navigate(`/result/${score + 1}`);
  //   } else {
  //     if (isCorrect) {
  //       setScore((prevScore) => prevScore + 1);
  //     }
  //     setCurrentQuestionIndex((prevIndex) =>
  //       Math.min(prevIndex + 1, Questions.length - 1)
  //     );
  //   }
  // };
  const chooseOption = (TrueFalse) => {
    console.log(TrueFalse)
    if (currentQuestionIndex < 4) {
      if(TrueFalse === true) {
        setScore((prev) => prev + 1)
      }
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      console.log("no more questions are there")
      return navigate(`/result/${TrueFalse ? score + 1 : score}`)
    }
  };

  const kalviumTextColor = backgroundColor === "#abd1c6" ? "#014441" : "white";

  return (
    <div>
      <nav className="nav">
        <div className="nav-contents">
        <div className="kalvium" style={{ color: kalviumTextColor }}>
            <b>Kalvium</b>
          </div>
          <div className="btn-container">
            <svg
              viewBox="0 0 16 16"
              class="bi bi-sun-fill"
              fill="currentColor"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                color="red"
              ></path>
            </svg>
            <label class="switch btn-color-mode-switch">
              <input
                value="1"
                id="color_mode"
                name="color_mode"
                type="checkbox"
                onChange={Modes}
              />
              <label
                class="btn-color-mode-switch-inner"
                data-off="Light"
                data-on="Dark"
                for="color_mode"
              ></label>
            </label>
            <svg
              viewBox="0 0 16 16"
              class="bi bi-moon-stars-fill"
              fill="currentColor"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                color="orange"
              ></path>
              <path
                d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                color="black"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
      <div className="main-box">
        <h3 className="question-no">Question {currentQuestionIndex + 1} out of 5</h3>
        <h2 style={{ color: highlight }} className="question">{currentQuestion.text}</h2>
        <div className="options-div">
          {currentQuestion.options.map((option, index) => (
            <div
              className="options"
              key={index}
              onClick={() => chooseOption(option.isCorrect)}
            >
              {option.text}
            </div>
          ))}
        </div>
        <div className="highlight-btn">
          <button className="highlight" onClick={handleHighlight}>
            highlight
          </button>
          <button className="highlight" onClick={removeHighlight}>
            Remove highlight
          </button>
        </div>
      </div>
    </div>
  );
}
