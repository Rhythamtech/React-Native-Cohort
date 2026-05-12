# Simple Notes App Assignment

A beautiful, functional, and responsive notes application built with React Native and Expo. This project demonstrates folder-based organization, searching, dynamic theme switching, and responsive design.

## 🚀 Features

- **📂 Folder Organization**: Categorize your notes into folders like Work, Personal, Study, etc.
- **🔍 Real-time Search**: Quickly find notes by searching through titles and content.
- **🌓 Dark/Light Mode**: Seamlessly toggle between light and dark themes, with automatic system preference detection.
- **📱 Responsive Layout**: Optimized for both portrait and landscape orientations, as well as tablet/desktop widths.
- **🎨 Dynamic Emojis**: Automatically assigns relevant emojis to notes based on their content keywords.
- **✨ Polished UI**: Clean aesthetic with soft shadows, rounded corners, and smooth transitions.

## 🛠 Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **Styling**: Native StyleSheet with dynamic theme support
- **Icons**: Emoji-based dynamic icons and custom assets
- **Safe Area**: `react-native-safe-area-context` for notch and gesture area handling

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/go) app on your mobile device (optional, for physical device testing)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd simple-notes-app-assigment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npx expo start
```

From the Expo CLI, you can:
- Press `i` to open in the iOS Simulator (macOS only)
- Press `a` to open in the Android Emulator
- Press `w` to open in the Web browser
- Scan the QR code with the Expo Go app on your phone to run on a physical device

## 📁 Project Structure

```text
├── src/
│   └── app/            # Expo Router entry points and screens
│       ├── _layout.tsx # Root layout configuration
│       └── index.tsx   # Main Notes screen implementation
├── assets/             # Images, fonts, and icons
├── example/            # Reference implementation/starter code
├── package.json        # Dependencies and scripts
└── app.json            # Expo configuration
```

## 🌓 Theming and Styling

The application features a robust theming system that supports both Light and Dark modes:

- **System Detection**: By default, the app uses the `useColorScheme` hook to match the user's system-wide appearance settings.
- **Manual Override**: Users can manually toggle the theme using the sun/moon icon in the header, which overrides the system setting via local state.
- **Dynamic Styles**: Styles are managed through separate `lightStyles` and `darkStyles` objects. The active theme is dynamically computed and applied to components throughout the application.
- **Adaptive UI**: Specific elements like the `StatusBar` and background colors automatically adjust to ensure high contrast and readability in both modes.

## 🧩 Core Architecture

### Key Components

- **`NotesFolder`**: A pressable component that displays folder icons and titles, used for filtering notes by category.
- **`NotesItem`**: Displays individual note previews including a title, truncated text, a dynamic emoji icon, and alternating background colors.
- **`Index (Screen)`**: The primary entry point that orchestrates state management, searching, and the responsive layout.

### React Hooks Used

- **`useState`**: Manages search queries, folder selection, and manual theme overrides.
- **`useColorScheme`**: Detects the system-wide color scheme (light/dark) for automatic theme switching.
- **`useWindowDimensions`**: Powers the responsive design by detecting screen width to adjust column counts and padding.
- **`useSafeAreaInsets`**: Ensures proper spacing around notches, home indicators, and status bars.

### UI Components

- **`FlatList`**: Used for efficient rendering of both the horizontal folder list and the vertical notes grid.
- **`TextInput`**: Provides the interface for the real-time search functionality.
- **`Pressable`**: Handles interactions for folders, notes, and the theme toggle.
- **`Image (expo-image)`**: Handles optimized image loading for folder icons.
- **`SafeAreaView`**: Provides a secure boundary for content across different device types.

## 📄 License

This project is for assignment purposes.
