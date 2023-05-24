import React, { Component } from 'react';
import styles from './SingleItemScreen.module.css';

class SingleItemScreen extends Component {
    render() {
        // name of the active item 
        const { itemName } = this.props;
        return (
            <>
            <div className={styles.screen__outer} style={{
                backgroundImage: `url(/images/${itemName}.jpg)`
            }}>
                <div className={styles.screen__inner}>
                    <div className={styles.page__name}>
                        {/* displaying name of the list item of the single page */}
                        <p>{itemName}</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SingleItemScreen;