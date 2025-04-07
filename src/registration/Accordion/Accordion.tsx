import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { MdReadMore } from "react-icons/md";


function AccordionExeerpt() {
    return ( <>
    <Accordion>
        <AccordionSummary expandIcon={ <MdReadMore size={20}/>}>Mateerial UI</AccordionSummary>
       
        <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia minus repudiandae dolore ad fugit. Dolorum sunt rem, repudiandae dolor voluptatum libero, praesentium necessitatibus eveniet ex cumque saepe dolorem distinctio.</AccordionDetails>
      

      </Accordion>
    
    </> );
}

export default AccordionExeerpt;