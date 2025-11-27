import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav style={{ padding: 20, display: 'flex', gap: 20 }}>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
        </nav>
    );
}