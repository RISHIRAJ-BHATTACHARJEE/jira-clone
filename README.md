# Jira Clone

A powerful, feature-rich **Jira Clone** built using modern web technologies, designed for seamless project management and team collaboration.

## 🚀 Features

### 🏢 Workspaces
- Create and manage multiple workspaces for different teams or departments.
- Customize workspace settings and access controls.

### 📊 Projects / Epics
- Organize your tasks into structured projects and epics.
- Track progress across different initiatives.

### ✅ Tasks
- Create, assign, and manage tasks with ease.
- Prioritize tasks using labels, due dates, and status updates.

### 📋 Kanban Board View
- Visualize tasks with a drag-and-drop **Kanban board**.
- Easily move tasks between different stages.

### 🗃️ Data Table View
- Manage tasks and projects in a structured tabular format.
- Apply filters and sorting for better organization.

### 📅 Calendar View
- Schedule and track tasks with a **calendar-based view**.
- Set due dates and reminders.

### ✉️ Invite System
- Collaborate with team members by sending workspace and project invites.
- Role-based permissions for better access control.

### ⚙️ Workspace and Project Settings
- Configure settings at the workspace and project level.
- Define custom workflows and permissions.

### 🖼️ Image Uploads
- Upload profile avatars and project attachments.
- Store images securely with **Appwrite storage integration**.

### 🔌 Appwrite SDK Integration
- Backend powered by **Appwrite** for authentication, database, and storage.

### ⚛️ Next.js 14 Framework
- Built on **Next.js 14** for a fast and scalable experience.
- Optimized server-side rendering (SSR) and static generation (SSG).

### 🎨 Shadcn UI & TailwindCSS Styling
- Beautiful UI components with **Shadcn UI** and **Tailwind CSS**.
- Fully responsive and mobile-friendly design.

### 🔍 Advanced Search and Filtering
- Search and filter tasks, projects, and epics effortlessly.
- Implemented with optimized database queries.

### 📈 Analytics Dashboard
- Get insights into project progress and team performance.
- Track key metrics with visual analytics.

### 👥 User Roles and Permissions
- Assign roles (Admin, Member, Viewer) with different permissions.
- Ensure data security and controlled access.

### 🔒 Authentication (OAuth and Email)
- Secure authentication with **OAuth (Google, GitHub, etc.)** and **Email login**.
- Password-protected accounts with Appwrite.

### 📱 Responsive Design
- Fully mobile-friendly UI for seamless experience on all devices.
- Optimized layouts for different screen sizes.

### 🚀 API using Hono.js
- Lightning-fast backend API built using **Hono.js**.
- Efficient request handling and middleware support.

---

## 🛠️ Tech Stack
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Hono.js, Appwrite SDK
- **Database**: Appwrite Database
- **Authentication**: Appwrite OAuth & Email login
- **Storage**: Appwrite Storage (for avatars and attachments)
- **Deployment**: Vercel

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/jira-clone.git
cd jira-clone
```

### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
# or
bun add
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file and add:
```env
NEXT_PUBLIC_APP_URL = http://localhost:3000

NEXT_PUBLIC_APPWRITE_ENDPOINT = https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT = your-appwrite-project-key

NEXT_PUBLIC_APPWRITE_DATABASE_ID = your-appwrite-database-id
NEXT_PUBLIC_APPWRITE_WORKSPACES_ID = your-appwrite-workspace-id
NEXT_PUBLIC_APPWRITE_MEMBERS_ID = your-appwrite-members-id
NEXT_PUBLIC_APPWRITE_PROJECTS_ID = your-appwrite-projects-id
NEXT_PUBLIC_APPWRITE_TASKS_ID = your-appwrite-tasks-id
NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID = your-appwrite-images-bucket-id

NEXT_APPWRITE_KEY = your-appwrite-key
```

### 4️⃣ Run the Development Server
```bash
npm run dev
# or
yarn dev
# or
bun run dev
```

The app should now be running at [http://localhost:3000](http://localhost:3000) 🚀

---

## 🌟 Contributing
We welcome contributions! If you'd like to contribute, please fork the repository and submit a pull request.

---

## 📬 Contact
For any issues or feature requests, feel free to [open an issue](https://github.com/YOUR_GITHUB_USERNAME/jira-clone/issues) or reach out.

---

### 🎯 Built with ❤️ by Rishiraj Bhattacharjee

