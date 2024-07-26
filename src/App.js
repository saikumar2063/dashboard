import React from "react";
// import LeftSidebar from "./Form/LeftSidebar";
// import RightSidebar from "./Form/RightSidebar";
import Products from "./Form/Products";
// import Pagination from "./Form/pagination";
// import Sai from "./Form/sai";
// import Accordion from "./Form/Accordion";
// import BillForm from "./Form/BillForm";
import "./App.css";
// import Partial from "./Form/partial";

// const accordionData = [
//   {
//     title: "Google",
//     content:
//       "Google has its origins in BackRub, a research project that was begun in 1996 by Larry Page and Sergey Brin when they were both PhD students at Stanford University in Stanford, California.[2] The project initially involved an unofficial third founder, Scott Hassan, the lead programmer who wrote much of the code for the original Google Search engine, but he left before Google was officially founded as a company;[3][4] Hassan went on to pursue a career in robotics and founded the company Willow Garage in 2006.[5][6] Craig Nevill-Manning was also invited to join Google at its formation but declined and then joined a little later on",
//   },
//   {
//     title: "Amazon",
//     content:
//       "The company was created as a result of what Jeff Bezos called his regret minimization framework – to avoid regretting, in his old age, not having tried to participate in the emerging internet with his own startup.[5] In 1994, Bezos left his job as a vice president at D. E. Shaw & Co., a Wall Street firm, and moved to Seattle, Washington, where he began to work on a business plan[6] for what would become Amazon.com.",
//   },
//   {
//     title: "Twitter",
//     content:
//       "The history of the social media site Twitter began in 2006 as Jack Dorsey's, then at Odeo, idea. It was spun off in 2007 after which expanded rapidly and became a significant component of global society. Twitter became a key part of politics and international relations but was also banned or blocked in some countries.",
//   },
// ];

function App() {
  return (
    // <div className=" d-flex bg-light">
    //   <LeftSidebar />
    //   <div className="container  d-flex flex-column align-items-center p-0 ">
    //     <h2 className="text-center">ACCORDION</h2>
    //     {accordionData.map(({ title, content }) => (
    //       <Accordion title={title} content={content} key={title} />
    //     ))}
    //     <Partial />
    //   </div>
    //   <RightSidebar />
    // </div>
    // <BillForm />

    <Products />
  );
}

export default App;
