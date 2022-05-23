import React from "react";

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2 w-100">
                <img alt="" src={imageUrl} width='500px' height='auto'></img>
            </div>
        </div>
    )
}

export default FaceRecognition;