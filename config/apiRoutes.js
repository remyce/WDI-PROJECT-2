const express          = require('express');
const router           = express.Router();

const authentications  = require('../controllers/authentications');
const festivals        = require('../controllers/festivals');
// const users         = require('../controllers/users');

router.route('/register')
.post(authentications.register);
router.route('/login')
.post(authentications.login);
router.route('/festivals')
.get(festivals.index);

//
// router.route('/users')
// .get(users.index);
// router.route('/users/:id')
// .get(users.show)
// .put(users.update)
// .delete(users.delete);


module.exports = router;
