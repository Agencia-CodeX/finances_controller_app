import decode from "jwt-decode"
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { destroyCookie, parseCookies } from "nookies"
import { AuthTokenError } from "../errors/AuthTokenError"

interface ITokenProps {
    is_vip: boolean;
    is_admin: boolean;
}

export function WithSSRAuthNotVip<P>(fn: GetServerSideProps<P>): GetServerSideProps {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx)

        const token = cookies["qfinance.token"]

        if (!token) {
            return {
                redirect: {
                    destination: "/login",
                    permanent: false,
                }
            }
        }

        const decoded = decode(token as string) as ITokenProps;

        if (decoded.is_vip) {
            return {
                redirect: {
                    destination: "/dashboard",
                    permanent: false,
                }
            }
        }

        try {
            return await fn(ctx)
        } catch (err) {
            if (err instanceof AuthTokenError) {
                destroyCookie(ctx, "qfinance.token")
                destroyCookie(ctx, "qfinance.refreshToken")

                return {
                    redirect: {
                        destination: "/login",
                        permanent: false
                    }
                }
            }
        }
    }
}