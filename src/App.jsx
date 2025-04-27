import S from './app.module.css';
import './globals.css'

import { Header } from './components/header/header';
import { SideBar } from './components/sideBar/sideBar';
import { Post } from './components/posts/post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/leonardofv.png',
      name: 'Leonardo Vasconcelos',
      role: 'Developer'
    },
    content: [       
      { type:  'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'acabei de subir mais um projeto no meu perfil do github. É um projeto que fiz no NLW Return, evento da Rocktseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content: 'leonardofv/doctorCare' },
    ],
    publishedAt: new Date('2025-04-25 17:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/leonardofv.png',
      name: 'Leonardo Vasconcelos',
      role: 'Developer'
    },
    content: [       
      { type:  'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'acabei de subir mais um projeto no meu perfil do github. É um projeto que fiz no NLW Return, evento da Rocktseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content: 'leonardofv/doctorCare' },
    ],
    publishedAt: new Date('2025-04-26 17:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={S.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}

export default App;
