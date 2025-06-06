# The-Residents-Book
The Residents Book is a simple, elegant one-page website where individuals can add themselves to a public-facing profile book by submitting a small form with their personal and social information

 # deployment link
 - backend:https://the-residents-book-7m8j.onrender.com
 - frontend:https://the-residents-book-vblk.vercel.app/
## Features

- ✅ View all current residents in a continuously scrolling horizontal list (top and bottom rows)
- ➕ Add yourself to the book via a modal form
- ✨ Smooth hover and fade-in animation effects on resident cards
- 📱 Fully responsive and mobile-friendly design
- 🔗 LinkedIn and Twitter profile support for each resident
- 💅 Custom styling with STIX Two Text and Manrope fonts
- 🔄 Hamburger menu for navigation on smaller screens
- 🛑 Form validation for required fields (First Name, Last Name, Title)

---
# Folder structure
![image](https://github.com/user-attachments/assets/7c3482cd-464a-4c29-8154-eac68f81e4cc)
![image](https://github.com/user-attachments/assets/a339df45-2679-496c-8f0b-04cc3699389d)




## Tech Stack

- **Frontend:** React.js, React Icons
- **Backend:** Node.js, Express.js (API endpoints)
- **Database:** MongoDB Atlas
- **Styling:** CSS (including animations and responsive design)
 ## API Endpoints

- `GET /residents`  
  Fetch all resident entries.

- `POST /residents`  
  Add a new resident with the following JSON payload:  
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "title": "string",
    "profilePhoto": "string (URL, optional)",
    "linkedin": "string (URL, optional)",
    "twitter": "string (URL, optional)"
  }
#  UI Components
## 🧭 Navbar
- Fixed top bar

- Hamburger menu toggle for smaller screens.

- Navigation links: Home, About Us, Add Resident (opens modal form), Donate, Inspire.

# 👤 Resident Cards
- Displayed in two horizontally scrolling rows.

- Each card includes:

- Profile photo (or default placeholder)

- Full name and title

- LinkedIn and Twitter icons (linked if URLs provided, disabled otherwise)

- Hover effect: zoom-in with background highlight.

- Fade-in animation on load.
# ➕ Modal Form
# Fields:

- First Name* (required)

- Last Name* (required)

- Title / Role* (required)

- Profile Photo URL (optional)

- LinkedIn URL (optional)

- Twitter URL (optional)

- Validates required fields.

- Submits new resident data to backend API.

- Closes form and resets on successful submission.



# 👣 Footer
- Branding and tagline on the left.

- Social media links with icons.

- Site navigation links.

- Copyright notice.

  # Screenshot
  # UI
![image](https://github.com/user-attachments/assets/93dc6b12-710b-4b9a-8280-c3983f08b1b6)
 # Navbar
 ![image](https://github.com/user-attachments/assets/c9aedc2d-21bc-47f3-ae44-e89ebe57a86b)
# Add resident form
![image](https://github.com/user-attachments/assets/7e8a7322-f49e-4b31-886d-01509b644799)
# Resident list
![image](https://github.com/user-attachments/assets/74e0c08a-94ea-4807-bc8a-1869269ade82)
# when hover the card zoom and background color change
![image](https://github.com/user-attachments/assets/66bd9288-1544-4017-ae5f-a95836e92357)

# Footer
![image](https://github.com/user-attachments/assets/d2c7460c-77fe-4220-8540-84f6652e1657)

# responsive
![image](https://github.com/user-attachments/assets/f2b4f1f4-b68a-4b9b-9658-c103c582d33f)
 # navbar
 ![image](https://github.com/user-attachments/assets/2978fbc2-51c3-4e67-95df-4122f01d41d9)
 # Navbar and footer
 ![image](https://github.com/user-attachments/assets/8aa178a4-66c5-48bd-98a3-a9c04012358f)
 # form
 ![image](https://github.com/user-attachments/assets/6d298285-bc1e-4682-bb24-5e020dcff000)











