import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Nav from './components/header'
import Home from './pages/Home';
import { motion } from 'framer-motion';
import ForRecruiters from './pages/ForRecruiters';


export default function App() {

  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1 }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/for-recruiters' element={<ForRecruiters />} />
        </Routes>
      </motion.div>
      <Footer />
    </>
  )
}