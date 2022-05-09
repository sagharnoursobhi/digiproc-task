
import './App.css';
import React from 'react';
import Changelog from './components/Changelog';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';

class App extends React.Component {

  render() {
    return (
      <div>
        <Changelog data={data} />
      </div>
    )
  }
}

export default App;
