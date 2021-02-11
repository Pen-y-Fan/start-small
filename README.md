# Start Small

Some small experiments for learning React.js.

- credit: [Learning React? Start Small.](https://daveceddia.com/learning-react-start-small/) by Dave Ceddia

1. render “hello world”
2. render a few nested plain old HTML elements to get a feel for JSX
3.  “refactor” hello world into 2 components, Hello and World. Nest them inside HelloWorld.
   make World accept an optional prop, the “name” to display, and render it.
4. create a static array of things, like const items = [{id: 1, name: "one"}, {id: 2, name: "two"}]. Create a component that takes “items” as a prop and uses items.map(...) to render the list of items.
5. make a counter. Initial state: count = 0. Have a “+” button and a “-“ button that change the count by setting state.
6. put the counter state in the root component, and put the buttons that increment/decrement it in a child a few levels below. Pass the increment/decrement functions down as props so that the children can update the parent’s state.

## Components

Each of the above "mini-projects" are created as their own components.

**App.js** renders each of these components and holds the state for the counter.

- `import HelloWorld from "./components/HelloWorld";`
- `import Counter from "./components/Counter";`
- `import List from "./components/List";`
- `import Button from "./components/Button";`

**HelloWord** component also imports components:

- `import Hello from "./Hello";`
- `import World from "./World";`

## Lessons learnt

1. The components have been created as classes, passing `this` is difficult! In the end I kept **App** as a function
 and the components are classes. `<button onClick={(e) => this.handleClick(e)}>{name}</button>`
2. The correct brackets to use in callbacks. 
  `{items.map((item) => { return ( ...item.name....)})}`
3. How to use state.

## Starting start-small

Navigate the to the location the project root.

```shell script
cd start-small
```

Docker can be used to provide: node, npm and yarn.

Navigate to the project directory and start docker.

```shell script
docker run -p:3000 -u $(id -u):$(id -g) -v $(pwd):/app -w /app -it --rm node:14.15.3-alpine /bin/sh
```

Once in the docker container, the **/app** folder will be the same as the project root, initialise the app

```shell script
yarn
```

Wait for the app th be installed, then start the dev server

```shell script
yarn start
```

The app will be available at <http://172.17.0.2:3000/>

## Configure PhpStorm

PhpStorm can be configured for debugging javascript.

- (double shift) Edit configuration
- Add new configuration (Alt + Insert)
  - Select **Javascript debug**
  - name: **Javascript debug**
  - url: **http://172.17.0.2:3000/**


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
