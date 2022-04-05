import styles from "./styles.module.scss";

export function FormLogin() {
    return (
        <section className={styles.contentForm}>
            <div className={styles.formBox}>
                <h4>Login</h4>
                <form>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                </form>
            </div>
            <button className={styles.loginButton} type="button">
                Entrar
            </button>
            <a href="/register">
                <button className={styles.registerButton} type="button">
                    Cadastrar-se
                </button>
            </a>
            <img src="/images/codex_logo_mini.svg" alt="Codex Logo" />
        </section>
    );
}
