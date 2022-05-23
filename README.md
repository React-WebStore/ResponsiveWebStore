# React Responsive Web Store

Hi reader,

I have created this repository because I have been developing web stores for the past 3 years.
I've never found a great NPM package for running a utilizing React.
I know there are propably a million other tools for creating a webstore but I wanted to create one 
that can be integrated with any stack.

A single package that provides you a database to store your items, an analytics dashboard and a one stop shop for your webstore.

The idea is to have a shippable NPM package for a store, an admin portal with analytics showing you which products are the best sellers, 
integration with major website like Amazon, Ebay, FB marketplace so you can push out products to all of your channels at the same time.
Keep track of your inventory and see reviews on your products from several different sources.

This sounds like a lot, therefor I want to start with a simple responsive and integrable NPM package for React user to build out there one stop shop
Start conquering the ecommerce world with React.

# Access

If you would like access to contribute to this repository please email luc.van.kerkvoort@gmail.com and 
I will add you to the contributors list as soon as possible.


# Trello Board

I have created a Trello board with a backlog [here](https://trello.com/b/o1ygQeAq/responsive-web-store)
To get access please email me at luc.van.kerkvoort@gmail.com

After that you can pick up any tickets and start working on them.

# Figma

For designs I will be utilizing Figma.
The figma page can be found [here](https://www.figma.com/file/2CXfAGfyjYMwax4OYT0i0C/Admin-Dashboard?node-id=0%3A1)

# Working on the project

To get started you will have to clone the repo to your local machine.

I have setup the project so that we are unable to merge into master directly.
If you want to contribute you will have to create a new branch.
We are using trunk based development methodology which uses git rebase which reapplies your commits onto the master branch.
This way we iterate with small changes to the repository securing the codebase.

if you want to read more about trunk based development, [here](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development#:~:text=What%20is%20trunk%2Dbased%20development,streamlines%20merging%20and%20integration%20phases.) is an article explaining it in depth

I've utilized styled-components for the CSS, this makes it easier to integrate JavaScript into our CSS.
It makes it more secure since the classnames will be auto generated and we can reuse components easier.

The file structure is as follows:

```
Components -- ComponentName -- index.js
                            -- styles.js
```
Please stick to the convention to have to codebase be as holistic as possible.

We have a Utils folder which is used for Hooks.
If you feel like any code is being reused anywhere to many times we can create a hook for it to keep our codebase DRY
The same goes for CSS code, we have a folder named Styles that is utilized for the purpose of reusable CSS code.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
