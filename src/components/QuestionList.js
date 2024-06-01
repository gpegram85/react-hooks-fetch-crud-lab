import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {

  const [updatedQuestions, setUpdatedQuestions] = useState(questions)

  useEffect(() => {
    setUpdatedQuestions(questions)
  }, [questions])

  function onDelete(questionId) {
    setUpdatedQuestions(updatedQuestions.filter((question) => question.id !== questionId))
  }

  const questionList = updatedQuestions.map((question) => (
    <QuestionItem question={question} key={question.id} onDelete={() => onDelete(question.id)}/>
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
