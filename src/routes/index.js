import DefaultLayout from 'layouts/Default'
import EditProduct from 'pages/edit-product'
import AddProduct from 'pages/add-product'

const indexRoutes = [{ path: '/', component: DefaultLayout }]

const AppRoutes = [
  {
    path: '/products/:id/edit',
    name: 'ویرایش محصولات',
    component: EditProduct,
    private: true,
    showInNav: false,
  },
  { path: '/', pathTo: '/products/1/edit', name: 'Products', redirect: true },
  {
    path: '/add-product',
    name: 'افزودن محصول',
    icon: 'fa fa-plus',
    component: AddProduct,
    private: true,
    showInNav: true,
  },
  { path: '/', pathTo: '/add-product', name: 'Dashboard', redirect: true },
]

export default AppRoutes

export { indexRoutes }
