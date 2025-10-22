---
id: voiceserver-ts3backup
title: "Servidor de Voz: Criar, baixar e importar backups"
description: "Descubra como criar e gerenciar backups facilmente com armazenamento gratuito e opções de upgrade para proteção segura dos seus dados → Saiba mais agora"
sidebar_label: Backups
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Oferecemos a possibilidade de criar backups individuais com um clique. Isso permite que você crie backups de forma fácil e sem esforço, além de poder importá-los a qualquer momento depois. Todos os backups são armazenados no seu servidor de armazenamento, que inclui 10GB de espaço gratuito por padrão. Se precisar de mais, você pode fazer upgrade para o Premium Storage.

<InlineVoucher />

## Criar Backups

<Tabs>

<TabItem value="Webinterface" label="Produto Servidor TeamSpeak" default>

Para criar um backup no nosso site, você deve abrir seu serviço de Servidor de Voz na interface web e navegar até **Snapshots** na administração. Uma vez lá, clique no botão verde **Create snapshot** para criar um backup.

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning Backups Externos
A importação de backups externos (snapshots) não é possível por motivos de segurança. Exceções estão excluídas.
:::

</TabItem>
<TabItem value="self_hosted" label="Self hosted (VPS/Servidor dedicado)">

Assim como no produto Servidor TeamSpeak, se você usar a interface GS/TS3, pode criar um backup (snapshot) com um clique via administração do serviço do Servidor TeamSpeak. Porém, você também pode criar um backup manualmente usando os dados de login da instância TeamSpeak (Query) e o aplicativo externo YatQA.

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

Para criar um snapshot no YatQA, vá em **Miscellaneous** no topo do aplicativo e depois clique em **Create and save snapshot**.

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## Baixar Backups

Backups criados (snapshots) podem ser baixados do seu servidor de armazenamento via FTP. Os dados de login estão disponíveis na interface web no serviço do seu servidor de armazenamento. Se você não sabe como usar FTP, recomendamos que siga nosso [guia geral de acesso FTP](gameserver-ftpaccess.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## Conclusão

Você criou um backup com sucesso se seguiu todos os passos mencionados. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />