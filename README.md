# ReactJS La navigation

![Image du cours: ReactJS: La navigation](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-navigation/react-navigation.png)

Dans ce cours, vous apprendrez à utiliser React-router-dom, une librairie ReactJS très populaire pour ajouter de la navigation à votre application web.

Vous découvrirez comment créer des liens de navigation, afficher des pages en fonction des URL...

## Programme

[Vous pouvez suivre la serie complète directement sur le site:](https://djemai-samy.com/posts/0.react-initiation)

1. [ReactJS: Introduction](https://djemai-samy.com/posts/1.react-introduction.article)
2. [ReactJS: Les composants](https://djemai-samy.com/posts/2.react-components.article)
3. [ReactJS: Gestion d'états](https://djemai-samy.com/posts/3.react-states.article)
4. [ReactJS: Les hooks](https://djemai-samy.com/posts/4.react-hooks.article)
5. [ReactJS: La navigation](https://djemai-samy.com/posts/5.react-navigation.article)
6. [Tutoriel: Todo List](https://djemai-samy.com/posts/6.react-todos.article)

## Branches

Pour chaque article existe une branche sur le dépot pour pouvoir suivre pas à pas la serie:

- [main](https://github.com/Djemai-Samy/react-initiation)
- [1-introduction](https://github.com/Djemai-Samy/react-initiation/tree/1-introduction)
- [2-components](https://github.com/Djemai-Samy/react-initiation/tree/2-components)
- [3-states](https://github.com/Djemai-Samy/react-initiation/tree/3-states)
- [4-hooks](https://github.com/Djemai-Samy/react-initiation/tree/4-hooks)
- [5-navigation](https://github.com/Djemai-Samy/react-initiation/tree/5-navigation)
- [6-todos](https://github.com/Djemai-Samy/react-initiation/tree/6-todos)

---

## Qu'est-ce que React-router-dom ?

**React-router-dom** est une **bibliothèque JavaScript** qui permet de **gérer la navigation dans une application web ReactJS**.

Elle **fournit des composants React** qui permettent de **créer des liens de navigation**, de **définir des routes** pour **afficher des pages en fonction des URL**, de **gérer les paramètres d'URL** et de **rediriger les utilisateurs** vers une page spécifique.

**React-router-dom** est basé sur **React-router**, une autre bibliothèque populaire pour la gestion de la navigation dans ReactJS.

## Installation

Pour utiliser `React-router-dom` dans votre projet ReactJS, vous devez **l'installer et le configurer**. Voici les étapes à suivre :

```Bash
npm install react-router-dom
```

## Structure du projet

Prenons pour exemple une application simple avec deux composants pour simuler deux pages.

Le dossier src resemblerai ceci:

```bash
📂src
┣ 📂components
┃  ┗ 📂pages
┃     ┣ 📜Home.jsx
┃     ┗ 📜About.jsx
┣ 📜App.jsx
┣ 📜index.jsx
┗ 📜style.css
```

## Utilisation

Après avoir **créé les deux composants** représentant les **deux pages de l'application**, nous pouvons **mettre en place le système de navigation** dans le fichier App.jsx :

```JavaScript
import "./style.css"; //Import du style globale

//Import des composants basiques de navigation
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

//Import des composants pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";

export default function App() {
  return (
  <BrowserRouter>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}
```

**`react-router-dom`** fournit plusieurs **composants React** pour **gérer la navigation** dans votre application web :

- `BrowserRouter` : Le composant qui **encapsule toute votre application** et **gère l'historique de navigation** du navigateur.
- `Routes` : Le composant qui **décide quel composant rendre/afficher** sur la page.
- `Route` : Le composant qui **définit une correspondance entre une URL** et un **composant React à afficher**.
- `Link` : Le composant qui **crée un lien de navigation** qui, lorsqu'il est cliqué, **modifie l'URL dans la barre d'adresse** du navigateur.

## Paramètres dynamiques

Nous allons montrer comment utiliser `react-router-dom` pour **créer des routes avec des paramètres dynamiques**.

Nous allons également montrer comment **récupérer ces paramètres dans des composants React**.

## Route avec paramètres dynamiques

Pour **créer des routes avec des paramètres dynamiques**, vous pouvez **utiliser des paramètres de chemin** dans vos routes.

Voici un exemple simple de **définition de routes avec des paramètres dynamiques** :

```JavaScript
<BrowserRouter>
  <nav>
    <Link to="/">Accueil</Link>
    <Link to="/about">A propos</Link>
    <Link to="/user/1">User 1</Link>
    <Link to="/user/2">User 2</Link>
  </nav>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/user/:id" element={<User />} />
  </Routes>
</BrowserRouter>
```

Dans cet exemple, nous avons **défini une route avec un paramètre dynamique** appelé `id`.

## Récupération des paramètres dans le composant

Pour **récupérer les paramètres de chemin dans vos composants** React, vous pouvez **utiliser le hook de `react-router-dom`: `useParams`**.

`useParams` est **une fonction qui retourne un objet** contenant les paramètre d'url.

Dans le composant `User`, nous allons **récuperer l'`id` dans les paramètre d'url**:

```JavaScript
import React from 'react';
import {useParams} from 'react-router-dom';
export default function User() {
  const parametres = useParams();

  return (
    <div>
      <h1>User {parametres.id}</h1>
    </div>
  );
}

```

## Conclusion

Dans ce cours, nous avons appris à **utiliser `react-router-dom` pour gérer la navigation** dans une application React.

Nous avons commencé par une **introduction à `react-router-dom`** et avons appris à **installer et configurer la bibliothèque** dans notre projet.

Ensuite, nous avons appris à **créer des routes de base** et à **utiliser les composants `Switch` et `Route` pour gérer la navigation**.

Nous avons également appris à **utiliser des paramètres dynamiques** pour **rendre notre application plus flexible**.

Il est important de **noter que ce cours n'a été qu'une introduction à `react-router-dom`** et qu'il y a encore **beaucoup de concepts à explorer**.

Si vous souhaitez **approfondir vos connaissances**, nous vous **recommandons les ressources suivantes** :

- [***La documentation officielle de React-router-dom.***](https://reactrouter.com/web/guides/quick-start)
- [***Les tutoriels de React-router-dom sur le site officiel de React.***](https://fr.reactjs.org/docs/code-splitting.html)

## Aller plus loin

[Tutoriel ReactJS: TodoList](https://djemai-samy.com/posts/6.react-todos.article)
