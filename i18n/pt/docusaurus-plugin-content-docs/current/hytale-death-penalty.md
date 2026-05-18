---
id: hytale-death-penalty
title: "Hytale: Alterar Penalidade de Morte"
description: "Descubra como funcionam as penalidades de morte no seu servidor de jogos Hytale → Saiba mais agora"
sidebar_label: Alterar Penalidade de Morte
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

Em um servidor de jogos Hytale, a **penalidade de morte** determina como os jogadores são afetados quando morrem. Essa configuração controla até que ponto o progresso do jogador, itens, durabilidade ou outras consequências de gameplay são aplicadas após um evento de morte.

:::info Aviso de Acesso Antecipado

Hytale foi lançado em 13 de janeiro de 2026 e está atualmente disponível em Acesso Antecipado. Como o jogo ainda está em fase ativa de desenvolvimento, o software do servidor, arquivos de configuração, suporte a mods e fluxos de instalação podem continuar mudando com o tempo.

:::

<InlineVoucher />


## Configurações Disponíveis para Penalidade de Morte
As configurações de penalidade de morte controlam como as mortes dos jogadores afetam o conteúdo do inventário e a durabilidade dos itens. Essas opções permitem definir se os itens são mantidos, parcialmente perdidos ou totalmente dropados, assim como o quanto de desgaste os itens recebem ao morrer.

As seguintes opções de configuração estão disponíveis:

**ItemsLossMode**  
Essa configuração define o comportamento geral da perda de itens quando um jogador morre.  
Suporta os seguintes valores:

- `None` – Jogadores mantêm todo o inventário após a morte  
- `All` – Todos os itens são dropados na morte  
- `Configured` – A perda de itens é determinada por configurações baseadas em porcentagem

**ItemsAmountLossPercentage**  
Esse valor é aplicado somente quando `ItemsLossMode` está definido como `Configured`.  
Define quanto de cada pilha de itens é removido na morte, expresso em porcentagem.  
Por exemplo, um valor de `50.0` significa que metade de cada pilha é perdida.

**ItemsDurabilityLossPercentage**  
Essa configuração controla quanto de durabilidade os itens perdem quando um jogador morre.  
O valor é definido como uma porcentagem da durabilidade atual do item e permite que a morte tenha consequências sem remover totalmente os itens.

Juntas, essas configurações oferecem um controle detalhado sobre o quão severa ou branda a morte deve ser no servidor.  
Ajustes cuidadosos garantem uma experiência equilibrada que combina com a dificuldade e estilo de jogo pretendidos para o servidor.



## Configuração da penalidade de morte

As configurações da penalidade de morte estão localizadas no arquivo principal `config.json` do seu servidor. Esses valores são lidos quando o servidor inicia e se aplicam globalmente a todos os jogadores.

Dentro do arquivo de configuração, as configurações relacionadas à morte fazem parte da configuração de gameplay. Para adicionar ou modificar a penalidade de morte, localize a seguinte linha dentro do `config.json`:

```
"GameplayConfig": "Default",
```

Essa entrada define o perfil ativo de configuração de gameplay. A configuração da penalidade de morte deve ser colocada logo abaixo dessa linha como um novo bloco. Uma vez localizado, adicione o bloco de configuração de morte para definir como o respawn e a perda de itens são tratados:

```
"Death": {
   "RespawnController": {
     "Type": "HomeOrSpawnPoint"
   },
   "ItemsLossMode": "Configured",
   "ItemsAmountLossPercentage": 50.0,
   "ItemsDurabilityLossPercentage": 25.0
 },
```

O exemplo a seguir mostra uma configuração típica onde a perda de itens e a perda de durabilidade são aplicadas parcialmente na morte:

```
{
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

Nessa configuração, o servidor usa o modo de perda `Configured`, o que significa que a perda de itens é controlada por porcentagens.  
Quando um jogador morre, metade de cada pilha de itens é removida e os itens perdem 25% da durabilidade atual.

Se nenhuma perda de itens deve ocorrer, o modo de perda pode ser definido como `None`, nesse caso os valores percentuais são ignorados:

```
{
  "ItemsLossMode": "None"
}
```

Para uma experiência mais punitiva, onde todos os itens são dropados na morte, a configuração pode ser:

```
{
  "ItemsLossMode": "All"
}
```

Após modificar o `config.json`, o servidor precisa ser reiniciado para que as mudanças tenham efeito.  
Recomenda-se verificar o comportamento no jogo após o restart para garantir que a penalidade de morte esteja conforme a dificuldade desejada.



## Conclusão

Com a penalidade de morte configurada, você agora tem uma visão clara de como as mortes dos jogadores são tratadas no seu servidor de jogos Hytale. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂



<InlineVoucher />