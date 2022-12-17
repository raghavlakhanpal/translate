import React from "react";

import UserForm from "./UserForm";

import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div className="content">
          <strong>Select a Language:</strong>
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserForm />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
