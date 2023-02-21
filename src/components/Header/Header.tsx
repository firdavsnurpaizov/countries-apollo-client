import React from "react";
import styles from "./Header.module.scss"

type IProps = {
    setCountry: (value: string) => void
}
const Header = ({setCountry}: IProps) => {
    return (
        <div>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.wrapper}>
                        <input type="text" placeholder="Введите код страны"
                               onChange={(e) => setCountry(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;