# Soft166Practice
Practice for my soft 166 module

#### Sources
RockYou password list - https://www.kaggle.com/wjburns/common-password-list-rockyoutxt<br>
Common words list - https://gist.github.com/deekayen/4148741<br>
Bootstrap - https://getbootstrap.com/<br>
jQuery - https://jquery.com/

#### Youtube video

#### Application screenshots
##### Index page
![Image of index page](https://github.com/creaseaj/Soft166Practice/blob/master/screenshots/ScreenshotIndex.png)
##### Lights page
![Image of lights page](https://github.com/creaseaj/Soft166Practice/blob/master/screenshots/ScreenshotLights.png)
##### About page
![Image of about page](https://github.com/creaseaj/Soft166Practice/blob/master/screenshots/ScreenshotAbout.png)
##### Key page
![Image of key page](https://github.com/creaseaj/Soft166Practice/blob/master/screenshots/ScreenshotKey.png)
#### Application Fact Sheet
This application is designed to act as a password strength checker that uses the philips hue lights api to control philips hue bulbs. 
This application contains 4 pages: Index, Lights, About, and Key.<br>
The pages are designed using the same nav bar and card divs to give a uniform look. All the cards are the same width so that there is a more consistent feel throughout the website.
The cards have all been designed with shadow and bg-light to help provide focus to the foreground.
This application has 3 main features:
- Ability to control Philips Hue lights
- Password strength checker
    - Function designed to search arrays created from word lists
##### Index
Index is the main page and provides access to the other pages while providing a brief explanation of their purpose.
##### Lights
Lights is the password strength checker and has the ability to change the colour of the lights. This contains 6 requirements to be met by the user for all 6 lights to be turned on.
Once all 6 requirements have been met, the lock icon next to the input box will also be locked and turned green.
##### About
About is designed to show and explain the JavaScript functions used. This also contains the disclaimer disclaiming responsibility for misuse of the application.
##### Key
Key provides indication for the lights and what they mean. This also shows what the colours mean as well. 
#### Evidence of multiple browser testing
These tests are screenshots of the webpages with the input boxes empty, and then with a password given which meets the input requirements.
##### Chrome Tests
![Chrome test with full password](https://github.com/creaseaj/Soft166Practice/blob/master/screenshots/ScreenshotBrowserChromePasswordMet.png)
![Chrome test with empty password](https://github.com/creaseaj/Soft166Practice/blob/master/screenshots/ScreenshotBrowserChromePasswordUnmet.png)
##### Firefox tests
![Firefox test with full password](https://github.com/creaseaj/Soft166Practice/blob/master/screenshots/ScreenshotBrowserFirefoxPasswordMet.png)
![Firefox test with empty password](https://github.com/creaseaj/Soft166Practice/blob/master/screenshots/ScreenshotBrowserFirefoxPasswordUnmet.png)
#### Evidence of web accessibility testing and results
This will be a comparison against the Web Content Accessibility Guidelines (Quick Reference) as shown [here](https://www.w3.org/WAI/WCAG21/quickref/)<br>
1. Perceivable
    1. Text Alternatives<br>
        All non text items have an alt attribute to meet the requirement.
        ![Image showing text alternatives]()
    2. Time Based Media<br>
        There is no time based media in this application.
    3. Adaptable<br>
        The use of bootstrap allows the application to be viewed on different devices and at different orientations. It is also simply structured meeting the requirements.
        ![Image showing application in desktop view]()
        ![Image showing application in mobile device view]()
    4. Distinguishable<br>
        Color is not solely used to represent information and there is distinct contrast between background and foreground.<br>
        Use of this is demonstrated within the application screenshot of the lights page.
2. Operable
    1. Keyboard Accessible<br>
        The website can be navigated using the keyboard and input boxes can be left using the keyboard. 
    2. Enough Time<br>
        There are no timing elements in this applicaiton.
    3. Seizures and Physical Reactions<br>
        The application contains no content that will cause seizures or physical reactions against the guidelines.
    4. Navigable<br>
        The applications has page titles and allows for navigation within the webpage compared against the guidelines.<br>
        Use of page titles is demonstrated within multiple browser testing, due to the view of the tab aswell as the navbar view.
    5. Input Modalities<br>
        The application supports the functionality required in the guidelines for this section.
3. Understandable
    1. Readable<br>
        Common english words are used in the application and is of a low reading level.
    2. Predictable<br>
        Navigation methods are consistent and changes of context are not initiated unexpectedly.<br>
        The application screenshots section demonstrates this with the same navbar being used throughout the application
    3. Input Assistance<br>
        No error correction is provided because a password is expected and is not required to be in a specific format.
4. Robust
    1. Compatible<br>
        No status messages are provided, elements are complete, and roles can be programmatically determined.
