import MainPage from "./MainPage";
// import React from "react";

function Data() {
  const mockProps = {
    history: {},
    data: [(projectname = "XYZ")],
  };

  return <MainPage {...mockProps} />;
}
//   const mockProps = {
//         history: {},
//         data: [
//              projectname: "xyz",
//              periodEnd: "01/09/2021"
//         ],
//         [
//             projectname: "abc",
//             periodEnd: "20/06/2021"
//         ]
//     };
//   return;
//   <MainPage {...mockProps} />;
// }

// export default Data;
