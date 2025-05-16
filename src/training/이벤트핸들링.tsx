import { useState } from 'react'

// export default function App() {
//   const [title, setTitle] = useState('Hello World')
//   return (
//     <>
//       <input
//         value={title}
//         onChange={event => setTitle(event.target.value)}
//       />
//       <h1>{title}</h1>
//     </>
//   )
// }

//이벤트 핸들러를 별도의 함수로 작성성
// export default function App() {
//   const [title, setTitle] = useState('Hello World')

//   // HTMLInputElement를 선언하는 이유는 어떤 element에 handleChange가 연결될지 모르기 때문
//   // 따라서 다른 element에서 사용할 가능성을 차단하기위해 HTMLInputElement로 선언
//   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setTitle(event.target.value)
//   }

//   return (
//     <>
//       <input
//         value={title}
//         onChange={handleChange}
//       />
//       <h1>{title}</h1>
//     </>
//   )
// }

// handlekeydown을 사용하여 Enter키를 눌렀을때 처리하는 방법
// export default function App() {
//   const [title, setTitle] = useState('Hello World')
//   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setTitle(event.target.value)
//   }

//   function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
//     // 한글입력처리를 위해 event.isComposing을 사용
//     // 한글입력중일때는 event.key가 Enter여도 처리하지 않음
//     // event.isComposing은 한글입력중인지 아닌지를 판단하는 속성

//     // nativeEvent를 사용하는 이유는 event가 React의 SyntheticEvent이기 때문에
//     // 원래의 DOM 이벤트를 사용해야 하기 위해 nativeEvent를 사용
//     if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
//       console.log(event.currentTarget.value)
//     }
//   }

//   return (
//     <>
//       <input
//         value={title}
//         onChange={handleChange}
//         onKeyDown={handleKeyDown}
//       />
//       <h1>{title}</h1>
//     </>
//   )
// }

// 입력 글자수가 13자 이상일때 글자색을 바꾸는 방법
// import { useState } from 'react'
// import './App.css'

// export default function App() {
//   const [title, setTitle] = useState('')

//   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setTitle(event.target.value)
//   }

//   function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
//     if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
//       console.log(event.currentTarget.value)
//     }
//   }
//   return (
//     <>
//       <input
//         value={title}
//         onChange={handleChange}
//         onKeyDown={handleKeyDown}
//       />
//       <h1 className={title.length > 13 ? 'active' : ''}>{title}</h1>
//     </>
//   )
// }

// 박스의 크기를 변경하는 방법
export default function App() {
  const [title, setTitle] = useState('')
  const [width, setWidth] = useState(200)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      console.log(event.currentTarget.value)
    }
  }
  return (
    <>
      <input
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <h1 className={title.length > 13 ? 'active' : ''}>{title}</h1>
      <div
        style={{
          width: `${width}px`
        }}
        className="box"
        onClick={() => {
          setWidth(width + 10)
        }}></div>
    </>
  )
}
