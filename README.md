
# Giga Stack ✨

Inspired by [T3 stack](https://create.t3.gg/) and [Shadcn Taxonomy](https://tx.shadcn.com/) project, I created this example of experimental edge stack full of sweet and fancy features for you to play with. Shout out to a bunch of open source solutions on the GitHub which I combined here.


## Features

- ``Next.js`` 13 app dir (edge runtime)
- ``tRPC``
- ``Clerk`` Auth
- ``Drizzle`` ORM + ``PlanetScale`` serverless js driver
- ``Shadcn/ui`` (Radix UI + Tailwind)


## Try it yourself

Install dependencies using pnpm:
```bash
pnpm install
```

Copy .env.example to .env and update the variables:
```bash
cp .env.example .env
```

Push schema to PlanetScale:
```bash
pnpm db:push
```

Have fun
```bash
pnpm dev
```


    
## Resources

 - [shadcn/taxonomy](https://github.com/shadcn/taxonomy/blob/main/README.md)
 - [mattddean](https://github.com/mattddean/t3-app-router-edge-drizzle)
 - [solaldunckel](https://github.com/solaldunckel/next-13-app-router-with-trpc)
 - [og create-t3-app](https://github.com/t3-oss/create-t3-app)


