
import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import { Genre, useGenres } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';


interface Props {
  setGenre: (genre: Genre) => void;
  selectedGenre : Genre | null
}


export const GenresList = ({setGenre, selectedGenre}: Props) => {
  const { data, error, isLoading } = useGenres();
  

    if (error) return null;

    if (isLoading) 
        return <Spinner />
    
  return (
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
  );
}
