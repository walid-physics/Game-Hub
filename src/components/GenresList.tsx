
import { Button, HStack, Heading, Image, List, ListItem} from '@chakra-ui/react';
import { Genre, useGenres } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';


interface Props {
  setGenre: (genre: Genre) => void;
  selectedGenre : Genre | null
}


export const GenresList = ({setGenre, selectedGenre}: Props) => {
  const { data } = useGenres();
  

    // if (error) return null;

    // if (isLoading) 
    //     return <Spinner />
    
  return (
    <>
      <Heading marginBottom={5}>Genres </Heading>
      <List>
        {data.map((genre) => (
          <ListItem paddingY={2} key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="2xl"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => {
                  setGenre(genre);
                }}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
