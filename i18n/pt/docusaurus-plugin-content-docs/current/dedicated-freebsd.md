---
id: dedicated-freebsd
title: "Servidor Dedicado: Instalação do FreeBSD"
description: "Descubra como instalar e configurar o FreeBSD no seu servidor dedicado para desempenho e confiabilidade máximos → Saiba mais agora"
sidebar_label: Instalar FreeBSD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

A seguir, vamos te mostrar passo a passo como instalar e configurar o sistema operacional FreeBSD no seu servidor dedicado. Siga essas instruções com atenção para garantir que a instalação seja feita com sucesso e que você aproveite ao máximo o sistema.

:::info

A estrutura deste guia é baseada no uso do FreeBSD 13.0. Instalações em versões anteriores ou mais recentes podem ter pequenas diferenças no processo.

:::



## Preparação

Para instalar e configurar um sistema operacional, o primeiro passo é montar a ISO correspondente. Existem várias formas de fazer isso:

1. Montagem via configuração inicial
2. Montagem via iLO (Mídia Virtual)
3. Montagem via iLO (Console Remoto)

Se você ainda não está familiarizado com a montagem de arquivos ISO, o ideal é consultar nosso [Guia de Configuração Inicial](dedicated-setup.md) ou [Guia de ISO Própria](dedicated-iso.md).



## Instalação
Quando a ISO estiver carregada com sucesso, o servidor entrará no processo de instalação.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

Começamos a instalação pressionando `Enter`![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Escolha o layout do teclado que preferir e continue.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Escolha o nome do host que deseja.

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

Você pode escolher pacotes opcionais do sistema para instalar, depois de selecionar, prossiga com OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

Nesta etapa, você pode criar partições; neste exemplo, usamos um RAID0. Mais informações sobre RAIDs estão no [Guia de Configuração de RAID](dedicated-raid.md).

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

Se não houver alterações, prossiga pressionando `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Como estamos usando RAID0, escolhemos sem redundância.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Marque seu volume com `Space` e confirme com `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

Verificamos que todos os dados serão apagados.

:::info
Seu servidor está processando a instalação, isso pode levar alguns minutos.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Digite sua senha e confirme com `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

Escolha "Não" na configuração IPv4/IPv6, isso será feito no final.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Escolha "Sim" e selecione seu fuso horário e data/hora.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

Você pode alterar os serviços que iniciam automaticamente com o servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

Se quiser, pode modificar as configurações de segurança.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

A instalação está concluída, escolha "Sair" e confirme com `Enter`.

:::info
Remova o arquivo ISO no seu iLO e escolha "Reiniciar"
:::



## Configuração

### Rede

Para ativar o dispositivo de rede, faça login no sistema usando a senha.

Abra o arquivo loader.conf com um editor de sua preferência, por exemplo `ee /boot/loader.conf` e adicione a linha:

```if_oce_load="YES"```

Saia do editor pressionando `CTRL+C` e digitando exit, depois reinicie seu servidor dedicado.

***

Após o reboot, precisamos modificar o rc.conf, por exemplo com `ee /etc/rc.conf`, adicione as linhas:

```
ifconfig_oce0="DHCP"
```

:::caution
O nome do adaptador de rede no exemplo **oce0** pode ser diferente. Certifique-se de usar o nome correto do adaptador, que pode ser verificado com o comando ifconfig. As informações serão obtidas automaticamente via servidor DHCP.
:::

Deve ficar parecido com isso:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Saia do editor pressionando `CTRL+C` e digitando "exit", depois execute o comando `/etc/netstart` uma vez.

:::info
Seu servidor deve estar com conexão ativa à internet agora.
:::



## Conclusão

Parabéns, você instalou com sucesso o sistema operacional FreeBSD no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂