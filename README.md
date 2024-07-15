# infinite-scrolling

Reflection


 Implementation Process

 Fetching Data:
     We used the fetch API to retrieve data from the JSONPlaceholder API.
     Implemented an asynchronous function fetchPhotos to handle data fetching with pagination parameters (_page and _limit).

 Creating UI Elements:

     Created a function createPhotoElement to generate HTML elements for each photo.
     Used CSS Grid to design a responsive and visually appealing gallery layout.

 Implementing Infinite Scrolling:

    Set up an event listener on the window's scroll event.
    Loaded more photos dynamically as the user scrolled down the page by checking if the user has reached near the bottom of the page.
    Incremented the page variable to fetch the next set of photos on subsequent scrolls.

 Advantages of Infinite Scrolling

 Enhanced User Experience:
 Improved Content Discovery:
