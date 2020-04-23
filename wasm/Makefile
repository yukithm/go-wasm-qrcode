NAME = qrcode.wasm

GOROOT ?= $(shell go env GOROOT)
GO_MISC_WASM_DIR ?= $(GOROOT)/misc/wasm
GO_JS_WASM_EXEC ?= $(GO_MISC_WASM_DIR)/go_js_wasm_exec

.PHONY: build
build:
	GOOS=js GOARCH=wasm go build -o "$(NAME)"

.PHONY: clean
clean:
	go clean
	rm "$(NAME)"

.PHONY: run
run:
	GOOS=js GOARCH=wasm go run -exec="$(GO_JS_WASM_EXEC)" .

.PHONY: run-server
run-server: build
	npx http-server -p 8080 -c-1

.PHONY: test
test:
	GOOS=js GOARCH=wasm go test -exec="$(GO_JS_WASM_EXEC)" .

.PHONY: copy-wasm-exec-js
copy-wasm-exec-js:
	cp "$(GO_MISC_WASM_DIR)/wasm_exec.js" .

.PHONY: copy-wasm-exec-html
copy-wasm-exec-html:
	cp "$(GO_MISC_WASM_DIR)/wasm_exec.html" .

.PHONY: copy-wasm-exec-files
copy-wasm-exec-files: copy-wasm-exec-js copy-wasm-exec-html
