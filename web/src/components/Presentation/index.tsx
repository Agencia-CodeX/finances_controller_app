import styles from "./styles.module.scss";

export function Presentation() {
    return (
        <section className={styles.contentLeft}>
            <div className={styles.content}>
                <div>
                    <img
                        src="/images/logo.svg"
                        alt="Qfinances logo"
                        className={styles.logo}
                    />
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
            <div className={styles.imageBg}>
                <img src="/images/cards.svg" alt="Cards" />
            </div>
        </section>
    );
}
