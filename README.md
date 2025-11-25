# 🧩 Rätsel

**Flexible UI components**

Rätsel ([German for puzzle/riddle](https://en.wiktionary.org/wiki/R%C3%A4tsel)) is a flexible styled component library for React.

✂️ Partial import of only the required components

🚀 Based on the performant [emotion](https://github.com/emotion-js/emotion) CSS-in-JS library

👀 Docs / UI preview: https://lskjs.github.io/ratsel/


### How to use
1. You must have React version 18 or higher.
2. Install `@ratsel/core` and any of the selected packages.
    - Example: `npm i @ratsel/core @ratsel/button`
3. Connect the theme provider to the root of the application
    - Example:
      ```js
      import { ThemeProvider } from '@ratsel/core';
      ...
      return (
        <ThemeProvider>
          <App />
        </ThemeProvider>  
      );
      ```
    - You can also override the default theme. You need to pass the theme to the ThemeProvider.
      - Option 1:
        ```js
        const theme = {
          fonts: {
            main: 'Helvetica',
          },
        };

        <ThemeProvider theme={theme}>
        ```
      - Option 2:
        ```js
        const theme = (parentTheme) => ({
          ...parentTheme,
          ratsel: {
            ...parentTheme.ratsel,
            fonts: {
              main: 'Helvetica',
            },
          },
        });

        <ThemeProvider theme={theme}>
        ```
4. Use the component you want
   - Example:
     ```js
     import { Button } from '@ratsel/button';

     return (
       <Button>A coolest button</Button>
     );
     ```

## Development

### Setup
Development happens in the `main` branch.

**Install dependencies:**
1. `npm i`
2. `npm run bootstrap`

**Build packages:**
```bash
npm run build
```

### Release
1. Make necessary changes
2. Build packages (build must succeed without errors)
3. Commit and push changes
4. Run `npm run release`
