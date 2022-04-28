import Button from './button';
import Letter from './letter';

export default function({letterGuessed, isShown}){ // #8-4 {letterGuessed}를 추가해서 밑의 onclick에 넣어준다.
// a~z 배열생성, 배열의 값마다 할일을 letter.js에게 일을 시켜 버튼을 만들고
// 변수명 letters를 만들고 <button>A</button> 이런식으로 만들어 줄 것이다.
// map 은 새로운 배열을 만들 때 사용한다.
  let letters = [
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X','Y','Z' 
  ];

  let buttons = letters.map((letter, index)=>(
    <Button
    value={letter}
    key={index}
    onClick={letterGuessed } // #8-1 button에 onclick={clickhandler}로 추가해주기 button.js로 이동
  />
  ));

  let className = 'flex flex-wrap';
  if(!isShown){
    className += ' hidden';
  }

  return(
    <div className={className}>
        {buttons}
    </div>
  );
}
