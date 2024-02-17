import React from 'react'

function Sidebar() {
    return (
        <div className="main-sidebar">
            <div className="logo">
                <img src="assets/icons/footer-logo.svg" alt="logo" className="logo-img" />
                <i className="fa-solid fa-x"></i>
            </div>
            <ul class="main-list">
                <li className='has-dropdown'>
                    <a href="#" className='main-a'><span>Brands</span> <span><i class="fa-solid fa-chevron-down"></i></span></a>
                    <ul>
                        <li><a href="#">Brand1</a></li>
                        <li><a href="#">Brand2</a></li>
                        <li><a href="#">Brand3</a></li>
                        <li><a href="#">Brand4</a></li>
                    </ul>
                </li>
                <li className='has-dropdown'>
                    
                    <a href="#" className='main-a'><span>Shop By Goals</span> <span><i class="fa-solid fa-chevron-down"></i></span></a>
                    <ul>
                        <li><a href="#">Brand1</a></li>
                        <li><a href="#">Brand2</a></li>
                        <li><a href="#">Brand3</a></li>
                        <li><a href="#">Brand4</a></li>
                    </ul>
                </li>
                <li className='has-dropdown'>
                    
                    <a href="#" className='main-a'><span>Top 10</span> <span><i class="fa-solid fa-chevron-down"></i></span></a>
                    <ul>
                        <li><a href="#">Brand1</a></li>
                        <li><a href="#">Brand2</a></li>
                        <li><a href="#">Brand3</a></li>
                        <li><a href="#">Brand4</a></li>
                    </ul>
                </li>
                <li className='has-dropdown'>
                    
                    <a href="#" className='main-a'><span>Shop by Sports</span> <span><i class="fa-solid fa-chevron-down"></i></span></a>
                    <ul>
                        <li><a href="#">Brand1</a></li>
                        <li><a href="#">Brand2</a></li>
                        <li><a href="#">Brand3</a></li>
                        <li><a href="#">Brand4</a></li>
                    </ul>
                </li>
                <li className='has-dropdown'>
                
                    <a href="#" className='main-a'><span>Top 15</span> <span><i class="fa-solid fa-chevron-down"></i></span></a>
                    <ul>
                        <li><a href="#">Brand1</a></li>
                        <li><a href="#">Brand2</a></li>
                        <li><a href="#">Brand3</a></li>
                        <li><a href="#">Brand4</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
