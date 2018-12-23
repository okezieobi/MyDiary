"use strict";
import diaryList from "../models/diaryModel";

class DiaryController {
    static getAll(req, res) {
        res.status(200).json({
            diaryList,
            message: "Diary entries successfully retrieved"
        })
    }
    static createOne(req, res) {
        if (!req.body.title) {
            res.status(400).json({
                message: "Title is required"
            })
        } else if (!req.body.description) {
            res.status(400).json({
                message: "Description is required"
            })
        } else {
            const diaryEntry = {
                id: diaryList.length,
                title: req.body.title,
                description: req.body.description
            }

            diaryList.push(diaryEntry);
            res.status(201).json({
                message: "Diary Entry successfully created",
                diaryEntry
            });
        }
    }
    static getOne(req, res, err) {
        const id = parseInt(req.params.id, 10);
        const diaryEntry = diaryList.find(diaryItem => diaryItem.id === id);
        if (diaryEntry) {
            res.status(200).json({
                message: "Diary entry successfully retrieved",
                diaryEntry
            })
        } else {
            res.status(404).json({
                message: "Diary entry does not exist"
            });
        }

    }
    static updateOne(req, res, err) {
        const id = parseInt(req.params.id, 10);
        const diaryEntry = diaryList.find(diaryItem => diaryItem.id === id);
        if (!diaryEntry) {
            res.status(404).json({
                message: "Diary entry does not exist"
            });
        } else if (!req.body.title) {
            res.status(400).json({
                message: "Title is required"
            })
        } else if (!req.body.description) {
            res.status(400).json({
                message: "Description is required"
            })
        } else {
            const updatedDiaryEntry = {
                id: diaryEntry.id,
                title: req.body.title,
                description: req.body.description
            }

            diaryList.splice(diaryEntry.id, 1, updatedDiaryEntry);
            res.status(200).json({
                message: "Diary entry updated successfully",
                updatedDiaryEntry
            })
        }
    }
    static deleteOne(req, res, err) {
        const id = parseInt(req.params.id, 10);
        const diaryEntry = diaryList.find(diaryItem => diaryItem.id === id);
        if (!diaryEntry) {
            res.status(404).json({
                message: "Diary entry does not exist"
            });
        } else {
            diaryList.splice(diaryEntry.id, 1);
            res.status(200).json({
                message: "Diary entry successfully deleted"
            })
        }
    }
}

export default DiaryController;