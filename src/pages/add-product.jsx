import ProductForm from '../components/product/ProductForm'
import React from 'react'
import axios from 'axios'

const AddProduct = () => {
  const onSubmit = (data) => {
    axios
      .post('http://localhost:8000/products', data)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="card">
      <div className="card-header">افزودن محصول</div>
      <div className="card-body">
      <ProductForm onSubmit={onSubmit} mode="add" />
      </div>
    </div>
  )
}

export default AddProduct
