import React from 'react'
import Styles from './CardContainer.module.css'
import Card from '../card/Card'
import SideBar from '../sideBar/SideBar'
import propTypes from 'prop-types'

function CardContainer({ products }) {
  return (
    <div>
      <SideBar />
      <div className={Styles.card_container}>
        {products.map((e) => (
          <Card
            id={e.id}
            img={e.img}
            title={e.title}
            prevPrice={e.prevPrice}
            newPrice={e.newPrice}
            star={e.star}
            key={e.id}
          />
        ))}
      </div>
    </div>
  )
}

CardContainer.propTypes = {
  products: propTypes.array.isRequired
}

export default CardContainer
