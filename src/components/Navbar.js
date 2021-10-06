import React from 'react'


function Navbar() {
    const list = [
        {
            topic: 'خانه',
            icon: '&#9751;'
        },
        {
            topic: 'لیست گوشی',
            icon: '&#9751;'
        },
        {
            topic: 'سبد خرید',
            icon: '&#9751;'
        },
        {
            topic: 'بیشتر',
            icon: '&#9751;'
        },
    ]

    const listMap = list.map(item => (
        <li>
            <span className="icon">&#x268F;</span>
            <h5>{item.topic}</h5>
        </li>
    ))

    return (
        <nav>
            <div className="home">
                <span className="home-icon">&#x2618;</span>
            </div>

            <ul>
                {listMap}
            </ul>
        </nav>
    )
}

export default Navbar