---
id: dedicated-windows-ip-configuration
title: "Servidor Dedicado: Configuração de IP (Windows)"
description: "Aprenda a configurar as definições de IP no seu Servidor Dedicado Windows → Saiba mais agora"
sidebar_label: Configurar Endereços IP
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Configurar os endereços IP no seu Servidor Dedicado Windows permite que você controle como seu servidor se comunica dentro da rede. Isso inclui atribuir endereços IP, definir o gateway padrão e configurar os servidores DNS necessários para a conectividade de rede.

A configuração correta do IP é importante para servidores que rodam serviços como servidores de jogos, servidores web, bancos de dados ou sistemas de acesso remoto, pois garante uma comunicação estável na rede e acessibilidade confiável.

:::warning Servidor inacessível por falta de conexão com a internet?
Caso seu servidor fique inacessível devido a uma configuração de rede incorreta ou falta de conexão com a internet, o acesso remoto via RDP pode não funcionar mais. Use o [console HTML iLO](dedicated-ilo.md#the-html5-console) para conectar ao seu servidor e corrigir a configuração de rede.
:::

<InlineVoucher />

## Preparação

Antes de configurar os endereços IP, certifique-se de ter as seguintes informações disponíveis:

- Endereço IP que deseja atribuir
- Máscara de sub-rede
- Gateway padrão
- Servidores DNS

Essas informações podem ser encontradas na interface web. Para isso, abra seu **Gerenciamento do Servidor Dedicado** e navegue até **Endereços IP**.

## Configuração

Conecte-se ao seu Servidor Dedicado usando **Remote Desktop (RDP)**. Uma vez conectado, abra o **Painel de Controle**. Navegue até **Painel de Controle → Rede e Internet → Central de Rede e Compartilhamento**.

Clique em **Alterar as configurações do adaptador** no lado esquerdo. Você verá as interfaces de rede disponíveis. Clique com o botão direito no adaptador de rede ativo (geralmente **Ethernet**) e selecione **Propriedades**. Na lista, selecione **Protocolo IP Versão 4 (TCP/IPv4)** e clique em **Propriedades**.

![img](https://screensaver01.zap-hosting.com/index.php/s/3EpqZXg5pgWHoLK/download)

Escolha **Usar o seguinte endereço IP** e insira os valores necessários:

- **Endereço IP** → Seu endereço IP atribuído
- **Máscara de sub-rede** → Sua máscara de sub-rede
- **Gateway padrão** → Seu gateway
- **Servidores DNS →** 1.1.1.1, 8.8.8.8

Depois configure os servidores DNS selecionando **Usar os seguintes endereços de servidor DNS** e inserindo seus servidores DNS preferidos. Após inserir todos os valores, confirme a configuração com **OK** e feche as janelas restantes.

## Verificação

Para verificar a configuração, abra o **Prompt de Comando** e execute:
```
ipconfig
```
![img](https://screensaver01.zap-hosting.com/index.php/s/AK8F3jppqL8xnsx/download)

Esse comando exibe todas as interfaces de rede e sua configuração atual de IP. Procure pelo seu adaptador de rede ativo e verifique se o **Endereço IPv4** corresponde ao endereço IP que você configurou anteriormente. Se o endereço IP correto aparecer, a configuração foi aplicada com sucesso.

## Conclusão

Parabéns! Você configurou com sucesso as definições de IP no seu Servidor Dedicado Windows. Se tiver mais dúvidas ou precisar de ajuda, nossa equipe de suporte está disponível diariamente para te ajudar.

<InlineVoucher />