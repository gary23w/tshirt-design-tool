# Node.js – JWT Authentication for PostgreSQL

## Project setup

```
npm install
```

Second, make sure to have a database deployed. In this case it must be a Postgres database.

```
docker run --name postgres-container -e POSTGRES_PASSWORD=postgres -d postgres
```

Then log into the database and create a working database.

```
docker exec -it postgres-container psql -U postgres
```

Next we must create a working database

```
CREATE DATABASE <dbname>;
```

Then, edit `app/config/db.config.js` with correct DB credentials.

### Run

```
node server.js
```
