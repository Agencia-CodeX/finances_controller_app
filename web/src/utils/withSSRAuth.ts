import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { parseCookies } from "nookies"

export function withSSRAuth<P>(fn: GetServerSideProps<P>): GetServerSideProps {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx)

        if (!cookies["qfinance.token"]) {
            return {
                redirect: {
                    destination: "/login",
                    permanent: false,
                }
            }
        }

        return await fn(ctx)
    }
}