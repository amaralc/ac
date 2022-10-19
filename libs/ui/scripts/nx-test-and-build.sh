runContinuousIntegrationPipeline(){
  echo '>> Running component tests for affected project...'
  yarn nx component-test ui --parallel

  if [ $? -eq 0 ]
  then
    echo '>> Evaluating exit code:' $?
    echo '>> ✔ Tests have passed!'
    echo '>> Initializing build...'
    npx nx build ac-mfe-profile --prod
  else
    echo '>> 🛑 Build cancelled since tests have failed.'
  fi
}

runContinuousIntegrationPipeline
