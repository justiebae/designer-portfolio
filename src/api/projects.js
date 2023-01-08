import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default class Projects {
  static async getProjects() {
    const projectsCollection = collection(db, "projects");
    const projectsSnapshot = await getDocs(projectsCollection);

    return projectsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  static async getProject(slug) {
    const docRef = doc(db, "projects-detail", slug);
    const docSnapshot = await getDoc(docRef);

    return docSnapshot.data();
  }
}
