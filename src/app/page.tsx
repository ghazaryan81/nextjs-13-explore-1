import Link from "next/link";
import Head from "next/head";

import { ReactNode, FC, memo, ElementType, Fragment } from "react";
import cn from "classnames";

// prettier-ignore
import {
 Div, Footer, Header, Main,
 Section, Span, Img, Svg, Use,
 A, Br, Nav, Ul, Li, H1, H2, H3,
 Article, P, Button } from "@/components/electrons/";

import { SvgSprite, Logo } from "@/components/atoms/";

import { GridCustom } from "@/components/molecules";
import topBarStyle from "@/styles/components/molecules/top-bar/TopBar.module.scss";
import boxStyle from "@/styles/components/atoms/box/Box.module.scss";
import typographyStyle from "@/styles/components/atoms/typography/T.module.scss";
import infoBoxStyle from "@/styles/components/atoms/info-box/InfoBox.module.scss";
import infoHubStyle from "@/styles/components/atoms/info-hub/InfoHub.module.scss";
import navBarStyle from "@/styles/components/atoms/nav-bar/NavBar.module.scss";

async function getData() {
 let res;
 try {
  res = await fetch("http://localhost:4003/mock");
 } catch (e: any) {
  throw new Error(e);
 }
 return res.json();
}

export default async function Home() {
 const data = await getData();
 console.log(data.infoList);
 return (
  <>
   <Div>
    <Header>
     <GridCustom
      selectorName="top-bar"
      styleDefine={topBarStyle}
      elements={[
       <Fragment key={1}>
        <Logo href="#" src="assets/img/logo.svg" width="209.078" />
       </Fragment>,
       <Div className={cn(infoHubStyle["info-hub"])} key={2}>
        <Div className={cn(infoBoxStyle["info-box"], infoHubStyle["info-hub__item"])}>
         <Span
          className={cn(
           boxStyle["box"],
           boxStyle["box--lg"],
           boxStyle["box--flex-center"],
           boxStyle["box--round"],
           boxStyle["box--brand-1-flat"],
          )}
         >
          <SvgSprite
           width="2.7rem"
           iconHash="icon-time"
           className={cn(boxStyle["box__icon"], boxStyle["box__icon--w40"])}
          />
         </Span>
         <P
          className={cn(
           infoBoxStyle["info-box__txt-space"],
           typographyStyle["t"],
           typographyStyle["t--color-white-100"],
           typographyStyle["t--fs-140"],
           typographyStyle["t--fw-500"],
           typographyStyle["t--ff-krub"],
           typographyStyle["t--lh-135"],
          )}
         >
          Mon - Sat 9.00 - 18.00
          <br />
          Sunday Closed
         </P>
        </Div>
        <Div className={cn(infoBoxStyle["info-box"], infoHubStyle["info-hub__item"])}>
         <Span
          className={cn(
           boxStyle["box"],
           boxStyle["box--lg"],
           boxStyle["box--flex-center"],
           boxStyle["box--round"],
           boxStyle["box--brand-1-flat"],
          )}
         >
          <SvgSprite
           width="2.7rem"
           iconHash="icon-time"
           className={cn(boxStyle["box__icon"], boxStyle["box__icon--w40"])}
          />
         </Span>
         <P
          className={cn(
           infoBoxStyle["info-box__txt-space"],
           typographyStyle["t"],
           typographyStyle["t--color-white-100"],
           typographyStyle["t--fs-140"],
           typographyStyle["t--fw-500"],
           typographyStyle["t--ff-krub"],
           typographyStyle["t--lh-135"],
          )}
         >
          Mon - Sat 9.00 - 18.00
          <br />
          Sunday Closed
         </P>
        </Div>
        <Div className={cn(infoBoxStyle["info-box"], infoHubStyle["info-hub__item"])}>
         <Span
          className={cn(
           boxStyle["box"],
           boxStyle["box--lg"],
           boxStyle["box--flex-center"],
           boxStyle["box--round"],
           boxStyle["box--brand-1-flat"],
          )}
         >
          <SvgSprite
           width="2.7rem"
           iconHash="icon-time"
           className={cn(boxStyle["box__icon"], boxStyle["box__icon--w40"])}
          />
         </Span>
         <P
          className={cn(
           infoBoxStyle["info-box__txt-space"],
           typographyStyle["t"],
           typographyStyle["t--color-white-100"],
           typographyStyle["t--fs-140"],
           typographyStyle["t--fw-500"],
           typographyStyle["t--ff-krub"],
           typographyStyle["t--lh-135"],
          )}
         >
          Mon - Sat 9.00 - 18.00
          <br />
          Sunday Closed
         </P>
        </Div>
       </Div>,
      ]}
      as="section"
     />

     <GridCustom
      as="section"
      selectorName="nav-bar"
      styleDefine={navBarStyle}
      elements={[<Div>asd</Div>, <Div>asd</Div>]}
     />
    </Header>
    <Main />
    <Footer />
   </Div>
  </>
 );
}
