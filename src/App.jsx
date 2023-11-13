/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from 'react'
import './sass/App.scss'
import NavigationBar from './Components/NavigationBar'
import { Outlet } from 'react-router-dom'

const App = () => {
  //side-effect/hook applied for cookie to be rendered once when browser is refreshed with cross-origin applied
  useEffect(() =>{
    document.cookie = "myCookie=myValue; SameSite=None; Secure";
  }, [])

  return ( 
    <div className="main-container">
      <NavigationBar />
      <Outlet />
    </div>

   );
}
 
export default App
