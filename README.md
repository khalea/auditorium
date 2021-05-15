# Auditorium

Auditorium is an app through which friends can listen to, chat about, and vote on music synchronously.

This is inspired by my recent time vibing in [Will Neff](https://twitter.com/TheWillNeff) & [Hasan Piker's](https://twitter.com/hasanthehun) Twitch streams with other viewers. It reminds me of a time in the earlier years of the internet when you'd find cool little chatrooms in odd corners of the web.


This is very much a work progress, and I may not complete it. Though I suppose that shouldn't be surprising to other devs :)

### General Features 
- Authentication
- Stage Provisioning
- Shared Media Player
- Queuing Videos
- Voting
- Chat
- Profiles
- Account Settings

### Task Queue
- Provision stages
- Search Youtube
- Queue videos

## Todo

### UI
- [X] Add Tailwind CSS
- [ ] Edit light/dark themes
- [X] Edit Typography
### Stages
- [ ] Use sample data to test provisioning Stages (dynamic routing)

## References

- [Axios API](https://axios-http.com/)

#### Theming
- [next-themes](https://github.com/pacocoursey/next-themes)
---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

---

*This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).*