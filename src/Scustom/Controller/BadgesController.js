const BadgesModel = require('../Model/BadgesModel')

exports.listAll = async () => {
  const response = await BadgesModel.fetchAll();
  return response;
}




