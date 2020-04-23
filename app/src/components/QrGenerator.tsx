import React, { useCallback, useState } from "react";
import EncodedImageData from "../types/EncodedImageData";
import "./QrGenerator.css";
import QrImageView from "./QrImageView";
import QrTextForm from "./QrTextForm";

declare function generateQRCode(content: string, callback: (err: string, base64png: string) => void): void;

type Props = {};

const QrGenerator: React.FC<Props> = (props) => {
    const [imageData, setImageData] = useState<EncodedImageData | null>(null);

    const onSubmit = useCallback(
        (content: string) => {
            console.log("Generate QR Code image of the content:", content);
            generateQRCode(content, (err, base64png) => {
                if (err) {
                    console.log(err);
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
            <QrImageView imageData={imageData} />
        </div>
    );
};

export default QrGenerator;
