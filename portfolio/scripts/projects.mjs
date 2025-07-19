const projects = [
    {
        title: 'Battleship Game in the Terminal',
        mainImg: 'imgs/battleship_0.jpeg',
        description: "I made a terminal-based Battleship game in C#. Notable features include a 3D ASCII display that will generate each time an action is taken. There is also be a way to place and rotate ships graphically using the R key to rotate and WASD to move the ship. There are collision checks for the sides of the board and other ships to prevent invalid placement. Computer logic consists of guessing random coordinates. A player can input coordinates to play and hit/miss will appear.Check it out on my GitHub: https://github.com/isaacBullinger/cse210-hw/tree/main/final/FinalProject",
        pictures: ['battleship_1.jpeg', 'battleship_2.jpeg', 'battleship_3.jpeg', 'battleship_4.jpeg', 'battleship_5.jpeg', 'battleship_6.jpeg', 'battleship_7.jpeg'],
        captions: ['Game start.', 'Ship selection', 'Graphical ship placement, ships can be placed using the WASD keys and R to rotate.', 'The user is prevented from overlapping their ships and is shown where the ships overlap.', 'Board display in the console.', 'Sink message', 'Player win!']
    },
    {
        title: 'ArcGIS Landmarks Map',
        mainImg: 'imgs/lima_landmarks.jpeg',
        description: "I created an interactive map using ArcGIS and a custom graphics layer. The map is of Lima, Peru and has 20 different landmarks. Each is categorized by type and has an icon associated with that type. The user can click on the points to learn more about the landmarks and filter the landmarks by type. You can find the project on my GitHub here: https://github.com/isaacBullinger/Lima_Landmarks You can see a demonstration on YouTube: https://youtu.be/JeOreRufkPM"
    },
    {
        title: 'Battleship Guesser AI',
        mainImg: 'imgs/battleship_guesser_0.jpeg',
        description: 'I wrote a Battleship guesser program in C#. This helps the user to guess the locations of enemy ships. It uses an algorithm that guesses randomly in a checkerboard pattern until it finds a ship. Then it tries to guess the direction of the ship by guessing random directions. When the direction is found, it guesses in that direction until the ship is sunk or it hits a boundary or previously guessed coordinate. After the ship is sunk it goes back to guessing in the checkerboard pattern. I also implemented saving and loading boards from a text file. You can see it on my GitHub: https://github.com/isaacBullinger/Battleship_Guesser',
        pictures: ['imgs/battleship_guesser_1.jpeg'],
        captions: ['Game end.']
    },
    {
        title: 'Chat App in the Terminal',
        mainImg: 'imgs/chat_app.png',
        description: 'I created a chat application that works on a local connection. I used a TCP Python Socketserver to make this application. The application is a client/server application that allows multiple users to connect. It also includes chat history in a file on the server. Users can send messages, leave the server, and delete the chat history. You can see it on my GitHub: https://github.com/isaacBullinger/Chat_Application'
    },
    {
        title: 'Weather Forecast App',
        mainImg: 'imgs/weather_forecast.jpeg',
        description: "I created a Weather Forecast app using the Open Meteo and Nomanatim JavaScript API's. The app allows the user to type in a location and receive weather information for the next week. I wrote it in JavaScript with Visual Studio Code with the NeoVim extension and used the day.js library for date conversion. You can find the project on my GitHub: https://github.com/isaacBullinger/Weather_Forecast"
    },
    {
        title: 'Wordle Guesser',
        mainImg: 'imgs/wordle_guesser.jpeg',
        description: "I created a Wordle guesser that narrows down a list of words based on the pixel colors of the squares. I used pyautogui and a JSON file of possible words. First I ranked letters in the list by frequency and used that to weigh guesses. If a square was green, then all words that matched the green letters were on the next list. If a square was yellow, then the list would return words with the letter in a different position. If the square was grey, then all words with those letters were cut from the list. Check it out on my GitHub: https://github.com/isaacBullinger/python/tree/main/wordle_guesser"
    },
    {
        title: 'Payment/Plan Page',
        mainImg: 'imgs/payment_plan.jpeg',
        description: "Another project I worked on was the payment/plan page. I integrated the Stripe API to handle payments and created a custom Stripe payment form. I also generated a contract that users could sign using a signature pad. When done the user could download their signed copy of the contract. The contract portion of this project is redacted but an example of the signature pad is included.",
        pictures: ['imgs/payment_plan.jpeg'],
        captions: ['Signature pad.']
    },
    {
        title: 'Savings Calculator',
        mainImg: 'imgs/savings_calculator_0.jpeg',
        description: 'One of the projects I worked on for SuddenlySpaces was the Savings Calculator. The calculator is a marketing tool. I first styled and animated the calculator using CSS and jQuery. Then I made the calculator interactive with JavaScript. All of the calculations are done in the PHP backend and sent to the frontend for display. The download button on the calculator allows the user to download a savings summary pdf generated using FPDF. I then asked for feedback from sales and marketing and implemented the changes they proposed. You can see it here: http://ss.digitalspawn.com/calculator',
        pictures: ['imgs/savings_calculator_0.jpeg'],
        captions: ['Picture of the generated PDF.']
    },
    {
        title: 'Social Signup/Login',
        mainImg: 'imgs/social_signup_login_0.jpeg',
        description: 'The first meaningful contribution to SuddenlySpaces for me was the Social Signup/Login section of the Signup/Login pages at https://www.suddenlyspaces.com/ It was challenging but learned a lot! I used the Google and Facebook OAuth API to sign up or login users to @SuddenlySpaces using their Google or Facebook accounts. I then used PHP to format and store the information in the database.',
        pictures: ['imgs/social_signup_login_1.jpeg'],
        captions: ['Login page.']
    },
    {
        title: 'StudentEats Website',
        mainImg: 'imgs/studenteats_0.png',
        description: 'I  coordinated with 3 others remotely to build this website. We created a project charter, which we then proposed to the client and they offered suggestions and approved changes. I built the wireframes for the project charter, which are shown in the images. I contributed to the header and footer on the home page and made the Soft Shell Tacos page. The client was very pleased with our work. You can see the site here: https://sites.google.com/byui.edu/studenteats',
        pictures: ['imgs/studenteats_1.jpeg', 'imgs/studenteats_2.jpeg'],
        captions: ['Home page wireframe.', 'Recipes wireframe.']
    },
    {
        title: '3D Printing Website',
        mainImg: 'imgs/3d_printing_0.png',
        description: 'I wanted to create a website to educate and help beginners to 3D printing. I drafted up the wireframe and coded the website from scratch in HTML and CSS.',
        pictures: ['imgs/3d_printing_1.jpeg', 'imgs/3d_printing_2.jpeg', 'imgs/3d_printing_3.jpeg'],
        captions: ['Home page wireframe', 'Get started wireframe', 'Recommended printers wireframe']
    },
    {
        title: 'Pumphouse Monitor on a Raspberry Pi',
        mainImg: 'imgs/pumphouse_project_0.jpeg',
        description: "A project I made to monitor a pumphouse. The program runs on a Raspberry Pi located in the pumphouse. The Raspberry Pi had 3 sensors connected to it. One sensor connected to an air compressor that controlled valves. One to detect freezing temperature so that the water wouldn't freeze. The final sensor indicated that the pump was running. It sent emails to a specified account with information about the sensor that trips so that repairs can be made before damage. You can find it on my GitHub: https://github.com/isaacBullinger/pump_monitor_project",
        pictures: ['imgs/pumphouse_project_0.jpeg', 'imgs/pumphouse_project_2.jpeg'],
        captions: ['This is how the Raspberry Pi would connect to the sensors. The sensors would be normally open or closed and when triggered the email would be sent.', 'Email example sent from the Raspberry Pi']
    },
    {
        title: 'CLOCKWISE Software Engineering Bootcamp',
        mainImg: 'imgs/clockwise_0.jpeg',
        description: 'I participated in the CLOCKWISE Software Engineering Bootcamp in 2020. I helped conduct research to gather requirements and contributed to the CSS code of the project. I was studying Mechanical Engineering at the time. You can find it on my GitHub: https://github.com/clockwise-software/copper'
    }
]