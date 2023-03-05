# ReactJS: Les composant

![Image du cours: ReactJSJ: Les composants](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-components/react-components.png)

Dans ce chapitre, nous allons explorer les composants ReactJS en détail.

Les composants sont la pierre angulaire de ReactJS et vous permettent de construire des applications modulaires et réutilisables.

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
- [1-introduction](https://github.com/Djemai-Samy/react-initiation/tree/1-introduction)
- [2-components](https://github.com/Djemai-Samy/react-initiation/tree/2-components)
- [3-states](https://github.com/Djemai-Samy/react-initiation/tree/3-states)
- [4-hooks](https://github.com/Djemai-Samy/react-initiation/tree/4-hooks)
- [5-navigation](https://github.com/Djemai-Samy/react-initiation/tree/5-navigation)
- [6-todos](https://github.com/Djemai-Samy/react-initiation/tree/6-todos)

---

## Déscription du chapitre

Dans ce chapitre, nous allons explorer **les composants ReactJS** en détail. 

Les composants permettent de **construire des applications** réactives en **découpant votre application en petits morceaux réutilisables** et **gérables séparément**. 

Vous allez découvrir **comment créer des composants**, les **organiser en structures** plus complexes et les **utiliser pour construire des applications réactives**.

## Objectifs

1. **Comprendre les composants** ReactJS et leur importance pour la construction d'applications réactives.
2. **Comprendre comment gérer les données** à l'intérieur d'un composant en utilisant les props.
3. **Connaître les bonnes pratiques** pour la conception de composants.

---

## Composant principal

Voici la structure de dossier d'un projet React basique:

```
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

## App.jsx

Comme nous l'avons vu dans l'introduction à ReactJS, **toute l'application est encapsulée dans un composant pricipale nommé** `App.jsx`:

```jsx
function App(){
  return(
  <div>
    <header>
      <h1>Bonjour !</h1>
      <p>Je suis un paragraphe.</p>
    </header>
    <p>Je suis un paragraphe.</p>
    <p>Je suis un autre paragraphe.</p>
  </div>
  );
}
```

![Résultat d'affichage sur la page web](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-components/composant-principal.png)

Donc, **un composant ReactJS**, n'est rien d'autre qu'**une fonction Javascript qui retourne des éléments** HTML en utilisant la syntaxe JSX.

---

## Le JSX

**La syntaxe JSX permet** beaucoup de choses, notamment la **réutilisation d'instructions JavaScript** (lire des variables, faire des opérations et des rendus conditionnels...) dans le JSX.

Par exemple, nous pouvons **déclarer une variable locale de la fonction** de type `string`, puis de la **lire dans le JSX pour l'afficher dans la page**:

```jsx
function App(){
  //Déclarer une constante locale
  const texte ="Je suis un paragraphe.";
  return(
    <div>
      <header>
        <h1>Bonjour !</h1>
        {/* Utiliser du javascript dans le JSX*/}
        <p>{texte}</p>
      </header>
      {/* Utiliser du javascript dans le JSX*/}
      <p>{texte}</p>
      <p>Je suis un autre paragraphe.</p>
    </div>
  );
}
```

Ou par exemple, **afficher quelque chose dynamiquement suivant une condition** en utilisant un **opérateur ternaire**:

```jsx
function App(){
const texte ="Je suis un paragraphe.";

//Déclarer une variable locale
let isJour = true;

  return(
    <div>
      <header>
        {/* Utiliser du javascript dans le JSX*/}
        <h1>{isJour ? "Bonjour" : "Bonsoir"} !</h1>
        <p>{texte}</p>
      </header>
      <p>{texte}</p>
      <p>Je suis un autre paragraphe.</p>
    </div>
  );
}
```

---

## Créer un composant

Afin de mieux **organiser les composants**, les développeurs ont tendance à **exporter un seul composant par fichier**, puis à les importer afin de les utiliser dans leur application.

Pour cela, nous classons nos composants par catégorie, dans un dossier souvent nommé `components`. Une structure de dossier basique ressemble à ceci :

```
📦nom-app
┣ 📂node_modules
┣ 📂public
┃ ┣ 📜favicon.ico
┃ ┗ 📜index.html
┣ 📂src
┃ ┣ 📂components
┃ ┃ ┗ 📂containers
┃ ┃ ┃ ┗ 📂Header
┃ ┃ ┃ ┃ ┗ 📜Header.jsx
┃ ┣ 📜App.jsx
┃ ┣ 📜index.jsx
┃ ┗ 📜style.css
┣ 📜.babelrc
┣ 📜package.json
┗ 📜webpack.config.js
```

---

### Déclarer un composant

**Un composant n'est rien d'autre qu'une fonction qui retourne des éléments** JSX.

Avant de pouvoir **afficher un composant React** dans votre application, il faut d'abord **le créer en déclarant une fonction qui retourne un ou plusieurs éléments** en utilisant le JSX.

```jsx
// Composant ReactJS: Une fonction qui retourne des éléments JSX
export default function Header(){
  let texte = "Je suis un paragraphe.";
  let isJour = true;
  return(
    <header>
      <h1>{isJour ? "Bonjour" : "Bonsoir"} !</h1>
      <p>{texte}</p>
    </header>
  );
}
```

---

### Utiliser un composant

Ensuite, vous pouvez **utiliser le composant** en l'**important quelque part dans votre application**, par exemple dans le composant principal `App.jsx` :

```jsx
//Import des composants
import Header from "./components/containers/Header/Header";

function App(){
  let texte = "Je suis un paragraphe.";
  return(
    <div>
      {/* Afficher un composant*/}
      <Header />
      <p>{texte}</p>
      <p>Je suis un autre paragraphe.</p>
    </div>
  );
}
```

---

### Imbriquer les composants

Pour **construire des interfaces utilisateur complexes**, nous pouvons **imbriquer des composants dans d'autres composants** pour créer la structure désirée.

Par exemple, nous pouvons **créer un composant** nommé `Texte` situé dans le chemin `src/components/ui/Texte/Texte.jsx` pour **remplacer les deux paragraphes** de notre application :

```jsx
export default function Texte(){
  let texte = "Je suis un paragraphe.";
  return(
    <p>{texte}</p>
  );
}
```

Puis **l'importer et l'utiliser** dans le composant `Header`:

```jsx
import Texte from "../../ui/Texte/Texte";

export default function Header(){
  let isJour = true;
  return(
    <header>
      <h1>{isJour ? "Bonjour" : "Bonsoir"} !</h1>
      <Texte />
    </header>
  );
}
```

Et le **ré-utiliser** dans le composant `App`:

```jsx
import Header from "./components/containers/Header/Header";
import Texte from "./components/ui/Texte/Texte";

function App(){
  return(
    <div>
      <Header />
      <Texte />
      <p>Je suis un autre paragraphe.</p>
    </div>
  );
}
```

Pour vous aider à **vous retrouver dans le code d'une application complexe**, il est intéressant de **visualiser la structure de votre application sous forme d'arbres ou de boîtes** :

![Representation graphique du DOM virtuel de ReactJS sous forme d'arbres](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-components/react-components-tree.svg)

![Representation graphique du DOM virtuel de ReactJS sous forme de boites](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-components/react-components-box-alt.svg)

---

## Styliser un composant

Pour **ajouter du styles aux composants** ReactJS, il existe 3 manières:

---

### 1. Fichier css

**Ajouter un style global** à toute votre application.

Pour cela, vous pouvez **créer un fichier CSS** et **l'importer dans le composant principal** de votre application :

Dans le fichier `src/style.css`:

```css
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(38, 38, 38);
  padding: 1em;
}

h1 {
  color: white; 
}

.texte {
  color: white;
}
```

Dans le fichier `src/App.jsx`:

```jsx
import Header from "./components/containers/Header/Header";
import Texte from "./components/ui/Texte/Texte";

// Importer le style
import './style.css'; 

function App(){
  return(
    <div>
      <Header />
      <Texte />
      <p className="texte">Je suis un autre paragraphe.</p>
    </div>
  );
}

```

Dans le fichier `src/components/ui/Texte/Texte.jsx`:

```jsx
export default function Texte(){
  let texte = "Je suis un paragraphe.";
  return(
    <p className='texte'>{texte}</p>
  );
}
```

![Resultat afichage sur la page web apres avoir modifié le style du composant ReactJS](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-components/react-components-css-style.png)

---

### 2. Module css

Il est aussi possible d'**ajouter du style à un composant de manière isolée**.

Cela signifie que **les styles définis dans un module CSS ne s'appliqueront qu'au composant** pour lequel ils ont été définis et **ne seront pas transmis à d'autres composants**.

Cela permet de **rendre votre code encore plus modulaire**.

Pour créer un module CSS, il suffit de **nommer le fichier CSS** en suivant ce pattern : `NomDuFichier.module.css`.

Dans le fichier `src/components/containers/Header/Header.module.css`:

```css
.container{
  border: 1px solid gray;
  border-radius: 5px;
  }

.texte{
  font-size: 1.2em;
}
```

Puis d'importer les classes créées dans le composant `src/components/containers/Header/Header.module.jsx`:

```jsx
import Texte from "../../ui/Texte/Texte";

//Import des classes dans un objet
import classes from "./Header.module.css";

export default function Header() {
  let isJour = true;
  return (
    <header className={classes.container}>
      <h1 className={classes.texte}>
        {isJour ? "Bonjour" : "Bonsoir"} !
      </h1>
      <Texte />
    </header>
  );
}
```

![Resultat affichage apres avoir changé le style du composant ReactJS en utilisant les modules css](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-components/react-components-css-module.png)

Lors de la **compilation du code par Babel**, les fichiers de **module CSS seront compilés en un seul fichier CSS**.

**Chaque classe** d'un module CSS **aura un identifiant unique** afin de ne pas affecter les autres composants de l'application.

`classes` est donc **un objet JavaScript** dont **les clés sont les classes** que nous avons créées, et leurs **valeurs sont les identifiants uniques**.

---

### 3. En ligne

**Le style en ligne ou le inline style** est un moyen de **définir des styles directement sur un élément** HTML dans un composant React, sans utiliser de fichier CSS externe. 

Les **styles en ligne** peuvent être **définis** en utilisant **la propriété `style`** sur un élément HTML.

**La propriété style prend un objet JavaScript** qui **contient les styles définis** sous forme de **clés et de valeurs**.

```jsx
import Texte from "../../ui/Texte/Texte";

//Import des classes dans un objet
import classes from "./Header.module.css";

export default function Header() {
  let isJour = true;
  return (
    <header className={classes.container}>
      <h1 
        className={classes.texte}
        style={{padding: "1em", fontWeight: "bold"}}
      >
        {isJour ? "Bonjour" : "Bonsoir"} !
      </h1>
      <Texte />
    </header>
  );
}
```

Ici, nous définissons les styles en ligne sur notre élément `h1`. 

**Les styles en ligne** peuvent être très utiles pour **des styles rapides et occasionnels**, mais pour des styles plus complexes et réutilisables, il est généralement préférable d'utiliser des fichiers CSS séparés avec des modules CSS. 

Cependant, **les styles en ligne** peuvent être très pratiques lorsque vous souhaitez **dynamiquement modifier des styles en fonction des données** ou des états dans votre application.

Par exemple, modifier dynamiquement la couleur du `h1` suivant la valeur de la variable `isJour`:

```jsx
import Texte from "../../ui/Texte/Texte";

//Import des classes dans un objet
import classes from "./Header.module.css";

export default function Header() {
  let isJour = true;
  return (
    <header className={classes.container}>
      <h1 
        className={classes.texte}
        style={{
        padding: "1em", 
        fontWeight: "bold",
        color: isJour ? "royalblue" : "orange"
        }}
      >
        {isJour ? "Bonjour" : "Bonsoir"} !
      </h1>
      <Texte />
    </header>
  );
}
```

---

## Paramètrer un composant

Pour l'instant, notre **composant Texte n'est pas très réutilisable** car il affiche toujours la même chose.

Étant donné que **les composants React ne sont que des fonctions**, nous pouvons **envoyer des paramètres à cette fonction** pour rendre notre composant plus dynamique.

Avec JSX, nous pouvons **envoyer un objet en paramètre à la fonction** en utilisant une syntaxe semblable à celle qui permet d'**ajouter des attributs à un élément HTML**.

Dans le composant `App.js`, nous allons envoyer les propriétés de cette manière:

```JavaScript
import Header from "./components/containers/Header/Header";
import Texte from "./components/ui/Texte/Texte";
import './style.css'; //Import du style globale

function App(){
  return(
    <div>
      <Header />
      <Texte color="green" bold={true}>Je suis un paragraphe.</Texte>
      <Texte color="red" bold={false}>Je suis un autre paragraphe.</Texte>
    </div>
  );
}
```

Puis, dans le composant `Texte`, **la fonction reçoit maintenant un objet** contenant les données sous forme de clés et de valeurs.

```JavaScript
// Composant paramétré recevant un objet
export default function Texte(props) {
  return (
    <p
      className="texte"
      style={{
      //Utilisation des props pour définir le style
      color: props.color,
      fontWeight: props.bold ? "bold" : "default",
      }}
    >
      {/* Utiliser children pour afficher le texte*/}
      {props.children}
    </p>
  );
}
```
![Résultat affichage apres avoir envoyé des paramètre a un composant ReactJS.](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-components/react-components-props-code.png)

![Representation graphique des props: propriétés envoyer dnas les composant ReactJS](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-components/react-components-props.svg)

---

## Les événements

Lors de la création d'une application ReactJS, il est souvent nécessaire d'**ajouter des événements à des éléments JSX**, comme des boutons, des formulaires, ou d'autres éléments interactifs. 

En ReactJS, cela se fait en utilisant la syntaxe JSX pour **ajouter des attributs d'événement à des éléments**.

### Ajouter un événement avec JSX

On peut **ajouter un attribut d'événement à un élément** en utilisant la syntaxe suivante :

```js
<element event={fonction} />
```

- `element` est l'**élément JSX auquel on veut ajouter un événement**.
- `event` est **le nom de l'événement** (comme `onClick` ou `onChange`).
- `function` est la **fonction de gestion de l'événement** que l'on veut **appeler lorsque l'événement est déclenché**.

### Exemple: Clique

Voyons maintenant comment cela fonctionne dans la pratique. 

Imaginons que nous ayons **un bouton auquel nous voulons ajouter un événement qui executera une fonction** lors d'un clique :

```JavaScript
function App(){

  // 1. Fonction à executer lors du clique
  function handleClick(){
  alert('Evnement clique déclanché!')
  }

  return(
    <div>
      <Header />
      <Texte color="green" bold={true}>Je suis un paragraphe.</Texte>
      <Texte color="gray" bold={false}>Je suis un autre paragraphe.</Texte>

      {/* 2. Lier la fonction avec le gestionnaire d'événement*/}
      <button onClick={handleClick}>Cliquez ici</button>
    </div>
  );
}
```

Ici, nous avons **utilisé l'attribut** `onClick` pour **ajouter un événement de clic au bouton**, et nous avons **défini la fonction de gestion d'événement** `handleClick` qui sera **appelée lorsque le bouton est cliqué**.

Voici une liste des événements les plus couramment utilisés en ReactJS:

- `onChange` : Cet événement est **déclenché lorsqu'une valeur est modifiée dans un champ de formulaire**. Il est souvent **utilisé pour les champs de texte, les cases à cocher et les boutons radio**.

- `onSubmit` : Cet événement est **déclenché lorsqu'un formulaire est soumis**. Il est souvent **utilisé pour valider les données de formulaire** et **envoyer des requêtes à un serveur**.

- `onMouseOver` : Cet événement est **déclenché lorsqu'un élément est survolé avec la souri**s. Il est souvent **utilisé pour afficher des informations supplémentaires** ou des aperçus de contenu.

- `onFocus` : Cet événement est **déclenché lorsqu'un élément reçoit le focus**. Il est souvent **utilisé pour gérer le comportement de navigation** et **d'accessibilité**.

- `onBlur` : Cet événement est **déclenché lorsqu'un élément perd le focus**. Il est souvent **utilisé pour valider les données de formulaire** et **pour masquer les éléments de contrôle** lorsqu'ils ne sont plus nécessaires.

- `onKeyDown` et `onKeyUp` : Ces événements sont **déclenchés lorsqu'une touche du clavier est enfoncée ou relâchée**. Ils sont souvent **utilisés pour contrôler le comportement de la saisie de texte** et **des interactions utilisateur**.

- `onScroll` : Cet événement est **déclenché lorsqu'un élément défile**. Il est souvent **utilisé pour les éléments de navigation**, **les barres de défilement** et **les listes de contenu**.

---

## Conclusion

Ce chapitre nous a permis d'**explorer les composants ReactJ**S que nous pouvons **utiliser pour créer notre application**. 

Nous avons vu que **les composants ne sont que des fonctions** simples et les rapides à créer.

Et que gràce à la syntaxe JSX, il est facile d'**effectuer des opérations en Javascript** pour afficher des variables, faire des rendus conditionnels...

La syntaxe JSX nous permet aussi de facilement **envoyer des données aux composants** pour les paramétrer et **d'ajouter des événements et des attributs**.

Dans le prochain chapitre, nous allons voire comment **gérer et manipuler le ou les états de notre application**.

---

## Aller plus loin

  [ReactJS: La gestion d'états](https://djemai-samy.com/posts/3.react-states.article)
