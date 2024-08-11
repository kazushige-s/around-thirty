import {
  Box,
  Button,
  Card,
  CardSection,
  Center,
  Container,
  Grid,
  GridCol,
  Group,
  Text,
} from "@mantine/core";
import React from "react";
import Image from "next/image";
import beach from "/src/images/beach.jpg";
// import beach2 from "/src/images/beach2.mp4";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import CardCopponent from "src/Card/CardCopponent";

export default function Home() {
  return (
    <>
      {/* ヘッダーエリア */}
      <Container>
        <h1 className="h-16 pl-10 text-4xl content-center">White Beach</h1>
      </Container>

      {/* Heroエリア */}
      <Container>
        <Image height={600} width={1600} src={beach} alt="beach" priority />
        {/* <video src={beach2} controls playsInline autoPlay loop /> */}
        {/* <video height={600} width={1600} controls autoPlay loop>
          <source src={beach2} type="video/mp4" />
        </video> */}
      </Container>

      <Container size="100rem">
        {/* pick upエリア */}
        <h2 className="text-4xl flex justify-center mt-24 mb-7">PICK UP</h2>

        {/* カルーセルエリア */}
        <Carousel
          withIndicators
          height={370}
          slideSize={200}
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          <CarouselSlide>
            <CardCopponent />
          </CarouselSlide>
          <CarouselSlide>
            <CardCopponent />
          </CarouselSlide>
          <CarouselSlide>
            <CardCopponent />
          </CarouselSlide>
          <CarouselSlide>
            <CardCopponent />
          </CarouselSlide>
        </Carousel>

        {/* コンテンツエリア */}
        <h2 className="text-4xl flex justify-center mt-24 mb-7">FEATURE</h2>
        <Grid>
          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Center>
              <CardCopponent />
            </Center>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Center>
              <CardCopponent />
            </Center>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Center>
              <CardCopponent />
            </Center>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Center>
              <CardCopponent />
            </Center>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Center>
              <CardCopponent />
            </Center>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Center>
              <CardCopponent />
            </Center>
          </GridCol>
        </Grid>
      </Container>

      {/* CONTACTエリア */}
      <Container size="100rem" className="mt-14">
        <h2 className="text-4xl flex justify-center mb-7 bg-white">CONTACT</h2>
        <Grid justify="space-around" align="flex-start" className="mb-12">
          <GridCol span={{ base: 12, md: 4 }}>
            <Box>
              <Text>テキストテキストテキスト</Text>
              <Text>テキストテキストテキスト</Text>
              <Text>テキストテキストテキスト</Text>
            </Box>
          </GridCol>
          <GridCol span={{ base: 12, md: 4 }}>
            <Text size="xl">お問い合わせ</Text>
            <Box>
              <Text>名前</Text>
              <Text>メッセージ</Text>
              <Button>送信</Button>
            </Box>
          </GridCol>
        </Grid>
      </Container>

      {/* フッターエリア */}
      <Container size="100rem" className="mt-14">
        <Center>
          <small className="m-2">&copy;White Beach</small>
        </Center>
      </Container>
    </>
  );
}
