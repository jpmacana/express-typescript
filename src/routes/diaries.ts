/** @format */

import express from "express";

import * as diaryService from "../services/diaryService";
import toNewDiaryEntry from "../utils/utils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryService.getEntriesWithOutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryService.findById(+req.params.id); // Convierte el id que venia como String a Number

  return diary !== null ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {

  try {

    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = diaryService.addDiary(newDiaryEntry);


    res.json(addedDiaryEntry)


  } catch (e: any) {
    res.status(400).send(e.message)

  }



});

export default router;
