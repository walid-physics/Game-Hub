
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { useGenres } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

export const GenresList = () => {
    const { data, error, isLoading } = useGenres();
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
            <Text fontSize='2xl'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
