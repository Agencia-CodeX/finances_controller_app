import Router from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container, MenuContainer, Logo, ItemMenu, Icon, Logout, Button } from "./styles"

const sideMenuItems = {
    dashboard: {
        title: "Dashboard",
        url: "/dashboard",
        image: {
            source: "images/dashboard-icon.svg",
            alt: "Dashborad image"
        }
    },
    despesas: {
        title: "Despesas",
        url: "/despesas",
        image: {
            source: "images/despesas-icon.svg",
            alt: "Despesas image"
        }
    },
    configuracoes: {
        title: "Configurações",
        url: "/configuracoes",
        image: {
            source: "images/configuracoes-icon.svg",
            alt: "Configurações image"
        }
    },
    perfil: {
        title: "Perfil",
        url: "/perfil",
        image: {
            source: "images/perfil-icon.svg",
            alt: "Perfil image"
        }
    },
    historico: {
        title: "Histórico",
        url: "/historico",
        image: {
            source: "images/historico-icon.svg",
            alt: "Histórico image"
        }
    },
}
interface SideMenuProps {
    itemActive: keyof typeof sideMenuItems
}

export function SideMenu({ itemActive }: SideMenuProps) {
    const { signOut } = useContext(AuthContext)

    return (
        <Container>
            <MenuContainer>
                <Logo src="images/logo.svg" />

                {Object.entries(sideMenuItems).map(([key, value]) => {
                    return (
                        itemActive === key ?

                            <ItemMenu
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                                key={key}
                                onClick={() => Router.push(value.url)}
                                active
                            >
                                <Icon src={value.image.source} alt={value.image.alt} /> {value.title}
                            </ItemMenu>

                            :

                            <ItemMenu
                                key={key}
                                onClick={() => Router.push(value.url)}
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-blue-650 focus:opacity-100"
                            >
                                <Icon src={value.image.source} alt={value.image.alt} /> {value.title}
                            </ItemMenu>

                    )
                })}

            </MenuContainer >
            <Logout>
                <Button onClick={signOut} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-zinc-50 focus:opacity-100">
                    <Icon src="images/logout-icon.svg" /> Desconectar
                </Button>
            </Logout>
        </Container >
    );
}