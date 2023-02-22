import React, { useState } from "react";
import { StyledForm, Input, AddButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();
    if (!contentTrimmed) {
      return;
    }
    addNewTask(contentTrimmed);
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <AddButton>Dodaj zadanie</AddButton>
    </StyledForm>
  );

};

export default Form;
