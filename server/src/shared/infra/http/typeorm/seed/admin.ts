import { hash } from "bcryptjs";
import { getConnection } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

async function create() {
    const connection = await createConnection("localhost");

    const id = uuidv4();
    const password = await hash("admin", 8);

    await connection.query(
        `INSERT INTO USERS(IdUsers, Name, Email, Password, "isAdmin", Created_at)
            values ('${id}', 'admin', 'admin@qfinances.com.br', '${password}', 'true', 'now()')
        `
    );

    await connection.close();
}

create().then(() => console.log("User admin created!"));
