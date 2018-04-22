# Ontwerpbiografie

> Een vlotte server die alle log-items in de ontwerpbiografie van mijn afstudeerproject bewaard en rendert.

## UX/UI

![Screenshot](https://imgur.com/99vBmGs.png)

## Highlights

- 📚 Runs on MongoDB
- 🍽 Serves with Express
- 🤖 Responds with HTML in browser and JSON over HTTP
- 📝 Renders pages with [EJS](http://ejs.co/)
- 🕶 Keep sensitive database-information private with dotenv

## Install

First clone the repository from GitHub:
``` git
$ git clone https://github.com/daanrongen/be-assessment-2
```

If you haven't installed brew and MongoDB yet, first install [Homebrew](https://brew.sh/) and install and start MongoDB:

```bash
brew install mongodb
brew services start mongodb
```

Because you're working with a local database, you'll have to make a directory for the data:

```bash
mkdir db
mongod --dbpath db
```
The web-app relies on the data that is stored in a database called `projectlog` in MongoDB. To add this, run:

``` bash
mongo
use projectlog-db
```

The web-app uses two database-collections: `logEntries`. To create these collection in your MongoDB, run:

``` bash
db.runCommand( { create: 'logEntries' } )
```

At last, you might want to create a dotenv-file that stores your private database-information and include this in your .gitignore:

``` bash
touch .env
echo "
DB_HOST=localhost
DB_PORT=27017
DB_NAME=projectlog
" >> .env
```

Change directory and install the modules that I used for this repository
``` bash
$ npm install
```

To start the server run:
``` bash
$ npm server
```
