
//! Los tipos se utilizan de manera FIJA, osea no deberiamos estar modificandolas
//? Las interfaces si son dinamicas, osea pueden ser modificadas.

export interface DiaryEntry {
  id: number,
  date: string,
  weather: Weather,
  visibility: Visibility,
  comment: string
}


export enum Weather {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Stormy = "stormy",
  Windy = "windy",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
  VeryPoor = "very poor",
}

//&  Pick y Omit son 2 formas para elegir o extraer propiedades de un objeto.

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' |'date'|'weather'|'visibility' >  
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;
//* Omitimos el id en el POST porque no se ingresa, sino que se genera.
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>



