#!/usr/bin/env bash

sed -i '' 's/_cosmos.ico/cosmos.ico/g' docs/index.html
sed -i '' 's/_playground.js/playground.js/g' docs/index.html
sed -i '' 's/\/_renderer.html/renderer.html/g' docs/index.html
sed -i '' 's/\/main.js/main.js/g' docs/_renderer.html
mv docs/_playground.js docs/playground.js
mv docs/_cosmos.ico docs/cosmos.ico
mv docs/_renderer.html docs/renderer.html
