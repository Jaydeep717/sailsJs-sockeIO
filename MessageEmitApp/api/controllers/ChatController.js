/**
 * ChatController
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
 * @author      :: jaydeep.pandya717@gmail.com 
 */

var ChatController = {
    index: function (req, res) {
        var currentDate = new Date();
        var thisDate = currentDate.getDate();
        var thisMonth = currentDate.getMonth();
        var thisYear = currentDate.getFullYear();
        var todayDate = thisDate + '/' + thisMonth + '/' + thisYear;
        //var currentText = "Hello JD!!!";
        var currentText = req.param('message');
        res.view({
            //layout: "home"
            _layoutFile: 'chat.ejs',
            myDate: todayDate,
            myText: currentText,
        });
    }
    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to ChatController)
     */
    // _config: {};
};
module.exports = ChatController;
