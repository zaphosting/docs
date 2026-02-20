---
id: vserver-windows-ts6
title: "Configurar Servidor TeamSpeak 6 no Windows - Monte Sua Própria Plataforma de Voz"
description: "Descubra como configurar e otimizar o TeamSpeak 6 Server beta para uma hospedagem e performance sem travas → Saiba mais agora"
sidebar_label: Instalar Servidor Teamspeak 6
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

No verão de 2025, o TeamSpeak lançou a **versão Beta** do **TeamSpeak 6 Server**. Agora você pode experimentar a próxima geração do TeamSpeak na prática!

Quer hospedar esse serviço por conta própria? Vamos te guiar em cada passo para configurar e ajustar tudo, além de te mostrar o que é importante ficar de olho.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Requisitos

Antes de instalar o **Teamspeak 6 Server**, certifique-se de que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho top.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU           |
| RAM        | 1 GB         | 4 GB                     |
| Espaço em disco | 1 GB     | 25 GB                    |



## Preparação

Antes de configurar o **TeamSpeak 6 Server**, você precisa preparar seu sistema. Para garantir que seu sistema esteja rodando com as versões mais recentes de software e melhorias de segurança, sempre faça as atualizações do sistema primeiro.

Isso garante que seu sistema tenha os patches de segurança e versões de software mais atuais antes de continuar.




## Instalação
Agora que todos os requisitos foram cumpridos e as preparações feitas, você pode seguir para a instalação do aplicativo Teamspeak 6 Server. Para instalar o TeamSpeak 6 Server, primeiro baixe o arquivo da última versão `http://teamspeak-server_win64-v6.0.0-beta6.zip/` no GitHub: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Depois, extraia o arquivo para uma pasta de sua preferência. Abra o **PowerShell** e navegue até o diretório onde você extraiu os arquivos do servidor. Inicie o servidor rodando:

```
.\tsserver.exe
```

Na primeira inicialização, vai aparecer uma janela com o contrato de licença, que você precisa aceitar. Depois disso, as credenciais da Conta Admin do Server Query e a chave de privilégio serão exibidas. Esses dados aparecem só uma vez, então guarde com cuidado.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Confirmado isso, o TeamSpeak 6 Server já estará rodando em segundo plano e pronto para uso.

##### 

## Configuração

Você também pode ajustar configurações extras do **TeamSpeak 6 Server** usando **argumentos de linha de comando**. As opções são passadas diretamente ao iniciar o servidor. A lista completa de opções está na documentação oficial do [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). Exemplo:

```
./tsserver --default-voice-port 9987
```



## Conectando

Com o TeamSpeak 6 Server rodando, você pode se conectar usando o TeamSpeak 6 Client. É só usar o endereço IP do seu servidor junto com a porta correta. Insira esses dados no client para se conectar ao seu servidor e começar a testar.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Teamspeak 6 Server no seu VPS/servidor dedicado. Também recomendamos dar uma olhada nos recursos abaixo, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Site Oficial](https://teamspeak.com/en/) - Informações e downloads do TeamSpeak 6
- [Fórum da Comunidade](https://community.teamspeak.com/) - Suporte e discussões entre usuários
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Reporte bugs e acompanhe problemas abertos

Tem dúvidas específicas que não foram respondidas aqui? Para mais perguntas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te dar aquela força! 🙂