Build a basic frontend for an open-source **Student Community Platform** designed for college students.

## Goal

Create a clean, practical, modern student platform where students can discover projects, hackathons, events, clubs, internships, learning resources, notes, open-source opportunities, and discussions.

The UI should look like a real student/developer community product — **not like an AI-generated landing page**.

Avoid excessive gradients, glassmorphism, huge rounded cards, unnecessary animations, 3D elements, or overly polished startup-style visuals.

## Tech Stack

Use:

- React
- Vite
- JavaScript
- React Router
- CSS or CSS Modules
- Lucide React for icons

Do NOT build a backend yet. Use static/mock data.

Structure the code so a backend/API can easily be connected later.

## Main Pages

Create these pages:

1. Home
2. Projects
3. Hackathons
4. Events
5. Clubs
6. Resources
7. Internships
8. Notes
9. Open Source
10. Discussions
11. Student Profile
12. About

## Navigation

Create a consistent navigation bar.

Desktop:

```text
[Logo]   Home   Projects   Hackathons   Events   Clubs
         Resources   Internships   Open Source   Discussions

                                      Search   [Profile]
```

On smaller screens, convert the navigation into a mobile menu.

## Home Page

Create a simple dashboard-style homepage.

Hero section:

```text
Build. Learn. Connect.

A community for students to discover opportunities,
work on projects, join communities, and contribute
to open source.

[Explore Projects] [Find Opportunities]
```

Below the hero, show:

### Explore

Cards for:

- Projects
- Hackathons
- Events
- Clubs
- Internships
- Resources
- Notes
- Open Source

### Featured Projects

Display 4–6 project cards.

Each card should contain:

- Project title
- Short description
- Technologies
- Difficulty
- Contributors
- GitHub button

Example:

```text
Campus Connect

A platform for students to discover
campus events and communities.

React  Node.js  PostgreSQL

12 Contributors

[View Project]
```

### Upcoming Hackathons

Show a horizontal list or grid containing:

- Hackathon name
- Date
- Location / Online
- Registration status
- Registration button

### Upcoming Events

Show:

- Event title
- Date
- College/organization
- Location

### Open Source Opportunities

Show issues/opportunities that students can contribute to.

Example:

```text
Improve mobile navigation

Repository: StudentHub

Labels:
good first issue
frontend
react

Difficulty: Beginner

[View Issue]
```

## Projects Page

Create a project discovery page.

Top:

```text
Student Projects

Discover projects created by students.

[Search projects...]
```

Add filters:

- Technology
- Difficulty
- Category
- Open for contributors
- Number of contributors

Project cards should display:

- Project name
- Description
- Technologies
- Owner
- Contributors
- Status
- GitHub link

Add pagination or a "Load More" button.

## Hackathons Page

Create a hackathon listing page.

Filters:

- Online / Offline
- Upcoming / Completed
- Technology
- Team size

Each hackathon card:

```text
Hackathon Name
Short description

📅 Date
🌐 Online
👥 Team size

[View Details]
```

## Events Page

Create an events page for:

- Workshops
- Tech talks
- Club events
- Webinars
- Meetups

Include search and category filters.

## Clubs Page

Create a student club directory.

Categories:

- Coding
- AI/ML
- Robotics
- Design
- Entrepreneurship
- Cultural
- Sports
- Other

Club cards should contain:

- Club logo/avatar
- Club name
- College
- Description
- Members
- Category
- Join button

## Resources Page

Create a resource library.

Categories:

- Programming
- Data Science
- AI/ML
- Web Development
- Electronics
- Interview Preparation
- Competitive Programming
- Career

Each resource should have:

- Title
- Description
- Type
- Technology/category
- Author
- External link

## Internships Page

Create an internship discovery page.

Include:

- Company
- Role
- Location
- Remote/On-site
- Duration
- Skills
- Application deadline

Add filters and search.

## Notes Page

Create a simple student notes-sharing page.

Users should be able to browse notes by:

- Subject
- Semester
- Branch
- University

Each note card:

```text
Data Structures

B.Tech CSE
Semester 3

PDF
Uploaded by StudentName

[View Notes]
```

## Open Source Page

This should eventually become one of the major sections of the platform.

Show:

- Open-source projects
- Beginner-friendly issues
- Good first issues
- Hacktoberfest-style opportunities
- Contribution guides
- Repositories

Example:

```text
StudentHub

Open-source student community platform.

⭐ 128
Forks 34

Issues suitable for beginners:

✓ Improve navbar responsiveness
✓ Add project search
✓ Add dark mode
✓ Improve accessibility

[View Repository]
```

## Discussions Page

Create a simple community discussion interface.

Categories:

- General
- Programming
- Projects
- Career
- AI/ML
- Internships
- Open Source
- College Life

Show discussion cards containing:

- Title
- Author
- Category
- Replies
- Views
- Last activity

Add:

```text
[ + Start Discussion ]
```

## Student Profile Page

Create a profile page containing:

```text
Profile Photo
Name
College
Branch
Year

Bio

Skills

Projects

Contributions

Hackathons

Events

GitHub

LinkedIn
```

Include contribution statistics similar to GitHub.

Example:

```text
Contributions

2026

████████████████
████████████
██████████████████

124 contributions
```

## Visual Design

Use a clean developer/student-oriented design.

Preferred style:

- White/light background
- Dark text
- One primary accent color
- Subtle borders
- Small shadows
- Moderate border radius
- Clear typography
- Plenty of whitespace
- Simple icons
- Responsive layout

Do NOT use:

- excessive gradients
- glassmorphism
- neon effects
- excessive animations
- giant typography
- floating 3D objects
- AI-generated-looking illustrations

The website should feel like a **real open-source product**, not a marketing template.

## Responsive Design

The website must work on:

- Desktop
- Laptop
- Tablet
- Mobile

Use responsive grids and mobile navigation.

## Component Architecture

Create reusable components such as:

```text
components/
├── Navbar
├── Footer
├── SearchBar
├── FilterBar
├── ProjectCard
├── HackathonCard
├── EventCard
├── ClubCard
├── InternshipCard
├── ResourceCard
├── NoteCard
├── DiscussionCard
├── OpportunityCard
├── ProfileCard
└── Pagination
```

Use reusable data-driven components instead of duplicating markup.

## Mock Data

Create separate mock data files:

```text
data/
├── projects.js
├── hackathons.js
├── events.js
├── clubs.js
├── internships.js
├── resources.js
├── notes.js
├── discussions.js
└── opportunities.js
```

This is important because later contributors should be able to replace mock data with API calls without rewriting the UI.

## Routing

Use React Router.

Routes:

```text
/
/projects
/hackathons
/events
/clubs
/resources
/internships
/notes
/open-source
/discussions
/profile
/about
```

## Developer Experience

Create a clean project structure:

```text
src/
├── components/
├── pages/
├── layouts/
├── data/
├── assets/
├── hooks/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

Add a README containing:

- Project description
- Features
- Tech stack
- Installation instructions
- Development commands
- Project structure
- How to contribute

Make the frontend easy for new open-source contributors to understand.

## Important

Do not implement authentication, database, backend APIs, payments, or real-time messaging yet.

Focus on creating a **functional frontend prototype with realistic mock data**.

Every page should actually work through navigation.

The final result should look like the first MVP of a real open-source student community platform that can later be expanded by dozens or hundreds of contributors.