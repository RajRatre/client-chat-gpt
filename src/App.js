import React, { Component } from "react";
import "./normal.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside className="side-menu">
          <div className="side-menu-buttun">
            <span>+ </span> New Chat
          </div>
        </aside>
        <section className="chatbox">
          <div className="chat-log">
            <div className="chat-message">
              <div className="chat-message-center">
                <div className="avatar"></div>
                <div className="message">hello</div>
              </div>
              <div className="chat-message-center-ai">
                <div className="avatar"></div>
                <div className="message">hello</div>
              </div>
            </div>
          </div>
          <div className="chatbox-input-area">
            <textarea
              rows="1"
              placeholder="Send a message"
              className="chatbox-input-textarea"
            ></textarea>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
