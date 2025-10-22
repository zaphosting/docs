---
id: unturned-rocketmod-permissions
title: "Unturned: Dostosowywanie uprawnień serwera"
description: "Dowiedz się, jak skutecznie zarządzać i personalizować uprawnienia serwera dla lepszej kontroli i bezpieczeństwa → Sprawdź teraz"
sidebar_label: Dostosuj uprawnienia
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Przygotowania
Aby serwer wygenerował niezbędne pliki konfiguracyjne, musi najpierw zostać uruchomiony.  
Jeśli serwer jest online, możesz go ponownie zatrzymać.  
W ten sposób zostaną utworzone wszystkie potrzebne pliki, których my lub serwer potrzebujemy.

## Otwórz konfigurację
Uprawnienia są zapisane w pliku "Permissions.config.xml".  
Możesz łatwo podejrzeć i edytować ten plik przez nasz interfejs.  
Wystarczy kliknąć zakładkę "Konfiguracje" w panelu Twojego serwera:

![](https://screensaver01.zap-hosting.com/index.php/s/cGyn9Ry3jaekEdQ/preview)

Konfiguracja nazywa się "Rocket Permissions" i można ją otworzyć klikając niebieskie piórko do edycji:

![](https://screensaver01.zap-hosting.com/index.php/s/nLd2dHiPLn9eirH/preview)

## Zrozum konfigurację
Na pierwszy rzut oka konfiguracja wygląda na skomplikowaną i złożoną.  
Pomagamy Ci ją ogarnąć!  
Plik jest podzielony na różne grupy.  
Grupy są wyświetlane i wymienione w kategorii <groups> </groups>.  
Zaczyna się od "<groups>" i kończy na "</groups>":

Początek:

![](https://screensaver01.zap-hosting.com/index.php/s/jzKgXwCa3zkxNds/preview)

Koniec:

![](https://screensaver01.zap-hosting.com/index.php/s/apkYpiJjosJ4FCJ/preview)

Grupy znajdują się pomiędzy tymi znacznikami.  
Na przykład cały blok reprezentuje jedną grupę:

![](https://screensaver01.zap-hosting.com/index.php/s/ZKMeMb3twTBWrrx/preview)

W której przypisane są wszystkie niezbędne parametry dla danej grupy.

## Dostosuj uprawnienia
W obrębie grupy znajdziesz też kategorię "Permissions".  
Jak widać na tym zrzucie ekranu:

![](https://screensaver01.zap-hosting.com/index.php/s/9cT46tzXYWp6Hrk/preview)

Tutaj możemy teraz dostosować uprawnienia grupy.  
A także określić czas oczekiwania, po którym komenda może być użyta ponownie.  
Załóżmy, że chcemy dać grupie prawo do banowania użytkowników.  
Wtedy wpisujemy następująco:

![](https://screensaver01.zap-hosting.com/index.php/s/LDgWZxJ2YyCc6ac/preview)

Oznacza to, że grupa może teraz banować graczy w grze, a ponieważ "cool down" ustawiono na 0 sekund, można to robić bez przerwy.

Jeśli chcemy dać grupie prawo do leczenia się, wpisujemy to tak:

![](https://screensaver01.zap-hosting.com/index.php/s/yjSDbMM9sn7236m/preview)

Jednak użytkownik będzie mógł użyć tej komendy tylko co 3600 sekund.  
Procedura jest identyczna dla innych uprawnień.  
Niektóre uprawnienia wymagają jednak odpowiednich pluginów.

## Dodaj użytkowników do grupy
Grupy zostały już utworzone z pożądanymi uprawnieniami.  
Teraz trzeba przypisać do nich użytkowników.  
Do tego potrzebny jest Steam64ID użytkowników.  
Możesz go sprawdzić klikając w ten link:  
https://steamid.io/

Gdy masz już Steam64ID, możesz wpisać je do konfiguracji.  
Robi się to tutaj, przy parametrze Member:

![](https://screensaver01.zap-hosting.com/index.php/s/WX2CxgZoQBCa4Lr/preview)

Przykładowo będzie to wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/RqkCrB5gM4jHT2t/preview)

Za każdym razem trzeba dodać nową linię dla kolejnego użytkownika, który ma być przypisany do grupy.  
Po wpisaniu wszystkich użytkowników zapisz konfigurację klikając "Zapisz".  
Następnie uruchom serwer i w grze zostaniesz przypisany do grupy!

<InlineVoucher />