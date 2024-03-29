# Installation du projet
Node version : 21.5.0

_Copy .env.example to a .env file_

- `npm install`

- `docker-compose up -d` // to start redis

- `npm run dev`

# API Reference

## Users

#### Get all users

```http
  GET /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `order` | `string` | Specify on wich field to sort the result
| `direction` | `string` | ['asc', 'desc'] : Order of the results
| `limit` | `number` | How many results to get
| `search` | `string` | Anything you want to search on `firstname`, `lastname` and `email` field
| `skills` | `string` | Specify a skill to filter the result. You can speficy as many skills as you want (see exemple below)

Example: /users?skills=vue&skills=laravel

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
| `firstname`| `string` | **Required**. Firstname of the user to create |
| `lastname`| `string` | **Required**. Lastname of the user to create |
| `email`   | `string` | **Required**. Email of the user to create |
| `password`   | `string` | **Required**. Password of the user to create |
| `skills`   | `array` | Ids of the skills of the user to create |

#### Update user

```http
  PATCH /users/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`  | `string` | **Required**. Id of item to update |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstname`  | `string` | Firstname of the user to edit |
| `lastname`  | `string` | Lastname of the user to edit |
| `email`  | `string` | Email of the user to edit |
| `skills`  | `array` | skills ids of the user to edit |

#### Delete user

```http
  DELETE /users/${userId}
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`  | `string` | **Required**. Id of item to delete |

## Projects

#### Get all projects

```http
  GET /projects
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `order` | `string` | Specify on wich field to sort the result
| `direction` | `string` | ['asc', 'desc'] : Order of the results
| `limit` | `number` | How many results to get
| `search` | `string` | Anything you want to search on `name` and `description` field

#### Get project

```http
  GET /projects/${projectId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `projectId`  | `string` | **Required**. Id of item to fetch |


#### Create project

```http
  POST /projects
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`| `string` | **Required**. Name of the project to create |
| `description`| `string` | **Required**. Description of the project to create |
| `members`   | `array` | Ids of the members of the project to create |

#### Update project

```http
  PATCH /projects/${projectId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `projectId`  | `string` | **Required**. Id of item to update |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`  | `string` | Name of the project to edit |
| `description`  | `string` | Description of the project to edit |
| `members`  | `string` | Users ids of the project to edit |

#### Delete project

```http
  DELETE /projects/${projectId}
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `projectId`  | `string` | **Required**. Id of item to delete |

## Skills

#### Get all skills

```http
  GET /skills
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| No params |

#### Get skill

```http
  GET /skills/${skillId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `skillId`  | `string` | **Required**. Id of item to fetch |


#### Create skill

```http
  POST /skills
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `label`| `string` | **Required**. Label of the skill to create |

#### Update skill

```http
  PATCH /skills/${skillId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `skillId`  | `string` | **Required**. Id of item to update |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `label`  | `string` | Label of the skill to edit |

#### Delete project

```http
  DELETE /skills/${skillId}
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `skillId`  | `string` | **Required**. Id of item to delete |



