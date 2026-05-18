---
id: humanitz-change-zombie-difficulty
title: "HumanitZ: Alterar Dificuldade dos Zumbis"
description: "Aprenda como ajustar as configurações de dificuldade dos zumbis e da IA no seu servidor HumanitZ → Saiba mais agora"
sidebar_label: "Alterar Dificuldade dos Zumbis"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

A dificuldade dos zumbis é fundamental para moldar a experiência de sobrevivência no HumanitZ. Desde a força e velocidade dos zumbis até multiplicadores de spawn e eventos de raid da IA, essas configurações determinam o quão perigoso o mundo se torna.

Todas as opções de dificuldade relacionadas a zumbis e IA são configuradas dentro do arquivo `GameServerSettings.ini` e permitem que você controle totalmente a intensidade dos encontros PvE no seu servidor.

<InlineVoucher />

## Configuração

As configurações de dificuldade dos zumbis são controladas no arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no painel de gerenciamento do seu servidor, na seção **Configs**. Dentro do arquivo de configuração, localize os seguintes parâmetros:

```
;Dificuldade da vida onde 0=Muito Fácil, 1=Fácil, 2=Padrão, 3=Difícil, 4=Muito Difícil, 5=Pesadelo
ZombieDiffHealth=1

;Dificuldade da velocidade onde 0=Muito Fácil, 1=Fácil, 2=Padrão, 3=Difícil, 4=Muito Difícil, 5=Pesadelo
ZombieDiffSpeed=2

;Dificuldade do dano onde 0=Muito Fácil, 1=Fácil, 2=Padrão, 3=Difícil, 4=Muito Difícil, 5=Pesadelo
ZombieDiffDamage=3

;Multiplicador da quantidade de zumbis, 2 por exemplo significa o dobro de zumbis. 0.5 significa metade dos zumbis.
ZombieAmountMulti=1

;Multiplicador da quantidade de bandidos humanos, 2 por exemplo significa o dobro de bandidos humanos. 0.5 significa metade dos bandidos humanos.
HumanAmountMulti=1

;Cães zumbis aparecem principalmente à noite. 2 por exemplo significa o dobro de cães zumbis. 0.5 significa metade dos cães zumbis.
ZombieDogMulti=1

;Tempo em minutos para os zumbis reaparecerem, defina 0 para desativar o respawn dos zumbis.
ZombieRespawnTimer=90

;O jogo às vezes gera eventos de IA como zumbis ou humanos invadindo sua localização. 0 = Desativado, 1 = Baixo, 2 = Padrão, 3 = Alto, 4 = Insano
AIEvent=2
```

Abaixo está a explicação do que cada configuração controla:

- `ZombieDiffHealth` – Controla a dificuldade da vida dos zumbis  
- `ZombieDiffSpeed` – Controla a velocidade de movimento dos zumbis  
- `ZombieDiffDamage` – Controla o dano causado pelos zumbis  
- `ZombieAmountMulti` – Multiplica o número total de zumbis que aparecem  
- `HumanAmountMulti` – Multiplica o número de bandidos humanos que aparecem  
- `ZombieDogMulti` – Multiplica o número de cães zumbis que aparecem  
- `ZombieRespawnTimer` – Define quanto tempo leva para os zumbis reaparecerem (0 desativa o respawn)  
- `AIEvent` – Controla a frequência dos eventos de raid da IA  

Após fazer as alterações, salve o arquivo e reinicie o servidor para que as novas configurações entrem em vigor.



## Exemplos de Presets de Dificuldade

### Configuração Fácil para Zumbis

Essa configuração cria uma experiência PvE mais tranquila, com menos inimigos e níveis de ameaça reduzidos.

```
ZombieDiffHealth=1
ZombieDiffSpeed=1
ZombieDiffDamage=1
ZombieAmountMulti=0.75
HumanAmountMulti=0.75
ZombieDogMulti=0.5
ZombieRespawnTimer=180
AIEvent=1
```



### Configuração Difícil para Zumbis

Essa configuração aumenta a força dos inimigos, as taxas de spawn e a frequência dos eventos para um mundo muito mais perigoso.

```
ZombieDiffHealth=4
ZombieDiffSpeed=4
ZombieDiffDamage=4
ZombieAmountMulti=1.5
HumanAmountMulti=1.5
ZombieDogMulti=2
ZombieRespawnTimer=60
AIEvent=3
```



## Conclusão

Parabéns! Ajustando os valores relacionados aos zumbis no `GameServerSettings.ini`, você personalizou com sucesso as configurações de dificuldade dos zumbis no seu servidor HumanitZ. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />