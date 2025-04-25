import S from './post.module.css';
import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comments/Comment';

export function Post(props) {

    console.log(props);

    return (
        <article className={S.post}>
            <header className={S.header}>
                <div  className={S.author}>
                    <Avatar src={props.author.avatarUrl}/>

                    <div className={S.authorInfor}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title="13 de abril" dateTime="2025-04-13 10:29:36">Públicado há 1h</time>
            </header>

            <div className={S.content}>
                
            </div>

            <form className={S.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={S.commentList}>
                <Comment />
            </div>

        </article>
    )
}
