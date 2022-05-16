import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3">
                {'This magic brain will detect faces in your pictures. Give it a try'}
            </p>
            <div>
                <div className="form pa4 br3 shadow-5 w-50 center">
                    <input className="f4 pa2 w-70 ba b--white" type='text'></input>
                    <button className="w-30 grow f4 link ph3 pv2 dib white ba b--light-purple bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;