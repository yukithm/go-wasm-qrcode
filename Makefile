APP_DIR := app
PUBLIC_DIR := $(APP_DIR)/public

WASM_DIR := wasm
QRCODE_WASM := qrcode.wasm

.PHONY: build
build: build-wasm build-app

.PHONY: build-wasm
build-wasm:
	cd "$(WASM_DIR)" && $(MAKE) build
	cp "$(WASM_DIR)/$(QRCODE_WASM)" "$(PUBLIC_DIR)/"
	# cp -R "$(WASM_DIR)/@types/qrcode-wasm" "$(APP_DIR)/@types/"

.PHONY: build-app
build-app: build-wasm
	cd "$(APP_DIR)" && yarn && yarn build

.PHONY: clean
clean:
	rm "$(PUBLIC_DIR)/$(QRCODE_WASM)"
	cd "$(WASM_DIR)" && $(MAKE) clean

.PHONY: run
run: build-wasm
	cd "$(APP_DIR)" && yarn && yarn start
