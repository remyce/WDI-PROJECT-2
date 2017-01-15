const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true }
});

userSchema
.virtual('password')
.set(setPassword);

userSchema
.virtual('passwordConfirmation')
.set(setPasswordConfirmation);

userSchema
.path('passwordHash')
.validate(validatePasswordHash);

userSchema
.path('email')
.validate(validateEmail);

userSchema.methods.validatePassword = validatePassword;

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.passwordHash;
    delete ret.email;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);

//we are allowing the user to set a password with a value
//in this._password the underscore refers to the virtual because
//we dont want to display the actual value of password to the user.
function setPassword(value) {
  this._password = value;
  this.passwordHash =  bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}

//this function confirms the password is true, we dont want this to
//show the password value so we use the underscore as its a virtual
//arguement.
function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
}

//In the first argument of the function: If a user is registering and
//they do not enter a password in the field, then 'A password is required'
//will be displayed to the user. This means the field is invalid.
//
//In the second argument of the function: If a user enters a password and it
//not equal to the password confirmation which is stored after setting the password
//the user will not be allowed to login and a message
function validatePasswordHash() {
  if (this.isNew) {
    if (!this._password) {
      return this.invalidate('password', 'A password is required.');
    }
    if(this._password.length < 6){
      this.invalidate('password', 'Must be at least 6 characters');
    }
    if (this._password !== this._passwordConfirmation){
      return this.invalidate('password', 'Passwords do not match.');
    }
  }
}

function validateEmail(email) {
  if (!validator.isEmail(email)) {
    return this.invalidate('email', 'must be a valid email address');
  }
}

//ask about this//
function validatePassword(password){
  return bcrypt.compareSync(password, this.passwordHash);
}
