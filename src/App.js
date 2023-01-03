import React, { useState } from "react";
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



function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone = !hideDone);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<List tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone} 
            />
        }
      />
    </Container>
  );
}

export default App;
