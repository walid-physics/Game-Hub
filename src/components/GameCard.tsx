import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import {Game }from "../hooks/useGames"
import GameCardIcon from "./GameCardIcon";

interface Prop{
    game: Game
}

export default function GameCard({game} : Prop) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <GameCardIcon platforms={game.parent_platforms.map(plat => plat.platform)} />
      </CardBody>
    </Card>
  );
}