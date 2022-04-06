import { ContentLeft, ImageBg, Logo } from "./styles";

export function Presentation() {
    return (
        <ContentLeft>
            <div>
                <div>
                    <Logo src="/images/logo.svg" alt="Qfinances logo" />
                </div>

                <div>
                    <h1>Seu dinheiro, seu controle!</h1>
                    <p>Controle seus limites de gastos através do nosso app</p>
                    <p>
                        Para dados mais precisos obtenha o plano premium na
                        nossa página da web
                    </p>
                </div>
            </div>
            <ImageBg>
                <img src="/images/cards.svg" alt="Cards" />
            </ImageBg>
        </ContentLeft>
    );
}
