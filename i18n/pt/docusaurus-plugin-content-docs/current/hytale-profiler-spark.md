---
id: hytale-profiler-spark
title: "Hytale: Spark Profiler – Identifique Gargalos de Performance"
description: "Use o mod Spark para diagnosticar problemas de performance e identificar as causas de lag no seu servidor de jogos Hytale → Saiba mais agora"
sidebar_label: Spark Profiler
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introdução

Problemas de performance como TPS baixo (ticks por segundo), picos de lag ou travamentos podem impactar muito a experiência dos jogadores no seu servidor de jogos Hytale. Identificar a causa desses problemas manualmente é difícil sem diagnósticos detalhados.

![img](https://screensaver01.zap-hosting.com/index.php/s/E4o3SDSRr3RpBBA/preview)

O mod **Spark** é uma ferramenta poderosa para donos de servidores analisarem a performance. Depois de instalado, o Spark coleta dados sobre uso da CPU, tempos de tick, métricas de saúde do servidor e muito mais, gerando relatórios detalhados que ajudam a identificar exatamente onde os problemas de performance estão acontecendo. Isso o torna essencial para troubleshooting e otimização, especialmente em mundos Hytale maiores ou mais movimentados.

<InlineVoucher />

## O que o Spark faz

O Spark oferece várias funcionalidades de profiling:

- **Perfil de performance** – registra a atividade do servidor e identifica ticks lentos ou uso alto de CPU  
- **Métricas de saúde do servidor** – inclui duração dos ticks, TPS, uso de CPU e memória  
- **Relatórios interativos** – gera um relatório web que pode ser visualizado no navegador  
- **Leve e fácil de usar** – projetado para ter impacto mínimo enquanto coleta dados úteis  

## Instalando o Spark

O Spark é distribuído via CurseForge e instalado como um mod. Você pode instalar mods pelo nosso Instalador de Mods ou via FTP. Mais informações estão no nosso [guia de Instalação de Mods](http://localhost:3000/guides/docs/hytale-mods). Após a instalação, reinicie o servidor de jogos Hytale.

<Button label="Baixar Spark" link="https://www.curseforge.com/hytale/mods/spark" block />

## Rodando o profiler

Depois de instalar o Spark e iniciar seu servidor, abra a aba **Console ao Vivo** no dashboard do seu servidor de jogos ou use o chat dentro do jogo se tiver as permissões necessárias. Para começar a coletar dados de performance, inicie o profiler com o comando:

```
/spark profiler start
```

![](https://screensaver01.zap-hosting.com/index.php/s/4fwJk5wtkGK7Yqy/download)

Assim que iniciado, o Spark começa a registrar a atividade detalhada do servidor, como duração dos ticks, uso da CPU e execução de threads. O profiler deve rodar enquanto o servidor estiver passando pelo problema que você quer analisar, por exemplo durante o pico de jogadores ou quando ocorrem picos de lag. Deixar o profiler rodando por pelo menos 30 a 60 segundos geralmente fornece dados suficientes para uma análise significativa.

Enquanto o profiler estiver rodando, você já pode ver resultados ao vivo executando:

```
/spark profiler open
```

Esse comando gera um link web no console ou no chat. Abrir esse link no navegador mostra uma visão ao vivo dos dados do profiling, incluindo gráficos de ticks e distribuição da carga.

Quando tiver coletado dados suficientes, pare o profiler com:

```
/spark profiler stop
```

Após parar, o Spark gera um link para o relatório final. Esse relatório contém o conjunto completo de dados da sessão de profiling e pode ser aberto no navegador ou compartilhado para análise.

Se precisar descartar a sessão atual e começar do zero, você pode resetar o profiler com:

```
/spark profiler cancel
/spark profiler start
```

Isso limpa os dados existentes e inicia uma nova sessão de profiling imediatamente.

## Analisando os resultados do profiler

O relatório do Spark profiler oferece uma análise detalhada de como os recursos do servidor estão sendo usados. Uma das áreas mais importantes para revisar é a linha do tempo dos ticks, que mostra quanto tempo cada tick leva para completar. Ticks consistentemente longos indicam cargas pesadas que impactam diretamente o TPS e a fluidez do jogo.

![img](https://screensaver01.zap-hosting.com/index.php/s/zToJEdffQ75EgXH/preview)

O relatório também destaca **hotspots**, mostrando quais funções ou sistemas estão consumindo mais recursos. Essas informações facilitam identificar se os problemas de performance são causados por mods específicos, comportamento dos jogadores, mecânicas do mundo ou configuração do servidor.

Os relatórios do Spark são feitos para serem compartilhados. Ao pedir ajuda para o suporte ou outros admins, fornecer o link do profiler permite que eles revisem os dados diretamente e ofereçam recomendações precisas.

## Conclusão

O mod Spark profiler para Hytale é uma ferramenta valiosa para diagnosticar problemas de performance e identificar as causas raiz do lag no servidor. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />