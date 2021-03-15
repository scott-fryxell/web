# Realness web

![realness online](src/icons.svg) <b style="vertical-align:middle">A Chill Vector Space<b>

Realness web is the source code for [realness.online](https://realness.online). This code is a tool for you to build and maintain your own social networks.

You moderate an instance of Realness via the [firebase console](https://firebase.google.com)

Learn more about the [philosopy](docs/philosophy.md), [architecture](docs/architecture.md), [technical highlights](docs/highlights.md), or dive in and setup a Realness of your own.

## Install

### Clone and install

From your favorite terminal

```bash
git clone git@github.com:realness-online/web.git

cd web

yarn install

```
### Configure firebase

Add a project from the [firebase console](https://console.firebase.google.com). Bear in mind that the name you give your project will be it's url for your social network

```
https://${project-name}.web.app
```
Once your project is created you will want to enable phone authentication and file storage.

#### Enable phone authentication

![Authentication](docs/auth-1.jpg)

- Edit the configuration for phone

![Authentication](docs/auth-2.jpg)

- Enable and save

![Authentication](docs/auth-3.jpg)

#### Enable Storage


![storage](docs/storage-1.jpg)

- Accept the default security rules (they will be [properly configured](storage.rules) when you deploy)

![storage](docs/storage-2.jpg)

- Pick your region.

![storage](docs/storage-3.jpg)


### Deploy to firebase

Install firebase-tools log in and then your ready to deploy.

```bash
yarn global add firebase-tools

firebase login

yarn deploy
```

# DONE!

Visit [https://${project-name}.web.app](https://${name}.wep.app). You can sign in and invite your friends.

## Sign in via localhost

For a fully functioning localhost save a file named ```env.local``` to the root of your project with your projects keys.

```
VUE_APP_API_KEY=${firebase.apiKey}
VUE_APP_AUTH_DOMAIN=${firebase.authDomain}
VUE_APP_DATABASE_URL=${firebase.databaseUrl}
VUE_APP_PROJECT_ID=${firebase.projectId}
VUE_APP_STORAGE_BUCKET=${firebase.storageBucket}
VUE_APP_MESSAGING_SENDER_ID=${firebase.messagingSenderId}
```

Restart your local server and localhost will have the same functionality as when you deploy.

## Contributing

Moderators are ideal committers. Setting up an instance of realness is also setting yourself up to help. Please read our [guidelines](docs/contributing.md).

## Support

We invite you to [Join realness online](https://realness.online) if you are interested in contributing or getting some friendly technical support for Moderating your own instance of realness web.

## License

One instance of realness per human person. This human person is the Moderator of their instance of Realness.

A moderator takes responsibility for the content that is created within their instance of Realness.

By moderating an instance of Realness you become part of a chain of responsibility that is diffuse. Each instance of Realness is a unique opportunity users to negotiate norms with their moderator. This way, Human beings can move between networks naturally; Choosing a Realness that is a good fit for them.

It is the explicit goal of realness to create a democratic environment where people feel free to share and communicate yet it is clear who's ass is on the line for what gets said, organized, and done.

Currently [package.json](package.json) has the license field marked as UNLICENSED – This is because we are in an alpha phase of the product roadmap. We need to figure this license out.
