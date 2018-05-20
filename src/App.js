import React, {Component} from 'react';
import logo from './logo.svg';
import icNavHome from './img/ic_home.png';
import icNavType from './img/ic_type.png';
import icNavDiscovery from './img/ic_discovery.png';
import icNavPersonal from './img/ic_personal.png';
import icNavCart from './img/ic_cart.png';


import './App.css';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};

  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timeId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  tick() {
    this.setState({date: new Date()});
  }

}


class NavItem extends React.Component {

  render() {
    return (
      <a className='nav-item'>
        <div className='center-container'>
          <span className='center-span'/>
          <img className='nav-img' src={this.props.item.icon}/>
        </div>
      </a>
    );
  }
}


class CommonNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='bottom-nav'>
        {this.props.items.map((item, index) => <NavItem item={item}/>)}
      </div>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {icon: icNavHome}, {icon: icNavType}, {icon: icNavDiscovery},
        {icon: icNavPersonal}, {icon: icNavCart}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Clock/>
        <CommonNav items={this.state.navItems}/>
      </div>
    );
  }
}

export default App;
