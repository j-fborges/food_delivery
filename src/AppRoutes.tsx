import { Routes, Route } from 'react-router'
import RestaurantList from './components/RestaurantList'
import RestaurantDishes from './components/RestaurantDishes'
import { Dispatch, SetStateAction } from 'react'
import { ModalDish } from './App'

interface AppRoutesProps {
  selectDish: Dispatch<SetStateAction<ModalDish>>;
}

function AppRoutes({selectDish}:AppRoutesProps) {

    return (<Routes>
      <Route path="/" element={<RestaurantList/>} />
      <Route path="/restaurant/:id" element={<RestaurantDishes selectDish={selectDish}/>}/>
    </Routes>
  )
}

export default AppRoutes