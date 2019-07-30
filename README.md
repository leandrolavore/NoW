This was the first App that I started from scratch, not following any tutorial, so it is when I got a more conscious understanding of Life-Cycle methods, and functional programming. This one forced me to go to the documentation, and to abandon the preconceptions I had coming from Object Oriented programming like Java.

I wanted to create a News App, that could identify the user's location and serve news from that specific country. 

So I used the nav-geolocation coordinates from the browser, then I used the reverse-geocoding service from Google Maps API, to obtain the country's name. Then I would contact the News API, get the json data result, and FILTER the news getting only the ones that contained that country's name in the response. (In the Json file "country": "Argentina"). In order to make it work properly and avoid any loops or my renders falling behind, I put all that process in the ComponentDidMount method. I didn't store any value as property, just kept it functional.

I used state management with Redux when I added two new features: Search page and Previous page. These two have nothign very particular in them, since in the search I pretty much use the user's input and put it as a literal template in a search query endpoint of the API.

With the Previous searches features I had to add state to the component and use a Redux store.

Later on I added a weather component with some basic weather info that also uses geo-location.


The design was done completely through CSS. I used Flex-box and Grid, and created the logo  in a free website.
