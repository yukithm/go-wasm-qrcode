import React, { useState, useCallback } from "react";
import "./QrGenerator.css";
import QrImageView from "./QrImageView";
import QrTextForm from "./QrTextForm";
import EncodedImageData from "../types/EncodedImageData";

type Props = {};

const QrGenerator: React.FC<Props> = (props) => {
    const [imageData, setImageData] = useState<EncodedImageData | null>(null);

    const onSubmit = useCallback((content: string) => {
        console.log("Generate QR Code image of the content:", content);
        const dummy = "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAflBMVEUAAAAAn98AnuIAn+EAneAAnuAAnuAAn+QAn+QAneEAnuAAnuAAn+EAnuAAnuEAneAAn+cAneAAnuAAn98AnOIAnuEAneIAn+MAnuEAnuEAn+EAneIAneEAneEAnuEAn+MAneAAneEAnuMAnOIAn+cAneEBnuEAneAAnuMBnuEoGewkAAAAKXRSTlMAEE9/r7/fADCPzwBv718AIPDAAFCwYEAAoAAAn4CQAOAAPwAAcADQAFP96WQAAAMNSURBVHhelZcNc5swDIatBghpoCGEj9Jij2XLMv3/P7glkoNtZJo+d+0lhBOveSXZUjHgZZOkGf4nS5PNC5wiKPFqvnvFgNddvpVQy0tQZCiSFfCEAtiUGKXcwFcB3kpcpXx791HetypFn2NdH9EnrX67KPdL46g/tl3PeqHvWidM2fxyUM7n3fzgof8R0A9zjN3PGTV/HB+6teg66EeIUQqQIGOiSQMGmeRgUQfGPn/Ktyv0k9UQKrCxWzitAq3V6dvYIDG8f8mAROO6ULF/3ecTaHazcvIgjTw/PxfFeVFErCHd31C3fx2v39cKGy6qLKyA1tGr/v8BLWDyb3OLqiw+XGCiq8DFxIvypMKIHqMXvaeLmmyEkn1xSTCAjWcMS7gruFD+eo/QuEC7AYCy+nJXkC1/r5A4Gq2NrQCvjMnL7OZCLggY3KoAI5jMEvKt2hohBYK3wiveuwx8i3qn/uvVf0O2Hh5MnLwOZMTrXgGt4OCi7RuyXNg1F1oDqEZIQh2K6oUALalSWqgiIwUIM4VVqZZvdlkE7QQFFLRVNS3l5NLZarMkgkx6ebWiNPqzSu9nEkM2KDZhjbykh+19KKri3+LkIxLhVlE/E4CaAjsd4AYo9zJkR9huGF7CtPYSX9FyXG4XFHe2UQIt9fIGa6NNJBErX2r35O0wp7KEbZYSNpVtMYngSpbZYoI1G9YClFzOp+vKS6jviLFJ+fWgDralfZO5peW2xX8LKB9NdTtxsQuc7/wV0OTv/YRyiUuIugCls7FwizffsXHgzcRurjEjYgH8zdVKyODZJUDGAuxZubNnt5BIgMQ7YNyowy2c0XfCqyNX6HzE2Ve8A28+nmDDHaJyD9sNChpkxvCYRxgkEjitAkl40AzPjxm7KdNnSAzLgaNFZhcVATtkBmliGaTJSJ6mBnnkMWgpx+XAMZZoMbGZqXEHm6Q4sxA4F4k7DEkjD1PVGJCmGFDLQ5elO+Iqx7B/q88A0FKI+DSlBLMuE4pMF3h6+DZXDLia6PAtA41u67uUqW51E02uf46zvXx+HY4YAAAAAElFTkSuQmCC";
        setImageData({
            data: dummy,
            mimeType: "image/png;base64"
        });
    }, [setImageData]);

    return (
        <div className="QrGenerator">
            <QrTextForm onSubmit={onSubmit} />
            <QrImageView imageData={imageData} />
        </div>
    );
};

export default QrGenerator;
