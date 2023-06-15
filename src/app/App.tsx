import './styles/index.scss'
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import AppRouter from "./providers/AppRouter/AppRouter";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "../shared/ui/ThemeSwitcher/ThemeSwitcher";

const App = () => {
    const {theme} = useTheme();

    return (
      <div className={classNames('app', [theme], {})}>
          <ThemeSwitcher/>
          <Navbar/>
          <AppRouter/>
      </div>
  )
}

export default App
