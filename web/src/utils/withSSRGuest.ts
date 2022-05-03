import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { destroyCookie, parseCookies } from "nookies"
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
            try {
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
                            destination: "/signature",
                            permanent: false,
                        }
                    }
                }
            } catch {
                destroyCookie(ctx, "qfinance.token")
                destroyCookie(ctx, "qfinance.refreshToken")

                return {
                    redirect: {
                        destination: "/login",
                        permanent: false,
                    }
                }
            }
        }

        return await fn(ctx)
    }
}