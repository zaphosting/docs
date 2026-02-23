---
id: dedicated-linux-docker
title: "Docker installeren op een Linux-server - Containers draaien en beheren op jouw infrastructuur"
description: "Ontdek hoe je Docker installeert op je Linux-server om geïsoleerde applicaties efficiënt te draaien en je resources te optimaliseren → Leer het nu"
sidebar_label: Docker installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introductie

Docker is een lichte, open source virtualisatiesoftware waarmee je services of applicaties geïsoleerd kunt draaien op één systeem. In tegenstelling tot echte virtuele machines wordt er geen extra besturingssysteem geëmuleerd of gehost, maar alleen een applicatieomgeving binnen het host-systeem. Dit bespaart niet alleen resources, maar zorgt ook voor een lage overhead vergeleken met volledige virtualisatie. In deze gids leggen we uit hoe je Docker op je server installeert.

## Voorbereiding

Om te beginnen moet je via SSH verbinding maken met je Linux-server. Bekijk onze [Eerste toegang (SSH)](dedicated-linux-ssh.md) gids als je hier hulp bij nodig hebt. In deze handleiding gebruiken we Ubuntu als Linux-distributie.

## Installatie

Nu je verbonden bent met je Linux-server, kun je doorgaan met de installatie. Kies hieronder jouw Linux-distributie om de relevante installatie-instructies te zien.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Om te starten moet je de Docker-package toevoegen via `apt` en deze instellen. Zo kun je Docker in de toekomst makkelijk installeren en updaten vanuit de repository.

Gebruik de volgende commando’s om de officiële GPG-sleutel van Docker toe te voegen aan je repository-lijst.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Als dit is ingesteld, voeg je de repository toe aan de `apt`-bronnen met het volgende commando.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Nu je de Docker-repository hebt toegevoegd, update je de pakketlijst met:
```
sudo apt-get update
```

Je hebt nu de Docker `apt`-repository succesvol ingesteld. Als laatste stap installeer je de Docker-pakketten met het volgende commando:
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="debian" label="Debian" default>

Om te starten moet je de Docker-package toevoegen via `apt` en deze instellen. Zo kun je Docker in de toekomst makkelijk installeren en updaten vanuit de repository.

Gebruik de volgende commando’s om de officiële GPG-sleutel van Docker toe te voegen aan je repository-lijst.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Als dit is ingesteld, voeg je de repository toe aan de `apt`-bronnen met het volgende commando.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Nu je de Docker-repository hebt toegevoegd, update je de pakketlijst met:
```
sudo apt-get update
```

Je hebt nu de Docker `apt`-repository succesvol ingesteld. Als laatste stap installeer je de Docker-pakketten met het volgende commando:
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Om te starten installeer je eerst het `dnf-plugins-core` pakket, dat helpt bij het beheren van repositories.
```
sudo dnf -y install dnf-plugins-core
```

Met het pakket geïnstalleerd voeg je de Docker-repository toe en installeer je Docker met het volgende commando.
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker is nu geïnstalleerd. Als laatste stap moet je Docker starten en inschakelen zodat het werkt.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Om te controleren of de installatie gelukt is, probeer de **hello-world** image te draaien met het volgende commando:
```
sudo docker run hello-world
```

Als het lukt, zie je een welkombericht met wat basisinformatie. Krijg je een `Permission Denied` fout? Zorg dan dat je de **Docker Compatibility** optie hebt aangezet in je webinterface en de server opnieuw hebt gestart zoals beschreven in de voorbereiding.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Je hebt Docker succesvol geïnstalleerd op je Linux-server.

## Na de installatie

Nu Docker geïnstalleerd is, kun je nog wat extra instellingen doen om bijvoorbeeld Docker-commando’s zonder sudo te kunnen draaien en Docker automatisch te laten starten bij het opstarten van de server.

### Docker gebruiken zonder Sudo

Je kunt voorkomen dat je steeds `sudo` moet typen voor Docker-commando’s door een nieuwe Docker-groep aan te maken en je gebruikers daaraan toe te voegen. Dit maakt het gebruik makkelijker, maar let op: dit geeft gebruikers indirect rootrechten.

Maak de `docker` groep aan en voeg je huidige gebruiker toe met deze commando’s:
```
# Maak Docker groep aan
sudo groupadd docker

# Voeg huidige gebruiker toe aan Docker groep
sudo usermod -aG docker $USER
```

We raden aan om je server opnieuw op te starten zodat de groepslidmaatschappen goed worden ingeladen. Je kunt ook `newgrp docker` gebruiken om dit direct te doen.

Controleer daarna of je Docker-commando’s zonder `sudo` kunt draaien door opnieuw `docker run hello-world` te proberen.

:::tip
Soms krijg je een foutmelding over een configbestand als je het commando eerder met `sudo` hebt uitgevoerd. Verwijder dan de Docker-map met `rmdir ~/.docker/`. Deze wordt automatisch opnieuw aangemaakt bij het volgende commando.
:::

Als het commando werkt, heb je Docker succesvol ingesteld om zonder `sudo` te draaien.

### Docker automatisch starten bij opstarten

Je kunt Docker zo instellen dat het automatisch start bij het opstarten van je server via `systemd`, wat door de meeste Linux-distributies wordt gebruikt.

:::tip
Op Ubuntu en Debian start Docker standaard automatisch mee bij het opstarten. Gebruik je deze distributies? Dan hoef je niets te doen.
:::

Je schakelt automatisch starten in met deze commando’s:
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Wil je het automatisch starten weer uitzetten? Vervang `enable` dan door `disable`. Je kunt de service ook beheren met deze `systemctl` commando’s:
```
sudo systemctl start [jouw_service]
sudo systemctl stop [jouw_service]
sudo systemctl restart [jouw_service]
```

## Afsluiting

Gefeliciteerd, je hebt Docker succesvol geïnstalleerd en ingesteld op je Linux-server! Heb je nog vragen of problemen? Neem gerust contact op met onze support, we helpen je elke dag graag verder!