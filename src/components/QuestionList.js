import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, getQuestions}) {

  let questionList = questions.map(question => {
    return (
      <QuestionItem key = {question.id} question = {question} getQuestions = {getQuestions}/>
    )
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
