import {Counter} from "./components/Counter";
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense} from "react";

const App = () => {
  return (
      <div className="app">
          <Link to={'/'}>Главная</Link>
          <Link to={'/about'}>О странице</Link>
          <Suspense fallback={'Loading...'}>
              <Routes>
                <Route path={'/'} element={<MainPageAsync/>}/>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
              </Routes>
          </Suspense>
      </div>
  )
}

export default App
