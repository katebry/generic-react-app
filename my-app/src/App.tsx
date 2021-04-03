import { Theme } from "./theme/Theme";
import { Button } from "./stories/Button";
import styled from "styled-components";

const AppWrapper = styled.div`
  margin: ${(props) => props.theme.general["margin"]};
`;

function App() {
  return (
    <>
      <Theme>
        <AppWrapper>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <h4>Learn React</h4>
          <Button text="Next" />
        </AppWrapper>
      </Theme>
    </>
  );
}

export default App;
