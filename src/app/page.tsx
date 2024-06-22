import { Card, CardSection, Container, Group, Text } from "@mantine/core";
import React from "react";
import Image from "next/image";
import beach from "/src/images/beach.jpg";
import beach2 from "/src/images/beach2.mp4";
import { Carousel, CarouselSlide } from "@mantine/carousel";

export default function Home() {
  return (
    <>
      {/* ヘッダーエリア */}
      <Container>
        <h1 className="h-16 pl-10 text-4xl content-center">White Beach</h1>
      </Container>

      {/* Heroエリア */}
      <Container>
        {/* <Image height={600} width={1600} src={beach} alt="beach" priority /> */}
        {/* <video src={beach2} controls playsInline autoPlay loop /> */}
        <video height={600} width={1600} controls autoPlay loop>
          <source src={beach2} type="video/mp4" />
        </video>
      </Container>

      <Container size="100rem">
        {/* pick upエリア */}
        <h2 className="text-4xl flex justify-center mt-24 mb-7">Pick Up</h2>

        {/* カルーセルエリア */}
        <Carousel
          withIndicators
          height={200}
          slideSize={200}
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          <CarouselSlide>
            {/* カードエリア */}
            <Card shadow="xs" padding="md" radius="lg" withBorder>
              <CardSection>
                <Image
                  height={200}
                  width={200}
                  src={beach}
                  alt="beach"
                  priority
                />
              </CardSection>
              <Group>
                <Text fw={500}>White Beach1</Text>
              </Group>
              <Text size="sm" c="dimmed">
                test
              </Text>
            </Card>
          </CarouselSlide>
          <CarouselSlide>
            {/* カードエリア */}
            <Card shadow="xs" padding="md" radius="lg" withBorder>
              <CardSection>
                <Image
                  height={200}
                  width={200}
                  src={beach}
                  alt="beach"
                  priority
                />
              </CardSection>
              <Group>
                <Text fw={500}>White Beach1</Text>
              </Group>
              <Text size="sm" c="dimmed">
                test
              </Text>
            </Card>
          </CarouselSlide>
        </Carousel>
      </Container>
    </>
  );
}
