---
id: account-hardware-authentication
title: "Hårdvaruautentisering (Passkey)"
description: "Upptäck hur du kan boosta din kontosäkerhet med passkey och skydda din personliga info effektivt → Lär dig mer nu"
sidebar_label: Hårdvaruautentisering
---

import SearchableAccordion from '@site/src/components/SearchableAccordion/SearchableAccordion';
import items from '@site/data/faqs/account-hardware-authentication.json';

## Introduktion

Hårdvaruautentisering med Passkeys är en modern och phishing-säker metod för att skydda ditt användarkonto. Istället för att förlita sig på ett traditionellt lösenord används ett kryptografiskt nyckelpar. Den privata nyckeln lagras säkert på din enhet och lämnar den aldrig. Autentisering sker lokalt med biometrisk verifiering som fingeravtryck eller ansiktsigenkänning, eller alternativt en PIN-kod på enheten.

## Krav

För att använda hårdvaruautentisering med Passkeys måste din setup uppfylla vissa krav. Du behöver en kompatibel enhet som en smartphone, surfplatta eller dator. Operativsystemet och webbläsaren måste stödja Passkeys eller WebAuthn. En skärmlåsning måste vara konfigurerad på enheten, till exempel fingeravtryck, Face ID eller en lokal PIN-kod.

## Aktivera autentisering

För att aktivera hårdvaruautentisering, öppna profilinställningarna i kundzonen och gå till Säkerhet (Profilinställningar → Säkerhet). Här kan du konfigurera säkerhetsalternativen för ditt konto. Välj Hårdvaruautentisering för att fortsätta med inställningen.

Efter att du valt detta alternativ öppnas ett popup-fönster. Klicka på knappen Lägg till autentiserare för att starta konfigurationsprocessen.

![img](https://screensaver01.zap-hosting.com/index.php/s/oSEpGD5emG9ToxW/download)

Setupen fortsätter sedan med att skapa en Passkey-inloggning för ZAP-Hosting. Under detta steg kommer du bli ombedd att definiera en återställnings-PIN. Denna PIN behövs för att återfå åtkomst om den primära autentiseringsmetoden tillfälligt inte är tillgänglig och bör sparas säkert.

![img](https://screensaver01.zap-hosting.com/index.php/s/tiPnCDTAkieNHNP/download)

När dessa steg är bekräftade och hårdvaruautentisering via Passkey är framgångsrikt inställd, loggas du automatiskt ut en gång. Detta är en normal säkerhetsåtgärd som säkerställer att den nya autentiseringsmetoden tillämpas korrekt.

Vid nästa inloggning, efter att du matat in användarnamn och lösenord, kommer du se alternativet Hårdvaruautentisering. Välj detta och bekräfta autentiseringsförfrågan på din enhet för att slutföra inloggningen.

![img](https://screensaver01.zap-hosting.com/index.php/s/FEpZkCCLmi9FmLw/download)

## Inaktivera autentisering

För att stänga av tvåfaktorsautentisering, gå till **Profilinställningar → Säkerhet**. Om användaren fortfarande kan logga in kan den konfigurerade autentiseraren tas bort från säkerhetsinställningarna när som helst.

![img](https://screensaver01.zap-hosting.com/index.php/s/Htb3Td7NfbQeCg3/preview)

## Vanliga frågor

Om du fortfarande är osäker på att använda hårdvaruautentisering eller har frågor om hur det påverkar ditt konto, hjälper följande info att reda ut vanliga funderingar och förklarar hur funktionen funkar i praktiken hos ZAP-Hosting.

<SearchableAccordion items={items} locale="en" />