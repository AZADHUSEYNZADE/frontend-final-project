// import React, { useState } from "react";
// import "./Sidebar.scss";
// import SearchIcon from "@mui/icons-material/Search";

// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion from "@mui/material/Accordion";
// import MuiAccordionSummary from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
//   "&:before": {
//     display: "none",
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? "rgba(255, 255, 255, .05)"
//       : "rgba(0, 0, 0, .03)",
//   flexDirection: "row-reverse",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: "1px solid rgba(0, 0, 0, .125)",
// }));

// const Sidebar = ({ isOpen, setIsOpen, allProducts }) => {
//   const [expanded, setExpanded] = useState("");

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };
//   return (
//     <div className={`${isOpen && "backdrop"}`}>
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <h1>
//             Project <span>X</span>
//           </h1>
//           <SearchIcon fontSize="large" />
//         </div>
//         <div className="sidebar-body">
//           {allProducts.map((item, i) => (
//             <Accordion
//               expanded={expanded === item.name}
//               onChange={handleChange(item.name)}
//               key={item.name}
//             >
//               <AccordionSummary
//                 aria-controls={`${item}d-content`}
//                 id={`${item.name}d-header`}
//               >
//                 <Typography>{item.name}</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
//                   eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
//                   eget.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
