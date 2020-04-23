package main

import (
	"encoding/base64"
	"syscall/js"

	qrcode "github.com/skip2/go-qrcode"
)

const (
	recoveryLevel = qrcode.Medium
	imageSize     = 256
)

func main() {
	done := make(chan struct{}, 0)

	global := js.Global()

	generateQRCodeFunc := js.FuncOf(generateQRCode)
	defer generateQRCodeFunc.Release()
	global.Set("generateQRCode", generateQRCodeFunc)

	<-done
}

// generateQRCode generates QR Code PNG image which is encoded by Base64.
// First argument is the text content. Second argument is the callback function
// that receives error and Base64 string.
func generateQRCode(this js.Value, args []js.Value) interface{} {
	content := args[0].String()
	callback := args[1]

	png, err := qrcode.Encode(content, recoveryLevel, imageSize)
	if err != nil {
		callback.Invoke(err.Error(), nil)
	} else {
		callback.Invoke(nil, base64.StdEncoding.EncodeToString(png))
	}

	return js.Undefined()
}
