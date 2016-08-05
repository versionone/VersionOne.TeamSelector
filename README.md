#V1 Queue Decide Hack-week Project

##Links for helpful tutorials

*React: https://facebook.github.io/react/docs/package-management.html
*React JSX: https://facebook.github.io/react/docs/jsx-in-depth.html
*React PropTypes: https://facebook.github.io/react/docs/reusable-components.html
*React Render Loop: https://thinkster.io/iterating-and-rendering-loops-in-react
*React Dynamic Children Bug: https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
*React Button Example: https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html
*React Imports with ES2015: https://www.jayway.com/2015/03/04/using-react-with-ecmascript-6/
*React Forms Documentation: https://facebook.github.io/react/docs/forms.html
*React Update State with Input Field: http://stackoverflow.com/questions/28773839/react-form-onchange-setstate-one-step-behind
*React Input Loses Focus on Rerender: http://reactkungfu.com/2015/09/react-js-loses-input-focus-on-typing/
*React Managing State with Input Fields Examples: https://blog.iansinnott.com/managing-state-and-controlled-form-fields-with-react/ (note mixins not compatible with ES6)
*React Proper Event Binding: http://stackoverflow.com/questions/29351118/function-listed-for-the-onclick-event-is-firing-at-load-time-on-reactjs
*React Component Lifecycle: https://facebook.github.io/react/docs/component-specs.html

*Webpack: https://web-design-weekly.com/2014/09/24/diving-webpack/
*Webpack Help: http://stackoverflow.com/questions/33502987/webpack-bundle-js-not-found

*BabelRc: https://babeljs.io/docs/usage/babelrc/
*Babel Loader Webpack Config: http://stackoverflow.com/questions/32730033/import-syntax-not-working-with-webpack/35525285#35525285

*JSON Objects: http://www.tutorialspoint.com/json/json_objects.htm
*JSON Examples: http://www.w3schools.com/js/js_json.asp

*Underscore.js Library: http://underscorejs.org/
*Underscore Map Object Function: http://stackoverflow.com/questions/19023226/map-over-object-preserving-keys

*Fisher Yates Shuffle Algorithm: https://bost.ocks.org/mike/shuffle/

##What to run from the command line:

webpack : for building once for development
webpack -p : for building once for production (minification)
webpack --watch : for continuous incremental build
webpack -d : to include source maps
webpack --colors : for making things pretty

npm run start : for opening index.html at localhost:8080 using http-server

##Thought processes to consider:

At what level is the specific state managed?
Example: TeamCard.jsx needs to manage the state that display what is in the input box
Then, a call is passed up to TeamDisplay.jsx to change the backend state that contains all the teams that are being stored

How to "delete" or not render a component
Instead of trying to use ReactDOM.unmountComponentAtNode() just change the state that you render from to not include the data
Ohhhhhhh :O

When does a variable need to be global, in the state of the object, or in the props?
Global is a last resort for when React queues an update state but does not update immediately
Props are generally passed down from other objects
State is directly related to the existance of the object
