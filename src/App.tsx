import {Counter} from "./components/Counter";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense} from "react";
import {useTheme} from "./theme/UseTheme";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
      <div className={`app ${theme}`}>
          <button onClick={toggleTheme}>
            Сменить тему
          </button>
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
