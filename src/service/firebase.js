import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyxscR44pmQfxCWhAQtLD6iBOhaTu_I6I",
  authDomain: "portfolio-e89ab.firebaseapp.com",
  projectId: "portfolio-e89ab",
  storageBucket: "portfolio-e89ab.appspot.com",
  messagingSenderId: "627559196070",
  appId: "1:627559196070:web:8cfff1deb6892555905b67"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const getEducation = async () => {
    const education = [];
    const querySnapshot = await getDocs(collection(db, "education"));
    querySnapshot.forEach((doc) => {
        education.push(doc.data());
    });
    return education;
}
export const getCertifications = async () => {
    const certifications = [];
    const querySnapshot = await getDocs(collection(db, "certifications"));
    querySnapshot.forEach((doc) => {
        certifications.push(doc.data());
    });
    return certifications;
}
export const getProjects = async () => {
    const projects = [];
    const querySnapshot = await getDocs(collection(db, "projects"));
    querySnapshot.forEach((doc) => {
        projects.push(doc.data());
    });
    return projects;
}
export const getSkills = async () => {
    const skills = [];
    const querySnapshot = await getDocs(collection(db, "skills"));
    querySnapshot.forEach((doc) => {
        skills.push(doc.data());
    });
    return skills;
}
export const getWorkExperiences = async () => {
    const workExperiences = [];
    const querySnapshot = await getDocs(collection(db, "work-experiences"));
    querySnapshot.forEach((doc) => {
        workExperiences.push(doc.data());
    });
    return workExperiences;
}

