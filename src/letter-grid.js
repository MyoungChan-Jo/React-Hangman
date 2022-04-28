import Letter from './letter';

export default function({secretWord, guessedLetters}){
  // 넘어온 글씨에 따라 스펜태그를 만들어서 스팬태그 안에 각각의 글씨가 일단 나오게 한다.
  // <span>r</span>...<span>t</span> 이런식으로.!
  // 위의 스팬들은 letters 라는 변수명에 넣어줄 것이다. 
  // react 문자를 배열로 바꿔주어야 한다. 대상.split('')으로 잘라버린다. ['r','e',...'t']
  // 배열의 특정조건에 맞는 값만 정리해서 새로운 배열로 만들어주어야한다. -> map
  let letters = secretWord
                .split('')
                .map((letter, index) => {
                  let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                  return(
                    <Letter
                      value={letter}
                      isShown={isShown}
                      key={index}
                    />
                  )
                });

  return(
    <div className="flex">
        {letters}
    </div>
  );
}