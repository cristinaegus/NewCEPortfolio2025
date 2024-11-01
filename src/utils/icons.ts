import type { SimpleIcon } from 'simple-icons';

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#ffffff';
  const fallbackHex = theme === 'light' ? '#ffffff' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return {
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: Event) => e.preventDefault(),
    },
  };
};
