import React, {Component} from 'react';
import styles from "./PrivatePage.module.css";
import Header from "../templates/Header";
import Footer from "../templates/Footer";
import {Row, Input, Col, Button} from "react-materialize";


export default () => {
    return (


        <div>
            <Header/>
            <div className={styles.PrivatePage}>
                <h1 align="center">Введите свой логин и пароль чтобы продолжить</h1>
                <Row>
                    <Col s={12} offset="s4">
                        <form>
                            <Row>
                                <Col s={8} className='grid-example'>
                                    <Input placeholder="Введите свой логин" s={4} label="Логин" type="text"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col s={8} className='grid-example'>
                                    <Input placeholder="Введите свой пароль" s={4} label="Пароль" type="password"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col s={8} className='grid-example'>

                                    <Button id="send_login" className="blue">Войти</Button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </div>

    )
}