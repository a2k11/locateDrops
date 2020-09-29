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
#### Managing App State with useReducer / useContext Hooks
  - state management system, setting up context.js with useContext to create Context serving as 
    initial state, to make changes to Context we use reducer.js and useReducer with state & action, 
    useReducer hook takes reducer function & initialState from Context, Context Provider takes 
    state & dispatch to create initial state 
  - added styling to login page, moved me query to graphql directory, provided better error 
    handling, refactored reducer with destructuring of action 
#### Protecting our App Route
  - creating protected route for app, adding new case is_logged_in to reducer, adding isAuth to context to 
    track user login, if logged in user is kicked to app page, implemented ProtectedRoute.js
#### Building Header
  - building the header component, grabbing state from Context & currentUser from state, building 
    Header component with user data, returning Header in App
  - build signout button, importing GoogleLogout plus adding props with render a jsx custom component, 
    onSignout reducer sets auth to false currentUser to null
#### Building Map / User Geolocation
  - creating and styling map, adding map component from react-map-gl, adding useState to change location in 
    viewport, added navigationControl from react-map-gl for zoom feature
  - using pin for current user position, fixed env variables with 'REACT_APP_', removed dotenv from client
    package.js, added geolocation to map with react hook useEffect, defined pin for Map to update with position
#### Creating Blog Area & Adding Draft Pins
  - adding draft pin, implemented onClick event with ReactMapGL Component, imported Context updated draft 
    attribute, created reducer events for draft, displayed pin through UI
  - adding blog area for pin content, grabbed state inside Blog component & placed in Map, compared draft to set  
    BlogContent with createPin or noContent
  - enhancing blog components, added functionality to CreatePin component by defining title content discard submit
    features, defined NoContent as simple explorer icon with message
  - managing pin content state & deleting draft pins, added useState & useContext hooks for managing state, 
    created onChange events for each button & input & text, implemented handleDeleteDraft, created new reducer 
    case for state update
#### Image Uploads with Cloudinary Web API
  - uploading images with cloudinary, added new environment variables for cloudinary, created handleImageUpload to
    create FormData and populate its values, made handleSubmit async, use axios to handle post call
#### Creating New User Pins
  - create_pin mutation, added Mutation & Input types, added Mutation resolver which creates Pins in GraphQL, 
    create client side mutation in mutations.js, added GraphQLClient to CreatePin component, wire up mutation to 
    handleSubmit by creating mutation request, wipe state at the end of submit
#### Making Custom useClient Hook
  - create useClient hook with GraphQLClient, added idToken to state inside client, exported client to CreatePin 
    component, exported BASE_URL to login component
#### Display Pins Created
  - displaying created pins on map, added new query with resolver, inserted new reducer "GET_PINS" & "CREATE_PIN", 
    updated map to display submitted pins
#### Popups & Highlighting New Pins
  - added fn highlightNewPin to map component, added library to analyze time since pin creation
  - adding popups to pins, added fn handleSelectPin to PinIcon component's onClick, added currentPin to state and
    reducer event for SET_PIN, added delete button for author of pin with isAuthUser fn & button with DeleteIcon 
    component
#### Deleting User Pins
  - DELETE_PIN mutation, added deletePin mutation with pinId as input, created deletePin resolver, added fn 
    handleDeletePin in Map component, created reducer event to update state & filter pins
#### Displaying Pin Content
  - building PinContent component, added currentPin & pinContent view to Blog component, adding for display the 
    title & author & createdAt && content of selected Pin 
#### Comment Functionality
  - building comments for display, created Comments & CreateComment components, added both components to PinContent
  - defining UPDATE_PIN_MUTATION, added type mutation and resolver, set up client mutation to grab pin 
    details to update pins array, added mutation request to CreateComment Component, created resolver event for 
    mutation, fixed naming error for GraphQL mutation, added formatDistanceToNow from date-fns to handle time format
#### Client Error Handling
  - handling expired auth tokens, 

