import React, { Component } from 'react';
import styles from './Screen.module.css';

class Screen extends Component {

    render() {
        // destructuring props got from App Component 
        const { activeIndex, menuItems } = this.props;
        return (
            <>
            <div className={styles.screen__container}>
                <div className={styles.screen__outer}>
                    <div className={styles.screen__inner}>
                        <div className={styles.screen__title}>
                            <span>iPod.js</span>
                        </div>
                        <div className={styles.items__container}>
                            <ul>
                                {/* loopting through list itmes and displaying it on screen */}
                                {menuItems.map((item, index) => (
                                    <li key = {index} id={index === activeIndex ? styles.active : null}>
                                        <div className={styles.single__item}>
                                            <span>{item}</span>
                                            <i className="fa-solid fa-angle-right"></i>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Screen;