- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used for typechecking. It sorts of validates the code and checks on your data that is being passed. It will give you a warning in the console if something is invalid.

- [ ] Describe a life-cycle event in React?

Is the cycle of React. It can be breaken down to phases, render phase and commit phase. 
Mounting methods are to create and insert the components into the DOM.
Updating causes the props or state to change when the component is being re-rendered.
Unmounting is when a component is being removed from the DOM.

- [ ] Explain the details of a Higher Order Component?

HOC are a way to reuse a component's logic. Since React programmers goals are to make codes that are reusable, HOC are common. It takes a component as an argument and it returns a component and can change the taken component.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

Regular CSS - Very basic and easy to read for noobies, using the CSS stylesheet. Essentially the same as CSS in HTML.
Styled Components - a library for React. It mixes Javascript and CSS in a sense, where you can assign the styling in a way that looks like Javascript.
CSS Modules - Basically CSS files that are scoped specifically to JS file names and only contains styling for that scoped JS file. Ex: Index.js and index.css & Header.js and header.css 