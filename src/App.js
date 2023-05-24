import React, { Component } from 'react';
import Screen from './components/Screen/Screen';
import Wheel from './components/Wheel/Wheel';
import SingleItemScreen from './components/SingleItemScreen/SingleItemScreen';
import './index.css';
import styles from './App.module.css'

class App extends Component {

  constructor() {
    super();
    // declaring and defining states to be used
    this.state = {
      menuItems: ['CoverFlow', 'Music', 'Games', 'Settings'],
      activeIndex: 0,
      clicked: false
    }
  }

  // event for changing active index on rotation
  handleActiveIndexInc = () => {
    this.setState((prevState) => ({activeIndex: (prevState.activeIndex + 1) % 4}))
  }

  // event for changing active index on rotation
  handleActiveIndexDec = () => {
    this.setState((prevState) => ({activeIndex: (prevState.activeIndex - 1 + 4) % 4}))
  }

  // event for handling click on menu items(to go to specific item page)
  handleClickMenuItem = () => {
    this.setState({
      clicked: true
    })
  }

  // event for handling click on menu button(to go to the previous page)
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
          {/* ternary operator to show the screens */}
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
          {/* Wheel Commpoent */}
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
