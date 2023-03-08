# ReactJS: Tutoriel: Todo List

![Image du cours: ReactJS: Tutoriel: Todo Listn](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-todos.png)

Dans ce tutoriel, vous apprendrez à créer une Todo liste fonctionnelle, qui vous permettra d'ajouter, supprimer et valider des tâches.

De plus, vous verrez comment stocker cette liste dans le stockage local de votre navigateur afin que vous puissiez la conserver même après avoir quitté la page.

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

## Objectifs

L'**objectif de ce tutoriel** est de vous **apprendre à créer une application ReactJS fonctionnelle**.

Vous allez **apprendre à utiliser les principes fondamentaux de ReactJS**, notamment la **gestion des états**, la **manipulation des événements** et le **rendu conditionnel**.

À la fin de ce tutoriel, vous serez en mesure de :

- **Créer des composants React** et les **rendre dans votre application**.
- **Gérer les états des composants** avec le hook `useState`.
- **Manipuler les événements** et les **méthodes de mise à jour des états**.
- **Stocker des données dans le stockage local** du navigateur.

---

## Présentation du projet

Le projet consiste à **créer une liste de tâches (une Todo liste) dynamique** avec ReactJS.

Cette liste permettra à l'utilisateur d'**ajouter, de supprimer et de valider des tâches**.

La liste de tâches sera aussi **stockée dans le stockage local du navigateur** de l'utilisateur, afin de pouvoir y **accéder et l'afficher même après avoir quitté la page**.

---

## Mise en place de l'environnement

[***Pour créer une application ReactJS, vous devez tout d'abord installer Node.js sur votre ordinateur.***](https://djemai-samy.com/posts/1.nodejs-introduction.article)

Une fois Node.js installé, vous pouvez **installer ReactJS en utilisant la commande** suivante dans votre terminal :

```js
npx create-react-app nom-de-app
```

OU:

```js
npx smartmake create react
```

[***Vous pouvez retrouver ici un tutoriel complet pour mettre en place un projet ReactJS***](https://djemai-samy.com/posts/1.react-introduction.article)

---

## Mise en place des composants

Nous allons **créer un composant principal** `TodoList` qui va **contenir tous les autres composants**:

- Le composant `TodoItem` pour chaque tâche de la liste, qui **affiche l'intitulé de la tâche, la date de création**, et **des boutons pour modifier l'état de la tâche**.
- Le composant `TodoForm`: Pour **ajouter des tache la liste**.
</Block>

---

### Composant TodoItem

Nous allons commencer par **créer un composant pour afficher les tâches dans notre liste**. Nous allons l'appeler `TodoItem`.

Voici le code :

```js
export default function TodoItem({ task }) {

  //Formatter la date pour afficher: HH:MM - JJ/MM/AA
  const dateObj = new Date(task.date);
  const heure = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const dateFormatted = dateObj.toLocaleDateString("fr-FR");
  const heureFormatted = `${heure.toString()}:${minutes.toString()}`;

  return (
    <div style={{
      backgroundColor: task.completed
      ? "hsla(150, 90%, 70%, 0.4)"
      : "hsla(37, 100%, 80%, 0.6)",
      }}
    >
      <h3>{task.title}</h3>
      <p>{`${heureFormatted} - ${dateFormatted}`}</p>
      <button>Complete</button>
      <button>Delete</button>
    </div>
  );
}
```

Nous avons **utilisé la fonction** `TodoItem` pour **créer notre composant**.

Dans la fonction, nous avons **utilisé** les `props` pour **afficher les informations de chaque tâche**.

Nous avons également **ajouté deux boutons pour marquer la tâche comme terminée** ou **la supprimer de la liste**.

### Composant TodoForm

Maintenant, nous allons **créer un composant pour ajouter une nouvelle tâche** à la liste. Nous allons l'appeler `TodoForm`. Voici le code :

```js
export default function TodoForm() {
  return (
    <div>
      <input type="text" placeholder="Entez une tache" />
      <button>Ajouter la tache</button>
    </div>
  );
}
```

---

### Composant TodoList

Maintenant que nous avons **créé nos composants**, nous allons **les intégrer dans notre composant principal** `TodoList`. Voici le code complet :

```js
// Import des composants nécessaires
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export default function TodoList() {
  return (
  <div>
    <h1>Todo List</h1>
    {/*Afficher le composant permattant d'ajouter une tâche*/}
    <TodoForm />
    <div>
      {/*Afficher une liste de tâches en envoyant les propiétées de chaque tache au composant*/}
      <TodoItem task={{title:"Task 1", date:"01/01/2020", completed:false}} />
      <TodoItem task={{title:"Task 2", date:"02/01/2020", completed:true}} />
      <TodoItem task={{title:"Task 3", date:"03/01/2020", completed:false}} />
    </div>
  </div>
  );
}
```

Nous avons **importé les composants** `TodoItem`, `TodoForm`.

Nous avons ensuite **intégré `TodoForm` directement dans `TodoList`**.

Pour `TodoItem`, nous avons **créé une `div` pour contenir toutes les tâches de la liste**.

Nous avons également **utilisé** les `props` pour **envoyer au composant** `TodoItem` les **informations à afficher** de chaque tâche.
![Resultat d'affichage sur la page web de la structure basique des composant ReactJS TodoList](https://www.djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-todos/react-todos-TodoList.png)

---

## Gestion des états

La **gestion des états** est un aspect important de toute application React.

**Les états sont des variables** qui **contiennent les données de l'application** et qui **peuvent être modifiées au fil du temps**.

En **gérant les états**, nous pouvons **créer des applications dynamiques et interactives**.

Dans notre application Todo, nous allons **stocker la liste de tâches dans l'état de notre composant principal** `TodoList`.

Nous allons également **utiliser l'état pour ajouter** et **supprimer des tâches de la liste**.

**L'état et les fonctions** pour le modifier seront **envoyées en props aux composants enfants** de la `TodoList`.

### Création de l'état dans TodoList

Pour **gérer l'état de notre liste de tâches**, nous allons **utiliser le hook** `useState` de React.

Nous allons commencer par **créer l'état en utilisant la fonction** `useState`. La **valeur initiale** de notre variable d'état est un **tableau vide**. Voici le code :

```js
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

// Import du hook useState
import { useState } from 'react';

export default function TodoList() {
  //Déclaration de la variable d'état et de son setteur
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <div>
        {/*transformer la liste de tâches en liste d'éléments JSX*/}
        {tasks.map(task => (
          <TodoItem key={task.date}  task={task} />
        ))}
    </div>
    </div>
  );
}
```

Nous avons **importé** `useState` de React et **créé une variable d'état** `tasks` en **utilisant** useState.

Nous avons **initialisé** `tasks` avec une **liste vide**.

Puis nous avons **utilisé la méthode** `map` des tableaux pour **afficher toutes les taches du tableau dynamiquement**.

### Ajout de tâches à la liste

Pour **ajouter une tâche**, nous allons **créer une fonction nommée** `addTask` qui **reçoit un chaine de caractères** et **utilise la fonction** `setTask` pour **mettre à jour la liste de taches**.

Nous allons ensuite **envoyer cette fonction en paramètre au composant** `TodoForm`.

Voici le code :

```js
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import{ useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  // Déclaration de la fonction pour ajouter une tache à la iste
  const addTask = task => {
    // Déclarer une variable contenant la nouvelle tâche
    const newTask = { title: task, date: Date.now(), completed: false }

    // Créer un nouveau tableau contenant toutes les tache ainsi que la nouvelle
    const newTasks = [...tasks, newTask];

    // Mettre à jour la variable d'état avec la nouvelle liste
    setTasks(newTasks)
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/*Envoyer la fonction qui permet d'ajouter une tache au composant*/}
      <TodoForm addTask={addTask} />

      <div>
        {tasks.map(task => (
          <TodoItem key={task.date} task={task}/>
          ))}
        </div>
    </div>
  );
}
```

Maintenant que le composant `TodoForm` **reçoit la fonction pour ajouter une tache la liste**, nous pouvons **aller l'utiliser**.

Dans le composant `TodoForm` nous allons:

1. **Déclarer que le composant fonctionnel reçoit un objet** nommée `props`.

2. **Créer une variables d'état** pour **stocker les entrées de l'utilisateur**.

3. **Lier la fonction reçue en props avec le clique de bouton**.

Voici le code complet:

```js
import { useState } from 'react';

// 1. Déclarer les props dans les paramètres de la fonction 
export default function TodoForm(props) {
// 2. Déclarer un variables d'état pour stocker les entrées de l'utilisateur
  const [task, setTask] = useState('');

  //2. Fonction pour mettre à jour la variable contenant les entrées de l'utilisateur
  function handleTask(event){
    setTask(event.target.value);
  }

  // 3. Fonction executée quand l'utilisateur clique sur le bouton
  function validate(){
    // 3. Utiliser la fonction reçue dans les props pour ajouter la tâche à liste
    props.addTask(task);
  }
  return (
    <div>
      <input type="text" placeholder="Entrez une tache" onChange={handleTask} />

      {/* 3. Lier le clique du bouton avec la fonction validate*/}
      <button onClick={validate}>Ajouter la tache</button>
    </div>
  );
}
```

![Resultat d'affichage sur la page web du composant ReactJS TodoList quand on ajoute une Todo/tache de la liste](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-todos/react-todos-state-addTodo.gif)

---

### Supprimer une tâche de la liste

Maintenant que nous pouvons ajouter des tâches à notre liste, nous allons apprendre à **supprimer des tâches de la liste**.

Pour cela, nous allons **déclarer une fonction qui reçoit une position**, et **grâce à la fonction** `splice` des tableaux, la fonction vas **supprimer la tache de la liste**.

Puis nous allons **envoyer cette fonction en `props` au composant** `TodoItem` afin de **pouvoir l'utiliser dans le bouton**.

Voici le code du composant TodoList:

```js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    const newTask = { title: task, date: Date.now(), completed: false }
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  // Déclarer la fonction pour enlever la tâche de la liste
  const removeTask = (position) => {
    // Créer un nouveau tableau contenant toutes les taches
    const newTasks = [...tasks];

    // Utiliser splice pour supprimer la tache de la nouvelle liste
    newTasks.splice(position, 1);

    // Utiliser le fonction setteur pour mettre à jour la liste de tâches
    setTasks(newTasks);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <div>
        {/*Envoyer la fonction de suppression dans la clé onDelete*/}
        {tasks.map((task, position) => (
          <TodoItem
            key={task.date}
            task={task}
            onDelete={() => { removeTask(position); }}
          />
        ))}
      </div>
    </div>
  );
}
```

Maintenant que le composant `Todoitem` **reçoit la fonction pour supprimer une tache la liste**, nous pouvons **aller l'utiliser**.

Dans le composant `Todoitem`, nous allons **lier la fonction reçues en `props` avec le clique de bouton**.

Voici le code complet:

```js
import React from 'react';
//Déclarer et destructurer le paramètre props
export default function TodoItem({ task, onDelete }) {
  const dateObj = new Date(task.date);
  const heure = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const dateFormatted = dateObj.toLocaleDateString("fr-FR");
  const heureFormatted = `${heure.toString()}:${minutes.toString()}`;

  return (
    <div style={{
      backgroundColor: task.completed
      ? "hsla(150, 90%, 70%, 0.4)"
      : "hsla(37, 100%, 80%, 0.6)",
      }}
    >
      <h3>{task.title}</h3>
      <p>Created on: {task.date}</p>
      <button>Complete</button>
      {/* Lier la fonction de suppression recues dans les props avec la clé onDelete*/}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
```

![Resultat d'affichage sur la page web du composant ReactJS TodoList quand on supprime une Todo/tache de la liste](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-todos/react-todos-state-deleteTodo.gif)

---

### Valider une tâche

Maintenant que nous pouvons ajouter et supprimer des tâches de notre liste, nous allons mettre en place la **validation de tâches**.

Pour **valider une tâche**, nous allons **utiliser la méthode** `splice` qui permet de **modifier un élément d'un tableau en connaissant sa position**.

Voici le code de TodoList:

```js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    const newTask = { title: task, date: Date.now(), completed: false }
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const removeTask = (position) => {
    const newTasks = [...tasks];
    newTasks.splice(position, 1);
    setTasks(newTasks);
  };

  // Fonction pour mettre à jour la liste de tâches
  function validateTask(position) {
    // Créez une copie du tableau original
    const newTasks = [...tasks]; 

    // Mettre à jour l'élément
    newTasks[position].completed = true;

    // Mettre à jour l'état du tableau
    setMyArray(newTasks); 
  }
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <div>
        {/* Envoyer la fonction de validation dans la clé onValidate*/}
        {tasks.map((task, position) => (
          <TodoItem 
            key={task.date} 
            task={task} 
            onDelete={()=>{removeTask(position)}}
            onValidate={()=>{validateTask(position)}}
          />
        ))}
      </div>
    </div>
  );
}
```

Maintenant que le composant `Todoitem` **reçoit la fonction pour valider une tache la liste**, nous pouvons **aller l'utiliser**.

Dans le composant `Todoitem`, nous allons **lier la fonction reçue en `props` avec le clique de bouton**.

Voici le code complet:

```js
import React from 'react';

export default function TodoItem({ task, onDelete, onValidate }) {
  const dateObj = new Date(task.date);
  const heure = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const dateFormatted = dateObj.toLocaleDateString("fr-FR");
  const heureFormatted = `${heure.toString()}:${minutes.toString()}`;

  return (
  <div style={{
    backgroundColor: task.completed
    ? "hsla(150, 90%, 70%, 0.4)"
    : "hsla(37, 100%, 80%, 0.6)",
    }}
  >
    <h3>{task.title}</h3>
    <p>Created on: {task.date}</p>

    {/* Lier la fonction de validation recues dans les props avec la clé onValidate*/}
    <button onClick={onValidate}>Complete</button>

    <button onClick={onDelete}>Delete</button>
  </div>
  );
}
```

![Resultat d'affichage sur la page web du composant ReactJS TodoList quand on complete une Todo/tache de la liste](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-todos/react-todos-state-validateTodo.gif)

---

## Utilisation du localStorage

Le `localStorage` est une **propriété de l'objet window qui permet de stocker des données dans le navigateur de l'utilisateur**.

**Les données sont stockées sous forme de `clé-valeur`**.

Dans cette partie, nous allons apprendre comment **stocker les tâches dans le stockage local du navigateur de l'utilisateur**, afin que **les tâches soient disponibles même après que l'utilisateur ait quitté la page** ou **fermé le navigateur**.

Quand l'utilisateur **charge la page**, nous voulons **récuperer la liste des tache depuis le `localStorage`** afin **d'initialiser notre état avec la liste des tâches ajouté au paravent par l'utilisateur**.

1. Nous voulons charger la liste de tâches une fois quand la page est chargée.

  Nous **utilisons donc le hook `useEffect` de React** avec un **tableau de dépendances vide** pour **charger la liste des tâches une seule fois** quand le **composant `TodoList` est mis dans le DOM**.

  Puis dans le callback du hook, nous **utilisons la méthode `getItem` de l'objet `localStorage`** qui **prend en paramètre le nom de la clé** que nous voulons récuperer et nous **retourne la valeur si elle existe ou `null`**.

  Nous **enregistrons la liste dans une chaine de caractère au format `JSON`**, nous **utilisons donc la méthode** `parse` afin de la **convertir en tableau javascript**.

2. Nous avons **créer une fonction `updateLocalStorage`**, qui **prend en paramètre la nouvelle liste de tâches** et **met à jour la liste dans le `localStorage`** grâce à la **méthode `setItem`**.

  Nous **enregistrons la liste de tâches sous le format `JSON` avec la fonction `JSON.stringify()`**.

3. Nous **utilisons la fonction `updateLocalStorage` à chaque fois que la liste des tâches change**, c'est a dire **dans les fonctions**: `addTask`, `deleteTask`, `validateTask`.

```js
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function TodoList() {

  const [tasks, setTasks] = useState(localStorageTodos);

  //1. Utiliser le hook useState pour charger la liste depuis le localStorage
  //1. Le tableau de dépendances est vide car nous voulons l'executer qu'une seule fois
  useEffect(() => {
    // 1. Récuperer et mettre à jour la liste depuis le localStorage
    const localStorageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTasks(localStorageTodos);
  }, []);

  // 2. Fonction pour mettre à jour le local storage
  function updateLocalStorage(newTasks){
    localStorage.setItem('todos', JSON.stringify(newTasks));
  }

  const addTask = task => {
    const newTask ={title: task, date: Date.now(), completed: false};
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);

    // 3. Utiliser la fonction pour mettre a jour la liste
    updateLocalStorage(newTasks);
  };

  const removeTask = position => {
    const newTasks = [...tasks];
    newTasks.splice(position, 1)];
    setTasks(newTasks);

    // 3. Utiliser la fonction pour mettre a jour la liste
    updateLocalStorage(newTasks);
  }

  function validateTask(position) {
    const newTasks = [...tasks]; 
    newTasks[position].completed = true;
    setTasks(newTasks); 

    // 3. Utiliser la fonction pour mettre a jour la liste
    updateLocalStorage(newTasks);
  }

  // ... Le reste du code ...
}

```

---

## Conclusion

Voici un **récapitulatif des principaux points** que nous avons **abordés dans ce tutoriel** :

- [**Création de composants React avec des propriétés**](https://djemai-samy.com/posts/2.react-components.article)
- [**Gestion des événements avec React**](https://djemai-samy.com/posts/2.react-components.article)
- [**Utilisation de l'état local de React pour stocker et mettre à jour les données**](https://djemai-samy.com/posts/3.react-states.article)

Maintenant que vous avez **terminé cette serie d'introduction à ReactJS**, vous pouvez **continuer à approfondir vos connaissances en ReactJS** en **explorant les concepts avancés** tels que:

- La **gestion d'état à grande échelle** avec [***Redux***](https://redux.js.org/), [***Zustand***](https://zustand-demo.pmnd.rs/)
- **Gestion de données entre client et serveur** avec [***React Query***](https://react-query-v3.tanstack.com/)
- **Frameworks ReactJS** tel que: [***NextJS***](https://nextjs.org/), [***React Native***](https://reactnative.dev/), [***Gatsby***](https://www.gatsbyjs.com/)...

Le **prochain article portera sur ExpressJS**, une **bibliothèque de Node.js qui facilite la création d'applications web et de serveurs**.

Dans cette suite d'articles, vous **apprendrez à créer un serveur ExpressJS pour répondre à des demandes HTTP**, à **configurer des routes et des points d'extrémité**, à **gérer des paramètres de requête et de réponse**, à **utiliser des middleware** et à **servir des fichiers statiques**.

Vous découvrirez également comment **utiliser des frameworks** tels que Handlebars et EJS pour **créer des pages web dynamiques**.

---

## Aller plus loin

[ExpresJS: Initiation](https://djemai-samy.com/posts/0.express-initiation)
