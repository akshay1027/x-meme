import { useState } from 'react';
import axios from "../../helper/axiosHelper";

// card page

function MainPage(props) {

    return (
        <div className="card rounded border-warning rounded p-10 xl=6 lg=6" 
        style={{width: "20rem", margin:"20px" }}>
            <div className="card-body">
                    <div>
                        <h5><strong>Name: {props.Name}</strong></h5>
                        <br />
                        <h5><strong>Caption: {props.caption}</strong></h5>
                    </div>
            </div>
            <img src={props.url} alt={props.caption} className="card-img-top" />
        </div>
    )
}

export default MainPage;
/*div className="media-content">
              <p className="title is-4">{caption}</p>
              <p className="subtitle is-6">{name}</p>
            </div> */