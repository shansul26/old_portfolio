---
title: MeterMaid
summary: A mobile application concept to facilitate the sharing of vacant driveways.
layout: portfolio-redux
team: 4 students
duration: 4 weeks
role: UX Researcher & Designer
hero-image-path: "/img/MeterMaid/metermaid-icon.png"
hero-image-background: "#32B67A"
overview: This is a project I worked on for my Interaction Design Studio class at Carnegie Mellon University. My team was responsible for designing a mobile application to provide a service to a particular audience.<br/><br/>After receiving a problem with a primary and secondary persona, we rapidly conducted guerrilla research to gain additional insights into the problem space, and iterated on a mobile application design.<br/><br/>Our final deliverables were a click-through InVision prototype, a presentation explaining our insights into the problem space as well as how our application addresses them, and a professionally prepared document detailing our process.
final-solution-media: <img class="portfolio-img" src="../img/MeterMaid/MeterMaid-Final-Screens.png">
final-solution-link: https://invis.io/C69BWXR45
scope :
    - text: 4 people
    - text: 4 weeks
roles:
    - text: User Researcher
    - text: UX Designer
skills:
    - text: Surveys
    - text: Interviews
    - text: Storyboarding
    - text: Interaction design
    - text: Visual design
sections:
    - text: Need
      id: need
    - text: Solution
      id: solution
    - text: Process
      id: process
    - text: Next Steps
      id: next-steps
---

<div id="need" class="portfolio-section">
    <h1>Need</h1>
    <p>Parking is expensive and difficult to find, yet <a href="http://freakonomics.com/podcast/parking-is-hell-a-new-freakonomics-radio-podcast/">some sources</a> indicate that around 3 parking spaces exist for every car.</p>
    <p>How can a resource seem scarce, yet actually be so abundant?</p>
    <p>One contributing factor is that some spaces can only be utilized by a specific person, like a driveway at someone’s house. When the homeowner is away, their driveway is unoccupied, making it an unutilized resource. Is it possible to make these exclusive resources available to others when their primary owner is not using them? And why doesn’t this happen now? One contributing factor is that there is a mutual lack of trust between the person with the driveway and the person looking for parking.</p>
</div>

<div id="solution" class="portfolio-section">
    <h1>Solution</h1>
    <p>MeterMaid is a mobile application that enables homeowners to capitalize upon their open driveway space by connecting with drivers seeking convenient and affordable parking. We designed it specifically to <b>facilitate trust</b> between the two parties, particularly on the homeowner’s side by enabling them to monitor their property in the application, report inappropriate or malicious behavior, and filter out and block certain users.</p>
</div>

<div id="process" class="portfolio-section">
    <h1>Process</h1>
    <div id="personas" class="portfolio-sub-section">
    <div class="section-header"><img src="{{page.hero-image-path}}"></div>
    <h2>Personas</h2>
        <p>At the beginning of the project, we received two personas: one for the person who wants to make money off of their unoccupied driveway and another who is looking for more affordable parking.</p>
        <div class="row">
            <div class="col-sm-6"><img class="portfolio-img" src="../img/MeterMaid/persona-madeline.png"></div>
            <div class="col-sm-6"><img class="portfolio-img" src="../img/MeterMaid/persona-rebecca.png"></div>
        </div>
    </div>
    
    <div id="ecosystem-collection" class="portfolio-sub-section">
        <div class="section-header"><img src="{{page.hero-image-path}}"></div>
        <h2>Ecosystem Collection</h2>
        <p>After examining the personas and problem statement, we conducted an Ecosystem Collection where we discussed what we know about the parking domain, discussed what we don’t know, and defined the critical questions to explore.</p>
        <img class="portfolio-img" src="../img/MeterMaid/ecosystem-collection.png">
        <p>From the ecosystem collection, we determined that we should focus on understanding what the current experience is for people looking for parking as well as understanding the factors that go into successful crowd-sharing platforms such as Uber, AirBnB, and eBay, particularly how they build trust between their users.</p>
        <p>With this goal in mind, we specified several research objectives:</p>
        <ol>
            <li>To gain a more complete understanding of the context in which people look for parking and what they prioritize (proximity, cost, etc.).</li>
            <li>To understand the existing choices for parking and how they operate.</li>
            <li>To understand the trust mechanics of existing resource sharing services (e.g. AirBnB, Uber) and to understand what led current users to trust these services.</li>
        </ol>
    </div>
    
    <div id="survey" class="portfolio-sub-section">
        <div class="section-header"><img src="{{page.hero-image-path}}"></div>
        <h2>Survey</h2>
        <p>To address the first two research objectives, we developed a short survey on Google Forms and distributed it on social media. Respondents answered questions such as how frequently they use public parking, what is important to them when finding parking, and how long it took them to find a spot to park in the last time they used public parking.</p>
        <img class="portfolio-img-redux" src="../img/MeterMaid/google-survey.png">
        <div style="height:2.75rem;"></div>
        <p>We distributed the survey to our social networks and received 23 responses in total. After reviewing the results, we noticed a few interesting patterns:</p>
        <ul class="portfolio-body-list">
            <li>Several respondents remarked that it is currently very difficult to find available parking and to know the price of parking in advance when using navigation applications such as Google Maps.</li>
            <li>Of the people who took the survey, most indicated that <b>safety is the most important aspect</b> when considering parking, followed by availability/ease of parking. Surprisingly, they said <b>price was the least important</b>, which contradicts the information from our personas (Rebecca doesn’t want to pay the high fees for parking her car in a lot near the hospital) as well as what the <a href="http://freakonomics.com/podcast/parking-is-hell-a-new-freakonomics-radio-podcast/">Freakonomics podcast</a> indicated, where people in will spend more time driving around looking for a spot that they do not have to pay for.</li>
        </ul>
        <img class="portfolio-img-redux" src="../img/MeterMaid/survey-results.png">
        <div class="image-caption">Most participants seem to rank availability and safety of parking over affordability.</div>
    </div>
    
    <div id="interviews" class="portfolio-sub-section">
        <div class="section-header"><img src="{{page.hero-image-path}}"></div>
        <h2>Interviews</h2>
        <p>To address the second research objective of understanding existing choices for parking, we explored the various parking options in Pittsburgh and reached out to several landlords who handle parking. Of the individuals we reached out to, only one responded. We visited that one person and conducted a brief one-hour interview.</p>
        <p>The parking lot manager we interviewed manages a space with both public and lease parking. One of her biggest challenges include maintaining a good level of public parkers to optimize revenue while also guaranteeing any leaseholder is able to find parking. Another challenge is being unable to contact public parkers who have unknowingly parked in an off-limits space; often she has to have their car towed as a result.</p>
    </div>

    <div id="literature-review" class="portfolio-sub-section">
        <div class="section-header"><img src="{{page.hero-image-path}}"></div>
        <h2>Literature Review & Analogous Domain Analysis</h2>
        <p>Regarding the third research objective of how other resource-sharing services build trust between users, we conducted a literature review and conducted informal interviews with Uber drivers. While riding in an Uber around the city, we had a casual conversation with our drivers about what  incentivized them to get started and how Uber protects them and their assets.</p>
        <p>From this, we had several interesting findings:</p>
        <ul class="portfolio-body-list">
            <li>A positive first experience with the application - On AirBnB, if a host cancelled their reservation right before their trip, their retention rate drops 26%; intervention by customer support almost entirely negates this loss — retention rebounds up from 26% to less than 6%. (http://airbnb.design/designing-for-trust/)</li>
            <li>Ratings System - On AirBnB, hosts with ten or more ratings are ten times more likely to get booked.</li>
            <li>Trustworthy profile page - In nearly 50% of trips with AirBnB, guests view a host’s profile at least once, and 68% of these views occur before booking. These profiles are especially important for new Airbnb users, who are 20% more likely to visit a host’s profile before booking compared to someone who has used AirBnB before.</li>
            <li>Good support system from the application - Most of the Uber drivers that we interviewed said that they were trusting of the Uber/Lyft Model because they knew that if something went wrong, Uber would mediate and take care of the situation</li>
            <li>Some ridesharing applications provide more support for drivers than others. For example, before a driver can begin taking passengers using Lyft, a representative comes to their home to verify their information, confirm that their vehicle is up to code, and assists the driver in setting up a profile. Uber takes a more hands-off approach, requiring drivers to register through the app while offering very little support.</li>
        </ul>
    </div>

    <div id="exploratory-scenarios" class="portfolio-sub-section">
        <div class="section-header"><img src="{{page.hero-image-path}}"></div>
        <h2>Exploratory Scenarios</h2>
        <p>After wrapping up our research, we starting conceptualizing some initial scenarios and ideas for MeterMaid. We wanted to address users’ needs of trust and make sure that we were building the best possible experience for both personas.</p>
        <p>When writing our initial scenarios, we paid special attention to edge cases, such as bad behavior from the driveway owner and the parker, to ensure that our application could handle critical moments where our users might lose trust. Questions we asked ourselves included:</p>
        <ul class="portfolio-body-list">
            <li>What happens when drivers do not come back for their car on time?</li>
            <li>How does a user book parking? Is it on demand? Are users allowed to schedule times for their bookings?</li>
            <li>How does a driveway owner cancel booking?</li>
            <li>How does a driveway owner handle harassment?</li>
            <li>How does the service handle different sized driveways?</li>
            <li>What security measures are in place to make sure that people do not use this service for robbing houses?</li>
        </ul>
        <img class="portfolio-img-redux" src="../img/MeterMaid/exploratory-scenarios.png">
    </div>

    <div id="storyboarding" class="portfolio-sub-section">
        <div class="section-header"><img src="{{page.hero-image-path}}"></div>
        <h2>Storyboarding</h2>
        <p>We started with 21 initial scenarios. From those 21, we picked 3 to flesh out and explore with storyboards. The purpose of these storyboards was to help us understand the contexts in which users might be performing actions as well as the order in which they would take those actions.</p>

        <p>I focused on the storyboards pictured below, which depict the ideal case for how someone loaning out their driveway might use the application on a daily basis.</p>
        <img class="portfolio-img" src="../img/MeterMaid/storyboard.png">
    </div>

    <div id="wireframe-sketches" class="portfolio-sub-section">
        <div class="section-header"><img src="{{page.hero-image-path}}"></div>
        <h2>Wireframe Sketches</h2>
        <p>After making several storyboards depicting the several uses of MeterMaid, we started making wireframes for the application, focusing on the experience for the person renting out their driveway.</p>
        <p>We initially decided to break the application’s functionality down into five main components: scheduling, earnings, history, profile editing, and settings. The driveway owner should get an overview of everything that has happened in a main landing page.</p>
        <p>I focused on creating sketches for the earnings and history feature. When doing these initial sketches, I wanted to give the owner a clear understanding of how much income they are making off of their participation in the service. I thought this would be important for their budgeting and also for <b>communicating the value</b> they get out of participating in the service.</p>
        <img class="portfolio-img" src="../img/MeterMaid/earnings-wireframes-1-of-2-v1.png">
        <p>I did several initial sketches, exploring different options for visualizing the information (bar chart versus line chart) and the details users can navigate. The application should have a good balance of simplicity and useful information.</p>
        <p>The history page was more straightforward. The owner should be able to see a comprehensive list of who parked in her driveway and for how long. She should also be able to see more information about the parker and report any inappropriate behavior.</p>
        <img class="portfolio-img" src="../img/MeterMaid/earnings-wireframes-2-of-2-v1.png">
        <p>After meeting as a team to review each component of the application, we proceeded to digitize our wireframes and create higher-fidelity screens, which we presented to the class for feedback.</p>
        <img class="portfolio-img" src="../img/MeterMaid/First-Iteration-Screens.png">
    </div>

    <div id="feedback" class="portfolio-sub-section">
        <div class="section-header"><img src="{{page.hero-image-path}}"></div>
        <h2>Feedback, Modifications, and Final Touches</h2>
        <p>When we presented our application concept to the class, the biggest point of feedback we received was that it might be helpful to add more functionality to <b>support trust</b> for the driveway owner.</p>
        <p>We considered this feedback and decided to add a feature where the driveway owner can check in on their property by viewing a live feed. We theorized that the MeterMaid service could provide the installation of such equipment for the driveway owner, possibly in partnership with an existing security company. Much like existing resource sharing applications like Lyft, this would require someone from the company to physically go to the owner to both install the equipment and ensure that the property fits the service standards.</p>
        <p>After agreeing to add this concept, we made adjustments to the driveway owner’s screens. We placed the button to view the live feed very prominently so it would be easy for owners to check.</p>

        <img class="portfolio-img" src="../img/MeterMaid/MeterMaid-Final-Screens.png">

        <p>Finally, we added some animations using <a href="http://principleformac.com/">Principle</a> to better simulate the interactivity of the application and add aspects of joy. I worked with one of my teammates to create the animation for when the graphs first load in the application.</p>

        <div class="row">
            <div class="col-sm-6"><img class="portfolio-img" src="../img/MeterMaid/final_animation_today.gif" style="border: 0.5rem solid #000000"></div>
            <div class="col-sm-6"><img class="portfolio-img" src="../img/MeterMaid/history_earnings.gif" style="border: 0.5rem solid #000000"></div>
        </div>

        <p>We combined these animations with our concept screens to create the final <a href="https://invis.io/C69BWXR45">click-through inVision prototype</a>.</p>
    </div>
</div>

<div id="next-steps" class="portfolio-section">
    <h1>Next Steps</h1>
    <p>This was a four-week project where we rapidly went from research to a fleshed out prototype. There were steps we could take to validate our design decisions that we did not have the time or the resources to pursue.</p>
    <p>For example, when designing an application concept, it is a good idea to conduct usability tests with target users along the way, both to validate that the design is something they would use and that it is something they would understand.</p>
    <p>If we were to conduct more tests to vet our designs, the next step would be to make adjustments based off of feedback and then go into development.</p>
</div>