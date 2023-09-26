import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let NewsData = [
  { text: "Hello, World", likes: 20, id: 1 },
  { text: "My first post", likes: 10, id: 2 },
  { text: "My second post", likes: 10, id: 2 },
  ];
let MsgsData = [
    {
      name: "Mama",
      text: "I am a normal popover and I can have text and everything",
      id: 1,
    },
    {
      name: "Me",
      text: "I am a normal popover and I can have text and everything",
      id: 2,
    },
    {
      name: "Mama",
      text: "I am a normal popover and I can have text and everything",
      id: 3,
    },
    {
      name: "Me",
      text: "I am a normal popover and I can have text and everything",
      id: 4,
    },
    {
      name: "Mama",
      text: "I am a normal popover and I can have text and everything",
      id: 5,
    },
];
let SendersData = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Mama" },
    { id: 3, name: "Papa" },
    { id: 4, name: "Anton" },
    { id: 5, name: "Anna KL" },
    { id: 6, name: "Aika" },
    { id: 7, name: "Yara" },
    { id: 8, name: "Stas" },
    { id: 9, name: "Luyda" },
    { id: 10, name: "Nastya" },
  ];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App NewsData={NewsData} MsgsData={MsgsData} SendersData={SendersData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
