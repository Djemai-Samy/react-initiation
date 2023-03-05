# ReactJS: Les hooks

![Image du cours: ReactJS: Les hooks](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-hooks/react-hooks.png)

Dans cet article, nous nous concentrerons les Hooks les plus couramment utilisés : useContext et useEffect.

Vous apprendrez comment utiliser chacun de ces Hooks pour gérer les états de vos composants, partager des données entre les composants, et effectuer des actions après le rendu du composant.

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

## useContext

Imaginez un scénario dans lequel vous avez 10 composants, les uns imbriqués dans les autres, et que vous voulez **faire passer des données déclarées dans le composant parent, aux composants enfants les plus éloignés dans l'arbre**.

Nous pouvons répondre à ce problème en utilisant les props:

![Representation graphique du fonctionnement de passage de propse entre composants React JS](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-hooks/react-props-tree.svg)

Mais cette façon peut être assez fatigante, nous nous retrouvons à passer certains états à travers des composants juste pour les passer à un autre composant enfant.

React nous offre un Hooks, qui nous permet d’**accéder à des propriétés déclarées dans un composant parent**, sans les faire passer par les composants enfants.

![Representation graphique du fonctionnement du hook useContext de React JS](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-hooks/react-context-tree.svg)

---

### Création du contexte

Avant de pouvoir **utiliser le contexte**, il faut d'abord l'**initialiser** en utilisant la fonction `createContext()` importée depuis `react`:

```JavaScript
import{ createContext } from 'react';

export const MonContexte = createContext();
```

---

### Remplire le contexte

Nous pouvons maintenant utiliser la balise `MonContexte.Provider` pour **définir la valeur de ce contexte**, ici `"Hello world!"`:

```JavaScript
import { createContext } from "react";

// Importer le ou les enfants qui auront accés au contexte
import Enfant from "./Enfant";

export const MonContexte = createContext();

function Parent() {
  return (
    <MonContexte.Provider value="Hello world!">
      <Enfant />
    </MonContexte.Provider>
  );
}
export default Parent;
```

---

### Utiliser le contexte

Le composant `Enfant` peut alors **accéder à cette valeur** en utilisant le Hook `useContext`.

```JavaScript
// Importer le hook de react
import { useContext } from "react";

//Importer la référence au contexte
import { MonContexte } from "./Parent";

function Enfant() {
  // Utiliser le hook pour récuperer la valeur stocker dans le contexte
  const texte = useContext(MonContexte);

  return <p>{texte}</p>;
}
export default Enfant;
```

---

Il est possible d'utiliser plusieurs contextes dans un même composant en appelant plusieurs fois la fonction useContext. Voici un exemple :

```JavaScript
import React, { useContext, createContext } from 'react';

const MonContexte1 = createContext();
const MonContexte2 = createContext();

function Composant() {
  return (
  <MonContexte1.Provider value="Hello world!">
    <MonContexte2.Provider value={42}>
      <Enfant />
    </MonContexte2.Provider>
  </MonContexte1.Provider>
  );
}

function Enfant() {
  const texte = useContext(MonContexte1);
  const nombre = useContext(MonContexte2);

  return (
    <div>
      <p>{texte}</p>
      <p>Le nombre est {nombre}</p>
    </div>
  );
}
```

Dans cet exemple, nous créons deux contextes MonContexte1 et MonContexte2, puis nous les utilisons dans le composant Enfant en utilisant deux appels à la fonction useContext.

---

## useEffect

Le Hook `useEffect` est un Hook avancé qui permet de **gérer les effets de bord dans les composants** ReactJS.

**Les effets de bord** sont des **modifications de l'état global d'une application** qui se produisent en dehors du cycle normal de rendu des composants.

`useEffect` est souvent utilisé pour **effectuer des actions à chaque mise à jour du composant**,  telles que l'**envoi de requêtes HTTP**, la **modification de l'état global de l'application**, ou la **manipulation du DOM**.

En utilisant **les dépendances** de `useEffect`, vous pouvez **définir les condition**s dans lesquelles ces **actions doivent être exécutées**, afin de **minimiser les effets de bord indésirables** et d'**optimiser les performances** de votre application.

---

### Exemple simple

Le Hook `useEffect` est appelé à chaque rendu du composant.

Il prend en argument une fonction qui sera exécutée à chaque rendu:

```JavaScript
// Import le hook useEffect depuis react
import React, { useEffect } from 'react';

function Composant() {
  // La fonction hook execute la fonction une fois lors du rendu
  useEffect(() => {
    console.log('Le composant a été rendu');
  });

  return <p>Bonjour, monde !</p>;
}
export default Composant;
```

Dans cet exemple, nous utilisons le Hook `useEffect` **sans dépendances**.

La fonction sera donc **exécutée à chaque rendu** du composant, et **affichera un message dans la console**.

---

### Tableau des dépendances

Le Hook `useEffect` peux prendre un **deuxiemme argument**, un **tableau de dépendances** qui permet de **définir les conditions** dans lesquelles la **fonction doit être exécutée**.

Voici un exemple:

```JavaScript
import React, { useState, useEffect } from 'react';

function Composant() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Le titre de la fenetre est changé a chaque fois que l'état count change
    document.title = `${count} fois`;
  }, [count]);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
    </div>
  );
}
export default Composant;
```

Dans cet exemple, nous utilisons le Hook `useEffect` pour **stocker un compteur dans le state du composant**.

Nous utilisons ensuite le Hook `useEffect` pour **mettre à jour le titre de la page à chaque fois que le compteur est modifié**.

Nous **passons le compteur comme dépendance**, afin que la fonction soit **exécutée uniquement lorsque le compteur change**.

### Fonction de nettoyage

La **fonction de nettoyage** ou **cleanup** est une **fonction optionnelle** que vous pouvez définir dans votre Hook useEffect pour **effectuer des opérations de nettoyage ou de désabonnement** lorsqu'un **composant est démonté** ou lorsqu'une **nouvelle mise à jour est effectuée**.

L'utilisation de la **fonction de nettoyage est importante** car elle permet d'**éviter les fuites de mémoire** et les **problèmes de performances associés**.

En effet, certaines opérations telles que la **souscription à des événements** ou la **manipulation du DOM** peuvent avoir des effets indésirables si elles ne sont pas correctement nettoyées lorsque le composant est démonté ou mis à jour.

Pour définir une fonction de nettoyage, il suffit de retourner une fonction dans le Hook useEffect :

```JavaScript
useEffect(() => {
  // effect
  return () => {
    // cleanup
  };
}, [/* dependencies */]);
```

Dans cet exemple, la fonction de nettoyage est définie en tant que fonction anonyme qui sera **appelée lorsque le composant est démonté** ou **mis à jour**.

Vous pouvez y inclure toute opération de nettoyage ou de désabonnement nécessaire, telle que la **désinscription à un événement**, la **suppression d'un écouteur** de changement de taille de fenêtre, ou la **suppression de nœuds DOM**.

Voici un exemple plus concret de l'utilisation de la fonction de nettoyage pour se désabonner d'un événement :

```JavaScript
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    window.addEventListener('resize', handleResize);

    // la fonction de nettoyage executé a chaque fois le composant est enlever du DOM
    return () => {
      console.log('Component unmounted');
      window.removeEventListener('resize', handleResize);
    };
  }, [count]);

  function handleResize() {
    console.log('Window resized');
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default ExampleComponent;
```

Dans cet exemple, le Hook useEffect est utilisé pour se **souscrire à l'événement de redimensionnement de la fenêtre** via la méthode `window.addEventListener()`.

Le souscripteur est **créé lors du montage du composant** et **supprimé lorsqu'il est démonté** à l'aide de la fonction de nettoyage retournée dans le Hook useEffect.

La fonction de nettoyage est **appelée automatiquement** par React lorsqu'elle n'est plus nécessaire, c'est-à-dire **lorsque le composant est démonté**.

Elle permet de **supprimer proprement l'écouteur de l'événement** pour **éviter des fuites de mémoire** et des **problèmes de performance**.

---

### Exemple: Requête HTTP

Cet exemple illustre l'utilisation de useEffect pour gérer les effets de bord d'une requête HTTP et mettre à jour l'état du composant en conséquence.

```JavaScript
import React, { useState, useEffect } from "react";

function ExampleComponent() {
  // état local du composant
  const [data, setData] = useState(null);

  // effectuer une requête HTTP
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>Title: {data.title}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```

Nous utilisons le Hook `useEffect` pour **effectuer une requête HTTP** sur l'URL [**https://jsonplaceholder.typicode.com/todos/1**](https://jsonplaceholder.typicode.com/todos/1) .

Puis nous allons **stocker les données dans l'état local** du composant à l'aide de useState.

L'option de **tableau vide `[]` en deuxième paramètre** de `useEffect` indique que cette fonction **ne doit être exécutée qu'une seule fois**, lors de **la première mise à jour du composant**.

---

## useRef

Le hook `useRef` est un autre hook très utile de React qui **permet de stocker une référence mutable** de valeur quelconque que nous povons donc muter/modifier **sans déclencher de nouveau rendu de votre composant**.

### Réference aux éléments du DOM

L'**utilisation la plus courante** de `useRef` est de **stocker une référence à un élément du DOM**.

Cela peut être utile pour **accéder aux propriétés et méthodes de l'élément DOM** dans votre code.

Voici un exemple de composant fonctionnel qui utilise `useRef` pour **stocker une référence à un élément** `input` :

```js
import { useRef } from 'react';

function InputWithFocusButton() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={onClick}>Focus</button>
    </div>
  );
}
export default InputWithFocusButton;
```

Dans cet exemple, nous avons **créé un ref** en appelant la fonction `useRef` et en lui passant `null` comme **valeur initiale**.

Nous avons ensuite **passé ce ref à l'attribut ref de notre élément** `input`.

Enfin, nous avons **créé une fonction** `onClick` qui utilise `inputRef.current` pour **accéder à l'élément input** et **appeler sa méthode focus** pour le **mettre en surbrillance**.

---

### Stocker des valeurs persistantes

`useRef` peut également être utilisé pour **passéstocker une valeur persistante entre les rendus de votre composant**passé.

Voici un exemple de composant fonctionnel qui utilise `useRef` pour **passéstocker une valeur persistante entre les rendus**passé:

```js
import { useRef, useState } from 'react';

function Counter() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let count = 0;

  const increment = () => {
    setCountState(countState + 1);
    countRef.current++;
    count++;
  };

  return (
    <div>
      <p>countState: {countState}</p>
      <p>countRef: {countRef.current}</p>
      <p>count: {count}</p>
      <button onClick={increment}>Incrementer</button>
    </div>
  );
}

```

Dans cet exemple, nous avons créé:

- Une **variables d'état initialisée a 0**, que nous allons **modifier pour provoquer un nouveau rendu du composant**.
- une ref en appelant la fonction `useRef` et en lui passant 0 comme valeur initiale.
- Une **variable classique initialisée a 0** pour **montrer que les valeurs des variables ne persiste pas entre chaque rendu**.

Nous avons ensuite **défini une fonction** `increment` qui **incremente chacun des états créés** plus haut.

Puis, nous avons **affiché les valeurs de chaque état pour observer les changements**.

En **cliquant sur le bouton**, la **mise à jour de la variable d'état provoque un nouveau rendu**, et nous remarquons que **la valeur stockée dans la ref a bien été incrémentée**, alors que **la valeur de la variables classique reste a 0**.
</Block>
</Section>
</Section>

---

## useMemo

Le Hook `useMemo` permet d'**optimiser les performances d'une application React** en **évitant de recalculer des valeurs coûteuses** en temps de calcul à chaque rendu.

---

### Utilisation de useMemo

Le Hook `useMemo` prend deux arguments :

1. **Une fonction de calcul**: **exécuter lors du premier rendu** du composant et **à chaque fois que l'une des dépendances est modifiée**. La **valeur renvoyée par la fonction est enregistrée en mémoire cache** par React.

2. **Un tableau de dépendances optionnelles**: Lors du **rendu suivant**, si les **dépendances n'ont pas changé**, React **renvoie simplement la valeur enregistrée en cache**. Si **les dépendances ont changé**, la **fonction de calcul est de nouveau exécutée** pour calculer une nouvelle valeur.

```js
import { useMemo, useState } from 'react';

function MemoComposant(props) {
  const [data1, setData1] = useState([1]);
  const [data2, setData2] = useState([1]);

  //Fonction executée quand data1 ou data2 changent
  const sum1 = (()=>{
    console.log('Calculating sum1...');
    return data1.reduce((acc, curr) => acc + curr, 0);
  })()

  //Fonction executée que lorsque data2 change
  const sum2 = useMemo(() => {
    console.log('Calculating sum2...');
    return data2.reduce((acc, curr) => acc + curr, 0);
  }, [data2]);

  return (
    <div>
      <p>The sum1 of the elements is: {sum1}</p>
      <button onClick={() => setData([...data1, sum1])}>
        Update data1
      </button>

      <p>The sum2 of the elements is: {sum2}</p>
      <button onClick={() => setData([...data2, sum2])}>
        Update data2
      </button>
    </div>
  );
}

export default MemoComposant;
```

Ici, les fonctions de calcul `sum1` et `sum2` **passent en revue tous les éléments des tableau** `data1` et `data2` et **les additionnent**.

Sans `useMemo`, la fonction `sum1` est **appelée à chaque rendu du composant**, c'est à dire **à chaque fois que `data1` ou `data2` changent**, ce qui pourrait **causer des problèmes de performance**.

Cependant, grâce à `useMemo`, la fonction de calcul `sum2` est **exécutée uniquement** lorsque **les variables du tableau de dépendances changent**, c'est-à-dire **lorsque le tableau `data2` est modifié**.

Cela permet de **ne pas recalculer la somme inutilement quand `data1` change**, même si le composant est rendu plusieurs fois.

---

## Conclusion

Dans ce cours, nous avons **exploré les différents hooks de React qui permettent de gérer l'état et le cycle de vie des composants** de manière plus efficace et plus intuitive.

- `useContext`: qui permet de **gérer les états** et de les **partager entre vos composant sans les passer par les `props`**.

- `useEffect`: qui permet de **gérer le cycle de vie du composant** et d'**effectuer des opérations asynchrones**. Et, nous avons abordé **les effets de bord** dans les composants React et **comment les gérer avec les fonctions de nettoyage**.

- `useRef`: qui permet de **garder une référence à un élément DOM entre chaque rendu**.

- `useMemo`, qui permet d'**optimiser les performances** en évitant des calculs coûteux.

En **maîtrisant les hooks** de React, vous serez **capable de développer des applications plus performantes**, **plus claires** et **plus faciles à maintenir**.

Le **prochaine article portera sur React Router DOM**, une **bibliothèque de routage** pour ReactJS qui facilite la **gestion de la navigation** dans une application web.

Avec cette bibliothèque, vous pouvez **créer des liens entre les différentes pages de votre application**, ainsi que des **routes qui vous permettent de naviguer entre ces pages**.

Vous pourrez également **gérer les paramètres de l'URL** et les **utiliser pour afficher du contenu dynamique**.

---

## Aller plus loin

[ReactJS: La navigation](https://djemai-samy.com/posts/5.react-navigation.article)
