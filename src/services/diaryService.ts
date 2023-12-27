import diaryData from './data.json';
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from './../types';



const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = () => diaries;

export const getEntriesWithOutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {

  const entry = diaries.find(d => d.id === id);

  if (entry !== undefined) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}


