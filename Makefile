setup-portifolio:
	yarn install
	yarn nx run-many --target=serve --parallel=true --projects=ac-mfe-shell,ac-mfe-profile
