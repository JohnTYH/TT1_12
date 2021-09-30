@echo off
set /p name="Enter name of virtual env: "
echo Creating virtual env %name% ...

python -m venv .\%name%

echo Starting virtual env %name% ...
.\%name%\Scripts\activate

echo Installing requirements ...
pip install -r requirements.txt
