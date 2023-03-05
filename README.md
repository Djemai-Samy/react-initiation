# ReactJS: Introduction

![Image du cours: ReactJSJ: Initiation](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-introduction/react-introduction.png)

Ce cous consiste en une introduction pour découvrir ReactJS, et vous permettra de vous familiariser avec les bases de cette bibliothèque pour construire des applications web plus complexes.

Vous découvrirez également les avantages de ReactJS, et un aperçu de l'architecture de composants.

## Programme

[Vous pouvez suivre la serie complète directement sur le site:](https://djemai-samy.com/posts/0.react-initiation)

1. [ReactJS: Introduction](https://djemai-samy.com/posts/1.react-introduction.article)
2. [ReactJS: Les composants](https://djemai-samy.com/posts/2.react-components.article)
3. [ReactJS: Gestion d'états](https://djemai-samy.com/posts/3.react-states.article)
4. [ReactJS: Les hooks](https://djemai-samy.com/posts/4.react-hooks.article)
5. [ReactJS: La navigation](https://djemai-samy.com/posts/5.react-navigation.article)
6. [Tutoriel: Todo List](https://djemai-samy.com/posts/6.react-todos.article)

---

## Branches

Pour chaque article existe une branche sur le dépot pour pouvoir suivre pas à pas la serie:

- [main](https://github.com/Djemai-Samy/react-initiation)

---

## Objectifs

  1. Comprendre ce qu'est ReactJS et pourquoi il est utilisé.
  2. Avoir une compréhension de base de l'architecture de composants de ReactJS.
  3. Être en mesure de créer un petit projet simple en utilisant ReactJS.

---

## Qu'est-ce que ReactJS

  **ReactJS** est une **bibliothèque open-source** de développement web crée et maintenue par Facebook. Elle a été créée en 2011 pour **faciliter la création d'applications web interactives complexes**.

  ReactJS se concentre sur la **création d'applications à base de composants**, ce qui permet aux développeurs de construire des applications web **en utilisant des éléments réutilisables**.

---

## Pourquoi utiliser ReactJS

  Il y a de nombreuses raisons pour lesquelles les développeurs utilisent ReactJS pour construire des applications web.

  Tout d'abord, **ReactJS est très performant** grâce à son **utilisation de la mémoire partagée** et de la **réconciliation de DOM**.

  Cela signifie que **ReactJS ne met à jour que les composants qui ont réellement changé**, ce qui peut **améliorer les performances de l'application**.

  De plus, **ReactJS est très populaire** et a une **grande communauté active**.

  Les développeurs peuvent **facilement trouver de l'aide et des ressources** en ligne, ainsi que des **bibliothèques et des outils supplémentaires**.

  [***Site officiel de la librairie ReactJS***](https://fr.reactjs.org/)

---

## Mise en place

### Configuration manuel

  La configuration d'un projet ReactJS la plus populaire utilise:

---

### React

  [***react***](https://www.npmjs.com/package/react): la **bibliothèque principale** pour la **création de composants** d'interface utilisateur.

  Elle permet de **construire des applications web complexes** en divisant l'interface utilisateur en **petits composants réutilisables**.
  
  React utilise **un système de mise à jour** de l'interface utilisateur **en temps réel** pour rendre **les interactions avec l'application plus fluides et plus rapides**.

---

### React DOM

  [***react-dom***](https://www.npmjs.com/package/react-dom): la bibliothèque qui **assure la liaison entre React et le DOM** (Document Object Model), c'est-à-dire la structure de l'interface utilisateur d'une page web.
  
  React DOM **gère la mise à jour de l'interface utilisateur** en effectuant les **modifications nécessaires dans le DOM** en réponse aux **mises à jour de l'état de l'application** gérées par React.

---

### Babel

  [***react-dom***](https://www.npmjs.com/package/@babel/core): est un **compilateur JavaScript** qui permet de **convertir du code JavaScript moderne** en code **compatible avec les navigateurs plus anciens**.
  
  Il est souvent utilisé avec React pour **convertir du code JSX en JavaScript** pur.

  JSX est un syntaxe qui permet d'**écrire du code HTML dans du JavaScript**.
  
  Il est utilisé pour **décrire la structure d'une interface utilisateur** dans un composant React.
  
  Au lieu d'utiliser des fonctions de rendu pour décrire l'interface utilisateur, vous pouvez **utiliser du code JSX pour décrire la structure en HTML**.
  
  Le code JSX est ensuite **compilé en JavaScript pur** pour être **exécuté par le navigateur**.

  [***@babel/preset-env***](https://www.npmjs.com/package/react-dom) et [***@babel/preset-react***](https://www.npmjs.com/package/react-dom) sont deux paquets qui **permettent de profiter des dernières fonctionnalités** de JavaScript et de React tout en veillant à ce que **votre code fonctionne correctement sur toutes les plateformes** cibles.

---

### Webpack

  [***webpack***](https://www.npmjs.com/package/webpack): est un module **bundler pour JavaScript et d'autres types de fichiers** (CSS, images, etc.).

  Il permet d'**empaqueter plusieurs fichiers en un seul fichier**, appelé "bundle", qui peut être utilisé dans une application web.

  Cela **simplifie la gestion des dépendances et des ressources** dans une application et aide à **optimiser les performances** en minimisant le nombre de requêtes au serveur et en réduisant la taille totale des fichiers.

  Il permet aussi de **lancer un serveur locale** pour **démarrer une application web en mode développement**, avec un environnement de développement configurable et une **gestion automatisée des rechargements de page en temps réel** lorsque les fichiers sont modifiés.

  Cela **facilite considérablement le processus de développement** et de test d'une application web.

---

## Configuration automatique

### Create React App

  Pour commencer à **apprendre sans se soucier de l'installation** des libraires mentionnées et de leurs configuration, la communauté autour de **React a développer un script pour initialiser un projet** complet et configuré:

- [***Page officiel avec tutoriel de Create React app***](https://create-react-app.dev/docs/getting-started/)
- [***Dépot GitHub de Create React app***](https://github.com/facebook/create-react-app)
- [***Package npm de Create React app***](https://www.npmjs.com/package/create-react-app)

Pour installer les script globalement dans votre machine, vous pour vez utiliser la commande:

  Avec npm:

  ```bash
  npm install --global create-react-app
  ```

  ou avec yarn

  ```bash
  yarn global add create-react-app
  ```

  Pour initialiser un projet ReactJS avec Create React App, vous pouvez lancer la commande:

  ```bash
  create-react-app nom-app
  ```

---

### Smartmake

  Si vous voulez **avoir accées à toutes les configurations de votre projet**, vous pouvez aussi utiliser le script que j'ai développer.
  
  Il permet de **créer un projet ReactJS basique sans introduire d'abstraction**, vous permettant de **reconfigurer les projet** si vous en avez besoin:

- [***Page officiel avec documentation de Smartmake***](https://djemai-samy.com/projects/personal/smartmake)
- [***Dépot GitHub de Smartmake***](https://github.com/Djemai-Samy/smartmake)
- [***Package npm de Smartmake***](https://www.npmjs.com/package/smartmake)

Pour installer les script globalement dans votre machine, vous pour vez utiliser la commande:

```bash
npm install -g smartmake
```

Pour initialiser un projet ReactJS avec Create React App, vous pouvez lancer la commande:

```bash
smartmake create
```

Il ne vous reste plus qu'à répondre aux questions pour configurer votre projet.

---

## Structure du dossier

  Une structure de base d'un projet React peut comprendre les éléments suivants :

  ```bash
  📦nom-app
  ┣ 📂node_modules
  ┣ 📂public
  ┃ ┣ 📜favicon.ico
  ┃ ┗ 📜index.html
  ┣ 📂src
  ┃ ┣ 📜App.jsx
  ┃ ┣ 📜index.jsx
  ┃ ┗ 📜style.css
  ┣ 📜.babelrc
  ┣ 📜package.json
  ┗ 📜webpack.config.js
  ```

---

### package.json

  Un fichier qui **décrit les dépendances de l'application** et **les commandes disponibles** pour lancer et gérer le projet.

```json
{
  "name": "mon-app",
  "version": "1.0.0",
  "description": "React app generated with Smartmaker!",
  "scripts": {
    "dev": "webpack-dev-server --mode=development --open",
    "watch": "webpack --watch --mode=development",
    "build": "webpack --mode=production",
    "ping":"echo Pong"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "*",
    "react-dom": "*"
  },
  "devDependencies": {
    "@babel/core": "*",
    "@babel/preset-env": "*",
    "@babel/preset-react": "*",
    "babel-loader": "*",
    "css-loader": "*",
    "file-loader": "*",
    "html-webpack-plugin": "*",
    "style-loader": "*",
    "webpack": "*",
    "webpack-cli": "*",
    "webpack-dev-server":"*"
  }
}
```

**Lancer le projet en mode dévéloppement** avec `webpack-dev-server`:

  ```bash
  npm run dev
  ```

**Générer le `Bundle`** du projet avec `webpack`:

  ```bash
  npm run build
  ```

---

### node_modules

  Un dossier qui **contient tous les modules npm installés** pour le projet.

  En l'absence de ce dossier (en le récupérant de GitHub par exemple), vous devez installer les dépendances avec npm ou yarn.

  D'abord ouvrez un terminal dans le dossier à l'endroit ou le package.json est situé.

  Puis lancez cette commande dans le terminal:

  ```bash
  npm install
  ```

 OU

  ```bash
  yarn install
  ```

---

### webpack.config.js

  Un fichier de **configuration pour webpack**, qui définit **comment les fichiers sont compilés et bundlés** pour le navigateur.

  ```js
  const path = require("path");
  const HtmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = (env) => {
    const buildFolderName = "build";
    return {
      devtool: "eval-source-map",
      //Définit le point d'entré de l'application
      entry: "./src/index.jsx", 
      resolve: {
        extensions: [".tsx", ".js", ".ts", ".jsx"],
      },
      //Définit l'emplacement du dossier construit
      output: {
        filename: "bundle.[fullhash].js", 
        path: path.resolve(__dirname, buildFolderName),
        publicPath: "/",
      },
      devServer: {
        //Définit le dossier public autant que dossier static
        static: {
          directory: path.join(__dirname, "public"), 
        },
        compress: true,
        //Définit le port utilisé par le serveur de developpement
        port: 3001,
        historyApiFallback: true,
      },
      plugins: [
        //Définit le fichier html dans lequel le bundle sera chargé
        new HtmlWebpackPlugin({
          template: "./public/index.html", 
        }),
      ],
      module: {
        rules: [
          //Définit les loader pour les fichier pouvant contenir du JSX
          {
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"), 
          },
          //Définit le loader pour les fichiers de style
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"], 
          },
          //Définit le loader pour les images
          { 
            test: /\.png|svg|jpg|jpeg|gif|ico$/, 
            use: ["file-loader"],
          },
        ],
      },
    };
  };
  ```

---

### babelrc

  Un fichier de **configuration pour Babel**, qui définit les **règles de conversion pour les fichiers JavaScript et JSX**.

  ```json
  {
    "presets": [
      "@babel/preset-env",
      ["@babel/preset-react", {"runtime":"automatic"}],
    ]
  }
  ```

---

### public

  Un dossier qui peut **contenir des fichiers statiques** tels que des images, des polices, etc.

### index.html

  le **fichier HTML de base** qui **contient le code JavaScript compilé**.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Simple React app</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
  ```

---

### src

  Un dossier qui **contient le code source de l'application React** tels que les fichiers pour les **composants**, les **styles** etc.

### index.js

  Le **point d'entrée principal** de l'application React.

  Il **importe les composants React** nécessaires et les **rend dans le DOM**.

  ```JSX
  import React from "react";
  import { createRoot } from "react-dom/client";

  //Import du composant principal
  import App from "./App";

  //Sélectionne la div principale pour y rendre l'application
  const rootElement = document.getElementById("root");

  if (rootElement) {
    const root = createRoot(rootElement);
    //rend le composant App dans la page
    root.render(<App />);
  }
  ```

### App.js

  Le **composant principal** de l'application, qui peut **inclure d'autres composants enfants**.

  ```JSX
  //Import du style global, accéssible dans toute l'app
  import "./style.css";

  //Composant principal: fonction qui retourne du JSX. 
  const App = () => {
    return (
      <div className='container'>
        <h1>Simple React App made with Smartmake!</h1>
      </div>
    );
  };
  //Export de la fonction pour être utilisée dans index.js
  export default App;
  ```

---

## Conclusion

  Ce chapitre a donné une introduction complète à ReactJS et a montré pourquoi elle est devenu **une bibliothèque populaire pour le développement d'applications web**.

  Nous avons vu les **avantages en termes de performance** et de **facilité d'utilisation**.

  Dans le prochaine article, nous allons **continuer à explorer les fonctionnalités de ReactJS**, en mettant l'accent sur la **construction de composants**, la **gestion de l'état** et la **communication entre composants**.

---

## Aller plus loin

  [ReactJS: Les composants](https://djemai-samy.com/posts/2.react-components.article)
