import "./globals.css";
import Header from "../components/layout/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
