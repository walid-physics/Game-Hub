import { Badge } from "@chakra-ui/react";

interface Props{
    rating : number
}

export default function Ratings({ rating }: Props) {
    let color = (rating >= 80) ? "green" : (rating >= 50) ? "yellow" : "red";
    return (
        <Badge fontSize={15} colorScheme={color} borderRadius={5}>{ rating }</Badge>
    );
}