import React from 'react';
import NavBar from "./components/NavBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
          <NavBar />
          <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
