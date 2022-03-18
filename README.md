# Birder Overview:
### Birder is a birdwatching website for birders! A hub. A place to explore new bird species, create sightings of those species, and create and view comments for sightings.

# Launch Instructions:
## Backend
* Start by navigating into the backend folder
* run 'npm install' inside of that directory
* Create a .env file, using the .env.example as a template
* In psql, create a user (with CREATEDB privileges) to match your .env file
* run 'npm run dotenv sequelize db:create'
* run 'npm run dotenv sequelize db:migrate'
* run 'npm run dotenv sequelize db:seed:all'
* run 'npm start'

## Frontend
* Start by navigating into the frontend folder
* run 'npm install' inside of that directory
* run 'npm start'

## Troubleshooting
* Make sure to 'npm start' the backend before the frontend, or you will get an error
* If you get an 'econnrefused' when trying to launch the application, run the command 'sudo service postgresql start' to get psql up and running
