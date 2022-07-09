import React, {useRef, useState,useMemo, useCallback} from "react";

// import SignupPage from "./page/SignupPage";
// import LoginPage from "./page/LoginPage";

function countActiveUsers(users){
  console.log('활성사용자 수를 세는 중...');
  return users.filter(user=>user.active).length
}

const initialState = {
  inputs:{
    username:'',
    email:''
  },
  users:[
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
}
function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
