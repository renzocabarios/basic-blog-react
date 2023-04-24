import React from "react";
import Link from "@mui/material/Link";

export default function (props) {
  const { variant, href, title } = props;
  return (
    <>
      <Link variant={variant} href={href}>
        {title}
      </Link>
    </>
  );
}
