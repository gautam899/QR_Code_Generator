# QR_Code_Generator
This small project generates a QR code from the user-entered URL.
# Prerequisite
You must have node js installed on your system.
# How to run the project
1. Download the files as a zip file and open them in your favorite code editor.
2. If you try to run the index.js, it will give an error. This is happening because you do not have the required module as of now.
3. In the project we have two modules from the "npm" i.e. the node package manager. The first one is the "inquirer" and the second one is the "qr-image".
4. The "inquirer" module is used to take input from the user and the "qr-image" module is used to read a URL from the user and generate the corresponding QR code.
5. To install the above two modules type the following commands in the terminal-> "npm i inquirer qr-image" and press enter. Once you press enter a folder of the node modules will be installed and also twp .json files. package.json and package-lock.json.
6. At this point package.json file would be missing some piece of code which can be added by simply executing the command "npm init -y" in the vs code terminal.
7. Now in the package.json file just below the line "main": "index.js" enter the line "type": "module". This will enable you to use the keyword "import" in the .js file.
8. Now all you need to do is run the index.js file and enter the URL as per you wish. The corresponding QR code will be generated in qr_img.png.
 
