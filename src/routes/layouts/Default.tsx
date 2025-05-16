import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useOutlet } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
export default function Default() {
  const outlet = useOutlet()
  return (
    <>
      <Header />

      {/* This is where the child routes will be rendered. index.tsx에서 children에 있는 element들이 나오는 곳*/}
      {/* <Outlet /> */}

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          {outlet}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  )
}
