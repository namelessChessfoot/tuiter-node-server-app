import * as tuitsDao from "../../tuits/tuits-dao.js";
// import asdf from "./tuits.js";

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.liked = false;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);

  // asdf.forEach(async (a) => {
  //   delete a._id;
  //   await tuitsDao.createTuit(a);
  // });
  // res.sendStatus(200);
};
const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
};
const updateTuit = async (req, res) => {
  const tid = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tid, updates);
  res.json(status);
};
const deleteTuit = async (req, res) => {
  const tid = req.params.tid;
  const status = await tuitsDao.deleteTuit(tid);
  res.json(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
