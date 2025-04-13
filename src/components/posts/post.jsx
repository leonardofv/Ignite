import S from './post.module.css';

export function Post() {
    return (
        <article className={S.post}>
            <header className={S.header}>
                <div  className={S.author}>
                    <img className={S.avatar} src="https://github.com/leonardofv.png" />

                    <div className={S.authorInfor}>
                        <strong>Leonardo Vasconcelos</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time title="13 de abril" dateTime="2025-04-13 10:29:36">Públicado há 1h</time>
            </header>

            <div className={S.content}>
                <p>Fala galera</p>

                <p>acabei de subir mais um projeto no meu perfil do github. É um projeto que fiz no NLW Return, evento da Rocktseat. O nome do projeto é DoctorCare.</p>

                <p><a href="">leonardofv/doctorCare</a></p>

                <p>
                    <a href="">#novoprojeto</a>
                    <a href=""> #nlw</a>
                    <a href=""> #rocktseat</a>
                </p>
            </div>
        </article>
    )
}
