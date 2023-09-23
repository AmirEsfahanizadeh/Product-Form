import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const ProductForm = ({ mode , onSubmit }) => {
  const { id: productId } = useParams()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const setFormDefaultValues = (product) => {
    setValue('name', product.name)
    setValue('price', product.price)
    setValue('category', product.category)
    setValue('description', product.description)
  }

  useEffect(() => {
    if (mode === 'edit') {
      axios.get(`http://localhost:8000/products/${productId}`).then((res) => {
        setFormDefaultValues(res.data)
      })
    }
  }, [])

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="name-input" className="form-label">
            نام محصول
          </label>
          <input
            type="text"
            className={`form-control${errors.name ? ' is-invalid' : ''}`}
            data-testid="name-input"
            placeholder="گوشی‌ موبایل"
            {...register('name', {
              required: 'وارد کردن نام محصول اجباری است',
            })}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="price-input" className="form-label">
            قیمت
          </label>
          <input
            type="number"
            className={`form-control${errors.price ? ' is-invalid' : ''}`}
            data-testid="price-input"
            placeholder="1000"
            {...register('price', {
              required: 'وارد کردن قیمت اجباری است',
              min: {
                value: 100,
                message: 'مقدار قیمت باید حداقل 100 باشد',
              },
            })}
          />
          {errors.price && (
            <div className="invalid-feedback">{errors.price.message}</div>
          )}
        </div>
      </div>
      <div className="row mt-4">
        <div className="form-group col-md-6">
          <label htmlFor="category-select" className="form-label">
            دسته‌بندی
          </label>
          <select
            className="form-select"
            data-testid="category-select"
            {...register('category')}
          >
            <option value="mobile">موبایل</option>
            <option value="book">کتاب</option>
            <option value="tshirt">تیشرت</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="description-textarea" className="form-label">
            توضیحات
          </label>
          <textarea
            className={`form-control${errors.description ? ' is-invalid' : ''}`}
            data-testid="description-textarea"
            rows="3"
            {...register('description')}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-4 float-start"
        data-testid="submit-button"
      >
        {mode === 'edit' ? 'ویرایش' : 'افزودن'} محصول
      </button>
    </form>
  )
}

export default ProductForm
