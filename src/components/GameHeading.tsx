import { Heading } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';

interface Props{
    genre : Genre | null;
    platform ?: Platform;
}

export const GameHeading = ({genre, platform} : Props) => {
    return (
      <Heading fontWeight="bold" fontSize={60} as="h1" paddingLeft={7}>
        {platform ? platform.name + " " : ""} {genre ? genre?.name + " " : ""}{" "}
        {"games"}
      </Heading>
    );
}
