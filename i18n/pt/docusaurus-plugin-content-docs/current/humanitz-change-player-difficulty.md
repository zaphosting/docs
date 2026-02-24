---
id: humanitz-change-player-difficulty
title: "HumanitZ: Alterar Dificuldade do Jogador"
description: "Aprenda como ajustar a dificuldade do jogador e as configurações de sobrevivência no seu servidor HumanitZ → Saiba mais agora"
sidebar_label: "Alterar Dificuldade do Jogador"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

A dificuldade do jogador em HumanitZ determina o quão desafiadora é a experiência de sobrevivência. Desde a morte permanente até a velocidade de drenagem dos vitais e a força dos bandidos, essas configurações impactam diretamente o quão difícil seu servidor será.

<InlineVoucher />

## Configuração

As configurações de dificuldade do jogador são controladas no arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no seu painel de controle do servidor, na seção **Configs**. Dentro do arquivo de configuração, localize os seguintes parâmetros:

````
;Quando ativado (true), o jogador que morrer perderá seu personagem e terá que criar um novo
PermaDeath=false

;0=Não perde nada, 1=Perde mochila e arma na mão, 2=Anterior + bolsos e mochila, 3=Todos os anteriores + Equipamentos
OnDeath=2

;Efeito de privação de sono false=Desativado true=Ativado
Sleep=true

;Velocidade de drenagem dos vitais 0=Lento, 1=Normal, 2=Rápido
VitalDrain=1

;Vida do cão companheiro 0=Baixa 1=Padrão 2=Alta
CompanionHealth=1

;Dano do cão companheiro 0=Baixo 1=Padrão 2=Alto
CompanionDmg=1

;Tempo em minutos para bandidos humanos reaparecerem, defina 0 para desativar o reaparecimento.
HumanRespawnTimer=90

;Dificuldade dos bandidos humanos onde 0=Muito Fácil, 1=Fácil, 2=Padrão, 3=Difícil, 4=Muito Difícil, 5=Pesadelo
HumanHealth=2

;Velocidade dos bandidos humanos onde 0=Muito Fácil, 1=Fácil, 2=Padrão, 3=Difícil, 4=Muito Difícil, 5=Pesadelo
HumanSpeed=2

;Dano dos bandidos humanos onde 0=Muito Fácil, 1=Fácil, 2=Padrão, 3=Difícil, 4=Muito Difícil, 5=Pesadelo
HumanDamage=2
````

Aqui está o que cada configuração controla:

- `PermaDeath` – Quando ativado (`true`), o jogador perde permanentemente seu personagem ao morrer e precisa criar um novo  
- `OnDeath` – Define quanto do inventário é perdido quando o jogador morre  
- `Sleep` – Ativa ou desativa os efeitos de privação de sono  
- `VitalDrain` – Controla a velocidade com que fome, sede e outros vitais diminuem  
- `CompanionHealth` – Define o nível de vida do cão companheiro  
- `CompanionDmg` – Define o nível de dano do cão companheiro  
- `HumanRespawnTimer` – Determina quanto tempo leva para os bandidos humanos reaparecerem (0 desativa o reaparecimento)  
- `HumanHealth` – Ajusta a dificuldade da vida dos bandidos  
- `HumanSpeed` – Ajusta a dificuldade da velocidade dos bandidos  
- `HumanDamage` – Ajusta a dificuldade do dano dos bandidos  

Modifique os valores conforme o nível de dificuldade que você deseja. Depois de editar o arquivo, salve as alterações e reinicie o servidor para que as novas configurações entrem em vigor.



## Exemplos de Presets de Dificuldade

### Configuração Fácil de Sobrevivência

Essa configuração cria uma experiência mais tranquila, com drenagem lenta dos vitais, inimigos mais fracos e sem morte permanente.

```
PermaDeath=false
OnDeath=1
Sleep=false
VitalDrain=0
CompanionHealth=2
CompanionDmg=2
HumanRespawnTimer=180
HumanHealth=1
HumanSpeed=1
HumanDamage=1
```



### Configuração Difícil de Sobrevivência

Essa configuração aumenta a pressão da sobrevivência com morte permanente, drenagem rápida dos vitais e bandidos mais fortes.

```
PermaDeath=true
OnDeath=3
Sleep=true
VitalDrain=2
CompanionHealth=0
CompanionDmg=0
HumanRespawnTimer=60
HumanHealth=4
HumanSpeed=4
HumanDamage=4
```



## Conclusão

Parabéns! Ajustando os valores relacionados à dificuldade no `GameServerSettings.ini`, você personalizou com sucesso as configurações de dificuldade do jogador no seu servidor HumanitZ. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />