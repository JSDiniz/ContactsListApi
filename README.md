# Welcome to the Contact List API!   <img align="center" width="3%" alt="Contact List" src="https://cdn.icon-icons.com/icons2/2420/PNG/512/contact_address_book_icon_146880.png" />

Contact List is an API that aims to simulate a list of contacts. Where the logged in user can register his contacts, list them, update them, add more than one phone number or email for the same contact and delete them.

Users, in addition to being able to register their contacts, can add relevant information such as Portfolio, Linkedin and Github, making the application more versatile.

It is also possible to create an administrator account, but it must be activated manually in the bank, by default isAdmin is false.

All added contacts will only be accessible by the user or administrator.

## Diagram <img align="center" width="5%" alt="Diagram" src="https://cdn.icon-icons.com/icons2/3780/PNG/512/workflow_diagram_plan_sitemap_planning_flowchart_hierarchy_management_network_process_icon_231904.png" />

![Library](Contacts List Api-Diagram.png)

## Documentation
* Project was dockerized by Insomnia.
* [Documentation Contact List API](https://contacts-list-api-documentation.vercel.app/)

## Technologies and Libraries:

* Node
* Express
* TypeScript
* TypeORM
* bcryptjs
* dotenv
* cors
* express-async-errors
* jsonwebtoken
* pg / pg-format
* ts-node / ts-node-dev
* yup

## Installation

To clone and run this repository, you will need to have it installed on your computer.

<div>
  <img align="center" width="80px" alt="Git" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/git_original_wordmark_logo_icon_146510.png" />
  <img align="center" width="35px" alt="Node.js" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png" />
  <img align="center" width="200px"  alt="PostgreSQL" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/postgresql_horizontal_logo_icon_169844.png" />
  <img align="center" width="70px" alt="Yarn" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/yarn_original_wordmark_logo_icon_146288.png" />
</div>

* It is necessary to create an .env file with the .env.example settings.
* Check which PORT your Front End and Back End are in because if they are on the same port it may not work.

To launch the application on your machine, follow these steps:

```bash
# Clone this repository
git clone https://github.com/JSDiniz/ContactsListApi
# Enter the repository
cd ContactsListApi
# Install the dependencies
yarn
# Run the migrations
yarn typeorm migration:run -d .\src\data-source.ts
# Run the application
yarn dev
```

## Devs
* [Junielson Diniz](https://www.linkedin.com/in/junielson-diniz/)
