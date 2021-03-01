import { ButtonHTMLAttributes, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import { BoxChallengeActive, BoxContainer, FailedButton, SuccessButton, BoxChallengeNotActive } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ChallengeBox: React.FC<ButtonProps> = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSuccess() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <BoxContainer>
      { activeChallenge ? (
        <BoxChallengeActive>
          <header>Ganhe {activeChallenge.amount}xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Exercite-se</strong>
            <p>{activeChallenge.description}
            </p>
          </main>

          <footer>
            <FailedButton
              type="button"
              onClick={handleChallengeFailed}>
              Falhei
            </FailedButton>

            <SuccessButton
              type="button"
              onClick={handleChallengeSuccess}>
              Completei
            </SuccessButton>
          </footer>

        </BoxChallengeActive>
      ) : (
          <BoxChallengeNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
          </BoxChallengeNotActive>
        )}
    </BoxContainer >
  )
}

export default ChallengeBox;