import './globals.css';

export const metadata = {
  title: 'Santiago Jaramo | Portafolio Profesional',
  description:
    'Portafolio profesional de Santiago Jaramo, docente universitario, especialista en TI y liderazgo educativo.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
