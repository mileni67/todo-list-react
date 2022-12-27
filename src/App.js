import React from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import List from "./List";
import Section from "./Section";
import Container from "./Container";
import Header from "./Header";


const tasks = [
  { id: 1, content: "przejsc na Reacta", done: false },
  { id: 2, content: "zjesc obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<List tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>
  );
}

export default App;
