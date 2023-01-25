import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/valentimm.png',
      name: 'Matheus Valentim',
      role: 'Front-end Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-01 00:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://github.com/dversoza.png',
      name: 'Daniel Versoza',
      role: 'Dev-Ops',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-16 00:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar /> 
        <main>
          {posts.map(post => {
            return( 
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

