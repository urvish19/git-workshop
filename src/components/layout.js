import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        Github workshop
      </h3>
    </Link>

    {children}
  </div>
);
