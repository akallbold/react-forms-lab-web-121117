import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: 160
    
    };
  }
  
  charsLeft = event=> {
    this.setState(
      {
        maxChars: this.state.maxChars -1
      }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.charsLeft} />
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
