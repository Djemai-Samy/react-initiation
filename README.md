# ReactJS: La gestion d'état

![Image du cours: ReactJS: La gestion d'état](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-states/react-states.png)

Articles pour comprendre comment gérer les états dans vos composants ReactJS.

Et comment utiliser le Hook useState efficacement pour créer des applications plus performantes et plus évolutives

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

Dans ce chapitre, nous allons **introduire la gestion d'état** en ReactJS et pourquoi il est **important de comprendre comment gérer les états de manière efficace**.

Ensuite, nous aborderons les **différentes méthodes de gestion d'état** et **les avantages de l'utilisation de Hook**.

## Objectifs

1. **Comprendre l'importance de la gestion d'état** dans les applications ReactJS.
2. **Comprendre les avantages de l'utilisation de Hook** pour la gestion d'état.
3. **Utiliser le Hook useState** pour gérer l'état d'un composant.

---

## Les variables d'états

  Dans les applications ReactJS, **la gestion d'état** fait référence à la manière dont **les données** sont **stockées** et **mises à jour** dans **un composant**.

  **Les données** sont **stockées** sous forme **d'état (state)** et sont utilisées pour **déterminer** comment **le composant** doit être **rendu à l'écran**.

  **La fonction** `useState` permet de **gérer l'état interne d'un composant**, elle est utilisée pour **déclarer une variable d'état** et la **fonction pour la mettre à jour** dans un composant.

---

### Déclaration

**Le Hook** `useState` est une **fonction importée** depuis le module `react`, qui prend en **paramètre la valeur initiale de l'état** et **renvoie un tableau contenant deux éléments** :

1. La **variable d'état**: pour lire la valeur.
2. La **fonction**: pour mettre à jour la valeur de la variable d'état.

```jsx
// 1. Import de la fonction
import { useState } from 'react';

function Composant() {

  // 2. Déclaration de la variable d'état et de son setter
  const [laVariable, setLaVariable] = useState('Valeur initiale');

  return (
    <div>
    </div>
  );
}

export default Composant;
```

---

### Utilisation

Maintenant que **la variable d'état et son setter sont déclarés**, nous pouvons l'utiliser pour **afficher la valeur de la variable** dans le paragraphe, et **modifier sa valeur lors d'un clique**:

```jsx
import { useState } from 'react';

function Composant() {

  const [laVariable, setLaVariable] = useState('Valeur initiale');

  // 1. Fonction executée lors du clique
  function handleChangeLaVariable(){
    // 1.1. Utiliser la fonction pour modifier la variable
    setLaVariable('Valeur modifiée')
  }

  return (
    <div>
      {/* 2. Lire la variable */}
      <p>{laVariable}</p>

      {/* 3. Lier la fonction avec la bouton */} 
      <button onClick={handleChangeLaVariable}>
        Cliquez ici pour changer le texte
      </button>
    </div>
  );
}
export default Composant;
```

![Résultat d'affichage avant changement de variables d'états créer avec useState de la librairie ReactJS](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-states/react-states-before.png)

![Résultat d'affichage après changement de variables d'états créer avec useState de la librairie ReactJS](https://djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-states/react-states-after.png)

Il faut noté que le composant fonctionnel est réexecuter quand une variables d'état change, pour illustrer le comportement, nous allons afficher dans la console du texte:

```jsx
import { useState } from 'react';

function Composant() {

  // Fonction executé a chaque rendu:
  console.log('Composant rendu!')

  const [laVariable, setLaVariable] = useState('Valeur initiale');

  function handleChangeLaVariable(){
    setLaVariable('Valeur modifiée')
  }

  return (
    <div>
      <p>{laVariable}</p>
      <button onClick={handleChangeLaVariable}>
        Cliquez ici pour changer le texte
      </button>
    </div>
  );
}
export default Composant;
```

Nous remarquons dans la console le texte 'Composant rendu' quand nous accédons la première fois à la page.

Lors du clique et donc du changement de la valeur de la variable d'état, vous retrouvez dans la console un deuxiemme affichage du texte 'Composant rendu'.

De plus, la valeur de la variable d'état ne change que lors de la réexecution du composant fonctionnel.

Pour illustrer le comportement, nous allons ajouté un affichage sur le console de la valeur de la variable a chaque rendu.

Et ajouté un affichage de la valeur de la variable d'état dans la fonction qui modifie la valeur:

```jsx
import { useState } from 'react';

function Composant() {

  const [laVariable, setLaVariable] = useState('Valeur initiale');

  // 1. Afficher la variable a chaque rendu:
  console.log('Composant rendu: ', laVariable);

  function handleChangeLaVariable(){
    setLaVariable('Valeur modifiée');

    // 2. Afficher la variable après l'avoir changé
    console.log('Après changement: ', laVariable);

  }

  return (
    <div>
      {/* 2. Lire la variable */}
      <p>{laVariable}</p>

      {/* 3. Lier la fonction avec la bouton */} 
      <button onClick={handleChangeLaVariable}>
        Cliquez ici pour changer le texte
      </button>
    </div>
  );
}
export default Composant;
```

---

### Exemple: Compteur

Dans cet exemple, nous allons **créer un composant** qui **affichera un compteur** que nous pourrons **incrémenter et décrémenter** grâce à deux boutons:

```jsx
import { useState } from 'react';

function Compteur() {

  const [leCompteur, setLeCompteur] = useState(0);

  // 1. Fonction executée lors du clique sur -1
  function handleDecrementation(){
    // 1.1. Fonction pour modifier la variable
    setLeCompteur(leCompteur - 1)
  }

  // 2. Fonction executée lors du clique sur +1
  function handleIncrementation(){
    // 2.1. Fonction pour modifier la variable
    setLeCompteur(leCompteur + 1)
  }

  return (
    <div>
      {/* 3. Lire la variable*/}
      <p>{leCompteur}</p>

      {/* 4. Lier la fonction de decrementation*/} 
      <button onClick={handleDecrementation}>
        -1
      </button>

      {/* 5 Lier la fonction d'incrementation*/} 
      <button onClick={handleIncrementation}>
        +1
      </button>
    </div>
  );
}
export default Compteur;
```

---

## Les formulaires

L'utilisation des **variables d'états simplifient le processus de gestions des formulaires**, et nous offre la possibilité de **facilement contrôler les champs utilisateur**.
</Block>

### Stocker les entrées

Nous pouvons **stocker les entrées de l'utilisateur** après chaque frappe **dans une variable d'état**.

Il nous suffit de:

1. **Déclarer une variable d'état et son setter** avec la fonction `useState`.

2. **Déclarer la fonction à executer** lors de la frappe qui s'occupe de:
    1. **Récuperer la valeur du champ** depuis l'objet reçu en paramètre.
    2. **Mettre à jour la valeur de la variable d'état** avec la fonction setteur.

3. **Afficher la variable** dans un paragraphe pour **observer sa mise à jour** en temps réel.

4. **Lier la fonction avec l'élément** en utilisant l'attribut `onChange`.

```jsx
import { useState } from 'react';

function Formulaire() {

  // 1. Déclarer la variable d'état et sont setter
  const [texte, setTexte] = useState("");

  // 2. Fonction executée pour chaque frappe
  function handleTexteChange(e){
    // 2.1 Récupere la valeur du champs
    const texteEntre = e.target.value;

    // 2.2 Assigne la nouvelle valeur à la variable
    setTexte(texteEntre);
  }

  return (
    <div>
      {/* 3. Afficher la valeur de la variable */}
      <p>{texte}</p>

      {/* 4. Lier la fonction de mise à jour */} 
      <input onChange={handleTexteChange} />
    </div>
  );
}
export default Formulaire;
```

---

### Controler les entrées

Les **champs utilisateur possèdent un attribut** nommé `value` qui nous permet de **déterminer et de contrôler la valeur d'un champ**.

Nous pouvons **utiliser notre variable d'état** afin de **contrôler le champ**, pour le **pré-remplir avec une valeur initiale** ou le **vider avec un bouton** par exemple.

1. **Initialiser la variable d'état** avec une valeur **pour pré-remplir le formulaire**.

2. **Utiliser l'attribut** `value` pour **controler la valeur du champ**.

3. **Déclarer la fonction à executer** lors du clique sur le bouton de vidage:
    1. **Utiliser la fonction setter** pour **assigner un chaine de caractère vide** la la variable.

4. **Lier le bouton avec la fonction**.

```jsx
import { useState } from 'react';

function Formulaire() {
  // 1. Donner une valeur initiale pour pré-remplir le champ
  const [texte, setTexte] = useState("Valeur pré-remplie");

  function handleTexteChange(e){
    const texteEntre = e.target.value;
    setTexte(texteEntre);
  }

  // 3. Fonction executée lors d'un clique
  function viderTexte(){
    // 3.1 Vider la variable d'état
    setTexte("");
  }

  return (
    <div>
      <p>{texte}</p>
      {/* 2. Lier la variable avec la valeur du champ */} 
      <input onChange={handleTexteChange} value={texte} />

      {/* 4. Bouton pour vider le texte */} 
      <button onClick={viderTexte} >
        Vider le texte
      </button>
    </div>
  );
}
```

### Gestion des erreurs

Nous pouvons aussi **utiliser les variables d'état** pour **afficher des message d'erreurs dynamiquement** suivant la valeur du champ.

Par exemple nous pouvons **afficher un message d'érreur** si la **taille du texte** est **infèrieur à 3** ou **supèrieure à 10**:

1. **Déclarer une  variable d'état** pour le message d'erreur, **initialisée** avec une une **chaine de caractères vide**.

2. **Ajouté la logique pour tester la taille de la chaine de caractère** et **modifier la valeur du message d'erreur**.

3. **Afficher le message d'erreur** dans la page web.

```jsx
import { useState } from 'react';

function Formulaire() {
  const [texte, setTexte] = useState("Valeur pré-remplie");

  // 1. Variable d'état pour l'erreur initialisée à vide
  const [texteError, setTexteError] = useState("");

  function handleTexteChange(e){
    const texteEntre = e.target.value;
    setTexte(texteEntre);

    // 2. Gestion des erreurs
    if(texteEntre.length < 3){
      setTexteError('Le texte est trop court!')
    }
    if(texteEntre.length > 10){
      setTexteError('Le texte est trop long!')
    }
  }

  function viderTexte(){
    setTexte("");
  }

  return (
    <div>
      <p>{texte}</p>
      <input onChange={handleTexteChange} value={texte} />

      {/* 3. Afficher le message d'erreur */} 
      <p>{texteError}</p>

      <button onClick={viderTexte} >
        Vider le texte
      </button>
    </div>
  );
}
```

## Conclusion

Dans ce chapitre, nous avons appris à **utiliser le Hook useState** pour **déclarer une variable d'état** et **la mettre à jour dans un composant** fonctionnel.

Nous avons également vu qu'il est possible d'**utiliser plusieurs variables d'états** dans **un même composant**.

**Les variables d'états** sont une **brique essentiel** pour la **création d'application dynamique** avec ReactJS.

Dans le chapitre suivant, nous allons **découvrir les autres Hooks importants** de ReactJS.

---

## Aller plus loin

  [ReactJS: Les hooks](https://djemai-samy.com/posts/4.react-hooks.article)
