---
id: empyrion-becomeadmin
title: "Empyrion: Jak zostać administratorem"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i skutecznie zarządzać funkcjami gry → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w grze. Wszystkie kroki, które musisz wykonać, aby przyznać uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

## Znajdź Steam64ID

Na początek musisz znaleźć swój Steam64ID.  
Możesz skorzystać z tego narzędzia: [SteamID Lookup](https://steamid.io/lookup).  
Ten ID będzie później wpisany w pliku konfiguracyjnym.

Poniżej przykład, jak możesz uzyskać swój steamid, wpisując tam link do swojego profilu:

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## Konfiguracja adminconfig

Plik "**adminconfig.yaml**", który trzeba edytować, znajduje się w katalogu "**Saves**".  
Aby otworzyć ten katalog, należy postępować zgodnie z instrukcjami dotyczącymi [dostępu przez FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

Standardowo ustawione są następujące wartości:

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

Teraz pozycję "**Id:**" należy uzupełnić wcześniej znalezionym Steam64ID.

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

W polu "**Permission**" określasz rangę, którą chcesz nadać użytkownikowi.  
Rangi przypisuje się następująco:

Permission | Ranga
-----|-------
3 | gamemaster
6 | moderator
9 | admin


## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂

<InlineVoucher />