/* eslint-disable @typescript-eslint/naming-convention */
import React, { ReactNode } from "react";

import { BackgroundButton } from "./styles";

interface Props {
  children: ReactNode;
}

export function RadialBackgroundButton({ children }: Props) {
  return (
    <BackgroundButton
      colors={["#FF73F8", "#8714CE", "#FF739D"]}
      start={[1.3, 0]}
      end={[0.2, 3]}
      locations={[-0.6, 0.2, 0.9]}
    >
      {children}
    </BackgroundButton>
  );
}
