import React from "react";
import styles from "./Header.module.scss"

type IProps = {
    setCountry: (value: string) => void
}

const Header = ({setCountry}: IProps) => {
    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.wrapper}>
                    <div>
                        <h2>Countries</h2>
                    </div>
                    <input type="text" placeholder="Search by country code"
                           onChange={(e) => setCountry(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Header;