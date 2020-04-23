import { Box, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useCallback, useState } from "react";
import EncodedImageData from "../types/EncodedImageData";
import QrImageView from "./QrImageView";
import QrTextForm from "./QrTextForm";

declare function generateQRCode(
    content: string,
    callback: (err: string, base64png: string) => void
): void;

type Props = {};

const QrGenerator: React.FC<Props> = (props) => {
    const [imageData, setImageData] = useState<EncodedImageData | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const clearState = () => {
        setImageData(null);
        setErrorMessage(null);
    };

    const onSubmit = useCallback(
        (content: string) => {
            clearState();
            if (content === "") {
                setErrorMessage("Please input text.");
                return;
            }

            console.log("Generate QR Code image of the content:", content);
            generateQRCode(content, (err, base64png) => {
                if (err) {
                    console.log(err);
                    setErrorMessage(err);
                } else {
                    setImageData({
                        data: base64png,
                        mimeType: "image/png;base64",
                    });
                }
            });
        },
        [setImageData]
    );

    return (
        <Container maxWidth="sm">
            <QrTextForm onSubmit={onSubmit} />
            <Box margin="0.5em 0">
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            </Box>
            <QrImageView imageData={imageData} />
        </Container>
    );
};

export default QrGenerator;
