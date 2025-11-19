---
id: dedicated-windows-ts6
title: "Servidor Dedicado: Configure o Teamspeak 6 no seu Servidor Dedicado Windows"
description: "Descubra como configurar e otimizar seu Servidor TeamSpeak 6 para o melhor desempenho e segurança → Saiba mais agora"
sidebar_label: Instalar Servidor Teamspeak 6
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

No verão de 2025, o TeamSpeak lançou a **versão Beta** do **Servidor TeamSpeak 6**. Agora você pode experimentar a próxima geração do TeamSpeak na prática!

Pensando em hospedar esse serviço por conta própria? Vamos te guiar em cada passo para configurar e ajustar tudo, além de tudo que você precisa saber para manter seu servidor seguro e rodando liso.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)





## Requisitos

Antes de instalar o **Servidor Teamspeak 6**, certifique-se de que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho ideal.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU             |
| RAM        | 1 GB         | 4 GB                       |
| Espaço em disco | 1 GB         | 25 GB                      |



## Preparação

Antes de configurar o **Servidor TeamSpeak 6**, você precisa preparar seu sistema. Para garantir que seu sistema esteja rodando com as versões mais recentes de software e melhorias de segurança, sempre faça as atualizações do sistema primeiro.

Isso garante que seu sistema tenha os patches de segurança e versões de software mais atualizados antes de continuar.




## Instalação
Agora que todos os requisitos foram cumpridos e as preparações feitas, você pode seguir com a instalação do aplicativo Servidor Teamspeak 6. Para instalar o TeamSpeak 6 Server, primeiro baixe o arquivo da última versão `http://teamspeak-server_win64-v6.0.0-beta6.zip/` no GitHub: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Depois, extraia o arquivo para um diretório de sua preferência. Abra o **PowerShell** e navegue até a pasta onde você extraiu os arquivos do servidor. Inicie o servidor executando:

```
.\tsserver.exe
```

Na primeira inicialização, uma janela com o contrato de licença aparecerá, que você precisa aceitar. Depois disso, as credenciais da Conta Admin do Server Query e a chave de privilégio serão exibidas. Esses dados aparecem apenas uma vez, então guarde-os com segurança.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Após confirmar, o Servidor TeamSpeak 6 já estará rodando em segundo plano e pronto para uso.

##### 

## Configuração

Você também pode ajustar configurações adicionais do **Servidor TeamSpeak 6** usando **argumentos de linha de comando**. As opções são passadas diretamente ao iniciar o servidor. A lista completa de opções está na documentação oficial do [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). Exemplo:

```
./tsserver --default-voice-port 9987
```



## Conectando-se

Com o Servidor TeamSpeak 6 rodando, você pode se conectar usando o Cliente TeamSpeak 6. Basta usar o endereço IP do seu servidor junto com a porta correta. Insira esses dados no cliente para se conectar ao seu servidor e começar a testar.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Servidor Teamspeak 6 no seu Servidor Dedicado. Também recomendamos dar uma olhada nos recursos abaixo, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Site Oficial](https://teamspeak.com/en/) - Informações e downloads do TeamSpeak 6
- [Fórum da Comunidade](https://community.teamspeak.com/) - Suporte e discussões entre usuários
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Reporte bugs e acompanhe problemas abertos

Tem dúvidas específicas que não foram respondidas aqui? Para mais perguntas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂