setup-portifolio:
	yarn install
	yarn nx run-many --target=serve --parallel=true --projects=ac-mfe-shell,ac-mfe-profile

run-ui-component-tests:
	yarn nx component-test ui --record --key ${CYPRESS_RECORD_KEY} --parallel
