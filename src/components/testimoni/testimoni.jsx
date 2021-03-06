import React from 'react';
import './testimoni.css';
// import MobileDetect from "mobile-detect";
// import Carousel from "react-multi-carousel";
// import CarouselWithCustomDots from "../components/carousel-with-custom-dots";

class Data extends React.Component {
    // static getInitialProps({ req }) {
    //     let userAgent;
    //     let deviceType;
    //     if (req) {
    //       userAgent = req.headers["user-agent"];
    //     } else {
    //       userAgent = navigator.userAgent;
    //     }
    //     const md = new MobileDetect(userAgent);
    //     if (md.tablet()) {
    //       deviceType = "tablet";
    //     } else if (md.mobile()) {
    //       deviceType = "mobile";
    //     } else {
    //       deviceType = "desktop";
    //     }
    //     return { deviceType };
    //   }
    
    //   state = { isMoving: false };

    constructor () {
        super ();
        this.state = {
            data: []
        }
    }

    componentDidMount (){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({data: users}));
    }
    render (){
        const item = this.state.data;

        // const fakerData = Array(12)
        // .fill(0)
        // .map((item, index) => {
        //   return {
            
        //   };
        // });

        return(<>
            <div className="testimoni-title">
                <h2>Testimoni</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div> 
            <div className="card-all">
                <div className="card-item">
                    {item.map(data =>(
                        <div className="card">
                            <div className="user">
                                <img src={`https://robohash.org/${data.id}?set=set2`} alt="Profile"></img>
                                <div className="identity">
                                    <h3>{data.name}</h3>
                                    <h5>{data.email}</h5>
                                </div>
                            </div>
                            <div className="comment"><strong>"</strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos aut temporibus repellendus omnis voluptate.<strong>"</strong></div>
                        </div>
                    ))}
                </div>
            </div>
           
        </>
        );
    }
}
  

export default Data;