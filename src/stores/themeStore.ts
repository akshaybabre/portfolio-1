import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import config from '../config/config';

type ThemeState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setDarkMode: (isDark: boolean) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: config.theme.darkModeDefault,
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setDarkMode: (isDark: boolean) => set({ isDarkMode: isDark }),
    }),
    {
      name: 'theme-storage',
    }
  )
);