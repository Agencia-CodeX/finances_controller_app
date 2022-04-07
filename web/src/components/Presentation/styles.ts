import styled from "styled-components";

export const ImageBg = styled.div`
    min-width: 100%;
    height: auto;

    img {
        width: 1050px;
        position: absolute;
        bottom: 0;
        left: 90px;
    }
`;

export const Logo = styled.img`
    width: 450px;
`;

export const ContentLeft = styled.section`
    width: 60%;
    min-height: 100vh;
    padding: 18px 0 0 60px;
    position: relative;

    h1 {
        font-size: 3.5rem;
        font-weight: 600;
    }

    p {
        font-size: 1.7rem;
        font-weight: auto;
    }

    @media (max-height: 1080px) and (min-width: 1200px) {
        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.5rem;
        }

        ${ImageBg} {
            img {
                width: 800px;
            }
        }
    }

    @media (max-height: 810px) and (min-width: 1200px) {
        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.5rem;
        }

        ${ImageBg} {
            img {
                width: 500px;
            }
        }
    }

    @media (max-height: 700px) and (min-width: 1200px) {
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1.3rem;
        }

        ${ImageBg} {
            img {
                width: 510px;
            }
        }
    }

    @media (max-height: 650px) and (min-width: 1200px) {
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1.2rem;
        }

        ${ImageBg} {
            img {
                width: 430px;
            }
        }
    }

    @media (max-height: 600px) and (min-width: 1200px) {
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1.2rem;
        }

        ${ImageBg} {
            img {
                width: 550px;
                position: relative;
            }
        }
    }

    @media (max-width: 1200px) and (min-height: 710px) {
        padding: 10px;
        text-align: center;

        ${Logo} {
            width: 350px;
        }

        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.5rem;
        }

        ${ImageBg} {
            min-width: 100%;
            height: auto;
            margin-top: 20px;

            img {
                width: 90%;
            }
        }
    }

    @media (max-width: 1200px) and (max-height: 710px) {
        width: 90%;
        margin: 0 auto;
        padding: 10px 10px 0 10px;
        text-align: center;

        ${Logo} {
            width: 350px;
        }

        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.5rem;
        }

        ${ImageBg} {
            min-width: 100%;
            height: auto;
            margin-top: 20px;

            img {
                width: 90%;
                position: relative;
                left: 0;
                bottom: 0;
            }
        }
    }

    @media (max-width: 1050px) and (min-height: 1000px) {
        width: 90%;
        margin: 0 auto;
        min-height: auto;
        padding: 10px;

        ${ImageBg} {
            img {
                width: 90%;
                position: relative;
                left: 0;
                bottom: 0;
            }
        }
    }

    @media (max-width: 800px) {
        width: 100%;
        min-height: auto;
        padding: 10px;
        text-align: center;

        ${Logo} {
            width: 250px;
        }

        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }

        ${ImageBg} {
            min-width: 100%;
            height: auto;
            margin-top: 20px;

            img {
                width: 90%;
                position: relative;
                left: 10px;
            }
        }
    }
`;
