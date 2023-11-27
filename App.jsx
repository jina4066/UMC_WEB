import React from 'react';
import { useSelector } from "react-redux";
import MyPage from './src/views/Mypage';
import LoginComponent from './src/views/LoginComponent';
function App() {
  const user = useSelector(state => state.user);

  return (
    <>
    {user.id !== "" ? <MyPage /> : <LoginComponent />}
    </>
  );
}