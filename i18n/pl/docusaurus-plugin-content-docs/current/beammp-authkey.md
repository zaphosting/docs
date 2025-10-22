---
id: beammp-authkey
title: "BeamMP: Stwórz Klucz Auth"
description: "Dowiedz się, jak wygenerować i zastosować Klucz Auth, aby Twój serwer był widoczny publicznie i skutecznie zarządzać dostępem → Sprawdź teraz"
sidebar_label: Stwórz Klucz Auth
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Po co mi klucz?

Klucz Auth jest wymagany, jeśli serwer ma być widoczny na liście serwerów, w przeciwnym razie dostępny jest tylko przez bezpośrednie połączenie.

<InlineVoucher />

## Przygotowanie
Aby stworzyć własny klucz auth, najpierw logujemy się na https://beammp.com/keymaster, co wymaga konta Discord.
Po zalogowaniu klikamy po lewej na "Keys", co przenosi nas do przeglądu kluczy licencyjnych:

![](https://screensaver01.zap-hosting.com/index.php/s/Zp72q2WR85pxJgq/preview)

Teraz klikamy na niebieski link "here", aby stworzyć klucz:

![](https://screensaver01.zap-hosting.com/index.php/s/ARqCQyEbF6BYnH4/preview)


## Podaj dane

Teraz możemy uzupełnić dane w następujący sposób:

- **Nazwa serwera:** Nazwa Twojego serwera, nie musi być taka sama jak w ustawieniach.
- **IP serwera:** Adres IP Twojego serwera, bez portu.


### Podaj IP

IP musi być podane bez portu, znajdziesz je u góry w panelu swojego serwera:

![](https://screensaver01.zap-hosting.com/index.php/s/8MJeXxm87EdLykg/preview)

## Stwórz klucz

Klikamy teraz na "Create", klucz zostanie wygenerowany.

![](https://screensaver01.zap-hosting.com/index.php/s/Ebyk5tPCHnppcWC/preview)

## Ustaw klucz

Teraz otwieramy ustawienia naszego serwera gier i przewijamy w dół, gdzie możemy wpisać nasz klucz pod "Auth Key". Efekt końcowy powinien wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/5p7LdSDCJzrxKDy/preview)

Zapisujemy ustawienia i restartujemy serwer.

Gotowe! Klucz jest teraz aktywny, a serwer powinien wkrótce pojawić się na liście.

<InlineVoucher />