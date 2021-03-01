import React from 'react';

import Head from 'next/head';

import styles from '../styles/pages/LeaderBoard.module.css';
import { Menu } from '../components/Menu/Menu';


const LeaderBoard: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rabit</title>
      </Head>
      <Menu />
      <div><h1>LeaderBoard</h1></div>
    </>
  )
}

export default LeaderBoard;
