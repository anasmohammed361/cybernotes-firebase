import  { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import toast from "react-hot-toast";
import { uploadDataToFirestore, uploadFileAndReturnUrl } from "../scripts/upload";
import { singleFile } from "./types";
 
export function FileUpload() {
  const [open, setOpen] = useState(false);
  const [file,setFile] = useState<File|undefined>(undefined)
  const [subject,setSubject] = useState("")
  const [name,setName] = useState("")
  const handleOpen = () => setOpen(true)
  const handleUpload = async()=>{
    if (!file || !subject) {
        toast.error("Please Fill all the fields")
        return 
    }
    const fileUrl =await uploadFileAndReturnUrl(file)
    const dbObject:singleFile= {
        name,
        fileUrl,
        subject
    }
    await uploadDataToFirestore(dbObject)
    setOpen(false)
    toast.success("Successfully created a record")
  }
  return (
    <>
      <Button onClick={handleOpen}>Upload</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Upload a Document
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Specify the Subject you wannt store it in
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Subject
            </Typography>
            <Input crossOrigin={undefined} value={subject}  onChange={(e)=>setSubject(e.target.value)} label="Subject" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Name
            </Typography>
            <Input crossOrigin={undefined} value={name}  onChange={(e)=>setName(e.target.value)} label="Name" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your File
            </Typography>
            <Input crossOrigin={undefined} onChange={(e)=>{
                if (e.target.files) {
                    setFile(e.target.files[0])
                }
            }} label="Password" size="lg" type="file" accept="application/pdf" />
          </CardBody>
          <CardFooter className="pt-0 flex gap-2">
            <Button variant="outlined" onClick={()=>{setOpen(false)}} fullWidth>
              Cancel
            </Button>
            <Button variant="gradient" onClick={handleUpload} fullWidth>
              Upload file
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}