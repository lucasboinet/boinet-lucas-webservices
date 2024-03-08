# Installation du projet
Node version : 21.6.1

_Copy .env.example to a .env file_

- `npm install`

- `docker-compose up -d`

# Technos
- Express
- Mangoose
- MongoDB
- Docker

# Retour d'experience
On a trouvé que docker-compose facilite le développement en local.

Pour l'architecture, il faut y penser dès le début du projet. 

On a trouvé qu'Express s'utilise plutot bien et qu'il est user-friendly.

Pour l'allier avec MongoDB, on est parti sur mongoose en ODM, qui selon nous, s'utilise plutot bien. 

# API Reference

## Users

#### Get all users

```http
  GET /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| No params |

#### Get user

```http
  GET /users/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`  | `string` | **Required**. Id of item to fetch |


#### Create user

```http
  POST /users
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`| `string` | **Required**. Username of the user to create |
| `email`   | `string` | **Required**. Email of the user to create |

#### Update user

```http
  PATCH /users/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`  | `string` | **Required**. Id of item to update |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`  | `string` | **Required**. Username of the user to edit |
| `email`  | `string` | **Required**. Email of the user to edit |

#### Delete user

```http
  DELETE /users/${userId}
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`  | `string` | **Required**. Id of item to delete |

## Games

#### Get all games

```http
  GET /games
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| No params |

#### Get game

```http
  GET /games/${gameId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `gameId`  | `string` | **Required**. Id of item to fetch |


#### Create game

```http
  POST /games
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`| `string` | **Required**. Name of the game |
| `description`   | `string` | **Required**. Description of the game |
| `editor`   | `string` | **Required**. Editor name of the game |
| `price`   | `number` | **Required**. Price of the game |
| `thumbnail`   | `string` | **Required**. Url of the game thumbnail |

#### Update game

```http
  PATCH /games/${gameId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `gameId`  | `string` | **Required**. Id of item to update |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`| `string` | **Required**. Name of the game |
| `description`   | `string` | **Required**. Description of the game |
| `editor`   | `string` | **Required**. Editor name of the game |
| `price`   | `number` | **Required**. Price of the game |
| `thumbnail`   | `string` | **Required**. Url of the game thumbnail |

#### Delete game

```http
  DELETE /games/${gameId}
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `gameId`  | `string` | **Required**. Id of item to delete |


## Purchases

#### Get all purchases

```http
  GET /purchases
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| No params |

#### Get purchase

```http
  GET /purchases/${purchaseId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `purchaseId`  | `string` | **Required**. Id of item to fetch |


#### Create purchase

```http
  POST /purchases
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`| `string` | **Required**. Id of the buyer |
| `gameId`   | `string` | **Required**. Id of the game  |
| `paymentMethod`   | `string` | **Required**. Payment method used to buy the game|

#### Update purchase

```http
  PATCH /purchases/${purchaseId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `purchaseId`  | `string` | **Required**. Id of item to update |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `refundedAt`| `date` | **Required**. Date when the game has been refunded |

#### Delete purchase

```http
  DELETE /purchases/${purchaseId}
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `purchaseId`  | `string` | **Required**. Id of item to delete |

