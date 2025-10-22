---
id: redm-deletecache
title: "RedM: Limpar Cache"
description: "Descubra como limpar o cache do seu servidor RedM melhora o desempenho e resolve erros para uma experiência de jogo mais suave → Saiba mais agora"
sidebar_label: Apagar Cache
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

Limpar o cache do servidor em um servidor RedM garante que arquivos temporariamente armazenados sejam deletados. Isso força o servidor a baixar ou criar todos os arquivos necessários novamente na próxima vez que for iniciado. Isso ajuda a remover dados obsoletos ou corrompidos, o que pode resolver problemas de desempenho, erros em scripts, travamentos ou problemas ao carregar o mundo do jogo.

<InlineVoucher />

## Método simples

Apagar o cache no seu servidor de jogos RedM é bem simples. Primeiro, acesse o painel de controle do seu servidor de jogos. Localize e abra a seção **Configurações** no painel de controle do seu servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/qAiDSjC7jjmAq5B/download)



Depois, role até o final da página para encontrar vários botões na subseção **Ações**. Aqui, clique no botão **Apagar Arquivos de Cache** para limpar o cache do seu servidor de jogos.

![img](https://screensaver01.zap-hosting.com/index.php/s/CW8HcxLbNyrw3Qy/download)

:::warning 
Isso vai reiniciar seu servidor imediatamente para limpar os arquivos de cache, então certifique-se de estar preparado para isso.
:::


## Método alternativo

Primeiro, você precisa se conectar ao seu servidor usando FTP. Se você não está familiarizado com o uso de FTP, recomendamos dar uma olhada no [guia de acesso FTP](gameserver-ftpaccess.md). No próximo passo, você deve encontrar a pasta de cache e deletá-la. Siga este caminho `/gXXXXXX/redm-txadmin/server-data/cache` para acessar a pasta de cache.

![img](https://screensaver01.zap-hosting.com/index.php/s/BkcqxjZ2dDeeMK2/download)

Agora você só precisa limpar/esvaziar o cache. Para isso, clique na pasta **Cache** e depois em **Arquivos**. Agora selecione todas as pastas presentes na pasta **Cache** e delete-as.

![img](https://screensaver01.zap-hosting.com/index.php/s/sb9Ttc2gEWwAzRP/download)

Agora, reinicie seu servidor RedM para que isso tenha efeito. Quando o servidor reiniciar, ele vai recriar o cache.



## Conclusão

Se você seguiu todos os passos, limpou com sucesso o cache do seu servidor. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />