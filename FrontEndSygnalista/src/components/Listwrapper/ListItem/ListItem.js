import React from "react";
import './ListItem.css';

const ListItem = () => (
    <li>
        <div className='listItem__list'>
            <div className='listItem__wrapper'>
                <div className='listItem__status'></div>
                <h2 className='listItem__Title'>nazwaza głoszenia</h2>
                <p className='listItem__data'>09.23.1200</p>
            </div>
            <p className='listItem__description'>opfasdasdsfjkasjgsiodfjgisjdfgjos</p>
            <button className='listItem__button'>otwórz</button>
        </div>
    </li>
);

export default ListItem;