import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Section id="summary" title="Professional Summary">
                <p>Enthusiastic B.Tech student in Computer Science Engineering-Honors at Koneru Lakshmaiah Education Foundation, graduating in 2026. Proven quick learner proficient in Python, Java, and C, with hands-on experience in AI Prompt Engineering and RPA Development. Passionate about FinTech, Artificial Intelligence and Machine Learning. Demonstrated teamwork, adaptability, and effective communication skills.</p>
                <p>Seeking an internship or entry-level position to contribute to impactful projects in mobile development, distributed and parallel systems, machine learning, information retrieval, natural language processing, networking, developing large software systems, or security software development. Eager to showcase tech projects and actively participate in computer science-related extracurricular activities to further expand expertise and contribute to cutting-edge technological advancements.</p>
            </Section>
            <Section id="education" title="Education">
                <ul>
                    <li><strong>Bachelor of Technology, Computer Science and Engineering</strong><br />Koneru Lakshmaiah Foundation, Guntur, Andhra Pradesh<br />CGPA: 8.9 (2022-2026)</li>
                    <li><strong>Intermediate</strong><br />Stream: MPC<br />Board: State Board of Andhra Pradesh<br />Sri Chaitanya Junior College<br />Year of passing: 2022</li>
                    <li><strong>10th Grade (CBSE)</strong><br />Vasavi Ideal Public School<br />Year of passing: 2020</li>
                </ul>
            </Section>
            <Section id="skills" title="Skills">
                <ul>
                    <li>Effective Problem Solving</li>
                    <li>Web Development</li>
                    <li>Algorithms and Data Structures</li>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Django Framework and React Framework</li>
                    <li>Prompt Engineering</li>
                    <li>Machine Learning Using TensorFlow</li>
                    <li>Natural Language Processing</li>
                    <li>Networking in TCP/IP, HTTP, RESTful APIs</li>
                    <li>Large-scale Systems like Docker</li>
                    <li>Data Analytics</li>
                    <li>Linux and Unix OS</li>
                    <li>AI Tools</li>
                    <li>SQL and Database Management</li>
                    <li>Agile Methodology</li>
                    <li>Mobile Development using Android Studio</li>
                    <li>Critical Thinking</li>
                    <li>Communication Skills</li>
                    <li>MS Tools and Power BI</li>
                    <li>Research Skills</li>
                </ul>
            </Section>
            <Section id="languages" title="Programming Languages">
                <ul>
                    <li>C</li>
                    <li>Java</li>
                    <li>Python</li>
                </ul>
            </Section>
            <Section id="projects" title="Projects">
                <ul>
                    <li><strong>Service Management System (MERN)</strong> - MongoDB database, Automobile Service Portal (Frontend developer)</li>
                    <li><strong>Student Course Management System (Django)</strong> - SQL database, Teamlead</li>
                </ul>
            </Section>
            <Section id="certifications" title="Certifications">
                <ul>
                    <li>Aviatrix Multicloud Network Associate Certified</li>
                    <li>Automation Anywhere RPA Certified</li>
                    <li>Coursera Certified</li>
                    <li>Apply prompt engineering with Azure OpenAI Service Badge</li>
                </ul>
            </Section>
            <Section id="experience" title="Work Experience">
                <ul>
                    <li><strong>Vishnuspire</strong> - Research Intern (Agriculture Domain), Mar 2024 – Present
                        <ul>
                            <li>Conducted extensive research on advanced agricultural technologies and their applications</li>
                            <li>Analyzed data to identify trends and optimize agricultural processes</li>
                            <li>Contributed to the development of solutions to enhance crop yield and sustainability</li>
                            <li>Assisted in conducting regular assessments of agricultural practices and applied improvements</li>
                            <li>Collaborated with cross-functional teams to streamline research processes and improve efficiency</li>
                        </ul>
                    </li>
                    <li><strong>Prodigy</strong> - Web Development Intern (Online), Jun 2024
                        <ul>
                            <li>Developed and maintained web applications using HTML, CSS, and JavaScript</li>
                            <li>Configured and utilized monitoring tools to track system performance and troubleshoot issues proactively</li>
                            <li>Automated routine tasks using scripts to reduce manual effort and increase productivity</li>
                            <li>Developed web applications using ReactJS framework</li>
                        </ul>
                    </li>
                    <li><strong>Shadow Fox</strong> - Web Development Intern (Online), Jun – Jul 2024
                        <ul>
                            <li>Developed and maintained web applications using HTML, CSS, and JavaScript</li>
                            <li>Configured and utilized monitoring tools to track system performance and troubleshoot issues proactively</li>
                            <li>Automated routine tasks using scripts to reduce manual effort and increase productivity</li>
                            <li>Developing web applications using ReactJS framework</li>
                        </ul>
                    </li>
                </ul>
            </Section>
            <Section id="extracurricular" title="Extracurricular Activities">
                <ul>
                    <li><strong>Safe Life Club (under UNICEF and WHO)</strong>, Aug 2022 – Sept 2023
                        <ul>
                            <li>Conducted outreach surveys and research to assess community health needs</li>
                            <li>Participated in various health awareness and education campaigns</li>
                            <li>Collaborated with team members on projects aimed at improving public health</li>
                            <li>Assisted in organizing events and initiatives to promote health and safety</li>
                        </ul>
                    </li>
                    <li><strong>VACHAS (College Magazine Club)</strong>, Jul 2023 – Present
                        <ul>
                            <li>Played a crucial role in writing content, stories, and articles for the college magazine</li>
                            <li>Contributed to blog posts on various topics of interest to the student body</li>
                            <li>Assisted in editing and proofreading submissions for publication</li>
                            <li>Collaborated with other members to plan and produce magazine issues</li>
                        </ul>
                    </li>
                    <li><strong>Google Developer Student Clubs (GDSC)</strong>, Jul 2023 – Present
                        <ul>
                            <li>Actively participating in GDSC events and workshops focused on fostering technical skills and innovation</li>
                            <li>Collaborating with fellow members on projects that integrate Google technologies to solve real-world problems</li>
                            <li>Contributing to community outreach programs and initiatives aimed at promoting technology awareness and education</li>
                        </ul>
                    </li>
                </ul>
            </Section>
            <Section id="hobbies" title="Hobbies">
                <ul>
                    <li>Tracking and investing in stocks</li>
                    <li>Freelancing on Upwork and Fiverr</li>
                    <li>Pursuing fitness goals</li>
                    <li>Advancing in music</li>
                    <li>Discovering new interests</li>
                </ul>
            </Section>
            <Section id="languages" title="Languages">
                <ul>
                    <li>Telugu</li>
                    <li>English</li>
                    <li>Hindi (Intermediate)</li>
                </ul>
            </Section>
            <Section id="resume" title="Resume">
           
           <p>You can download my resume in PDF format by clicking the button below.</p>
    <      a href="https://drive.google.com/file/d/1a_f5O6qk4l7Cl8GVwpNFTajoglLpVpds/view?usp=drive_link" download>
        <button>Download Resume</button>
    </a>
</Section>
            <Footer />
        </div>
    );
}

export default App;
