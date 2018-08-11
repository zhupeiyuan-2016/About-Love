const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const id = this.ctx.post('id');
    const model = this.model('love-poetry');
    const data = await model.where({id: id}).find();
    return this.success({
      'data': data
    });
  }
};
