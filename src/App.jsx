import React from 'react'
import style from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>

      <div className={`${style.paddingX} ${style.flexCenter}`} >
        <div className={`${style.boxWidth}`}>
          Navbar
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          Hero
        </div>
      </div>

      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          Stats
          Bussiness
          Billing
          CardDeal
          Testimonials
          Clients
          CTA
          Footer
        </div>
      </div>

    </div>
  )
}

export default App