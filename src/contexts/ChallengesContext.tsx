import { createContext, ReactNode, useState } from 'react';

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    currentCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}
interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [currentCompleted, setCurrentCompleted] = useState(0);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        console.log('New challenge')
    }

    return (
        <ChallengesContext.Provider 
        value={{ 
            level,
            currentExperience, 
            currentCompleted, 
            levelUp,
            startNewChallenge,
        }}>
            {children}
        </ChallengesContext.Provider>
    );
}