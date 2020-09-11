## React App with Hooks & GraphQL

#### GraphQL Server
  - created GraphQL server, implemented ApolloServer in server.js, imported typeDefs & resolvers in server.js,
    created a type & query
  - created mongodb database, added mongoose library and defined connection to db
  - added mongo models User & Pin, added Pin & Comment as types in the schema in typeDefs

#### Google OAuth 2.0
  - exploring react app, edited versions of package.json in client, project dependency tree error with 
    eslint so removed it from devDependencies
  - google oauth set up, adding google login button to Auth component, display on splash page, 
    fix dotenv import,
  - authenticating users from apollo server, added context to apollo server for user authenticating, 
    setting up verifying user setting up auth token, checking to create new user, fixed OAUTH bugs
  - state management system, setting up context.js with useContext to create Context serving as 
    initial state, to make changes to Context we use reducer.js and useReducer with state & action, 
    useReducer hook takes reducer function & initialState from Context, Context Provider takes 
    state & dispatch to create initial state 
  - added styling to login page, moved me query to graphql directory, provided better error 
    handling, refactored reducer with destructuring of action 
  - creating protected route for app, adding new case is_logged_in to reducer, adding isAuth to context to 
    track user login, if logged in user is kicked to app page, implemented ProtectedRoute.js
  - building the header component, grabbing state from Context & currentUser from state, building 
    Header component with user data, returning Header in App
  - build signout button, importing GoogleLogout plus adding props with render a jsx custom component, 
    onSignout reducer sets auth to false currentUser to null
  - 
