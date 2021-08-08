import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "./helpers/AnimationRevealPage.js";

import Hero from "./components/hero/BackgroundAsImage.js";
import Features from "./components/features/DashedBorderSixFeatures";
import MainFeature from "./components/features/TwoColSingleFeatureWithStats2.js";
import Manager from "./components/testimonials/TwoColumnWithImage.js";
import Footer from "./components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Features />
    <Manager />
    <Footer />
  </AnimationRevealPage>
);
