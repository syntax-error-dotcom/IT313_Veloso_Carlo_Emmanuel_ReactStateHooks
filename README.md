# Welcome To IT313_Veloso_Carlo_Emmanuel_ReactStateHooks!

## Problem
Your lab instructor wants a small screen students can use during laboratory sessions to track how many practice problems they've solved and how long they've been working. Your task is to build this screen as a small Expo/React Native project, in the style of a real study-tracking utility.


## Approach

For this lab, I created a folders to separate the js files to make it more organized -- components, hooks, pages, folders. I coud've have put the useStopwatch.js in the component folder but I noticed that the 2 components files have returned UI's while the hook's file is pure logic only, so thats where I just end up with separating them. the LabScreen is in the pages folder, where all are displayed there.

src/components/PracticeTracker.js
src/components/Stopwatch.js
src/hooks/useStopwatch.js
src/pages/labScreen.js

## Implementation Steps

I did a Bottom-Up Approach in here, so I started working on with the child or rather the the small UI pieces first and then the hook, and do the labScreen (the parent) for last, my reasoning? just preference, I think I like building the small components first then combined them later on.


for this lab problem, I Build the 

### Stopwatch.js
its job is to show the timer, it formats and displays the time UI , it has even converter  formatTime, its like when the second reaches above 60 second it would turn into 00:00

### useStopwatch.js
responsible for handling/tracking the time, it initializes a second state starting at 0., it has the useEffect hook to set the timer (setInterval), and it also ticks every 1000ms just like the instructions given or rather how just seconds comes by.


### PracticeTracker.js
responsible for the tracker how many (the student) had solved, and also contains the Solve+1 and Reset Button in here, which would reset the solved to 0, and also it has a conditional where if the solved are 5 or more, then it would display a "Great Job"

### labScreen
this is where it gets display everything, Soptwatch and PracticeTracker are children that take the data fed by labScreen. and also render the user interface.



## HOW TO RUN

### Requirements
- [Node.js](https://nodejs.org/) (LTS version) installed
- **Expo Go** app on your phone (Play Store / App Store), or an Android emulator / iOS simulator

### Steps
1. Clone the repository:
```bash
   git clone https://github.com/YOUR-USERNAME/IT313_Veloso_Carlo_Emmanuel_ReactStateHooks.git
```
2. Go into the project folder:
```bash
   cd IT313_Veloso_Carlo_Emmanuel_ReactStateHooks
```
3. Install the dependencies:
```bash
   npm install
```
4. Start the Expo development server:
```bash
   npx expo start
```
5. Open the app:
   - **On your phone:** open Expo Go and scan the QR code shown in the terminal (Android: scan inside Expo Go; iOS: use the Camera app). Your phone and computer must be on the **same Wi-Fi network**.
   - **On an emulator:** press `a` in the terminal for the Android emulator, or `i` for the iOS simulator.

### Using the app
- **Solve +1** adds to the solved counter. At 5 or more, "Great job!" appears.
- **Reset** sets the counter back to 0 (it does not affect the timer).
- **Start** begins the timer and **Stop** freezes it.



