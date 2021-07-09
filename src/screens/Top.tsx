import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}
const Top = ({ match, history, location }: Props) => {
  console.log(match);
  console.log(history);
  console.log(location);
  return (
    <div>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <h1>Top page</h1>
    </div>
  );
};

export default Top;
