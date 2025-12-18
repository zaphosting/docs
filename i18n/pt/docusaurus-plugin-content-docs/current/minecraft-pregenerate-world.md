---
id: minecraft-pregenerate-world
title: "Minecraft: Pré-gerar Mundo (Chunks)"
description: "Descubra como pré-gerar mundos no Minecraft de forma eficiente com plugins ou mods para um gameplay mais suave e desempenho otimizado do servidor → Saiba mais agora"
sidebar_label: Pré-gerar Mundo (Chunks)
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Quer gerar seu mundo rápida, eficiente e seguramente antes do gameplay, ao invés de durante? O Minecraft não oferece uma função integrada para isso por padrão. Mas isso pode ser feito com plugins ou mods especialmente desenvolvidos. Como usar esses recursos e quais pontos você precisa considerar estão explicados em detalhes abaixo.



## Preparação

Primeiro, você precisa garantir que seu servidor seja compatível com o uso de plugins ou mods. É necessário usar uma das seguintes variantes do Minecraft:

- Minecraft: Forge, Minecraft Fabric (mods)
- Minecraft: Spigot, Minecraft Bukkit, Minecraft: Paper Spigot (plugins)

Se você não estiver usando nenhuma dessas variantes do Minecraft, pode usar a opção de [troca de jogo](gameserver-gameswitch.md) para selecionar o jogo desejado.


## Instalação
O método mais comum para pré-gerar chunks é usar o [Chunky](https://github.com/pop4959/Chunky), disponível para várias implementações de servidor tanto como plugin quanto como mod. Neste exemplo, a geração de chunks é explicada e demonstrada usando o Chunky.

| Variante | Download |
| -------- | ------------------------------------------------------------ |
| Mod | [Forge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge) [Fabric](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator) |
| Plugin | [Spigot/Bukkit](https://www.spigotmc.org/resources/chunky.81534/) |

Baixe o **Chunky** como plugin ou mod e instale no seu servidor. Se não souber exatamente como instalar [Plugins](minecraft-pluginuploader.md) ou [Mods](minecraft-forge-fabric-add-mods-modpacks), os guias correspondentes vão te ajudar.




## Uso 

Depois que o **Chunky** estiver instalado com sucesso, você pode começar a gerar os chunks. O processo pode ser iniciado com o comando `chunky start`.

Se quiser pausar a geração temporariamente e continuar depois, use os comandos `chunky pause` e `chunky continue`. Para encerrar o processo completamente, use `chunky cancel`. Você pode executar os comandos via console ao vivo ou como operador diretamente no jogo no seu servidor.

:::warning Carga excessiva
Ultrapassar os limites de recursos por um período prolongado pode levar a uma suspensão temporária. Para evitar isso, a geração de chunks deve ocorrer em um ritmo e escopo equilibrados para que a carga do sistema fique dentro de uma faixa aceitável.

Mais informações sobre limites de recursos e possíveis medidas estão no nosso guia de [limite de recursos](gameserver-resourcelimit.md). 
:::



## Comandos

Aqui estão todos os comandos que o Chunky usa para gerar e gerenciar chunks. 

#### Gerenciamento de Tarefas

| Comando         | Descrição                                                  |
| --------------- | ------------------------------------------------------------ |
| chunky start    | Inicia uma nova tarefa de geração de chunks a partir da seleção atual |
| chunky pause    | Pausa as tarefas atuais de geração de chunks e salva o progresso |
| chunky continue | Continua as tarefas atuais ou salvas de geração de chunks    |
| chunky cancel   | Para as tarefas atuais de geração de chunks e cancela o progresso |



#### Seleção

| Comando                                    | Descrição                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| chunky world [world]                       | Define o mundo atualmente selecionado                       |
| chunky shape `<shape>`                     | Define o formato para gerar                                 |
| chunky center [`<x>` `<z>`]                | Define o bloco central atual                                |
| chunky radius `<radius>`                   | Define o raio atual                                        |
| chunky worldborder                         | Define o centro e raio para coincidir com a borda do mundo no mundo selecionado |
| chunky spawn                               | Define o centro para o ponto de spawn                       |
| chunky corners `<x1>` `<z1>` `<x2>` `<z2>` | Define a seleção pelas coordenadas dos cantos               |
| chunky pattern `<pattern>`                 | Define o padrão preferido de geração                         |
| chunky slection                            | Exibe a seleção atual                                       |





#### Diversos

| Comando                   | Descrição                                           |
| ------------------------- | ----------------------------------------------------- |
| chunky silent             | Alterna a exibição de mensagens de atualização       |
| chunky quiet `<interval>` | Define o intervalo silencioso em segundos para mensagens de atualização |
| chunky progress           | Exibe o progresso da pré-geração no jogo para todas as tarefas |
| chunky reload             | Recarrega a configuração                             |
| chunky trim               | Apaga chunks fora da seleção                         |



## Conclusão

Seguindo esses passos, você instalou o Chunky com sucesso e agora pode pré-gerar seu mundo (chunks). Parabéns! Se você seguiu tudo certinho, já deve ter estabelecido a conexão com o servidor. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />