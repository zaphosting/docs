---
id: dedicated-windows-hytale
title: "Servidor Dedicado: Configuração do Servidor Dedicado Hytale"
description: "Descubra como configurar o servidor dedicado Hytale no seu Servidor Dedicado Windows para uma gestão de gameplay sem complicações → Saiba mais agora"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um Servidor Dedicado e quer hospedar seu próprio servidor de jogos Hytale nele? Neste guia, explicamos passo a passo como instalar e rodar o servidor dedicado Hytale em um sistema Windows.

## Preparação

Para rodar um servidor de jogos Hytale, seu sistema precisa atender alguns requisitos básicos. O servidor roda em Java 25 e requer pelo menos 4 GB de RAM. As arquiteturas x64 e arm64 são suportadas. O uso real de recursos depende do número de jogadores, distância de visão e atividade no mundo, então recursos adicionais podem ser necessários para servidores maiores.

Antes de continuar, certifique-se de que o Java 25 está instalado no seu sistema Windows. Você pode verificar a instalação abrindo o prompt de comando e rodando:

```
java --version
```

Se o Java ainda não estiver instalado no seu sistema, siga nosso guia dedicado Instalar Java para servidores Windows. Esse guia explica como instalar e configurar o Java corretamente no seu ambiente.



## Instalação

Comece criando um diretório dedicado para o servidor Hytale. Isso mantém todos os arquivos do servidor organizados em um só lugar. Por exemplo:

```
C:\Hytale
```

O servidor precisa de dois componentes principais: o aplicativo do servidor em si e os assets do jogo. Esses arquivos podem ser obtidos usando o downloader via linha de comando do Hytale, que é feito para implantações de servidor e atualizações mais fáceis.

O downloader CLI oferece uma forma estruturada de baixar e atualizar os arquivos do servidor Hytale. Depois de baixar o arquivo do downloader, extraia-o em um diretório temporário. Dentro do arquivo, você encontrará um arquivo QUICKSTART.md que descreve o uso básico da ferramenta.

Execute o downloader pelo prompt de comando e siga as instruções para baixar a versão mais recente do servidor. Quando o processo terminar, copie os arquivos do servidor baixados e o arquivo de assets para o seu diretório do servidor. Após essa etapa, o diretório deve conter o arquivo JAR do servidor e um arquivo de assets como Assets.zip.

| **Comando**                                   | **Descrição**                       |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | Baixar a última versão               |
| `./hytale-downloader -print-version`          | Mostrar versão do jogo sem baixar   |
| `./hytale-downloader -version`                | Mostrar versão do hytale-downloader  |
| `./hytale-downloader -check-update`           | Verificar atualizações do downloader |
| `./hytale-downloader -download-path game.zip` | Baixar para arquivo específico       |
| `./hytale-downloader -patchline pre-release`  | Baixar do canal pré-lançamento       |
| `./hytale-downloader -skip-update-check`      | Pular verificação automática de update |



## Configuração

### Iniciando o servidor

O servidor é iniciado executando o arquivo JAR e especificando o caminho para o arquivo de assets. Ajuste o caminho se seus assets estiverem em outro local. Abra o prompt de comando no diretório do servidor e rode:

```
java -jar HytaleServer.jar --assets C:\Hytale\Assets.zip --bind 0.0.0.0:5520
```

### Autenticação

Na primeira inicialização, o servidor precisa ser autenticado antes que os jogadores possam se conectar. Isso é feito diretamente pelo console do servidor usando um processo de login baseado em dispositivo. Siga as instruções mostradas no console para completar a autenticação.

```
/auth login device
```

A saída será parecida com isso:

```
> /auth login device
===================================================================
AUTORIZAÇÃO DO DISPOSITIVO
===================================================================
Visite: https://accounts.hytale.com/device
Digite o código: ABCD-1234
Ou acesse: https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
Aguardando autorização (expira em 900 segundos)...

[Usuário completa a autorização no navegador]

> Autenticação bem-sucedida! Modo: OAUTH_DEVICE
```

Depois de autenticado, seu servidor pode aceitar conexões de jogadores.



### Configuração do firewall

Por padrão, o servidor escuta na porta UDP 5520 e se conecta a todas as interfaces disponíveis. Você pode mudar o endereço e a porta se quiser. O servidor se comunica via UDP usando QUIC. Certifique-se de que seu firewall permite tráfego UDP de entrada na porta escolhida, usando Iptables ou UFW. Rode o seguinte comando no PowerShell para aplicar essa regra de firewall facilmente:

```
New-NetFirewallRule -DisplayName "Hytale Server" -Direction Inbound -Protocol UDP -LocalPort 5520 -Action Allow
```



## Notas de desempenho

A distância de visão é um dos fatores mais importantes que influenciam o consumo de memória. Valores maiores aumentam o uso de RAM porque mais dados do mundo precisam ficar ativos ao mesmo tempo.

Para a maioria das configurações, uma distância máxima de visão de 12 chunks (384 blocos) oferece um bom equilíbrio entre desempenho do servidor e experiência de jogo.

Para comparação, servidores de Minecraft usam uma distância padrão de visão de 10 chunks (160 blocos). O padrão do Hytale de 384 blocos é aproximadamente equivalente a 24 chunks de Minecraft, o que explica os requisitos maiores de memória. Esse valor deve ser ajustado com base no número esperado de jogadores e nos recursos disponíveis do sistema.



## Conclusão

Parabéns, agora você tem um servidor funcional de Hytale rodando no seu sistema. A partir daqui, você pode expandir a configuração instalando mods, ajustando as configurações do mundo e otimizando parâmetros de desempenho para sua base de jogadores. Recomendamos monitorar regularmente o uso de recursos para garantir operação estável conforme o servidor cresce.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂