---
id: humanitz-change-day-night-length
title: "HumanitZ: Alterar a Duração do Dia/Noite"
description: "Descubra como ajustar a duração do dia e da noite no seu servidor HumanitZ → Saiba mais agora"
sidebar_label: "Alterar Duração do Dia/Noite"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

O ciclo de dia e noite em HumanitZ afeta diretamente a jogabilidade, visibilidade, dificuldade de sobrevivência e o ritmo geral do jogo. Dias mais curtos podem criar uma experiência de sobrevivência mais intensa, enquanto períodos mais longos de luz do dia dão aos jogadores mais tempo para explorar, construir e coletar recursos.

<InlineVoucher />

## Configuração

A duração do dia e da noite é controlada no arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no painel de controle do seu servidor, na seção **Configs**. Dentro do arquivo de configuração, localize os seguintes parâmetros:

```
;Duração do dia em minutos
DayDur=40
;Duração da noite em minutos
NightDur=20
```

Os valores são definidos em minutos:

- `DayDur` – Controla quanto tempo dura o dia  
- `NightDur` – Controla quanto tempo dura a noite  

Para alterar o comprimento do ciclo, basta ajustar os números para a duração desejada. Exemplo para dias mais longos e noites mais curtas:

```
DayDur=60
NightDur=15
```

Após editar o arquivo, salve as alterações e reinicie o servidor para que as novas configurações entrem em vigor.

## Conclusão

Parabéns! Modificando os valores `DayDur` e `NightDur` no `GameServerSettings.ini`, você ajustou com sucesso o ciclo de dia e noite no seu servidor HumanitZ. Para dúvidas ou ajuda, não hesite em contatar nossa equipe de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />