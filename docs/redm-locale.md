---
id: redm-locale
title: "RedM: Change language / location (flag)"
description: Information on how to customize the language and location (flag) on a RedM server - ZAP-Hosting.com documentation
sidebar_label: Language / location (flag)
---



## Introduction

RedM servers can be displayed in different languages. This applies both to the display of the server's flag in the server browser as well as the language that is actively used on the server. The language can be customized if needed. So you have the possibility to choose your language and country flag for your server.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHgoDfcsN4XX8Jb/preview)



## Configuration

The configuration of the flag and language of the server is done via the Locales option. The locales configuration is done via the server config. This is defined by the value of the **sets locale** command. English language and Antarctica as location (flag) is displayed by default.



## Step 1 - Open server configuration file

The server configuration file (server.cfg) can be accessed in the game server administration under Configs. RedM servers with the use of txAdmin also have the possibility to access it directly in TxAdmin.



## Step 2 - Find locale/language code for your language

The definition of the language/display is done via the locales (language codes/country codes) based on the ISO 639-1/ISO 3166-1 standards. We have summarized a small list of the most relevant countries/languages below. The actual list is of course significantly larger:

| Country        | Language   | Locale |
| -------------- | ---------- | ------ |
| Germany        | German     | de_DE  |
| USA            | English    | en_US  |
| Canada         | English    | en_CA  |
| Australia      | English    | en_AU  |
| United Kingdom | English    | en_GB  |
| Finland        | Finnish    | fi_FI  |
| France         | French     | fr_FR  |
| Netherlands    | Dutch      | nl_NL  |
| Portugal       | Portuguese | pt_PT  |
| Brazil         | Portuguese | pt_BR  |
| Spain          | Spanish    | es_ES  |
| Singapore      | English    | en_SG  |

:::caution

 The display of the server flag is generally supported by all available countries. However, not all resources contain all languages. Therefore, make sure that your country/language is supported in advance! 

:::



## Step 3 - Adjust the content of the server configuration file

Once the configuration file has been opened and you have taken care of the locale/language code, the configuration can now be done.  First you have to check if the **sets locale** command already exists. If not, the input for it looks like this:

```
# A valid locale identifier for your server's primary language.
# For example "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# please DO replace root-AQ on the line ABOVE with a real language! :)
```

The value of the **sets-locale** command has the **root-AQ** value by default. This needs to be adjusted now. For instance, if you want to use the USA as the flag and English as the language, you would use **en_US** as the value in this case. Save the change you have made.



## Step 4 - Restart and test server

The last step is to restart the server to make sure that the change is applied. After that you can reload the server list in your RedM client and should be able to see the change you just made. :)