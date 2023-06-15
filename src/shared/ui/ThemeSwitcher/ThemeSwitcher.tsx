import cls from './ThemeSwitcher.module.scss'
import {classNames} from "shared";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import {Button, ButtonTheme} from "../Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, [className], {} )}
            theme={ButtonTheme.CLEAR}
        >
            <div className={cls.iconContainer}>
                {theme === Theme.LIGHT ? (<LightIcon className={cls.icon}/>) : (<DarkIcon className={cls.icon}/>)}
            </div>
        </Button>
    );
};
