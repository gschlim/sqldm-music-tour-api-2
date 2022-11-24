const router = require("express").Router();
const db = require("../models");
const { Stage } = db;

router.get("/", async (req, res) => {
  try {
    const stages = await Stage.findAll();
    res.status(200).json(stages);
  } catch (e) {
    res.status(500);
    console.log(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const stages = await Stage.findOne({ where: { event_id: req.params.id } });
    res.status(200).json(stages);
  } catch (e) {
    res.status(500);
    console.log(e);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const params = req.body;
    await Stage.create(params)
    res.status(200).json({status: 'ok'});
  } catch (e) {
    res.status(500);
    console.log(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const params = req.body;
    const stages = await Stage.update(params, {
      where: { event_id: req.params.id },
    });
    res.status(200).json(stages);
  } catch (e) {
    res.status(500);
    console.log(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Stage.destroy({
      where: {event_id: req.params.id}
    });
    res.status(200).json(stages);
  } catch (e) {
    res.status(500);
    console.log(e);
  }
});

module.exports = router;
