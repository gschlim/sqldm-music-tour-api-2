const router = require("express").Router();
const db = require("../models");
const { Event } = db;

router.get("/", async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (e) {
    res.status(500);
    console.log(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const events = await Event.findOne({ where: { event_id: req.params.id } });
    res.status(200).json(events);
  } catch (e) {
    res.status(500);
    console.log(e);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const params = req.body;
    await Event.create(params)
    res.status(200).json({status: 'ok'});
  } catch (e) {
    res.status(500);
    console.log(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const params = req.body;
    const events = await Event.update(params, {
      where: { event_id: req.params.id },
    });
    res.status(200).json(events);
  } catch (e) {
    res.status(500);
    console.log(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Event.destroy({
      where: {event_id: req.params.id}
    });
    res.status(200).json(events);
  } catch (e) {
    res.status(500);
    console.log(e);
  }
});

module.exports = router;
