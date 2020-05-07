cd docs_repo
git pull
rm ../docs/*
cp en/* ../docs/
rm -R ../website/translated_docs/de/
rm -R ../website/pages/
rm -R ../website/static/
cp -R de/ ../website/translated_docs/
cp sidebars.json ../website
cp sprachvariablen/* ../website/i18n
cp configs/Footer.js ../website/core
cp configs/siteConfig.js ../website/
cp -R pages/ ../website/
cp -R static/ ../website/
#cp configs/index.js ../website/pages/en
cp configs/custom.css ../website/static/css
cp configs/index.html ../website/static/

cd ..
echo crowdin upload
echo crowdin download
cd website
npm run write-translations 
rm -r build
npm run build
rm -r /var/www/html/docs/intern
cp -r build/docs /var/www/html/docs/intern
cp i18n/* ../docs_repo/sprachvariablen/
cd .. 
cd docs_repo
git add .
git commit -m "sprachvariablen update"
git push
