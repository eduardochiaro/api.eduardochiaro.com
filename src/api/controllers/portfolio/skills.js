import data from "../../../../assets/data/skills.json";

const getAll = (req, res) => {
  res.json({ results: data });
};
export default { getAll };
