const React = require('react');
const { useState, useRef } = React;

//Functinal Component
const GuGuDan = () => {
            
    //비구조화 할당 > 구조 분해 할딩으로 명칭이 변경 됨
    //const [first, setFirst] = React.useState(기본값)
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    
    //Ref 사용하는 방법
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second){
            //set을 할 때 렌더링이 4번 발생할 것처럼 보이나 리액트에서 알아서 비동기로 1번만 실행함
            setResult(' 정답: ' + value)
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        }else{
            setResult('땡');
            setValue('');
        }

        inputRef.current.focus();

    }
    
    return (
        <React.Fragment>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value} />
                <button>입력!</button>
            </form>
            <div id="result">{result}</div>
        </React.Fragment>  
    );
};

// export 해줘야만 다른 파일에서 사용할 수 있다.
module.exports = GuGuDan;