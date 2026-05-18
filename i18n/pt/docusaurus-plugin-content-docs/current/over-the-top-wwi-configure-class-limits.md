---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI: Configurar Limites de Classe"
description: "Aprenda como configurar limites de classe no seu servidor Over the Top WWI → Saiba mais agora"
sidebar_label: Limites de Classe
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Os limites de classe em **Over the Top WWI** controlam quantos jogadores podem usar tipos específicos de unidades, como atiradores de elite, sapadores ou unidades pesadas. Ajustar esses limites ajuda a equilibrar o gameplay e evita que certas classes sejam usadas em excesso.

Configurando os limites de classe, você garante composições de time justas e cria uma experiência de jogo mais estruturada e tática.

<InlineVoucher />

## Configuração

Os limites de classe são configurados dentro do arquivo de configuração do servidor. Você pode acessar e editar esse arquivo no seu **painel de controle do servidor de jogos** em **Configs**. Localize e abra o arquivo de configuração `ServerConfiguration.ini`. Dentro desse arquivo, encontre os seguintes parâmetros:

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` ativa ou desativa as restrições de classe  
- `0` → Desativado  
- `1` → Ativado  

- `PercentofCavPerTeam` define a porcentagem de unidades de cavalaria permitidas por time  

- `NumberOfSappers`, `NumberOfSpecialists`, `NumberOfSnipers`, `NumberOfHeavys`, `NumberofStormTroops` definem quantos jogadores podem usar cada classe  

- `NumberofInfOfficers` controla o número de cargos de oficiais disponíveis  

- `MinimumNumOfPlayerForClassLimits` define quantos jogadores precisam estar no servidor para que os limites de classe sejam aplicados  

Ajuste esses valores para controlar quantos jogadores podem escolher cada classe e equilibrar seu servidor conforme seu estilo de jogo preferido.

Após modificar o `ServerConfiguration.ini`, salve o arquivo e reinicie seu servidor. Os novos limites de classe serão aplicados automaticamente.

## Conclusão

Parabéns! Você configurou com sucesso os limites de classe no seu **servidor Over the Top WWI**. Isso permite equilibrar as composições dos times e melhorar a experiência geral de jogo.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂 

<InlineVoucher />