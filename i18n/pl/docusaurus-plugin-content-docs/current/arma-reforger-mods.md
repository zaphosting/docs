---
id: arma-reforger-mods
title: "Arma Reforger: Instalacja modów przez Workshop"
description: "Dowiedz się, jak zainstalować i włączyć mody z Arma Reforger Workshop na swoim serwerze → Sprawdź teraz"
sidebar_label: Instalacja modów
services:
  - gameserver-arma-reforger
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Mody odgrywają kluczową rolę w rozszerzaniu rozgrywki w **Arma Reforger**. Dzięki **Arma Reforger Workshop** gracze i twórcy publikują własne misje, zmiany w rozgrywce, mapy oraz dodatkowe treści, które można wykorzystać na serwerach.

Instalacja modów pozwala właścicielom serwerów na personalizację rozgrywki, wprowadzenie nowych mechanik lub zapewnienie unikalnych misji dla swojej społeczności. Po instalacji, gracze dołączający do serwera automatycznie pobiorą wymagane mody przed połączeniem.


<InlineVoucher />

## Znajdowanie modów

Najpierw potrzebujesz **ID Workshop** moda, który chcesz zainstalować. Otwórz **Arma Reforger Workshop** i przejdź do wybranego moda. Każdy wpis w workshopie ma unikalny identyfikator, którego serwer używa do automatycznego pobrania moda. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jMNGbRAQdjKcDyn/preview)

## Konfiguracja

Aby zainstalować mody z workshopu na swoim serwerze, otwórz swój **panel administracyjny serwera gier** i przejdź do **Ustawienia**. Znajdź pole konfiguracyjne o nazwie **Workshop-Mods**. W tym polu wpisz **ID Workshop** moda, który chcesz zainstalować. Przykład konfiguracji z jednym modem:

```
1234567890
```
Jeśli chcesz zainstalować kilka modów, wpisz każde ID Workshop i oddziel je **przecinkiem**. Przykład konfiguracji z wieloma modami:

```
1234567890,9876543210,1357924680
```
Po wpisaniu wybranych ID modów, **zapisz ustawienia** i zrestartuj serwer. Podczas uruchamiania serwer automatycznie pobierze wymienione mody z Arma Reforger Workshop i załaduje je.



## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś **mody z Arma Reforger Workshop** na swoim serwerze. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />