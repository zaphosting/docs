---
id: gameserver-resourcelimit
title: 'Gameserver: Ressourcenlimit - Gameserver entsperren'
description: "Verstehe, warum dein Gameserver wegen Ressourcenlimits gesperrt wurde und entdecke Lösungen, um den Betrieb wiederherzustellen → Jetzt mehr erfahren"
sidebar_label: Ressourcenlimit
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## Einführung

Oh Mist, es ist leider passiert! Aber warum? Die Gründe für eine Sperrung können vielfältig sein. Das muss so schnell wie möglich geprüft und behoben werden. So sieht es aus, wenn dein Gameserver gesperrt wurde:

 ![](https://screensaver01.zap-hosting.com/index.php/s/eSRe2WDkLPnTZxE/preview)
 
 <InlineVoucher />

## Gründe
Der Grund für die Sperrung ist, dass das Ressourcenlimit überschritten wurde. Das bedeutet, dass der Server über einen längeren Zeitraum mehr Ressourcen verbraucht, als du für deinen Service gebucht hast. Das ist kein Problem, wenn das Limit nur kurzfristig überschritten wird. In solchen Fällen stellen wir weiterhin mehr Ressourcen bereit, um eine sofortige Sperrung und mögliche Probleme zu vermeiden.

Wird das Limit jedoch über einen längeren Zeitraum überschritten, wird der Server automatisch gesperrt. Durch Klicken auf das rote Fragezeichen kannst du den Grund mit detaillierteren Informationen sehen.

![](https://screensaver01.zap-hosting.com/index.php/s/bzmyP2LKcbn6yGS/preview)

Die Übersicht zeigt dir, wie viele Ressourcen dir zur Verfügung stehen, wie viel du über einen längeren Zeitraum genutzt hast und wie viel wir für den regulären Betrieb empfehlen. So kannst du erkennen, wo aktives Handeln nötig ist und entsprechende Schritte einleiten.

## Lösungsansätze

Dir stehen drei Optionen zur Verfügung, um deinen Gameserver zu entsperren, das Problem zu beheben und den Betrieb wiederherzustellen. Die Optionen **Fehlerhafte Mods/Skripte über Konsole finden & Server temporär entsperren**, **Upgrade durchführen** und **Support-Ticket erstellen** werden im Folgenden genauer erklärt.



### Konsole
Ein plötzlicher Lastanstieg kann zum Beispiel durch kürzlich vorgenommene Änderungen verursacht werden. Das kann durch Anpassungen von bestehendem Content oder durch Hinzufügen von neuem Content wie Plugins oder Mods passieren. Besonders zusätzliche Plugins/Mods sorgen oft für Probleme. Das kann z.B. durch fehlerhaften oder schlecht programmierten Code verursacht werden.

In manchen Fällen kann so etwas zu einem Memory Leak führen. Das bedeutet, dass Mods/Plugins Speicher reservieren, diesen aber nicht richtig wieder freigeben. Dadurch steigt der Speicherverbrauch kontinuierlich an und überschreitet bald das Limit.

Wie eingangs erklärt, können die Ursachen vielfältig sein. Um das Problem zu analysieren, solltest du zuerst einen Blick in die Serverkonsole werfen. Diese liefert in der Regel hilfreiche Infos, um die möglichen Ursachen einzugrenzen. Klicke dafür auf den **Konsole**-Button bei **Option 1**. ![](https://screensaver01.zap-hosting.com/index.php/s/g9N5D7aqTPwX2R7/preview)

:::info Service entsperren 
Mit **Option 1** wird dein Service wieder entsperrt, damit du das Problem angehen kannst. Beachte, dass bei erneutem langanhaltendem Lastüberschuss der Service wieder gesperrt wird. Bitte versuche aktiv, das Problem zu beheben und Lösungen zu finden. 
:::



### Upgrade

Ein Lastanstieg muss aber nicht immer durch Probleme verursacht werden. Je nach Spiel kann das auch durch das Wachstum des Projekts passieren. Wenn der Umfang des Spiels größer oder umfangreicher wird, bringt das auch dauerhaft eine höhere Auslastung mit sich. In dem Fall wäre ein kostenpflichtiges Upgrade die dauerhafte Lösung. Du kannst die Statistiken checken, um zu sehen, wie sich die Auslastung in letzter Zeit entwickelt hat. Unsere Empfehlung für dein Upgrade kannst du ebenfalls verfolgen. Klicke auf den **Ausführen**-Button bei **Option 2**.

![](https://screensaver01.zap-hosting.com/index.php/s/JBAa2mFfyW5p9kC/preview)

### Support kontaktieren

Option 1 und 2 haben dir nicht geholfen oder sind nicht ganz verständlich? Kein Stress! Melde dich gerne bei unserem Support-Team, wenn du unsere Hilfe brauchst. Wir schauen uns das Problem gerne gemeinsam mit dir genauer an, um die Ursache und mögliche Lösungen zu finden. Erstelle dafür ein Ticket, indem du auf den **Ausführen**-Button bei **Option 3** klickst.

![](https://screensaver01.zap-hosting.com/index.php/s/HPb5aT5xQgwkbcm/preview)



## Abschluss

Wenn du einem oder mehreren der Lösungsansätze gefolgt bist, solltest du das Problem erfolgreich gelöst und die Funktionalität deines Servers wiederhergestellt haben. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />