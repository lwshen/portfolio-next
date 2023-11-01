# Portfolio

This is my portfolio website.

Give a ⭐ if you like this website!

## Built With

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org)
- [DrizzleORM](https://orm.drizzle.team/)
- [tRPC](https://trpc.io)

## Development

1. Install dependencies

```shell
pnpm install
```

2. Configure .env file

Make sure to copy the `.env.example` to `.env` and change it to match your configuration.

3. Start up a local server

```shell
pnpm dev
# or use turbo to start
pnpm dev:turbo
```

This starts your app in development mode at `http://localhost:3000`, rebuilding assets on file changes.

4. To view email template:

```shell
pnpm dev:email
```

This will start at `http://localhost:3002`.

## Deployment

First, build your app for production:

```shell
pnpm build
```

Then run the app in production mode:

```shell
pnpm start
```

Now you'll need to pick a host to deploy it to.
