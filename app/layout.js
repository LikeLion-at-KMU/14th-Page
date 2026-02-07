import "./globals.css";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
