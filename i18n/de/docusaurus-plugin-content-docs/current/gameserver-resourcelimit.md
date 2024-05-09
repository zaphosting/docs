---
id: gameserver-resourcelimit
title: 'Gameserver: Ressourcenlimit - Gameserver freischalten'
description: Informationen, wie du deinen Gameserver freischalten kannst, wenn er durch Überschreitung des Ressourcenlimits gesperrt wurde - ZAP-Hosting.com Dokumentation
sidebar_label: Ressourcenlimit
---



## Sperrung deines Gameservers

Oh nein, leider ist es passiert! Doch warum? Die Ursachen für eine Sperrung können vielfältig sein. Dies gilt es zu überprüfen und schnellstmöglich zu beheben. Wenn dein Gameserver gesperrt worden ist, dann sieht das ganze folgendermaßen so aus: 

![image](https://user-images.githubusercontent.com/13604413/159170760-095b4170-6039-4e6b-9774-ab468c2d754b.png)



Die Ursache für die Sperrung ist eine Überschreitung des Ressourcenlimits. Das bedeutet, dass der Server über einen längeren Zeitraum mehr Ressourcen verbraucht, als du für deinen Dienst gebucht hast. Bei einer kurzen Überschreitung ist das kein Problem. Dort stellen wir dennoch auch mehr zur Verfügung, um eine umgehende Sperrung und Probleme zu vermeiden. 

Sollte diese allerdings über einen längeren Zeitraum überschritten werden, dann wird der Server automatisch gesperrt. Durch einen Klick auf das rote Fragezeichen kann man sich den Grund mit weiteren detaillierten Informationen anschauen.

![image](https://user-images.githubusercontent.com/13604413/159170763-e2668971-6308-4cfe-b69e-43877252ca86.png)



In der Übersicht kannst du nachvollziehen, wie viel Ressourcen dir zur Verfügung stehen, wie viel du über einen längeren Zeitraum verbraucht hast und wie viel Ressourcen wir dir für einen regulären Gebrauch empfehlen würden. Dies soll dir die Möglichkeit geben zu erkennen, wo aktiv Handlungsbedarf besteht und um entsprechende Maßnahmen ergreifen zu können. 



## Freischaltung deines Gameservers

Für die Behebung des Problems und dem Wiederinstandsetzen des Betriebs stehen dir zur Freischaltung deines Gameservers drei Optionen zur Auswahl.   Die Auswahloptionen **Fehlerhafte Mods/Scripts per Konsole suchen & Server temporär freischalten**, **Upgrade durchführen** und **Support-Ticket erstellen** werden dir im folgenden genauer erklärt. 



### Konsole
Eine plötzliche Erhöhung der Auslastung kann beispielsweise durch kürzlich vorgenommene Änderungen entstehen. Das kann sowohl durch das Anpassen von bestehenden Inhalten als auch durch das Hinzufügen von neuen Inhalten, wie zum Beispiel Plugins oder Mods passieren. Gerade durch zusätzliche Plugins/Mods entstehen oftmals Probleme. Dies kann beispielsweise durch fehlerhaften oder schlecht programmierten Code entstehen. 

In gewissen Fällen kann so etwas zu einem Memory Leak führen. Das bedeutet, dass die Mods/Plugins Arbeitsspeicher reservieren, diesen dann aber nicht wieder ordnungsgemäß freigeben. Das hat die Folge, dass der Arbeitsspeicherverbrauch immer weiter steigt und zeitnah das Limit überschreitet. 

Wie zu Beginn erklärt, können die Ursachen hierfür vielfältig sein. Zur Analyse des Problems sollte als Erstes ein Blick in die Server-Konsole geworfen werden. Diese sollte in der Regel hilfreiche Informationen liefern, um die möglichen Ursachen einzugrenzen. Klicke dazu auf den **Konsole** Button von **Option 1**. 

![image](https://user-images.githubusercontent.com/13604413/159170765-dc6a6c66-5624-4992-9fee-0e112ab20c67.png)

:::info
Bei diesem Vorgang wird dein Dienst wieder entsperrt, damit du dich dem Problem angehen kannst. Hierbei gilt es zu beachten, dass der Dienst bei einer erneuten langen Überschreitung der Auslastung erneut gesperrt wird. Versuche das Problem daher unbedingt aktiv anzugehen und Lösungen zu finden. 
:::



### Upgrade

Ein Anstieg der Auslastung muss allerdings nicht immer durch Probleme verursacht werden. Je nach Spiel kann das auch durch das Wachsen des Projekts passieren. Wenn das Spielgeschehen größer oder umfangreicher wird, dann bringt dies auch konstante Mehrauslastung mit sich. In dem Fall wäre für eine dauerhafte Lösung ein kostenpflichtiges Upgrade notwendig. Anhand der Statistik kannst du nachschauen, wie sich die Auslastung in der letzten Zeit entwickelt hat. Zudem kannst du dich an unserer Empfehlung für dein Upgrade orientieren. Klicke dazu auf den **Ausführen** Button von **Option 2**. 

![image](https://user-images.githubusercontent.com/13604413/159170769-d875eb76-bb07-4760-90f7-223ae7538df1.png)





### Ticket

Option 1 und 2 haben dir nicht weitergeholfen oder sind nicht ganz nachvollziehbar? Keine Sorge! Melde dich alternativ gerne bei uns im Support, wenn du unsere Hilfe hierzu benötigst. Gerne schauen wir uns das Problem mit dir genauer an, um die Ursache ausfindig zu machen und mögliche Lösungen zu finden. Erstelle dazu ein Ticket, in dem du auf den **Ausführen** Button von **Option 3** klickst. 

![image](https://user-images.githubusercontent.com/13604413/159170772-07a1df66-7a11-4144-b179-4c54dc343022.png)
