import React, {Component} from 'react';
// import styles from "./RegPage.module.css";
// import Header from "../templates/Header";
// import Footer from "../templates/Footer";
// import {Row, Input, Col, Button} from "react-materialize";


class RegPage extends Component {
    initialState = {
        email: '',
        password: '',
        passwordRepeat: '',
    };

    state = this.initialState;

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handlePasswordChange = (event) => {
        const value = event.target.value.replace(/[^0-9]/, '');

        this.setState({
            [event.target.name]: value,
        });
    };


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(this.initialState);
        console.log('Отправка формы');
    };

    validateEmail = () => {
        const email = this.state.email;

        if (email.length === 0) {
            return false;
        }

        return !/^.*@.*\..+$/.test(email);
    };

    render() {
        return (
            <div>
                <Header/>
                <MainTemplateReg>
                    <form onSubmit={this.handleSubmit}>
                        <FormControl>
                            <Label htmlFor="email">E-mail</Label>
                            <InputReg
                                type="email"
                                value={this.state.email}
                                name="email"
                                id="email"
                                placeholder="Ведите E-mail"
                                error={this.validateEmail()}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <Label htmlFor="password">Пароль</Label>
                            <InputReg
                                type="password"
                                name="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                        </FormControl>
                        <FormControl>
                            <Label htmlFor="passwordRepeat">Повтор пароля</Label>
                            <InputReg
                                type="password"
                                name="passwordRepeat"
                                id="passwordRepeat"
                                value={this.state.passwordRepeat}
                                onChange={this.handlePasswordChange}
                            />
                        </FormControl>
                        <button type="submit">Зарегистрироваться</button>
                    </form>
                </MainTemplateReg>

                <Square/>
                <Footer/>

            </div>


        );
    }
}

export default RegPage;


// export default () => {
//     return (
//
//
//         <div>
//             <Header/>
//             <div className={styles.regPage}>
//
//                 <Row>
//
//                     <Col s={12} offset="s4">
//                         <Row>
//                             <Col s={8} className='grid-example'>
//                                 <Input placeholder="Придумайте логин" s={4} label="Логин" type="text"/>
//                             </Col>
//                         </Row>
//
//                         <Row>
//                             <Col s={8} className='grid-example'>
//                                 <Input placeholder="Укажите свою почту" s={4} label="Почта" type="text"/>
//                             </Col>
//                         </Row>
//
//                         <Row>
//                             <Col s={8} className='grid-example'>
//                                 <Input placeholder="Придумайте пароль" s={4} label="Пароль" type="password"/>
//                             </Col>
//                         </Row>
//
//                         <Row>
//                             <Col s={8} className='grid-example'>
//                                 <Input placeholder="Подтвердите пароль" s={4} label="Подтверждение пароля"
//                                        type="password"/>
//                             </Col>
//                         </Row>
//
//                         <Row>
//                             <Col s={8} className='grid-example'>
//                                 <Input placeholder="Введите свой номер +7" s={4} label="Номер телефона" type="text"/>
//                                 <Button id="send_pass" className="red">Отправить</Button>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col s={8} className='grid-example'>
//
//                                 <p className="p_white">Для получения смс с кодом подтверждения нажмите
//                                     "отправить"</p>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col s={8} className='grid-example'>
//                                 <Input placeholder="Введите код из смс" s={4} label="Введите код из смс" type="text"/>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col s={8} className='grid-example'>
//                                 <Button id="btn_reg" className="red">Зарегистрироваться</Button>
//                             </Col>
//                         </Row>
//
//                     </Col>
//
//
//                 </Row>
//
//
//             </div>
//
//
//             <Footer/>
//         </div>
//
//     )
// }
//

