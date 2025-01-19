# Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC)](https://tailwindcss.com/)

Visit: https://ajitrai.me
       || https://raiajit022.github.io/Portfolio-Website/

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean design with project showcases and experience highlights.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 and TypeScript for robust performance
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Project Showcase**: Dynamic ProjectCard component to showcase work
- **Experience Timeline**: ExperienceCard component to display professional journey
- **Google Fonts**: Integrated Inter font for clean typography
- **Type Safety**: Full TypeScript implementation for reliable code
- **Custom Components**: Modular design with reusable components
- **Heroku Deployment**: Configured for seamless deployment on Heroku

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React 18](https://reactjs.org/)
- [@radix-ui/react-slot](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/) for icons
- [Heroku](https://www.heroku.com/) for deployment

## 🏃‍♂️ Getting Started

1. Clone the repository:

```bash
git clone https://github.com/raiajit022/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Deployment

### Heroku Deployment

1. Install the Heroku CLI:
```bash
npm install -g heroku
```

2. Login to Heroku:
```bash
heroku login
```

3. Create a new Heroku app:
```bash
heroku create portfolio-website-new
```

4. Set environment variables:
```bash
heroku config:set NODE_ENV=production
```

5. Deploy to Heroku:
```bash
git push heroku main
```

Your app will be available at: https://portfolio-website-new.herokuapp.com

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── cards/
│   │   │   ├── EducationCard.tsx     # Education timeline card component
│   │   │   ├── ExperienceCard.tsx    # Experience timeline card component
│   │   │   └── ProjectCard.tsx       # Project showcase card component
│   │   ├── sections/
│   │   │   ├── AwardsSection.tsx     # Awards and achievements section
│   │   │   ├── BlogsSection.tsx      # Blog posts section
│   │   │   ├── EducationSection.tsx  # Education history section
│   │   │   ├── ExperienceSection.tsx # Work experience section
│   │   │   └── ProjectsSection.tsx   # Projects showcase section
│   │   ├── ui/
│   │   │   ├── button.tsx           # Reusable button component
│   │   │   └── card.tsx             # Base card component
│   │   ├── Footer.tsx               # Footer with SSL badge
│   │   ├── Profile.tsx              # Profile sidebar component
│   │   ├── SkillSection.tsx         # Skills display component
│   │   └── Tabs.tsx                 # Navigation tabs component
│   ├── lib/
│   │   ├── constants.ts             # Global constants and types
│   │   └── utils.ts                 # Utility functions
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout with metadata
│   └── page.tsx                     # Main page component
├── public/
│   ├── positive-ssl.svg             # SSL certification badge
│   ├── icon-192x192.png            # PWA icons
│   └── icon-512x512.png            # PWA icons
├── .gitignore                       # Git ignore rules
├── next.config.js                   # Next.js configuration
├── package.json                     # Project dependencies
├── postcss.config.js               # PostCSS configuration
├── README.md                       # Project documentation
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

## 🔧 Key Files

- `app/page.tsx`: Main portfolio page with tab navigation
- `app/components/Profile.tsx`: Profile section with personal info and skills
- `app/lib/constants.ts`: Centralized constants for contact info, skills, etc.
- `app/components/cards/`: Reusable card components for different sections
- `app/components/sections/`: Main content sections for each tab
- `app/components/ui/`: Base UI components like buttons and cards

## 🎨 Customization

1. **Colors**: Edit the color scheme in `globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}
```

2. **Typography**: Modify the font in `layout.tsx`:

```typescript
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})
```

## 👨‍💻 Author

**Ajit Rai**
- GitHub: [@raiajit022](https://github.com/raiajit022)
- Contact: raiajit022@gmail.com

## 📄 License

This project is open source.
## 💫 Support

Give a ⭐️ if you find this project useful!
