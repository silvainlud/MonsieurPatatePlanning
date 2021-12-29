.DEFAULT_GOAL := help
.PHONY: help
help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: image
image: ## Constrction d'une image docker
	docker build . -t registry.silvain.eu:5000/silvain.eu/monsieurpatateplanning:latest
	docker push registry.silvain.eu:5000/silvain.eu/monsieurpatateplanning:latest