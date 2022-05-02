interface ModalThemeContent {
  color: string;
  fontSize: string;
  fontWeight: string;
}

interface ModalThemeDescription {
  color: string;
  fontSize: string;
  fontWeight: string;
}

interface ModalThemeFooter {
  color: string;
}

interface ModalThemeHelp {
  color: string;
  background: string;
  fontSize: string;
  fontWeight: string;
}

interface ModalThemeImage {
  background: string;
}

interface ModalThemeSubtitle {
  color: string;
  fontSize: string;
  fontWeight: string;
}

interface ModalThemeTitle {
  background: string;
  height: string;
  color: string;
  fontSize: string;
  fontWeight: string;
  borderColor: string;
}

export interface ModalTheme {
  borderRadius: string;
  background: string;
  boxShadow: string;
  content: ModalThemeContent;
  description: ModalThemeDescription;
  footer: ModalThemeFooter;
  help: ModalThemeHelp;
  image: ModalThemeImage;
  subtitle: ModalThemeSubtitle;
  title: ModalThemeTitle;
}

export const modalTheme: ModalTheme = {
  borderRadius: '8px',
  background: '#ffffff',
  boxShadow: '0 2px 18px rgba(0, 0, 0, 0.2)',
  content: {
    color: 'hsl(110, 25%, 9%)',
    fontSize: '14px',
    fontWeight: '400',
  },
  description: {
    color: 'hsl(206, 5.8%, 52.3%)',
    fontSize: '14px',
    fontWeight: '400',
  },
  footer: {
    color: 'hsl(110, 25%, 9%)',
  },
  help: {
    color: 'hsl(110, 25%, 9%)',
    background: 'hsl(120, 7%, 89%)',
    fontSize: '14px',
    fontWeight: '400',
  },
  image: {
    background: 'hsl(120, 7%, 89%)',
  },
  subtitle: {
    color: 'hsl(110, 25%, 9%)',
    fontSize: '14px',
    fontWeight: '600',
  },
  title: {
    background: '#ffffff',
    height: '56px',
    color: 'hsl(110, 25%, 9%)',
    fontSize: '18px',
    fontWeight: '500',
    borderColor: 'hsl(120, 7%, 89%)',
  },
};
