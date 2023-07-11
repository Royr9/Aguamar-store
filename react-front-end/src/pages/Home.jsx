import React from "react";
import {Link} from 'react-router-dom'



function Home() {
    return(
     <div className="home-page">
     <section className="title-section-grid">
    <div className="title-content">
    <div className="content">
    <h1> השילוב המושלם בין נוחות,סטייל ואיכות</h1>
    <h3> בגדי ים לשחייה, לאימונים ולתחרויות באיכות גבוהה</h3>
    </div>
    </div>
    <div className="shop-now-btn"> <Link to="/store"><button className="btn"> Shop Now </button></Link> </div>
   
    <div className="title-img" alt="title-img"></div>
     
       
     </section>
    </div>
    )
}

export default Home;