---
id: webspace-plesk-ssl
title: "Hosting: Utwórz certyfikat SSL"
description: "Dowiedz się, jak zabezpieczyć swoją stronę internetową szyfrowaniem SSL i włączyć HTTPS dla bezpieczniejszego przeglądania → Sprawdź teraz"
sidebar_label: Utwórz certyfikat SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Zaszyfruj stronę za pomocą SSL

:::info
Zakładamy, że domena już wskazuje na adres IP hostingu.
:::

Jeśli domena jest dodana na hostingu, na początku zawsze jest niezabezpieczona. Widać to w panelu Plesk:

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

I powiadomienie w przeglądarce przy otwieraniu domeny:

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

Dzięki certyfikatowi SSL domena może być odpowiednio zabezpieczona/szyfrowana.

<InlineVoucher />

## Tworzenie certyfikatu

Krok 1️⃣: Podwójne kliknięcie na "Certyfikat SSL/TLS" otwiera następujące menu:

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

Można bezpłatnie zamówić certyfikat Let's Encrypt.

Krok 2️⃣: Wprowadź/wypełnij wymagane dane. Aby certyfikat został zamówiony, trzeba podać szczegóły.

Należy podać adres e-mail oraz zaznaczyć, dla czego certyfikat ma być ważny. Zazwyczaj każda domena ma aktywną subdomenę "www", dlatego jest ona również zaznaczona, jeśli została dodana w DNS domeny.

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

Certyfikat zamawiamy klikając "Pobierz za darmo".

Krok 3️⃣: Certyfikat został utworzony, co widać w prawym górnym rogu. Teraz trzeba włączyć automatyczne przekierowanie z HTTP na HTTPS, bo bez tego szyfrowanie nie zadziała:

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

Po włączeniu przekierowania jest ono aktywne. Niezależnie od tego, czy wpiszesz w przeglądarce http czy https, zawsze zostaniesz przekierowany na https.

Krok 4️⃣: Teraz możesz sprawdzić w przeglądarce, czy certyfikat został rozpoznany:

Powinna być widoczna kłódka:

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

Informacje o certyfikacie, które otwiera się klikając na kłódkę, powinny pokazywać domenę:

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

Strona jest teraz prawidłowo zabezpieczona/szyfrowana.

## Certyfikaty dla subdomen

Te same kroki można teoretycznie wykonać dla subdomeny. Jest jednak łatwiejszy sposób, by zaszyfrować wszystkie subdomeny jednocześnie, niezależnie od tego, czy już istnieją, czy są nowe. Można użyć tzw. "certyfikatu wildcard". Wymaga to specjalnego wpisu TXT w DNS domeny. Gdy wpis jest aktywny, certyfikat SSL może być wydany dla wszystkich subdomen.

Krok 1️⃣: Ponownie otwieramy menu certyfikatów SSL/TLS.

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

Kliknij "Odnów certyfikat" w lewym górnym rogu. 
Pojawi się okno zamówienia Let's Encrypt:

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

Wybierz "Zabezpiecz domenę wildcard":

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

Subdomeny "www" i "webmail" są dodawane automatycznie.
Kliknij ponownie "Pobierz za darmo".

Krok 2️⃣: Pojawi się niebieskie okno z ważnymi informacjami:

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

Podany jest tam nazwa domeny i wartość, które muszą być na stałe dostępne jako wpis TXT w DNS domeny. Tylko wtedy Let's Encrypt może potwierdzić autentyczność domeny.

Wpis w DNS powinien wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
Wpis DNS może być widoczny globalnie nawet do 24 godzin.
:::

Aby sprawdzić, czy wpis TXT jest już aktywny, można użyć narzędzia "TXT Lookup SuperTool" od mxtoolbox: https://mxtoolbox.com/SuperTool.aspx:

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

Jeśli wpis jest widoczny, potwierdź to w niebieskim oknie w Plesk klikając "Przeładuj". System sprawdzi obecność wpisu DNS i po chwili pojawi się status "chroniony" przy "Certyfikat SSL/TLS" czyli "Certyfikat wildcard":

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

Jeśli teraz utworzysz subdomenę, będzie już zabezpieczona:

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

Cały transfer danych do strony jest teraz szyfrowany, gotowe.

<InlineVoucher />