# Redux blog

Use the [https://jsonplaceholder.typicode.com/] API to
get users, posts, and comments

## Pieces

### Services

* `blogService`
  * `getComments(postId)`
  * `getUsers()`
  * `getPosts()`

### Components

* `Home` display top 5 longest posts
* `Users` display a list of users
* `User` displays a user's `name`, `username`, `email`, and their `posts`
* `RegisterUserForm` form to register a new user
* `Posts' display a list of posts
* `Post` display a post and all of its comments

### Containers

* `Home` display the top 5 longest posts
* `AllUsers` display all users
* `RegisterUser` create a new user
* `FilterPosts` filter posts by title

### reducers

* `users` stores user information
* `posts` stores post information
* `comments` stores comment information for a single post

### actions

* User
  * `REGISTER_USER`
  * `FETCH_USERS`
  * `LOAD_USERS_START`
  * `LOAD_USERS_END`
* Posts
  * `UPDATE_POST_SEARCH_TERM`
  * `FETCH_POSTS`
  * `LOAD_POSTS_START`
  * `LOAD_POSTS_END`
* Comments
  * `FETCH_COMMENTS`
  * `LOAD_COMMENTS_START`
  * `LOAD_COMMENTS_END`

### selectors

* Users
  * `getUsers`
* Posts
  * `getLongestPosts`
  * `getPosts`
  * `getFilteredPosts`
  * `getPostsForUser`
* Comments
  * `getComments`

## Tests

* Snapshot test components
* mock and test the `blogService`
* Unit test reducers, selectors, actions
  * actions should use the `blogService` mock
