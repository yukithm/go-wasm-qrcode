import React from "react";
import EncodedImageData from "../types/EncodedImageData";
import "./QrImageView.css";

type Props = {
    imageData: EncodedImageData | null;
};

const QrImageView: React.FC<Props> = (props) => {
    if (props.imageData) {
        const src = `data:${props.imageData.mimeType},${props.imageData.data}`;
        return (
            <div className="QrImageView">
                <img id="qrcode-image" src={src} alt="Generated QR Code" />
            </div>
        );
    } else {
        return <div className="QrImageView"></div>;
    }
};

export default QrImageView;
