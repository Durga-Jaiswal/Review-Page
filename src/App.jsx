import { useState } from 'react'
import Review from './Review'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <section className="container">
          <div className='title'>
            <h2>Our Reviews</h2>
            
          </div>
          <Review/>
        </section>
      </main>
    </>
  )
}

export default App
