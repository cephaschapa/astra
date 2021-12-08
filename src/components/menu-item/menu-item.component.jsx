import React from 'react'
import './menu-items.styles.scss'
const MenuItem = ({title, imageUrl,size }) =>{
    return(
        <div className={`${size} menu-item `}>
            <div className="background-image" style={{backgroundImage:`url(${imageUrl})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}>

            </div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtite">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;