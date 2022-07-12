import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    
  }
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center py-3">Copyright &copy;2022 My Todo List.</p>
    </footer>
  );
};
