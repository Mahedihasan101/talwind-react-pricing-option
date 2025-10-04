
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/daisyNav'
import NavBar from './NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'

const pricingPromise = fetch('/public/PricingData.json')
  .then(res => res.json())


function App() {


  return (
    <>
      <header>
        <nav className='mt-4'>
          <NavBar></NavBar>
        </nav>
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>


    </>
  )
}

export default App
