import S from './header.module.css';

import logoIgnite from '../../assets/ignite-logo.svg';

console.log(S);

export function Header() {
    return (
        <header className={S.headerContainer}>
            <img src={logoIgnite} alt="Logo Ignite" />
        </header>
    )
}