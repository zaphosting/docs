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

A seguir, vamos te mostrar passo a passo como instalar e configurar o sistema operacional FreeBSD no seu servidor dedicado. Siga essas instruções com atenção para garantir que você configure o sistema operacional com sucesso e o utilize da melhor forma.

:::info

A estrutura deste guia é baseada no uso do sistema operacional FreeBSD 13.0. Instalações de versões anteriores ou mais recentes podem apresentar pequenas diferenças no processo.

:::

<InlineVoucher />

## Preparação

Para a instalação e configuração de um sistema operacional, é importante inicialmente montar o ISO correspondente do sistema. Existem várias formas possíveis de montar:

1. Montagem via configuração inicial
2. Montagem via iLO (Mídia Virtual)
3. Montagem via iLO (Console Remoto)

Se você ainda não está familiarizado com a montagem de um arquivo ISO, o melhor é consultar nosso [Guia de Configuração Inicial](dedicated-setup.md) ou [Guia de ISO Próprio](dedicated-iso.md).



## Instalação
Quando o ISO for carregado com sucesso, o servidor estará no processo de configuração.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

Começamos a instalação pressionando `Enter`![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Escolha o layout de teclado que preferir e continue.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Escolha o nome do host desejado.

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

Você pode escolher pacotes de sistema opcionais para instalar, depois de selecionar, prossiga com OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

Nesta etapa, você pode criar partições; neste exemplo, estamos usando um RAID0. Mais informações sobre RAIDs estão explicadas em [Configurar RAID](dedicated-raid.md)

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

Você pode continuar com `Enter` se não houver alterações.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Como temos um RAID0, escolhemos sem redundância.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Marque seu volume com `Space` e prossiga pressionando `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

Verificamos que todos os dados serão apagados

:::info
Seu servidor agora está processando a configuração, isso pode levar alguns minutos
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Por favor, insira sua senha e prossiga pressionando `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

Escolha "Não" na configuração IPv4/IPv6, isso deve ser feito no final.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Escolha "Sim" e selecione seu fuso horário e a data/hora.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

Você pode alterar os serviços que serão iniciados automaticamente quando o servidor ligar.

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

Se necessário, você pode modificar as configurações de segurança.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

A configuração está concluída, escolha "Sair" e confirme pressionando `Enter`

:::info
Remova o arquivo ISO no seu iLO e escolha "Reiniciar"
:::



## Configuração

### Rede

Para ativar o dispositivo de rede, faça login no seu sistema usando a senha

Abra o loader.conf com um editor de sua preferência, por exemplo `ee /boot/loader.conf` e adicione a seguinte linha:

```if_oce_load="YES"```

Você pode sair do editor pressionando `CTRL+C` e digitando exit, depois disso, por favor, reinicie seu servidor dedicado

***

Após o reboot, precisamos modificar o rc.conf, por exemplo com `ee /etc/rc.conf`, adicione as seguintes linhas:

```
ifconfig_oce0="DHCP"
```

:::caution
O nome do adaptador de rede mostrado no exemplo **oce0** pode ser diferente. Certifique-se de especificar o adaptador correto. Isso pode ser verificado com o comando ifconfig. As informações serão obtidas automaticamente via servidor DHCP.
:::

Isso deve ficar parecido com o exemplo:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Saia do editor pressionando `CTRL+C` e digitando "exit", depois execute o comando `/etc/netstart` uma vez

:::info
Seu servidor deve ter uma conexão ativa com a internet agora
:::



## Conclusão

Parabéns, você instalou com sucesso o sistema operacional FreeBSD no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />