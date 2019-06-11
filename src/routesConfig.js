import React from "react";
import Busca from "./components/Busca";
import Album from "./components/Album";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { media } from "./style";

const Rotas = styled.div`
  display: inline-flex;
  width: 85%;
  padding-top: 35px;
  ${media.tablet`
    width: 100%;
    display:flex;
    padding-top: 15px;
  `}
`;

const Routes = () => {
  return (
    <Rotas className="routes_wrapper">
      <Switch>
        <Route exact={true} path={"/"} component={Busca} />
        <Route exact={true} path={"/album/:id"} component={Album} />
      </Switch>
    </Rotas>
  );
};
export default Routes;