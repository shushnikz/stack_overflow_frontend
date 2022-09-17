import React from "react";
import "./CSS/index.css";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function index(){
    return(
        <div className="stack-index">
           <div className="stack-index-content">
            <Sidebar />
            <Main />
            </div> 
        </div>
    )
}