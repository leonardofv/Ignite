import S from './sideBar.module.css';
import { PencilLine } from '@phosphor-icons/react';

export function SideBar() {
    return (
        <aside className={S.sideBar}>
            
            <img 
                className={S.cover} 
                src="https://bairesdev.mo.cloudinary.net/blog/2023/09/How-Many-Web-Developers-in-the-World-1.jpg?tx=w_500,q_50" 
            />

            <div className={S.profile}>

                <img 
                    className={S.avatar} 
                    src="https://github.com/leonardofv.png" 
                />

                <strong>Leonardo</strong>
                <span>
                    Developer
                </span>
            </div>

            <footer className={S.footer}>
                <a href="">
                    <PencilLine 
                        size={20}
                    />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}