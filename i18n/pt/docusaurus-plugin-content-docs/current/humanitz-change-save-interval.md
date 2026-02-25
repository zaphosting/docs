---
id: humanitz-change-save-interval
title: "HumanitZ: Alterar Intervalo de Salvamento"
description: "Aprenda como ajustar o intervalo de salvamento automático do mundo no seu servidor HumanitZ → Saiba mais agora"
sidebar_label: "Alterar Intervalo de Salvamento"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

O intervalo de salvamento determina com que frequência seu servidor HumanitZ salva automaticamente o estado do mundo. Salvamentos regulares ajudam a evitar perda de dados em caso de travamentos ou desligamentos inesperados, enquanto intervalos maiores podem reduzir um pouco a atividade do disco.

<InlineVoucher />

## Configuração

O intervalo de salvamento do mundo é controlado no arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no painel de controle do seu servidor, na seção **Configs**. Dentro do arquivo de configuração, localize o seguinte parâmetro:

```
;O intervalo em segundos no qual o servidor salva o mundo. Defina como 0 para desativar o salvamento automático.
SaveIntervalSec=300
```

- `SaveIntervalSec=300` – O servidor salva o mundo a cada 300 segundos (5 minutos).  
- `SaveIntervalSec=0` – Desativa o salvamento automático do mundo.  

O valor é definido em **segundos**. Por exemplo:

- `600` = 10 minutos
- `900` = 15 minutos

Se quiser aumentar o intervalo para 10 minutos:

```
SaveIntervalSec=600
```

Após editar o arquivo, salve as alterações e reinicie o servidor para que a nova configuração entre em vigor.

## Conclusão

Parabéns! Ao modificar o valor `SaveIntervalSec` no `GameServerSettings.ini`, você ajustou com sucesso o intervalo de salvamento automático do mundo no seu servidor HumanitZ.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />