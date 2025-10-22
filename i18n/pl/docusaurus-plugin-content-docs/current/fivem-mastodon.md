---
id: fivem-mastodon
title: "FiveM: Konfiguracja kanału aktywności dla Twojego serwera"
description: "Dowiedz się, jak zintegrować kanał aktywności Mastodon z Twoim serwerem, aby mieć aktualizacje w czasie rzeczywistym i zwiększyć zaangażowanie społeczności → Sprawdź teraz"
sidebar_label: Konfiguracja kanału aktywności
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Przygotowanie

Aby skonfigurować kanał aktywności na naszym serwerze, najpierw musimy założyć konto na Mastodon.

## Konfiguracja

Teraz otwieramy nasz profil Mastodon i kopiujemy naszą nazwę użytkownika, w naszym przypadku to `zaphosting@mstdn.instance`

Następnie otwieramy "Konfiguracje" na naszym serwerze FiveM i edytujemy plik server.cfg.

Na samym dole wstawiamy następującą linię:

```
sets activitypubFeed username
```

"username" należy zastąpić swoją nazwą użytkownika Mastodon.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Teraz zapisujemy plik i restartujemy serwer, po około 20 minutach zakładka "Feed" będzie dostępna po uruchomieniu serwera.


<InlineVoucher />