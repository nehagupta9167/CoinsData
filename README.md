# CoinsData

- Website is build using Node.js with Express, EJS and CSS
- This app display data using public api from [Coinlib](https://coinlib.io/apidocs): https://coinlib.io/api/v1/coinlist/
- The public api requires a key specific to a Coinlib user account created. The key for my account is hardcoded in index.js. 


Steps to follow to host the website locally: 

1. Make sure latest Node.js and npm is installed from [NodeJs](https://nodejs.org/en/download/).
2. Download the zip code file extract to a folder.
3. Inside the folder open the command terminal and run command "npm install". All the dependencies as per the package.json file will be downloaded and installed.
4. To start the server run command "node app.js" in the command prompt.
5. In the browser hit the url "http://localhost:5000/" to view the website. It will take few seconds to get the data and load.


A screenshot of the website !!
![image](https://user-images.githubusercontent.com/49072103/156996297-05be7d2e-c41a-48d9-8d53-5ac0d9351c1b.png)

