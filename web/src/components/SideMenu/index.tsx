import Router from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container, MenuContainer, Logo, Nav, Menu, ItemMenu, Icon, Logout, Button } from "./styles"

export function SideMenu() {
    const { signOut } = useContext(AuthContext)

    return (
        <Container>
            <MenuContainer>
                <Logo src="images/logo.svg" />
                <Nav>
                    <ItemMenu onClick={() => Router.push("/dashboard")} active>
                        <Icon src="images/dashboard-icon.svg" /> Dashboard
                    </ItemMenu>
                    <ItemMenu onClick={() => Router.push("/despesas")}>
                        <Icon src="images/despesas-icon.svg" /> Despesas
                    </ItemMenu>
                    <ItemMenu onClick={() => Router.push("/configuracoes")}>
                        <Icon src="images/configuracoes-icon.svg" /> Configurações
                    </ItemMenu>
                    <ItemMenu onClick={() => Router.push("/perfil")}>
                        <Icon src="images/perfil-icon.svg" /> Perfil
                    </ItemMenu>
                    <ItemMenu onClick={() => Router.push("/historico")}>
                        <Icon src="images/historico-icon.svg" /> Histórico
                    </ItemMenu>
                </Nav >
            </MenuContainer >
            <Logout>
                <Button onClick={signOut}>
                    <Icon src="images/logout-icon.svg" /> Desconectar
                </Button>
            </Logout>
        </Container >
    );
}