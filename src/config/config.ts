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
    name: "Suraj Somvanshi",
    jobTitle: "Java Developer",
    shortBio: "Passionate Java Developer skilled in Java, Oracle SQL, and web technologies, building efficient and user-friendly applications.",
    fullBio: `I'm a dedicated Java Developer with a BE in Computer Engineering from Savitribai Phule Pune University (2024, 8.5 CGPA). I specialize in developing robust applications using Java, OOPs, Oracle SQL, and web technologies like HTML, CSS, and JavaScript. My projects, such as an ATM Management System and an E-Commerce Website, showcase my ability to create functional, user-centric solutions with clean code and strong database integration. 

    With hands-on training from NareshIT and Besant Technology, I excel in problem-solving, debugging, and crafting scalable applications. I thrive in collaborative environments, leveraging my effective communication and analytical skills to deliver high-quality software. Outside coding, I enjoy exploring new technologies and refining my craft to contribute to innovative projects.`,
    avatarUrl: "https://i.postimg.cc/HLCdnCbs/suraj.jpg", // Kept placeholder as no avatar URL in resume
    resumeLink: "https://drive.google.com/uc?export=download&id=1hws6OrHevZBKrfBgF463e0yjaZb-ZEOf", // Kept placeholder as no specific resume link provided
    email: "somvanshi7766@gmail.com",
    location: "Latur, Maharashtra, India",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/SurajSomvanshi1509",
        icon: "Github"
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/surajsomvanshi-java-developer",
        icon: "Linkedin"
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/@surajsomvanshi", // Placeholder, update with actual link if available
        icon: "Twitter"
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/surajsomvanshi", // Placeholder, update with actual link if available
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
    siteTitle: "Suraj Somvanshi | Java Developer",
    siteDescription: "Portfolio of Suraj Somvanshi, a Java Developer specializing in building efficient, scalable applications using Java, Oracle SQL, HTML, CSS, and JavaScript.",
    siteKeywords: ["Java", "Oracle SQL", "OOPs", "HTML", "CSS", "JavaScript", "Bootstrap", "web development", "software development", "database management"]
  },
  skills: [
    { name: "Java", level: 85, category: "Programming" },
    { name: "C", level: 75, category: "Programming" },
    { name: "HTML", level: 80, category: "Frontend" },
    { name: "CSS", level: 80, category: "Frontend" },
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "Oracle SQL", level: 80, category: "Database" },
    { name: "PL/SQL", level: 75, category: "Database" },
    { name: "Bootstrap", level: 70, category: "Frontend" },
    { name: "Git", level: 70, category: "Tools" }
  ],
  projects: [
    {
      id: "proj-1",
      title: "ATM Management System",
      description: "Developed a Java-based desktop application simulating ATM functionalities, enabling users to perform account creation, cash withdrawal, deposits, balance inquiries, and PIN management. Built with Java for core logic, JDBC for database connectivity, MySQL for data storage, and AWT/Swing for an intuitive GUI, ensuring seamless user experience and robust backend integration.",
      imageUrl: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg", // Placeholder image relevant to ATM
      technologies: ["Java", "JDBC", "MySQL", "AWT", "Swing"],
      liveUrl: "", // No live URL provided in resume, left empty
      repoUrl: "https://github.com/SurajSomvanshi1509/atm-management-system" // Placeholder, update with actual repo if available
    },
    {
      id: "proj-2",
      title: "E-Commerce Website",
      description: "Built a web application for online shopping, allowing users to browse products, add to cart, and complete purchases. Designed with HTML for structure, CSS for styling, and SQL for backend database management, providing a user-friendly interface and efficient product and order management.",
      imageUrl: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg", // Placeholder image relevant to e-commerce
      technologies: ["HTML", "CSS", "SQL", "JavaScript"],
      liveUrl: "", // No live URL provided in resume, left empty
      repoUrl: "https://github.com/SurajSomvanshi1509/ecommerce-website" // Placeholder, update with actual repo if available
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