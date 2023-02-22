import React from "react";
import { ButtonList, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonList>
    {tasks.length > 0 && (
      <React.Fragment>
        <StyledButton onClick={toggleHideDone}>
          {hideDone === false ? "Ukryj" : "Pokaż"} ukończone
        </StyledButton>
        <StyledButton
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </StyledButton>
      </React.Fragment>
    )}
  </ButtonList>
);
export default Buttons;