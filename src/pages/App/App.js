import './App.css';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import AuthPage from '../AuthPage/AuthPage';
import * as FoodtruckAPI from '../../utilities/foodTruck-api'
import {useState, useEffect} from 'react'

function App() {
  const [foodTrucks, setFoodTrucks] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await FoodtruckAPI.getAll()
        setFoodTrucks(data)
      } catch(e) {
        console.log(e)
      }
    })()
  }, [])


  return (
    <div className="App">
      <AuthPage />
      {/* <HomePage foodTrucks={foodTrucks} />
      <LoginPage /> */}
    </div>
  );
}

export default App;
