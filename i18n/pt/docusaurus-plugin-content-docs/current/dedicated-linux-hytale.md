---
id: dedicated-linux-hytale
title: "Servidor Dedicado: Configuração do Servidor Dedicado Hytale"
description: "Descubra como configurar o servidor dedicado Hytale no seu Servidor Dedicado Linux para uma gestão de gameplay sem complicações ? Saiba mais agora"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um Servidor Dedicado Linux e quer instalar o Hytale nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux.

## Preparação

Para rodar um servidor de jogos Hytale, seu sistema precisa atender a alguns requisitos básicos. O servidor roda com Java 25 e requer pelo menos 4 GB de RAM. As arquiteturas x64 e arm64 são suportadas. O uso real de recursos depende do número de jogadores, distância de visão e atividade no mundo, então recursos adicionais podem ser necessários para servidores maiores.

Antes de continuar, certifique-se de que o Java 25 está instalado no seu sistema. Você pode verificar a instalação com:

```
java --version
```

Se o Java ainda não estiver instalado no seu sistema, siga nosso guia dedicado [Instalar Java](dedicated-linux-java) para servidores Linux. Esse guia explica como instalar e configurar o Java corretamente no seu ambiente.



## Instalação

Comece criando um diretório dedicado para o servidor Hytale. Isso mantém todos os arquivos do servidor organizados em um só lugar.

```
sudo mkdir -p /opt/hytale
sudo chown -R $(whoami):$(whoami) /opt/hytale
cd /opt/hytale
```

O servidor precisa de dois componentes principais: o aplicativo do servidor em si e os assets do jogo. Esses arquivos podem ser obtidos usando o downloader de linha de comando do Hytale, que é feito para implantações de servidor e atualizações mais fáceis.

O downloader CLI oferece uma forma estruturada de baixar e atualizar os arquivos do servidor Hytale. Depois de baixar o arquivo do downloader, extraia-o em um diretório temporário. Dentro do arquivo, você encontrará um arquivo QUICKSTART.md que descreve o uso básico da ferramenta.

Execute o downloader pelo terminal e siga as instruções para baixar a versão mais recente do servidor. Quando o processo terminar, copie os arquivos do servidor baixados e o arquivo de assets para o diretório do seu servidor. Após essa etapa, o diretório deve conter o arquivo JAR do servidor e um arquivo de assets como o Assets.zip.

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

O servidor é iniciado executando o arquivo JAR e especificando o caminho para o arquivo de assets. Ajuste o caminho se seus assets estiverem em outro local.

```
java -jar HytaleServer.jar --assets /opt/hytale/Assets.zip --bind 0.0.0.0:5520
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

Por padrão, o servidor escuta na porta UDP 5520 e se conecta a todas as interfaces disponíveis. Você pode mudar o endereço e a porta se precisar. O servidor se comunica via UDP usando QUIC. Certifique-se de que seu firewall permita tráfego UDP de entrada na porta escolhida, usando Iptables ou UFW.

```
sudo iptables -A INPUT -p udp --dport 5520 -j ACCEPT
sudo ufw allow 5520/udp
```



## Notas de desempenho

A distância de visão é um dos fatores mais importantes que influenciam o consumo de memória. Valores maiores aumentam o uso de RAM porque mais dados do mundo precisam ficar ativos ao mesmo tempo.

Para a maioria das configurações, uma distância máxima de visão de 12 chunks (384 blocos) oferece um bom equilíbrio entre desempenho do servidor e experiência de jogo.

Para comparação, servidores de Minecraft usam uma distância padrão de visão de 10 chunks (160 blocos). O padrão do Hytale de 384 blocos é aproximadamente equivalente a 24 chunks de Minecraft, o que explica os requisitos maiores de memória. Esse valor deve ser ajustado com base no número esperado de jogadores e nos recursos disponíveis do sistema.



## Conclusão

Parabéns, agora você tem um servidor Hytale funcional rodando no seu sistema. A partir daqui, você pode expandir a configuração instalando mods, ajustando as configurações do mundo e otimizando parâmetros de desempenho para o seu público. Recomendamos monitorar regularmente o uso de recursos para garantir operação estável conforme o servidor cresce.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! ??