---
id: dedicated-windows-troubleshooting-restore-access
title: "Serwer dedykowany: Przywracanie dostępu"
description: "Dowiedz się, jak odzyskać dostęp do swojego Windows Serwera dedykowanego po zablokowaniu hasła i zminimalizować przestoje → Sprawdź teraz"
sidebar_label: Przywracanie dostępu
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

To może zdarzyć się błyskawicznie... Próbujesz zalogować się do swojego Windows Serwera, ale hasło przestaje być akceptowane lub po prostu je zapomniałeś. Nagle zostajesz zablokowany i dostęp do ważnych danych oraz aplikacji staje się niemożliwy. Ta sytuacja jest oczywiście frustrująca, ale to jeszcze nie koniec świata. Postępując zgodnie z poniższymi krokami, odzyskasz dostęp do swojego Windows Serwera dedykowanego i będziesz mógł kontynuować pracę z minimalnymi przerwami.

<InlineVoucher />

## Przygotowanie
Reset dostępu do konta administratora wykonuje się za pomocą pliku ISO Windows. W związku z tym używamy tego samego pliku ISO, który był pierwotnie użyty do instalacji systemu operacyjnego Windows Server.

Ten krok można wykonać albo przez [**Pierwszą instalację**](dedicated-setup.md), albo przez **[ISO](dedicated-iso.md)**. Wybierz lub wskaż plik ISO, który był użyty podczas instalacji, w zależności od wybranej metody.

Zamontuj ISO i zrestartuj system. Przy następnym uruchomieniu powinna pojawić się ponownie instalacja Windows. Powinno to wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## Przywracanie dostępu

Teraz czas na reset dostępu do konta administratora. Wykonaj ponownie pierwsze kroki instalacji, ale zatrzymaj się na początku instalacji i przejdź do **Napraw komputer**.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



Otworzy się menu zaawansowanych opcji. Kliknij na **Rozwiązywanie problemów**, a następnie na **Wiersz polecenia**. Otworzy się konsola poleceń (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

W konsoli wpisz kolejno poniższe polecenia:

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

Układ klawiatury w konsoli iLO HTML może różnić się od Twojego, przez co niektóre znaki znajdują się na innych klawiszach. Weź to pod uwagę, aby poprawnie wykonać polecenia.

:::

Po restarcie serwera, na ekranie logowania naciśnij kombinację klawiszy **Win+U**. W oknie Wiersza poleceń wpisz:

```
net user Administrator TwojeNoweHasło
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

Twoje hasło zostało zmienione. Teraz musisz cofnąć zmiany w plikach **Utilman**. Wystarczy ponownie zrestartować serwer i wykonać te kroki:

```
d:
cd Windows
cd System32
del utilman.exe
ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## Podsumowanie

Po wykonaniu tych kroków powinieneś mieć ustawione nowe hasło dla użytkownika administratora. Teraz możesz ponownie zalogować się przez połączenie pulpitu zdalnego.

<InlineVoucher />