import React, {Component} from 'react';
import styles from "./Footer.module.css";
import Header from "./Header";
import Slider from "../atoms/Slider";
import {Footer} from "react-materialize";


export default () => {
    return (
        <footer className={styles.footer}>
            <Footer copyrights="&copy 2015 Copyright Text"
                    moreLinks={
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    }
                    links={
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    }
                    className='example'
            >
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </Footer>
        </footer>



    )
}

