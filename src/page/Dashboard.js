import React from 'react'
import List from '../components/List';
import Navbar from '../components/Navbar';
import Avatar from '../assets/img/download.jpeg';
import '../assets/sass/main.scss'

function Dashboard() {

    return (
        <>
            <header>
                <div className="avatar">
                    <img src={Avatar} alt="" />
                    <h3>سپیده جوادی</h3>
                    <span>کاربر عادی</span>
                </div>
            </header>

            <section className="content">
                <div className="inventory">
                    <div className="block-money">
                        <h3>۰</h3>
                        <span>تومان بلوکه شده</span>
                    </div>

                    <div className="inv-money">
                        <h3>۲.۴۵۰.۰۰</h3>
                        <span>تومان موجودی</span>
                    </div>
                </div>

                <List />
            </section>
            <Navbar />
        </>
    )
}

export default Dashboard;