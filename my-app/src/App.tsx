import { useState } from "react";
import { Theme } from "./theme/Theme";
import styled from "styled-components";
import { Button } from "./stories/Button";
import { Form } from "./Form";
import { Footer } from "./stories/Footer";
import { IconType } from "./stories/IconMap";
import * as Yup from "yup"

const AppWrapper = styled.div`
  margin: ${(props) => props.theme.general["margin"]};
`;

function App() {
  const menuState = false;
  const [showMenu, setShowMenu] = useState(menuState);

  const handleSubmit = () => {
    console.log("you clicked me!");
  };

  const initialValues  = {
    test: ''
  }

  const testSchema = Yup.object().shape({
    test: Yup.string().min(8, 'min of 8 characters allowed').max(12, 'max of 12 characters allowed').required('field is required')
  })

  return (
    <>
      <Theme>
        <AppWrapper>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <h4>Learn React</h4>
          <Form
            initialValues={initialValues}
            validationRules={testSchema}
            onSubmit={handleSubmit}
          >
            {/* @ts-ignore */}
            {(formContext) => (
              <form onSubmit={formContext.handleSubmit}>
                {!formContext.isValid && formContext.submitCount > 0 ? (
                  <h2>error</h2>
                ): null}
                <input
                  name="test"
                  id="test"
                  onChange={formContext.setFieldValue}
                  onBlur={formContext.handleBlur}
                />
                <Button text="Next" type="submit" />
              </form>
            )}
          </Form>
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
