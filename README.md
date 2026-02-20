<p align="center">
<picture>
    <source srcset="./.github/icon-dark.png" media="(prefers-color-scheme: light)">
    <source srcset="./.github/icon-light.png" media="(prefers-color-scheme: dark)">
    <img src="./.github/icon-dark.png" alt="Header banner">
</picture>
</p>

<h1 align="center">
  PasFuteFute
</h1>

<p align="center">
    Le répertoire des expressions françaises pour décrire les moins futé·e·s.
</p>

<p align="center">
  <a href="https://pasfutefute.fr">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="./packages/data/src/quotes.yaml">Les expressions</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://pasfutefute.fr/api/quotes/random">API</a>
</p>

## Introduction

**Pas Fute Fute...** est un répertoire des expressions françaises pour décrire les moins futé·e·s. Ce projet a pour but de recenser les expressions populaires françaises qui décrivent de manière humoristique et imagée les personnes, stupides, ou simplement maladroites.

[![Pas Fute Fute](./.github/app-mockup.png)](https://quote.romain.chevrot)

## Les features

- **Liste des expressions** : Découvrez les expressions populaires françaises pour décrire les moins futé·e·s.
- **Expression aléatoire** : Affiche une expression aléatoire.
- **Responsive** : Le site est responsive et s'adapte à tous les écrans.
- **Open source** : Le projet est open source et sous licence MIT.
- **Contributions** : Vous pouvez contribuer en ajoutant de nouvelles expressions.
- **API** : Une API est disponible pour récupérer les expressions.

## API

Une API est disponible pour récupérer les expressions.

Pour le moment, une seule route est disponible pour récupérer une expression aléatoire :

```bash
curl host/api/quotes/random

# {
#    "quote": "C'est pas le rosier le plus fleuri du jardin."
# }
```

## Contribuer

### Ajouter une expression

Pour ajouter une expression, il suffit de modifier le fichier [`quotes.yaml`](./packages/data/src/quotes.yaml) dans le dossier [`packages/data/src/`](./packages/data/src/).

### Développement

Pour contribuer au développement du projet, vous pouvez cloner le dépôt :

```bash
git clone https://github.com/r-chvrt/pas-fute-fute.git
```

Ensuite, build de l'image Docker :

```bash
docker compose build
```

Pour lancer le projet :

```bash
docker compose up -d
```

## License

Ce projet est open source et sous licence MIT. Rendez-vous sur le fichier [`LICENSE`](LICENSE) pour plus d'informations.

## Crédits

Ce projet est développé par [Corentin Thomasset](https://corentin.tech), forké par [Romain Chevrot](https://romain.chevrot.ovh).

Stack utilisée et mentions :

- Le site est développé avec [SolidStart](https://docs.solidjs.com/solid-start), un starter pour [SolidJS](https://docs.solidjs.com/).
- Le logo est l'icon [`face-explode-solid`](https://icones.js.org/collection/all?icon=flowbite:face-explode-solid) de la collection [flowbite](https://icones.js.org/collection/flowbite), sous licence MIT.
