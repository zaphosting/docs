
cd docs_repo
git pull
rm ../docs/*
cp en/* ../docs/
rm -R ../website/translated_docs/de/
cp -R de/ ../website/translated_docs/
cp sidebars.json ../website
cp sprachvariablen/* ../website/i18n
cp configs/Footer.js ../website/core
cp configs/siteConfig.js ../website/
cp configs/index.js ../website/pages/en
cp configs/custom.css ../website/static/css

cd ..
echo crowdin upload
echo crowdin download
cd website
npm run write-translations 
rm -r build
npm run build
rm -r /var/www/html/docs
cp -r build/docs /var/www/html/docs
cp i18n/* ../docs_repo/sprachvariablen/
cd .. 
cd docs_repo
git add .
git commit -m "sprachvariablen update"
git push