import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import {Game }from "../hooks/useGames"
import GameCardIcon from "./GameCardIcon";
import Ratings from "./Ratings";

interface Prop{
    game: Game
}

export default function GameCard({game} : Prop) {
  return (
    <Card >
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <GameCardIcon
            platforms={game.parent_platforms.map((plat) => plat.platform)}
          />
          <Ratings rating={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  );
}