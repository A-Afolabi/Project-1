# General Assembly Project 1 - Thanos Wins

## Project Overview

This was the first project I built on the Software Engineering Immersive course at General Assembly. The objective was to create a game in the browser using what we had learnt in the three weeks prior, HTML, CSS and JavaScript. The project was a solo one and had to be ready for presentation within 7 days.

I chose to do the classic Frogger game, but add my style and theme to it. The goal in Frogger is to get a family of frogs across a road and a river safely, to reach their homes at the top of the screen. The challenge comes with the numerous moving obstacles the frogs must avoid to reach their destination, as well as being time sensitive. 


## Deployed Project

[Thanos Wins](https://a-afolabi.github.io/Project-1/) 


## Brief:

* Render a game in the browser.
* Design logic for winning & visually display the result.
* Include separate HTML / CSS / JavaScript files.
* Stick with KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself) Principles.
* Use JavaScript for DOM manipulation.
* The game Should be playable for one player.
* The obstacles should be auto-generated.
* Playable online.


## Concept

After quickly settling on Frogger as my game of choice, I started to think about how I could add my theme and how it would work, following the same principles as frogger. This led me to an Avengers-themed game, but with a twist. In the movie Avengers Infinity War a few years ago, the Avengers are trying to stop Thanos from collecting all 6 infinity stones, which would allow him to cut the universe's population by half. In Thanos’s mind, this is fair as it is done at random and ‘rebalances’ the universe that has had its resources drained by overpopulation.

I took the same principle in this game, but the player is playing as Thanos and seeking the infinity stones at the top of the grid. Like frogger there would be obstacles, these being the Avengers (heroes) trying to stop him.


## Technologies Used

* HTML
* CSS
* JavaScript (ES6)
* Google Fonts
* Git & GitHub
* VS Code
* Excalidraw


## Approach Taken

### Days 1-2
#### Planning
Once the basic idea of the game was established, I began planning how the game would look and work. During this period, I started by listing out MVPs and stretch goals for the project. After doing so, I spent time on how I would go about each part and in what order. This consisted of creating the grid for the game and using a `div` to represent a part of the grid I could target. The reason for this was to avoid it becoming very intimidating, as it can be easy to look at the project as a whole and its enormity. By the end of these two days, I had a good idea of how I would be making my grid, and a visual representation thanks to the use of Excalidraw, on how it would work.

![Screenshot 2023-02-25 at 21 46 04](https://user-images.githubusercontent.com/95321738/221380986-5edd5c5f-515a-45ce-b55e-c1cbdda949e3.png)

### Day 3
#### Execution
The first point of action after doing a boilerplate in HTML was the grid. I decided to do an 11 x 11 grid where I would have a main grid wrapper `div` called `grid`. Within this `div`, I created 11 different `divs` that will represent the different levels, from the starting position of Thanos to the goal (infinity stone’s level) at the top of the screen.

After adding the 11 `divs` for each level, I began to separate them, giving them `classes`, and added an extra 10 `divs` (equalling 11), this represented each cell in the grid and gave me a visual representation of what is happening. I left some `divs` without `class` names where no obstacle would be and labelled the starting position of Thanos.

![Screenshot 2023-02-25 at 22 09 55](https://user-images.githubusercontent.com/95321738/221381764-6943844f-9b9a-4445-830b-5cf0be3e7b9a.png)

After adding some styling to the grid and giving them more `class` names, I could see what the page would look like with the character and the targets at opposite ends of the screen.

![Screenshot 2023-02-25 at 22 12 06](https://user-images.githubusercontent.com/95321738/221381837-20598e63-fa21-4642-abc4-5d950e8f484c.png)

After this visual representation was seen, I was able to add the obstacles (heroes) for each level. To do this I used `divs`, as mentioned above, and targeted parts of the grid I wanted the obstacles to be in. This would be fixed, but with the plan of them being moving obstacles.


### Day 4-5
#### JavaScript
I used `querySelector` to target `spans` with matching `id`, and also target all the `divs` in our grid.

![Screenshot 2023-02-25 at 22 13 47](https://user-images.githubusercontent.com/95321738/221381898-43f6ed2b-b4b7-4e45-9703-9fc84850d5ec.png)

Once this was done, I went on to create a function that enables the player to move Thanos on the grid. This function listens for any of the specific `keydown` buttons to be clicked. For this, I used the `keycode`.

![Screenshot 2023-02-25 at 22 15 37](https://user-images.githubusercontent.com/95321738/221381975-81f6933e-ebbe-4e33-8536-db674c043d54.png)

This allows me to see what `keycode` responds to a certain direction and add that into my code as shown below:

![Screenshot 2023-02-25 at 22 17 57](https://user-images.githubusercontent.com/95321738/221382054-45e46b4c-9b40-4d79-ba61-c14551d84719.png)

After establishing what each relevant button on our keyboard will do, I translated that into code for moving Thanos. With the use of an `If Statement`, depending on what is pressed and the current position of the player, the action will be executed. This `if statement` allowed me to stop the player from moving out of the grid, by checking the current position cell position.

![Screenshot 2023-02-25 at 22 18 52](https://user-images.githubusercontent.com/95321738/221382087-e2bc191b-9ea0-46ec-9436-8833f05f45b8.png)


### Day 5-6
#### Moving Obstacles
For our heroes to now be effective but also present gaps in each obstacle level, I labelled the divs with an L or R, depending on the direction they were going in. I also gave them numbers so I can target a specific `div` and add the obstacles to that number, leaving the others within the level clear for the player to try to move through.

![Screenshot 2023-02-25 at 22 21 55](https://user-images.githubusercontent.com/95321738/221382189-faa02171-8fd1-470f-b20f-4003c988fd98.png)

Inside CSS, I then targeted the numbers I wanted the obstacles in, before moving on to the function needed to ensure the obstacles stop the player.

Using the `DOM` to target everything with `.ironman-left`, then I made a function that would move all the `Ironman-left`, passing through the `ironmanLeft` function. This then allowed me to use control flow with an `if statement` to remove a cell and replace it with the next one, giving the impression the objects are moving to the left.

![Screenshot 2023-02-25 at 22 25 30](https://user-images.githubusercontent.com/95321738/221382319-45e90914-3c64-4de6-8199-58b0e94727f0.png)

Finally, for this to work I implemented a `setInterval` to check every second, moving each Ironman to the left every second.

![Screenshot 2023-02-25 at 22 26 40](https://user-images.githubusercontent.com/95321738/221382354-bef1c95d-ed80-4a70-9021-1eed8a347c0d.png)

When a player hits an obstacle, they die. For this to work, I created a function that will depend on Thanos's current position. If it is in a cell with any of the heroes, a message will appear (from the movie), indicating the player has lost.

![Screenshot 2023-02-25 at 22 28 26](https://user-images.githubusercontent.com/95321738/221382410-5ee38cc7-1e02-4995-9669-fe4ceb81acd9.png)

This was similar to if the player reaches an infinity stone, both coming under another function with a `setInterval` always to check.

![Screenshot 2023-02-25 at 22 29 38](https://user-images.githubusercontent.com/95321738/221382468-56526ff5-a4b6-4218-90f6-4b151d3e448d.png)


### Day 7
#### Styling
The last day of the project was spent styling. Keeping this day clear for just styling allowed me to limit the number of features I wanted to implement during the project but were simply not possible within the timeframe. I found this very valuable throughout the week and it helped me move forward, rather than trying to add too much.

Before deploying the project I spent a little more time on styling. This was to improve the overall presentation, with the single day I planned for it at the end of my project originally planned to do so, only making the project look visually ok, but not satisfying me.


## Bugs

* Stopping some of the heroes from moving when the game has finished.
* `setInterval` when trying to implement difficulty levels quickly.


## Wins

* Breaking down the problems into tiny tasks and not overthinking the grand scheme of the project.
    * Looking at the project as a whole was very daunting until I did this. Although this was still a work in progress at the time, I found myself using a 3-4 step method to help with this.
        1. Understand the problem
        2. Break the problem down into small chunks
        3. Convert each step into code.
        4. Execute and debug code
            * This sometimes meant going line by line.
* Overall presentation and working ability of the game.
    * As already stated, I spent some time after the project working on the visual look of the game. Although it is not where I completely want it to be, I am pleased with how it currently looks.
* Adding music.
    * Adding `DOM audio` was something I initially struggled with. But during the project, I managed to see I was simply making the mistake over and over again. This was from where I was putting the `playsAudio()` function to execute it.


## Challenges

* Implementing different timings for the `setIntervals`.
    * The problem I was having was trying to use the same `setInterval` for all of my timing events. Once I realised this, I was able to get them working.
* Trying to get all of the features I expected done within the timeframe.
    * Something that became apparent to me was trying to add more features as I started building the project. It was difficult to limit ideas, as the more I added, the less time it allowed me to do some of the MVPs I had already planned.


## Key Learnings

* `DOM` manipulation - Getting the first of my `querySelectors` working as intended was very confidence-inducing.
* Not being afraid to go back over some JavaScript fundamentals to get a better understanding of how I will execute things using logic.


## Future Features

* Adding more levels so the game does not finish once reaching an infinity stone, but rather when all of them have been collected.
* Increasing the speed each time a stone is reached and reducing time.
* Add instructions.
* Screen responsiveness.



