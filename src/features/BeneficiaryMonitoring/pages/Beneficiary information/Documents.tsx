import { Accordion, AccordionTab } from "primereact/accordion";
import React from "react";

const Documents = () => {
  return (
    <Accordion activeIndex={0}>
      <AccordionTab header="Documentos de legalizacion"> </AccordionTab>
      <AccordionTab header="Documentos de renovacion"> </AccordionTab>
    </Accordion>
  );
};

export default Documents;
