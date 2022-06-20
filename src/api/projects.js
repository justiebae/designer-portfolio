import axios from "axios";

export default class Projects {
  static async getProjects() {
    return axios.get('/data/projects.json');
  } 
}