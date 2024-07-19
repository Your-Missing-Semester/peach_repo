import React from 'react';
import styles from './homePageBody.module.css'

function HomePageBody () {
    return (
        <div className={styles["body-grid"]}>
            <p className={styles["home-heading"]}>HOME /</p>
            <h1 className={styles["body-heading"]}>Learn something new today!</h1>
            <p className={styles["search-bar-heading"]}>WHAT ARE YOU LOOKING FOR</p>
            <div className={styles["search"]}>
                <input type="text" placeholder='Keyboard modding'/>
                <button className={styles["search-button"]}>SEARCH</button>
            </div>   
        </div>
        
    )
}

export default HomePageBody;