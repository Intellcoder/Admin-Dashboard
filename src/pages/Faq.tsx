import LinkDisplay from "../components/LinkDisplay";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

const Faq = () => {
  const colors = {
    primary: "#1f2a40",
  };
  return (
    <div className="p-2 ">
      <LinkDisplay title="FAQ" text="Frequently Asked Questions Page" />
      <div className="mt-5">
        <div className="mt-2 mb-2">
          <Accordion defaultExpanded sx={{ backgroundColor: colors.primary }}>
            <AccordionSummary
              expandIcon={<GridExpandMoreIcon className="dark:text-grey-200" />}
              aria-controls="panel1-content"
              id="panel2-header"
            >
              <Typography component={"span"} className="text-greenAccent-600">
                An Important Question
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-grey-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tempore architecto? Deserunt et dolores nisi? Unde labore illo
              odit omnis impedit? Doloribus quidem perspiciatis nisi sint,
              reiciendis rerum deserunt asperiores!
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="mt-2 mb-2">
          <Accordion sx={{ backgroundColor: colors.primary }}>
            <AccordionSummary
              expandIcon={<GridExpandMoreIcon className="dark:text-grey-200" />}
              aria-controls="panel1-content"
              id="panel2-header"
            >
              <Typography component={"span"} className="text-greenAccent-600">
                Another Important Question
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-grey-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tempore architecto? Deserunt et dolores nisi? Unde labore illo
              odit omnis impedit? Doloribus quidem perspiciatis nisi sint,
              reiciendis rerum deserunt asperiores!
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="mt-2 mb-2">
          <Accordion sx={{ backgroundColor: colors.primary }}>
            <AccordionSummary
              expandIcon={<GridExpandMoreIcon className="dark:text-grey-200" />}
              aria-controls="panel1-content"
              id="panel2-header"
            >
              <Typography component={"span"} className="text-greenAccent-600">
                Your Favorite Question
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-grey-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tempore architecto? Deserunt et dolores nisi? Unde labore illo
              odit omnis impedit? Doloribus quidem perspiciatis nisi sint,
              reiciendis rerum deserunt asperiores!
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="mt-2 mb-2">
          <Accordion sx={{ backgroundColor: colors.primary }}>
            <AccordionSummary
              expandIcon={<GridExpandMoreIcon className="dark:text-grey-200" />}
              aria-controls="panel1-content"
              id="panel2-header"
            >
              <Typography component={"span"} className="text-greenAccent-600">
                Some Random Question
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-grey-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tempore architecto? Deserunt et dolores nisi? Unde labore illo
              odit omnis impedit? Doloribus quidem perspiciatis nisi sint,
              reiciendis rerum deserunt asperiores!
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="mt-2 mb-2">
          <Accordion sx={{ backgroundColor: colors.primary }}>
            <AccordionSummary
              expandIcon={<GridExpandMoreIcon className="dark:text-grey-200" />}
              aria-controls="panel1-content"
              id="panel2-header"
            >
              <Typography component={"span"} className="text-greenAccent-600">
                The Final Question
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-grey-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tempore architecto? Deserunt et dolores nisi? Unde labore illo
              odit omnis impedit? Doloribus quidem perspiciatis nisi sint,
              reiciendis rerum deserunt asperiores!
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
