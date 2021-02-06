import { React, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import '../meme/meme.css';

const Meme = () => {
    
    return(

    <div className="container">
    <h1>Xmeme</h1>
    <div className="meme-form">
    <TextField className="meme-text" id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
    <div className="meme-form">
    <TextField className="meme-text" id="outlined-basic" label="Outlined" variant="outlined" />
    </div><div className="meme-form">
    <TextField className="meme-text" id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
    <div className="meme-button">
    <Button>
        submit
    </Button>
    </div>
    </div>
    
    );
}

export default Meme;
