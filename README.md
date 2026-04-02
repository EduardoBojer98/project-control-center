# StudioFlow — Learning Project README

## Overview

**StudioFlow** is a long-term learning project: a web app for freelancers and small agencies to manage clients, projects, tasks, feedback, files, and approvals.

The main goal is not just to finish an app, but to learn how to build a modern frontend product with:

- React
- TypeScript
- scalable project structure
- routing
- forms and validation
- API integration
- auth
- state management
- reusable UI
- responsive design
- preparation for a future mobile app

---
## Project idea

Build a product-style app called **StudioFlow**.

It is a **client portal + project management app** where:

- admins create and manage projects
- team members work on tasks and upload deliverables
- clients review work, comment, and approve or request changes

Later, this can also become a **mobile app** for:

- checking tasks
- replying to comments
- approving work
- uploading files
- receiving notifications

---

## Recommended stack

### Frontend
- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- TanStack Query
- Zustand

### Backend
- Supabase

### Later
- Expo / React Native for mobile app

---

## Why this stack

### React
Teaches component-driven frontend development.

### TypeScript
Makes your code safer, clearer, and more professional.

### Vite
Fast and simple setup for React projects.

### React Router
Handles page navigation in a real app structure.

### Tailwind CSS
Lets you move fast while still building clean UI systems.

### shadcn/ui
Good reusable component foundation.

### React Hook Form + Zod
Modern, typed form handling and validation.

### TanStack Query
Best way to learn real async/server state handling.

### Zustand
Useful for light global UI state without overcomplicating things.

### Supabase
Gives you auth, database, and storage without needing to build a full custom backend first.

---

## Main goal

Build something that teaches you how to work like a modern frontend engineer, not just how to make pages.

You want to learn:

- React thinking
- TypeScript typing
- project architecture
- state and data flow
- reusable UI systems
- auth and permissions
- async data management
- mobile-friendly structure

---

## Core product concept

StudioFlow is a web app for managing:

- clients
- projects
- tasks
- comments
- approvals
- files
- notifications
- settings

---

## User roles

### Admin
- creates projects
- manages team members
- manages clients
- sees everything

### Team member
- works on tasks
- uploads deliverables
- comments
- updates statuses

### Client
- views assigned projects
- reviews work
- approves or requests changes
- comments on deliverables

---

## Core features

### 1. Authentication
- sign up
- sign in
- forgot password
- protected routes
- role-based access

### 2. Dashboard
- project summary
- tasks due soon
- pending approvals
- recent comments
- recent file uploads

### 3. Projects
- create project
- project details
- status
- deadline
- budget
- assigned users
- client info

### 4. Task management
- Kanban board
- task list view
- task details
- due date
- assignee
- priority
- labels
- subtasks

### 5. Comments and feedback
- comments on tasks
- threaded discussion
- client approval / revision request

### 6. Files and deliverables
- upload images/docs
- project file list
- deliverable versions
- approval status

### 7. Notifications
- in-app notifications
- unread count
- mentions
- status updates

### 8. Settings
- profile settings
- company/studio settings
- notification preferences
- theme later

---

## Best MVP

Do **not** build everything at once.

Start with this MVP:

- auth
- dashboard
- projects list
- single project page
- tasks CRUD
- task status board
- comments
- basic file upload
- role-based protected pages
- responsive layout

This is already a serious portfolio app.

---

## How to start

Start in small, practical steps.

### Step 1 — Create the project
Create a React + TypeScript app with Vite.

Suggested command flow:

```bash
npm create vite@latest studioflow -- --template react-ts
cd studioflow
npm install
npm run dev
```

### Step 2 — Install core packages

```bash
npm install react-router-dom @tanstack/react-query react-hook-form zod zustand
npm install @hookform/resolvers
npm install -D tailwindcss postcss autoprefixer
```

If you want to add shadcn/ui later, do that after the base app is running.

### Step 3 — Set up Tailwind
Initialize Tailwind and connect it to the project.

### Step 4 — Clean the starter project
Remove the default Vite demo content and replace it with:

- app shell
- routes
- pages folder
- feature folders

### Step 5 — Build the app shell first
Before real features, build:

- sidebar
- topbar
- page wrapper
- main content area

This gives the project structure immediately.

### Step 6 — Add routes
Create routes for:

- login
- dashboard
- projects
- project details
- tasks
- notifications
- settings

### Step 7 — Use mock data first
Do not connect Supabase immediately.

First, build pages using fake data so you can focus on:

- layout
- components
- interaction
- structure

### Step 8 — Build reusable UI components
Start with:

- Button
- Input
- Textarea
- Select
- Badge
- Card
- Modal
- Drawer
- EmptyState
- Spinner

### Step 9 — Build the first real screens
Start with:

- dashboard
- projects list
- project details
- task board

### Step 10 — Only then add forms and backend
After the UI is stable:

- add forms
- add validation
- connect Supabase
- add auth
- fetch real data

---

## Best build order

Use this order for each feature:

### 1. UI first
Build the screen with static data.

### 2. Local state next
Make the interactions work without a backend.

### 3. Validation
Add proper form handling.

### 4. Backend
Connect real data.

### 5. Refactor
Clean the code after it works.

This is the best way to actually learn.

---

## Folder structure

Use a feature-based structure:

```txt
src/
  app/
    providers/
    router/
    layouts/
  components/
    ui/
    shared/
  features/
    auth/
      api/
      components/
      hooks/
      pages/
      schemas/
      types/
    projects/
      api/
      components/
      hooks/
      pages/
      schemas/
      types/
    tasks/
      api/
      components/
      hooks/
      schemas/
      types/
    comments/
    files/
    notifications/
    settings/
  lib/
  services/
  hooks/
  utils/
  types/
```

### Why this structure
It teaches you how to scale an app cleanly.

Instead of one giant mess of files, each feature keeps its own:

- components
- hooks
- schemas
- types
- API logic

---

## First routes to build

```txt
/
 /login
 /dashboard
 /projects
 /projects/:projectId
 /projects/:projectId/tasks
 /projects/:projectId/files
 /notifications
 /settings
 /profile
```

Later you can add:

```txt
 /clients
 /clients/:clientId
 /billing
 /approvals
```

---

## Suggested database model

Keep the first version simple.

### profiles
- id
- full_name
- email
- role
- avatar_url

### clients
- id
- name
- email
- company_name

### projects
- id
- name
- description
- status
- deadline
- budget
- client_id
- created_by

### project_members
- id
- project_id
- profile_id
- role

### tasks
- id
- project_id
- title
- description
- status
- priority
- due_date
- assignee_id
- created_by

### comments
- id
- task_id
- author_id
- body
- created_at

### files
- id
- project_id
- uploaded_by
- file_name
- file_url
- file_type
- created_at

### notifications
- id
- user_id
- type
- title
- is_read
- link
- created_at

---

## Phase-by-phase roadmap

## Phase 0 — Setup
Goal: get the project running and understand the base stack.

Build:
- Vite React TypeScript app
- Tailwind setup
- router setup
- app shell
- empty pages

Learn:
- TypeScript basics in React
- routing basics
- folder structure
- component thinking

---

## Phase 1 — UI foundation
Goal: build reusable UI.

Build:
- Button
- Input
- Textarea
- Select
- Badge
- Card
- Modal
- Drawer
- Tabs
- Table
- Empty state
- Loading state
- Error state

Learn:
- props
- component composition
- reusable UI patterns
- TypeScript for components

---

## Phase 2 — Static features with fake data
Goal: make the app feel real before backend integration.

Build:
- dashboard widgets
- projects list
- project details page
- tasks list
- Kanban board
- comments UI
- notifications dropdown

Learn:
- local state
- custom hooks
- rendering data-driven UI
- splitting large screens into components

---

## Phase 3 — Forms and validation
Goal: get comfortable with modern form workflows.

Build:
- create project form
- edit project form
- create task form
- edit task form
- profile form
- comment form

Learn:
- React Hook Form
- Zod schemas
- field errors
- typed forms
- reusable form controls

---

## Phase 4 — Supabase backend
Goal: move from fake app to real app.

Add:
- auth
- database tables
- storage bucket

Learn:
- relational data thinking
- database-backed UI
- insert/update/delete workflows
- auth/session handling

---

## Phase 5 — Server state
Goal: learn how real apps fetch and mutate data.

Use TanStack Query for:
- fetch projects
- fetch project details
- fetch tasks
- create task
- update task
- delete task
- fetch comments
- post comment

Learn:
- query keys
- caching
- invalidation
- mutations
- optimistic updates

---

## Phase 6 — Auth and permissions
Goal: create real user flows.

Add:
- sign in
- sign up
- sign out
- protected routes
- role checks
- redirect logic
- conditional UI by role

Examples:
- clients cannot create internal tasks
- team members cannot edit billing
- admins can manage all projects

---

## Phase 7 — Scaling and cleanup
Goal: learn project organization.

Focus on:
- moving logic into hooks
- keeping UI components presentational
- keeping types near features
- avoiding giant page files
- extracting reusable patterns

---

## Phase 8 — Advanced product features
Goal: push into real product behavior.

Add:
- drag and drop task board
- task filters
- search
- activity feed
- notification center
- file uploads
- task attachments
- approval flow

---

## Phase 9 — Mobile readiness
Goal: make future app conversion easier.

Build with:
- mobile-first layout
- touch-friendly inputs
- responsive navigation
- reusable business logic separated from UI

Later this helps when building with Expo / React Native.

---

## 12-week roadmap

### Weeks 1–2
- React + TypeScript setup
- Tailwind
- router
- app shell
- reusable UI basics

### Weeks 3–4
- projects pages
- tasks pages
- mock data
- dashboard widgets
- layout cleanup

### Weeks 5–6
- forms
- validation
- task CRUD
- project CRUD
- modal/drawer flows

### Weeks 7–8
- Supabase setup
- auth
- real database connection
- protected routes

### Weeks 9–10
- TanStack Query
- comments
- notifications
- file uploads

### Weeks 11–12
- role-based access
- responsive polish
- structure refactor
- portfolio cleanup

---

## First sprint plan

### Sprint 1
Build only this:
- app shell
- login page
- dashboard layout
- projects list page
- project detail page
- task board page with fake data

### Sprint 2
Add:
- create/edit task modal
- create/edit project form
- comments panel
- filters and search

### Sprint 3
Add:
- Supabase auth
- real projects/tasks
- protected pages

### Sprint 4
Add:
- client role
- file upload
- notifications
- mobile responsiveness

---

## First components to build

### Shared UI
- Button
- Input
- Select
- Modal
- Drawer
- Avatar
- Badge
- Spinner
- EmptyState
- ConfirmDialog

### Project feature
- ProjectCard
- ProjectHeader
- ProjectStatusBadge
- ProjectMembers
- ProjectDetailsForm

### Task feature
- TaskCard
- TaskColumn
- TaskBoard
- TaskForm
- TaskFilters
- TaskPriorityBadge
- TaskDrawer

### Comment feature
- CommentList
- CommentItem
- CommentForm

### Notification feature
- NotificationBell
- NotificationList
- NotificationItem

---

## Good coding rules for this project

### Rule 1
Keep UI components dumb when possible.

A component like `TaskCard` should mostly render data, not contain lots of business logic.

### Rule 2
Do not put everything into one giant `types.ts`.

Keep types close to the feature.

### Rule 3
Do not overuse Zustand.

Use it for light global UI state such as:
- sidebar open/close
- modal state
- current filters if needed

Use TanStack Query for server data.

### Rule 4
Avoid giant page files.

Split pages into feature components.

### Rule 5
Always make loading, empty, and error states.

That is part of real frontend work.

---

## What to focus on learning

### React
Focus on:
- components
- props
- hooks
- conditional rendering
- lists
- composition
- custom hooks

### TypeScript
Focus on:
- typing props
- typing forms
- typing API responses
- unions
- optional vs required fields
- narrowing

### Architecture
Focus on:
- feature folders
- reusable UI
- keeping logic separate from rendering
- small focused files
- incremental refactoring

---

## What not to do

- do not start with Redux
- do not try to build every feature immediately
- do not overdesign the UI before the app works
- do not learn too many libraries before starting
- do not skip TypeScript because it feels slower at first

---

## Why this is a strong portfolio project

This app can show:

- real project structure
- React architecture
- TypeScript usage
- forms and validation
- auth
- database integration
- reusable components
- role-based UI
- async state management
- responsive app design

That is much more valuable than a simple to-do app.

---

## How it becomes a mobile app later

Once the web version is mature, you can build a mobile version with:

- Expo
- the same backend
- the same auth system
- the same data model
- similar business logic

Mobile app features could include:
- task updates
- push notifications
- file/photo upload
- approvals
- comments

---

## Exact first task list

Do these first:

1. Create the Vite React TypeScript app
2. Add Tailwind
3. Set up the folder structure
4. Add React Router
5. Build sidebar + topbar + page layout
6. Create dashboard, projects, project detail, and tasks pages
7. Add mock data
8. Build task board UI
9. Build project form
10. Then connect Supabase

---

## Suggested first file structure

```txt
src/
  app/
    layouts/
      AppLayout.tsx
    router/
      index.tsx
  components/
    ui/
      Button.tsx
      Card.tsx
      Input.tsx
      Modal.tsx
  features/
    dashboard/
      pages/
        DashboardPage.tsx
    projects/
      components/
        ProjectCard.tsx
      pages/
        ProjectsPage.tsx
        ProjectDetailsPage.tsx
      types/
        project.types.ts
      mock/
        projects.mock.ts
    tasks/
      components/
        TaskBoard.tsx
        TaskColumn.tsx
        TaskCard.tsx
      pages/
        TasksPage.tsx
      types/
        task.types.ts
      mock/
        tasks.mock.ts
  pages/
    LoginPage.tsx
  main.tsx
```

---

## Final recommendation

Start small, but start with the real structure.

Do not wait until you “know enough React.”
You will learn React and TypeScript faster by building this app in layers.

The best approach is:

- static UI
- local interactions
- forms
- backend
- cleanup
- advanced features

That is the path that will help you grow the most.

---

## Personal note for the build

Because you already come from WordPress work, this project will help you shift from:

- template thinking
- page-level logic
- one-off custom solutions

toward:

- component systems
- data-driven UI
- reusable logic
- scalable product architecture

That shift is exactly what will level you up.

