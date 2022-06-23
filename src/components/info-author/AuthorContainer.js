import React, {useState} from "react";

function AuthorContainer() {

  return (
    <div className="container">
        <div className="name-author-container">
        <div className="name-author-img">
            <a href="#">
            <img src="https://cdnmedia.baotintuc.vn/Upload/0gYjdiNY41wQIbPeRYyPvA/files/2020/06/elon-musk/elon-musk.jpg"/> 
            </a>
        </div>
        <div className="name-author">
            <h4>Created by:</h4>
            <a href="#">Elon Musk</a>
        </div>
        <div className="name-author-icon">
            <i className="fas fa-folder-open">
            <p>Save and modify</p>
            </i>
            <i className="fa fa-share">
            <p>Share</p>
            </i>
            <i className="fa fa-info">
            <p>Infomation</p>
            </i>
        </div>
        </div>
    </div>
  );
}

export default AuthorContainer;