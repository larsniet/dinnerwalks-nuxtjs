# Dinnerwalks

## Technieken
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="Vue.js" src="https://img.shields.io/badge/vuejs%20-%2335495e.svg?&style=for-the-badge&logo=vue.js&logoColor=%234FC08D"/> <img alt="Firebase" src="https://img.shields.io/badge/firebase%20-%23039BE5.svg?&style=for-the-badge&logo=firebase"/>

## Beschrijving
Elke zaterdag en zondag culinaire (coronaproof) wandelingen door de regio om de lokale horeca te steunen in deze moeilijke tijd. Voor slechts 3 euro wandel je al mee, ontvang je jouw unieke kortingscode en krijg je ook nog eens toegang tot onze speciale podcasts. We nemen je in de podcast aan de hand en leiden je door het dorp en zijn historie.

## Installatie

Gebruik [git](https://github.com/git/git) om deze applicatie te downloaden.

```bash
git clone https://github.com/larsniet/dinnerwalks.git
```

## Lokale productie versie met lokale firebase functies

```bash
cd ./{userdir}/dinnerwalks/src
yarn install # Installeerd alle dependencies
yarn build:firebase # Maakt een productie versie aan
yarn start:firebase # Serve lokaal, ip: http://localhost:5000/
```

## Lokale versie voor het developen

```bash
cd ./{userdir}/dinnerwalks/src
yarn install # Installeerd alle dependencies
yarn run dev # Start develop server lokaal, ip: http://localhost:3000/
```

### Optioneel voor deploy naar de liveserver

```bash
cd ./{userdir}/dinnerwalks/src
yarn install # Installeerd alle dependencies
yarn build:firebase # Maakt een productie versie aan
yarn deploy # Upload de functies en code live naar dinnerwalks
```

## Bijdragen
Pull requests zijn welkom. Voor grote verandering, open eerst een issue om jouw veranderingen te bespreken.

## License
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
