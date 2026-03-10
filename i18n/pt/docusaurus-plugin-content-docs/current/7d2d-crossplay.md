---
id: 7d2d-crossplay
title: "7 Days to Die: Ative o Crossplay para Jogadores de Console e PC"
description: "Aprenda como configurar seu servidor de jogos 7 Days to Die para suportar crossplay entre jogadores de PC e console → Saiba mais agora"
sidebar_label: Ativar Crossplay
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Nas versões mais recentes de **7 Days to Die**, o crossplay permite que jogadores de **PC e plataformas de console suportadas** entrem no mesmo servidor. Isso possibilita que comunidades joguem juntas, independente da plataforma que estão usando.

Para que o crossplay funcione, algumas configurações precisam ser feitas no servidor. Essas configurações garantem que o servidor seja compatível com conexões de console e esteja corretamente registrado através do Epic Online Services.

<InlineVoucher />



## Configuração

A configuração do crossplay está no arquivo `serverconfig-zap.xml`. Para editar esse arquivo, abra a **administração do seu servidor de jogos** e vá até **Configs**. Localize e abra o arquivo de configuração `serverconfig-zap.xml`.

Dentro do arquivo, certifique-se de que os seguintes valores estejam configurados corretamente:

```
<property name="ServerMaxPlayerCount" value="8"/> 
<property name="ServerAllowCrossplay" value="true"/> 
<property name="EACEnabled" value="true"/> 
<property name="IgnoreEOSSanctions" value="false"/> 
```

Esses parâmetros são obrigatórios para a compatibilidade com crossplay. O `ServerMaxPlayerCount` não pode ultrapassar **8 jogadores**, pois o crossplay no console suporta no máximo oito participantes atualmente. A opção `ServerAllowCrossplay` deve estar ativada para permitir que jogadores de console entrem no servidor.

Além disso, o `EACEnabled` precisa estar ativado, pois o crossplay depende do **Epic Online Services e Easy Anti-Cheat** para autenticação e matchmaking. O valor `IgnoreEOSSanctions` deve permanecer como `false` para que as restrições do EOS sejam aplicadas corretamente nas sessões multiplataforma.

Após modificar os valores da configuração, salve o arquivo e **reinicie seu servidor** para que as novas configurações entrem em vigor.



## Notas importantes

O suporte ao crossplay exige que todos os jogadores estejam usando uma versão compatível do jogo. Servidores que utilizam modificações não suportadas ou configurações muito personalizadas podem impedir que jogadores de console se conectem. Se os jogadores de console não conseguirem encontrar ou entrar no servidor, verifique se as configurações de crossplay estão corretas e se o servidor está rodando a versão mais recente suportada.



## Conclusão

Parabéns! Você configurou com sucesso seu **servidor de jogos 7 Days to Die para crossplay**, permitindo que jogadores de PC e console joguem juntos no mesmo mundo. Com as configurações corretas no servidor, sua comunidade pode se divertir junta, independente da plataforma.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />