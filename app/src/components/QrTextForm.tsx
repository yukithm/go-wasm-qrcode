import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";

type Props = {
    onSubmit: (content: string) => void;
};

const QrTextForm: React.FC<Props> = (props) => {
    const [content, setContent] = useState("");

    const onChangeContent = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setContent(event.currentTarget.value);
        },
        [setContent]
    );

    const onSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            props.onSubmit(content);
        },
        [props, content]
    );

    return (
        <form onSubmit={onSubmit}>
            <FormControl variant="outlined" fullWidth={true}>
                <TextField
                    id="content"
                    name="content"
                    margin="normal"
                    variant="outlined"
                    multiline={true}
                    rows={5}
                    onChange={onChangeContent}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth={true}
                    color="primary"
                >
                    Generate
                </Button>
            </FormControl>
        </form>
    );
};

export default QrTextForm;
