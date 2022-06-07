import { Header } from "./components/Headers";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css';


export function App() {
  

  return (
    
    <div>
      <Header />  
    
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>


    </div>
  )
}


