import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Home.css'
import SearchToggle from '../../components/SearchToggle/SearchToggle'

function Home() {
    return (
        <main className="container main-container">
            <h1 className="main-title">Ám Nguyệt Thần Tông</h1>
            <SearchToggle />
        </main>
    );
}
export default Home;
