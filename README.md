# Sixt Offers

* Here I have built a **responsive grid** to display offers.
* Each individual offers are displayed in **square format** tiles.
* Desktop screen sizes (>768px) would display four tiles per row, and mobile and tablet screen sizes (<768px) would display two tiles per row.
* Offers are **sortable** by the options in the key, sortIndexes.
* Offers are displaying the name, image and the total price.

## Deployed application - Live demo

React web app is `deployed on Azure`. See a `live demo` in below link.
* React web app - https://codingtaskoffers.azurewebsites.net/

**Please disable CORS in your browser to see the live demo. 
If you are using chrome you could do this by using a chrome extension like 'Moesif Origin & CORS Changer' or opening Chrome browser by running the following command in Run prompt. `chrome.exe --disable-web-security --user-data-dir`**

## Notable items in the application

* ### Offers are displayed in a `responsive grid`.
* ### Each individual offers are displayed in `square format` tiles.
* ### `Desktop screen sizes` (>768px) would display four tiles per row, and `mobile and tablet screen sizes` (<768px) would display two tiles per row.
* ### offers are `sortable` by the options in the key, sortIndexes.
* ### App is designed with `Material UI design`.
* ### `create-react-app` is used as the scaffolding tool for the application.
* ### `Redux architecture` has been used in the application.
* ### `Redux Saga` has been used to asynchronously load data to the grid.
* ### `React router` is used for the routing.
* ### `Unit tests` are written using `Jest`.

## How to run, test and build frontend React app

* Open a command prompt and navigate to `sixt-offers` folder
    
        cd sixt-offers

* Run below command to install npm packages

        npm install

* Run the React app for development using below command. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. Please disable CORS in your browser in development. If you are using chrome you could do this by using a chrome extension like 'Moesif Origin & CORS Changer' or opening Chrome browser by running the following command in Run prompt. `chrome.exe --disable-web-security --user-data-dir`
        
        npm start

* Run tests in the application using below command
        
        npm test

* Get tests coverage in the application using below command. Test coverage will be available in `coverage` folder.

        npm test -- --coverage

* Build React app for production  to the `build` folder using below command. It correctly bundles React in production mode and optimizes the build for the best performance. 
        
        npm run build

## Sample images of the app

Application displayed in a desktop screen

![](https://i.ibb.co/LPKycLQ/desktop-screen.png)

Application displayed in a mobile screen

![](https://i.ibb.co/VQvmgkc/mobile-screen.png)

Sort control displayed to sort the offers

![](https://i.ibb.co/0XF5C9H/Sort-control-displayed.png)

Offeres sorted by popularity

![](https://i.ibb.co/bXBPsRG/sorted-by-popularity.png)