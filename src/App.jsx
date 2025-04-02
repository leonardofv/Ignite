import S from './app.module.css';
import './globals.css'

import { Header } from './components/header/header';
import { SideBar } from './components/sideBar/sideBar';
import { Post } from './components/posts/post';



function App() {
  return (
    <div>
      <Header />
      <div className={S.wrapper}>
        <SideBar />
        <main>
          <Post 
            author="Leonardo Vasconcelos"
            age="25"
          />

          <Post 
            author="Araújo Thiago"
            age="30"
          />
        </main>

      </div>
    </div>
  )
}

export default App
