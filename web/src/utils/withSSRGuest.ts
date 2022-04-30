import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { parseCookies } from "nookies"
import decode from "jwt-decode";

interface ITokenProps {
    is_vip: boolean;
    is_admin: boolean;
}

export function withSSRGuest<P>(fn: GetServerSideProps<P>): GetServerSideProps {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx)
        const token = cookies["qfinance.token"]

        if (token) {
            const decoded = decode(token as string) as ITokenProps;

            if (decoded.is_vip) {
                return {
                    redirect: {
                        destination: "/dashboard",
                        permanent: false,
                    }
                }
            } else {
                return {
                    redirect: {
                        destination: "/new-user",
                        permanent: false,
                    }
                }
            }
        }

        return await fn(ctx)
    }
}