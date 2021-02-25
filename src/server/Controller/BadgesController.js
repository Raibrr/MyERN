const BadgesModel = require('../Model/BadgesModel')

const listAll = async () => {
  const response = await BadgesModel.fetchAll();
  return response;
};

const list = async (badgeId) =>{
  const model = new BadgesModel();
  const response = await model.query({ where: { id: badgeId } }).fetch();
  return response;
}

const saveBadge = async (reqBody) => {
  const model = new BadgesModel();
  const response = await model.save(reqBody, { method: 'INSERT', patch: false });
  return response;
}

const updateBadge = async (reqBody, badgeId) => {
  const model = new BadgesModel();
  const badgeWillUpdate = await model.where('id', badgeId).fetch();
  const response = await badgeWillUpdate.save(reqBody, { method: 'UPDATE', patch: true });
  return response;
}

const deleteBadge = async (badgeId) => {
  const model = new BadgesModel();
  const response = await model.where('id', badgeId).destroy();
  return response;
}

module.exports = {
  listAll,
  list,
  saveBadge,
  updateBadge,
  deleteBadge
}


