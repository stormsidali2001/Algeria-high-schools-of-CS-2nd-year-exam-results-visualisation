import type { NextPage } from 'next'
import VisContainer from '../components/VisContainer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
          <VisContainer 
              styles={{
                  width:'80%',
                  height:'80%'
               }}
            />
      </main>
    </div>
  )
}

export default Home
