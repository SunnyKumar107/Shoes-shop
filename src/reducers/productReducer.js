import { createSlice } from '@reduxjs/toolkit'
import productsService from '../services/products'

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return action.payload
    }
  }
})

export const { setProducts } = productsSlice.actions

export const initializeProducts = () => {
  return async (dispatch) => {
    const allProduct = await productsService.getAll()
    dispatch(setProducts(allProduct))
  }
}

export const filterProducts = (type) => {
  const color = ['red', 'black', 'white', 'green', 'blue']
  const colorType = color.find((c) => c === type)
  const category = ['sneakers', 'flats', 'sandals', 'heels']
  const categoryType = category.find((c) => c === type)
  const price = [0, 50, 100, 150]
  const priceType = price.find((p) => Number(p) === type)

  return async (dispatch) => {
    const allProduct = await productsService.getAll()
    switch (type) {
      case colorType: {
        const filteredByColor = allProduct.filter((p) => p.color === type)
        dispatch(setProducts(filteredByColor))
        break
      }
      case categoryType: {
        const filteredByCategory = allProduct.filter((p) => p.category === type)
        dispatch(setProducts(filteredByCategory))
        break
      }
      case priceType: {
        const filterByType = allProduct.filter((p) => p.newPrice > type)

        // const lessPrice = type + 50;
        // const filtered = filteredByPrice.filter((p) => p.newPrice < lessPrice);
        // console.log(filtered);
        dispatch(setProducts(filterByType))
        break
      }
      default: {
        dispatch(setProducts(allProduct))
      }
    }
  }
}

export const searchByText = (text) => {
  return async (dispatch) => {
    const allProduct = await productsService.getAll()
    const searched = allProduct.filter((p) =>
      p.title.toLowerCase().includes(text.toLowerCase())
    )
    dispatch(setProducts(searched))
  }
}

export default productsSlice.reducer
