'use strict'

const User = use('App/Models/User');

class UserController {

  async login({
    request,
    auth
  }) {
    const {
      email,
      password
    } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }

  async register({
    request,
    auth
  }) {
    const {
      email,
      password
    } = request.all();
    const user = await User.create({
      email,
      password,
      username: email
    });
    const token = await auth.attempt(email, password);
    return token;
  }
}

module.exports = UserController
