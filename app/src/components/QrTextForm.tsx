import React, { useCallback, useState } from "react";
import "./QrTextForm.css";

type Props = {
    onSubmit: (content: string) => void
};

const QrTextForm: React.FC<Props> = (props) => {
    const [content, setContent] = useState("");

    const onChangeContent = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.currentTarget.value);
    }, [setContent]);

    const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSubmit(content);
    }, [props, content])

    return (
        <form className="QrTextForm" onSubmit={onSubmit}>
            <textarea name="content" id="content" onChange={onChangeContent}></textarea>
            <button type="submit">Generate</button>
        </form>
    );
};

export default QrTextForm;
