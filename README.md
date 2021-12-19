# project description 
Web app built with React and Redux that lets users play the "Would You Rather?" game. The game goes like this: A user is asked a question in the form: "Would you rather [option A] or [option B] ?". Answering "neither" or "both" is against the rules.

# installion
1-npm install   # to install project
2-npm start    to start the project

# techniqes 
1- react
2-redux
3-boostrap
3-react router dom
 # usage
 When the App is lauched, you can select users from the options and login. Once the user logs in, the home page is show with the name of the logged in user clearly displayed.

The home page contains all questions categorized into "Answered" and "Unanswered". By default a user is shown all unanswered questions first and then can navigate to answered questions by selecting the approriate link. Each question links to the question detail page. Here, a user can vote by selection an option. Vote results are shown immmediately with the user's response, the total number and percentage of votes for each option. A logged in user can vote on an option only once.

A user can navigate to the Leaderbard which where users are ranked according the number of questins and answers submitted in descending order.

A user can also navigate to the "New Question" page where they can input options and create a question.

The home page also has a "Logout" button to exit the App.