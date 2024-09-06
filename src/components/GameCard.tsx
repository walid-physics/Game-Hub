import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import {Game }from "../hooks/useGames"
import GameCardIcon from "./GameCardIcon";
import Ratings from "./Ratings";
import getCroppedImageUrl from "../services/image-url";

interface Prop{
    game: Game
}

export default function GameCard({game} : Prop) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between">
          <GameCardIcon
            platforms={game.parent_platforms?.map((plat) => plat.platform)}
          />
          <Ratings rating={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}