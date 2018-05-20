import React, {Component} from 'react';
import logo from './logo.svg';
import icNavHome from './img/ic_home.png';
import icNavHomeChecked from './img/ic_home_checked.png';
import icNavType from './img/ic_type.png';
import icNavTypeChecked from './img/ic_type_checked.png';
import icNavDiscoveryChecked from './img/ic_discovery_checked.png';
import icNavDiscovery from './img/ic_discovery.png';
import icNavPersonalChecked from './img/ic_personal_checked.png';
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


  constructor(props) {
    super(props);
    this.item = props.item;
  }

  render() {
    return (
      <a className='nav-item' onClick={() => this.props.onClick()}>
        <div className='center-container'>
          <span className='center-span'/>
          <img className='nav-img' src={this.item.checked === true ? this.item.icChecked : this.item.ic}/>
        </div>
      </a>
    );
  }
}


class CommonNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: props.items}
  }

  handleClick(index) {
    const items = this.state.items.slice();
    items.map((item, i) => {
      console.log(i);
      item.checked = (i === index);
    });
    this.setState({items: items})
  }

  render() {
    return (
      <div className='bottom-nav'>
        {this.state.items.map((item, index) => <NavItem item={item} onClick={() => this.handleClick(index)}/>)}
      </div>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {icChecked: icNavHomeChecked, ic: icNavHome, checked: true},
        {icChecked: icNavTypeChecked, ic: icNavType, checked: false},
        {icChecked: icNavDiscoveryChecked, ic: icNavDiscovery, checked: false},
        {icChecked: icNavCart, ic: icNavCart, checked: false},
        {icChecked: icNavPersonalChecked, ic: icNavPersonal, checked: false}
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
