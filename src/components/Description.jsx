import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "../context/Mycontext";
import {
  Card,
  CardBody,
  Heading,
 
  Text,
  Stack,
} from "@chakra-ui/react";
function Description() {
  const [details, setDetails] = useState({});
  const { Data } = useContext(MyContext);
  const { id } = useParams();

  useEffect(() => {
    const item = Data.find((e) => e.id == id);
    setDetails(item);
  }, []);

  console.log(id);
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      
        <iframe
        width={460}
        height={460}
          title="naruto"
          src={details.trailerUrl}
          
        ></iframe>
      

      <Stack>
        <CardBody>
          <Heading size="md">{details?.name}</Heading>

          <Text py="2">{details?.description}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default Description;
