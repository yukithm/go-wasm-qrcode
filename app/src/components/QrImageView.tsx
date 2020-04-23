import { Box, Paper } from "@material-ui/core";
import React from "react";
import EncodedImageData from "../types/EncodedImageData";

type Props = {
    imageData: EncodedImageData | null;
};

const QrImageView: React.FC<Props> = (props) => {
    if (props.imageData) {
        const src = `data:${props.imageData.mimeType},${props.imageData.data}`;
        return (
            <Paper>
                <Box textAlign="center">
                    <img id="qrcode-image" src={src} alt="Generated QR Code" />
                </Box>
            </Paper>
        );
    } else {
        return null;
    }
};

export default QrImageView;
