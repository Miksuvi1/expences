import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from './Button';

import './Error.css'

const BackDrop = () => {
    return (
        <div className="backdrop"/>
    
    )
}

const ModalOverlay = (props) => {
    return (
        <card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="footer">
                <button onClick={props.onConfirm}>OK</button>
            </footer>
        </card>
    )
}
const Error = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal (
                <BackDrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal (
                <ModalOverlay
                title={props.title}
                message={props.message}
                onConfirm={props.onConfirm}
                />,
                document.getElementById('ovarlay-root')
            )
            }
        </Fragment>
    )
}
export default Error