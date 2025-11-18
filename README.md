# 🎰 Roulette - A Modern Web-Based Roulette Game

Sure, here's a professional README for you! (Full disclosure: This comprehensive documentation was lovingly crafted by AI to help you get started with this awesome project.)

**Live Demo:** [roulette.eznhate.store](https://roulette.eznhate.store)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Production Deployment](#production-deployment)
- [Project Structure](#project-structure)
- [How to Play](#how-to-play)
- [Game Mechanics](#game-mechanics)
- [Configuration](#configuration)
- [Styling](#styling)
- [Docker Support](#docker-support)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 🎯 Overview

This is a fully functional, interactive **European Roulette** game built with modern web technologies. The application features a beautifully animated roulette wheel, a comprehensive betting table, and a realistic gaming experience—all running directly in your browser. Whether you're looking to practice your roulette strategies or just have some fun, this application provides an authentic casino experience without the risk.

The game implements authentic European roulette rules with 37 numbers (0-36), realistic wheel physics, smooth animations, and a complete betting system that allows you to place bets on individual numbers, colors, ranges, and more.

---

## ✨ Features

### Core Gameplay
- **Authentic Roulette Wheel**: European-style wheel with 37 numbers (0-36) featuring realistic color coding (green for 0, red and black for 1-36)
- **Smooth Animations**: Physics-based spinning animations that create an engaging and realistic experience
- **Interactive Betting Table**: Click to place bets on numbers, colors, ranges, dozens, columns, and more
- **Real-Time Balance Tracking**: Monitor your virtual currency balance as you play
- **Multiple Bet Types**: Support for straight-up bets (single numbers) with plans for more bet types
- **Win Detection**: Automatic payout calculation based on your winning bets
- **Reset Functionality**: Clear your bets and start fresh at any time

### Technical Features
- **Server-Side Rendering**: Built with Next.js 15 for optimal performance
- **React 19**: Leveraging the latest React features for a smooth user experience
- **TypeScript**: Fully typed codebase for better developer experience and fewer bugs
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern Styling**: Custom styling with Panda CSS for a polished look
- **Docker Ready**: Complete containerization support for easy deployment
- **Development Hot Reload**: Turbopack-powered development with instant feedback

### User Experience
- **Visual Feedback**: Clear indication of winning numbers and payouts
- **Coin Value Selection**: Choose your bet denomination
- **Total Bet Tracking**: See your total wagered amount at a glance
- **Intuitive Controls**: Simple, easy-to-understand interface
- **No Registration Required**: Jump straight into the action

---

## 🛠 Tech Stack

### Frontend
- **[Next.js 15.5.4](https://nextjs.org/)** - React framework with server-side rendering and routing
- **[React 19.1.0](https://react.dev/)** - Modern UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Panda CSS 1.4.1](https://panda-css.com/)** - Modern CSS-in-JS solution
- **[Tabler Icons React 3.35.0](https://tabler-icons.io/)** - Beautiful icon library
- **[React Router 7.9.3](https://reactrouter.com/)** - Client-side routing

### Development Tools
- **[ESLint 9](https://eslint.org/)** - Code linting and quality
- **[Turbopack](https://turbo.build/pack)** - Next-generation bundler for faster builds
- **[Node.js 22](https://nodejs.org/)** - Runtime environment
- **[Docker](https://www.docker.com/)** - Containerization platform

### Build & Deploy
- **[Docker Compose](https://docs.docker.com/compose/)** - Multi-container orchestration
- **Alpine Linux** - Lightweight base image for production

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 20 or higher recommended, version 22 for Docker builds)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Docker** and **Docker Compose** (optional, for containerized deployment)
- **Git** (for cloning the repository)

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/TymekV/Roulette.git
cd Roulette
```

### Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

This will install all required dependencies and run the Panda CSS codegen preparation step automatically.

---

## 💻 Development

### Start the Development Server

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

Using pnpm:
```bash
pnpm dev
```

The application will start with Turbopack and be available at:
- **Local**: [http://localhost:3000](http://localhost:3000)
- **Network**: Your local IP address on port 3000

The development server features:
- **Hot Module Replacement (HMR)**: Changes appear instantly without full page reload
- **Fast Refresh**: Preserves component state during edits
- **Turbopack**: Lightning-fast bundling and compilation
- **Error Overlay**: Helpful error messages displayed in the browser

### Generate Panda CSS Styles

If you need to regenerate the Panda CSS styled-system:

```bash
npm run prepare
```

### Linting

To check code quality and style:

```bash
npm run lint
```

---

## 🏗 Production Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build using Turbopack.

### Start Production Server

```bash
npm start
```

The production server will run on [http://localhost:3000](http://localhost:3000).

---

## 🐳 Docker Support

### Build and Run with Docker Compose

The project includes full Docker support for easy deployment:

```bash
docker compose up --build
```

This will:
1. Build a multi-stage Docker image optimized for production
2. Create an isolated container environment
3. Start the application on port **3010** (mapped from container port 3000)
4. Automatically restart unless explicitly stopped

Access the application at: [http://localhost:3010](http://localhost:3010)

### Docker Configuration Details

The Dockerfile uses a **multi-stage build** for optimal image size and security:

1. **base**: Node.js 22 Alpine base image
2. **deps**: Installs dependencies with package manager detection
3. **builder**: Builds the Next.js application with standalone output
4. **runner**: Minimal production image with non-root user

Production optimizations:
- Standalone output mode for smaller image size
- Non-root user (nextjs:nodejs) for security
- Output file tracing to minimize bundle size
- Alpine Linux base for minimal footprint

### Manual Docker Commands

Build the image:
```bash
docker build -t roulette-game .
```

Run the container:
```bash
docker run -p 3010:3000 roulette-game
```

---

## 📁 Project Structure

```
Roulette/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Main roulette wheel component
│   ├── page2/               # Additional page (easter egg?)
│   ├── layout.tsx           # Root layout component
│   ├── globals.css          # Global styles
│   ├── index.ts             # Roulette styles export
│   └── favicon.ico          # Site favicon
├── lib/                     # Shared library code
│   ├── components/          # Reusable React components
│   │   └── table/          # Betting table component
│   └── providers/          # React context providers
│       └── context/        # Coin context for state management
├── public/                  # Static assets
│   ├── *.svg               # SVG icons and images
│   └── ...
├── styled-system/           # Generated Panda CSS files (gitignored)
├── dockerfile               # Multi-stage Docker build configuration
├── compose.yaml            # Docker Compose orchestration
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── panda.config.ts         # Panda CSS configuration
├── eslint.config.mjs       # ESLint configuration
├── postcss.config.cjs      # PostCSS configuration
├── package.json            # Project dependencies and scripts
└── README.md               # This file!
```

### Key Files and Directories

- **`app/page.tsx`**: Main game logic including wheel rendering, bet management, and win detection
- **`lib/components/table`**: Interactive betting table UI component
- **`lib/providers/context`**: React Context API for sharing coin value, money, and bet totals across components
- **`panda.config.ts`**: Configuration for Panda CSS styling system
- **`dockerfile`**: Production-ready containerization with security best practices

---

## 🎮 How to Play

### Getting Started

1. **Open the Application**: Navigate to [roulette.eznhate.store](https://roulette.eznhate.store) or your local instance
2. **Check Your Balance**: You start with a default balance (typically 2000 credits)
3. **Select Coin Value**: Choose your bet denomination using the coin selector
4. **Place Your Bets**: Click on numbers or betting areas on the table to place chips
5. **Spin the Wheel**: Click the "Spin" button to start the roulette wheel
6. **Wait for Results**: The wheel will spin and gradually slow down
7. **Collect Winnings**: If your number hits, your payout is automatically added to your balance
8. **Play Again**: Place new bets and spin again, or click "Reset" to clear all bets

### Betting Options

Currently, the game supports:
- **Straight Up Bets**: Bet on individual numbers (0-36) with 35:1 payout
- More bet types are planned for future updates

### Tips for Players

- **Start Small**: Get familiar with the game mechanics before placing larger bets
- **Watch Your Balance**: Keep track of your total bet amount versus your available funds
- **Use Reset Wisely**: The reset button returns your current bets to your balance
- **Have Fun**: Remember, this is a game for entertainment purposes!

---

## ⚙️ Game Mechanics

### Roulette Wheel

The wheel implementation follows authentic European roulette standards:

- **37 Numbers**: 0-36, arranged in the traditional European sequence
- **Color Coding**: 
  - Green: 0
  - Red: 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36
  - Black: 2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35
- **Wheel Sequence**: 0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26

### Spin Physics

The spin animation uses:
- **5 Full Rotations**: Minimum of 1800 degrees of rotation
- **Random Landing Position**: Additional 0-360 degrees for unpredictability
- **Smooth CSS Transitions**: 4-second duration with easing
- **Realistic Deceleration**: Gradual slowdown effect

### Payout Calculation

- **Straight Up Bet**: 36x your bet amount (35:1 odds plus your original stake)
- **Win Detection**: Automatically checks all placed bets against the winning number
- **Instant Payout**: Winnings are immediately added to your balance
- **Bet Clearing**: All bets are cleared after each spin

### State Management

The game uses React Context API to manage:
- **Coin Value**: Current bet denomination
- **Money**: Player's total balance
- **Total Bet**: Sum of all placed bets
- **Individual Bets**: Map of number → bet amount

---

## 🎨 Styling

### Panda CSS

This project uses **Panda CSS**, a modern CSS-in-JS solution that offers:

- **Type-Safe Styles**: TypeScript autocompletion for all style properties
- **Zero Runtime**: Styles are extracted at build time
- **Utility-First**: Compose styles using intuitive utility functions
- **Atomic CSS**: Generates optimized, minimal CSS output
- **Design Tokens**: Consistent design system across the application

### Customization

To customize styles:

1. **Edit Component Styles**: Modify the `RouletteStyles()` function in `app/index.ts`
2. **Update Panda Config**: Adjust design tokens in `panda.config.ts`
3. **Regenerate**: Run `npm run prepare` to update the styled-system
4. **Global Styles**: Edit `app/globals.css` for application-wide styling

### Color Scheme

The current design uses:
- **Wheel Colors**: 
  - Gold trim: `#d4af37`
  - Green (0): `#0a6b3a`
  - Red: `#c41e3a`
  - Black: `#1a1a1a`
  - Wood: `#8b7355`
- Custom gradients and shadows for depth and realism

---

## 🔧 Configuration

### Next.js Configuration

The `next.config.ts` file contains framework settings. You can customize:
- Build output options
- Image optimization
- Environment variables
- Internationalization
- And more

### TypeScript Configuration

The `tsconfig.json` provides TypeScript compiler options optimized for Next.js projects.

### ESLint Configuration

Code quality is maintained through ESLint rules configured in `eslint.config.mjs`.

---

## 🤝 Contributing

Contributions are welcome! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. **Fork the Repository**: Click the "Fork" button on GitHub
2. **Clone Your Fork**: 
   ```bash
   git clone https://github.com/YOUR_USERNAME/Roulette.git
   ```
3. **Create a Branch**: 
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Your Changes**: Implement your feature or fix
5. **Test Thoroughly**: Ensure everything works as expected
6. **Commit Your Changes**: 
   ```bash
   git commit -m "Add: description of your changes"
   ```
7. **Push to GitHub**: 
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Open a Pull Request**: Submit your changes for review

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes across different browsers
- Update documentation for new features
- Keep dependencies up to date
- Run linting before committing: `npm run lint`

### Feature Ideas

Some ideas for contributions:
- Additional bet types (split, street, corner, line, dozen, column, red/black, odd/even, etc.)
- Sound effects and music
- Bet history and statistics
- Multiplayer support
- Different roulette variants (American, French)
- Mobile-optimized UI improvements
- Accessibility enhancements
- Animation customization options
- Save/load game state
- Achievement system

---

## 📄 License

This project is open source and available for educational and entertainment purposes. Please check the repository for specific license details.

---

## 🙏 Acknowledgments

### Technologies & Libraries

Special thanks to the amazing open-source communities behind:
- **Next.js Team** - For the incredible React framework
- **React Team** - For revolutionizing UI development
- **Panda CSS** - For the modern styling solution
- **Tabler Icons** - For the beautiful icon set
- **TypeScript Team** - For bringing type safety to JavaScript
- **Node.js Contributors** - For the robust runtime environment

### Inspiration

This project draws inspiration from:
- Classic casino roulette games
- European roulette standards and traditions
- Modern web gaming experiences
- The joy of learning through interactive projects

### AI Disclosure

As mentioned at the beginning, this README was generated with the assistance of artificial intelligence to provide comprehensive, well-structured documentation. The actual game code, however, was crafted by human developers who poured their creativity and skill into building an authentic roulette experience.

---

## 🌐 Links

- **Live Application**: [roulette.eznhate.store](https://roulette.eznhate.store)
- **GitHub Repository**: [https://github.com/TymekV/Roulette](https://github.com/TymekV/Roulette)
- **Report Issues**: [GitHub Issues](https://github.com/TymekV/Roulette/issues)

---

## 📞 Support

If you encounter any issues or have questions:

1. **Check Existing Issues**: See if your problem has already been reported
2. **Review Documentation**: This README covers most common scenarios
3. **Open a New Issue**: Provide detailed information about your problem
4. **Community**: Engage with other users and contributors

---

## 🎲 Fun Facts

- European roulette has a house edge of 2.7%, compared to 5.26% for American roulette
- The sum of all numbers on a roulette wheel (0-36) is 666
- The word "roulette" means "little wheel" in French
- This project uses modern web technologies that would have seemed like magic just a few years ago

---

**Happy Spinning! 🎰**

May the odds be ever in your favor!

---

*P.S. Remember, this is a game for fun and learning. Always gamble responsibly in real-world scenarios!*