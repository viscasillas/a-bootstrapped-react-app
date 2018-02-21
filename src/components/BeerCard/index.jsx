import React from "react";
import { Card } from "./styled";
import theme from "../../config/theme";

const BeerCard = props => (
  <Card theme={theme}>
    <h3>{props.title}</h3>
    <img
      src="http://www.oberk.com/servlet/servlet.FileDownload?file=00PG000000ZB0ge"
      alt={"Beer Image"}
    />
    <p>
      <b>Brewery</b>: {props.brewery}
      <br />
      <b>IBU</b>: {props.ibu}
      <br />
      <b>ABV</b>:{" "}
      {props.abvrange.length > 1
        ? props.abvrange.map((p, i) => (
            <span key={i}>
              {p}
              {i == 0 && "-"}
            </span>
          ))
        : props.abvrange[0]}
      <br />
    </p>
  </Card>
);

export default BeerCard;
