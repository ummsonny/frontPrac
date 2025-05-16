import { create } from 'zustand'

//반응형 데이터 생성
export const useColorStore = create<{
  color: string
  setColor: (color: string) => void
}>(set => {
  return {
    color: 'red',
    setColor: (color: string) => {
      set({
        // color: color
        color // js에서는 키값과 value가 같으면 color만 써도 됨
      })
    }
  }
})
