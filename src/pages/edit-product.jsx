import ProductForm from '../components/product/ProductForm'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
  const { id: productId } = useParams()

  const onSubmit = (data) => {
    axios
      .put(`http://localhost:8000/products/${productId}`, data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className="card">
      <div className="card-header" data-testid="card-header">
        ویرایش محصول
      </div>
      <div className="card-body">
        <ProductForm onSubmit={onSubmit} mode="edit" />
      </div>
    </div>
  )
}

export default EditProduct
