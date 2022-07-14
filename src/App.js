
// to use JSX in expression, we must assign it to the capital variable first (better way).

import Button from './Button';
import { Heading,Paragraph } from './HeadingParagraph';
import React from 'react'
import './App.css';
{/*To import Button Component, we must have this component elsewhere, so I have created Button.js in same folder */}

function App() {
  return (
    <div className="App">
      {/* After compilation, JSX provides synatic sugar of React.createElement(component,props,...children) */}
      <button color="blue" shadowSize={2}>
        Click Me
      </button>
      {/*The above code is transformed to this: */}
      {/*
      React.createElement(
        MyButton,
        {color: 'blue', shadowSize: 2},
        'Click Me'
      )
      */}
      {/*Therefore, importing react is necessary. */}
      {/* 
        * When the first letter of JSX is capitaised, it indicates that this is react component.
        * when not, it will remain as JSX tag, look up button tag, its first letter is small and it is JSX tag.
        * If our component starts with lowercase, we must assign it to capitalized variable before using that coponent.
        * We can also refer to a React component using dot-notation from within JSX. This is useful when we have many
          component in single module.
        */}
      <Button /> {/*This Button is a component. To use this component here, we must import it first. Look top for
                   import statement for this 
                  * Does not have to use dot operator because only one component is exported from button.js file.
                  * OR, we can destructer the component while importing. Like this:
                  * import { Heading,Paragraph } from './HeadingParagraph'; (this is actauly imported above)
                  * Destructuring would be better option
                  */}
      <Heading/>
      <Paragraph/>
    </div>
  );
}

export default App;
