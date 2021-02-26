import { useState, useEffect, useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { FiChevronRight, FiX, FiCheck } from "react-icons/fi";
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown() {
  const { 
    minutes, 
    seconds, 
    finished, 
    active, 
    startCountdown, 
    resetCountdown, 
  } = useContext(CountdownContext)
  //primeiro vai transformar a variavel em string.
  //split vai separar a string em dois, ex: '25' = '2' '5'.
  //padStart vai colocar um 0 caso a string tenha 1 posição, ex: '5' = '05' 
  // e depois o split partira em '0' '5'.
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>

      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { finished ? (
        <button
          disabled
          className={`${styles.countdownButton}`}
        >
          Ciclo Finalizado
          <FiCheck size={18} />
        </button>
      ) : (
          <>
            {active ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}>
                Abandonar o ciclo
                <FiX size={18} />
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}>
                  Iniciar um ciclo
                  <FiChevronRight size={18} />
                </button>
              )}
          </>
        )}

    </div>
  )
}