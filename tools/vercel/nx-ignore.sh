LAST_MERGE_COMMIT_BEFORE_HEAD=$(git log --merges -n 2 --pretty=format:"%H" | tail -n 1)
CURRENT_BRANCH=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)

echo 'Current branch:' $CURRENT_BRANCH
echo 'Last merge commit before head:' $LAST_MERGE_COMMIT_BEFORE_HEAD

if [ $CURRENT_BRANCH = testing ] || [ $CURRENT_BRANCH = production ] || [ $CURRENT_BRANCH = staging ]; then
  npx nx-ignore $NX_PROJECT_NAME --base=$LAST_MERGE_COMMIT_BEFORE_HEAD
else
  npx nx-ignore $NX_PROJECT_NAME
fi
