import { useState } from "react";

export default function({wordSelected, isShown}){ //앞에는 나갈값 , 뒤에는 들어올 값
    const [secretWord, setSecretWord] = useState('');

    return(
        <div className={isShown ? '':'hidden'}>
            <input
                type="text"
                //input.change(function(e){e.target}) this 와 같음. 
                //function(){} = ()=>{}
                onChange={(e)=>setSecretWord(e.target.value)}
            />
            <button
                onClick={(e)=>wordSelected(secretWord)}
            >Set Word</button>
        </div>
    )
}

//빌드해보기
/*
개발자 -> 프로덕션으로 빌드하기 위해서다.
서버에 런칭가능하게 하기 위해 index.html로 이동하여
terminal / powershell 로 들어가 yarn build 입력
*/