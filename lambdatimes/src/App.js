import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardData: [],
      tabData: []
    }
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
/*
import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
}

export default App; */