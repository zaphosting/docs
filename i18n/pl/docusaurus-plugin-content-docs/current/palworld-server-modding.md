---
id: palworld-server-modding
title: "Palworld: Instalacja Modów do Palworld"
description: "Dowiedz się, jak bezpiecznie i skutecznie wzbogacić swoją rozgrywkę w Palworld o modyfikacje na serwer i klienta → Sprawdź teraz"
sidebar_label: Instalacja Modów
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Od premiery Palworld w sieci zaczęły pojawiać się nowe, ekscytujące mody, które poprawiają doświadczenie z gry i sprawiają, że zabawa jest jeszcze lepsza. W tym poradniku przejdziemy przez proces dodawania modyfikacji (modów) do Twojego serwera gier Palworld i/lub klienta gry.

<YouTube videoId="x4tfL3Vi5qE" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5LynAssgfXj6qgr/preview" title="Jak Zainstalować Mody na Twoim Serwerze Palworld!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć informacje w najbardziej angażujący sposób!"/>

<InlineVoucher />

### Kluczowe Informacje

Obecnie możesz przeglądać i pobierać dostępne mody z zewnętrznych stron moddingowych. Polecamy korzystanie ze stron takich jak [Nexus Mods](https://www.nexusmods.com/palworld/) lub [Curseforge](https://www.curseforge.com/palworld/), które są renomowane w środowisku modderskim. Na ten moment nie można pobierać modów przez Steam Workshop.

:::note
ZAP-Hosting nie ponosi odpowiedzialności za ewentualne modyfikacje/uszkodzenia plików serwera lub świata spowodowane instalacją modów. Zdecydowanie zalecamy wykonanie kopii zapasowych przed dalszymi działaniami. Więcej o backupach dowiesz się z naszego dedykowanego [poradnika Zarządzanie Savegames](palworld-server-savegames.md), który omawia to szczegółowo.
:::

:::info
Obecnie wspieramy tylko mody w formacie PAK (.PAK). Nie możesz używać modów wymagających plików wykonywalnych ze względów bezpieczeństwa.
:::



### Mody po stronie serwera i klienta

Wybierając mody, musisz najpierw ustalić, czy są one po stronie serwera, czy klienta. Najprościej sprawdzić to w opisie moda na stronie lub skontaktować się bezpośrednio z autorem moda.

Skrypty po stronie serwera instalujesz bezpośrednio na serwerze i nie wymagają one żadnych działań od graczy. Natomiast mody po stronie klienta wymagają, aby każdy użytkownik, który chce się połączyć, samodzielnie pobrał i zainstalował moda lokalnie w plikach gry.

:::info
Musisz upewnić się, że mod, którego chcesz użyć, jest kompatybilny z aktualną wersją gry Palworld.
:::



## Krok 1: Przygotowanie pliku PAK

Przechodząc na strony moddingowe, takie jak te polecane we wprowadzeniu, możesz przeglądać i pobierać szeroki wybór różnych modów.

:::info
Przypomnienie: Obecnie wspieramy tylko mody w formacie PAK (.PAK) ze względów bezpieczeństwa.
:::

Przejdź do moda, którego chcesz użyć, i pobierz go lokalnie na swoje urządzenie. W razie potrzeby rozpakuj pliki za pomocą narzędzia takiego jak [7zip](https://www.7-zip.org/), aby wyodrębnić plik **.pak**.

![](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## Krok 2: Wgrywanie przez FTP

Gdy masz już przygotowane pliki PAK do wgrania, przejdź do sekcji **Narzędzia->FTP-Browser** w panelu administracyjnym Twojego serwera gier.

Do połączenia z serwerem potrzebujesz klienta FTP. Skorzystaj z naszego dedykowanego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md), jeśli nie masz jeszcze klienta FTP lub potrzebujesz pomocy z połączeniem.

W panelu administracyjnym możesz użyć przycisku **Bezpośrednie Połączenie**. Powinno to automatycznie otworzyć wybrany program FTP i zalogować Cię.

Alternatywnie, użyj danych dostępowych podanych na stronie FTP-Browser, aby ręcznie wpisać je w kliencie FTP i połączyć się.

![](https://screensaver01.zap-hosting.com/index.php/s/nWYPNMRbnrDbDLF/preview)

Następnie musisz wgrać pliki PAK z modem, które przygotowałeś wcześniej. Musisz je umieścić w następującym katalogu:
```
../g[your_zapid]/palworld-windows/Pal/Content/Paks/ # Dla wersji Windows
../g[your_zapid]/palworld-linux/Pal/Content/Paks/ # Dla wersji Linux
```

![](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

I to wszystko po stronie serwera! Teraz czas na klienta.



## Krok 3: Instalacja modów po stronie klienta

Teraz, gdy wszystkie mody są zainstalowane na serwerze, musimy zrobić to samo dla każdego klienta, który chce dołączyć do serwera. Oni muszą powtórzyć ten proces. Obecnie nie ma możliwości automatycznego pobierania modów przez klienta podczas dołączania.

Najpierw otwórz Steam, kliknij prawym przyciskiem na Palworld, wybierz zarządzaj i przeglądaj pliki lokalne.

![](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

Pojawi się folder z instalacją gry Palworld na Twoim urządzeniu.

![](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

Przejdź teraz do katalogu: 
```
../Palworld/Pal/Content/Paks/
```

Przenieś pliki **.pak** z modami do tego folderu. Powtórz to dla każdego dodatkowego moda, który dodałeś.

![](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## Krok 4: Uruchom Palworld i połącz się z serwerem

Teraz możesz połączyć się ze swoim serwerem gier Palworld i cieszyć się rozgrywką z nowymi modami. Skorzystaj z naszego dedykowanego [poradnika Połączenie z Serwerem](palworld-connect.md), jeśli potrzebujesz pomocy z połączeniem.

Po załadowaniu powinieneś zobaczyć zmiany wprowadzone przez mody.

Na przykład, na naszym serwerze testowym używamy moda z blokami z Minecrafta:

![](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

Gratulacje, pomyślnie zainstalowałeś mody na swoim serwerze Palworld. Jeśli masz problemy z moddingiem, sprawdź poniższą sekcję debugowania.



## Debugowanie

W tej sekcji znajdziesz kilka typowych przyczyn problemów oraz kroki, które pomogą Ci zawęzić źródło problemu. Pamiętaj, że modding jest jeszcze na wczesnym etapie i nie jest oficjalny, więc błędy mogą się pojawiać.

#### Upewnij się, że wersja moda jest kompatybilna

Sprawdź, czy zainstalowane mody są kompatybilne z aktualną wersją gry Palworld. Jeśli nie, mogą pojawić się błędy, a niektóre funkcje modów mogą nie działać. W takim wypadku skontaktuj się z autorem moda i poproś o aktualizację.

#### Zrestartuj serwer

Po każdej zmianie lub jeśli nie widzisz modów, zrestartuj serwer. Zalecamy konsultację z autorem moda w kwestii błędów lub problemów, które napotkasz przy konkretnych modach.

#### Sprawdź logi pod kątem błędów

Pierwszym krokiem do rozwiązania problemu jest sprawdzenie sekcji **Informacje->Pliki Logów** w panelu administracyjnym serwera gier. Znajdziesz tam różne logi z informacjami o serwerze, takie jak aktualne zdarzenia, wskazówki czy komunikaty o błędach.

Szczególnie komunikaty o błędach mogą pomóc zidentyfikować i lepiej zrozumieć przyczynę problemu. Często problemy można wykryć i rozwiązać, analizując dokładnie pliki logów.

:::info
Potrzebujesz dodatkowej pomocy? Żaden problem, dołącz do naszej [Społeczności na Discordzie](https://discord.com/invite/zaphosting) lub stwórz post na naszym [r/zaphosting Subreddit](https://www.reddit.com/r/zaphosting/), gdzie my i społeczność chętnie pomogą.

Potrzebujesz oficjalnego wsparcia? Proszę [utwórz ticket](https://zap-hosting.com/en/customer/support/) na naszej stronie z jak największą ilością szczegółów, a my odpiszemy tak szybko, jak to możliwe! :)
:::


<InlineVoucher />