runContinuousIntegrationPipeline(){
  echo '>> Running component tests for affected project...'
  yarn nx component-test ui --parallel

  echo '>> Evaluating exit code:' $?
  if [ $? -eq 0 ]
  then
    echo '>> ✔ Tests have passed!'
    echo '>> Initializing build...'
    npx nx build-storybook ui
  else
    echo '>> 🛑 Build cancelled since tests have failed.'
  fi
}

runContinuousIntegrationPipeline
