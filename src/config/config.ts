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
    jobTitle: "MERN Stack Developer",
    shortBio: "Building dynamic, scalable, and user-centric web applications with expertise in MongoDB, Express.js, React, and Node.js.",
    fullBio: `I'm a passionate MERN Stack Developer pursuing a Bachelor of Science in Computers at C.B Degree College, Bhalki, with a 7.53 CGPA. I specialize in crafting high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js), delivering seamless user experiences and robust backend solutions. My flagship project, a Mini-YouTube Application, demonstrates my ability to build scalable, feature-rich platforms with modern tools and best practices.

    Driven by a love for innovation, I excel at solving complex challenges and creating efficient, maintainable code. I thrive in collaborative environments, leveraging my skills in JavaScript, TypeScript, and modern frameworks to bring ideas to life. Beyond coding, I enjoy football, movies, and exploring new recipes in the kitchen, which fuel my creativity and problem-solving mindset.`,
    avatarUrl: "https://i.postimg.cc/mZPpHfSp/1718556093974.jpg",
    resumeLink: "https://drive.google.com/uc?export=download&id=1090bcQnyyfYxmgmT7J6ZK7yPpSpHv2V_",
    email: "akshaybabre8@gmail.com",
    location: "Hyderabad, Telangana, India",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/akshaybabre", // Placeholder, update with actual link
        icon: "Github"
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/akshaybabre", // Placeholder, update with actual link
        icon: "Linkedin"
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/@akshaybabre8", // Placeholder, update with actual link
        icon: "Twitter"
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/akshaybabre8", // Placeholder, update with actual link
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
    siteTitle: "Akshay Babre | MERN Stack Developer",
    siteDescription: "Portfolio of Akshay Babre, a MERN stack developer specializing in scalable, user-focused web applications using MongoDB, Express.js, React, and Node.js.",
    siteKeywords: ["MERN stack", "React", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript", "web development", "full stack", "UI/UX"]
  },
  skills: [
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 80, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "Redux", level: 75, category: "Frontend" },
    { name: "HTML", level: 90, category: "Frontend" },
    { name: "CSS", level: 85, category: "Frontend" },
    { name: "TailwindCSS", level: 80, category: "Frontend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Express.js", level: 75, category: "Backend" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "MySQL", level: 70, category: "Database" },
    { name: "Git", level: 80, category: "Tools" },
    { name: "RESTful APIs", level: 75, category: "Backend" },
    { name: "Firebase", level: 70, category: "Backend" }
  ],
  projects: [
    {
      "id": "proj-1",
      "title": "Mini-YouTube Application",
      "description": "Developed a scalable 3-tier full-stack Mini-YouTube application with a responsive React frontend, Node.js backend, and MongoDB database. Implemented user authentication with Firebase/JWT, Like/Dislike and Watchlist features using Redux for seamless state management, and admin routes for content management. Enhanced UI with custom SVG icons, Framer Motion animations, and a professional YouTube favicon. Secured sensitive data by shifting secrets to Render and ensured robust error handling for APIs.",
      "imageUrl": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/youtube-271012476-16x9_0.jpg?VersionId=XnHVBQsq46i6GGfJLAJOBEHB_qewkB4d",
      "technologies": ["React", "TypeScript", "TailwindCSS", "Redux", "Framer Motion", "Node.js", "Express", "MongoDB", "Firebase", "JWT"],
      "liveUrl": "https://mini-youtube-frontend.onrender.com",
      "repoUrl": "https://github.com/akshaybabre/Mini_YouTube_Application"
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