---
id: humanitz-change-death-penalty
title: "HumanitZ: Alterar Penalidade de Morte"
description: "Descubra como ajustar as configurações da penalidade de morte no seu servidor HumanitZ → Saiba mais agora"
sidebar_label: Alterar Penalidade de Morte
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';



## Introdução

A penalidade de morte no HumanitZ determina o que um jogador perde após morrer. Dependendo do estilo de jogo do seu servidor, você pode preferir uma experiência de sobrevivência mais tranquila ou um sistema mais rigoroso que aumenta a tensão e o risco. 

<InlineVoucher />



## Configuração

A penalidade de morte é controlada no arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no painel de controle do seu servidor, na seção **Configs**. Dentro do arquivo de configuração, localize o seguinte parâmetro:

```
;0=Não perde nada, 1=Perde mochila e arma na mão, 2=Anterior + bolsos e mochila, 3=Todos os anteriores + Equipamento
OnDeath=2
```

O valor após `OnDeath=` determina quanto do inventário do jogador será perdido ao morrer:

- `0` – Jogadores não perdem nada  
- `1` – Jogadores perdem a mochila e a arma que estiverem segurando  
- `2` – Perdas anteriores + conteúdo dos bolsos e da mochila  
- `3` – Todos os anteriores + equipamentos equipados  

Para ajustar a penalidade, basta alterar o número para a configuração desejada. Após editar o arquivo, salve as alterações e reinicie o servidor para que a nova configuração entre em vigor.



## Conclusão

Parabéns! Modificando o valor `OnDeath` no `GameServerSettings.ini`, você configurou com sucesso a penalidade de morte no seu servidor HumanitZ. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂



<InlineVoucher />