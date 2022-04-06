import { FormRegister } from "../components/FormRegister";
import { Presentation } from "../components/Presentation";
import { MainBackgroundRegister, ContentRegister } from "../styles/register";

export default function Login() {
    return (
        <MainBackgroundRegister>
            <ContentRegister>
                <Presentation />
                <FormRegister />
            </ContentRegister>
        </MainBackgroundRegister>
    );
}
