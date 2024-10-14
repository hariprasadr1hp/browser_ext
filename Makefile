.PHONY: all
all: chrome firefox

.PHONY: clean
clean:
	pnpm clean

.PHONY: lint
lint:
	pnpm lint

.PHONY: chrome
chrome:
	pnpm build:chrome

.PHONY: firefox
firefox:
	pnpm build:firefox

.PHONY: preview
preview:
	pnpm preview
