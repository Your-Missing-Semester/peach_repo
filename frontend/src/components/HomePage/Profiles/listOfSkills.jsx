import React from 'react';
import styles from './profiles.module.css';

function LOS ({ user }) {
    return (
        <ul className={styles["skills"]}>
            {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    )
}

export default LOS;