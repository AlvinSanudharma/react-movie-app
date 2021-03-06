import React from "react";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={RMDBLogo} alt="" />
        <TMDBLogoImg src={TMDBLogo} alt="" />
      </Content>
    </Wrapper>
  );
}
