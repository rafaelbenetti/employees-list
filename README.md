# Employees List
Mean stack application to manage employees with docker containers..

### Clone the repo
```bash
$ git clone https://github.com/rafaelbenetti/employees-list
```

## Set up

Make sure you have `docker` and `docker-compose` installed.

`docker` should be version 19 or higher.

### Run docker
```bash
$ docker-compose up
```

 App should be running in `localhost:4200`

### Run API tests
```bash
$ docker exec -it employees-list_express_1 bash
$ npm test
```

### Run Angular tests
```bash
$ docker exec -it employees-list_angular_1 bash
$ npm test
```

## App Main Stack
- Environment
  - Docker
  - Docker Compose
- Client
  - Angular 2+
  - Angular Material (used only for input, select and datepicker).
  - `sweetalert2` used to confirm end of contract.
- Server
  - Node
  - Express
  - Mongoose
  - Mongodb

## Next steps
- Add `ngxs` store management on UI.
- Add services workers for caching static data (icons, fonts, etc).
- Create roles management (ADMIN, EMPLOYEE).
- Create history for the employees list.