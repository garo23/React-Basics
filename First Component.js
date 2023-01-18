import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
    // everything in between these curly-braces is instructions for how to build components
render()
{
 return <h1>Hello world</h1>
}

}
//the component looks like this not an html tag cuz with capital letters
<>MyComponentClass</>

ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
  );
  //ReactDOM.render() will tell <MyComponentClass /> to call its render method.

//<MyComponentClass /> will call its render method, which will return the JSX element <h1>Hello world</h1>.
// ReactDOM.render() will then take that resulting JSX element, and add it to the virtual DOM. 