"use strict";

import diaryController from "../controllers/diaryController";

export default (router) => {
    router.route("/v1/entries")
        .get(diaryController.getAll)
        .post(diaryController.createOne);

    router.route("/v1/entries/:id")
        .get(diaryController.getOne)
        .put(diaryController.updateOne)
        .delete(diaryController.deleteOne);

}