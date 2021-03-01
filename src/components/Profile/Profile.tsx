import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ProfileContainer } from './styles';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <img src="https://www.github.com/carlosdevv.png" alt="Carlos Lopes" />
      <div>
        <strong>Carlos Lopes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  )
}