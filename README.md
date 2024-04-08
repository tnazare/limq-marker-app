This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Get VSCode or Webstorm or IDEA Ultimate if you can

I use Webstorm but any IDE is good

### Get OhMyZsh or warp

- https://ohmyz.sh/
- https://www.warp.dev/a

### Other Dependencies/Prerequisites

The `.nvmrc` file at the root of the project's directory contains the version of `node` (and corresponding `npm`) that
should be used for the project.

The latest version of `nvm` can be found [here](https://github.com/nvm-sh/nvm/tags)

#### Install `nvm` (node version manager)

Replace the version (v0.39.1 in this example) with the latest version of `nvm`. You can see all
releases [here](https://github.com/nvm-sh/nvm/tags)

##### Installing nvm if you're using bash

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh| bash
```

After nvm is installed execute this command:

```shell
source ~/.bashrc
```

##### Installing nvm if you're using zsh

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh| zsh
```

```shell
source ~/.zshrc
```

More detailed installation instructions are available [here](https://github.com/nvm-sh/nvm)

##### For Mac users, if you encounter the following error:

```shell
zsh: bad CPU type in executable: node
```

Please run the following command:

```shell
softwareupdate --install-rosetta
```

### Using the right version of `node`

1. From the project's directory, run the `nvm use` command from the command line.
2. If you do not have the right version of `node` installed, `nvm` will provide instructions on how to install it.
3. After running the `nvm use` command, you should see an output similar to this:

    ```shell
    $ nvm use
    Found '/home/<username>/<project directory>/ticketmaster/marketing-ui/.nvmrc' with version <v10.22.1>
    Now using node <node version> (npm <npm version>)
    ```

   Where `<node version>` and `<npm version>` are the right versions to use for the project according to the `.nvmrc`
   file.

### Install pnpm

https://pnpm.io/installation

## Run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!
