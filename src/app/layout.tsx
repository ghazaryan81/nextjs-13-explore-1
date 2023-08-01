import type { Metadata } from "next";
import { ReactNode } from "react";

import "@/styles/styles.scss";

export default function RootLayout({ children }: { children: ReactNode }) {
 return (
  <>
   {/* prettier-ignore */}
   <html lang="en">
   <title>some project</title>

   <link rel="canonical" href="http://localhost:3000/"/>
   <link rel="alternate" href="http://localhost:3000/en" href-lang="en-US"/>
   <link rel="alternate" href="http://localhost:3000/hy" href-lang="hy-HY"/>
   <link rel="alternate" href="http://localhost:3000/ru" href-lang="ru-RU"/>

   <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes"/>

   <meta name="theme-color"           content="#ffffff"/>

   <meta name="format-detection"      content="address=no"/>
   <meta name="format-detection"      content="email=no"/>
   <meta name="format-detection"      content="telephone=no"/>
   <meta name="format-detection"      content="date=no"/>

   <meta name="generator"             content="some project - generator"/>
   <meta name="keywords"              content="some project"/>
   <meta name="application-name"      content="some project - applicationName"/>

   <meta name="author"                content="Author.0"/>
   <meta name="author"                content="Author.1"/>
   <link rel="author"                 href="https://github.com/author.0"/>
   <link rel="author"                 href="https://github.com/author.1"/>

   <meta name="creator"               content="Author.1"/>
   <meta name="publisher"             content="Author.1"/>

   <meta httpEquiv="X-UA-Compatible"  content="IE=edge"/>
   <meta httpEquiv="X-UA-Compatible"  content="IE=edge,chrome=1"/>

   <link rel="apple-touch-icon"             sizes=""          href="assets/img/fav/apple-icon.png"                 type="image/png"/>
   <link rel="apple-touch-icon"             sizes="40x40"     href="assets/img/fav/apple-touch-icon-40x40.png"     type="image/png"/>
   <link rel="apple-touch-icon"             sizes="57x57"     href="assets/img/fav/apple-touch-icon-57x57.png"     type="image/png"/>
   <link rel="apple-touch-icon"             sizes="58x58"     href="assets/img/fav/apple-touch-icon-58x58.png"     type="image/png"/>
   <link rel="apple-touch-icon"             sizes="60x60"     href="assets/img/fav/apple-touch-icon-60x60.png"     type="image/png"/>
   <link rel="apple-touch-icon"             sizes="60x60"     href="assets/img/fav/apple-touch-icon-60x60.png"     type="image/png"/>
   <link rel="apple-touch-icon"             sizes="72x72"     href="assets/img/fav/apple-touch-icon-72x72.png"     type="image/png"/>
   <link rel="apple-touch-icon"             sizes="76x76"     href="assets/img/fav/apple-touch-icon-76x76.png"     type="image/png"/>
   <link rel="apple-touch-icon"             sizes="80x80"     href="assets/img/fav/apple-touch-icon-80x80.png"     type="image/png"/>
   <link rel="apple-touch-icon"             sizes="87x87"     href="assets/img/fav/apple-touch-icon-87x87.png"     type="image/png"/>
   <link rel="apple-touch-icon"             sizes="114x114"   href="assets/img/fav/apple-touch-icon-114x114.png"   type="image/png"/>
   <link rel="apple-touch-icon"             sizes="144x144"   href="assets/img/fav/apple-touch-icon-144x144.png"   type="image/png"/>
   <link rel="apple-touch-icon"             sizes="120x120"   href="assets/img/fav/apple-touch-icon-120x120.png"   type="image/png"/>
   <link rel="apple-touch-icon"             sizes="152x152"   href="assets/img/fav/apple-touch-icon-152x152.png"   type="image/png"/>
   <link rel="apple-touch-icon"             sizes="167x167"   href="assets/img/fav/apple-touch-icon-167x167.png"   type="image/png"/>
   <link rel="apple-touch-icon"             sizes="180x180"   href="assets/img/fav/apple-touch-icon-180x180.png"   type="image/png"/>
   <link rel="apple-touch-icon"             sizes="1024x1024" href="assets/img/fav/apple-touch-icon-1024x1024.png" type="image/png"/>

   <link rel="apple-touch-icon-precomposed" sizes=""          href="assets/img/fav/apple-icon.png"                 type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="40x40"     href="assets/img/fav/apple-touch-icon-40x40.png"     type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="57x57"     href="assets/img/fav/apple-touch-icon-57x57.png"     type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="58x58"     href="assets/img/fav/apple-touch-icon-58x58.png"     type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="60x60"     href="assets/img/fav/apple-touch-icon-60x60.png"     type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="60x60"     href="assets/img/fav/apple-touch-icon-60x60.png"     type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="72x72"     href="assets/img/fav/apple-touch-icon-72x72.png"     type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="76x76"     href="assets/img/fav/apple-touch-icon-76x76.png"     type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="80x80"     href="assets/img/fav/apple-touch-icon-80x80.png"     type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="87x87"     href="assets/img/fav/apple-touch-icon-87x87.png"     type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="114x114"   href="assets/img/fav/apple-touch-icon-114x114.png"   type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="144x144"   href="assets/img/fav/apple-touch-icon-144x144.png"   type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="120x120"   href="assets/img/fav/apple-touch-icon-120x120.png"   type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="152x152"   href="assets/img/fav/apple-touch-icon-152x152.png"   type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="167x167"   href="assets/img/fav/apple-touch-icon-167x167.png"   type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="180x180"   href="assets/img/fav/apple-touch-icon-180x180.png"   type="image/png"/>
   <link rel="apple-touch-icon-precomposed" sizes="1024x1024" href="assets/img/fav/apple-touch-icon-1024x1024.png" type="image/png"/>

   <link rel="icon"                         sizes=""          href="assets/img/fav/favicon-without-bg.png"         type="image/png"/>
   <link rel="icon"                         sizes="16x16"     href="assets/img/fav/favicon-16x16.png"              type="image/png"/>
   <link rel="icon"                         sizes="32x32"     href="assets/img/fav/favicon-32x32.png"              type="image/png"/>
   <link rel="icon"                         sizes="96x96"     href="assets/img/fav/favicon-96x96.png"              type="image/png"/>
   <link rel="icon"                         sizes="128x128"   href="assets/img/fav/favicon-128x128.png"            type="image/png"/>
   <link rel="icon"                         sizes="192x192"   href="assets/img/fav/favicon-192x192.png"            type="image/png"/>
   <link rel="icon"                         sizes="194x194"   href="assets/img/fav/favicon-194x194.png"            type="image/png"/>
   <link rel="icon"                         sizes="196x196"   href="assets/img/fav/favicon-196x196.png"            type="image/png"/>
   <link rel="icon" type="image/svg+xml"                      href="assets/img/fav/favicon-with-bg.svg"/>

   <meta httpEquiv="X-UA-Compatible"                  content="IE=edge"/>
   <meta httpEquiv="X-UA-Compatible"                  content="IE=edge,chrome=1"/>

   <meta name="msapplication-tooltip"                 content="Project"/>
   <meta name="msapplication-starturl"                content="/"/>
   <meta name="msapplication-TileColor"               content="#ffffff"/>
   <meta name="msapplication-TileImage"               content="assets/img/fav/ms-icon-310x310.png"/>
   <meta name="msapplication-square70x70logo"         content="assets/img/fav/mstile-70x70.png"/>
   <meta name="msapplication-square150x150logo"       content="assets/img/fav/mstile-150x150.png"/>
   <meta name="msapplication-wide310x150logo"         content="assets/img/fav/msapplicationWide310x150logo.png"/>
   <meta name="msapplication-square310x310logo"       content="assets/img/fav/ms-icon-310x310.png"/>
   <meta name="msapplication-config"                  content="browserconfig.xml"/>

   <meta property="og:title"                          content="some project - title"/>
   <meta property="og:description"                    content="some project - description"/>
   <meta property="og:url"                            content="http://localhost:3000/"/>
   <meta property="og:site_name"                      content="some project"/>
   <meta property="og:locale"                         content="en_US"/>

   <meta property="og:image"                          content="http://localhost:3000/assets/img/project1.jpg"/>
   <meta property="og:image:width"                    content="1024"/>
   <meta property="og:image:height"                   content="1024"/>
   <meta property="og:image:alt"                      content="alt"/>

   <meta property="og:image"                          content="http://localhost:3000/assets/img/project1.jpg"/>
   <meta property="og:image:width"                    content="1024"/>
   <meta property="og:image:height"                   content="1024"/>
   <meta property="og:image:alt"                      content="alt"/>
   <meta property="og:type"                           content="article"/>

   <meta property="article:published_time"            content="2023-01-01T00:00:00.000Z"/>
   <meta property="article:author"                    content="Author.0"/>
   <meta property="article:author"                    content="Author.1"/>

   <meta name="twitter:card"                          content="summary"/>
   <meta name="twitter:title"                         content="some project - title"/>
   <meta name="twitter:description"                   content="some project - description"/>
   <meta name="twitter:creator"                       content="@twname" />
   <meta name="twitter:creator:id"                    content="" />

   <meta name="twitter:image"                         content="http://localhost:3000/assets/img/project1.jpg"/>
   <meta name="twitter:image:width"                   content="1024"/>
   <meta name="twitter:image:height"                  content="1024"/>
   <meta name="twitter:image:alt"                     content="alt"/>

   <meta name="twitter:image"                         content="http://localhost:3000/assets/img/project1.jpg"/>
   <meta name="twitter:image:width"                   content="1024"/>
   <meta name="twitter:image:height"                  content="1024"/>
   <meta name="twitter:image:alt"                     content="alt"/>

   <meta name="msapplication-tooltip"                 content="Project"/>
   <meta name="msapplication-starturl"                content="/"/>
   <meta name="msapplication-TileColor"               content="#ffffff"/>
   <meta name="msapplication-TileImage"               content="assets/img/fav/ms-icon-310x310.png"/>
   <meta name="msapplication-square70x70logo"         content="assets/img/fav/mstile-70x70.png"/>
   <meta name="msapplication-square150x150logo"       content="assets/img/fav/mstile-150x150.png"/>
   <meta name="msapplication-wide310x150logo"         content="assets/img/fav/msapplicationWide310x150logo.png"/>
   <meta name="msapplication-square310x310logo"       content="assets/img/fav/ms-icon-310x310.png"/>
   <meta name="msapplication-config"                  content="browserconfig.xml"/>

   <meta name="apple-mobile-web-app-capable"          content="yes"/>
   <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
   <meta name="apple-mobile-web-app-title"            content="some project"/>
   <link rel="apple-touch-startup-image"              href="assets/img/fav/apple-touch-icon-1024x1024.png"/>

   <link crossOrigin="use-credentials" rel="manifest" href="manifest.json"/>

   {/* <link rel="alternate icon"                         href="assets/img/fav/favicon.ico"/> */}
   <link rel="mask-icon"                              href="assets/img/fav/favicon-without-bg.svg" color="#ffffff"/>
   <body>{children}</body>
  </html>
  </>
 );
}
