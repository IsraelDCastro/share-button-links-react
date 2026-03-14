# GEMINI.md - share-button-links-react

## Project Overview

`share-button-links-react` is a React-based library that provides a collection of share buttons and icons for various social media platforms and services. It is designed to be lightweight, customizable, and easy to integrate into any React application. The library is written in TypeScript and uses SCSS for styling.

### Main Technologies

- **React**: UI library for building components.
- **TypeScript**: Provides type safety and better developer experience.
- **SCSS**: Preprocessor for CSS to manage styles efficiently.
- **Vite**: Build tool and development server, configured to bundle the library in ES and UMD formats.
- **ESLint & Prettier**: Tools for maintaining code quality and consistent formatting.

### Architecture

The project follows a component-based architecture:

- **`src/components/buttons/`**: Contains components that combine text and icons for sharing.
- **`src/components/icons/`**: Contains icon-only share buttons.
- **`src/components/button-group/`**: A component to group and manage multiple share buttons.
- **`src/components/shared/interfaces/`**: Defines common TypeScript interfaces used across components.
- **`src/assets/`**: Contains the SCSS files for the library's styling.
- **`src/components/index.ts`**: The main entry point that exports all public components and styles.

## Building and Running

The project uses `npm` or `yarn` for package management (though `bun.lock` is present, suggesting Bun might also be used). The following scripts are defined in `package.json`:

- **Development**:

  ```bash
  npm run dev
  ```

  Starts the Vite development server and opens the browser.

- **Build**:

  ```bash
  npm run build
  ```

  Bundles the library into the `dist` directory using Vite. It generates ES and UMD bundles, along with type definitions and CSS/SCSS files.

- **Linting & Formatting**:

  ```bash
  npm run lint         # Runs both format and lint:fix
  npm run lint:format  # Formats code using Prettier
  npm run lint:fix     # Fixes ESLint issues
  ```

- **Preview**:
  ```bash
  npm run preview
  ```
  Previews the built application.

## Development Conventions

- **Component Structure**: Components are functional and use TypeScript for prop definitions. Most button components extend base interfaces found in `src/components/shared/interfaces/index.ts`.
- **Styling**: Styles are written in SCSS and organized in the `src/assets` directory. Components import the main SCSS file to ensure styles are included when the component is used.
- **Type Safety**: All components and functions should be properly typed. Avoid using `any`.
- **Linting**: Adhere to the rules defined in `.eslintrc.json`. The project uses Airbnb's base config with some modifications and Prettier integration.
- **Path Aliases**: Use `@` to refer to the `src` directory, `@/components` for components, and `@/assets` for assets, as configured in `vite.config.ts` and `tsconfig.json`.

## Key Files

- `package.json`: Project metadata, dependencies, and scripts.
- `vite.config.ts`: Vite configuration for library bundling.
- `src/components/index.ts`: Main export file for the library.
- `src/components/shared/interfaces/index.ts`: Shared TypeScript interfaces.
- `src/assets/share-button-links-react.scss`: Main SCSS file for the library.
- `README.md`: Usage instructions and general project information.
