# Interview (ReactJS)

## What is  **React.JS** ?

> React is a libraryfor building user interfaces. 
> React runs on the *client* as a SPI(Single Page App), but can be used to build full stack apps by communicating with a server/API (eg. MERN stack). React is also refered to as a FRONT-END "framework" because it is capable and directly comparable to a framework such as Angular or Vue......

## Why would you use React?
- Structure the View layer of your Application
- Reusable components with thier own state
- JSX - Dynamic markup
- Interactive UI's with Virtual DOM
- Performance & testing
- Very popular in the industry.

## Working with "State"

> Components can have "state" which is an object that determnines how a component renders and behaves

> "App" or "Global" state refers to state that is a vailable to the entire UI, not just a single component.

> Prior to React 16.8, we had to use the class based components to use state. Now we can use functional components with hooks.

## Recent Hooks 

> React Hooks are functions that let us hook into the React state and lifecycle features from function components

- useState - Returns a stateful value and a function to update it.
- useEffect - Performs side effects in function components
- useContext, useReducer, useRef - Beyond the dcope of this course.
> You can also create your own custom hooks

## **"rafce"** is a shortcut that does what?

> creates a arrow function for a React Header component
```jsx
import React from 'react'

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header
```
