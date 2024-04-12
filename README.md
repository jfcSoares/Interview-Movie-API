# Description
A simple backend REST API for a job interview, built using NestJS, Prisma, PostgreSQL and Swagger. The API serves the purpose of a movie repository, allowing the user to add movies, delete movies, update movie information, search for any movies, add movie genres, delete and update movie genres, as well as searching for movies of a given genre. As such, there are CRUD endpoints for both Movies and Genres, with the addition of a search query functionality on the movie search endpoint as well.

# Installation

1. Install dependencies: `npm install`
2. Start a PostgreSQL database with docker using: docker-compose up -d. If you have a local instance of PostgreSQL running, you can skip this step. In this case, you will need to change the `DATABASE_URL` inside the `.env` file with a valid PostgreSQL connection string for your database.
3. Apply database migrations: `npx prisma migrate dev`
4. Start the project: `npm run start:dev`
5. Access the project at http://localhost:3000/api


# Notes

The entire application was implemented inside a VM running Ubuntu 22.04.3 LTS, on a Windows 10 host machine. This was the only environment the application was tested in, given that my working laptop was not particularly collaborative in that regard (it is old and it also did not have docker installed).

TODO: Pagination; Update Readme