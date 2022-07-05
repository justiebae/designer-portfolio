import axios from "axios";

export default class Projects {
  static async getProjects() {
    try {
      const { data } = await axios.get('/data/projects.json');
      return data;
    } catch (err) {
      return err;
    }
  }

  static async getProject(slug) {

  }
}