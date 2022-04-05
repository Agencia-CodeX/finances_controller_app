import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

import styles from "./styles.module.scss";

export function FormRegister() {
    return (
        <section className={styles.contentForm}>
            <form>
                <div className={styles.formBox}>
                    <h4>Cadastro</h4>
                    <input type="text" placeholder="Nome" required />
                    <input type="email" placeholder="E-mail" required />
                    <input type="password" placeholder="Senha" required />
                    <input
                        type="password"
                        placeholder="Confirmar Senha"
                        required
                    />
                </div>
                <button className={styles.registerButton} type="submit">
                    Cadastrar
                </button>
            </form>

            <div className={styles.returnButton}>
                <a href="/login">
                    <HiOutlineArrowNarrowLeft className={styles.icon} /> Voltar
                </a>
            </div>
            <img src="/images/codex_logo_mini.svg" alt="Codex Logo" />
        </section>
    );
}
