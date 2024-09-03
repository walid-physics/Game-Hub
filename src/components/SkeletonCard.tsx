import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function SkeletonCard() {
    return (
        <Card>
        <Skeleton height={60}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    );
}