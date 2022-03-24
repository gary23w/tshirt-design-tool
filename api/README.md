# Node.js – JWT Authentication for MariaDB

## Project setup

```
npm install
```

deploy a mariadb database.

```
docker run -e MYSQL_ROOT_PASSWORD=database123456 -e MYSQL_DATABASE=testdb --name tshirt_store -v "$PWD/database":/var/lib/mysql -d mariadb:latest
```

check database connection

```
docker exec -it tshirt_store /bin/mysql -h localhost -p

show databases;

*make sure your database is initialized
```

Then, edit `app/config/db.config.js` with correct DB credentials.

### Run

```
node server.js
```
