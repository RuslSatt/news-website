import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {classNames} from "helpers/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
      <div className={classNames('app', [theme], {})}>
          <button onClick={toggleTheme}>
            Сменить тему
          </button>
          <Link to={'/'}>Главная</Link>
          <Link to={'/about'}>О странице</Link>
          <Suspense fallback={'Loading...'}>
              <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
              </Routes>
          </Suspense>
      </div>
  )
}

export default App
