import { useState } from "react";
import { Theme } from "./theme/Theme";
import styled from "styled-components";
import { Button } from "./stories/Button";
import { Dropdown } from "./stories/Dropdown";
import { Footer } from "./stories/Footer";
import { IconType } from "./stories/IconMap";

const AppWrapper = styled.div`
  margin: ${(props) => props.theme.general["margin"]};
`;

function App() {
  const menuState = false
  const [showMenu, setShowMenu] = useState(menuState)

  const toggleDd = () => {
    setShowMenu(!menuState)
    console.log(showMenu, 'menu State')
  }

  const handleClick = () => {
    console.log("you clicked me!");
  };

  return (
    <>
      <Theme>
        <AppWrapper>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <h4>Learn React</h4>
          <Button text="Next" onClick={handleClick} />
          <Dropdown onClick={toggleDd} showDropdown={showMenu}/>
        </AppWrapper>
        <Footer
          mainText="Made by Kate"
          subText="in lockdown 3.0"
          iconRef={IconType.COPYRIGHT}
        />
      </Theme>
    </>
  );
}

export default App;
