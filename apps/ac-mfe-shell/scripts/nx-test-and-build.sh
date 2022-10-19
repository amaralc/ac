# runContinuousIntegrationPipeline(){
#   echo '>> Running component tests for affected project...'
#   yarn nx component-test ui --parallel

#   if [ $? -eq 0 ]
#   then
#     echo '>> Evaluating exit code:' $?
#     echo '>> ✔ Tests have passed!'
#     echo '>> Initializing build...'
#     npx nx build ac-mfe-shell --prod
#   else
#     echo '>> 🛑 Build cancelled since tests have failed.'
#   fi
# }

# CURRENT_BRANCH=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)
# echo 'Current branch:' $CURRENT_BRANCH

# if [ $CURRENT_BRANCH = production ]; then
#   apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
#   runContinuousIntegrationPipeline
# else
#   npx nx build ac-mfe-shell --prod
# fi

npx nx build ac-mfe-shell --prod
