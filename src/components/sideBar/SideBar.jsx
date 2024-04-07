import React from 'react'
import Styles from './SideBar.module.css'
import { filterProducts } from '../../reducers/productReducer'
import { useDispatch } from 'react-redux'

function SideBar() {
  const dispatch = useDispatch()

  const handleFilterType = (type) => {
    dispatch(filterProducts(type))
  }

  return (
    <div className={Styles.sideBar}>
      <div className={Styles.filter_type}>
        <h3>Category</h3>
        <div className={Styles.filter_box}>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('all')}
            />
            <span className={Styles.checkmark}></span>All
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('sneakers')}
            />
            <span className={Styles.checkmark}></span>Sneakers
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('flats')}
            />
            <span className={Styles.checkmark}></span>Flats
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('sandals')}
            />
            <span className={Styles.checkmark}></span>Sandals
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('heels')}
            />
            <span className={Styles.checkmark}></span>Heels
          </label>
        </div>
      </div>
      <div className={Styles.filter_type}>
        <h3>Price</h3>
        <div className={Styles.filter_box}>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('all')}
            />
            <span className={Styles.checkmark}></span>All
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType(0)}
            />
            <span className={Styles.checkmark}></span>$0 - $50
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType(50)}
            />
            <span className={Styles.checkmark}></span>$50 - $100
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType(100)}
            />
            <span className={Styles.checkmark}></span>$100 - $150
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType(150)}
            />
            <span className={Styles.checkmark}></span>Over $150
          </label>
        </div>
      </div>
      <div className={Styles.filter_type}>
        <h3>Colors</h3>
        <div className={Styles.filter_box}>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('all')}
            />
            <span className={Styles.checkmark}></span>All
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('black')}
            />
            <span className={Styles.checkmark}></span>Black
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('blue')}
            />
            <span className={Styles.checkmark}></span>Blue
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('red')}
            />
            <span className={Styles.checkmark}></span>Red
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('white')}
            />
            <span className={Styles.checkmark}></span>White
          </label>
          <label>
            <input
              type="radio"
              name="check_box"
              onClick={() => handleFilterType('green')}
            />
            <span className={Styles.checkmark}></span>Green
          </label>
        </div>
      </div>
    </div>
  )
}

export default SideBar
