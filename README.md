# <img width="60" height="60" src=".github/logo.png"/> ThePixarDB - Wall-E

<p align="center">
  <img width="400" height="200" src=".github/perfil.png"/>
</p>

Tool for meta operations over static JSON data and from web pages and mix it in our central database.

This repository contains:

- [data/movies](data/movies): a static JSON metadata of movies produced by us.
- [data/company](data/company.json): a static JSON metadata of the company produced by us.
- [data/genres](data/genres.json): a static genre list supported in the project.
- [src/migrations](src/migrations): the scripts to ingest the metadata in our database.

## Contribute 🍕

### Install dependencies

```sh
$ yarn install
```

### Create configs

Create a `.env` file at the root of the project. Make sure you follow the [`.env.example`](.env.example) file as a guide.

### Run project

```sh
$ yarn dev
```

### Learn more in the Contributing guide

Please take a look at the [contributing guide](.github/CONTRIBUTING.md).

## Respect earns Respect 👏

Please respect our [Code of Conduct](.github/CODE_OF_CONDUCT.md), in short:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members
