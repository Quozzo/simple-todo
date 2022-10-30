# Simple Todo List

### How long did you spend on your solution?

It took about 3 hours

### How do you build and run your solution?

You can start it by running npm start or you can build it by using npm run build to get the files.

### What technical and functional assumptions did you make when implementing your solution?

I took an optimistic update approach so that the UI is updated before any ajax requests are be made. If the ajax request fails then the UI can be rolled back.
The Todo List takes a SPA approach and is not rendered server side.
I assume that the list will be fetched from the server on every page refresh and as such it is not saved in localStorage.

### Briefly explain your technical design and why do you think is the best approach to this problem.

I created a React Context which contains all of the todo list items. This allows easy access to manipulate the list from anywhere in the SPA including adding a new item within the NewItem component or toggleing the item to complete/pending with the checkbox inside each todo item. The two groups are also isolated from one another which will make it easy to add additional groups or categories in future should the need arise.
