---
id: ddos-protection-pletx
title: Protection DDoS PletX chez ZAP Hosting
description: "Découvrez comment ZAP Hosting protège vos serveurs avec une défense proactive et en temps réel contre les attaques DDoS, adaptée à chaque service que vous utilisez → En savoir plus maintenant"
sidebar_label: PletX
---

## Introduction

Les attaques DDoS (Déni de Service Distribué) sont des tentatives malveillantes visant à perturber le trafic normal d’un serveur, service ou réseau ciblé en le submergeant d’un trafic entrant excessif. Pour garantir un fonctionnement stable et ininterrompu à nos clients, ZAP Hosting s’appuie sur des systèmes dédiés de protection DDoS adaptés à chaque emplacement de centre de données.

Une des technologies clés utilisées dans notre infrastructure est PletX, une plateforme de protection très adaptative qui filtre et atténue les attaques en temps réel. Ce document explique comment fonctionne PletX, quels services en bénéficient et pourquoi il offre un avantage significatif pour les environnements d’hébergement critiques en termes de performance.

## Où la Protection est Utilisée

PletX est déjà entièrement déployé sur notre site FFM/Eygelshoven, où il protège tous les produits hébergés, y compris les serveurs de jeux, VPS, serveurs dédiés, serveurs TeamSpeak, bots TS3 et Discord ainsi que les services d’hébergement web. Cela garantit une protection complète et cohérente sur toute la gamme de produits à ce site.

Nous préparons actuellement le déploiement pour nos emplacements US à Ashburn, Dallas et Los Angeles, où PletX sera également disponible très bientôt.

## Comment Fonctionne la Protection DDoS

La protection PletX sur nos sites est toujours active et entièrement synchronisée avec notre réseau. Tout le trafic entrant est acheminé via le système de filtrage PletX avant d’atteindre notre infrastructure. Cela garantit que le trafic malveillant est éliminé le plus tôt possible et n’atteint jamais votre serveur.

### Détection Automatique des Protocoles

PletX analyse en continu le trafic entrant et identifie les signatures spécifiques aux protocoles dès que du trafic réel apparaît sur un port. Par exemple, lorsque des joueurs se connectent à un serveur FiveM sur son port de jeu, par exemple 30120,

il détecte la structure caractéristique des paquets et applique automatiquement la règle FiveM appropriée. Il en va de même pour d’autres services ; si un serveur Minecraft reçoit du trafic sur le port 25565, le système reconnaît la poignée de main Minecraft et crée une règle correspondante.

Lorsqu’un utilisateur se connecte à un VPS ou serveur dédié via SSH sur le port 22, PletX reconnaît la poignée de main SSH et active une règle SSH. Pour les systèmes Windows, le trafic RDP sur le port 3389 est détecté et une règle spécifique RDP est créée.

Si WireGuard ou OpenVPN est utilisé sur un port personnalisé, PletX identifie le premier échange valide et applique la règle VPN correcte.

Dans tous les cas, une fois que PletX a identifié le protocole, seul le trafic légitime pour ce protocole est autorisé tandis que le trafic non lié est filtré avant d’atteindre le serveur.

### Profils de Protection Supportés

PletX supporte un large éventail de protocoles courants pour services et jeux. Cela inclut des jeux populaires comme FiveM, Minecraft, des titres utilisant le Steam Source Engine, des services basés sur Metin 2, des jeux utilisant RakNet, SAMP, Growtopia et des extensions comme PlasmoVoice. Les applications vocales telles que TeamSpeak sont également reconnues automatiquement.

En plus du trafic lié au gaming, PletX identifie les protocoles d’accès à distance comme SSH et RDP ainsi que les protocoles de réseau sécurisé incluant WireGuard et OpenVPN.

<details>
  <summary>Serveurs de jeux</summary>
- FiveM
- Minecraft
- Divers jeux supportant Steam Source Engine
- Metin 2 Auth & Channel
- Novalife
- Jeux basés sur RakNet
- SAMP
- Growtopia
- PlasmoVoice
- et plus..
</details>

<details>
  <summary>Serveurs vocaux</summary>

- TeamSpeak
- PlasmoVoice
</details>

<details>
  <summary>Accès à distance</summary>
- SSH
- RDP
</details>

<details>
  <summary>VPN et Réseaux Sécurisés</summary>

- WireGuard
- OpenVPN
</details>

Tout protocole non reconnu par PletX est traité comme inconnu, ce qui peut occasionnellement entraîner des faux positifs ou un comportement inattendu.

## Trafic Web et Services Non Supportés

PletX ne filtre pas actuellement le trafic HTTP ou HTTPS. Les applications web ou protocoles non supportés peuvent donc parfois subir des faux positifs. Si vous êtes concerné, procédez comme suit :

1. Ouvrez un ticket de support chez ZAP-Hosting
2. Nous analysons le trafic
3. PletX peut déployer des ajustements et corrections personnalisés sur demande

Cette approche est particulièrement destinée aux services rares ou spécialisés. Pour les projets web, nous recommandons de continuer à utiliser Cloudflare. Idéalement, cela inclut Cloudflare Proxy ou CDN pour les sites web et Cloudflare Tunnel pour FiveM/RedM TxAdmin ou autres tableaux de bord web.

## Désactivation Temporaire de la Protection

Une fonctionnalité de désactivation temporaire de la protection sera bientôt disponible. Cette option à venir permettra aux clients de désactiver complètement la protection DDoS pour des serveurs spécifiques lorsque nécessaire. Elle est particulièrement utile pour les environnements sans risque DDoS significatif, les systèmes à fort volume comme les plateformes de télémétrie ou de monitoring, ainsi que les applications générant des trafics atypiques pouvant déclencher des faux positifs.

Cette fonctionnalité offre aux utilisateurs avancés un contrôle total sur leur comportement réseau, tandis que les clients d’hébergement de jeux et d’applications continuent de bénéficier d’une protection automatique et fiable.