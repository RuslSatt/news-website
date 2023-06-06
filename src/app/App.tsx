import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import AppRouter from "./providers/AppRouter/AppRouter";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
      <div className={classNames('app', [theme], {})}>
          <button onClick={toggleTheme}>
            Сменить тему
          </button>
          <Link to={'/'}>Главная</Link>
          <Link to={'/about'}>О странице</Link>
          <AppRouter/>
      </div>
  )
}

export default App
