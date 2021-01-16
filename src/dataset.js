const defaultDataset = {
  "init": {
      answers: [
          {content: "大高の開発技術について知りたい", nextId: "skill"},
          {content: "大高のプライベートについて知りたい", nextId: "private"},
          {content: "大高とお付き合い前提で話したい", nextId: "dating"},
      ],
      question: "こんにちは！ご用件はなんでしょうか？",
  },
  "skill": {
      answers: [
          {content: "GitHubで技術力を詳しく見る", nextId: "https://github.com/minisera"},
          {content: "Qiitaでアウトプットを見る", nextId: "https://qiita.com/minisera"},
          {content: "Twitterで日常を見る", nextId: "https://twitter.com/minimum_pg"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "開発技術はサーバーエンドはRuby、Ruby on Rails、フロントエンドはJavaScript、React、インフラはAWSを使用します。大高について詳しく知りたい方は、下記から選択して下さい。",
  },
  "private": {
      answers: [
          {content: "好きな食べ物は？", nextId: "food"},
          {content: "好きな言葉は？", nextId: "word"},
          {content: "趣味は？", nextId: "hobby"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "質問を選んで下さい。",
  },
  "food": {
      answers: [
          {content: "本人に話しかける", nextId: "https://twitter.com/minimum_pg"},
          {content: "他の質問をする", nextId: "private"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "好きな食べ物は、1位唐揚げ、2位イカそうめん、3位たこ焼き、です。ちなみに唐揚げは2位と100票ほど差を付けています。",
  },
  "word": {
      answers: [
          {content: "本人に話しかける", nextId: "https://twitter.com/minimum_pg"},
          {content: "他の質問をする", nextId: "private"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "好きな言葉は「足るを知る」。現状に感謝し、満足するがモットーです。",
  },
  "hobby": {
      answers: [
          {content: "本人に話しかける", nextId: "https://twitter.com/minimum_pg"},
          {content: "他の質問をする", nextId: "private"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "趣味は断舎離とキャンプです。断舎離は物が洗練されていく過程を楽しみます。",
  },
  "dating": {
      answers: [
          {content: "本気でDMする", nextId: "https://twitter.com/minimum_pg"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "是非！！！DMお待ちしてます！！！！！！！",
  },
}

export default defaultDataset