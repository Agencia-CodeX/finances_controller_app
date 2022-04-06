import { FormLogin } from "../components/FormLogin";
import { Presentation } from "../components/Presentation";
import { ContentLogin, MainBackgroundLogin } from "../styles/login";

export default function Login() {
    return (
        <MainBackgroundLogin>
            <ContentLogin>
                <Presentation />
                <FormLogin />
            </ContentLogin>
        </MainBackgroundLogin>
    );
}
