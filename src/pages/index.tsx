import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home(props) {

  console.log(props)
    return(
        <div className={styles.container}>
          <Head>
            <title>Inicio | move.it</title>
          </Head>
          <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
                <Profile />
                <CompletedChallenges />
                <CountDown />
            </div>
            <div>
                <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    )
}

export const getServerSideProps = async () => {
  //chamada api
  const user = {
    level:1,
    currentExperience: 50,
    challengeCompleted: 2,
  }

  //console.log(user);

  return {
    props: user
  }
}