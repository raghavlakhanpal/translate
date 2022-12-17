import React from "react";

//importing context and using <Context.Consumer> approach
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "indienen";
  }
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
