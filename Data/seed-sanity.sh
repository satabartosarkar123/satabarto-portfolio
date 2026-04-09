#!/bin/bash
export SANITY_AUTH_TOKEN="skgcVQw9Rgt4jCQh1SAn1mxF6NpJT0DlQ9K0NcOZM6Z5k1VebdjIqV18tmoo1vZXr4sXHprhA3r2O3wlneDEwAStIuvs6c8dKq57LDpXFUDCwlT58L30ybYjoz8otnw5kRvXbrF7dG1CDRGh6ZHaTarkfBVo9R73mmemMcP6SyTPPwjKjn0u"
PROJECT_ID="69bhg86t"

echo "Injecting Project Architecture Metrics into Sanity CMS..."
npx sanity dataset import Data/seed-projects.ndjson production --replace --project $PROJECT_ID

echo "Injecting Experience into Sanity CMS..."
npx sanity dataset import Data/seed-experience.ndjson production --replace --project $PROJECT_ID

echo "Injecting Education into Sanity CMS..."
npx sanity dataset import Data/seed-education.ndjson production --replace --project $PROJECT_ID

echo "Injecting Skills into Sanity CMS..."
npx sanity dataset import Data/seed-skills.ndjson production --replace --project $PROJECT_ID

echo "Hydration complete. The UI should now render the systems metrics."
