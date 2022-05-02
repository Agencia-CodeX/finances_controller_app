import styled from "styled-components";

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
    width: 30%;
    margin: 20px 0;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
`;

export const Text = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin: 10px 0;
`;

export const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
`;

export const AppImg = styled.img`
    width: 430px;
`;

export const StoresContainer = styled.div`
    width: 100%;
    display: flex;  
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CodeXLogo = styled.img``;