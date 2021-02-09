import { useState } from 'react';
import axios from "../../helper/axiosHelper";

// card page

function MainPage(props) {

    return (
        <div className="card border border-secondary rounded lg=10" >
            <div className="card-body">
                <div className="d-flex flex-row justify-content-sm-between">
                    <div>
                        <strong>{props.Name}</strong>
                        <strong>{props.caption}</strong>
                    </div>
                </div>
            </div>
            <img src={props.url} alt={props.caption}className="card-img-top" />
        </div>
    )
}

export default MainPage;
/*div className="media-content">
              <p className="title is-4">{caption}</p>
              <p className="subtitle is-6">{name}</p>
            </div> */