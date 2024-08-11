import { Card, CardSection, Group, Text } from "@mantine/core";
import React from "react";
import Image from "next/image";
import beach from "/src/images/beach.jpg";

export default function CardCopponent() {
  return (
    <Card
      shadow="xs"
      padding="md"
      radius="lg"
      withBorder
      style={{ width: "343px", height: "367px" }}
    >
      <CardSection>
        <Image height={228} width={343} src={beach} alt="beach" priority />
      </CardSection>
      <Group>
        <Text fw={500}>White Beach1</Text>
      </Group>
      <Text size="sm" c="dimmed">
        test
      </Text>
    </Card>
  );
}
