import React from 'react';
import './Skills.scss';
import BgImage from '../../assets/skills/bg-image.png';

function Skills() {
    return (
        <section className='sectionSkills'>
            <h2>SKILLS</h2>
            <div className='sectionSkills--technologies'>
                <h3>Tools and technologies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Sass</li>
                    <li>ReactJS</li>
                    <li>Git</li>
                    <li>Node</li>
                    <li>SQL</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Angular JS</li>
                    <li>Iconic Framework</li>
                    <li>Database</li>
                    <li>Dynatrace</li>
                    <li>Control M</li>
                    <li>ICD (Saas Aplication)</li>
                    <li>OMI</li>
                    <li>Grafana</li>
                    <li>Doit</li>
                    <li>Cloud Computing</li>
                    <li>Unix/Linux</li>
                    <li>Oracle</li>
                    <li>Windows</li>
                    <li>Jira</li>
                    <li>Confluence</li>
                    <li>Aternity</li>
                    <li>Cloud Pak For Multicloud Management (IBM)</li>
                    <li>Microsoft Office (Word, Excel)</li>
                </ul>
            </div>
            <div className='sectionSkills--languages'>
                <h3>Languages</h3>
                <ul>
                    <li>Spanish</li>
                    <li>English</li>
                </ul>
            </div>
            <div className='sectionSkills--aptitudes'>
                <h3>Aptitudes and knowledges</h3>
                <ul>
                    <li>Data Analysis</li>
                    <li>Incident Management</li>
                    <li>Social Media</li>
                    <li>System Administration</li>
                    <li>Infrastructure Management</li>
                    <li>Network Security</li>
                    <li>Network Administration</li>
                    <li>Programming</li>
                    <li>Project Management</li>
                </ul>
            </div>
            <img src={BgImage} alt='bgImage' />
        </section>
    )
}

export default Skills
