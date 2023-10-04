import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';
import { addPostAC, updNewPostTextAC, addLikeAC, } from './redux/profileReducer';
import {addMsgAC, updMsgTextAc} from './redux/messagesReducer'

export let rerender = (state) => {
  ReactDOM.render(
  <BrowserRouter>
      <App appState={state} addPostAC={addPostAC} updNewPostTextAC={updNewPostTextAC} addLikeAC={addLikeAC} addMsgAC={addMsgAC} updMsgTextAc={updMsgTextAc} dispatch={store.dispatch.bind(store) } />
  </BrowserRouter>, document.getElementById('root')
);
}

store.subscribe(rerender);
rerender(store.getState()); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
