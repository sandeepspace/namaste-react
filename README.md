# Namastey React ....

# WHY REACT FAST - Efficient in DOM manipulation
# React Uses - Reconciliation Algorithm also k/a React Fiber(In React V16) --> React Core Algo

# DOM - Document Object Model (Tree of tags)
# When a web page is loaded, the browser creates a Document Object Model of the page.
# The HTML DOM model is constructed as a tree of Objects.

# Actual DOM - (Like div, h1....)
# Virtual DOM - Representation of Actual DOM (Or normal js object)

# DIFF ALGORITHM - It finds out the difference btw the updated & previous V-DOM and then update the actual DOM on every re-render cycle.

# Parcel --> https://parceljs.org
  # For server running--> npx parcel index.html (with http)
  # For server running--> npx parcel index.html --https (with https)
  # Make Dev Build
  # Created Local Server
  # HMR = Hot Module Replacement
  # Uses File Watching Algorithm - written in c++
  # Caching - Faster Builds
  # Image Optimization
  # Compressing, Bundling & Minifications files
  # Consistent Hashing
  # Code Spilitting
  # Differential Bundling - to support older browsers
  # Beautiful Diagnostics
  # Tree Shaking - remove unused code
  # Create different builds for dev & prod
# Parcel Prod Build CMD -> npx parcel build index.html (And remove "main": "App.js" from the pkg.json)


# JSX?
# JSX stands for JavaScript XML. JSX allows us to write HTML like code in React.
# JSX makes it easier to write and add HTML in React.

# BUNDLERS? (WebPack(In react behind the scene)/Parcel/Vite)
# A bundler in React is a tool that allows developers
# to package their code into a single file or bundle.


# Export the things in 2 ways (File can't have multiple default export but can multiple named export)
  # Default Export (export default <AnyName>)
  # Named Export (export const <AnyName> = ()=>....)

# Import the things in 2 ways
  # Default Import (import exportedName from "path";) 
  # Named Import (import { exportedName } from "path";) 
# You can use both default & named export for the components or something else.   

# REACT HOOKS
  # Normal JS utility functions (2 Hooks)
  # useState('default value')
  - Create super powerful state variables
  - Whenever a state variable update, React will re-render the Components 
               
  # useEffect() - 2 args - callback function & depeendency array or something else