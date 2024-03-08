# Questions answers

## 1. PUT & PATCH

PUT modifies a record's information and creates a new record if one is not available, and PATCH updates a resource without sending the entire body in the request

PUT modifie entierement la ressource d'après la requete et crée la ressource si elle n'existe pas alors que PATCH modifie seulement un ou plusieurs champ de la resource.

## 2. FETCH/AXIOS

Généralement cela viens d'un problème de CORS (Cross-Origin Resource Sharing) car Postman n'agis pas comme un navigateur et donc n'est pas pris en compte dans la gestion des CORS.

## 3. NGINX/APACHE

Ca permet de renforcer la sécurité de notre API, car par exemple le serveur nginx peut agir comme un reverse proxy ou encore permettre de filtrer les requetes entrantes.

## 4. PERFORMANCES

- Mise en place d'un cache (ex: Redis)
- Renvoyer seulement les champs essentiels lors de la réponse
- Optimiser la base de données et les requetes avec des index
