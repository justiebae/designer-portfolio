import axios from "axios";

export default class Projects {
  static getProjects() {
    return new Promise((resolve, reject) => {
      axios
        .get(`/data/projects.json`)
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  static getProject(slug) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/data/projects/${slug}.json`)
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}