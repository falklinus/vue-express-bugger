import Api from './Api';

export default {
  index(userId) {
    return Api().get(`bugs?userId=${userId}`);
  }
};
