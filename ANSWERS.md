- [ ] Why would you use class component over function components (removing hooks from the question)?
- Honestly, I would use class component unless it was requested at the work place or if I need to create a lifecycle method that would be more complicated to create using hooks. Reason of this being is functional components are a efficient way to create components, and it improves code reuse and composition and mostly it keeps your code dry, by eliminating repetitive lifecycle methods and replacing it with {useState} and {useEffect}.

- [ ] Name three lifecycle methods and their purposes.
- ComponentDidMount() method runs after the component output has been rendered to the DOM.
- ComponentWillMount is executed just before the React Component is about to mount on the DOM.
- ComponentWillUpdate is executed only after the shouldComponentUpdate returns true. 

- [ ] What is the purpose of a custom hook?
- A custom hook is a function that starts with the word “use” and may call other hooks.

- [ ] Why is it important to test our apps?
-Automated testing minimizes the risk of bugs finding their way into production code and allows us to trust the code.