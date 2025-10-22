---
id: fivem-installeup
title: "FiveM: Instalar EUP (Emergency Uniform Pack)"
description: "Descubra como configurar o Emergency Uniform Pack para personagens em modo livre com assinatura do Element Club necessária → Saiba mais agora"
sidebar_label: Instalar EUP
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

**EUP**, também conhecido como Emergency Uniform Pack, permite que você tenha Uniformes de Serviços de Emergência em um personagem de modo livre. A seguir explicamos em detalhes como exatamente você pode instalar isso.

:::warning Assinatura do Element Club necessária
Para instalar e usar o EUP, é necessária uma assinatura do Element Club. Garanta a sua no [Portal Cfx.re](https://portal.cfx.re/subscriptions/element-club)! 
:::

<InlineVoucher />



## Preparação

Para começar a instalação do **EUP**, algumas preparações precisam ser feitas primeiro. Para isso, você deve baixar e descompactar no seu computador o [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) e o [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip). Após baixar os arquivos, você deverá ter recebido os seguintes arquivos ZIP:

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

Agora descompacte esses arquivos localmente no seu computador. Eles devem conter um `__resource.lua` ou `fxmanifest.lua` e arquivos/pastas de script.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
Para o NativeUI, você precisa abrir a pasta "NativeUI-master" primeiro, lá você encontrará os scripts corretos. Se não encontrar, eles podem estar em uma subpasta, geralmente com o mesmo nome.
:::

## Instalação
Agora você está pronto para começar a instalação. Para isso, conecte-se ao seu servidor via [FTP](gameserver-ftpaccess.md) e faça o upload dos arquivos. Os arquivos/pastas devem ser enviados para o diretório `resources`. Você encontrará esse diretório na seguinte estrutura:

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## Configuração

Para que os recursos instalados sejam carregados, eles precisam ser especificados no arquivo de configuração do servidor. Para isso, faça login na interface do txAdmin e navegue até o Editor CFG.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## Conclusão

Você instalou com sucesso o EUP no seu servidor FiveM. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂


<InlineVoucher />