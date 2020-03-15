import Api from './Api';

export default {
  getProjects() {
    return Api().get('projects');
  },
  getOne(projectId) {
    return Api().get(`projects/${projectId}`);
  }
};
