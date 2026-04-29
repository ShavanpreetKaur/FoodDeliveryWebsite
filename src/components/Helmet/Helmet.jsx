import React, { useEffect } from "react";

const Helmet = ({ title, children }) => {
  useEffect(() => {
    document.title = `My Pizza - ${title}`;
  }, [title]);

  return <div>{children}</div>;
};

export default Helmet;
