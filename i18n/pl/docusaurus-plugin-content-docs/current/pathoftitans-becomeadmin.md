---
id: pathoftitans-becomeadmin
title: Zostań administratorem
description: "Dowiedz się, jak przydzielić i zarządzać uprawnieniami administratora, aby mieć pełną kontrolę nad swoim serwerem gier → Sprawdź teraz"
sidebar_label: Zostań administratorem
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przydzielenie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w grze. Wszystkie kroki, które musisz wykonać, aby przydzielić uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

## Przygotowanie

Konfiguracja uprawnień administratora odbywa się poprzez pliki konfiguracyjne Twojego serwera. W tym celu przejdź w panelu głównym serwera gier do zakładki **Configs** i otwórz plik konfiguracyjny Game.ini.



## Konfiguracja

W sekcji [/Script/PathOfTitans.IGameSession] należy wpisać Alderon Games ID (AGID) administratora. Wpis ma postać `ServerAdmins=` po którym następuje AGID. Jeśli chcesz dodać kilku administratorów, każdy wpis musi znajdować się w nowej linii. Załóżmy, że chcesz przydzielić uprawnienia administratora trzem graczom, wtedy konfiguracja będzie wyglądać następująco:

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. wpis administratora
ServerAdmins=XXX-XXX-XXX # 2. wpis administratora
ServerAdmins=XXX-XXX-XXX # 3. wpis administratora
```

Kliknij Zapisz, a następnie zrestartuj serwer. Uprawnienia administratora zostały pomyślnie ustawione. Po uzyskaniu praw administratora możesz wyznaczać innych graczy na administratorów za pomocą komend czatu lub odbierać im status administratora. Funkcje te są dostępne tak długo, jak Twój serwer jest aktywny. Więcej informacji o komendach znajdziesz w oficjalnym [GitHub Wiki](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools).


## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />