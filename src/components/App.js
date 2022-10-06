import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  const [id, setID] = useState(0)

  useEffect(() => {
    getQuestions()
  }, [id]);

  function getQuestions() {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((json) => {
        setQuestions(json);
        console.log(json)
        let res = json.length != 0 ? json[json.length - 1].id + 1 : 0
        setID(res)
      });
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm id = {id} setID = {setID}/> 
                          : 
                          <QuestionList questions = {questions} getQuestions = {getQuestions}/>}
    </main>
  );
}

export default App;
