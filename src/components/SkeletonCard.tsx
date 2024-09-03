import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function SkeletonCard() {
    return (
        <Card width='300px' borderRadius={10} overflow="hidden">
        <Skeleton height={60}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    );
}