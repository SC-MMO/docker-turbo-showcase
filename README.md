# docker-turbo-showcase

A simple application used to demonstrate the development capabilities of Docker.

## Prerequisites

- **Docker**
- **Docker Compose**

## Trivia

The application has two modes:

- **Dev**: The code in the repository is synchronized with its corresponding code in the Docker container.
- **Prod**: The code of the repository gets copied during compose.

How is this done? **Volumes**.

The default mode of the Dockerfiles represents the prod mode. The dev compose files overwrite the `CMD` of the Dockerfiles. Using this logic, you can have different serving logic for prod and dev.

## Usage


### Dev
~~~bash
docker compose -f docker-compose.dev.yml up --build # -d
~~~
### Prod
~~~bash
docker compose -f docker-compose.prod.yml up --build # -d
~~~

## Content

### Apps
- Frontend: A minimal React frontend
- Backend: A minimal Express backend (imports db package)

### Packages
- db: A Prisma ORM package

### Database
- A PostgreSQL database
- Delete using:
~~~bash
# dev
docker compose -f docker-compose.dev.yml down -v
docker volume rm docker-turbo-showcase_postgres_data
docker compose -f docker-compose.dev.yml up # -d

# prod
docker compose -f docker-compose.prod.yml down -v
docker volume rm docker-turbo-showcase_postgres_data
docker compose -f docker-compose.prod.yml up # -d
~~~
