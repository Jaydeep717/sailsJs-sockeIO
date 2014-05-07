sailsJs-sockeIO
===============
A SailsJs simple emit Application with socke.io

This app is based on the "Working with data in Sails.js with socke.io" tutorial. The code base has been to use the latest version of Sails.js v0.9.8.

Feel free to create issues or pull request where the code could be improved.

Installation:

You must have Node.js, sailsJs (IF not use : sudo npm install -g sails) installed, which includes npm (node package manager).

From terminal-

1. cd into the directory you'd like to install the app.

sails new MessageEmitApp

cd MessageEmitApp
2. Run "git clone https://github.com/Jaydeep717/sailsJs-sockeIO.git"

copy into the newly created directory.

3. Run "sails lift"

To see : localhost:1337

* server config dir : config/local.js
* route : config/routes.js
* socke.io connection : config/sockets.js 
* update view : under view .ejs files
