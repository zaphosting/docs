---
id: abuse-report
title: "Signaler un abus et du contenu illégal - Tout ce que tu dois savoir !"
description: "Découvre comment identifier et signaler les abus en ligne pour protéger efficacement les utilisateurs et services → En savoir plus maintenant"
sidebar_label: Signaler un abus
---

## Introduction

Internet crée de la valeur. Les abus nuisent aux utilisateurs et aux services. Notre objectif est de détecter et stopper rapidement les incidents. Tu peux signaler tout abus suspect à notre équipe Abuse. Nous examinons chaque signalement, conservons les preuves, agissons selon la loi applicable et nos politiques, et informons les autorités compétentes si nécessaire.

## Types d’abus

Les abus peuvent prendre différentes formes. Signale tout cas qui correspond ou se rapproche des catégories ci-dessous :

<details>
  <summary>Spam</summary>

Messages non sollicités ou en masse envoyés via nos systèmes ou contenus hébergés qui déclenchent les filtres anti-spam. Variantes : spam email, spam dans les commentaires, spam SEO, création automatique de comptes. Fournis des exemples de messages, en-têtes, IP des expéditeurs, et schémas d’envoi.

</details>

<details>
  <summary>Attaques et DDoS</summary>

Trafic hostile visant à perturber les services ou sonder les systèmes. Formes courantes : floods volumétriques L3/L4, floods HTTP couche 7, amplification, tentatives de connexion par force brute, scans agressifs de ports. Indicateurs : pics de PPS ou Mbps, taux élevés de 4xx/5xx, échecs d’authentification répétés depuis des sources changeantes.

</details>

<details>
  <summary>Violations de droits d’auteur et marques</summary>

Distribution non autorisée d’œuvres protégées ou usage abusif de marques déposées. Variantes : miroirs pirates, téléchargements crackés, usurpation de marque, domaines trompeurs. Fournis l’œuvre, le titulaire des droits, l’emplacement exact, et le statut d’autorisation.

</details>

<details>
  <summary>Phishing</summary>

Contenu conçu pour récolter des identifiants ou données de paiement en imitant des marques de confiance. Variantes : faux portails de connexion, arnaques aux factures, leurres QR ou pièces jointes, fatigue MFA. Précise la marque ciblée, les points de capture, et les différences avec le site légitime.

</details>

<details>
  <summary>RGPD</summary>

Traitement, exposition ou fuite non autorisée de données personnelles. Cas typiques : index ouverts, buckets mal configurés, scraping sans base légale, logs publics. Décris les catégories de données, la portée, les personnes concernées, et la cause de l’exposition.

</details>

<details>
  <summary>CSAM/SAM</summary>

Tout matériel représentant l’exploitation sexuelle de personnes. Tolérance zéro.

</details>

<details>
  <summary>Contenu illégal</summary>

Contenu violant la loi applicable comme propagande extrémiste, menaces, discours haineux, incitation à la violence, ou diffamation. Variantes : doxxing, menaces explicites, matériaux interdits par la juridiction. Fournis l’emplacement exact et, si connu, la base légale concernée.

</details>

<details>
  <summary>Autres</summary>

Abus ne correspondant pas aux catégories ci-dessus mais nuisibles aux utilisateurs ou systèmes. Exemples : hébergement de malware, C2 de botnet, fraude, cryptominage non autorisé. Partage les hashes, URLs, schémas C2, et anomalies d’utilisation des ressources.

</details>

## Informations requises

Pour garantir un signalement complet et exploitable, merci de fournir des détails précis permettant d’identifier la ressource, vérifier l’incident, et prendre les mesures adéquates, notamment :
- Emplacement : URL, IP, port, nom d’hôte, chemin fichier, hash
- Horodatages en UTC au format YYYY-MM-DDTHH:MM:SSZ
- Description : ce qui s’est passé, comment détecté, impact observé
- Preuves : captures d’écran, logs texte, email complet avec en-têtes au format EML, PCAP court, NetFlow, en-têtes HTTP

## Formats acceptés et transmission

Fournis les preuves dans des formats clairs et accessibles. Joins les petits fichiers à ton email ou héberge les gros fichiers en externe. Préfère les fichiers petits à moyens en pièce jointe. Favorise les formats ouverts et non modifiés. Le texte brut est préférable aux captures d’écran de texte.

Pour les gros fichiers, partage un lien de téléchargement stable, accessible sans interaction ou avec identifiants clairs. Indique la durée de validité du lien. Ajoute des checksums pour vérifier l’intégrité.

Utilise des formats standards comme TXT, PDF, PNG, JPG, PCAP ou PCAPNG, EML, HAR, CSV, et JSON. N’inclus pas de mots de passe, clés privées, ou données personnelles complètes sauf si strictement nécessaire.

Pour la qualité, envoie les emails au format EML avec en-têtes complets, les logs en texte brut, les traces réseau en PCAP ou PCAPNG courts et pertinents, et les captures d’écran en résolution originale.

Pour la sécurité, masque tout secret ; si besoin, place les fichiers dans une archive protégée par mot de passe et communique-le séparément. Pour CSAM/SAM, ne transmets pas les fichiers, fournis uniquement les liens.

## Contacte-nous

Envoie ton signalement à `abuse@zap-hosting.com`. Utilise un objet clair comme `Signalement Abus Phishing` ou `Signalement Abus DDoS`. Envoie un email par incident. Exemple complet ci-dessous :

```
To: abuse@zap-hosting.com
Subject: Signalement Abus Brute Force (SSH)

Emplacement :
- IP cible : XXX.XX.XXX.XX
- Service : SSH
- Port : 22
- Nom d’hôte : v12345.zap-hosting.com

Horodatages (UTC) :
- Première détection : 2025-08-23T09:12:04Z
- Dernière détection : 2025-08-23T10:03:31Z

Description :
"Tentatives répétées de connexion SSH avec des noms d’utilisateur et IP sources changeants. Détecté via anomalies dans auth.log et taux élevé de connexions. Authentification par mot de passe désactivée après détection. Aucune connexion réussie observée."

Preuves :
- Extrait auth.log avec multiples "Failed password" et "Invalid user"
- Extrait fail2ban montrant bans et adresses sources
- PCAP de 60 secondes capturant tentatives TCP sur port 22
- Comptages agrégés : 12 438 tentatives depuis 352 IP sources
- Principales sources avec infos ASN

Extrait log exemple :
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## Et après ?

Notre équipe Abuse traite ton signalement au plus vite et répond rapidement. Nous analysons l’incident et le priorisons selon sa gravité.

Selon l’analyse, nous prenons des mesures incluant notification client, suspension temporaire ou définitive, suppression du contenu signalé, conservation des preuves, et notification des autorités compétentes si nécessaire.