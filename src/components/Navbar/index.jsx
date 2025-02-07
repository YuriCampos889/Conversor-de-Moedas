import React from "react";
import { useTranslation } from "react-i18next";
import { NavbarContainer, Logo, NavLinks, NavLink } from "./styles";

const SecondaryNavbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <NavbarContainer>
      <Logo></Logo>
      <NavLinks>
        <NavLink href="#home">{t("Acessibilidade")}</NavLink>
        <NavLink href="#about">{t("Alto Contraste")}</NavLink>
        <NavLink as="button" onClick={() => i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt")}>
  {t("changeLanguage")}
</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default SecondaryNavbar;
