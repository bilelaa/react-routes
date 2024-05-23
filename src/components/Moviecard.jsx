import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Moviecard({ movie }) {
  const naviagte = useNavigate();
  return (
    <Card
      onClick={() => {
        naviagte("/description/" + movie?.id);
      }}
      maxW="sm"
    >
      <CardBody>
        <Image
          height={200}
          src={movie.imgUrl}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{movie.name}</Heading>
          <Text>{movie.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {movie.rating}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
}

export default Moviecard;
