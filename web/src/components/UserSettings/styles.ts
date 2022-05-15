import styled from "styled-components";
import { User } from "phosphor-react";

export const Container = styled.div`
    width: calc(100% - 50px);
    margin: 25px 30px 20px 20px;
    padding: 0 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: auto;
    background-color: rgb(24 24 27 / 1);
    border-radius: 1.25rem;
`;


export const Settings = styled.div`
    display: flex;
    width: 100%;
    padding: 30px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 2%;
`;

export const AvatarContainer = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 1.15rem;
    font-weight: bold;
    color: var(--white);
    margin: 0;
`;

export const Avatar = styled.div`
    width: 15rem;
    height: 15rem;
    margin: 1.2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    border: double 3px transparent;
    border-radius: 50%;
    background: linear-gradient(180deg, #DDDDDD 0%, rgba(221, 221, 221, 0.588542) 41.67%, rgba(221, 221, 221, 0.283761) 71.87%, rgba(221, 221, 221, 0) 100%), linear-gradient(64.44deg, #1F8EBE 0.31%, #440495 46.62%, #B102CD 91.98%);
    background-origin: border-box;
    background-clip: content-box, border-box;
`;

export const AvatarImage = styled.img`
    width: 100%;
`;

export const AvatarIcon = styled(User)`
    width: 8rem;
    height: 8rem;
    color: var(--black);
`;

export const ButtonChangeAvatar = styled.button`
    width: 110px;
    height: 40px;
    font-weight: 500;
    border: double 3px transparent;
    border-radius: 2rem;
    background: linear-gradient(#1C1C1C, #1C1C1C), linear-gradient(64.44deg, #1F8EBE 0.31%, #440495 46.62%, #B102CD 91.98%);
    background-origin: border-box;
    background-clip: content-box, border-box;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.7);
    }
`;

export const SettingsContainer = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const SettingLabel = styled.p`
    font-size: 1rem;
    margin: 0;
`;

export const SettingPrimary = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    max-width: 600px;
    min-width: 230px;
    height: 40px;
    margin: 5px 0 20px;
    overflow: hidden;
    font-weight: 500;
    border: double 3px transparent;
    border-radius: 2rem;
    background: linear-gradient(#252530, #252530), linear-gradient(64.44deg, #1F8EBE 0.31%, #440495 46.62%, #B102CD 91.98%);
    background-origin: border-box;
    background-clip: content-box, border-box;
`;

export const SettingPrimaryContent = styled.p`
    margin-left: 15px;
`;

export const SettignsSecundaryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
`;

export const SettingSecundary = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    margin: 5px 0 20px;
    overflow: hidden;
    font-weight: 500;
    border: double 3px transparent;
    border-radius: 2rem;
    background: linear-gradient(#252530, #252530), linear-gradient(64.44deg, #1F8EBE 0.31%, #440495 46.62%, #B102CD 91.98%);
    background-origin: border-box;
    background-clip: content-box, border-box;
`;

export const PhoneContainer = styled.div`
    margin-right: 40px;
    ${SettingSecundary} {
        width: 230px;
    }
`;

export const SignatureContainer = styled.div`
    ${SettingSecundary} {
        width: 120px;
    }
`;


export const ChangeSettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const AssignatureInfo = styled.div`

`;

export const ChangeSettings = styled.button`
    width: 240px;
    height: 50px;
    font-weight: 500;
    border: double 3px transparent;
    border-radius: 2rem;
    background: linear-gradient(#1C1C1C, #1C1C1C), linear-gradient(64.44deg, #1F8EBE 0.31%, #440495 46.62%, #B102CD 91.98%);
    background-origin: border-box;
    background-clip: content-box, border-box;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.7);
    }
`;
