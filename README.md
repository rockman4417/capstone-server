# Tie It All Together

## Steps of the Process to Building & Deploying Your Capstone App

STEP 1. Ideation
a. What problem needs to be solved?
b. What solution can you imagine for it?
STEP 2. MVP/v0.0.1
a. What’s the bare bones version of this solution?
STEP 3. Identify Data Needs
a. Render - What’s the view for the human-user look like?
b. Move - What routes will your server need?
c. Storage - What tables and properties do you need to make it happen?
STEP 4. Design & Plan
a. View Layout and Needs
b. Server Functionality Needs
c. Database entities and relationships
STEP 5. Implement & Schedule the Build of the DB & Server
a. Google Cloud Account, Instance, Database, Connection
b. Connect and build tables with MySQL Workbench
c. Create Repo, Clone, Build Server, Test, Push Code
d. Host CI/CD _(optional step now/required step later)_
STEP 6. Build and Deploy the Front-End
a. Create Repo, Clone, Build Front-End App, Test, Push Code
b. Deploy the app to a GoogleCloud Bucket
c. Add custom Domain (optional)

## STEP 1 & 2: Ideation & MVP

- Student Presentations _(end of 101, beginning of 211, 311, 411)_
- Blogs
- ER Diagrams _(311-11)_
- MVP - Minimum Viable Product

## STEP 3: Identify Data Needs

The Three Jobs of a Software Developer
a. Render - What’s the view of the data look like for the human-user?
b. Move - How does the data get to the view from the database and vice-versa? Server Routes.
c. Store - What tables will you need to organize and store your data? What properties does each entity need?

## STEP 4: Design & Plan

1. View Layout and Needs
   a. What does the User's Journey look like? Create a road map to objectify the task.

   - User-Centered Design
   - Where do they start?
   - What does sign-up vs sign-in look like?
   - What does the next step look like?
   - What can they do in the app?
   - [How to Create a User-Experience Flow Chart](https://www.startuprocket.com/articles/how-to-create-a-user-experience-flow-chart-ux-flow-chart)

b. Draw it out. Visualize!

    * Build a paper prototype and [use software to help](https://medium.theuxblog.com/11-best-prototyping-tools-for-ui-ux-designers-how-to-choose-the-right-one-c5dc69720c47?gi=a052754cdb05)

c. Material-UI

    * What components do you need?
    * List them out.
    * Write them on index cards so you don't get lost.
    * DON'T WORRY ABOUT COLOR!!!!

2.The Database, Entities, Relationships & Properties _(311-11)_

a. What bits of data will you need?

    * What tables do you need to organize your entities?
    * What properties do they have?
    * What relationships do they have?

3.Server Functionality

a. Front-End Needs

    * Look at each component and the data they'll need.
    * Are there any special routes needed outside of the CRUD-L or Authentication routes? *(311-12) & (411-8)*

_SUGGESTION: Use sticky notes and index cards to write and draw all of this out so you can visualize and stay on task._

4.Plan with Trello

a. Build your lanes

    * ToDo
    * Doing
    * Review
    * Merged/Done
    * Icebox

b. Start with just three cards:

    * Build Database to Store Data
    * Build Server to Move & Manipulate Data
    * Build Front-End to Render Data

c. Break those cards into smaller Todo cards

    * Create Google Cloud Account
    * Create Instance(Virtual Computer)
    * Create Database/Schema
    * Save Database connection info
    * Plan tables ...build CREATE Sql statements, connect, build tables, seed with fake data, etc.
    * Move to breakdown Server steps...
    * Move on to breakdown Front-end steps....
    * Take breaks and breathe!!

_SUGGESTION: Use Steps 5 & 6, below, to create the smaller Todo cards on Trello!_

## STEP 5: Create Database, Server on an Instance(Virtual Computer) on GoogleCloud

1.  _(STEP 5.a)_ Create a Database on GoogleCloud _(311-5 Databases)_ - [How to GoogleCloud](https://youtu.be/ypQaSyICc3A)
    a. Copy/paste & store the DB name, password, connection name, and IP somewhere you can find easily
    b. Go to Connections > Add Network > 0.0.0.0/0 > Save
    _NOTE: Make a note/Trello card to change this after you’ve moved from development mode to productions. Security reasons!_
    c. Create a Database Schema \* Databases >> Create Database

2.  _(STEP 5.b)_ Connect & Seed using MySQL Workbench
    a. Create a new connection
    b. Name the connection: “My-CapstoneApp-DB” (or whatever)
    c. Hostname = ip _(see 1a, above)_
    d. Password = Password _(see 1a, above)_
    e. test connection >> Success!
    f. Select Schema

    - Side Bar > Schema > Refresh Button > Select Database/Schema _(see 1c, above)_
      g. Insert data with initialization commands…CREATE TABLE…etc. _(311-11)_
      h. TEST by running SELECT statements to test the database is up and responding from GoogleCloud

3.  _(STEP 5.c)_ Create GitHub Repo for the Source Code of Your Server
    a. Create blank repo(no README), clone it and run `npm init` (101)
    b. Install dependencies you'll need. Run `npm i express body-parser nodemon mysql dotenv cors path` _(311-3)_ [AustinCodingAcademy/311_wk2_day1_express](https://github.com/AustinCodingAcademy/311_wk2_day1_express/blob/master/package.json)
    c. Set `package.json` up with starting scripts:

    - `"scripts": { "start": "nodemon ./index.js" }`
    - use `npm start` to TEST your app.
      d. run `touch index.js` _(311-3)_
    - `import` and `use()` `express()`, `body-parser.json()` & `cors()`
    - `const port = process.env.PORT || 4000`
    - `app.get('/', (req, res) => {res.send("Backend Says Hello!")})`
    - _app.listen(port, () => console.log(`Server is listening on port: ${port}`))_
      f. Run `mkdir server` then `cd server` then build folders:

    1. `mkdir routes` folder _(311-4)_
       _ `/api/users` etc...
       _ build a router file for each table of data you have
       * build a CRUD-L route for each
       *NOTE: CRUD-L = "Create, Read(get), Update, Delete & List"\* \* Import the routes into `index.js` and `use()` them
    2. `mkdir controllers` folder _(311-4)_
       - Build a controller file for each table of data
       - build a CRUD-L controller for each route
       - Test your routes and controllers with dummy responses
    3. Create a `mkdir sql` folder with:
       _ a `connection.js` file that uses mysql _(311-8)\*
       _ an `error.js` file
       _ test by running the server - “npm start”
       f. Import the connection pool into the controller files _(311-8)_
       g. Go to MySQL Workbench and build the queries you need to get the appropriate data. _(311-7)_
       h. Copy/Paste that query into your controller & TEST _(311-8)_
       i. TEST
       j. Create `.env` file _(311-8)_


        * put `require(‘dotenv’).config()` at top of `index.js` & `connection.js` files
        * Move sensitive data to `.env` file
        * Add `.env` to `.gitignore` file
        * TEST

    k. `git status`, `add`, `commit`, `push` your code to the repo

4.  CI/CD with App Engine, CodeShip & GitHub _(311-14)_
    a. Get your app ready for GoogleCloud - [GitHub - AustinCodingAcademy/311_wk7_day1_deployment](https://github.com/AustinCodingAcademy/311_wk7_day1_deployment)

    1. Add:


        * Add the following code to your `connection.js` file below the `config` object

              ```js
                  if (process.env.NODE_ENV === ‘production’ && process.env.CLOUD_INSTANCE) {
                    console.log(`connect socket: ${process.env.CLOUD_INSTANCE}`)
                    config.socketPath = `/cloudsql/${process.env.CLOUD_INSTANCE}`
                  }
              ```
        * TEST

    2.  Change the scripts in `package.json` file. _(See 3c, above)_

            ```json
            "scripts": {
              "dev": "NODE_ENV=development nodemon ./index.js",
              "start": "NODE_ENV=production node index.js",
            }
            ```

    3.  TEST with `npm run dev`
    4.  Create `app.yaml` file with

            ```yaml
              runtime: nodejs10

              env_variables:
                CLOUD_INSTANCE: YOUR-SQL-Database-Connection-Name-Here
            ```

    5.  Add `app.yaml` to your `.gitignore` file
    6.  `git status`, `add`, `commit`, `push` your code to the repo

b. Setting Up App Engine in GoogleCloud 1. In GoogleCloud App Engine instance >> Create Application >> us-central >> Node.js 2. Go to your terminal and run `gcloud init` >> choose account >> sign in >> choose project and configuration.
_(Use the same instance as your your database instance project. See 4b.3, below)_. 3. Make sure you `gcloud init` your app in the same instance as your database so that your connection configurations are smoother. This will allow you to not create a new `.env` file for GoogleCloud App Engine or deal with IAM.
_REMEMBER, an instance is a virtual computer. Therefore you have a database running on a virtual computer and now you want your server to run on the same virtual computer._ 4. Run `gcloud app deploy` in your terminal 5. TEST - copy/paste the URL from the terminal feedback into Postman and run a few GET requests.

      *  *NOTE: For debugging, go to App Engine >> Instances >> Choose Instance >> Dashboard >> see log at bottom-right*

      * *SUGGESTION* [Blog on GCD](https://medium.com/google-cloud/hosting-your-personal-website-on-google-cloud-platform-for-beginners-278543eaaa67)

      * *SUGGESTION* [GCD Tutorial Repo](https://github.com/GoogleCloudPlatform/nodejs-docs-samples)

c. _(STEP 5.d)_ Setup CodeShip for CI/CD or keep running `cloud app deploy` again and again. And again. _(311-15)_

## STEP 6: Build and Host the Front-End/Client!

<!-- ! These steps are for running two separate apps, the front-end in a bucket and the backend on App Engine. For server-side rendering see `index.js` -->

1. Create a new folder and run `npx create-react-app nameOfYourApp`.
2. CD and begin building.
   a. BrowserRouter, Router, Switch, Routes _(411-7)_
   b. Component Pages
   c. Individual/Micro Components
   d. Protected Routes _(411-8)_
   e. Does your api require Authentication? Store cookies when login in. _(311-12)_
   f. If needed, Redux _(411-9)_
   g. Does it need to be a Class-Based Component? `useState()`, `useEffect()` and `useReducer()`
3. Make sure you're using the URL to your hosted server app
4. Host the React App in a Bucket - _(311-14)_
5. Optionally, create a custom domain name for it.

## Bonus

1. Think of your app in parts: Database, Server App, Front-End App
   b. How will they each be deployed/made available to the internet?
2. When adding a new feature to your app first ask:
   a. What's the goal of this feature?
   b. What Visual rendering will need to be built for this new feature?
   c. What type of data will need to be stored for this new feature?
   d. How will I move that data from the database to the user's front-end?
   e. What don't I know that I need to learn to build this new feature?
3. Multiple ways to deploy:
   a. SSR - Server-Side Rendering
   b. CSR - Client-Side Rendering
   - bundled and running `concurrently`/in `parallel` on the same server
   - _Back- and Front- are deployed separately but are talking to one another and passing credentials back and forth._
