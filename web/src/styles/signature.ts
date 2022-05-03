import styled from "styled-components";

type ListProps = {
    disabled?: true | false;
}

type ButtonSubscriptionProps = {
    btnStyle: "free" | "monthly" | "annum"
}

export const MainBackground = styled.main`
    width: 100%;
    background: linear-gradient(90deg, #000639 0%, rgba(43, 0, 69, 0.65) 100%);
    background-image: url("images/signature-bg.png");
    background-size: cover;
    min-height: 100vh;
`;

export const Content = styled.div`
    max-width: 1600px;
    margin: 0 auto;

    @media (max-width: 1050px) and (min-height: 1000px) {
        flex-direction: column;
    }

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 500px;
    max-width: 50%;
    margin: 20px 0;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin: 0 5px 30px 5px;
`;

export const Text = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin: 10px 10px;
`;

export const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
`;

export const AppImg = styled.img`
    width: 430px;
    margin: 10px 0;

    @media (max-width: 1000px) {
        width: 70%;
    }
`;

export const StoresContainer = styled.div`
    width: 100%;
    display: flex;  
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CodeXLogo = styled.img`
    width: 340px;
    max-width: 50%;
`;

export const SubscriptionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ffffff;
    height: 200px;
    padding: 0 40px;
    text-align: center;
`;

export const ContentSubscription = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 5px;
    justify-content: space-between;
`;

export const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ValueSubscription = styled.h1`
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 500;
    margin: 35px 0 15px; 
`;

export const ListDetails = styled.div`
    width: 100%;
    padding: 0 10px 0 30px;
`;

export const DetailSubscription = styled.p<ListProps>`
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 20px;

    ${props => props.disabled && `
        opacity: 0.5;
        text-decoration: line-through;
    `}
`;

export const ButtonContainer = styled.div`
    width: 100%;
    padding: 0 25px 25px;
`;

export const ButtonSubscription = styled.button<ButtonSubscriptionProps>`
    width: 100%;
    padding: 25px 40px;
    border-radius: 5px;
    border: 0;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;

    animation: filter 0.3s;

    ${props => props.btnStyle === "free" && `
        background: linear-gradient(180deg, #040404 0%, #2D2A2A 100%);
    `}

    ${props => props.btnStyle === "monthly" && `
        background: linear-gradient(180deg, #000353 17.37%, #7388FF 191.53%);
        &:hover {
            filter: brightness(1.3);
        }
    `}

    ${props => props.btnStyle === "annum" && `
        background: linear-gradient(180deg, #4B004D 0%, #9E05A3 100%);
        &:hover {
            filter: brightness(1.3);
        }
    `}
`;

export const TitleSubscription = styled.h1`
    color: #ffffff;
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
`;

export const FreeContainer = styled.div`
    background: #1c1c1c;
    border: 2px solid #ffffff;
    border-radius: 5px;
    width: 450px;
    margin: 10px;

    ${TitleContainer} {
        background: linear-gradient(179.18deg, #030303 -1.45%, #FFFFFF 490.59%);
    }
`;

export const MonthlyContainer = styled.div`
    background: #1c1c1c;
    border: 2px solid #ffffff;
    border-radius: 5px;
    width: 450px;
    margin: 10px;

    ${TitleContainer} {
        background: linear-gradient(180deg, #000353 11.72%, #7388FF 137.5%);
    }
`;

export const AnnumContainer = styled.div`
    background: #1c1c1c;
    border: 2px solid #ffffff;
    border-radius: 5px;
    width: 450px;
    margin: 10px;

    ${TitleContainer} {
        background: linear-gradient(180deg, #4B004D 0%, #9E05A3 100%);
    }
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
    padding: 50px 30px;
`;

export const CodeXLogoMinimalist = styled.img`
    width: 80px;
`;

export const TextFooter = styled.p`
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
`;