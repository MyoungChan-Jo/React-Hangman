import { useState } from "react";
import './App.css';
import GameBoard from './game-board';
import WordSelect from './word-select.js';


export default function App(){
  const [secretWord, setSecretWord] = useState('');

  return(
    <div className="container">
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play game?</p>
      <div>
        <WordSelect
          isShown = {!secretWord} // secretWord가 없으면
          wordSelected = {val => setSecretWord(val)}  // function(val){setSecretWord(val)} 과 같다.
        />
        <GameBoard
          secretWord = {secretWord}
          maxErrors = {6}
          isShown = {secretWord}
          />
      </div>
    </div>
    
  );
}