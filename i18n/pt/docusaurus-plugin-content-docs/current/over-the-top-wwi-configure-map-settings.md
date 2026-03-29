---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI: Configure as Configurações de Mapas Aleatórios"
description: "Aprenda a configurar as opções de geração aleatória de mapas no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Mapas Aleatórios
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

As configurações de mapas aleatórios em **Over the Top WWI** permitem gerar mapas dinamicamente com diferentes terrenos, vegetação e características ambientais. Isso aumenta muito a rejogabilidade e cria campos de batalha únicos para cada partida.

Ajustando esses valores, você controla o tamanho do mapa, a complexidade do terreno e a quantidade de objetos como florestas, pedras ou construções.

<InlineVoucher />

## Configuração

As configurações de mapas aleatórios são feitas dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo `ServerConfiguration.ini`. Dentro dele, encontre os seguintes parâmetros:

```
RandomMapSizee = 450
RandomFields = 8.25
RandomCivBuildings = 0
RandomMilBuildings = 0
RandomForests = 8.5
RandomSingleTrees = 1.1
RandomBush = 5
RandomRocks = 1.1
RandomNoiseSetting = 0
RandomWaterHeight = 12.25
RandomMaxTerrainHeight = 26
RandomFrequency = 5
RandomLacunarity = 3
RandomPersistence = 32
RandomDesert = 0
```

- `RandomMapSizee` define o tamanho total do mapa gerado  
- `RandomFields`, `RandomForests`, `RandomBush`, `RandomRocks` controlam quantos elementos naturais aparecem no mapa  
- `RandomCivBuildings` e `RandomMilBuildings` definem a quantidade de construções civis e militares  
- `RandomSingleTrees` controla a colocação de árvores isoladas  
- `RandomNoiseSetting`, `RandomFrequency`, `RandomLacunarity` e `RandomPersistence` afetam a geração e variação do terreno  
- `RandomWaterHeight` define o nível da água  
- `RandomMaxTerrainHeight` controla a elevação e altura do terreno  
- `RandomDesert` determina se ambientes desérticos podem aparecer  

- `0` → Desativado  
- `1` → Ativado  
- `2` → Aleatório  

Ajuste esses valores para criar diferentes tipos de mapas, desde florestas densas até campos de batalha abertos ou terrenos variados.

Depois de modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. As novas configurações de mapa serão aplicadas quando um mapa aleatório for gerado.

## Conclusão

Parabéns! Você configurou com sucesso as opções de mapas aleatórios no seu **servidor de jogos Over the Top WWI**. Isso permite criar campos de batalha únicos e dinâmicos, melhorando a rejogabilidade e a experiência dos jogadores.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />