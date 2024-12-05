# Portfolio Website

Visit: https://portfolio-website-new-8100a00d3771.herokuapp.com/

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean design with project showcases and experience highlights.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 and TypeScript for robust performance
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Project Showcase**: Dynamic ProjectCard component to showcase work
- **Experience Timeline**: ExperienceCard component to display professional journey
- **Google Fonts**: Integrated Inter font for clean typography
- **Type Safety**: Full TypeScript implementation for reliable code
- **Custom Components**: Modular design with reusable components

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React 18](https://reactjs.org/)
- [@radix-ui/react-slot](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/) for icons

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

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with Inter font and metadata
│   ├── page.tsx          # Main page component
│   └── globals.css       # Global styles and Tailwind directives
├── components/
│   ├── ProjectCard.tsx   # Project showcase component
│   └── ExperienceCard.tsx # Experience timeline component
├── public/              # Static assets
└── tailwind.config.js   # Tailwind CSS configuration
```

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

## 📄 License

This project is open source.
## 💫 Support

Give a ⭐️ if you find this project useful!!
