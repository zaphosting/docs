---
id: discordbot-setup
title: Configure seu Bot do Discord
description: "Descubra como rodar e gerenciar bots do Discord para moderação, música, sorteios e muito mais com aluguel de servidores sem complicação → Saiba mais agora"
sidebar_label: Configuração
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introdução

Um **servidor de bot do Discord** permite que você rode seus bots do Discord de forma contínua e sem complicações. Esses bots podem realizar várias tarefas, como moderar automaticamente seu canal do Discord, tocar música, organizar sorteios e enquetes, e muito mais.

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="Como configurar um servidor de bot do Discord e enviar arquivos do bot!" description="Prefere entender vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo. Seja você apressado ou só curte aprender do jeito mais legal possível!"/>

<InlineVoucher />



## Linguagens suportadas

Bots do Discord podem ser programados em diferentes linguagens. Nosso produto suporta bots do Discord escritos em uma das seguintes linguagens de programação:

- Java
- Python
- NodeJS

  
  

## Preparação



### Obter o Bot

Para começar, você vai precisar de um bot do Discord totalmente funcional. Pode criar um você mesmo ou baixar um bot pronto da internet. Salve ele no seu computador para facilitar o upload para o seu serviço depois.

### Enviar arquivos

Os arquivos do seu bot do Discord precisam ser enviados. Isso pode ser feito via FTP. Se não souber usar FTP, recomendamos dar uma olhada no [guia de Acesso via FTP](gameserver-ftpaccess.md) para instruções detalhadas.

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


Com a pasta aberta, agora é só enviar os arquivos do bot para a pasta vazia:

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## Configuração

Para rodar seu bot pelo Dashboard, ele precisa ser configurado no Dashboard do Bot do Discord na página **Configurações**.

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

Lá você deve configurar qual linguagem de programação o bot usa e qual é o arquivo principal. No exemplo, usamos Python 3 e especificamos o nome do arquivo do bot do Discord que será executado. O nome do arquivo é `main.py`.

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger Dependências
Bots do Discord geralmente têm dependências extras para funcionar. Certifique-se que todas estão presentes e configuradas corretamente no bot do Discord. Elas são definidas nos seguintes arquivos:

- Python: Dependências no `requirements.txt`.
- Node.js: Dependências no `package.json`.
- Java: Dependências no `pom.xml` (Maven) ou `build.gradle` (Gradle).

:::



## Testando a funcionalidade

Depois de salvar as Configurações, o bot pode ser iniciado facilmente clicando no botão verde de start no topo da página. No console ao vivo, você pode conferir se o bot iniciou com sucesso.



## Conclusão

Parabéns, você instalou e configurou seu Bot do Discord com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂






<InlineVoucher />