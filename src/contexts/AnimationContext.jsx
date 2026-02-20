import { createContext, useContext } from 'react'

const AnimationContext = createContext({ animationsReady: false })

// eslint-disable-next-line react-refresh/only-export-components
export const useAnimations = () => {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimations must be used within AnimationProvider')
  }
  return context
}

export default AnimationContext
