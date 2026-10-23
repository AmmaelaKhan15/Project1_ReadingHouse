# Project 1: My Reading House

**By: Ammaela Khan**

## 1. Brief Plan

My Reading House is a web application for keeping track of books I want to read, am currently reading, and have already finished. It follows a similar idea to a to-do list, but instead of tracking tasks, it helps book lovers organize their reading lists.

My original plan also included allowing users to write reviews or descriptions of books they had finished. However, I was not able to complete this feature within the project.

## 2. Planned Features

- Add books to a “To Be Read” list.
- Move books to a “Reading” section when starting them.
- Mark completed books and move them to a “Read” section.
- Delete books from the list.
- Save books in the browser so they remain available after refreshing the page.
- **Planned but not completed:** Add an optional review or description for a finished book.

## 3. Wireframes and Sketches

The following images show my initial wireframes and rough drafts for the application.

<img width="1536" height="2048" alt="Different Screens" src="https://github.com/user-attachments/assets/de43139c-a484-4b38-bdd4-c029a7007c26" />

<img width="1536" height="2048" alt="Starting Rough Draft" src="https://github.com/user-attachments/assets/d2b98f6f-82e6-4299-bd1d-b912aaa97cbf" />

## 4. Project Links

- **Published application:** https://ammaelakhan15.github.io/Project1_ReadingHouse/
- **GitHub repository:** https://github.com/AmmaelaKhan15/Project1_ReadingHouse
- **Project video presentation:** https://canva.link/aln3r2cvovlw5qh

## 5. About the Application

My Reading House is a web application that helps users keep track of the books they want to read, are currently reading, and have already finished. Users can add a book title and author, move books between the three sections, and delete books they no longer want on their list.

The application uses localStorage to save the book information in the browser, allowing the list to remain available after refreshing the page.

## 6. Technologies Used

- **HTML:** Creates the structure of the webpage, including the form, buttons, and book sections.
- **CSS:** Controls the styling, layout, and appearance of the application.
- **JavaScript:** Adds functionality, handles button clicks, updates book information, and validates form inputs.
- **DOM scripting:** Allows JavaScript to create, update, and remove HTML elements dynamically.
- **localStorage:** Saves the book data in the browser so it can be loaded again after refreshing the page.

## 7. How to Use the Application

1. Open the published application using the link above.
2. Enter a book title and author in the form and submit it to add the book to the “To Be Read” section.
3. Click **Start Reading** to move a book to the “Reading” section.
4. When you finish the book, click the checkmark button to move it to the “Read” section.
5. Click **Delete** if you want to remove a book from your list.
6. Refresh the page to check that your saved books are still available.

## 8. Running the Application Locally

1. Clone or download the GitHub repository to your computer.
2. Open the project folder.
3. Open `index.html` in a web browser.

## 9. Screenshots

The following screenshots show the application interface and its main features.

<img width="716" height="444" alt="Application screenshot 1" src="https://github.com/user-attachments/assets/0c20cc73-bba5-4e2c-97b1-0d54e0267f35" />

<img width="644" height="638" alt="Application screenshot 2" src="https://github.com/user-attachments/assets/8e861e47-1309-4de9-bc0e-0c2be1339d35" />

<img width="647" height="531" alt="Application screenshot 3" src="https://github.com/user-attachments/assets/265bbf68-92ac-482a-9cbb-7551e6bdee63" />

## 10. Known Issues and Limitations

The main missing feature is the ability to add a review when marking a book as read. I spent time trying to understand and implement this feature, but I found it more complicated than I expected and was unable to complete it within the project.

The main reading-list features are implemented, including adding, moving, deleting, and saving books. The review feature is something I would like to continue working on in the future.

## 11. Reflection on My Work and Learning Process

### What did I succeed in?

I succeeded in creating the three reading sections and making the buttons work so that books move to the correct section. I also implemented the form for adding book titles and authors, input validation, and localStorage so that the books remain saved after refreshing the page.

### What was challenging?

I understood the basic concepts from the workshops, but applying them to my own project idea was challenging. I had to figure out how to combine the different concepts and make them work together. This took time, multiple iterations, and testing. 

### What would I improve if I had more time?

I would improve the overall appearance of the application by styling the buttons and making the design more visually engaging. I would also add a search bar and continue working on the review feature.

### What did I learn about HTML, CSS, JavaScript, and DOM scripting?

I learned that HTML provides the structure of the application, while CSS is used to style the different elements. JavaScript makes the application interactive by responding to user actions and updating information on the page.

I also learned more about DOM scripting, including how to create HTML elements using JavaScript, add classes to them, and place them in the correct sections. I applied what I learned about arrays to store and display multiple books, and I used localStorage to keep the book data available after refreshing the page.

### What remained unclear or what would I like to learn more about?

I would like to learn more about handling more complicated JavaScript features, particularly how to add optional reviews to books and save that information. I would also like to improve my understanding of arrays, event listeners, and how different JavaScript functions work together.

### My self-assessed project grade

10/10 points.

I put a lot of effort into learning how to combine the workshop concepts and applying them to my own project. Although I did not complete every planned feature, I learned through testing, iterating, and improving the application.

## 12. Sources and Acknowledgements

### Workshop materials

I used knowledge from Workshop 4 to help me create the HTML elements, forms, buttons, and JavaScript interactions. The following screenshots show examples from the workshop materials that helped me understand and build these features.

**Creating divs and buttons:**

<img width="392" height="555" alt="Workshop example for divs and buttons" src="https://github.com/user-attachments/assets/0bea8c0f-fddb-4e40-a103-3e86cd753b72" />

**Creating the form and adding JavaScript interactions:**

<img width="408" height="199" alt="Workshop form example" src="https://github.com/user-attachments/assets/374f7a64-2916-496a-bb6f-5c8686a3d211" />

<img width="506" height="603" alt="Workshop JavaScript example" src="https://github.com/user-attachments/assets/66ddc4df-085e-4225-b8c8-2ed94716f178" />

<img width="565" height="508" alt="Workshop example" src="https://github.com/user-attachments/assets/26f6807e-ed6b-410a-9dca-b289581c63f7" />

**Form validation:**

<img width="447" height="195" alt="Workshop validation example" src="https://github.com/user-attachments/assets/f7818b88-0dff-40a8-ae17-b4c967332ad7" />

I also used the concepts from Workshop 5 to understand and apply localStorage so that the book data could be saved in the browser.

### AI tools

**ChatGPT:** I used ChatGPT to help me understand arrays and apply them to my `displayBooks()` function. This was a new concept for me. I initially used a form-based approach to display the information, but I worked toward using an array because it was more suitable for managing multiple books and connecting the book list to localStorage.

**Gemini:** I used Gemini to help me understand how to highlight invalid form inputs with a red border. The initial suggestion included more code than I needed, so I worked through the explanation and adapted the relevant parts to my existing JavaScript and CSS. I added the `is-invalid` class and separate checks for the title and author fields.

I also added comments to my JavaScript code to explain what different sections do and identify where I applied concepts from the workshops and AI assistance.

I used these AI tools as learning aids when I got stuck, and I tested and adapted the suggestions to fit my project rather than copying every suggestion directly.
