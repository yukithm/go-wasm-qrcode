import React from "react";
import "./ErrorMessage.css";

type Props = {
    message: string | null
};

const ErrorMessage : React.FC<Props> = (props) => {
    if (props.message === null || props.message === "") {
        return null
    }

    return <div className="ErrorMessage">
        <p>{props.message}</p>
    </div>
}

export default ErrorMessage;
