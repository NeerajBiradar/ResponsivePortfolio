import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './style.module.scss'; // Import SCSS module
import { Pagination, Navigation } from 'swiper/modules';

// Assuming you have a list of projects with title, image, and description
const projects = [
    {
        title: 'Teaching Assistance',
        image: './Images/Floating3.jpg',
        description: 'As a Teaching Assistant at the International Finishing School, KMIT, I provided invaluable one-on-one assistance to clients from the US, aiding in their understanding of complex algorithms, data structures, and problem-solving techniques. My role included conducting one-on-one consultations and facilitating group discussions to enhance learning outcomes. Additionally, I contributed to the creation and maintenance of training materials and documentation, ensuring the quality and relevance of educational resources. This experience honed my communication and teaching skills, allowing me to effectively convey technical concepts to diverse audiences. Overall, my time as a Teaching Assistant was rewarding, enabling me to make a meaningful impact on students learning journeys.',
        skills : 'Communication skills, teaching skills, problem-solving skills, knowledge of algorithms and data structures',
        tech : 'None'
    },
    {
        title: 'WildFire Detection',
        image: './Images/WildFire.gif',
        description: 'The Wildfire Detection System project involved developing an AI-driven solution for detecting wildfires using image classification techniques. This innovative system analyzed satellite imagery to accurately identify and locate wildfires, providing crucial information to affected communities and fire authorities for timely response and management. The project aimed to improve the efficiency and effectiveness of wildfire detection, ultimately helping to reduce the impact of wildfires on the environment and human lives. By leveraging advanced technologies, such as artificial intelligence and image processing, the system offered a sophisticated approach to wildfire detection, enhancing existing capabilities in disaster management. Overall, the Wildfire Detection System project showcased the potential of technology to address pressing environmental challenges and contribute to safer, more resilient communities.',
        skills:'AI/Machine Learning, image processing, MERN',
        tech:'Python (for AI/ML and image processing), TensorFlow or PyTorch (for AI models), GIS tools - LeafLet,MapTiler (for geospatial analysis), satellite imagery APIs'
    },
    {
        title: 'LEAD',
        image: './Images/Lead.gif',
        description: 'LEAD (Learn Educate and Develop) - Directed the development of a student-centric website, overseeing the creation and curation of comprehensive study materials. Successfully drove user engagement, resulting in over 600 downloads and the establishment of a user base exceeding 200 within the first month. Enhanced the academic experience for students by providing accessible and high-quality educational resources.',
        skills:'Web development, user experience (UX) design, content curation, project management',
        tech:'React.js (for front-end development), Bootstrap (for responsive design), Node.js (for back-end if applicable), MongoDB (for database), Firebase (for authentication and data storage), Git (for version control)'
    },
    {
        title: 'Secure Patch',
        image: './Images/Secure.png',
        description: '"Secure Patch" was a project where I implemented blockchain technology to fortify the security of application patch releases. This involved integrating smart contracts and cryptographic measures to ensure the integrity and authenticity of patch updates. The project aimed to enhance the overall security posture of applications by leveraging the decentralized and immutable nature of blockchain technology. The implementation included features such as secure patch distribution and verification mechanisms, providing a robust solution for ensuring the trustworthiness of software updates. Overall, "Secure Patch" was a pioneering effort to utilize blockchain for improving software security practices.',
        skills:'Blockchain development, smart contract development, cryptography, application security',
        tech:'Ethereum (or other blockchain platforms), Solidity (for smart contracts), MetaMask (for wallet integration), Ganache (for local blockchain testing), web3.js (for blockchain interaction),MERN'
    },
    
];

export default function Projects() {
    return (
        <>
            <p className='display-5 text-center my-4'>Here are a few things I've done recently</p>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className='container my-5'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className={`card`}>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ fontFamily: 'Arial, sans-serif' }}>{project.title}</h5>
                                            <ul className="card-text" style={{ fontFamily: 'Arial, sans-serif' }}>
                                                {project.description.split('. ').map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                            <p >Skills - {project.skills}</p>
                                            <p >Tech Stack - {project.tech}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-6 d-flex justify-content-center mt-3'>
                                    <img src={project.image} className="img-fluid rounded-2" alt={project.title} style={{
                                        maxHeight:"420px",
                                        maxWidth:"630px",
                                        objectFit: "contain"
                                    }} />
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
