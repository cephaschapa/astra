import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-items.styles.scss'

const MenuItem = ({title, imageUrl,size, history, match, linkUrl }) =>{
    return(
           <div className={`${size} menu-item `} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
                <div className="background-image" style={{backgroundImage:`url(${imageUrl})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}>

                </div>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtite">SHOP NOW</span>
                </div>
            </div>    
    )
}


export default withRouter(MenuItem)

