---
id: vrising-configuration
title: "V Rising: Configuração do Servidor"
description: "Descubra como personalizar as configurações do servidor V Rising para uma jogabilidade top e controle total do seu ambiente → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Os servidores de jogos V Rising vêm com uma variedade enorme de parâmetros de configuração que você pode personalizar do seu jeito. Neste guia, vamos explorar todos os parâmetros disponíveis atualmente e explicar cada um com mais detalhes.

<InlineVoucher />

## Acessando seu Arquivo de Configuração

Primeiro, você precisa acessar seu arquivo de configuração para editar qualquer parâmetro. Existem várias formas de editar esse arquivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

O jeito mais fácil é ir até a seção **Configurações** no webinterface do seu servidor de jogos e procurar as opções certas por lá, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via arquivo de Configuração no WI">

#### Via arquivo de Configuração no WI

:::note
O servidor precisa estar parado antes de editar o arquivo de configuração. Editar o arquivo e reiniciar o servidor vai desfazer as mudanças.
:::

Alternativamente, para quem quer editar o arquivo bruto diretamente, você pode acessar isso indo na seção **Configs** no webinterface do seu servidor de jogos e clicando no botão azul de editar arquivo, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/3Dg6NCtN9akx8bg/preview)

Isso vai abrir um editor de texto direto no site para você editar.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
O servidor precisa estar parado antes de editar o arquivo de configuração. Editar o arquivo e reiniciar o servidor vai desfazer as mudanças.
:::

O último método para acessar o arquivo bruto é via FTP. Se você não está familiarizado com FTP, recomendamos dar uma olhada no [guia de Acesso via FTP](gameserver-ftpaccess.md). Porém, esse método é mais demorado e, se quiser editar o conteúdo do arquivo diretamente, recomendamos usar a seção **Configs** no webinterface do seu servidor de jogos, como mencionado.

</TabItem>
</Tabs>

## Opções de Configuração do Servidor

Nas seções abaixo, apresentamos tabelas com informações sobre as opções de configuração disponíveis, tanto para o servidor em si quanto para as configurações de jogabilidade.

:::tip
Não recomendamos alterar as configurações de Porta, pois elas são configuradas automaticamente pelo servidor de jogos. Mudar os valores da Porta pode quebrar seu servidor!
:::

### Configurações Importantes do Servidor

Essa seção resume as configurações mais importantes do servidor, que ficam no arquivo de configuração **ServerHostSettings.json**. Para a lista completa de opções, confira o [guia oficial no GitHub do jogo](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md).

| Nome do Parâmetro   | Exemplo                  | Descrição                                                                |
| ------------------- | ------------------------ | ------------------------------------------------------------------------ | 
| Name                | ZAP-Hosting Docs Test    | Define o nome do seu servidor                                            |
| Description         | ZAP is the best!         | Define a descrição do seu servidor                                       |
| Port                | 9876 (padrão)            | Define a porta de rede usada pelo jogo                                   |
| QueryPort           | 9877 (padrão)            | Define a porta de consulta usada para retornar info do servidor na lista |
| MaxConnectedUsers   | 10                       | Define o máximo de jogadores que podem estar no servidor ao mesmo tempo  |
| MaxConnectedAdmins  | 4                        | Define quantos admins podem entrar em um servidor cheio                  |
| ServerFps           | 30 (padrão recomendado)  | Define a taxa de quadros do servidor, recomendamos deixar no padrão      |
| SaveName            | ZAPDocsTest              | Define o nome do save do mundo                                           |
| Password            | iLoveZAP!2024            | Define uma senha para seu servidor, ou deixe vazio para nenhum           |
| ListOnMasterServer  | true/false               | Ativa ou desativa se seu servidor aparece na lista de servidores         |
| AutoSaveCount       | 15                       | Define quantos saves antigos devem ser armazenados                       |
| AutoSaveInterval    | 600                      | Define o intervalo entre cada auto save                                 |
| RCON Enabled        | true/false               | Ativa ou desativa o RCON                                                |
| RCON Port           | 25575                    | Define a porta do RCON                                                  |
| RCON Password       | iLoveZAP!2024            | Define a senha para a conexão RCON                                      |

Depois de fazer suas alterações, não esqueça de salvar o arquivo e reiniciar seu servidor. Na próxima vez que o servidor iniciar, ele vai usar as configurações que você definiu.

### Configurações Chave de Jogabilidade

V Rising tem uma tonelada de parâmetros e opções para ajustar a jogabilidade. Nesta seção, vamos resumir os mais importantes, que ficam no arquivo **ServerGameSettings.json**.

| Nome do Parâmetro         | Exemplo                       | Descrição                                                                                          |
| ------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------- | 
| GameDifficulty            | Normal                        | Define a dificuldade do jogo no seu mundo                                                         |
| GameModeType              | PvP, PvE                      | Define o tipo de modo de jogo do seu mundo                                                        |
| CastleDamageMode          | Always, Never, TimeRestricted | Define quando os Castelos podem ser danificados, usando o parâmetro VSCastle para o tempo em "TimeRestricted" |
| PlayerDamageMode          | Always, TimeRestricted        | Define se outros jogadores podem ser danificados, usando o parâmetro VSPlayer para o tempo em "TimeRestricted" |
| PvPProtectionMode         | Short, Medium, Long           | Define por quanto tempo novos jogadores ficam invencíveis                                         |
| DeathContainerPermission  | Anyone, ClanMembers           | Define quem pode saquear itens dropados quando um jogador morre                                   |
| CanLootEnemyContainers    | true/false                    | Define se um jogador pode saquear baús de outros jogadores que não estão no clã                   |
| BloodBoundEquipment       | true/false                    | Define se você mantém seu equipamento após morrer                                                 |
| TeleportBoundItems        | true/false                    | Define se itens podem bloquear seu teleporte via Vampire Waygates                                |
| AllowGlobalChat           | true/false                    | Ativa ou desativa o chat global                                                                   |

Depois de fazer suas alterações, não esqueça de salvar o arquivo e reiniciar seu servidor. Na próxima vez que o servidor iniciar, ele vai usar as configurações que você definiu.

<InlineVoucher />