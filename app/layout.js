import "./globals.css";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "멋쟁이사자처럼 at 국민대학교",
  description: "국민대학교 멋쟁이사자처럼 페이지입니다.",
  openGraph: {
    title: "멋쟁이사자처럼 at 국민대학교",
    description: "국민대학교 멋쟁이사자처럼 페이지입니다.",
    url: "https://likelionkmu.com",
    siteName: "멋쟁이사자처럼 at 국민대학교",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "멋쟁이사자처럼 at 국민대학교",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "멋쟁이사자처럼 at 국민대학교",
    description: "국민대학교 멋쟁이사자처럼 페이지입니다.",
    images: ["/og-image.png"],
  },
};

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
