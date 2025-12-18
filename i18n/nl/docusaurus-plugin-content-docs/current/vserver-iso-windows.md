---
id: vserver-iso-windows
title: "VPS: Installatie van Windows X/Windows Server 20XX"
description: "Ontdek hoe je Windows-installaties aanpast met op maat gemaakte ISO’s voor volledige controle over setup en drivers → Leer het nu"
sidebar_label: "Installeer Windows X/WS 20XX"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introductie
Het installeren van een custom ISO geeft je volledige controle over het opzetten van Windows-omgevingen zoals Windows 10 of Windows Server 2016/2019/2022/2025. In tegenstelling tot onze standaard vooraf gebouwde OS-images, kun je hiermee een installatie-medium gebruiken dat precies is afgestemd op jouw wensen, bijvoorbeeld met speciale drivers, vooraf ingestelde configuraties of extra softwarepakketten.

<InlineVoucher />



## Voorbereiding

Voor de installatie en configuratie van een besturingssysteem is het eerst belangrijk om de bijbehorende ISO van het OS te mounten. Als je nog niet bekend bent met het mounten van een ISO-bestand, kun je het beste onze [Eigen ISO](vserver-iso.md) handleiding raadplegen.



## Installatie

Bij de start van de Windows-installatie word je door de eerste setup-stappen geleid. Kies eerst de gewenste **taal**, stel daarna het **toetsenbordindeling** in en kies vervolgens de **installatiemethode**. Voor de demo gebruiken we hier de optie **Vorige versie van Setup**. In de volgende stap selecteer je de editie, in dit voorbeeld is dat **Windows Server 2025 Datacenter Desktop Experience**, wat de volledige grafische interface biedt.



![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

Op dit punt in de installatie zie je dat er geen partities worden weergegeven. Dit is geen fout, maar omdat Windows zonder extra drivers de virtuele schijven niet kan detecteren. De essentiële VirtIO-drivers zijn nodig voor het herkennen en correct afhandelen van de schijven. Deze drivers moeten nu worden gemount en geïnstalleerd, waarna de schijven verschijnen en je verder kunt met partitioneren en de OS-installatie.



### VirtIO Driver(s)

Voordat je het besturingssysteem installeert, moeten de VirtIO-drivers worden geïnstalleerd. Deze Windows-drivers zijn geoptimaliseerd voor gebruik met KVM-gebaseerde hypervisors en zorgen ervoor dat Windows-VM’s met maximale performance en compatibiliteit draaien.

Hiervoor moet je tijdelijk het installatie-medium wisselen naar de `virtio-win.iso`. Selecteer het VirtIO ISO-bestand uit de beschikbare ISO’s en klik op **Mount**. Zo zijn de drivers tijdens de setup beschikbaar en kunnen ze geïnstalleerd worden voordat je verder gaat met de OS-installatie.



![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning NIET HERSTARTEN
Als je **tijdelijk** wisselt naar de VirtIO ISO, hoef je alleen de ISO te selecteren. Herstart het systeem **<u>niet</u>**, want dan gaat je voortgang verloren.

:::

De benodigde drivers zijn verdeeld over drie aparte mappen: **Balloon**, **NetKVM** en **vioscsi**. Elke map bevat een specifiek type driver die essentieel is voor het draaien van een Windows VM op een KVM-hypervisor.

- **Balloon:** Deze driver beheert het geheugen dynamisch, waardoor het toegewezen RAM van de VM kan groeien of krimpen zonder reboot.  
- **NetKVM:** Deze driver levert een volledig functionele en geoptimaliseerde netwerkinterface, voor stabiele en snelle netwerkverbindingen.  
- **Vioscsi:** Dit is een gespecialiseerde SCSI-controller driver die zorgt voor correcte detectie en snelle toegang tot virtuele harde schijven. Het verbetert de I/O-prestaties en garandeert dat Windows de virtuele disks herkent.  

In elke map vind je een submap die overeenkomt met de systeemarchitectuur. Tijdens de installatie moet je de submap kiezen die past bij het OS dat je installeert. Gebruik altijd de amd64-architectuur voor dit proces. <u>Herhaal dit voor alle drie de driver-mappen, zoals in de screenshot te zien is.</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

Als de VirtIO-drivers succesvol zijn geïnstalleerd, kun je verder met de eigenlijke OS-installatie. Wissel hiervoor weer de ISO. Kies nu de originele installatie-ISO van het besturingssysteem en open de VNC-console opnieuw om door te gaan met de installatie.

![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### Partitioneren en selecteren

De volgende stap is het partitioneren. Verwijder eerst alle onbekende partities. Selecteer daarna de nieuw beschikbare niet-toegewezen partitie als doel voor de OS-installatie.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

Klik daarna op **Volgende** om door te gaan, de rest van de installatie verloopt automatisch. Aan het einde wordt je gevraagd om de inloggegevens voor het Administrator-account in te stellen.

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## Configuratie

Als de installatie van het OS klaar is, zijn er nog een paar laatste configuratiestappen nodig om het systeem veilig en betrouwbaar te gebruiken. Dit omvat het inschakelen en beheren van toegang via **Remote Desktop (RDP)**, het instellen van **firewallregels** voor bescherming en functionaliteit, en het configureren van de **netwerkinstellingen** om de server goed in je netwerk te integreren.

Met deze aanpassingen zorg je dat remote toegang werkt, monitoring en statuschecks zonder problemen verlopen, en de server stabiele en voorspelbare netwerkparameters heeft binnen jouw infrastructuur.



### RDP Configuratie

Om Remote Desktop (RDP) op Windows te activeren, is de procedure grotendeels hetzelfde voor Windows 10 (client systemen) en Windows Server 2016/2019/2022/2025. Open het **Configuratiescherm** of **Instellingen**, ga naar **Systeem → Extern bureaublad** (bij client edities) of **Systeemeigenschappen → Extern** (bij server edities) en zet de optie **Externe verbindingen met deze computer toestaan** aan. Bij server versies heet dit **Remote Desktop inschakelen**.

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### Firewall Configuratie

Voor een volledig geïnitieerde server en succesvolle statuschecks zoals ping-tests, moet het **ICMP-protocol** worden toegestaan via de Windows Firewall. Zonder deze regel kunnen monitoringtools en netwerkchecks de server niet bereiken, wat resulteert in mislukte health checks.

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

Om ICMP toe te staan, open je **Windows Firewall met geavanceerde beveiliging** en ga je naar de binnenkomende regels. Maak een nieuwe aangepaste regel aan, stel het protocol in op "Any" en selecteer **ICMPv4**. Configureer de regel voor alle poorten en kies de profielen (Domein, Privé, Openbaar) waar de regel actief moet zijn. Meestal is het aan te raden om alle profielen te selecteren. Geef de regel een duidelijke naam zoals *Toestaan inkomend ICMP* en rond de wizard af.

Vanaf dat moment accepteert de server ICMP-verzoeken, waardoor commando’s zoals `ping` en monitoring systemen de server kunnen bereiken en de status kunnen controleren.



### Netwerk Configuratie

Om handmatig de netwerkinstellingen in Windows te configureren, open je eerst het **Netwerkcentrum** via het Configuratiescherm of de taakbalk. Selecteer de juiste netwerkadapter (LAN of Wi-Fi), klik er met de rechtermuisknop op en open de **Eigenschappen**. Selecteer uit de lijst **Internet Protocol versie 4 (TCP/IPv4)** en klik op **Eigenschappen**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

In het venster verander je de instelling van IP-adres automatisch verkrijgen naar Het volgende IP-adres gebruiken. Vul nu het **IP-adres**, **subnetmasker** en **standaardgateway** in voor je server. Zet onderaan de DNS-instellingen op handmatig en geef `1.1.1.1` en `8.8.8.8` op als primaire en secundaire **DNS**-servers. Bevestig met **OK** om de statische netwerkconfiguratie toe te passen.









## Conclusie

Gefeliciteerd, je hebt Windows succesvol geïnstalleerd en geconfigureerd. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />