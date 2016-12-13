// store
import store from '../stores/users';

/**
 * User Converter
 */
const UserConverter = {

  toListItem(actions) {
    return (user) => {
      return {
        id: user.id,
        icon: 'person',
        title: user.fullname,
        cells: [user.nickname, user.email],
        actions: actions(user.id),
        group: 'all',
      }
    }
  },

}

/**
 * Users Controller
 */
const UsersController = {

  load(converter, done) {
    store.users((users) => {
      const items = users.map(converter);
      done(items);
    });
  },

  select(id, done) {
    store.select(id);
    done();
  },

  selected() {
    return store.selected();
  },

  update(id, field, value, done) {
    store.update(id, field, value, done);
  },

  create(user, done) {
    store.create(user, done)
  },

  delete(id, done) {
    store.delete(id, done);
  }

}

export { UsersController, UserConverter };
