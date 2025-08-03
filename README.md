# 🚀 Ashutosh Kumar - Portfolio Website

A modern, responsive, and interactive **portfolio website** showcasing my skills as a **Full Stack Developer** and **MERN Stack specialist**. Built with **React.js** and **Tailwind CSS**, this portfolio features smooth animations, professional design, and recruiter-friendly contact functionality.

## 🌟 About Me

**Full Stack Developer | MERN Stack Specialist | UI/UX Enthusiast**

I'm Ashutosh Kumar, a passionate MERN Stack Developer with expertise in building dynamic, scalable web applications. Currently working as a **Full Stack Developer Mentor at AlmaBetter**, I help aspiring developers master modern web technologies.

## 🚀 Live Demo

🔗 **[View Portfolio Live](https://ashutosh-port-folio.vercel.app/)**

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React.js** - Component-based UI development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **React Icons** - Beautiful icon library
- ✨ **React Tilt** - Interactive 3D tilt effects
- ⌨️ **React Typing Effect** - Dynamic typing animations

### Backend Integration
- 📧 **EmailJS** - Contact form email integration
- 🍞 **React Toastify** - User-friendly notifications

### Deployment
- 🚀 **Vercel** - Fast and reliable hosting

## ✨ Key Features

### 🎯 Professional Sections
- **About** - Personal introduction with animated typing effects
- **Skills** - Technical expertise showcase
- **Experience** - Professional background (AlmaBetter Mentor)
- **Projects** - Featured applications with live demos
- **Education** - Academic background (Techno India University)
- **Contact** - Recruiter-friendly contact form

### 🎨 Design & UX
- 📱 **Fully Responsive** - Optimized for all devices
- 🌙 **Dark Theme** - Modern dark UI design
- ✨ **Smooth Animations** - Engaging user interactions
- 🎭 **3D Tilt Effects** - Interactive profile image
- 🎨 **Gradient Accents** - Purple-themed brand colors

### 💼 Recruiter-Friendly Features
- 📧 **Contact Form** - Direct email integration
- 📋 **Inquiry Categories** - Job opportunities, freelance, etc.
- 📱 **Contact Info** - Phone and email in footer
- 🔗 **Social Links** - GitHub and LinkedIn profiles
- 📄 **Resume Download** - One-click CV download

### 🚀 Featured Projects
1. **E-Commerce Shopping App** - Full-stack shopping platform
2. **Video Calling Application** - Real-time communication app
3. **Currency Converter App** - Live exchange rate converter

## 🧑‍💻 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/Ashutosh1702/Ashutosh-PortFolio.git
cd Ashutosh-PortFolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure EmailJS (for Contact Form)
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Create an email template
4. Update the credentials in `src/components/Contact/Contact.jsx`:
   ```javascript
   emailjs.sendForm(
     "your_service_id",    // Replace with your Service ID
     "your_template_id",   // Replace with your Template ID
     form.current,
     "your_public_key"     // Replace with your Public Key
   )
   ```

### 4. Run Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

### 5. Build for Production
```bash
npm run build
```

## 🎨 Customization Guide

### Personal Information
Update your personal details in `src/constants.js`:
- **Profile Info** - Name, title, description
- **Social Links** - GitHub, LinkedIn URLs
- **Experience** - Work history and roles
- **Education** - Academic background
- **Projects** - Portfolio projects with links
- **Skills** - Technical expertise

### Assets
Replace assets in the `src/assets/` directory:
- **Profile Image** - `profile_pic.jpg`
- **Resume** - `Resume/AshutoshTechYantra.pdf`
- **Company Logos** - `company_logo/`
- **Project Thumbnails** - `work_logo/`

### Styling
Customize colors and themes in Tailwind classes:
- **Primary Color** - `#8245ec` (Purple)
- **Secondary Color** - `#a855f7` (Light Purple)
- **Background** - Dark theme with gradients

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to [Vercel](https://vercel.com/)
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
4. Deploy with one click!

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com/)
3. Configure custom domain (optional)

## 📊 Project Structure

```
Ashutosh-PortFolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── profile_pic.jpg
│   │   ├── Resume/
│   │   ├── company_logo/
│   │   └── work_logo/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── constants.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App |

## 🌟 Key Components

### About Section
- Animated typing effect for roles
- 3D tilt profile image
- Resume download functionality
- Personal introduction

### Skills Section
- Technical skills showcase
- Interactive skill cards
- Proficiency indicators

### Experience Section
- Professional work history
- Company logos and descriptions
- Role-specific achievements

### Projects Section
- Featured project showcase
- Live demo links
- GitHub repository links
- Custom SVG thumbnails

### Contact Section
- Recruiter-friendly contact form
- EmailJS integration
- Inquiry categorization
- Success/error notifications

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Friendly** - Perfect for iPad and tablets
- **Desktop Enhanced** - Full desktop experience
- **Cross-browser** - Works on all modern browsers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Ashutosh Kumar**
- 📧 Email: [ashucreater06@gmail.com](mailto:ashucreater06@gmail.com)
- 📱 Phone: [+91 7779883377](tel:+917779883377)
- 💼 LinkedIn: [Ashutosh Kumar](https://www.linkedin.com/in/ashutosh-kumar-791887276/)
- 🐙 GitHub: [Ashutosh1702](https://github.com/Ashutosh1702)

## 🙏 Acknowledgments

- **React.js** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **EmailJS** - For seamless email integration
- **Vercel** - For reliable hosting
- **AlmaBetter** - For the mentoring opportunity

---

⭐ **If you found this portfolio helpful, please give it a star!** ⭐

**Built with ❤️ by Ashutosh Kumar**
