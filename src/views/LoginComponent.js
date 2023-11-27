import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import axios from axios;

function LoginPage() {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const LoginFunc = (e) => {
    e.preventDefault();
    setMsg("Loading...");

    //API
    let body = {
      id,
      password
    }
    axios.post(LOGIN_API_KEY, body)
    .then(res => {
      //통신 이후 클릭이 되도록
      setLoading(false);
      //로딩 메시지 1.5후 사라짐
      setTimeout(() => setMsg(""), 1500);

      const code = res.data.code;

      if (code === 400) {
        alert("비어있는 내용입니다.")
      } else if (code === 401) {
        alert("존재하지 않는 id 입니다.")
      } else if (code === 402) {
        alert("비밀번호가 일치하지 않습니다.")
      } else {
        dispatch(loginUser(res.data.userInfo));
      }
    });
    setLoading(true);
  }

  return (
    <div>
      <form 
      onSubmit={LoginFunc}
      className='login-form'
      >
        <input
          type='text'
          placeholder='아이디'
          name='아이디' 
          className='input-id'
          onChange={e => setId(e.target.value)}
          />
        <br />
        <input
          type='password'
          placeholder='비밀번호'
          name='비밀번호' 
          className='input-pw'
          onChange={e => setPassword(e.target.value)}
          />
        <br />
        <button
          //초기값 -> false, submit 이벤트 발생 -> true, axios 통신 끝나면 -> 다시 false
          disabled={loading}
          type='submit'
          className='submit-btn'
        >
        로그인
        </button>
        <div className='msg'
        >
          {msg}
        </div>
    </form>
  </div>
   
  );
}

export default LoginComponent;
