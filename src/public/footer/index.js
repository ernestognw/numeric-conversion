import React from "react";
import Typography from "components/common/typography";
import { LoveIcon, Container } from "./elements";

const Footer = () => (
  <Container>
    <Typography variant="muted" font="lightItalic" marginT="13">
      Made with <LoveIcon /> by{" "}
      <a
        href="https://github.com/ernestognw"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ernesto García
      </a>
    </Typography>
  </Container>
);

export default Footer;
