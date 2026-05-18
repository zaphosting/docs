---
id: humanitz-change-weather
title: "HumanitZ: Mudar o Clima"
description: "Aprenda como editar e personalizar a frequência e os tipos de clima no seu servidor HumanitZ → Saiba mais agora"
sidebar_label: "Mudar o Clima"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

Os padrões climáticos influenciam a jogabilidade de sobrevivência, a visibilidade e a atmosfera do mundo em HumanitZ. Seja para um ambiente mais tranquilo com céus geralmente limpos ou um mundo mais severo com tempestades e nevascas frequentes, ajustar as configurações de clima permite que você controle com que frequência diferentes tipos de clima acontecem.

<InlineVoucher />

## Configuração

As configurações de clima são controladas no arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no painel de controle do seu servidor em **Configs**. Dentro do arquivo de configuração, localize os seguintes parâmetros:

```
;Abaixo você pode ajustar as chances de cada tipo de clima. A estação atual ainda determinará quais tipos de clima podem aparecer.
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=1
Weather_Thunderstorm=1
Weather_LightSnow=1
Weather_Snow=1
Weather_Blizzard=1
```

Cada configuração representa as **chances relativas** do tipo de clima correspondente ocorrer. Valores mais altos aumentam a probabilidade daquele tipo de clima ser escolhido durante a geração do clima, enquanto valores mais baixos diminuem essa chance.

Por exemplo:

- Definir `Weather_ClearSky=3` aumenta a chance de céu limpo em comparação com outros tipos de clima  
- Reduzir `Weather_Blizzard=0` desativa efetivamente o surgimento de nevascas (a menos que a lógica da estação force isso)



### Clima Tranquilo

Este exemplo prioriza clima calmo e reduz condições severas:

```
Weather_ClearSky=3
Weather_Cloudy=2
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=0
Weather_Thunderstorm=0
Weather_LightSnow=1
Weather_Snow=0
Weather_Blizzard=0
```



### Clima Severo

Este exemplo aumenta as chances de clima severo e dinâmico:
```
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=2
Weather_LightRain=2
Weather_Rain=3
Weather_Thunderstorm=2
Weather_LightSnow=1
Weather_Snow=2
Weather_Blizzard=2
```

Após editar o arquivo, salve as alterações e reinicie o servidor para que as novas configurações de clima entrem em vigor.



## Conclusão

Parabéns! Ajustando os valores de frequência do clima no `GameServerSettings.ini`, você personalizou com sucesso como o clima se comporta no seu servidor HumanitZ. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />