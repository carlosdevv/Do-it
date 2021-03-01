import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'

import { ExperienceBarContainer, CurrentExperienceBar } from './styles';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
  return (
    <ExperienceBarContainer>
      <span>0 xp</span>
      <div >
        <div style={{ width: `${percentToNextLevel}%`, }} />

        <CurrentExperienceBar style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience}xp
        </CurrentExperienceBar>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarContainer>
  )
}