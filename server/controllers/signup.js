const bcrypt = require('bcryptjs');
const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
if (!process.env.Airtable_API_KEY) {
  throw new Error('Missing Airtable API KEY env var');
}
const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');

const User = require('../database/models/User');

exports.signUp = (req, res) => {
  const { username, password, confirmPassword } = req.body;
  User.findOne({ username })
    .then((user) => {
      if (user) {
        return res.json({ success: false, error: 'User exist , please use another one' });
      }
      if (password === confirmPassword) {
        base('Users').create(
          {
            Name: username,
          },
          (err, record) => {
            if (err) {
              return res.json({ error: err });
            }

            bcrypt
              .hash(password, 10)
              .then(
                hashedPassword => new User({
                  username,
                  password: hashedPassword,
                  userairtableid: record.getId(),
                }),
              )
              .then((addUser) => {
                addUser.save((err, result) => {
                  if (err) return res.json({ error: err });
                  return res.json({
                    result,
                    success: 'true',
                    message: 'added to database & airtable',
                  });
                });
              })
              .catch((err) => {
                res.json({ error: err });
              });
          },
        );
      } else {
        return res.json({ success: false, error: 'the password and confirm password not match' });
      }
    })
    .catch(err => res.json({ error: err }));
};
