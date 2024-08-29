import Footer from './components/footer/Footer'
import Nav from './components/header'
import Home from './pages/Home';
import { motion } from 'framer-motion';


export default function Routes() {

  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1 }}
      >
        <Home />
      </motion.div>
      <Footer />
    </>
  )
}