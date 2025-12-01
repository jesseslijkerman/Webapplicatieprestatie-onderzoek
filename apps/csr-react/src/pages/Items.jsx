import React from "react";
import {useEffect, useState} from 'react';
import ItemList from '../components/ItemList.jsx';

export default function Items() {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3001/api/items')
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);


    return (
        <div>
            <h1>Items (CSR)</h1>
            <ItemList items={items}/>
        </div>
    );
}
