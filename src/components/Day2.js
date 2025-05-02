import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";

const Day2 = () => {
    const [text, setText] = useState("");
    const qrRef = useRef(null);
    // implementing download button wor the qr
    const handleDownload = () => {
        const canvas = qrRef.current.querySelector('canvas');
        const url = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = url;
        link.download = "qrcode.png";
        link.click();
    }

    return (
        <>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                placeholder="input"
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            {text && (
                <div ref={qrRef}>
                    <QRCodeCanvas value={text} size={256} />
                    <button onClick={handleDownload}>
                        Download ✅
                    </button>
                </div>
            )}

        </>
    )
}

export default Day2;