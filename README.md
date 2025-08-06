# Portfolio Website

A modern, responsive portfolio website built with React, Node.js, and Express. Features smooth animations, beautiful UI, and a contact form with email functionality.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth page transitions and hover effects
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Filterable project gallery
- **Skills Section**: Interactive skills display with progress bars
- **About Section**: Timeline and experience display
- **SEO Optimized**: Meta tags and proper structure

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **React Icons** - Beautiful icons
- **CSS3** - Modern styling with CSS variables

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Nodemailer** - Email functionality
- **CORS** - Cross-origin resource sharing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   Create a `.env` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🚀 Available Scripts

- `npm start` - Start React development server
- `npm run build` - Build the React app for production
- `npm run server` - Start the Node.js server
- `npm run dev` - Start both frontend and backend in development
- `npm run build:prod` - Build and serve production version

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   └── *.css files
│   ├── App.js
│   ├── App.css
│   └── index.js
├── server.js
├── package.json
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Home.js** - Update name, title, and description
2. **About.js** - Update experience, education, and interests
3. **Projects.js** - Add your projects with images and links
4. **Skills.js** - Update skills and proficiency levels
5. **Contact.js** - Update contact information and social links

### Styling
- CSS variables are defined in `src/App.css`
- Each component has its own CSS file
- Colors, fonts, and spacing can be easily customized

### Email Configuration
To enable email functionality:

1. Set up a Gmail account or use another email service
2. Enable 2-factor authentication
3. Generate an app password
4. Update the environment variables in `.env`

## 🌐 Deployment

### Frontend (React)
The React app can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3**

### Backend (Node.js)
The Node.js server can be deployed to:
- **Heroku**
- **Railway**
- **DigitalOcean**
- **AWS EC2**

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Performance Features

- **Lazy Loading** - Components load as needed
- **Optimized Images** - Placeholder images with lazy loading
- **Smooth Animations** - 60fps animations with Framer Motion
- **Minimal Bundle** - Optimized for fast loading

## 🔧 Development

### Adding New Pages
1. Create a new component in `src/components/`
2. Add the route in `src/App.js`
3. Create corresponding CSS file
4. Update navigation in `Navbar.js`

### Adding New Features
1. Install required dependencies
2. Create new components
3. Update routing and navigation
4. Test on different devices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Contact through the portfolio website
- Email: your-email@example.com

## 🙏 Acknowledgments

- **React** - For the amazing frontend framework
- **Framer Motion** - For smooth animations
- **React Icons** - For beautiful icons
- **Express** - For the backend framework

---

**Made with ❤️ using React and Node.js**
