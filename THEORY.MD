**(note: "\" for entering new line - it doesn't include in code)**
# Define:

Redux is a predicable state container for Javascript apps;

1. For JS apps:
- Can use with any UI library framework: Angular, JS, Vue, React
2. A state container:
- Stores the state of Application
3. Predictable
- The state of the application can't change
Ex: todo list app - item (pending) -> item (completed)

React-redux is a library that provides bindings to use React and Redux together in an application.

-----
# Three core concepts:

Redux  | purpose

store | Holds the state of your application\
Action | describes what happened\
Reducer | ties the store and actions together.

 ## Three principles:

 1. The state of your whole application is stored in an object tree within a single store.
2. The only way to change the state is to emit an action, an object describing what happended
3. To specify how the state tree is transformed by actions, you write pure reducers.
reducer - (previousState, action) => newState

## Redux store

Responsibilities:
- Holds application state
- allows access to state via getState()
- Allows state to be updated via dispatch(action)
- Registers listeners via subscribe(listener)
- Handles un-registering of of listeners via the function returned by subscribe(listener)

## Middleware

- Is the suggested way to extend Redux with custom functionality
- Provides a thrd-party extension point between dispatching an action and the moment it reaches the reducer.
 - Use middleware for logging, crash reporting, performing asynchronous tasks ... etc
 (redux-logger)

# **Actions - CALL API**

**Synchronous actions**
- As soon as an action was dispatched, the state was immediately updated.

**Asysnc Actions**
- Asynchronous API calls to fetch data from an end point and use that data in your application.

  * State?
  * Actions?
  * Reducer?

Action creator returns an action
[--State--]

state = {
  <!-- flag for checking the fetching -->
  loading: true,  
  data: []
  error: ''

}

loading - display a loading spinner in component 
data - list of users
error - display error to the user

[--Action--]

FETCH_USERS_REQUEST: Fetch list of users\
FETCH_USERS_SUCCESS: Fetched successfully\
FETCH_USERS_FAILURE: Error fetching the data

[--Reducers--]

case: FETCH_USERS_REQUEST\
  loading:true

case: FETCH_USERS_SUCCESS\
  loading: false\
  users: data (from API)

case: FETCH_USERS_FAILURE
  loading: false\
  error: error(from API)

**axios**\
Request to an API end point\

**redux-thunk**
- A package from the redux ecosystem
- define async action creators
- a basic middleware 













redux-thunk: help action return function