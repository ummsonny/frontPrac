import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router'
export default function Default() {
  return (
    <>
      <Header />

      {/* This is where the child routes will be rendered. index.tsx에서 children에 있는 element들이 나오는 곳*/}
      <Outlet />

      <Footer />
    </>
  )
}
