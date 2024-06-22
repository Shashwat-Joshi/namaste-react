# 04 - Show me the Code

Note: Passing props to a component is just like passing arguments to a function

# Config driven UI  (Important Frontend System Design Concept)

UI is driven by data and configs. UI is changed based on data received from the backend.

UI layer on the front and data layer behind it, makes a complete frontend application. 

# Why should we have keys while iterating over a map?

Ans: As React does not uniquely identify an element. So we provide a key as an unique identifier for each component. This is a huge performance optimization in React. 

For example: Suppose we have 10 cards present and we need to enter a  new card, then without keys React wont know which card is new. So it will render all the 11 cards again. But if key is mentioned, React will identify the 11th new card and only render the new card in its position. 

Note: Do not use index of the loop as keys. Bad practice!

## #1 Is JSX mandatory for React?

No JSX is not mandatory for React. JSX is just syntactical sugar for React. So anything we do with JSX can also be done with pure Javascript. 

## #2 Is ES6 mandatory for React?

