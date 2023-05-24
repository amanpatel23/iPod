import React, { Component } from 'react';
import Screen from './components/Screen/Screen';
import Wheel from './components/Wheel/Wheel';
import SingleItemScreen from './components/SingleItemScreen/SingleItemScreen';
import './index.css';
import styles from './App.module.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      menuItems: ['CoverFlow', 'Music', 'Games', 'Settings'],
      activeIndex: 0,
      clicked: false
    }
  }

  handleActiveIndexInc = () => {
    this.setState((prevState) => ({activeIndex: (prevState.activeIndex + 1) % 4}))
  }

  handleActiveIndexDec = () => {
    this.setState((prevState) => ({activeIndex: (prevState.activeIndex - 1 + 4) % 4}))
  }

  handleClickMenuItem = () => {
    this.setState({
      clicked: true
    })
  }

  handleClickMenuButton = () => {
    this.setState({
      clicked: false
    })
  }

  render() {

    const { menuItems, activeIndex, clicked } = this.state;
    return (
      <>
      <div className={styles.ipod__outer}>
        <div className={styles.ipod__inner}>
          {clicked 
          ? 
          <SingleItemScreen 
          itemName = {menuItems[activeIndex]}
          />
          : 
          <Screen 
          activeIndex = {activeIndex}
          menuItems = {menuItems}
          />}
          <Wheel 
          clicked = {this.state.clicked}
          handleActiveIndexInc = {this.handleActiveIndexInc}
          handleActiveIndexDec = {this.handleActiveIndexDec}
          handleClickMenuItem = {this.handleClickMenuItem}
          handleClickMenuButton = {this.handleClickMenuButton}
          />
        </div>
      </div>
      </>
    );
  }
}

export default App;
