# Admin Dashboard

This repository contains a React.js application for an Admin Dashboard that allows users to view, search, edit, and delete user records. The application implements a user interface based on the provided requirements. Please refer to the image in the root directory for a visual representation.

## Features

1. **Column Titles Standout:** The column titles are designed to stand out from the entries, providing clarity and easy identification.

2. **Search Bar:** A search bar is provided at the top, allowing users to filter records based on any property. The search is dynamic and updates the displayed records accordingly.

3. **Edit and Delete Rows:** Users can edit or delete rows in place. Note that these changes are expected to be in-memory only and are not persisted.

4. **Pagination:** Pagination is implemented with each page containing 10 rows. Navigation buttons at the bottom allow users to jump to any page, including specific buttons for the first page, previous page, next page, and last page. Pagination updates dynamically based on search/filtering.

5. **Row Selection:** Users can select one or more rows, with selected rows highlighted in a grayish background color. Multiple selected rows can be deleted at once using the 'Delete Selected' button.

6. **Select/Deselect All:** A checkbox at the top-left serves as a shortcut to select or deselect all displayed rows on the current page.

7. **Placeholder and Search Icon:** The search box has a placeholder text starting with "Search," and the search can be triggered by pressing ENTER or clicking the search icon/button.

8. **Action Elements:** Buttons with specific class names like edit, delete, and save serve as action elements for each row.

9. **Navigation Elements:** Buttons for navigation (first page, previous page, next page, last page) are implemented as div/buttons with specific class names.

10. **Bulk Delete:** The top-right bin icon serves as a bulk delete button for deleting selected rows.

11. **Inline Editing:** Clicking the edit action in a row allows users to edit the record in place.

12. **Delete Selected Button:** The bottom delete button has the text "Delete Selected" for deleting multiple selected rows.

13. **FontAwesome Icons:** FontAwesome is used for the search, edit, delete, and bin icons.

## Technologies Used

- React.js
- CSS
- FontAwesome

## Deployment

The application is deployed and can be accessed at https://admin-user-management.netlify.app/.

Feel free to explore and test the functionalities of the Admin Dashboard!

## Local Development

To run the application locally:

1. Clone the repository: `git clone https://github.com/PranayN13/UserManagement`
2. Navigate to the project directory: `cd UserManagement`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000`
