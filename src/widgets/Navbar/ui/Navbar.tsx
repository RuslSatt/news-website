import React from 'react';
import cls from './Navbar.module.scss'
import {classNames} from "shared";
import {AppLink} from "../../../shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <nav className={classNames(cls.navbar, [className], {} )}>
            <AppLink to={'/'} >Главная</AppLink>
            <AppLink to={'/about'}>О странице</AppLink>
        </nav>
    );
};
