import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { grams } from '../grams.js';

const Welcome = () => {

    console.log(grams)
    return (
        <div>
            <h3> Welcome! </h3>
            <TransitionGroup>
                <div>
                    {grams.map(gram => (
                        <CSSTransition key={gram.username} timeout={500} classNames="item">
                            <a href={`https://fathomless-springs-17684.herokuapp.com/${gram.username}`}>{gram.username}</a>
                        </CSSTransition>
                    ))}
                </div>
            </TransitionGroup>
        </div>
    )
}

export default Welcome
