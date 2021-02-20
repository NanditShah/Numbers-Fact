import axios from "axios";
import React from "react";
import "./App.css";
import FactCard from "./Components/FactCard";
import RandomFactCard from "./Components/RandomFactCard";

class App extends React.Component {
  state = {
    mathFact: "",
    triviaFact: "",
    randomFact: "",
    inputName: "",
    url: "",
  };

  //Method for creating URL according to the input
  createUrl = (event) => {
    this.setState({ inputName: event.target.name });
    this.setState({
      url: `http://numbersapi.com/${event.target.value}/${event.target.name}`,
    });
  };

  // Method for fetching fact using axios
  fetchFact = (event) => {
    console.log(event.target.name);
    if (event.target.name == "RMath") {
      axios
        .get("http://numbersapi.com/random/math")
        .then((response) => {
          this.setState({ randomFact: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (event.target.name == "RTrivia") {
      axios
        .get("http://numbersapi.com/random/trivia")
        .then((response) => {
          this.setState({ randomFact: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(this.state.url)
        .then((response) => {
          if (this.state.inputName == "math") {
            const fact = response.data;
            console.log(response.data);
            this.setState({ mathFact: fact });
          } else if (this.state.inputName == "trivia") {
            const fact = response.data;
            console.log(response.data);
            this.setState({ triviaFact: fact });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { mathFact, triviaFact, randomFact } = this.state;

    return (
      <>
        <div className="App">
          <RandomFactCard onclick={this.fetchFact} fact={randomFact} />
          <FactCard
            name="math"
            handleChange={this.createUrl}
            onclick={this.fetchFact}
            fact={mathFact}
          />
          <FactCard
            name="trivia"
            handleChange={this.createUrl}
            onclick={this.fetchFact}
            fact={triviaFact}
          />
        </div>
        <footer>
          <p>
            Here I have used{" "}
            <a href="http://numbersapi.com/#42" target="_blank">
              Numbers_API
            </a>{" "}
            for facts
          </p>
          Made With ❤️ By Nandit Shah
        </footer>
      </>
    );
  }
}

export default App;
