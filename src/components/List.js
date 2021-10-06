import React from 'react'

function List() {

const list = ['پروفایل کاربری', 'تنظیمات ', 'آدرس های منتخب', 'علاقمندی ها ', 'سفارشات من', 'کیف پول']
const listMap = list.reverse().map(item => (
<li>
    <span className="arrow">&#10094;</span>
    <div className="topics">
        <span className="icon">#</span>
        <h4>{item}</h4>
    </div>
</li>
))

return (
    <ul>
        {listMap}
    </ul>
)

}

export default List;