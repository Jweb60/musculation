"use client";

import { ExerciseProps, ExercisesProps } from "@/types";
import {
  Alert,
  AlertIcon,
  Card,
  CardBody,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const ExercisesList = ({ isDataEmpty, allExercises }: ExercisesProps) => {
  const renderDifficulty = (param: string) => {
    switch (param) {
      case "beginner":
        return (
          <Image src="/beginner.png" alt="beginner" width="80" height="25" />
        );
      case "intermediate":
        return (
          <Image
            src="/intermediate.png"
            alt="intermediate"
            width="80"
            height="25"
          />
        );
      case "expert":
        return <Image src="/expert.png" alt="expert" width="80" height="25" />;
      default:
        return;
    }
  };
  return (
    <>
      {!isDataEmpty ? (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap="6"
          p="2rem"
        >
          {allExercises.map((exercise: ExerciseProps) => (
            <Card>
              <CardBody>
                <Flex align="center" justifyContent={"space-between"}>
                  <Text as="b">{exercise.name}</Text>
                  <Flex>{renderDifficulty(exercise.difficulty)}</Flex>
                </Flex>
                <Flex mt=".5rem">
                  <Text as="b">Type:</Text>
                  <Text>&nbsp;: {exercise.type}</Text>
                </Flex>
                <Flex mt=".5rem">
                  <Text as="b">Equipement:</Text>
                  <Text>&nbsp;: {exercise.equipment}</Text>
                </Flex>
                <Text mt=".5rem">
                  <Text as="b">Instructions </Text>:{exercise.instructions}
                </Text>
              </CardBody>
            </Card>
          ))}
        </Grid>
      ) : (
        <Flex m="2rem">
          <Alert status="warning" variant="left-accent">
            <AlertIcon />
            Oops, no results found.
          </Alert>
        </Flex>
      )}
    </>
  );
};
export default ExercisesList;
