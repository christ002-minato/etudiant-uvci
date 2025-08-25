Parfait 👌 je vais t’organiser un **plan d’action clair pour aujourd’hui et demain** pour ton projet MVVM\_TWP (Vue.js + WordPress API).
Comme vous êtes **3 dans l’équipe**, chacun aura une tâche précise, et vous avancez ensemble étape par étape.

---

# ✅ Plan de travail – **Aujourd’hui (Jour 1)**

🎯 Objectif du jour : **Mettre en place la base du projet + tester WordPress API avec Postman + créer la structure Vue.js**

---

## 1. Installer et préparer **WordPress**

* Installer WordPress en local (**XAMPP, MAMP, Docker ou Laragon**).
* Vérifier que l’API REST marche → ouvrir dans le navigateur :

  ```
  http://localhost/wp-json/wp/v2/
  ```
* Créer quelques **catégories et posts tests** depuis l’admin WordPress pour avoir de la donnée.

👤 Responsable : **1 personne**

---

## 2. Tester l’API avec **Postman**

* Installer Postman.
* Créer une collection **"WordPress Trello API"**.
* Ajouter et tester les requêtes suivantes :

  * `GET /wp-json/wp/v2/categories` → récupérer les listes.
  * `POST /wp-json/wp/v2/categories` → créer une liste.
  * `GET /wp-json/wp/v2/posts` → récupérer les cartes.
  * `POST /wp-json/wp/v2/posts` → créer une carte.
  * `GET /wp-json/wp/v2/comments` → récupérer les commentaires.
  * `POST /wp-json/wp/v2/comments` → ajouter un commentaire.

⚠️ Pour les `POST`, `PUT`, `DELETE` → vérifier si une **authentification** est nécessaire (par défaut oui). Installer un plugin **JWT Authentication** si besoin.

👤 Responsable : **1 personne**

---

## 3. Initialiser le projet Vue.js

* Créer le projet avec **Vue CLI ou Vite** :

  ```bash
  npm init vue@latest mvvm_twp
  cd mvvm_twp
  npm install
  npm run dev
  ```
* Ajouter **Vue Router** et **Axios** :

  ```bash
  npm install vue-router axios
  ```
* Configurer le **router** avec 3 routes principales :

  * `/lists` → catégories
  * `/lists/:id/cards` → posts d’une catégorie
  * `/cards/:id/comments` → commentaires d’un post

👉 Créer 3 vues :

* `ListsView.vue`
* `CardsView.vue`
* `CommentsView.vue`

👤 Responsable : **1 personne**

---

📌 **Fin de la journée aujourd’hui :**

* WordPress prêt avec API qui fonctionne.
* Collection Postman avec toutes les requêtes testées.
* Projet Vue.js lancé avec routes et vues vides prêtes.

---

# ✅ Plan de travail – **Demain (Jour 2)**

🎯 Objectif du jour : **Afficher les données WordPress dans Vue.js avec Axios (READ)**

---

## 1. Connexion à l’API WordPress depuis Vue.js

* Créer un dossier `services/` avec un fichier `api.js` :

  ```js
  import axios from "axios";

  export const api = axios.create({
    baseURL: "http://localhost/wp-json/wp/v2/"
  });
  ```
* Tester un appel dans `ListsView.vue` :

  ```js
  import { api } from "../services/api.js";
  import { ref, onMounted } from "vue";

  export default {
    setup() {
      const categories = ref([]);

      onMounted(async () => {
        const res = await api.get("categories");
        categories.value = res.data;
      });

      return { categories };
    }
  }
  ```
* Dans le `<template>` :

  ```vue
  <ul>
    <li v-for="c in categories" :key="c.id">{{ c.name }}</li>
  </ul>
  ```

---

## 2. Répartir les tâches CRUD (Read seulement demain)

* **Personne A (Catégories)** : afficher la liste des catégories.
* **Personne B (Posts)** : afficher les posts par catégorie (`/lists/:id/cards`).
* **Personne C (Commentaires)** : afficher les commentaires d’un post (`/cards/:id/comments`).

👉 Chacun utilise **Axios** et récupère les données avec la méthode `GET`.

---

📌 **Fin de la journée demain :**

* Chaque vue (`ListsView`, `CardsView`, `CommentsView`) doit **afficher les données WordPress réelles**.
* Navigation entre les pages avec Vue Router doit marcher.
* Toute l’équipe voit déjà un **mini-Trello** (même si CRUD pas complet).

---

⚡ Résumé :

* **Aujourd’hui** → préparer WordPress + Postman + base Vue.js avec routes.
* **Demain** → connecter Vue.js à WordPress avec Axios et afficher les données (Read).

---

👉 Veux-tu que je prépare pour toi une **checklist Postman des requêtes WordPress (CRUD complet)** que ton équipe pourrait suivre pour tester rapidement chaque partie ?
