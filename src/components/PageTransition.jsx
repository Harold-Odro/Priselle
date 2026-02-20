// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 0,
        paddingBottom: 0
      }}
    >
      {children}
    </motion.div>
  )
}
