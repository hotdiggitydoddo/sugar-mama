module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/service/sugaring`
   */
   sugaring: function (req, res) {
    res.view();
  },


  /**
   * Action blueprints:
   *    `/service/facials`
   */
   facials: function (req, res) {
    res.view();
  },


  /**
   * Action blueprints:
   *    `/service/waxing`
   */
   waxing: function (req, res) {
    res.view();
  },


  /**
   * Action blueprints:
   *    `/service/tanning`
   */
   tanning: function (req, res) {
    res.view();
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ServiceController)
   */
  _config: {}

  
};
