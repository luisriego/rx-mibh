#!/bin/bash

help: ## Show this help message
	@echo 'usage: make [target]'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#' | awk '{gsub("Makefile", "")}1'

run: ## Start the containers
	cp -n .env.development.dist .env.development || true
	docker-compose up -d

stop: ## Stop the containers
	docker-compose stop

restart: ## Restart the containers
	$(MAKE) stop && $(MAKE) run

build: ## Rebuilds all the containers
	docker-compose build

ssh: ## SSH into the Node container
	docker exec -it crypto-coin bash

install-dependencies: ## Install dependencies
	docker exec -it crypto-coin npm install

start-dev: ## Runs local development server
	docker exec -it crypto-coin npm run start

prod-build:
	docker exec -it crypto-coin npm run build
