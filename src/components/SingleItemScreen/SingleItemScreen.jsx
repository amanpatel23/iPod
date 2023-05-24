import React, { Component } from 'react';
import styles from './SingleItemScreen.module.css';

class SingleItemScreen extends Component {
    render() {

        const { itemName } = this.props;
        return (
            <>
            <div className={styles.screen__outer} style={{
                backgroundImage: `url(/images/${itemName}.jpg)`
            }}>
                <div className={styles.screen__inner}>
                    <div className={styles.page__name}>
                        <p>{itemName}</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SingleItemScreen;