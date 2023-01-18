import React from 'react';
import ReactDOM from 'react-dom';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  //Due to the way that event handlers are bound in JavaScript, this.toggleMood() loses its this when it is used on line 20. 
  //Therefore, the expressions this.state.mood and this.setState on lines 12 and 13 won’t mean what they’re supposed to… 
  //unless you have already bound the correct this to this.toggleMood.

///!!!!//That is why we must bind this.toggleMood to this on line 8.

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));