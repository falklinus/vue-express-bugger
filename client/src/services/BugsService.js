import Api from './Api';

export default {
  index(projectId) {
    return Api().get(`bugs?projectId=${projectId}`);
  }
};
