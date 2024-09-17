# Full Stack Inventory Management Dashboard

This project is a full-stack inventory management dashboard designed to help users manage products, expenses, users, and settings. Built with a modern stack, the application is fully responsive and includes various filtering and search functionalities.
Here is the link of the Inventory Management: https://master.d1smn2dbb172iq.amplifyapp.com/

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Setup and Installation](#setup-and-installation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview
The inventory dashboard provides an intuitive interface for managing and tracking product inventory, expenses, and more. Users can create new products, filter expenses by category and date, and manage various aspects of their inventory system. It’s built with scalability in mind and deployed on AWS.

## Features
- **Product Management**: Create, edit, delete products.
- **Expense Management**: Filter by category and date.
- **User Management**: Add and manage users.
- **Charts & Tables**: Visualize data with Recharts and Material UI Data Grid.
- **Responsive Design**: Fully responsive across devices.

## Technology Stack

### Frontend
- **Next.js**: Framework for server-side rendering and routing.
- **Redux Toolkit**: State management.
- **Tailwind CSS**: Styling.
- **Recharts**: Charts and data visualization.
- **Material UI**: Tables and UI components.

### Backend
- **Node.js**: Backend environment.
- **Express.js**: Web framework.
- **Prisma**: ORM for PostgreSQL.
  
### Database
- **PostgreSQL**: Managed using AWS RDS.

### Deployment
- **AWS EC2**: Hosts the backend.
- **AWS RDS**: Manages PostgreSQL database.
- **AWS Amplify**: Hosts the Next.js application.
- **AWS S3**: Stores images.

## Setup and Installation

### Prerequisites
- Node.js
- npm or yarn
- PostgreSQL
- AWS account

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/inventory-management-dashboard.git
    cd inventory-management-dashboard
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables in `.env.local` for AWS and PostgreSQL connections.

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Access the app at [http://localhost:3000](http://localhost:3000).

## Deployment
- **Frontend**: Hosted on AWS Amplify.
- **Backend**: Deployed on AWS EC2 with a PostgreSQL database on AWS RDS.
- **Image Storage**: Amazon S3 is used for image storage.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.
