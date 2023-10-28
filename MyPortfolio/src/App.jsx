/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from 'react'
const App = () => {
  //hook applied for cookie to be rendered once when browser is refreshed
  useEffect(() =>{
    document.cookie = "myCookie=myValue; SameSite=None; Secure";
  }, [])
  return ( 
    <div className="main-container"></div>

   );
}
 
export default App
