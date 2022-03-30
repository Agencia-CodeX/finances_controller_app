import React from "react";

import { Container, PerfilImage } from "./styles";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Props {
  urlImage: string;
}

export function ProfileImage({ urlImage }: Props) {
  return (
    <Container>
      <PerfilImage source={{ uri: urlImage }} />
    </Container>
  );
}
