import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
};

export default LoginLayout;
