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
import listStyle from "@/styles/components/atoms/list/List.module.scss";
import navBarStyle from "@/styles/components/atoms/nav-bar/NavBar.module.scss";

async function fetchContactInfo() {
 const res = await fetch("http://localhost:4003/mock");

 if (!res.ok) {
  throw new Error("Failed to fetch data");
 }

 return res.json();
}

export default async function Home() {
 const contactData = await fetchContactInfo();

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
       <Fragment key={2}>
        <Div className={cn(listStyle["list"], listStyle["list--x"])}>
         {contactData.infoList.map((item: any, index: number) => (
          <Div key={index} className={cn(infoBoxStyle["info-box"], listStyle["list__it--contact"])}>
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
             width={item.icon.width}
             hash={item.icon.hash}
             className={cn(boxStyle["box__icon"], boxStyle["box__icon--w40"])}
            />
           </Span>
           <P
            className={cn(
             infoBoxStyle["info-box__txt-space"],
             typographyStyle["t--body--14-500-135"],
             "color--white-100",
            )}
           >
            {item.txtBox.Line1}
            <br />
            {item.txtBox.Line2}
           </P>
          </Div>
         ))}
        </Div>
       </Fragment>,
      ]}
      as="section"
     />

     <GridCustom
      as="section"
      selectorName="nav-bar"
      styleDefine={navBarStyle}
      elements={[
       <Fragment key={1}>
        <Nav className={cn(navBarStyle["main-nav"])}>
         <Ul className={cn(navBarStyle["links"])}>
          <Li className={cn(navBarStyle["links__li"])}>
           <Link
            href="#"
            className={cn(
             typographyStyle["t--body--16-600-135"],
             navBarStyle["links__a"],
             "color--white-100",
            )}
           >
            Home
           </Link>
          </Li>

          <Li className={cn(navBarStyle["links__li"])}>
           <Link
            href="#"
            className={cn(
             typographyStyle["t--body--16-600-135"],
             navBarStyle["links__a"],
             "color--white-100",
            )}
           >
            About
           </Link>
          </Li>

          <Li className={cn(navBarStyle["links__li"])}>
           <Link
            href="#"
            className={cn(
             typographyStyle["t--body--16-600-135"],
             navBarStyle["links__a"],
             "color--white-100",
            )}
           >
            Pages
           </Link>
          </Li>

          <Li className={cn(navBarStyle["links__li"])}>
           <Link
            href="#"
            className={cn(
             typographyStyle["t--body--16-600-135"],
             navBarStyle["links__a"],
             "color--white-100",
            )}
           >
            Blog
           </Link>
          </Li>

          <Li className={cn(navBarStyle["links__li"])}>
           <Link
            href="#"
            className={cn(
             typographyStyle["t--body--16-600-135"],
             navBarStyle["links__a"],
             "color--white-100",
            )}
           >
            Projects
           </Link>
          </Li>

          <Li className={cn(navBarStyle["links__li"])}>
           <Link
            href="#"
            className={cn(
             typographyStyle["t--body--16-600-135"],
             navBarStyle["links__a"],
             "color--white-100",
            )}
           >
            Contact
           </Link>
          </Li>
         </Ul>
        </Nav>
       </Fragment>,
       <Fragment key={2}>
        <Div className="flex">
         <Div className={navBarStyle["soc-links"]}>
          <Link href="#" className={navBarStyle["soc-link"]}>
           <SvgSprite
            width="2.7rem"
            hash="icon-instagram"
            className={navBarStyle["soc-link__svg"]}
           />
          </Link>

          <Link href="#" className={navBarStyle["soc-link"]}>
           <SvgSprite
            width="2.7rem"
            hash="icon-facebook"
            className={navBarStyle["soc-link__svg"]}
           />
          </Link>
          <Link href="#" className={navBarStyle["soc-link"]}>
           <SvgSprite width="2.7rem" hash="icon-twitter" className={navBarStyle["soc-link__svg"]} />
          </Link>

          <Link href="#" className={navBarStyle["soc-link"]}>
           <SvgSprite
            width="2.7rem"
            hash="icon-linkedin"
            className={navBarStyle["soc-link__svg"]}
           />
          </Link>
         </Div>
         <Button className={cn(navBarStyle["btn"], navBarStyle["btn--white"])}>
          <Span className={cn(navBarStyle["btn__label"])}>Request Quote</Span>
         </Button>
        </Div>
       </Fragment>,
      ]}
     />
    </Header>

    <Main>
     <Section className="presentation-section"></Section>
    </Main>

    <Footer />
   </Div>
  </>
 );
}
