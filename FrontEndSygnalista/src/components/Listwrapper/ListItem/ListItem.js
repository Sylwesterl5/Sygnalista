import React from "react";
import './ListItem.module.css';

const ListItem = (props) => (
    <li>
        <div className='list'>
            <div className='wrapper'>
                <div className='status'> {props.status}</div>
                <h2 className='title'>{props.title}</h2>
                <p className='data'>{props.data}</p>
            </div>
            <p className='description'>{props.description}</p>
            <button className='button'>otwórz</button>
        </div>
    </li>
);

export default ListItem;