# RemiSany_13_25082021

## Projet 13 "Utilisez une API pour un compte utilisateur bancaire avec React."

1. [Phase 1 - Authentification de l'utilisateur](#Phase-1-Authentification-de-l'utilisateur)
2. [Phase 2 - Transactions](#Phase-2-Transactions)
3. [Installation (en)](#Installation)

***

## Phase 1 - Authentification de l'utilisateur

### CONTEXTE

#### Création d’un application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil :

##### Contraintes :
- Création d’une application complète et responsive avec React.
- Utilisation de Redux pour gérer le state global de l’application.
- Interargir avec une API existante (utilisation des tokens JWT).
- Changement de design suite à la connexion ou la déconnexion.

##### Fonctionnalités :
- L’utilisateur peut visiter la page d’accueil.
- L’utilisateur peut se connecter au système.
- L’utilisateur peut se déconnecter du système.
- L’utilisateur ne peut voir les informations le concernant qu’après s’être connecté avec succès.
- L’utilisateur peut modifier le profil et appliquer ces changements dans la base de données.

***

## Phase 2 - Transactions

### CONTEXTE

#### Spécifier les endpoints d’API :

##### Contraintes :
- Fournir un document [swagger.yml](./P13_02_Swagger.yaml) décrivant les API proposées.
- Contraintes liées aux directives de Swagger.

##### Fonctionnalités :
- L’utilisateur peut visualiser toutes ses transactions pour le mois en cours.
- L’utilisateur peut visualiser les détails d’une transaction dans une autre vue.
- L’utilisateur peut ajouter, modifier ou supprimer des informations à propos d’une transaction.

#### TECHNOLOGIES UTILISÉES
- HTML5.
- CSS3.
- Javascript.
- React.
- React Router.
- React-redux.
- Redux.
- Styled Components.
- Axios.
- Swagger.
- Create React App.
- Visual Studio Code.

Projet validé le X septembre 2021.

***

## INSTALLATION

### DEPENDENCIES

- [React](https://reactjs.org/) v17.0.2
- [React-router-dom](https://reactrouter.com/web/guides/quick-start) v17.0.2
- [Redux](https://redux.js.org/) v4.1.1
- [React-Redux](https://react-redux.js.org/) v7.2.4
- [Styled-components](https://styled-components.com/) v5.3.1

#### Installation Dependencies

- You need [Git](https://git-scm.com/) to clone the repository
- You need [Node](https://nodejs.org/en/) (v14.17.5) to run the `npm` commands

### INSTALL AND RUN PROJECT

#### Installation

- Clone the project to your computer:

`git clone https://github.com/remisany/RemiSany_13_25082021.git`

- Open the project folder
- Go to the app:

`cd argent-bank`

- Install the packages:

`npm i`

#### Running

- Run the project (port 3000 by default):

`npm start` or
`yarn start`

### BACKEND
- To get the backend API, fork [this repository](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API) and follow the instructions.

## Further information
- Project build with [Create React App](https://github.com/facebook/create-react-app).
- Is possible to run the project with npm or yarn.