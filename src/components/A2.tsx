import { useColorStore } from '../stores/color'

export default function A2() {
  const color = useColorStore(state => state.color) // 'red'
  return <div style={{ color }}>A2</div>
}
