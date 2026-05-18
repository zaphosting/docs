---
id: hytale-permissions
title: "Hytale: Hantera användar- och gruppbehörigheter"
description: "Hantera användar- och gruppbehörigheter på din Hytale-server → Lär dig mer nu"
sidebar_label: Behörigheter
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Att hantera behörigheter på en Hytale-server låter dig styra vad spelare kan och inte kan göra. Det inkluderar att ge olika nivåer av åtkomst till pålitliga spelare, moderatorer och administratörer. Att sätta upp behörigheter rätt är superviktigt för att hålla en balanserad och säker servermiljö där spelarna kan njuta av spelet utan oönskade fusk eller missbruk.

Hytales serverprogramvara stödjer hierarkiska behörighetsnivåer som bestämmer vilka kommandon och åtgärder varje spelare kan utföra. Dessa kan hanteras via live-konsolen eller genom konfigurationsinställningar beroende på din serversetup.

:::info Tidig Access-info

Hytale släpptes den 13 januari 2026 och finns just nu i Early Access. Eftersom spelet fortfarande är under aktiv utveckling kan serverprogramvara, konfigurationsfiler, moddstöd och installationsflöden fortsätta att ändras över tid.

:::

<InlineVoucher />



## Översikt över behörighetsnivåer

Behörigheter definierar vilka åtgärder en spelare får göra på servern. På den mest grundläggande nivån har vanliga spelare bara standardspelbehörigheter, som att röra sig, interagera med världen och chatta. Högre behörighetsnivåer som operatör eller admin ger tillgång till serverkommandon som påverkar gameplay, andra spelare, serverkonfiguration och moderationsverktyg.

Behörighetssystemet består av två huvuddelar:

- **Användarbehörigheter** som gäller direkt för en specifik spelare
- **Gruppbehörigheter** som låter dig samla behörigheter och tilldela flera spelare samtidigt

Varje spelare identifieras internt med en UUID, vilket krävs när du hanterar behörigheter via kommandon.



## Hantera användarbehörigheter

Användarbehörigheter låter dig ge eller ta bort specifika behörigheter för en enskild spelare.

### Visa användarbehörigheter

För att visa alla behörigheter som är direkt tilldelade en användare. Det här kommandot visar varje behörighet som just nu gäller för den angivna användaren.

```
/perm user list <uuid>
```



### Lägg till behörigheter till en användare

För att ge en eller flera behörigheter direkt till en användare. De angivna behörigheterna läggs till omedelbart och träder i kraft utan att servern behöver startas om.

```
/perm user add <uuid> <permissions>
```



### Ta bort behörigheter från en användare

För att ta bort behörigheter från en användare. Detta tar bara bort de angivna behörigheterna och lämnar alla andra oförändrade.

```
/perm user remove <uuid> <permissions>
```



## Hantera användargruppstilldelningar

Utöver direkta behörigheter kan användare ärva behörigheter via grupper.

### Visa användargruppsbehörigheter

Det här kommandot visar vilka behörighetsgrupper användaren för närvarande är medlem i.

```
/perm user group list <uuid>
```



### Lägg till en användare i en grupp

För att tilldela en användare till en behörighetsgrupp. När användaren är tillagd ärver hen alla behörigheter som definieras för den gruppen.

```
/perm user group add <uuid> <group>
```



### Ta bort en användare från en grupp

För att ta bort en användare från en behörighetsgrupp. Efter borttagning får användaren inte längre behörigheter från den gruppen.

```
/perm user group remove <uuid> <group>
```



## Hantera gruppbehörigheter

Grupper gör det möjligt att hantera behörigheter centralt och återanvända dem för flera användare.

### Visa gruppbehörigheter

För att visa alla behörigheter som är tilldelade en grupp. Det här kommandot ger en översikt över varje behörighet kopplad till den angivna gruppen.

```
/perm group list <group>
```



### Lägg till behörigheter till en grupp

För att lägga till en eller flera behörigheter till en grupp. Alla användare som är tilldelade den här gruppen ärver omedelbart de nya behörigheterna.

```
/perm group add <group> <permissions>
```



### Ta bort behörigheter från en grupp

Detta tar bara bort de angivna behörigheterna från gruppen utan att påverka andra behörigheter.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />