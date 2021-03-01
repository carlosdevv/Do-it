import { useContext, ButtonHTMLAttributes } from 'react';
import { FiChevronRight, FiX, FiCheck } from "react-icons/fi";
import { CountdownContext } from '../../contexts/CountdownContext';
import { CountdownButton, CountdownButtonActive, CountdownContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Countdown: React.FC<ButtonProps> = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
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

      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      { hasFinished ? (
        <CountdownButton disabled>
          Ciclo Finalizado
          <FiCheck size={18} />
        </CountdownButton>
      ) : (
          <>
            {isActive ? (
              <CountdownButtonActive
                type="button"
                onClick={resetCountdown}>
                Abandonar o ciclo
                <FiX size={18} />
              </CountdownButtonActive>
            ) : (
                <CountdownButton
                  type="button"
                  onClick={startCountdown}>
                  Iniciar um ciclo
                  <FiChevronRight size={18} />
                </CountdownButton>
              )}
          </>
        )}

    </div>
  )
}

export default Countdown