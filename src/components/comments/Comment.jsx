import S from './Comment.module.css';
import { Avatar } from '../avatar/Avatar';
import { ThumbsUp, Trash } from '@phosphor-icons/react';

export function Comment() {
    return (
        <div className={S.comment}>
            <Avatar hasBorder={false} src="https://github.com/leonardofv.png" />

            <div className={S.commentBox}>
                <div className={S.commentContent}>
                    <header>
                        <div className={S.authorAndTime}>
                            <strong>Leonardo Vasconcelos</strong>
                            <time title="13 de abril" dateTime="2025-04-13 10:29:36">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar cometário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom, parabéns!!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}