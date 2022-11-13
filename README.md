Comments App - project as an assigntment from Reactor Studio

## Getting Started

This is a Next.js project bootstrapped with create-next-app.

### Clone project to your local machine

Navigate to desired folder and run

```bash
git clone "https://github.com/RedsyncDevelopment/reactor-assignment"
```

### Start in developmet enviroment

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available scripts

Running app in development mode:

```bash
npm run dev
```

Running eslint:

```bash
npm run line
```

Running unit (integration) tests with Jest:

```bash
npm run test
```

Running e2e test with Cypress:

```bash
npm run cypress
```

Building app for production:

```bash
npm run build
```

Running app in production:

```bash
npm run start
```

## How it works?

This simple app enebles users to read comments and add new comments as "head" comment or reply to already existing comments

User can add a new "head" comment (comment displayed as a main comment to a post) with form available at the bottom of the comment section.

User can reply to an existing comment clicking on "Reply" button under selected comment. This will open a new form enabling user to write a reply to that comment.

## Used tehnologies?

### NextJS

For this particular app NextJS wasn't something that would simplify building it over basic ReactJS but I've decided to use it so I can present fatching data from an API endpoint.

### Tailwind CSS & styles components

Tailwind is a great tool for simplifing writing CSS and I use it in most of my projects. Althought "styled components" as a way to style React app wasn't necessary, there are 2 components styled this way.

## TODO

- Add better ERROR handling
- Add better TESTS
- Add notification system when new comment is added
