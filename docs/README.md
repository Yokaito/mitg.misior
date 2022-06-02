<p align="center">
  <img src="https://media.discordapp.net/attachments/887517791001919489/957088233722888222/capa.PNG?width=1434&height=532" alt="Next.js TypeScript Starter">
</p>

<br />

<div align="center">Altamente escalavel, usando as melhores tecnologias. Todas as ferramentas para a construção do site.</div>

<br />

<div align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=flat-square&color=5e17eb&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/badge/license-MITG-brightgreen?style=flat-square&color=5e17eb&labelColor=000000">
</div>

<div align="center">
  <br />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=MITHGaming_mitg.misior&metric=sqale_rating" alt="PRs welcome!" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=MITHGaming_mitg.misior&metric=security_rating" alt="PRs welcome!" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=MITHGaming_mitg.misior&metric=bugs" alt="PRs welcome!" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=MITHGaming_mitg.misior&metric=code_smells" alt="PRs welcome!" />
  <img src="https://sonarcloud.io/api/project_badges/measure?project=MITHGaming_mitg.misior&metric=vulnerabilities" alt="PRs welcome!" /> 
</div>

<div align="center">
  <sub>Criado por <a href="https://github.com/Yokaito">Guilherme Fontes</a> com a ajuda <a href="https://github.com/MITHGaming/mitg.misior/graphs/contributors">desses contribuidores</a>.</sub>
</div>


<br />

## Features

- ⚡️ Next.js 12
- ⚛️ React 18
- ⛑ TypeScript
- 📏 ESLint — Find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 📄 Commitizen — To define a standard way of committing rules
- 🚓 Commitlint — Make sure your commit messages follow the convention
- 🖌 Renovate — Keep your dependencies up to date
- 🚫 lint-staged — To run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on all Pull Requests
- ⚙️ EditorConfig - Maintain consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix
- 🖌 Stiches — CSS in JS

### Development

To start the project locally, run:

```bash
yarn dev
```

Open `http://localhost:3000` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 16.x
- Yarn 1 (Classic)

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn commit` — Run commitizen. Alternative to `git commit`.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

### Switch to npm

By default, this starter uses Yarn 1 (Classic), but this choice is yours. If you'd like to switch to npm, delete the `yarn.lock` file, install the dependencies with `npm install`, and change the CI workflows, Husky Git hooks, and lint-staged steps to use npm commands.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
