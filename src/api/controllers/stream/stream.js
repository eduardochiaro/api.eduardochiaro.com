import dotenv from 'dotenv';
import flickr from '../../services/flickr.js'
dotenv.config();

const modelReturn = {
  title: '',
  type: '',
  published: '',
  updated: '',
  author: '',
  url: '',

}
function clone(obj) {
  if (null == obj || "object" != typeof obj) return obj;
  var copy = obj.constructor();
  for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}

const getLastest = async (req, res) => {
  const photos = await flickr.getPhotos();
  const returnList = [];
  photos.feed.entry.forEach((photo) => {
    const model = clone(modelReturn);

    model.title = photo.title[0];
    model.type = 'flickr';
    model.published = photo.published[0];
    model.updated = photo.updated[0];
    model.author = photo.author[0].name[0];
    model.url = photo.link[1]['$'].href;

    returnList.push(model);
  });
  res.json({ results: returnList })
}
export default { getLastest }