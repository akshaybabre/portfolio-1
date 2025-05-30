import { Config } from '../types';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Youtube,
  Globe
} from 'lucide-react';

const config: Config = {
  personalInfo: {
    name: "Akshay Babre",
    jobTitle: "Frontend Developer",
    shortBio: "Passionate Frontend Developer skilled in JavaScript, TypeScript, React.js, and modern web technologies, building user-centric and scalable web applications.",
    fullBio: `I'm a dedicated Frontend Developer with a BSc in Computers from C.B Degree College, Bhalki (2024, 7.53 CGPA). I specialize in creating high-performance, scalable, and accessible web applications using JavaScript (ES6+), TypeScript, React.js, and modern tools like Webpack, Vite, and Jest. My projects, such as Mini-YouTube and a Personal Portfolio, demonstrate my ability to deliver intuitive UI/UX, modular components, and optimized performance. 

    With hands-on training from NareshIT in the MERN stack, I excel in collaborating with cross-functional teams to build responsive, user-focused solutions. Skilled in state management (Redux, Context API), RESTful API integration, and web accessibility, I’m eager to contribute innovative web solutions at Persistent Ltd.`,
    avatarUrl: "https://i.postimg.cc/HLCdnCbs/akshay.jpg", // Placeholder, update with actual avatar URL if available
    resumeLink: "https://drive.google.com/uc?export=download&id=1DSHO0Zjij8RkCKN-ekN6qPAgTWhgXTOa", // From your provided Google Drive link
    email: "akshaybabre8@gmail.com",
    location: "Hyderabad, Telangana, India",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/akshaybabre",
        icon: "Github"
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/akshaybabre",
        icon: "Linkedin"
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/@akshaybabre", // Placeholder, update with actual link if available
        icon: "Twitter"
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/akshaybabre", // Placeholder, update with actual link if available
        icon: "Instagram"
      }
    ]
  },
  theme: {
    primaryColor: "#3a86ff",
    secondaryColor: "#8338ec",
    accentColor: "#ff006e",
    backgroundColor: "#ffffff",
    backgroundGradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    darkModeDefault: false
  },
  microblog: {
    maxWordLimit: 500,
    enableTags: true,
    dateFormat: "MMMM dd, yyyy"
  },
  seo: {
    siteTitle: "Akshay Babre | Frontend Developer",
    siteDescription: "Portfolio of Akshay Babre, a Frontend Developer specializing in building high-performance, scalable web applications using JavaScript, TypeScript, React.js, and modern web technologies.",
    siteKeywords: ["JavaScript", "TypeScript", "React.js", "Redux", "Tailwind CSS", "Web Development", "Frontend", "MERN Stack", "Web Accessibility"]
  },
  skills: [
    { name: "JavaScript (ES6+)", level: 85, category: "Programming" },
    { name: "TypeScript", level: 80, category: "Programming" },
    { name: "HTML5", level: 90, category: "Frontend" },
    { name: "CSS3", level: 85, category: "Frontend" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "Redux", level: 80, category: "State Management" },
    { name: "Context API", level: 80, category: "State Management" },
    { name: "Tailwind CSS", level: 75, category: "Frontend" },
    { name: "Material UI", level: 70, category: "Frontend" },
    { name: "Framer Motion", level: 70, category: "Frontend" },
    { name: "Webpack", level: 70, category: "Tools" },
    { name: "Vite", level: 75, category: "Tools" },
    { name: "Jest", level: 70, category: "Testing" },
    { name: "Enzyme", level: 65, category: "Testing" },
    { name: "Mocha", level: 65, category: "Testing" },
    { name: "React Testing Library", level: 70, category: "Testing" },
    { name: "Node.js", level: 60, category: "Backend" },
    { name: "Express.js", level: 60, category: "Backend" },
    { name: "MongoDB", level: 60, category: "Database" },
    { name: "Git", level: 80, category: "Tools" }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Mini-YouTube",
      description: "Developed a scalable full-stack video platform using React.js, TypeScript, Node.js, and MongoDB, delivering intuitive UI components for video browsing, liking, and watchlist management. Implemented responsive interfaces with Tailwind CSS and Framer Motion, optimizing state management with Redux to improve interaction response time by 15%. Designed secure RESTful APIs with Node.js, Express.js, and JWT authentication, ensuring 99% uptime. Deployed on Render with CI/CD pipelines.",
      imageUrl: "https://images.pexels.com/photos/5474298/pexels-photo-5474298.jpeg", // Placeholder relevant to video platform
      technologies: ["React.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Redux", "Express.js", "JWT"],
      liveUrl: "https://akshay-x66v.onrender.com/", // From portfolio, assuming it’s the live URL for Mini-YouTube
      repoUrl: "https://github.com/akshaybabre/MiniYouTube"
    },
    {
      id: "proj-2",
      title: "Personal Portfolio",
      description: "Built a responsive portfolio using React.js, TypeScript, and Tailwind CSS, featuring dynamic animations with Framer Motion for a seamless user experience. Integrated Formspree for a backend-free contact form, enabling reliable email communication. Optimized frontend architecture with modular components and config.ts for dynamic data, reducing maintenance time by 20%. Ensured cross-browser compatibility and web accessibility standards.",
      imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg", // Placeholder relevant to portfolio
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Formspree"],
      liveUrl: "https://akshay-x66v.onrender.com/", // From resume
      repoUrl: "" // No repo URL provided in resume, left empty
    }
  ],
  blogPosts: [
    {
      id: "blog-1",
      title: "Mastering the MERN Stack in 2025",
      excerpt: "A comprehensive guide to building scalable web apps with MongoDB, Express.js, React, and Node.js.",
      content: `
## Mastering the MERN Stack in 2025

The MERN stack (MongoDB, Express.js, React, Node.js) is a powerhouse for building modern, scalable web applications. In this guide, I'll share key insights and best practices for mastering the MERN stack in 2025.

### Why MERN Stack?

The MERN stack is a full JavaScript ecosystem, offering:

1. **Unified Language**: JavaScript across frontend and backend simplifies development.
2. **Scalability**: MongoDB and Node.js handle large-scale applications with ease.
3. **Rich Ecosystem**: React’s component-based architecture and Express.js’s flexibility accelerate development.
4. **Community Support**: A vibrant community ensures up-to-date tools and resources.

### Setting Up a MERN Project

Here’s how to kickstart a MERN project:

\`\`\`bash
# Create project directory
mkdir mern-app
cd mern-app

# Initialize backend
mkdir backend && cd backend
npm init -y
npm install express mongoose dotenv cors

# Initialize frontend
cd ..
npx create-react-app client --template typescript
cd client
npm install axios react-router-dom redux @reduxjs/toolkit
\`\`\`

### Building a Simple MERN App

#### Backend (Node.js + Express + MongoDB)

\`\`\`javascript
// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const itemSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Item = mongoose.model('Item', itemSchema);

app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post('/api/items', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

app.listen(5000, () => console.log('Server running on port 5000'));
\`\`\`

#### Frontend (React + TypeScript)

\`\`\`tsx
// client/src/App.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Item {
  _id: string;
  name: string;
  description: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">MERN Stack App</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}: {item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
\`\`\`
### Best Practices for 2025

1. **TypeScript Integration**: Use TypeScript for type safety and better tooling.
2. **State Management**: Leverage Redux Toolkit for predictable state management.
3. **API Security**: Implement JWT or OAuth for authentication.
4. **Performance**: Use React’s Concurrent Rendering and lazy loading.
5. **Testing**: Integrate Jest and React Testing Library for robust testing.

### Conclusion

The MERN stack remains a top choice for building dynamic web applications in 2025. By mastering its components and following modern practices, you can create scalable, user-friendly apps that stand out.

Stay tuned for more MERN stack tips and tutorials!
      `,
      date: "2025-01-20",
      tags: ["MERN Stack", "React", "Node.js", "MongoDB", "Web Development"],
      imageUrl: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
    },
    {
      id: "blog-2",
      title: "The Future of React: What's Coming in 2025",
      excerpt: "Exploring the latest features and trends in React development.",
      content: `
## The Future of React: What's Coming in 2025

React continues to dominate frontend development, and 2025 brings exciting updates that enhance its power within the MERN stack. Let’s dive into what’s new and how to leverage these features.

### React’s Latest Features

#### 1. Enhanced Server Components
Server Components reduce client-side JavaScript, improving performance and SEO in MERN applications.

#### 2. Concurrent Rendering
Fully stable Concurrent Mode ensures smooth, non-blocking UI updates, perfect for data-heavy apps.

#### 3. Automatic Memory Management
New optimizations reduce memory leaks, making React apps more reliable at scale.

### React in the MERN Ecosystem

1. **Next.js**: A go-to framework for MERN developers, offering server-side rendering and static site generation.
2. **State Management**: Redux Toolkit and Zustand simplify state management in complex React apps.
3. **TypeScript**: Type-safe React components enhance maintainability in large MERN projects.

### Code Example: Modern React in 2025

\`\`\`tsx
import { use, startTransition } from 'react';
import { fetchData } from './api';

interface User {
  id: string;
  name: string;
  bio: string;
}

function UserProfile({ userId }: { userId: string }) {
  const user = use(fetchData(\`/api/users/\${userId}\`));

  const handleUpdateProfile = (newData: Partial<User>) => {
    startTransition(() => {
      updateUserProfile(userId, newData);
    });
  };

  return (
    <div className="profile-card p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.bio}</p>
      <ProfileForm initialData={user} onSubmit={handleUpdateProfile} />
    </div>
  );
}
\`\`\`

### Conclusion

React’s evolution in 2025 makes it an even stronger choice for MERN stack developers. By adopting these features, you can build faster, more efficient applications that delight users.

What’s your favorite React feature for 2025? Share your thoughts!
      `,
      date: "2025-02-15",
      tags: ["React", "MERN Stack", "Frontend", "JavaScript"],
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApK9rB_ccHZjZR-hW-WblNycwFIjsfDiaOQ&s"
    },
    {
      id: "blog-3",
      title: "Building a Developer Portfolio That Stands Out",
      excerpt: "Proven strategies to create a portfolio that showcases your MERN stack expertise.",
      content: `
## Building a Developer Portfolio That Stands Out

A standout portfolio is essential for MERN stack developers to showcase their skills and attract opportunities. Here’s how to build one that grabs attention.

### Why a Portfolio Matters

A well-crafted portfolio:

1. **Showcases Expertise**: Highlights your MERN stack projects and technical skills.
2. **Builds Credibility**: Demonstrates real-world problem-solving to employers.
3. **Attracts Opportunities**: Makes you memorable to recruiters and clients.

### Key Elements of a MERN Developer Portfolio

#### 1. Highlight MERN Projects
Feature projects like a Mini-YouTube app with React, Node.js, and MongoDB to show full-stack proficiency.

#### 2. Clean and Responsive Design
Use TailwindCSS or Bootstrap for a modern, mobile-friendly portfolio.

#### 3. Showcase Code Quality
Link to clean, well-documented GitHub repositories with detailed READMEs.

#### 4. Write Technical Blogs
Share knowledge on MERN stack topics to establish authority.

### Practical Steps to Build Your Portfolio

1. **Choose a Tech Stack**: Use React and TailwindCSS for a sleek frontend.
2. **Feature Key Projects**: Include live demos and GitHub links for projects like the Mini-YouTube app.
3. **Optimize for SEO**: Use keywords like “MERN stack,” “React,” and “Node.js.”
4. **Engage on Social Media**: Share your work on LinkedIn and Twitter to build your brand.

### Example: Portfolio Component

\`\`\`tsx
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="portfolio bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center">My MERN Stack Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="project-card p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Mini-YouTube App</h2>
          <p className="text-gray-600">A full-stack MERN app with authentication and dynamic features.</p>
          <Link to="/projects/mini-youtube" className="text-blue-600">View Project</Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
\`\`\`

### Conclusion

A powerful MERN stack portfolio combines great projects, clean design, and strategic branding. Start building yours today to showcase your skills and attract exciting opportunities.

What’s your next step in building your portfolio?
      `,
      date: "2025-03-10",
      tags: ["Portfolio", "MERN Stack", "Career", "Web Development"],
      imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    }
  ]
};

export default config;