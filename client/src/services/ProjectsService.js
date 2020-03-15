import Api from './Api';

export default {
  getMyProjects() {
    return Api().get('projects');
  },
  getSharedProjects() {
    return Api().get('projects/shared');
  },
  getOne(projectId) {
    return Api().get(`projects/${projectId}`);
  }
};
