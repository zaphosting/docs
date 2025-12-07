---
id: dedicated-linux-docker
title: "Dedicated Server: Docker Installeren"
description: "Ontdek hoe je Docker installeert op je Linux-server om geïsoleerde applicaties efficiënt te draaien en je resources optimaal te benutten → Leer het nu"
sidebar_label: Docker Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introductie

Docker is een lichte, open source virtualisatiesoftware waarmee je services of applicaties geïsoleerd kunt draaien op één systeem. In tegenstelling tot echte virtuele machines wordt er geen extra besturingssysteem geëmuleerd of gehost, maar alleen een applicatieomgeving binnen het host-systeem. Dit bespaart niet alleen resources, maar zorgt ook voor een lage overhead vergeleken met volledige virtualisatie. In deze handleiding leggen we uit hoe je Docker op je server installeert.

## Voorbereiding

Om te beginnen moet je via SSH verbinding maken met je Linux-server. Bekijk onze [Eerste toegang (SSH)](dedicated-linux-ssh.md) gids als je hier hulp bij nodig hebt. In deze handleiding gebruiken we Ubuntu als Linux-distributie.

### Docker Compatibiliteit inschakelen

Je moet **Docker Compatibiliteit** inschakelen in je webinterface om Docker containers te kunnen draaien, anders krijg je `Permission Denied` fouten.

Ga naar de **Instellingen** sectie in het webinterfacepaneel van je server, zet de optie **Docker Compatibiliteit** aan en sla op.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Zorg er na het opslaan voor dat je je server herstart voordat je verder gaat.

## Installatie

Nu je verbonden bent met je Linux-server, kun je doorgaan met de installatie. Kies hieronder je Linux-distributie om de relevante installatie-instructies te zien.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

Om te beginnen voeg je Docker’s pakket toe via `apt` en stel je het in. Zo kun je Docker in de toekomst makkelijk installeren en updaten vanuit de repository.

Gebruik de volgende commando’s om de officiële GPG-sleutel van Docker toe te voegen aan je repositorylijst.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Als dit klaar is, voeg je de repository toe aan de `apt` bronnen met dit commando:
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Update nu je pakketlijst met:
```
sudo apt-get update
```

Je hebt nu de Docker `apt` repository ingesteld. Installeer als laatste stap de Docker pakketten met:
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Begin met het installeren van het `dnf-plugins-core` pakket, dat helpt bij het beheren van repositories.
```
sudo dnf -y install dnf-plugins-core
```

Voeg daarna de Docker repository toe en installeer Docker met:
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker is nu geïnstalleerd. Start en activeer de service zodat Docker kan draaien:
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Controleer of de installatie gelukt is door de **hello-world** image te draaien met:
```
sudo docker run hello-world
```

Als het goed is zie je een welkombericht met wat basisinfo. Krijg je `Permission Denied` fouten? Check dan of je de **Docker Compatibiliteit** optie hebt aangezet in de webinterface en de server hebt herstart zoals beschreven in de voorbereiding.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Gefeliciteerd, Docker is nu succesvol geïnstalleerd op je Linux-server.

## Na de installatie

Nu Docker draait op je server, kun je nog wat extra instellingen doen om bijvoorbeeld Docker-commando’s zonder `sudo` te kunnen uitvoeren en Docker automatisch te laten starten bij het opstarten van de server.

### Docker gebruiken zonder Sudo

Je kunt het gebruik van `sudo` voor Docker-commando’s weghalen door een nieuwe Docker-groep aan te maken en je gebruikers daaraan toe te voegen. Dit maakt het gebruik makkelijker, maar let op: dit geeft gebruikers indirect root-privileges.

Maak de `docker` groep aan en voeg je huidige gebruiker toe met:
```
# Maak Docker groep aan
sudo groupadd docker

# Voeg huidige gebruiker toe aan Docker groep
sudo usermod -aG docker $USER
```

We raden aan je server te herstarten zodat de groepslidmaatschappen goed worden ingeladen. Je kunt ook `newgrp docker` gebruiken.

Controleer daarna of je Docker-commando’s zonder `sudo` kunt draaien door opnieuw `docker run hello-world` te proberen.

:::tip
Als je eerder met `sudo` hebt gewerkt, kan er een fout over een config-bestand komen. Verwijder dan de Docker directory met `rmdir ~/.docker/`. Deze wordt automatisch opnieuw aangemaakt bij het volgende commando.
:::

Als het commando werkt zonder `sudo`, heb je Docker succesvol ingesteld zonder sudo-vereiste.

### Docker automatisch starten bij opstarten

Je kunt Docker zo instellen dat het automatisch start bij het opstarten van je server via `systemd`, wat door de meeste Linux-distributies wordt gebruikt.

:::tip
Op Ubuntu & Debian start Docker standaard automatisch mee bij het opstarten. Gebruik je deze distributies? Dan hoef je niets te doen.
:::

Activeer Docker voor automatisch starten met:
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Wil je het automatisch starten weer uitzetten, vervang dan `enable` door `disable`. Je kunt de service ook beheren met deze commando’s:
```
sudo systemctl start [jouw_service]
sudo systemctl stop [jouw_service]
sudo systemctl restart [jouw_service]
```

## Afsluiting

Gefeliciteerd, je hebt Docker succesvol geïnstalleerd en ingesteld op je Linux-server! Heb je nog vragen of problemen? Neem gerust contact op met onze support, we helpen je elke dag graag verder!