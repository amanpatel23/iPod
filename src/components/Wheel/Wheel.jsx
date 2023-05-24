import React, { Component } from 'react';
import styles from './Wheel.module.css';
import ZingTouch from 'zingtouch'; // importing zingtouch library to handle rotation gesture

class Wheel extends Component {

    constructor() {
        super();
        // defining only state angle to track of rotation
        this.state = {
            angle: 0
        }
    }

    componentDidMount() {
        // cofiguring the rotation gesture once the component is mounted
        const target = this.wheelRef;
        this.myRegion = new ZingTouch.Region(target);
        this.rotate = new ZingTouch.Rotate({
          draggable: false
        });
        this.myRegion.bind(target, this.rotate, this.handleRotation);
    }

    // event for handling rotation of the cursor
    handleRotation = (event) => {
        const rotationAngle = event.detail.distanceFromLast;
        this.setState((prevState) => ({ angle: prevState.angle + rotationAngle }));
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.clicked) return;
        // if the angle exceeds by 30 then change the active list item index
        if (prevState.angle > 30 && this.state.angle !== 0) {
            this.props.handleActiveIndexInc();
            this.setState({
              angle: 0
            });
        }
        // if the angle lags behind 0 then change the active list item index
        if (prevState.angle < 0 && this.state.angle !== 30) {
            this.props.handleActiveIndexDec();
            this.setState({
              angle: 30
            });
        }
    }

    render() {

        // getting event handlers as props form App component for handling click event
        const { handleClickMenuItem, handleClickMenuButton } = this.props;
        return (
            <>
            <div className={styles.wheel__outer}>
                <div className={styles.wheel__inner} ref={(ref) => (this.wheelRef = ref)}>
                    <div className={styles.bigger__box}>
                        <div className={styles.smaller__box} onClick={handleClickMenuItem}></div>
                        <div className={styles.menu} onClick={handleClickMenuButton}>
                            <span>MENU</span>
                        </div>
                        <div className={styles.forward}>
                            <i className="fa-solid fa-forward-fast"></i>
                        </div>
                        <div className={styles.backward}>
                            <i className="fa-solid fa-backward-fast"></i>
                        </div>
                        <div className={styles.playpause}>
                            <i className="fa-solid fa-play"></i>
                            <i className="fa-solid fa-pause"></i>
                        </div>
                    </div>  
                </div>
            </div>
            </>
        );
    }
}

export default Wheel;