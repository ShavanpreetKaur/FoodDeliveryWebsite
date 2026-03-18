// // // // import React from "react";

// // // // const Helmet = (props) => {
// // // //   document.title = "My Pizza -" + props.title;
// // // //   return <div className="w-100">{props.children}</div>;
// // // // };

// // // // export default Helmet;



// // // import React from "react";

// // // const Helmet = ({ title, children }) => {
// // //   document.title = `My Pizza - ${title}`;
  
// // //   return <div className="w-100">{children}</div>;
// // // };

// // // export default Helmet;




// // import React, { useEffect } from "react";

// // const Helmet = ({ title, children }) => {

// //   useEffect(() => {
// //     document.title = `My Pizza - ${title}`;
// //   }, [title]); // runs when title changes

// //   return <div className="w-100">{children}</div>;
// // };

// // export default Helmet;



// import React, { useEffect } from "react";

// const Helmet = ({ title, children }) => {
//   useEffect(() => {
//     document.title = `My Pizza - ${title}`;
//   }, [title]);

//   return <div className="w-100">{children}</div>;
// };

// export default Helmet;




import React, { useEffect } from "react";

const Helmet = ({ title, children }) => {
  useEffect(() => {
    document.title = `My Pizza - ${title}`;
  }, [title]);

  return <div>{children}</div>;
};

export default Helmet;
