pushd %~dp0..
call yarn build
del /Q ..\atri-konami.github.io\js
xcopy /S /E /Y .\dist\js ..\atri-konami.github.io\js
xcopy /S /E /Y .\dist\product ..\atri-konami.github.io\product
pushd ..\atri-konami.github.io
git add js product
git commit -a -m "update from myapp deploy script."
git push