import { useState } from "react";
import LetterGrid from './letter-grid';
import ButtonGrid from './button-grid';

export default function({secretWord, maxErrors, isShown}){
  // 변수명 앞에 set 을 써주는 것이 관례이다.
  const [guessedLetters, setGuessedLetter] = useState([]);

  // 횟수제한 만들기.
  const [errorCount, setErrorCount] = useState(0);

  // letterGuessedHandler 는 게임보드에 들어오는 글씨는 letterGuessed라는 속성으로 받아와서 배열로 만들어주는 역할을 한다.
  const letterGuessedHandler = function(letter){
    let val = letter.toLowerCase(); // 네모박스 대문자를 소문자로 변환

    //spread operator 스프레드 연산자(전개연산자)
    //[...변수명] -> 배열
    // = let list = querySelectorAll('.list') = 유사배열이라 하며 slice, filter 함수를 쓸 수 없다. 때문에 오리지널 배열로 바꿀땐
    // [...list] 를 사용한다. iterableObj가 만약 1,2,3 이면 [...iterableObj,'4','five',6]; = 1,2,3,4,five,6 이 나온다.
    //setCount(prevCount) => prevcount -1 -> function(prevCount){prevCount-1} -> function(prev){[...prev, val]}
    //
    setGuessedLetter(prev=>[...prev,val]);
    
    if(secretWord.toLowerCase().indexOf(val) === -1){ // == , === 의 차이점도 알아야한다. === 는 타입까지 판단한다. 0 === '0' -> false 숫자형과 문자형이기 때문.
      setErrorCount(errorCount + 1);
    }
  }
  
  return(
    <div className={isShown ? '':'hidden'}/*if문 함축식*/>
        <div>
          남은 횟수 : {maxErrors - errorCount}
        </div>
        <LetterGrid
          secretWord = {secretWord}
          guessedLetters = {guessedLetters} //클릭한 버튼의 글씨를 전달받을 예정이다. guessedLetters 로 바꾸기전에 {['a','r']} 로 받아왔다. 배열로 넘길 방법이 없었기때문이다.
        />
        <ButtonGrid
          letterGuessed={letterGuessedHandler}
          isShown={errorCount < maxErrors}
        
        />
    </div>
  );
}