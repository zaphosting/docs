---
id: vserver-linux-create-gameservice
title: "VPS: Configure seu Servidor Dedicado de Jogos como um Serviço Linux"
description: "Descubra como criar e gerenciar serviços Linux para servidores dedicados de jogos para garantir inicialização automática e manutenção fácil → Saiba mais agora"
sidebar_label: Configurar Serviço Linux
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Serviços são parte essencial do Linux e se referem a um processo ou aplicação que roda em segundo plano, podendo ser uma tarefa pré-definida ou baseada em eventos. Isso traz vários benefícios, incluindo o lançamento automático do servidor na inicialização, atualizações automáticas, gerenciamento fácil e acesso a logs, entre outros! Neste guia, vamos explorar o processo de criação de um serviço para seu servidor dedicado de jogos.

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso [guia de Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda para isso.

Você também deve seguir um dos nossos guias de servidor dedicado de jogos nesta seção para instalar e configurar um servidor de jogos no seu sistema Linux. Neste guia, usaremos o [servidor dedicado de Palworld](vserver-linux-palworld.md) como exemplo, mas as instruções podem ser adaptadas para todos os nossos guias.

## Criando um Serviço

Comece criando um novo arquivo de serviço para o servidor dedicado de jogos que você configurou. Substitua `[your_game]` pelo nome que preferir. Recomendamos usar o nome do jogo para manter tudo organizado, por isso usaremos `palworld.service`.
```
sudo nano /etc/systemd/system/[your_game].service
```

## Configurando o Serviço

Com o editor nano aberto, copie o conteúdo básico do arquivo abaixo, que é um template de serviço que você pode reutilizar. Temos duas versões, uma para guias que usam SteamCMD e outra para jogos que não usam SteamCMD.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="Jogo SteamCMD" default>

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="Jogo Regular">

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

Vamos detalhar o conteúdo do arquivo para facilitar o entendimento:
- `Description`: Pode ser qualquer coisa, útil para identificar facilmente o propósito do serviço.
- `User`: Usando nossos guias, você deve ter configurado um usuário separado `steam` para uso com SteamCMD, ou o usuário `gameservers` para jogos que não usam SteamCMD. Caso contrário, defina para o usuário que deve rodar o serviço.
- `WorkingDirectory`: É o caminho para o diretório principal que contém tudo que o serviço precisa.
- `ExecStartPre` (apenas SteamCMD): Aqui configuramos o mesmo comando de instalação do SteamCMD que será executado toda vez que o servidor reiniciar para garantir que esteja atualizado. Você deve copiar isso do respectivo guia do servidor dedicado ou substituir os valores manualmente pelos do jogo.
- `ExecStart`: Define a tarefa pré-definida que deve rodar com o serviço. Novamente, copie o caminho do guia do servidor dedicado ou substitua manualmente para apontar para o arquivo de inicialização.

:::important Camada de Compatibilidade Wine
Para jogos que precisam da camada de compatibilidade **Wine** para rodar, você deve incluir os comandos **xvfb-run** e **wine** dentro do parâmetro `ExecStart`. Um exemplo para V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Também certifique-se de que seu comando de instalação SteamCMD em `ExecStartPre` inclua o parâmetro `+@sSteamCmdForcePlatformType` se necessário para forçar a versão da plataforma.
:::

Com todos os valores adaptados para seu servidor dedicado de jogos, salve o arquivo e saia do nano usando `CTRL + X`, depois `Y` para confirmar e por fim `ENTER`.

Usando nosso exemplo do Palworld, o arquivo ficaria assim:
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## Gerenciando o Serviço

Com o arquivo de serviço criado, você precisa habilitá-lo. No exemplo `palworld.service`, substitua `[your_service]` por `palworld`.
```
sudo systemctl enable [your_service]
```

:::tip
Se você fizer alterações no arquivo de serviço, lembre-se de rodar `systemctl daemon-reload` depois para garantir que as mudanças entrem em vigor.
:::

Agora você pode iniciar o servidor com o comando `systemctl start`. Da mesma forma, pode parar e reiniciar o servidor com comandos similares.
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
Para ver detalhes sobre o serviço, use o comando `systemctl status`. Se precisar de logs para debug, use `journalctl -u [your_service].service` para ver os logs mais recentes do serviço.
:::

Por fim, se quiser impedir que o serviço rode na inicialização, basta desabilitá-lo.
```
sudo systemctl disable [your_service]
```

## Conclusão

Você configurou com sucesso um serviço para seu servidor dedicado de jogos. Agora o servidor vai iniciar automaticamente toda vez que o servidor ligar.

Você também aprendeu sobre o conteúdo do arquivo de serviço e como gerenciar o serviço usando vários comandos.

<InlineVoucher />