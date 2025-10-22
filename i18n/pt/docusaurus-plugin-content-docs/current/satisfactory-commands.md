---
id: satisfactory-commands
title: "Satisfactory: Comandos do Console"
description: "Descubra como otimizar seu gameplay em Satisfactory com comandos essenciais do console e dicas de keybind → Saiba mais agora"
sidebar_label: Comandos do Console
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Satisfactory tem uma variedade de comandos úteis disponíveis para os jogadores ajustarem as configurações do cliente. Nesta página, resumimos os comandos populares e úteis que são comumente usados pelos jogadores em Satisfactory.

<InlineVoucher />

## Acessando o console
Usar o console dentro do Satisfactory é muito fácil, basta pressionar a tecla `` ` `` (backtick fica acima da tecla TAB) para alternar a visibilidade do console. O console pode ficar fechado, aberto com uma pequena janela de comando na parte inferior ou totalmente expandido cada vez que você alternar.

:::info
Se a tecla backtick não funcionar para você, siga os passos na subseção abaixo para configurar e ativar um novo keybind.
:::

### Não consegue acessar o console
Às vezes, devido a teclados regionais, a tecla padrão para ativar o console (backtick) pode não funcionar, então você precisa configurar uma nova. Antes de fazer isso, feche o Satisfactory se ele estiver rodando.

Pressione `Tecla Windows + R` ou pesquise no menu iniciar por `Executar`. Depois, copie o seguinte caminho nele:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

Abra o arquivo `Input.ini` com um editor de texto (como o bloco de notas).

![Screenshot 2023-02-22 011634](https://screensaver01.zap-hosting.com/index.php/s/re9wfZLbCosj5K5/preview)

Agora copie e cole exatamente as linhas abaixo no final do arquivo:

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://screensaver01.zap-hosting.com/index.php/s/Qta7zsNA9ofo3dp/preview)

Por fim, salve e reinicie seu jogo. Agora você poderá abrir o console com o keybind `F6`.

## Comandos do Console

A tabela abaixo mostra o comando, os valores aceitos (se aplicável) e uma descrição para facilitar o entendimento.

Para exibir a lista completa de comandos, use `?` no console, que mostrará uma lista flutuante com todos os comandos disponíveis. Você pode navegar nessa lista usando as setas `CIMA` e `BAIXO`.

Um exemplo de uso do `?` para ver todos os comandos está logo abaixo.

![Screenshot 2023-02-22 015435](https://screensaver01.zap-hosting.com/index.php/s/gS7bSwCFNngz8yx/preview)

:::info
Qualquer comando mencionado nesta página é para o Satisfactory vanilla.
:::

| Sintaxe do Comando            | Valores Aceitos         | Descrição                                               | 
| ---------------------------- | ---------------------- | ------------------------------------------------------- | 
| ?                            | -                      | Exibe a lista completa de comandos                      | 
| Stat FPS                     | -                      | Ativa/desativa o contador de FPS embutido no jogo      | 
| Stat UNIT                    | -                      | Ativa uma exibição que mostra tempo de frame, dados do jogo, tempo de renderização e outras estatísticas | 
| t.MaxFPS "maxfps"            | Inteiro (ex: 120)      | Define o FPS máximo do seu jogo                          | 
| r.ScreenPercentage "value"   | Inteiro (padrão 100)   | Altera a escala da resolução da tela (apenas para renderização do mundo, não para a UI) | 
| r.ViewDistanceScale "value"  | Inteiro (padrão 1)     | Altera a distância de renderização para objetos como pedras ou árvores | 
| Suicide                     | -                      | Mata seu próprio personagem                              | 
| FOV "value"                 | Inteiro (ex: 90)       | Define o campo de visão (FOV) do seu jogo                | 
| r.Atmosphere "1 ou 0"       | true (1)/false (0)     | Ativa/desativa a atmosfera no jogo                       | 
| r.Fog "1 ou 0"              | true (1)/false (0)     | Ativa/desativa o nevoeiro no jogo                        | 
| Gamma "value"               | Inteiro (padrão 50)    | Define o nível de brilho do seu jogo                      | 

Para uma lista mais extensa de comandos, visite [a wiki do Satisfactory](https://satisfactory.fandom.com/wiki/Console), que cobre uma variedade de comandos técnicos em detalhes.

<InlineVoucher />