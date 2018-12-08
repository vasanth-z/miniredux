import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
import { addArticle } from "./actions/index";

window.store = store;
window.addArticle = addArticle;

const Index = () =>{
    // console.log(store.getState());
    // store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
    // console.log(store.getState());
 return ( <Provider store={store}>
    <App />
  </Provider>);

};

export default Index;