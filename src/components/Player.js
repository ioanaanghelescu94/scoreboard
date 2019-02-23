import React, { Component } from 'react';
import Counter from './Counter';

const Player = (props) => {

    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player"
                        onClick={ () => props.removePlayer(props.id) }>✖</button>
                { props.name }
            </span>

            <Counter changeScore = {props.changeScore} 
                     score2 = {props.score} 
                     index = {props.index}
            />
            {/* // propsul e trimis din app (din top)  */}
        </div>
    );
};

export default Player;
