# Project Control Center

This project is a React + TypeScript learning app for practicing how to build a real frontend in a clean, scalable way.

The goal is to learn:

- React fundamentals
- TypeScript in real components and features
- routing
- reusable UI structure
- feature-based architecture
- forms and validation
- API and async state handling
- auth flows
- protected pages
- clean code organization

## Main idea

Build a small product-style app where users can:

- sign in
- view a dashboard
- manage projects
- manage tasks
- leave comments
- upload files
- receive notifications
- update settings

This is not just a design practice project. It should grow into a structured app that teaches you how modern React apps are organized.

## Project structure

The app is organized by app-level code, shared code, and feature modules.

```text
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
    dashboard/
      pages/
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

## What each folder is for

### `src/app`

Global app setup.

- `providers/` for app-wide providers like router, query client, theme, auth provider
- `router/` for route configuration, route guards, not found page
- `layouts/` for shared page layouts like auth layout or dashboard layout

### `src/components`

Reusable components not tied to one feature.

- `ui/` for buttons, inputs, cards, modals, badges
- `shared/` for components used across features like page headers, empty states, loading states

### `src/features`

Main business features. Each feature should contain its own pages, hooks, types, schemas, and API logic when needed.

- `auth/` for login, register, logout, forgot password, session handling
- `dashboard/` for overview pages and summary widgets
- `projects/` for project list, project details, create/edit project
- `tasks/` for task list, task details, task status changes
- `comments/` for comments and threaded discussion
- `files/` for uploads and file lists
- `notifications/` for notification UI and unread state
- `settings/` for profile and app settings

### `src/lib`

Library setup and shared configurations.

Examples:

- API client
- query client
- storage helpers
- environment config

### `src/services`

Higher-level app services.

Examples:

- auth service
- project service
- task service

### `src/hooks`

Global reusable hooks not tied to one feature.

Examples:

- `useDebounce`
- `useLocalStorage`
- `useToggle`

### `src/utils`

Pure helper functions.

Examples:

- date formatting
- status labels
- string helpers

### `src/types`

Shared global types used by multiple features.

## Functionalities to build

Focus on building these features step by step.

### 1. Auth

Add:

- login page
- logout action
- protected routes
- basic user role support
- auth state handling

Practice:

- forms
- controlled inputs
- validation
- conditional rendering
- route protection
- TypeScript form types

### 2. Dashboard

Add:

- welcome page
- summary cards
- recent projects
- upcoming tasks
- recent activity

Practice:

- component composition
- props typing
- mapping lists
- loading and empty states

### 3. Projects

Add:

- projects list page
- single project page
- create project form
- edit project form
- project status
- assigned users

Practice:

- CRUD structure
- feature organization
- reusable form components
- Zod schemas and inferred types

### 4. Tasks

Add:

- task list
- task details
- create task
- edit task
- status change
- priority
- assignee
- due date

Practice:

- nested data
- reusable hooks
- local state vs server state
- filtering and sorting

### 5. Comments

Add:

- comment list
- add comment form
- comments on tasks or projects

Practice:

- reusable comment components
- optimistic UI later
- typed arrays and state updates

### 6. Files

Add:

- file upload UI
- file list
- file preview metadata

Practice:

- forms with files
- async actions
- upload states

### 7. Notifications

Add:

- notification list
- unread badge
- mark as read

Practice:

- derived state
- list updates
- shared UI patterns

### 8. Settings

Add:

- profile form
- password form
- preferences form

Practice:

- larger forms
- reusable validation patterns
- settings data modeling

## Recommended build order

Build the project in this order:

1. App router and pages
2. Shared layout and navigation
3. Auth feature
4. Dashboard feature
5. Projects feature
6. Tasks feature
7. Comments feature
8. Files feature
9. Notifications feature
10. Settings feature

## Rules for building this project

Keep these rules while developing:

- put feature-specific code inside its feature folder
- put reusable UI inside `components/ui`
- put shared non-feature components inside `components/shared`
- keep types close to the feature when possible
- keep helper functions in `utils` only if they are generic
- avoid putting all logic in page components
- create custom hooks when logic starts repeating
- type props, state, API responses, and form data properly

## What to add as the project grows

After the basic app works, add:

- React Hook Form
- Zod
- TanStack Query
- Zustand if needed
- Supabase or another backend
- proper loading, error, and empty states
- reusable layout system
- route guards
- API layer per feature

## Main learning goal

Use this project to learn how to think like a frontend developer working on a real app.

That means practicing:

- breaking UI into components
- designing feature structure
- writing safer TypeScript
- organizing state clearly
- handling forms and async data
- building scalable folders from the beginning

## Keep it simple

Do not try to build everything at once.

Build one feature at a time, keep each feature working, and improve the structure as the app grows.
