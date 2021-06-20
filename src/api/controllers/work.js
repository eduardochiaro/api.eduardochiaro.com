import data from '../../../assets/data/jobs.json';

const getAll = (req, res) => {
  res.json({results: data});
}
export default { getAll }