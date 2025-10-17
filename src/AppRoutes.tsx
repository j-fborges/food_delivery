import { Routes, Route } from 'react-router'
import RestaurantList from './components/RestaurantList'
import RestaurantDishes from './components/RestaurantDishes'

function AppRoutes() {

    return (<Routes>
      <Route path="/" element={<RestaurantList/>} />
      <Route path="/restaurant" element={<RestaurantDishes/>}/>
    </Routes>
  )
}

export default AppRoutes