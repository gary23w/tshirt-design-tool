# Node.js – JWT Authentication for PostgreSQL

## Project setup

```
npm install
```

deploy a postgres database.

```
docker run --name postgres-container -e POSTGRES_PASSWORD=postgres -d postgres
```

check database connection

```
docker exec -it postgres-container psql -U postgres
```

create db.

```
CREATE DATABASE <dbname>;
```

Then, edit `app/config/db.config.js` with correct DB credentials.

### Run

```
node server.js
```
