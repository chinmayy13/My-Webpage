import React, { createContext, useContext, useState, ReactNode } from 'react';

type Mood = 'chill' | 'sad' | 'hype';

interface MoodContextType {
  currentMood: Mood;
  setMood: (mood: Mood) => void;
  getMoodEmoji: () => string;
  getMoodDescription: () => string;
  getMoodSong: () => { title: string; artist: string; url: string };
}

const defaultMoodContext: MoodContextType = {
  currentMood: 'chill',
  setMood: () => {},
  getMoodEmoji: () => '😌',
  getMoodDescription: () => 'Just vibing',
  getMoodSong: () => ({ title: 'Lofi beats', artist: 'Chillhop', url: '' }),
};

const MoodContext = createContext<MoodContextType>(defaultMoodContext);

export const useMood = () => useContext(MoodContext);

export const MoodProvider = ({ children }: { children: ReactNode }) => {
  const [currentMood, setCurrentMood] = useState<Mood>('chill');

  const moodData = {
    chill: {
      emoji: '😌',
      description: 'Just vibing in my own space',
      song: {
        title: 'Lofi beats to study/relax to',
        artist: 'Chillhop Music',
        url: '',
      },
    },
    sad: {
      emoji: '😔',
      description: 'In my feels today',
      song: {
        title: 'When the party\'s over',
        artist: 'Billie Eilish',
        url: '',
      },
    },
    hype: {
      emoji: '🔥',
      description: 'Energy through the roof!',
      song: {
        title: 'MONTERO',
        artist: 'Lil Nas X',
        url: '',
      },
    },
  };

  const setMood = (mood: Mood) => {
    setCurrentMood(mood);
  };

  const getMoodEmoji = () => moodData[currentMood].emoji;
  const getMoodDescription = () => moodData[currentMood].description;
  const getMoodSong = () => moodData[currentMood].song;

  return (
    <MoodContext.Provider
      value={{
        currentMood,
        setMood,
        getMoodEmoji,
        getMoodDescription,
        getMoodSong,
      }}
    >
      {children}
    </MoodContext.Provider>
  );
};