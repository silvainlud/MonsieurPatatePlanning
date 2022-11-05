<p align="center">
  <a href="https://mpatate.silvain.eu/">
    <img alt="mpatate" src="https://mpatate.silvain.eu/favicon.png" width="220"/>
  </a>
</p>

<h1 align="center">Monsieur Patate Planning</h1>
<p align="center">
 <a href="https://drone.silvain.eu/Silvain.eu/MonsieurPatatePlanning">
  <img src="https://drone.silvain.eu/api/badges/Silvain.eu/MonsieurPatatePlanning/status.svg"/>
 </a>
</p>


Réalisation de capture d'écran de l'emploi du temps ADE ULCO (https://edt.univ-littoral.fr/).

Cette application s'inscrit dans le cadre d'un projet composé de 3 dépôts :
- [MonsieurPatatePhp](https://github.com/silvainlud/MonsieurPatatePhp/edit/main/README.md) : Site web permettant la consultation de l'emploi du temps et la gestion des devoirs. Cette application embarque également les scripts réalisant l'actualisation de l'emploi du temps et l'envoie de notifications lorsque cela est nécessaire.
- **MonsieurPatatePlanning** : Script JS faisant des captures d'écran de l'emploi du temps fourni par ADE ULCO
- [MonsieurPatateBot](https://github.com/silvainlud/MonsieurPatateBot) : Bot discord pour consulter l'emploi du temps

## Technologie

Ce projet est un script javascript utilisant NodeJs. Les captures d'écrans sont réalisés grâce à la bibliothéque [playwright](https://playwright.dev/)


## Fonctionnalités

- Accéder à la version public de [https://edt.univ-littoral.fr/](https://edt.univ-littoral.fr/)
- Capture d'écran avec rognage automatique
- Enregistrement des captures d'écran dans un dossier `/data/` afin de pouvoir étre importer par le projet [MonsieurPatatePhp](https://github.com/silvainlud/MonsieurPatatePhp/edit/main/README.md)

## Installation de l'environnement de développement

### Pré-requis

Pour démarrer l'environnement, vous devez avoir les outils suivants :
- [NodeJs](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

### Instruction

Il faut tout d'abord installer les dépendances :
```
npm install
```

Puis pour lancer l'appplication, il suffit de saisir la commande suivante :
```
npm run app
```

Vous devriez retrouver les captures dans un dossier `data` à la racine du projet.

## Déploiement

Ce projet est déployé automatiquement par un service [Drone.Io](https://www.drone.io/), qui constuire une Image Docker puis qui l'envoie dans sur un registre d'image privé.

## Licence

Ce projet est sous la licence [GNU General Public License v3.0](LICENSE) - voir le fichier  [LICENSE.md](LICENSE) pour les détails.
