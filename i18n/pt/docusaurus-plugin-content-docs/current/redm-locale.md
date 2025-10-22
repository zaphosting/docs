---
id: redm-locale
title: "RedM: Alterar idioma / localização (bandeira)"
description: "Descubra como personalizar os idiomas e bandeiras do servidor RedM para melhorar a experiência dos jogadores e a localização → Saiba mais agora"
sidebar_label: Idioma / localização (bandeira)
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Servidores RedM podem ser exibidos em diferentes idiomas. Isso vale tanto para a exibição da bandeira do servidor no navegador de servidores quanto para o idioma que é usado ativamente no servidor. O idioma pode ser personalizado se necessário. Assim, você tem a possibilidade de escolher seu idioma e a bandeira do país para o seu servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHgoDfcsN4XX8Jb/preview)

<InlineVoucher />

## Configuração

A configuração da bandeira e do idioma do servidor é feita via a opção Locales. A configuração dos locales é feita pelo arquivo de configuração do servidor. Isso é definido pelo valor do comando **sets locale**. O idioma inglês e a Antártida como localização (bandeira) são exibidos por padrão.

### Abrir arquivo de configuração do servidor

O arquivo de configuração do servidor `server.cfg` pode ser acessado na interface txAdmin em `Editor CFG`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/kHeJyeXiKDfSY2c/preview)

### Encontrar código locale/idioma para seu idioma

A definição do idioma/exibição é feita via os locales (códigos de idioma/códigos de país) baseados nos padrões ISO 639-1/ISO 3166-1. Resumimos uma pequena lista dos países/idiomas mais relevantes abaixo. A lista real é, claro, bem maior:

| País           | Idioma    | Locale |
| -------------- | --------- | ------ |
| Alemanha       | Alemão    | de-DE  |
| EUA            | Inglês    | en-US  |
| Canadá         | Inglês    | en-CA  |
| Austrália      | Inglês    | en-AU  |
| Reino Unido    | Inglês    | en-GB  |
| Finlândia      | Finlandês | fi-FI  |
| França         | Francês   | fr-FR  |
| Holanda        | Holandês  | nl-NL  |
| Portugal       | Português | pt-PT  |
| Brasil         | Português | pt-BR  |
| Espanha        | Espanhol  | es-ES  |
| Singapura      | Inglês    | en-SG  |

:::caution 
A exibição da bandeira do servidor é geralmente suportada por todos os países disponíveis. Porém, nem todos os recursos contêm todos os idiomas. Portanto, certifique-se de que seu país/idioma é suportado antes!
:::

### Ajustar o conteúdo do arquivo de configuração do servidor

Depois de abrir o arquivo de configuração e definir o código locale/idioma, a configuração pode ser feita. Primeiro, verifique se o comando **sets locale** já existe. Se não existir, a entrada para ele fica assim:

```
# Um identificador válido de locale para o idioma principal do seu servidor.
# Por exemplo "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# por favor SUBSTITUA root-AQ na linha ACIMA por um idioma real! :)
```

O valor do comando **sets locale** tem o valor padrão **root-AQ**. Isso precisa ser ajustado agora. Por exemplo, se você quiser usar a bandeira dos EUA e o inglês como idioma, você usaria **en-US** como valor neste caso. Salve a alteração que você fez.

## Conclusão

O último passo é reiniciar o servidor para garantir que a alteração seja aplicada. Depois disso, você pode recarregar a lista de servidores no seu cliente RedM e deverá conseguir ver a mudança que acabou de fazer. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />