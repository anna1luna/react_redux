import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let rerender = (state) => {
  ReactDOM.render(
  <BrowserRouter>
      <App appState={state} addPost={addPost} updNewPostText={updNewPostText} />
  </BrowserRouter>, document.getElementById('root')
);
}
 

