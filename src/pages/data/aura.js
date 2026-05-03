export function getResult(color) {

  const patterns = {
    black: {
      title: "防御型",

      stab: [
        "あなたは逃げています",
        "本音を隠しすぎています",
        "人を信用することをやめています"
      ],

      lines: [
        "自分を守る意識が強いです",
        "無意識に距離を取っています",
        "エネルギーを閉じています"
      ],

      spiritual: [
        "外界を遮断するエネルギーが強いです",
        "内側に意識が向いています",
        "変化を拒んでいる状態です"
      ]
    },

    red: {
      title: "衝動型",

      stab: [
        "感情に支配されています",
        "勢いで判断しています",
        "周りを振り回しています"
      ],

      lines: [
        "行動力が高まっています",
        "決断が早い状態です",
        "エネルギーが外に向いています"
      ],

      spiritual: [
        "強い火のエネルギーです",
        "破壊と創造の状態です",
        "衝動が運命を動かしています"
      ]
    },

    blue: {
      title: "思考型",
      stab: ["考えすぎています", "感情を抑えています"],
      lines: ["冷静な状態です", "判断力が高いです"],
      spiritual: ["知性のエネルギーです", "内観が強い状態です"]
    },

    yellow: {
      title: "社交型",
      stab: ["人に依存しています", "外に影響されやすいです"],
      lines: ["明るい状態です", "交流が活発です"],
      spiritual: ["光のエネルギーです", "拡散しています"]
    },

    purple: {
      title: "感受型",
      stab: ["敏感すぎます", "影響を受けすぎています"],
      lines: ["繊細な状態です", "直感が強いです"],
      spiritual: ["霊的な感覚が高いです", "内面が開いています"]
    },

    green: {
      title: "安定型",
      stab: ["変化を避けています", "守りに入りすぎです"],
      lines: ["バランスが良いです", "安定しています"],
      spiritual: ["調和のエネルギーです", "中立の状態です"]
    },

    white: {
      title: "無感覚型",
      stab: ["感情を失っています", "何も感じていません"],
      lines: ["無の状態です", "リセットされています"],
      spiritual: ["純粋な状態です", "始まりのエネルギーです"]
    }
  };

  const base = patterns[color] || patterns.white;

  const pick = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  return {
    title: base.title,
    lines: [
      pick(base.stab),
      pick(base.lines),
      pick(base.spiritual)
    ]
  };
}