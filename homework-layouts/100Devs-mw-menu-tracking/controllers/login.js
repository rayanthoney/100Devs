const schemas = require('../models/schemas.js')
const bcrypt = require('bcrypt')

exports.getLogin =  (req, res) => {
    res.render('login', {title: 'Login', loggedIn: false, error:null})
}

exports.getSignUp =  (req, res) => {
    res.render('new-acct', {title: 'New Account', loggedIn: false, error:null})
}

exports.getLogout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}

exports.postLogin = async (req, res) => {
    let email = rq.body.emailInput
    let pass = req.body.pwdInput
    let loginSuccess = false
    let sesh = req.session.
    sesh.loggedIn = false

    let users = schemas.users
    let qry = {email:email}

    if (email !== '' && pass !== '') {
        // find account using email
        let usersResult = await users.findOne(qry).then( async(data) => {
          if (data) {
            // check if password matches
            let passResult = await bcrypt.compare(pass, data.pwd)
            .then( (isMatch) => {
              if (isMatch) {
                // ok - set sessions
                sesh.loggedIn = true;
                loginSuccess = true;
              }
            });
          }
        });
      }
    }