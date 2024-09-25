import React from "react";
import ReactDOM from "react-dom/client";

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>سلام دوستان من</h1>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Timer />
      </div>
    );
  }
}

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component initially
root.render(<App />);

// Define the tick function to update the time
const tick = () => {
  root.render(<App />);
};

// Update the time every second
setInterval(() => {
  tick();
}, 1000);
