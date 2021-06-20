import data from '../../data/apps.json';

const getAll = (req, res) => {
  res.json({results: data});
}
export default { getAll }