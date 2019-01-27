import React, {Component} from 'react';
import styles from "./InfoPage.module.css";
import Header from "../templates/Header";

import Footer from "../templates/Footer";
import MainHomePage from "../templates/MainHomePage";


export default () => {
    return (
        <div className={styles.OnePage}>
            <Header/>
            <MainHomePage/>

            <Footer/>
        </div>

    )
}
