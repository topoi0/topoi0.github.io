import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import MedIconImage from "../../images/medical.svg";
import MLIconImage from "../../images/ml.svg";
import StatsIconImage from "../../images/stats.svg";
import PharmaIconImage from "../../images/pharma.svg";
import InsuranceIconImage from "../../images/insurance.svg";
import ComsultingIconImage from "../../images/consulting.svg";


const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: MedIconImage,
      title: "医療分野",
      description: "医師免許保持者がおり、実際の医療現場に対する理解があります。"
    },
    {
      imageSrc: InsuranceIconImage,
      title: "保険数理",
      description: "日本アクチュアリー会正会員がおり、保険分野の経営支援が行えます。"
    },
    {
      imageSrc: PharmaIconImage,
      title: "製薬",
      description: "大手製薬企業との取組があり、各種製薬。"
    },
    {
      imageSrc: StatsIconImage,
      title: "統計分析",
      description: "高度な数学・統計学を利用したデータ分析ノウハウがあります。"
    },
    {
      imageSrc: MLIconImage,
      title: "機械学習",
      description: "最新の機械学習を利用して、大量・複雑なデータ分析を行うことができます。"
    },
    {
      imageSrc: ComsultingIconImage,
      title: "経営支援",
      description: "経営コンサルタントとして、上流の課題設定からアプローチができます。"
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>我々の提供<span tw="text-primary-500">サービス</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
