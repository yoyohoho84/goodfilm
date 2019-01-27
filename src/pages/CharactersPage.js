import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import {Link} from 'react-router-dom';
import styles from "./CharactersPage.module.css";
import {Col, Card, Row, CardPanel, CardTitle} from "react-materialize";
// import Pagination from "react-js-pagination";

// import Pagination from '../atoms/pagination/Pagination';
import PropTypes from 'prop-types';
import MainTemplateReg from '../templates/MainTemplateReg';


import {NavLink, withRouter} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import style from "../atoms/Square.module.css";
// import TablePagination from '@material-ui/core/TablePagination';
// import {Pagination, Tabs} from "react-materialize";


class CharactersPage extends Component {


    propTypes = {
        page: PropTypes.number.isRequired,
        data: PropTypes.array.isRequired,
        onChangePage: PropTypes.func.isRequired,
        initialPage: PropTypes.number.isRequired,
    };

    state = {
        loading: false,
        error: false,
        data: [],
        page: 1,
        totalPage: 0,
        initialPage: 1,


    };

    // handlePageChange=this.handlePageChange.bind(this);

    componentDidMount() { // сперва исполняется то что происходит внутри
        setTimeout(() => { // setTimeout - делает задержку в м/с
            this.fetch();
        }, 3000);
    }

    // handleShowMore = () => {
    //     this.setState(prevState => ({
    //         page: prevState.page + 1,
    //     }), () => {
    //         this.fetch();
    //     });
    // };

    componentDidUpdate(prevProps) {
        console.log(this.props.location.search);
        if (this.props.location.search !== prevProps.location.search) {
            this.fetch();
        }
    }

    fetch = () => { // fetch - получать
        // const currentPage = qs.parse(this.props.location.search);
        const currentPage = this.props.location.search;
        const params = new URLSearchParams(currentPage);
        const pageUrl = params.get('page') || 1;

        console.log(currentPage);
        console.log(pageUrl);

        this.setState({ // установить состояние
            loading: true,
            error: false,
            data: [],
        });
        axios
            .get(`${process.env.REACT_APP_MARVEL_API_URL}/v1/public/characters`, { // передаем ссылку на страницу
                params: {
                    apikey: process.env.REACT_APP_MARVEL_API_KEY,
                    limit: 10, // кол-во героев отображаемых
                    offset: (pageUrl - 1) * 10 // пропустить
                },
            })
            .then((response) => { // then - затем   response - ответ
                this.setState(prevState => ({
                    loading: false,
                    data: response.data.data.results,
                    totalPage: response.data.data.total,
                    // data: response.data.data.results,    // response - ответ
                }));
            })
            .catch(() => { // catch - ловить
                this.setState({ // set state - установить состояние
                    loading: false,
                    error: true,
                });
            });
    };

    // handleShowMorePrev = () => {
    //     // console.log(pageUrl);
    //     this.setState(() => ({
    //
    //         offset: ( * 10) - 10,
    //     }), () => {
    //         this.fetch();
    //     });
    // };
    //
    // handleShowMoreNext = () => {
    //     this.setState(prevState => ({
    //         offset: prevState.offset + 1,
    //     }), () => {
    //         this.fetch();
    //     });
    // };

    // if(this.props.location.search !== prevProps.location.search) {
    // this.fetch();
// }


    //
    // previousPage = () => {
    //     if (this.state.pageUrl !== 1)
    //         this.setState(() => ({offset: ((this.state.pageUrl - 1)*10)}))
    // };
    //
    // nextPage = () => {
    //     if (this.state.pageUrl + 1 < this.state.data.lenght)
    //         this.setState((prevState) => ({pageUrl: (prevState.pageUrl + 1)}))
    // };


    render() {
        const pageNumbers = [];

        console.log(this.state.totalPage);
        for (let i = 1; i <= Math.ceil(this.state.totalPage / 80); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => (
            <li

                key={number}
                id={number}
            >

                <Link
                    to={`/hero?page=${number}`}
                >
                    {number}
                </Link>

            </li>
        ));

        console.log(renderPageNumbers);
        return (
            <MainTemplateReg>

                <h1 color="white">Герои</h1>
                <Row>
                    {this.state.data.map(character => (
                        <div key={character.id}>
                            <div><Link to={`${'/infohero/'}${character.id}`}>{character.name}</Link></div>

                            <Col m={3} s={12}>
                                <Card className='small'
                                      textClassName='white-text'
                                      header={<Link to={`${'/infohero/'}${character.id}`}>{<img className={styles.imgHero}
                                                                                                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>}</Link>}

                                      actions={<Link to={`${'/infohero/'}${character.id}`}>{character.name}</Link>}
                                >

                                    I am a very simple card
                                </Card>
                            </Col>
                        </div>
                    ))}
                </Row>

                {this.state.loading && 'Зарузка...'}
                {!this.state.loading && !this.state.error && this.state.data.length === 0 && 'Пусто'}
                {this.state.error && (
                    <div>
                        <p color="white">Произошла ошибка при загруке</p>
                        <button type="button" onClick={this.fetch}>Повторить загрузку</button>
                    </div>
                )}


                {!this.state.loading && !this.state.error &&
                <button onClick={this.handleShowMorePrev} type="button">
                    prev </button>}

                {/*{!this.state.loading && !this.state.error && <Icon className={styles.pagination} onClick={this.handleShowMore_prev}>chevron_right</Icon>}*/}


                {!this.state.loading && !this.state.error && (
                    <ul className={styles.pagination}>
                        {renderPageNumbers}
                    </ul>
                )}

                {!this.state.loading && !this.state.error &&
                <button onClick={this.handleShowMoreNext} type="button">
                    next </button>}


                {/* {!this.state.loading && !this.state.error && ( */}


                {/* <Pagination items={page} activePage={1} maxButtons={8} /> */}

                {/* )} */}


            </MainTemplateReg>
        );
    }
}


export default CharactersPage;

//
// {this.state.data.map(character => (
//     <div key={character.id}>
//         <h2><a href={`${"/infohero/"}${character.id}`}>{character.name}</a></h2>
//     </div>
// ))}

//
// {/*<Tabs className='tab-demo z-depth-1'>*/}
//     {/*<Tab title="Test 1">Test 1</Tab>*/}
//     {/*<Tab title="Test 2" active>Test 2</Tab>*/}
//     {/*<Tab title="Test 3">Test 3</Tab>*/}
//     {/*<Tab title="Test 4">Test 4</Tab>*/}
// {/*</Tabs>*/}
//
// {!this.state.loading && !this.state.error && <button onClick={this.handleShowMore} type="button">
//     Показать еще </button>}
