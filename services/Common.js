const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDFhODhmZmIwMDI4ODgwMjNjMzM4MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk0NjA3NTAzfQ.nRacni7pdar5JeJV1jC53rn3ZqisfBGMy200tUXkxeY";
  return token;
};
