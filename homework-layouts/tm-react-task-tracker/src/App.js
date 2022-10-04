// import method used when creating a class
// import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

// This is how to create a class in older versions of React..
// class App extends React.Component {
//   render() {
//   return <h1>Hello This is a class</h1>
//   }}

export default App;
