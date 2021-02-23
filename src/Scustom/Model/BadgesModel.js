const {bookshelfConfig} = require('./index');

const Badges = bookshelfConfig.model('Badges',{
  tableName: 'badges',
  hasTimestamps: ['created_at', 'updated_at'],
});

module.exports = Badges;