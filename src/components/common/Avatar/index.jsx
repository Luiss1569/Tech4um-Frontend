import React, { memo } from "react";

import { Avatar, AvatarFallback } from "./styles";

function AvatarComponent({ children, ...props }) {
  const name = children?.toUpperCase()?.split(" ") || "";
  return (
    <Avatar {...props}>
      <AvatarFallback>
        {name?.[0]?.[0]}
        {name?.[1]?.[0]}
      </AvatarFallback>
    </Avatar>
  );
}

export default memo(AvatarComponent);
