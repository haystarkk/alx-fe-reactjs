# GitHub User Search

A React application to search GitHub users using the GitHub API.

## Features
- **Basic Search**: 
  - Search by GitHub username
  - View user profiles with avatars and basic info
- **Advanced Search**:
  - Filter by location (e.g., "Berlin")
  - Filter by minimum repository count
  - Combine multiple search criteria
- **Enhanced Results**:
  - Detailed user cards with bio, location, and repo count
  - Responsive design for all devices
  - Loading and error states

## API Endpoints Used
- Basic search: `GET https://api.github.com/users/{username}`
- Advanced search: `GET https://api.github.com/search/users?q={query}`
- User details: `GET https://api.github.com/users/{username}`

## Screenshots
![Basic Search](screenshots/basic-search.png) <!-- Add actual screenshot later -->
![Advanced Search](screenshots/advanced-search.png) <!-- Add actual screenshot later -->

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/alx-fe-reactjs.git
   cd alx-fe-reactjs/github-user-search
