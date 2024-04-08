import Styles from './Home.module.css'
import Card from '../card/Card'
import SideBar from '../sideBar/SideBar'
import propTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Home({ products }) {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [])

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

Home.propTypes = {
  products: propTypes.array.isRequired
}

export default Home
