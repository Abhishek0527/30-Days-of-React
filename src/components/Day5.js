import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Madrid", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which is a React hook?",
    options: ["useFetch", "useState", "onClick", "mapState"],
    answer: "useState",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript",
  },
];

const Day5 = () => {
  // we can use this variable to track the index positions of questions from the array
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  // to store the selected option and after that we can check that correct or not;
  const [score, setScore] = useState(0);
  // each correct answer update the score

  const handleClick = (option) => {
    setSelectedOption(option);

    // after answer each question question should be move to next andselected
    // option should be empty

    setTimeout(() => {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);

      if (option === questions[currentQuestion].answer) {
        setScore((prev)=> prev+1)
      }
    },1000)
  };

  // now if the question reaches the end then it should return quiz completed
  if (currentQuestion >= questions.length) {
    return (
      <div>
        <h1>
          Quiz Completed ✅
        </h1>
        <h2>Score is: {score}/{questions.length }</h2>
        </div>
      )
    }

  const { question, options, answer } = questions[currentQuestion];
  return (
    <div>
      <h1>Quiz App 😎 - Day 5</h1>
      <h2>{question}</h2>

      <div>
        {options.map((option, index) => {
          const isCorrect = option === answer;
          const isSelected = selectedOption === option;
          let bgColor = ""
          if (selectedOption) {
            if (isSelected) {
              bgColor=isCorrect?"green":"red"
            }
          }

          return <button onClick={() => handleClick(option)}
            key={index}
            style={{
              margin:"10px",
              backgroundColor: bgColor,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius:"5px"
            }}
          >
            {option}</button>;
        })}
      </div>
    </div>
  );
};

export default Day5;
