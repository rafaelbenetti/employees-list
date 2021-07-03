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