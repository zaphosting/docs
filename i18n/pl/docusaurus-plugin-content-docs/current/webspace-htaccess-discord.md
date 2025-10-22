---
id: webspace-htaccess-discord
title: "Hosting: Skonfiguruj przekierowanie Discord przez domenę"
description: "Dowiedz się, jak przekierować domenę na konkretny URL za pomocą konfiguracji serwera WWW dla płynnego przekierowania → Sprawdź teraz"
sidebar_label: Przekierowanie Discord
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Domeny domyślnie nie mogą być przekierowywane bezpośrednio na konkretny URL, a jedynie na główny adres serwera lub strony. Aby jednak wskazać konkretny URL, możesz ustawić przekierowanie przez serwer WWW w połączeniu z plikiem `.htaccess`. To automatycznie przekieruje wywołanie domeny na wybrany adres docelowy.

<InlineVoucher />

## Przygotowanie

Aby zrealizować takie przekierowanie, zakładamy, że masz już własną domenę (TLD) oraz pakiet hostingu. Podłącz domenę do swojego hostingu. Jeśli nie wiesz dokładnie, jak to zrobić, możesz skorzystać z naszej prostej opcji [EasyDNS](domain-easydns.md).

:::warning Zmiany DNS wymagają czasu

Zmiany w ustawieniach DNS mogą zająć do **24 godzin**, zanim zostaną w pełni przyjęte i będą działać globalnie. W niektórych przypadkach wdrożenie może być szybsze, ale opóźnienia są normalne ze względu na cache na różnych serwerach.

:::

Gdy domena poprawnie wskazuje na hosting i jest dostępna, możesz rozpocząć konfigurację przekierowania Discord.

## Konfiguracja

Musisz utworzyć i skonfigurować plik `.htaccess`, aby ustawić przekierowanie. Przejdź do menedżera plików w panelu administracyjnym Plesk dla swojej domeny. Następnie kliknij symbol plusa, aby utworzyć nowy folder o nazwie `discord`.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZAJAd7EXp7yJE64/download)

Przejdź do folderu `discord` i utwórz tam nowy plik o nazwie `.htaccess`. Otwórz nowo utworzony plik w edytorze tekstu. Teraz dodasz regułę przekierowania. Skopiuj i wklej poniższą zawartość:
```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]
```

Aby reguła i przekierowanie działały dla Twojej domeny, musisz zmienić nazwę domeny. Zamień przykładową domenę `example-example.de` na swoją własną i zapisz plik. Zamień też URL zaproszenia Discord na ten z Twojego serwera.

Teraz powinieneś móc wywołać przekierowanie przez swoją domenę i zdefiniowaną ścieżkę discord. Struktura w naszym przykładzie wyglądałaby tak: `beispiel-example.de/discord`.

## Podsumowanie

Jeśli wykonałeś wszystkie kroki, powinieneś pomyślnie skonfigurować przekierowanie domeny na swój serwer Discord. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />