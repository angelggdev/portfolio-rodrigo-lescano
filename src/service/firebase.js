import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const getEducation = async () => {
  const education = [];
  const querySnapshot = await getDocs(collection(db, 'education'));
  querySnapshot.forEach((doc) => {
    education.push(doc.data());
  });
  return education;
};
export const getCertifications = async () => {
  const certifications = [];
  const querySnapshot = await getDocs(collection(db, 'certifications'));
  querySnapshot.forEach((doc) => {
    certifications.push(doc.data());
  });
  return certifications;
};
export const getProjects = async () => {
  const projects = [];
  const querySnapshot = await getDocs(collection(db, 'projects'));
  querySnapshot.forEach((doc) => {
    projects.push(doc.data());
  });
  return projects;
};
export const getSkills = async () => {
  const skills = [];
  const querySnapshot = await getDocs(collection(db, 'skills'));
  querySnapshot.forEach((doc) => {
    skills.push(doc.data());
  });
  return skills;
};
export const getWorkExperiences = async () => {
  const workExperiences = [];
  const querySnapshot = await getDocs(collection(db, 'work-experiences'));
  querySnapshot.forEach((doc) => {
    workExperiences.push(doc.data());
  });
  return workExperiences;
};
