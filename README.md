Title – CourseforAll 
Description: An Education Platform that aggregates courses from various multiple course platforms and is an unified platform to find courses and learning material primarily of the Computer Science Domain. 

Features: 

1. A platform to allow users to register and save their learning progress.
2. A dashboard to show the courses taken and the progress made in them (YT courses).
3. The youtube playlist will be displayed as courses and the videos as chapters with integrated player.
4. The course cards from other platforms (udemy etc) will direct them to the respective course website to continue. 
5. A note-taking feature to allow users to take notes of lectures and store them.
	5.1 – Timestamped Notes and when rewatching, the notes appear at that timestamp.
	5.2 - Lecture Notes – not Timestamped
	5.3 –  Overall Course Notes. 
6. Categorizing of courses into a number of pre-defined domains/categories.
7. Searching and filtering features to search/filter courses by the name, category, channel(YT), Tutor, Platform, difficulty, Time to complete etc.
8. Authentication and Profile customization.
 Additional Features : 
1.	To recommend customized courses similar to the courses taken by user on the Home page. 
2.	The commenting/rating feature on courses .



Tech Stack : 

Frontend – React.js
Backend – Node.js + Express.js 
Database – MongoDB
Auth – Clerk / Google Auth
Designing – Tailwind CSS
API’s – Gemini, Youtube, Udemy
Caching – Redis 
Media Storage – Cloudinary 
Deployment – TBD


Data Models : 
	User  
	Course 
	Video/ Chapter
	CourseProgress
	Notes

Note:
	Course -> List (Chapters)
	
 




