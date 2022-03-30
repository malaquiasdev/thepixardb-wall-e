# ThePixarDB - Wall-E

Tool for meta operations over static JSON data and from web pages and mix it in our central database.

This repository contains:

- [data/movies](data/movies): a static JSON metadata of movies produced by us.
- [data/company](data/company.json): a static JSON metadata of the company produced by us.
- [data/genres](data/genres.json): a static genre list supported in the project.
- [src/migrations](src/migrations): the scripts to ingest the metadata in our database.

## Setup Local - Docker and Compose 🗳️

We are using docker for create a local environment. The process is managed by Docker Compose.

This setup it's not recommend to create a production environment, for that we have a terraform module inside of the infra folder.

You can start everthing by:

```bash
docker-compose up --build
```

## Setup Local 🖥️

### Prerequisites 📝

Before you begin, ensure you have met the following requirements:

- You must have an AWS Credentials
- Configure the [AWS CLI](https://aws.amazon.com/pt/cli/)
- You have installed the [Node.js](https://nodejs.org/en/)
- You have installed the [Yarn](https://yarnpkg.com)
- You have installed the [Terraform](https://www.terraform.io)

### Create the infra on AWS 🏗️

```
cd infra && terraform init && terraform terraform apply -auto-approve
```

#### Install dependencies 🚀

```sh
$ yarn install
```

### Create configs

Create a `.env` file at the root of the project. Make sure you follow the [`.env.example`](.env.example) file as a guide.

### Run project

```sh
$ yarn dev
```

## How to contribute

Go to [contribute](.github/CONTRIBUTING.md)

## Respect earns Respect 👏

Please respect our [Code of Conduct](.github/CODE_OF_CONDUCT.md), in short:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

## Terms of Use

1. Free for non-commercial use.
2. You can make use of the API as data service.
3. ‘Hoarding’ or mass collection of data from this API is strictly prohibited.

## Legal Notice

We do not claim ownership of any of the images or data in the API. We comply with the Digital Millennium Copyright Act (DMCA) and expeditiously remove infringing content when properly notified. Any data and/or images you upload you expressly grant us a license to use. You are prohibited from using the images and/or data in connection with libelous, defamatory, obscene, pornographic, abusive or otherwise offensive content.
