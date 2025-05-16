// import TextField from '../components/TextField'
// import { useState } from 'react'
// export default function App() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   function logIn() {
//     console.log('로그인')
//     console.log('이메일:', email)
//     console.log('비밀번호:', password)
//   }
//   return (
//     <>
//       <TextField
//         type="email"
//         label="이메일"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <TextField
//         type="password"
//         label="비밀번호"
//         hint="대소문자를 하나 이상 포함해야 합니다."
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         placeholder="비밀번호를 입력하세요."
//         onKeyDown={e => {
//           if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
//             console.log(e.currentTarget.value)
//           }
//         }}
//       />
//       <button onClick={logIn}>로그인</button>
//     </>
//   )
// }
