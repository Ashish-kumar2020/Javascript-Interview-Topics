## What is React?

# Recat is an open source javacsript libarary for building user interfaces, especally for SPA[Single Page Application]. it follows a component based a architecture, where the Ui is divided into re-usable components. React uses a declarative programing model,which means developers describe how the UI should look based on the current state and react effcietly updates the DOM using its reconcillliation algorithm whenever the state or props changes.

## Follow up questions - 

# 1 - What is a library?
# A library is collection of re-usable code that helps us in solving common problems

React Provides us APIs like:
useState() , useEffect(), useMemo() React.memo()

Instead of writting everythingh from scratch.
# Important : React doesn't control your entire application.You call React when you need it.

That's why it is called a library.

# 2 - Why not a framework?
# - In a library we developer have the control of flow, in a framework the framework controls the flow.

# 3 - Especially for Single Page Applications (SPAs)
# - A SPA loads only one html page initially
# After that : Instead of requesting new HTML page from the server. React updates only the necessary UI.

Example : Instagram
User Click proifile -> URL Changes -> React Update the page -> Browser doesn't reload


# 4 - Component based  Architecture
# - Instead of one huge HTML file we divide UI into reusable pieces.
Example: 
        App -> Main Folder
            -> Navbar
            -> Sidebar
            -> Dashboard
                -> Charts
                -> Table
                -> Cards
            -> Footer

Each Peice is called component

What are the benefits
1- Reusable
2 - Easy to Test
3 - Easy to Maintain
4 - Independent

# 5 - What do you mean by Declarative Programing
Imperative Programing
if(isLoggedIn){
   showDashboard();
}else{
   showLogin();
}
You tell the computer how to do every step.

React is decalrative
return isLoggedIn ? <Dashboard /> : <Login />;
You simply describe
“If logged in, show Dashboard.”
React decides how to update the DOM.
You focus on what the UI should look like.
React handles how to get there.

# 6 - Reconcilliation
When the state changes -> New React Elemnet Tree is created -> Reconciliation -> Commit Phase -> DOM Updated

React Compares the previous UI Description with the new one
Then updates only the necessary DOM nodes
