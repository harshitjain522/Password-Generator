# Password Generator

A modern, feature-rich password generator built with React and Vite. Quickly generate secure, customizable passwords for any use case.

## Features

- **Multiple Password Types**
  - **Random**: Generate random passwords with customizable character sets
  - **Memorable**: Create easy-to-remember passwords
  - **PIN**: Generate numeric PIN codes

- **Customization Options**
  - Adjustable password length
  - Toggle uppercase letters (A-Z)
  - Toggle lowercase letters (a-z)
  - Toggle numbers (0-9)
  - Multiple symbol modes:
    - Basic symbols
    - Extended symbols
    - No symbols
    - Custom symbols (add your own)

- **User-Friendly Interface**
  - Real-time password generation
  - Clean, intuitive UI
  - Responsive design
  - Visual feedback on password generation

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Password-Generator
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx                 # Main application component
├── index.css              # Global styles
├── main.jsx               # React entry point
├── components/
│   ├── GenerateButton.jsx # Button to trigger password generation
│   ├── LengthControl.jsx  # Slider to control password length
│   ├── PasswordDisplay.jsx # Display and copy password
│   ├── RandomOptions.jsx  # Options for random password type
│   └── TypeSelector.jsx   # Select password type (random, memorable, PIN)
└── utils/
    ├── constants.js       # Character sets and word lists
    └── passwordGenerator.js # Password generation logic
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **JavaScript** - Programming language

## Usage

1. **Select Password Type**: Choose between Random, Memorable, or PIN
2. **Adjust Settings**: 
   - Set the desired password length
   - For random passwords, select which character types to include
   - Optionally add custom symbols
3. **Generate**: The password is automatically generated as you adjust settings
4. **Copy**: Click to copy the generated password to your clipboard

## License

This project is open source and available under the MIT License.
