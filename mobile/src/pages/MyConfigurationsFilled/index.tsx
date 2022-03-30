import React, { useState } from "react";

import { GradientBackground } from "../../global/Components/GradientBackground";
import { LinearBackgroundButton } from "../../global/Components/GradientButton";
import { ProfileImage } from "../../global/Components/ProfileImage";
import {
  Container,
  Header,
  Title,
  AlterButton,
  Profile,
  AlterTextButton,
  ConfigButton,
  Icons,
  Main,
  TextButton,
  Intervalo,
  SelectDropdown,
  Budget,
  Footer,
  Button,
} from "./styles";

const data = [
  { label: "Semanalmente", value: "1" },
  { label: "Mensalmente", value: "2" },
  { label: "Semestralmente", value: "3" },
  { label: "Anualmente", value: "4" },
];

export function MyConfigurationsFilled() {
  const [dropdown, setDropdown] = useState(null);
  const [selected, setSelected] = useState([]);

  //  const _renderItem = item => {
  //    return (

  //    )
  //  }

  return (
    <Container>
      <GradientBackground />
      <Header>
        <Profile>
          <ProfileImage urlImage="https://media-exp1.licdn.com/dms/image/C5603AQEjKVPfTg2L0g/profile-displayphoto-shrink_200_200/0/1642122511131?e=1654128000&v=beta&t=ijZ83vtkA6122pI1AK8oEktWt-GKMVaZ9nQyhcpfkow" />
          <AlterButton>
            <AlterTextButton>Alterar</AlterTextButton>
          </AlterButton>
        </Profile>
        <Title>Olá, Guilherme{"\n"}Veroneze</Title>
      </Header>
      <Main>
        <ConfigButton>
          <Icons name="gear" size={50} />
          <TextButton>Configurar gastos</TextButton>
        </ConfigButton>
        <Intervalo>
          <Title>Intervalo</Title>
          <SelectDropdown
            placeholder="Selecione o intervalo"
            labelField="label"
            valueField="value"
            data={data}
            search
            searchPlaceholder="Search"
            onChange={(item) => {
              setDropdown(item.value);
              console.log("selected", item);
            }}
            value={dropdown}
            iconColor="white"
          />
        </Intervalo>
        <Budget>
          <Title>Budget</Title>
        </Budget>
      </Main>
      <Footer>
        <Title>Suas categorias de gastos:</Title>
        <Button>
          <LinearBackgroundButton>
            <TextButton>Ver histórico</TextButton>
          </LinearBackgroundButton>
        </Button>
      </Footer>
    </Container>
  );
}
