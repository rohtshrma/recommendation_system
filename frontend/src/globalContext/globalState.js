import React, { createContext, useState } from "react";

const QuestionContext = createContext();

function QuestionProvider({ children }) {
  const [questionData, setQuestionData] = useState(null);
  return (
    <QuestionContext.Provider value={{ questionData, setQuestionData }}>
      {children}
    </QuestionContext.Provider>
  );
}

export { QuestionProvider, QuestionContext };
