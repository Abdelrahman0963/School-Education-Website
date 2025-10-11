import React, { Suspense } from 'react'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  )
}

export default App
