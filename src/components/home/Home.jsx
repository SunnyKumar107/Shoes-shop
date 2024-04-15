import Styles from './Home.module.css'
import Card from '../card/Card'
import SideBar from '../sideBar/SideBar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  const products = useSelector((state) => state.products)
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
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
