import React, { useCallback, useState } from "react";
import EncodedImageData from "../types/EncodedImageData";
import ErrorMessage from "./ErrorMessage";
import "./QrGenerator.css";
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
                setErrorMessage("Empty text");
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
        <div className="QrGenerator">
            <QrTextForm onSubmit={onSubmit} />
            <ErrorMessage message={errorMessage} />
            <QrImageView imageData={imageData} />
        </div>
    );
};

export default QrGenerator;
