import { Theme } from "./theme/Theme";
import { Button } from "./stories/Button";
import styled from "styled-components";

const AppWrapper = styled.div`
  margin: ${(props) => props.theme.general["margin"]};
`;

function App() {

  const handleClick = () => {
    console.log('you clicked me!')
  }

  return (
    <>
      <Theme>
        <AppWrapper>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <h4>Learn React</h4>
          <Button text="Next" onClick={handleClick}/>
        </AppWrapper>
      </Theme>
    </>
  );
}

export default App;
