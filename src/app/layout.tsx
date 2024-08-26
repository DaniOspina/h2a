"use client";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; 

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <NavBar />
        <main className="flex-fill">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
