---
id: fivem-installels
title: "FiveM: Instalacja ELS na Twoim serwerze"
description: "Dowiedz się, jak skonfigurować i włączyć ELS-FiveM z carmods dla lepszej rozgrywki na Twoim serwerze → Sprawdź teraz"
sidebar_label: Instalacja ELS
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Połącz się przez FTP

Aby móc zainstalować zasób, musisz skonfigurować [dostęp przez FTP](gameserver-ftpaccess.md).

## Przygotowanie

Na początek pobierz najnowszą [wersję ELS-FiveM](https://github.com/MrDaGree/ELS-FiveM/releases/latest), którą znajdziesz w sekcji "Assets".

Po pobraniu ELS, rozpakuj plik i otwórz folder "ELS-FiveM".

## Konfiguracja

Teraz konfigurujemy ELS-FiveM, tworząc kopię pliku `vcf.default.lua` i zmieniając jej nazwę na `vcf.lua`.

:::info
Uwaga: Stary plik `vcf.default.lua` nie powinien być usuwany.
:::

Dalsze ustawienia można zmienić w pliku "config.lua", ale zostawimy je domyślne.

## Wgraj zasób

Zainstalujesz ELS-FiveM, przeciągając i upuszczając pliki do folderu "resources".

Po wgraniu musisz otworzyć plik server.cfg w folderze server-data:

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

Wśród pozostałych wpisów startowych zasobów możesz teraz dodać wpis dla ELS-FiveM.

Po tym wystarczy zrestartować serwer i ELS-FiveM będzie dostępny w grze!

## Konfiguracja Carmods

Aby dodać nowe carmodsy do ELS-FiveM, najpierw potrzebujemy konfiguracji ELS, którą często znajdziesz w folderze pobranego carmoda. Zazwyczaj nazywa się `autoname.xml`, w naszym przypadku to `scpdvic.xml`.

Wgraj je do folderu "vcf" w folderze ELS-FiveM przez FTP.

Po wgraniu pliku otwórz plik 'vcf.lua' w folderze ELS-FiveM.

:::info
Upewnij się, że poprzednia linia zawsze kończy się przecinkiem.
:::

Gotowe! Nasz carmod powinien być teraz włączony w ELS i działać po restarcie serwera.

<InlineVoucher />