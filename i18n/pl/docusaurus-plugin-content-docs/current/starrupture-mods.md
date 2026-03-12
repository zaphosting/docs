---
id: starrupture-mods
title: "StarRupture: Instalacja modów"
description: "Dowiedz się, jak zainstalować mody na swoim serwerze i kliencie StarRupture, aby wzbogacić rozgrywkę → Sprawdź teraz"
sidebar_label: Instalacja modów
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Mody pozwalają rozszerzyć rozgrywkę w StarRupture, dodając nowe mechaniki, zawartość, usprawnienia jakości życia lub zmiany w rozgrywce stworzone przez społeczność. Wiele modów do StarRupture jest dystrybuowanych przez platformy społecznościowe, takie jak NexusMods, i można je instalować zarówno na serwerze, jak i lokalnie na kliencie.

Instalacja modów na serwerze gwarantuje, że środowisko serwera załaduje zmodyfikowaną zawartość, natomiast instalacja lokalna pozwala klientowi gry korzystać z tych samych plików podczas łączenia się z serwerami z modami.

<InlineVoucher />

## Instalacja modów na serwerze

Aby zainstalować mody na swoim serwerze StarRupture, najpierw pobierz wybrany plik moda z zaufanego źródła, takiego jak **NexusMods**.

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

Przed przesłaniem moda upewnij się, że serwer jest zatrzymany, aby uniknąć konfliktów plików podczas instalacji. Następnie połącz się z serwerem przez [FTP](gameserver-ftpaccess.md) za pomocą klienta FTP. Po połączeniu przejdź do następującego katalogu na serwerze:

```
/home/container/StarRupture/Content/Paks
```
Prześlij pobrany plik moda `.zip` do tego folderu. Po zakończeniu przesyłania rozpakuj zawartość archiwum bezpośrednio w katalogu `Paks`. Po rozpakowaniu plików wróć do panelu zarządzania serwerem i ponownie uruchom serwer.

Podczas startu serwer automatycznie wykryje i załaduje zainstalowane mody.

## Instalacja modów na kliencie

Niektóre mody do StarRupture mogą wymagać także instalacji lokalnej na kliencie. Większość lokalnie zainstalowanych modów pozostaje aktywna podczas łączenia się z serwerami. Najpierw pobierz wybrany mod z zaufanego źródła, takiego jak NexusMods.

Następnie otwórz **Bibliotekę Steam**, kliknij prawym przyciskiem na **StarRupture**, najedź na **Zarządzaj** i wybierz **Przeglądaj pliki lokalne**. W katalogu instalacji gry znajdź następującą ścieżkę:

```
StarRupture/StarRupture/Content/Paks
```

Przenieś pobrany plik moda `.zip` do tego folderu. Po skopiowaniu pliku rozpakuj archiwum bezpośrednio w katalogu `Paks`. Po rozpakowaniu mod zostanie automatycznie załadowany przy następnym uruchomieniu gry.

## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś mody do StarRupture zarówno na serwerze, jak i na kliencie. Dzięki modom możesz rozszerzyć doświadczenie rozgrywki o nowe funkcje, mechaniki i usprawnienia stworzone przez społeczność.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />