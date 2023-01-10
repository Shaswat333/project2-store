# project2-store
# A Store Z

<br>



## Description

Search platform for stores in that place and creating the favorite list of stores.



<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and filter by type of restaurant, log in and sign up. 
- **sign up** - As a user I want to sign up on the web page so that I can add favorite cars to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite list** - As a user I want to see the list of my favorite and delete them.
- **edit user** - As a user I want to be able to edit my profile.
- **result** - As a user I want to see the list of stores filter by my preferences.
- **store listing** - As a user I want to see more details of the store, be able to call them and visit their website and save it as favorites.



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/stores`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `GET`      | `/stores/:storeId`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName] } |
| `GET`      | `/favorites`               | Private route. Render the `favorites` view.                  |                                                          |
| `POST`     | `/favorites`              | Private route. Adds a new favorite for the current user.     | { name,   }                                 |
| `GET`      | `/stores`                     | Renders `stores-list` view.                              |                                                          |
| `GET`      | `/stores`         | Renders stores list. |                                                          |







## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  favourite: storemodelId,
}

```

store model

summary
{
nameOfStore: String,
typeOfStore: String,
rent: Number,
number: Number,
gmail: String,
location: String,
manufacturer: String,
category: String
}


```javascript
{
  storeId: String,
}

```



<br>

## API's


<br>


## Packages



<br>



## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)



<br>



## Links
azstore.cyclic


### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Shaswat333/project2-store )

[Deploy Link](https://azstore.cyclic.app)



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)

### Contributors
Shaswat Pachhera - [`<github-Shaswat333>`](https://github.com/person1-Shaswat333) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/shaswatpachhera3/)