import Question from "./Question";
import { useState } from "react";

const Questions = ({ questions }) => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            isOpen={question.id === openQuestionId}
            toggleOpen={() => {
              if (question.id === openQuestionId) {
                setOpenQuestionId(null);
              } else {
                setOpenQuestionId(question.id);
              }
            }}
          />
        );
      })}
    </section>
  );
};
export default Questions;
