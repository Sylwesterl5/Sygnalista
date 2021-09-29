import React from "react";
import './ListItem.css';

const ListItem = (props) => (
    <li>
        <div className='listItem__list'>
            <div className='listItem__wrapper'>
                <div className='listItem__status'> {props.status}</div>
                <h2 className='listItem__Title'>{props.title}</h2>
                <p className='listItem__data'>{props.data}</p>
            </div>
            <p className='listItem__description'>{props.description}</p>
            <button className='listItem__button'>otwórz</button>
        </div>
    </li>
);

export default ListItem;