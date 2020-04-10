const redux = require("redux");
const createStore = redux.createStore;
const combineReducers= redux.combineReducers;


// Action type
const BUY_CAKE = "BUY_CAKE";
const BUY_ICREAM = 'BUY_ICREAM'
// Actions:

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIcream() {
  return {
    type: BUY_ICREAM,
    info: "First redux action",
  };
}
// Reducers
// (previousState, action) => newState

// Because the application state has to be represented by a single object

// Holds application state Begin
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIcreams: 20,
// };

const initialCake = {
  numberOfCakes: 10,
};

const initialIcream = {
  numberOfIcreams: 20,
};


const cakeReducer = (state = initialCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

const icreamReducer = (state = initialIcream, action) => {
  switch (action.type) {
    case BUY_ICREAM:
      return {
        ...state,
        numberOfIcreams: state.numberOfIcreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icream: icreamReducer
})

const store = createStore(rootReducer);
// Holds application state END

// allows access to state via getState()
console.log("OUTPUT: store", store.getState());
//  allows access to state via getState() end

// Registers listeners via subscribe(listener) | After do the fourth action, add const unsbuscribe
const unsbuscribe = store.subscribe(() =>
  console.log("Updated state", store.getState()),
  console.log("Updated state", store.getState().cake.numberOfCakes)
);

// Registers listeners via subscribe(listener) END

// Allows state to be updated via dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcream());
store.dispatch(buyIcream());
store.dispatch(buyIcream());
// Allows state to be updated via dispatch(action) END

unsbuscribe();
