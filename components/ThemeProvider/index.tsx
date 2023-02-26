import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { darkTheme } from '@config/stitches.config';

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      value={{
        light: 'default-theme',
        dark: darkTheme.className,
      }}
    >
      {children}
    </NextThemesProvider>
  );
};
