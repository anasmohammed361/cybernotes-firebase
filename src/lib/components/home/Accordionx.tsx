import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { SingleTable } from "./SingleTable";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { fireStore } from "../../firebase";
import { singleFile } from "./types";
export function Accordionx() {
  const [open, setOpen] = React.useState(1);
  const [value, loading] = useCollectionData(collection(fireStore, "notes"));
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  if (loading) {
    return <p>loading</p>;
  }
  console.log(value);
  
  return (
    <section className="p-10">
      {value?.map((e,i) => {
        return (
          <Accordion open={open === i+1}>
            <AccordionHeader className="capitalize" onClick={() => handleOpen(i+1)}>
              {e.files.at(0).subject|| ""}
            </AccordionHeader>
            <AccordionBody>
              <div className="p-4">
                <SingleTable data={e.files as singleFile[]} />
              </div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </section>
  );
}
