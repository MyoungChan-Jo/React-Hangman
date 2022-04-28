import { useState } from "react"; // #07-1 useState 로드 

export default function({value, onClick}){ // #08-2 onclick 태그 추가

    const[isClicked, setIsClicked] = useState(false); // #07-2 useState 함수작성 

    let className = 'button'; // #07-3 className={className} 에 대한 변수를 만들어준다. 

    // #07-4 클릭되었을때에 대한 if문 생성 
    if(isClicked){
        //className = className + ' guessed'; 아래와 같음. guessed라는 클래스가 들어오면 안보이게 하기위해 App.css 로 이동해야 한다.
        className += ' guessed';
    };

    // #07-6 clickHandler 함수 생성 - 클릭하면 다 true 로 변함 - 현 단계에서는 클릭한 알파벳 다 사라짐
    function clickHandler(){
        setIsClicked(true);
        onClick(value); // #8-3 onClick 추가. 여기서의 value 는 밑의 return 안의 value 이다. 
    };

    return( // #07-2 className="button" -> className={className} 변수로 변경
        <button
            className={className}
            onClick = {clickHandler} // #07-5 클릭하면이 빠져있으며 변수명 isClicked를 true로 바꾸어야한다. clickHandler가 할일을 만들어주어야 한다.
        >{value}</button> 
  );
}