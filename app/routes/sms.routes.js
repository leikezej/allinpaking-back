const controller = require("../controllers/sms.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.post("/api/sms", controller.sendSms);
  // app.post("/api/auth/signup", controller.signup);

    //GET
  app.get("/api/sms", controller.verifySms);


};