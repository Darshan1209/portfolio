import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Spiritual Travel Coordination App',
        description: "Vicharan is a mobile app project designed for BAPS (a non profit global organisation) to streamline and enhance the coordination and communication of religious travels. Built using Flutter, Firebase and Supabase(PostgreSql) the app is tailored for a specific non-profit organization, allowing for real-time location tracking, efficient logistics management, and direct communication between users. Its core functionality helps saints and volunteers organize their travel schedules, track routes, and stay connected, making the overall experience more organized and effective.",
        tools: ['Dart', 'Flutter', 'SupaBase (PostgreSql)','Firebase', 'Rest API', 'Python', 'VS Code', 'XCode', 'Git'],
        role: 'Full Stack Mobile Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Real Estate App',
        description: 'The Real Estate App is a mobile platform designed to enhance the property listing experience for realtors and buyers in Kenya. Built with Flutter, it features a user-friendly interface that simplifies the discovery and listing of properties, including houses, apartments, and villas, with detailed descriptions, images, and pricing. Users can refine their searches using advanced filters and create personalized profiles to save favorite properties and receive notifications for new listings. Secure messaging and calling capabilities facilitate direct communication between agents and property owners, while integrated Google Maps helps users assess property locations. With features for easy listing uploads, secure payment processing, and document sharing, the Real Estate App streamlines the property buying and selling process, making it more accessible and efficient for everyone.',
        tools: ['Dart', 'Flutter', "Google Maps", "Firebase", "VS Code", "XCode", "Git"],
        role: 'Full Stack Mobile Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Lab Genie',
        description: 'Lab Genie is an innovative mobile application that our team is developing to provide students in underdeveloped and developing countries with vital resources for learning biology, chemistry, and physics. Built using Flutter, the app will feature a user-friendly interface for accessing comprehensive notes, instructional videos, quizzes, and virtual labs.Our aim is to bridge the resource gap in science education, empowering students to engage in interactive learning and deepen their understanding of scientific concepts. By facilitating hands-on experimentation without physical equipment, Lab Genie enhances the learning experience and helps students overcome challenges posed by limited educational resources.',
        tools: ['Dart', 'Flutter', 'SupaBase (PostgreSql)','Firebase', 'Rest API', 'Python', 'VS Code', 'XCode', 'Git'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },