---
id: vserver-linux-docker
title: "VPS: Docker Installeren"
description: "Ontdek hoe je Docker installeert op je Linux-server om geïsoleerde applicaties efficiënt te draaien en systeembronnen te besparen → Leer nu meer"
sidebar_label: Docker Installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introductie

Docker is een lichte, open source virtualisatiesoftware om diensten of applicaties geïsoleerd te draaien op één systeem. In tegenstelling tot echte virtuele machines wordt er geen extra besturingssysteem geëmuleerd of gehost, maar alleen een applicatieomgeving binnen het host-systeem. Dit bespaart niet alleen over het algemeen resources, maar zorgt ook voor een lage overhead vergeleken met volledige virtualisatie. In deze gids behandelen we het proces van het installeren van Docker op jouw server.

<InlineVoucher />

## Voorbereiding

Om te beginnen moet je via SSH verbinding maken met je Linux-server. Bekijk onze [Eerste toegang (SSH)](vserver-linux-ssh.md) gids als je hierbij hulp nodig hebt. In deze handleiding gebruiken we Ubuntu als Linux-distributie.



## Installatie

Nu je verbonden bent met je Linux-server, kun je doorgaan met de installatiemethoden. Kies een van de Linux repositories hieronder om de relevante installatie-stappen te zien.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

Om te beginnen moet je Docker’s pakket toevoegen via `apt` en het instellen. Dit maakt het in de toekomst makkelijk om Docker te installeren en updaten vanuit de repository.

Gebruik de volgende commando’s om de officiële GPG-sleutel van Docker toe te voegen aan je repository-lijst.

```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Als dit is ingesteld, moet je de repository toevoegen aan de `apt`-bronnen met het volgende commando.

```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Nu je de Docker-repository hebt toegevoegd aan je bronnen, voer je het `apt-get update` commando uit om de wijzigingen op te halen.

```
sudo apt-get update
```

Op dit punt heb je de Docker `apt` repository succesvol ingesteld. Als laatste stap moet je de Docker pakketten installeren. Je kunt de nieuwste versie installeren met het volgende commando.

```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Om te beginnen moet je het `dnf-plugins-core` pakket installeren, wat helpt bij het beheren van repositories.

```
sudo dnf -y install dnf-plugins-core
```

Met het pakket geïnstalleerd, voeg je de Docker repository toe en installeer je Docker met het volgende commando.

```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker zou nu geïnstalleerd moeten zijn. Als laatste stap moet je Docker starten en inschakelen voordat het kan functioneren.

```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Om te controleren of je installatie gelukt is, probeer de **hello-world** image te draaien met het volgende commando.

```
sudo docker run hello-world
```

Als het lukt, zie je een handige hello-bericht in de chat met wat basisinformatie. Als je `Permission Denied` fouten krijgt, zorg er dan voor dat je de **Docker Compatibility** optie hebt ingeschakeld in je webinterface en de server hebt herstart zoals beschreven in de voorbereiding.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Je hebt Docker succesvol geïnstalleerd op je Linux-server.

## Post-Installatie Setup

Nu Docker geïnstalleerd is op je server, kun je ervoor kiezen om extra instellingen te doen zodat je geen sudo meer hoeft te gebruiken bij Docker-commando’s en Docker automatisch start bij het opstarten van de server.

### Docker beheren zonder Sudo

Je kunt het gebruik van `sudo` voor alle Docker-commando’s weghalen door een nieuwe Docker-groep aan te maken en je gebruikers daaraan toe te voegen. Dit maakt het gebruik makkelijker, maar wees je ervan bewust dat dit indirect root-privileges aan de gebruiker geeft.

Maak de `docker` groep aan en voeg je huidige gebruiker toe met de volgende commando’s.

```
# Maak Docker groep aan
sudo groupadd docker

# Voeg huidige gebruiker toe aan Docker groep
sudo usermod -aG docker $USER
```

Als dit gedaan is, raden we aan je server te herstarten zodat de groepslidmaatschappen opnieuw worden ingeladen. Je kunt ook `newgrp docker` gebruiken om dit te doen.

Controleer nu of je Docker-commando’s kunt uitvoeren zonder `sudo` door het commando `docker run hello-world` opnieuw te draaien.

:::tip
Soms krijg je een foutmelding over een config-bestand als je het commando eerder met `sudo` hebt uitgevoerd. Om dit op te lossen, verwijder je de Docker-map met `rmdir ~/.docker/`. Deze wordt automatisch opnieuw aangemaakt bij het volgende gebruik.
:::

Als het commando werkt zoals verwacht, heb je Docker succesvol ingesteld om zonder `sudo` te draaien.

### Docker automatisch starten bij opstarten

Je kunt Docker zo instellen dat het automatisch start bij het opstarten van de server via `systemd`, wat door de meeste Linux-distributies wordt gebruikt.

:::tip
Op zowel Ubuntu als Debian start Docker standaard automatisch op bij het opstarten. Als je deze distributies gebruikt, hoef je hier niets voor te doen.
:::

Je kunt de Docker-service inschakelen om automatisch te starten met de volgende commando’s.

```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Om de service uit te schakelen bij opstarten vervang je `enable` door `disable`. Je kunt de service ook beheren met verschillende `systemctl` subcommando’s, zoals:

```
sudo systemctl start [jouw_service]
sudo systemctl stop [jouw_service]
sudo systemctl restart [jouw_service]
```

## Conclusie

Gefeliciteerd, je hebt Docker succesvol geïnstalleerd en geconfigureerd op je Linux-server! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />