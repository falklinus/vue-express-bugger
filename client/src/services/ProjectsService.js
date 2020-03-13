import Api from './Api';

export default {
  getUserProjects(userId) {
    return Api().get(`users/${userId}/projects`);
  },
  getOne(projectId) {
    return Api().get(`projects/${projectId}`);
  }
};
