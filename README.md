![alt text](https://raw.githubusercontent.com/muhanad40/Simple-React-Movie-Listing/master/screenshot.png "Logo Title Text 1")

### Technical test
This is a technical test submission. Here are the tasks:

- [x] Display a list of movies, each showing their title, genres and poster image.
- [x] The movies should be ordered by popularity (most popular first - popularity property).
- [x] Movies should be filterable by multiple genres, the user should have the ability to toggle movies depending on all of its assigned genres. For [x] ample if 'Action' and 'Drama' genres are selected listed movies must have both 'Action' and 'Drama' genres.
- [x] Movies should also be filterable by their rating (vote_average property). i.e If rating was set to 5, you would expect to see all movies with rating of 5 or higher.
- [x] The input API's should only be called once

### Notes
Used to Redux to manage the state and Jest for unit tests. The design is from the internet, found a simple Sketch file ;)

### Improvements
- Resizing window to mobile size doesn't show a menu icon to display the filters. This needs to be implemented
- Would move each test file adjacent to the component/file it's testing instead of putting all of them in one folder
- Would modify my tests to only test intended behaviour rather than implementation details

### How to run:
- `git clone git@github.com:muhanad40/Simple-React-Movie-Listing.git`
- `cd Simple-React-Movie-Listing`
- `npm install`
- `npm start`
- Navigate to http://localhost:8080/

### Run the tests
`npm test`
