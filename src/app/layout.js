import './globals.css';

export const metadata = {
  title: 'Test Repo - Mock Repository',
  description: 'A mock repository for testing purposes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
