import { createConnection, getConnectionOptions, Connection } from "typeorm";

export default async (
    host = "database_QFinance_Service"
): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions, {
            host: process.env.NODE_ENV === "test" ? "localhost" : host,
            database:
                process.env.NODE_ENV === "test"
                    ? "rentx_test"
                    : defaultOptions.database,
        })
    );
};

// export default async (
//     host: "database_QFinance_Service"
// ): Promise<Connection> => {
//     const defaultOptions = await getConnectionOptions();
//     return createConnection(
//         Object.assign(defaultOptions, {
//             host,
//         })
//     );
// };
