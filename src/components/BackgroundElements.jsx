import React, { memo } from 'react'

const BackgroundElements = memo(() => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      {/* Static background elements - no animations for better performance */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/5 dark:bg-blue-500/3 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-900/5 dark:bg-purple-500/3 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[20%] bg-indigo-900/3 dark:bg-indigo-500/2 rounded-full blur-3xl opacity-15" />
    </div>
  )
})

BackgroundElements.displayName = 'BackgroundElements'

export default BackgroundElements