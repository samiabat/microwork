# Microworks

> A modern freelancing platform that connects talented professionals with clients worldwide.

![Angular](https://img.shields.io/badge/Angular-16-DD0031?logo=angular&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview

**Microworks** is a full-stack freelancing platform built with Angular 16. It enables clients to post jobs, review freelancer proposals, and manage projects — while freelancers can browse opportunities, submit proposals, and communicate directly with clients.

The frontend connects to a RESTful Django backend API hosted at `https://microworks.onrender.com`.

## Features

- 🔐 **Authentication** — JWT-based login & registration with route guards
- 📋 **Job Board** — Post, browse, filter, and manage job listings
- 📝 **Proposals** — Submit and review freelancer proposals per job
- 💬 **Messaging** — Direct communication between clients and freelancers
- �� **Profiles** — User profiles with report tracking
- 🚩 **Reporting** — Flag inappropriate jobs or users
- ⭐ **Reviews** — Leave feedback after project completion

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Angular 16 |
| UI Framework | Bootstrap 5.3 + Angular Material 16 |
| Icons | Bootstrap Icons 1.11 |
| HTTP Client | Angular HttpClient |
| Forms | Angular Reactive Forms |
| Routing | Angular Router with Auth Guards |
| Backend API | Django REST Framework (hosted on Render) |
| Auth | JWT (JSON Web Tokens) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [npm](https://www.npmjs.com/) v8 or higher
- [Angular CLI](https://angular.io/cli) v16

```bash
npm install -g @angular/cli@16
```

### Clone the Repository

```bash
git clone https://github.com/samiabat/microwork.git
cd microwork
```

> **Note:** The project is named **Microworks** — the repository may still be named `microwork` until renamed.

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically on file changes.

### Build for Production

```bash
npm run build
# or
ng build --configuration production
```

Build artifacts are stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── auth.guard.ts              # Route protection (JWT check)
│   ├── intercepter.service.ts     # HTTP interceptor (adds JWT header)
│   ├── shared.service.ts          # Central API service
│   ├── app-routing.module.ts      # Application routes
│   ├── app.module.ts              # Root module
│   │
│   ├── customer/                  # Landing page & profile management
│   │   ├── customer.component.*   # Home/landing page
│   │   ├── add-edit-customer/     # Customer CRUD
│   │   └── show-customer/         # Customer listing
│   │
│   ├── job/                       # Job management
│   │   ├── job.component.*        # Job page shell
│   │   ├── add-edit-job/          # Create/update job form
│   │   └── show-job/              # Job listing & search
│   │
│   ├── proposal/                  # Proposal management
│   │   ├── proposal.component.*   # Proposal page shell
│   │   ├── add-edit-proposal/     # Submit a proposal
│   │   └── show-proposal/         # View proposals for a job
│   │
│   ├── dashboard/                 # User profile/stats card
│   ├── nav/                       # Top navigation bar
│   ├── footer/                    # Site footer
│   ├── login/                     # Login page
│   ├── register/                  # Registration page
│   ├── message/                   # Messaging interface
│   ├── review/                    # Reviews
│   ├── report/                    # Job/user reporting
│   └── show-message/              # Message display
│
├── environments/
│   ├── environment.ts             # Development config
│   └── environment.prod.ts        # Production config
│
├── index.html                     # App shell
├── main.ts                        # Entry point
└── styles.css                     # Global styles & CSS variables
```

## Application Routes

| Route | Component | Auth Required |
|-------|-----------|:---:|
| `/` | Redirects to `/home` | ❌ |
| `/home` | Landing Page | ❌ |
| `/login` | Login | ❌ |
| `/register` | Registration | ❌ |
| `/jobs` | Job Listing | ✅ |
| `/createJob` | Create/Edit Job | ✅ |
| `/proposals` | Proposal Listing | ❌ |
| `/createProposal` | Submit Proposal | ❌ |
| `/message` | Messaging | ❌ |
| `/report` | Report Form | ❌ |
| `/customer` | Customer Management | ❌ |

## API Integration

All API calls are made through `SharedService` (`src/app/shared.service.ts`). The base URL is configured as:

```
https://microworks.onrender.com
```

The `IntercepterService` automatically attaches the JWT token to every outgoing HTTP request:

```typescript
// Automatically added to all requests
Authorization: Bearer <token>
```

## Authentication Flow

1. User logs in via `/api/login/` → receives JWT `access` token
2. Token is stored in `localStorage`
3. `IntercepterService` attaches token to all subsequent requests
4. `AuthGuard` checks `localStorage` for token before allowing navigation to protected routes
5. Logout clears `localStorage` and redirects to `/login`

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on port 4200 |
| `npm run build` | Build for production |
| `npm run watch` | Build and watch for changes |
| `npm test` | Run unit tests with Karma |

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

Built with ❤️ by the Microworks team.
