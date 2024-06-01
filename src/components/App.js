import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
    .then(r => r.json())
    .then(data => setQuestions(data))
    .catch(error => {
      console.error("Error: ", error)
    })
  }, [])

  function updateQuestions(newQuestion) {

    const updatedQuestions = [...questions, newQuestion]

    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm updateQuestions={updateQuestions} /> : <QuestionList questions={questions} />}
    </main>
  );
}

export default App;
