/**
 * HomeController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  /**
   * Action blueprints:
   *    `/home/index`
   */
   index: function (req, res) {
    return res.view({
      layout: "/splash-layout"
    });
  },


  /**
   * Action blueprints:
   *    `/home/about`
   */
   about: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/home/contact`
   */
   contact: function (req, res) {
    
    var Recaptcha = require('re-captcha');

    var PUBLIC_KEY = '6LfVuu0SAAAAACtAie4kaGfENivc9e9nR19-Swuu';
    var PRIVATE_KEY = '6LfVuu0SAAAAAICQmZ80vGwqDBQWbTd3HswnLaf6';

    var recaptcha = new Recaptcha(PUBLIC_KEY, PRIVATE_KEY);

    res.locals.recaptcha_form =  recaptcha.toHTML();

    return res.view();
  },

  postContact: function (req, res) {
    var Recaptcha = require('re-captcha');

    var PUBLIC_KEY = '6LfVuu0SAAAAACtAie4kaGfENivc9e9nR19-Swuu';
    var PRIVATE_KEY = '6LfVuu0SAAAAAICQmZ80vGwqDBQWbTd3HswnLaf6';

    var recaptcha = new Recaptcha(PUBLIC_KEY, PRIVATE_KEY);

    var data = {
      remoteip: req.connection.remoteAddress,
      challenge: req.body.recaptcha_challenge_field,
      response: req.body.recaptcha_response_field
    };

    var options = {
      email: req.param('emailAddress'),
      subject: req.param('subject'),
      body: req.param('body')
    };

    recaptcha.verify(data, function(err) {
      if (err) {
          req.flash.error('Captcha verification failed.  Please try again.');
          return res.redirect('contact');
      } else {
          EmailService.sendContactEmail(options);
          req.flash('info', 'Message sent.  Thank you for your feedback!');
          console.log('Recaptcha verified!!');
          req.flash.notice('Your message was sent!  Thank you for your feedback.')
          return res.redirect('contact');
      }
    });
  },


  /**
   * Action blueprints:
   *    `/home/appointments`
   */
   appointments: function (req, res) {
    
    // Send a JSON response
    return res.view();
  },

  coming_soon: function  (req, res) {
    return res.view();
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HomeController)
   */
  _config: {}

  
};
