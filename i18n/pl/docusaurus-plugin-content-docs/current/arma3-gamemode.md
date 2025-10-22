---
id: arma3-gamemode
title: "Arma 3: Zmień tryb gry"
description: "Dowiedz się, jak ustawić i załadować tryby gry na swoim serwerze Arma 3, aby dostosować rozgrywkę → Sprawdź teraz"
sidebar_label: Zmień tryb gry
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Ustaw tryb gry

Aby zmienić tryb gry na swoim serwerze Arma 3, musisz wgrać odpowiedni plik misji dla danego trybu na swój serwer.

Obecnie oferujemy następujące pliki misji bez konieczności ich samodzielnego wgrywania:

- Arma 3 Wasteland

Są one już dostępne w Twoim katalogu **mpmissions**.

<InlineVoucher />

## Wgraj plik misji

Aby wgrać plik misji, najpierw połącz się z serwerem przez FTP: [Dostęp przez FTP](gameserver-ftpaccess.md).  
Następnie wgraj odpowiedni plik misji do katalogu **mpmissions**, który znajdziesz pod ścieżką **/gxxxxxx/arma3/**.  
W tym przykładzie wgrywamy tryb gry **King of the Hill** na nasz serwer.

![](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## Załaduj plik misji na serwerze

Aby załadować plik misji z serwera, przejdź do panelu swojego serwera Arma 3 i kliknij zakładkę **Konfiguracje** w menu po lewej stronie:

![](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

Tam edytuj plik **server.cfg** i wpisz nazwę swojego pliku misji, tak jak na obrazku:

![](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

Na koniec kliknij **Zapisz** i możesz uruchomić serwer. Nowy plik misji zostanie załadowany.

<InlineVoucher />