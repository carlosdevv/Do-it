import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface CountdownContextData {
  minutes: number;
  seconds: number;
  finished: boolean;
  active: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  //tipagem para componente react
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [active, setActive] = useState(false);
  const [finished, setFinished] = useState(false);

  //Math.floor = arredondar o valor
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setActive(false);
    setTime(0.1 * 60);
    setFinished(false);
  }

  useEffect(() => {
    if (active && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (active && time === 0) {
      setFinished(true);
      setActive(false);
      startNewChallenge();
    }
  }, [active, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        active,
        finished,
        startCountdown,
        resetCountdown,
      }}>
      {children}
    </CountdownContext.Provider>
  );
}