import { collection, getDocs, doc, getDoc } from "firebase/firestore"; 
import { db } from "../firebase";

export default class Projects {
  static async getProjects() {
    try {
      const projectsCollection = collection(db, 'projects');
      const projectsSnapshot = await getDocs(projectsCollection);
  
      return projectsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (err) {
      throw err
    }
  }

  static async getProject(slug) {
    try {
      const docRef = doc(db, 'projects-detail', slug);
      const docSnapshot = await getDoc(docRef);

      return docSnapshot.data();
    } catch (err) {

    }
  }
}