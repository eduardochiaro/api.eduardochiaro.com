import data from '../../data/jobs.json';

const getAll = (req, res) => {
  res.json({results: data});
}
export default { getAll }