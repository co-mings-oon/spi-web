const WORDS = [
  {
    "term": "杞憂",
    "meaning": "必要以上に心配すること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "「まだ起きていないことを過度に案じる」場面で使う。"
  },
  {
    "term": "示唆",
    "meaning": "それとなく知らせること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "直接言わず、ほのめかすニュアンス。"
  },
  {
    "term": "逡巡",
    "meaning": "決断できずためらうこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "選択を前にして迷う状態。"
  },
  {
    "term": "傾注",
    "meaning": "一つのことに力や注意を集中すること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "努力・関心・精力などを注ぐときに使う。"
  },
  {
    "term": "看過",
    "meaning": "見逃してそのままにすること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "問題点を放置する文脈でよく出る。"
  },
  {
    "term": "折衷",
    "meaning": "複数の考えのよい部分を取り合わせること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "対立案の中間を取るだけでなく、長所を合わせる意味。"
  },
  {
    "term": "矜持",
    "meaning": "自分の能力や立場への誇り",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "プライドに近いが、品位を保つ含みがある。"
  },
  {
    "term": "迎合",
    "meaning": "相手に気に入られるよう調子を合わせること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "やや否定的に使われることが多い。"
  },
  {
    "term": "敷衍",
    "meaning": "意味や内容を詳しく説明すること",
    "category": "語句の意味",
    "difficulty": "難",
    "note": "要点を広げてわかりやすく述べること。"
  },
  {
    "term": "寡黙",
    "meaning": "口数が少ないこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "無口・多弁の対義関係で出やすい。"
  },
  {
    "term": "冗長",
    "meaning": "無駄が多く長たらしいこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "文章や説明の評価で使う。"
  },
  {
    "term": "普遍",
    "meaning": "広くすべてに当てはまること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "特殊・個別との対比で覚える。"
  },
  {
    "term": "懐柔",
    "meaning": "うまく扱って味方に引き入れること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "対立者をなだめて従わせる文脈。"
  },
  {
    "term": "漸進",
    "meaning": "少しずつ進むこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "急進の対義語として覚える。"
  },
  {
    "term": "刹那",
    "meaning": "ごく短い時間",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "瞬間に近い意味。"
  },
  {
    "term": "推敲",
    "meaning": "文章を何度も練り直すこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "書いた文章をよりよく直す作業。"
  },
  {
    "term": "顕著",
    "meaning": "はっきり目立っていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "変化・傾向・特徴が明らかなときに使う。"
  },
  {
    "term": "稚拙",
    "meaning": "未熟でたどたどしいこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "技能や表現の未熟さを表す。"
  },
  {
    "term": "詭弁",
    "meaning": "もっともらしく見える誤った議論",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "論理をごまかす説明。"
  },
  {
    "term": "脆弱",
    "meaning": "もろく弱いこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "制度・体制・仕組みの弱さにも使う。"
  },
  {
    "term": "遵守",
    "meaning": "決まりや法律を守ること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "規則・法令・約束などと結びつく。"
  },
  {
    "term": "弁明",
    "meaning": "事情を説明して自分の立場を明らかにすること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "非難に対して理由を述べる場面が多い。"
  },
  {
    "term": "委細",
    "meaning": "細かく詳しいこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "「委細承知」などで見かける。"
  },
  {
    "term": "拙速",
    "meaning": "できは悪いが仕上がりが早いこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "巧遅との対比で出る。"
  },
  {
    "term": "恣意",
    "meaning": "自分勝手な考えや思いつき",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "客観性や一貫性がない判断を表す。"
  },
  {
    "term": "陶冶",
    "meaning": "人の性質や能力を育て上げること",
    "category": "語句の意味",
    "difficulty": "難",
    "note": "教育や人格形成の文脈で使われる。"
  },
  {
    "term": "涵養",
    "meaning": "少しずつ養い育てること",
    "category": "語句の意味",
    "difficulty": "難",
    "note": "能力・態度・品性などを時間をかけて育てる意味。"
  },
  {
    "term": "趨勢",
    "meaning": "物事が向かっていく全体的な流れ",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "社会や市場の傾向を述べるときに使う。"
  },
  {
    "term": "暫定",
    "meaning": "正式に決まるまで一時的に定めること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "仮の決定という含みがある。"
  },
  {
    "term": "便宜",
    "meaning": "都合がよいことや特別なはからい",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "「便宜を図る」は都合よく取り計らう意味。"
  },
  {
    "term": "遺憾",
    "meaning": "期待どおりでなく残念に思うこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "公式な謝意や不満の表現で使われやすい。"
  },
  {
    "term": "顛末",
    "meaning": "物事の始めから終わりまでの経過",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "事件や出来事の一部始終を指す。"
  },
  {
    "term": "端緒",
    "meaning": "物事が始まるきっかけ",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "発見や解決の糸口という意味でも使う。"
  },
  {
    "term": "忌避",
    "meaning": "嫌って避けること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "責任や危険を避ける文脈で出やすい。"
  },
  {
    "term": "払拭",
    "meaning": "すっかり取り除くこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "不安・疑念・悪印象などを消すときに使う。"
  },
  {
    "term": "斟酌",
    "meaning": "相手の事情や気持ちをくみ取ること",
    "category": "語句の意味",
    "difficulty": "難",
    "note": "事情を考慮して判断する意味。"
  },
  {
    "term": "毀損",
    "meaning": "物や名誉を傷つけ損なうこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "信用・名誉・財産などと結びつきやすい。"
  },
  {
    "term": "齟齬",
    "meaning": "食い違って合わないこと",
    "category": "語句の意味",
    "difficulty": "難",
    "note": "意見・認識・説明のずれを表す。"
  },
  {
    "term": "瑣末",
    "meaning": "重要でない細かなこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "本質から外れた細部というニュアンス。"
  },
  {
    "term": "煩雑",
    "meaning": "込み入っていて面倒なこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "手続きや作業が複雑な場合に使う。"
  },
  {
    "term": "簡潔",
    "meaning": "短くまとまっていてわかりやすいこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "冗長の対義語として覚えやすい。"
  },
  {
    "term": "緻密",
    "meaning": "細部まで行き届いていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "計画・分析・構成などに使う。"
  },
  {
    "term": "粗雑",
    "meaning": "大ざっぱでいい加減なこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "緻密の対義語として出やすい。"
  },
  {
    "term": "柔軟",
    "meaning": "状況に応じて考えや対応を変えられること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "硬直の対義関係で覚える。"
  },
  {
    "term": "硬直",
    "meaning": "考えや対応が固定して変化に乏しいこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "組織や制度の融通のきかなさにも使う。"
  },
  {
    "term": "客観",
    "meaning": "個人の考えに偏らず事実に基づくこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "主観との対比で頻出。"
  },
  {
    "term": "主観",
    "meaning": "自分自身の見方や考えに基づくこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "客観の対義語。"
  },
  {
    "term": "抽象",
    "meaning": "共通する性質を取り出して考えること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "具体との対比で問われやすい。"
  },
  {
    "term": "具体",
    "meaning": "はっきりした形や内容を備えていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "抽象の対義語。"
  },
  {
    "term": "相対",
    "meaning": "他との関係や比較によって決まること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "絶対との対比で押さえる。"
  },
  {
    "term": "絶対",
    "meaning": "他との比較に左右されないこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "条件や関係に依存しない意味。"
  },
  {
    "term": "均衡",
    "meaning": "力や数量などの釣り合いが取れていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "バランスという意味で使われる。"
  },
  {
    "term": "乖離",
    "meaning": "本来近いものが離れていること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "理想と現実、認識と実態などのずれ。"
  },
  {
    "term": "模倣",
    "meaning": "他のものをまねること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "創造との対比で覚える。"
  },
  {
    "term": "創造",
    "meaning": "新しいものをつくり出すこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "模倣の対義語として出やすい。"
  },
  {
    "term": "促進",
    "meaning": "物事が早く進むように働きかけること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "成長・普及・理解などと結びつく。"
  },
  {
    "term": "抑制",
    "meaning": "勢いや働きをおさえること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "促進の対義語として覚えやすい。"
  },
  {
    "term": "包括",
    "meaning": "全体をひとまとめに含むこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "広く包み込む意味。"
  },
  {
    "term": "排斥",
    "meaning": "受け入れず押しのけること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "異なる意見や勢力を退ける文脈。"
  },
  {
    "term": "希薄",
    "meaning": "濃さや関係が薄いこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "関心・意識・人間関係などにも使う。"
  },
  {
    "term": "濃密",
    "meaning": "内容や関係が濃く深いこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "希薄の対義語として押さえる。"
  },
  {
    "term": "介入",
    "meaning": "物事の間に入り込んで関わること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "第三者が関与する場面で使う。"
  },
  {
    "term": "静観",
    "meaning": "成り行きを何もせず見守ること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "介入せず様子を見る意味。"
  },
  {
    "term": "黙認",
    "meaning": "知っていながら見逃すこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "明確に認めないが止めもしない状態。"
  },
  {
    "term": "容認",
    "meaning": "よいとして受け入れること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "黙認より明確に受け入れる意味。"
  },
  {
    "term": "克明",
    "meaning": "細かい点まではっきりしていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "記録や描写が詳しい場合に使う。"
  },
  {
    "term": "曖昧",
    "meaning": "はっきりせず不明確なこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "克明・明確との対比で覚える。"
  },
  {
    "term": "堅実",
    "meaning": "確かで危なげがないこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "行動や方法が手堅い意味。"
  },
  {
    "term": "軽率",
    "meaning": "よく考えずに行動すること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "慎重の対義語。"
  },
  {
    "term": "慎重",
    "meaning": "注意深くよく考えて行動すること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "軽率との対比で頻出。"
  },
  {
    "term": "偏重",
    "meaning": "一方だけを重んじること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "バランスを欠く評価や方針に使う。"
  },
  {
    "term": "是正",
    "meaning": "悪い点を直して正しくすること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "格差・誤り・不備などを直す文脈。"
  },
  {
    "term": "是認",
    "meaning": "正しいとして認めること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "是正と混同しやすいので注意。"
  },
  {
    "term": "黙殺",
    "meaning": "無視して取り合わないこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "発言や要求を相手にしない意味。"
  },
  {
    "term": "該当",
    "meaning": "条件や項目に当てはまること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "対象に含まれるかを問う文脈で使う。"
  },
  {
    "term": "該博",
    "meaning": "知識が広く深いこと",
    "category": "語句の意味",
    "difficulty": "難",
    "note": "博識に近い意味。"
  },
  {
    "term": "精通",
    "meaning": "ある分野について詳しく知っていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "専門知識に詳しい状態。"
  },
  {
    "term": "疎遠",
    "meaning": "関係が薄く遠ざかっていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "親密の対義語として覚える。"
  },
  {
    "term": "親密",
    "meaning": "関係が近く深いこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "疎遠との対比で出やすい。"
  },
  {
    "term": "収束",
    "meaning": "混乱やばらつきがまとまって落ち着くこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "事態・議論・数値などに使う。"
  },
  {
    "term": "拡散",
    "meaning": "広がって散らばること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "収束の対義語として覚える。"
  },
  {
    "term": "緩和",
    "meaning": "厳しさや程度をやわらげること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "規制・痛み・対立などに使う。"
  },
  {
    "term": "強硬",
    "meaning": "自分の主張を強く押し通すこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "譲歩しない姿勢。"
  },
  {
    "term": "譲歩",
    "meaning": "自分の主張を一部引き下げること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "交渉や対立の文脈で出る。"
  },
  {
    "term": "妥協",
    "meaning": "互いに譲り合って解決すること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "譲歩を伴って合意する意味。"
  },
  {
    "term": "独断",
    "meaning": "自分だけの判断で決めること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "相談や根拠が乏しい判断に使う。"
  },
  {
    "term": "専断",
    "meaning": "自分だけの考えで勝手に決めること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "権限を持つ人が独りで決める否定的な語。"
  },
  {
    "term": "妄信",
    "meaning": "根拠なく深く信じ込むこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "批判的に考えず信じる意味。"
  },
  {
    "term": "懐疑",
    "meaning": "本当かどうか疑うこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "妄信の対義関係で覚える。"
  },
  {
    "term": "楽観",
    "meaning": "物事をよい方向に考えること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "悲観との対比で頻出。"
  },
  {
    "term": "悲観",
    "meaning": "物事を悪い方向に考えること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "楽観の対義語。"
  },
  {
    "term": "過大",
    "meaning": "実際より大きすぎること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "評価・期待・負担などに使う。"
  },
  {
    "term": "過小",
    "meaning": "実際より小さすぎること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "過大の対義語。"
  },
  {
    "term": "喚起",
    "meaning": "注意や記憶などを呼び起こすこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "注意喚起という形でよく使う。"
  },
  {
    "term": "示威",
    "meaning": "威力や勢いを示すこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "デモや行動で力を見せる意味。"
  },
  {
    "term": "鼓舞",
    "meaning": "励まして気持ちを奮い立たせること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "士気を高める文脈で使う。"
  },
  {
    "term": "萎縮",
    "meaning": "勢いや元気がなく小さくなること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "心理的に縮こまる意味でも使う。"
  },
  {
    "term": "尽力",
    "meaning": "力を尽くして努力すること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "協力や支援への感謝表現にも出る。"
  },
  {
    "term": "怠慢",
    "meaning": "やるべきことを怠ること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "仕事や義務をおろそかにする意味。"
  },
  {
    "term": "精励",
    "meaning": "仕事や勉学に一生懸命励むこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "努力を続ける姿勢を表す。"
  },
  {
    "term": "傲慢",
    "meaning": "思い上がって人を見下すこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "謙虚の対義語として覚える。"
  },
  {
    "term": "謙虚",
    "meaning": "控えめで素直に学ぶ姿勢があること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "傲慢との対比で出やすい。"
  },
  {
    "term": "寛容",
    "meaning": "心が広く他者を受け入れること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "異なる考えを許す姿勢。"
  },
  {
    "term": "狭量",
    "meaning": "心が狭く他者を受け入れにくいこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "寛容の対義語。"
  },
  {
    "term": "廉潔",
    "meaning": "私欲がなく行いが清らかなこと",
    "category": "語句の意味",
    "difficulty": "難",
    "note": "公正で不正をしない人物評価に使う。"
  },
  {
    "term": "潔白",
    "meaning": "悪いことをしていないこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "疑いが晴れる文脈で使う。"
  },
  {
    "term": "権威",
    "meaning": "人を従わせる力や信頼される力",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "専門家や制度の影響力にも使う。"
  },
  {
    "term": "威信",
    "meaning": "人から認められる名誉や信用",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "組織や国の面目を表すこともある。"
  },
  {
    "term": "名声",
    "meaning": "世間に広く知られたよい評判",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "評判の広がりに注目する語。"
  },
  {
    "term": "風評",
    "meaning": "世間で言われている評判",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "事実か不確かなうわさにも使う。"
  },
  {
    "term": "通念",
    "meaning": "世間で一般に受け入れられている考え",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "社会通念という形でよく使う。"
  },
  {
    "term": "先入観",
    "meaning": "前もって持っている固定的な見方",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "判断を偏らせる見方。"
  },
  {
    "term": "偏見",
    "meaning": "偏った見方や不公平な判断",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "先入観と近いが、より不公平さが強い。"
  },
  {
    "term": "洞察",
    "meaning": "物事の本質を見抜くこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "表面的でなく深く理解する意味。"
  },
  {
    "term": "考察",
    "meaning": "物事をよく考えて明らかにすること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "理由や背景を筋道立てて考える。"
  },
  {
    "term": "推察",
    "meaning": "事情や手がかりから推し量ること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "直接見えないことを推測する意味。"
  },
  {
    "term": "把握",
    "meaning": "内容や状況をしっかり理解すること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "状況把握・要点把握などで使う。"
  },
  {
    "term": "掌握",
    "meaning": "自分のものとして支配し動かせる状態にすること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "権力や組織を握る文脈で使う。"
  },
  {
    "term": "網羅",
    "meaning": "関係するものを残さず取り入れること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "一覧や調査の完全性を表す。"
  },
  {
    "term": "列挙",
    "meaning": "一つ一つ並べ上げること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "項目を順に挙げる意味。"
  },
  {
    "term": "羅列",
    "meaning": "順序やまとまりなく並べること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "列挙より整理不足のニュアンスがある。"
  },
  {
    "term": "補填",
    "meaning": "不足や損失を補うこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "費用・欠員・損失などに使う。"
  },
  {
    "term": "充足",
    "meaning": "必要なものが十分に満たされること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "条件や欲求が満たされる意味。"
  },
  {
    "term": "欠如",
    "meaning": "必要なものが欠けていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "能力・配慮・根拠などに使う。"
  },
  {
    "term": "潤沢",
    "meaning": "十分にあって不足がないこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "資金や資源が豊富な意味。"
  },
  {
    "term": "枯渇",
    "meaning": "使い尽くしてなくなること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "資源・才能・発想などにも使う。"
  },
  {
    "term": "蓄積",
    "meaning": "少しずつためて積み重ねること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "経験・知識・資本などに使う。"
  },
  {
    "term": "消耗",
    "meaning": "使って減ることや疲れて弱ること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "体力・資源・時間などに使う。"
  },
  {
    "term": "恒常",
    "meaning": "いつも一定で変わらないこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "一時的ではなく継続している意味。"
  },
  {
    "term": "暫時",
    "meaning": "しばらくの間",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "短時間の継続を表す。"
  },
  {
    "term": "逐次",
    "meaning": "順を追って次々に行うこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "段階的に進める意味。"
  },
  {
    "term": "随時",
    "meaning": "必要なときにいつでも行うこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "逐次と混同しないようにする。"
  },
  {
    "term": "一律",
    "meaning": "すべて同じように扱うこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "差をつけない扱い。"
  },
  {
    "term": "個別",
    "meaning": "一つ一つを別々に扱うこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "一律との対比で覚える。"
  },
  {
    "term": "画一",
    "meaning": "すべてを同じ型にそろえること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "多様性が乏しいニュアンスがある。"
  },
  {
    "term": "多様",
    "meaning": "さまざまな種類や形があること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "画一の対義語として押さえる。"
  },
  {
    "term": "顕在",
    "meaning": "はっきり表に現れていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "潜在との対比で頻出。"
  },
  {
    "term": "潜在",
    "meaning": "表には現れていないが内側に存在すること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "隠れている可能性や問題を表す。"
  },
  {
    "term": "露呈",
    "meaning": "隠れていたものが表に現れること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "欠点や問題点が明らかになる文脈。"
  },
  {
    "term": "隠蔽",
    "meaning": "都合の悪いことを隠すこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "事実や証拠を隠す意味。"
  },
  {
    "term": "公然",
    "meaning": "人目をはばからず明らかに行うこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "秘密でなく堂々としている状態。"
  },
  {
    "term": "暗黙",
    "meaning": "言葉に出さず了解されていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "暗黙の了解という形でよく使う。"
  },
  {
    "term": "端的",
    "meaning": "要点がはっきりしていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "簡潔に核心を示す意味。"
  },
  {
    "term": "婉曲",
    "meaning": "遠回しにやわらかく表現すること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "直接的な表現を避ける意味。"
  },
  {
    "term": "辛辣",
    "meaning": "言い方や批評が非常に厳しいこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "鋭く手厳しい表現。"
  },
  {
    "term": "温厚",
    "meaning": "穏やかで人柄がやさしいこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "人の性格を表す語。"
  },
  {
    "term": "険悪",
    "meaning": "雰囲気や関係が悪く緊張していること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "関係や空気が悪い状態。"
  },
  {
    "term": "円滑",
    "meaning": "物事が滞りなく進むこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "交渉・運営・連携などに使う。"
  },
  {
    "term": "停滞",
    "meaning": "物事が進まず止まっていること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "円滑や進展との対比で覚える。"
  },
  {
    "term": "進展",
    "meaning": "物事が進んで新しい段階に入ること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "議論・交渉・研究などに使う。"
  },
  {
    "term": "保守",
    "meaning": "従来の制度や考え方を守ろうとすること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "革新との対比で問われやすい。"
  },
  {
    "term": "革新",
    "meaning": "古いものを改めて新しくすること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "保守の対義語。"
  },
  {
    "term": "逸脱",
    "meaning": "本来の範囲や基準から外れること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "規範・基準・目的から外れる意味。"
  },
  {
    "term": "半可通",
    "reading": "はんかつう",
    "meaning": "十分に知らないのに、よく知っているようにふるまうこと",
    "category": "語句の意味",
    "difficulty": "難",
    "note": "未熟な知識で通人ぶる人を指す。画像例の説明に合う語。"
  },
  {
    "term": "得意顔",
    "reading": "とくいがお",
    "meaning": "誇らしげで満足そうな顔つき",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "成功や優位を感じている表情を表す。"
  },
  {
    "term": "物知り顔",
    "reading": "ものしりがお",
    "meaning": "物事をよく知っているような顔つき",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "実際に詳しいかどうかより、そう見せる態度に注目する語。"
  },
  {
    "term": "したり顔",
    "reading": "したりがお",
    "meaning": "うまくやったと得意になっている顔つき",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "得意げな表情を表す。"
  },
  {
    "term": "知ったかぶり",
    "reading": "しったかぶり",
    "meaning": "知らないことを知っているように見せること",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "半可通と近いが、日常的な表現。"
  },
  {
    "term": "お茶を濁す",
    "reading": "おちゃをにごす",
    "meaning": "その場しのぎでごまかすこと",
    "category": "慣用句",
    "difficulty": "標準",
    "note": "本質に触れず、曖昧に済ませる場面で使う。"
  },
  {
    "term": "水を差す",
    "reading": "みずをさす",
    "meaning": "順調な物事やよい雰囲気を邪魔すること",
    "category": "慣用句",
    "difficulty": "標準",
    "note": "盛り上がりや進行を妨げる意味。"
  },
  {
    "term": "肩を持つ",
    "reading": "かたをもつ",
    "meaning": "一方の味方をすること",
    "category": "慣用句",
    "difficulty": "標準",
    "note": "公平でなく片方を支援する文脈で使う。"
  },
  {
    "term": "気が置けない",
    "reading": "きがおけない",
    "meaning": "遠慮せず親しく付き合えること",
    "category": "慣用句",
    "difficulty": "やや難",
    "note": "「気を許せない」ではなく、親密で気楽という意味。"
  },
  {
    "term": "鼻につく",
    "reading": "はなにつく",
    "meaning": "言動が嫌味に感じられて不快であること",
    "category": "慣用句",
    "difficulty": "標準",
    "note": "自慢やわざとらしさに対して使う。"
  },
  {
    "term": "身に余る",
    "reading": "みにあまる",
    "meaning": "自分には過分でありがたいこと",
    "category": "慣用句",
    "difficulty": "標準",
    "note": "評価や待遇への謙遜表現として使われる。"
  },
  {
    "term": "目を見張る",
    "reading": "めをみはる",
    "meaning": "驚くほどすばらしいこと",
    "category": "慣用句",
    "difficulty": "標準",
    "note": "成長や成果が著しい場合に使う。"
  },
  {
    "term": "手をこまねく",
    "reading": "てをこまねく",
    "meaning": "何もできずに見ていること",
    "category": "慣用句",
    "difficulty": "やや難",
    "note": "対策を取れず傍観する意味。"
  },
  {
    "term": "取り付く島がない",
    "reading": "とりつくしまがない",
    "meaning": "相手が冷淡で話を進めるきっかけがないこと",
    "category": "慣用句",
    "difficulty": "やや難",
    "note": "相談や交渉を受け入れてもらえない状態。"
  },
  {
    "term": "折り紙付き",
    "reading": "おりがみつき",
    "meaning": "確かな評価や保証があること",
    "category": "慣用句",
    "difficulty": "標準",
    "note": "品質や実力が認められている意味。"
  },
  {
    "term": "筋が通る",
    "reading": "すじがとおる",
    "meaning": "考えや説明に一貫性があること",
    "category": "慣用句",
    "difficulty": "標準",
    "note": "論理が矛盾していない場合に使う。"
  },
  {
    "term": "歯に衣着せぬ",
    "reading": "はにきぬきせぬ",
    "meaning": "遠慮せず率直に言うこと",
    "category": "慣用句",
    "difficulty": "やや難",
    "note": "言いにくいこともはっきり述べる意味。"
  },
  {
    "term": "青天の霹靂",
    "reading": "せいてんのへきれき",
    "meaning": "突然起こる思いがけない出来事",
    "category": "慣用句",
    "difficulty": "難",
    "note": "霹靂は雷の意味。予想外の知らせに使う。"
  },
  {
    "term": "杓子定規",
    "reading": "しゃくしじょうぎ",
    "meaning": "形式にこだわって融通がきかないこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "規則を機械的に当てはめる態度。"
  },
  {
    "term": "紋切り型",
    "reading": "もんきりがた",
    "meaning": "型にはまっていて新味がないこと",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "決まり文句のような表現に使う。"
  },
  {
    "term": "机上の空論",
    "reading": "きじょうのくうろん",
    "meaning": "実際には役に立たない理屈だけの考え",
    "category": "慣用句",
    "difficulty": "標準",
    "note": "現実性のない計画や議論を批判する語。"
  },
  {
    "term": "絵に描いた餅",
    "reading": "えにかいたもち",
    "meaning": "実際には役に立たない計画や期待",
    "category": "ことわざ",
    "difficulty": "標準",
    "note": "見た目はよくても実益がないこと。"
  },
  {
    "term": "焼け石に水",
    "reading": "やけいしにみず",
    "meaning": "少しの努力や援助では効果がほとんどないこと",
    "category": "ことわざ",
    "difficulty": "標準",
    "note": "不足が大きすぎて対策が追いつかない場面で使う。"
  },
  {
    "term": "灯台下暗し",
    "reading": "とうだいもとくらし",
    "meaning": "身近なことほど気づきにくいこと",
    "category": "ことわざ",
    "difficulty": "標準",
    "note": "近くにある答えや原因を見落とす意味。"
  },
  {
    "term": "急がば回れ",
    "reading": "いそがばまわれ",
    "meaning": "急ぐときほど安全で確実な方法を取るべきだということ",
    "category": "ことわざ",
    "difficulty": "標準",
    "note": "近道より堅実な手段を選ぶ教訓。"
  },
  {
    "term": "転ばぬ先の杖",
    "reading": "ころばぬさきのつえ",
    "meaning": "失敗しないよう前もって準備すること",
    "category": "ことわざ",
    "difficulty": "標準",
    "note": "予防や備えの大切さを表す。"
  },
  {
    "term": "弘法にも筆の誤り",
    "reading": "こうぼうにもふでのあやまり",
    "meaning": "名人でも時には失敗すること",
    "category": "ことわざ",
    "difficulty": "標準",
    "note": "どんな達人にもミスはあるという意味。"
  },
  {
    "term": "覆水盆に返らず",
    "reading": "ふくすいぼんにかえらず",
    "meaning": "一度起きたことは元に戻せないこと",
    "category": "ことわざ",
    "difficulty": "やや難",
    "note": "取り返しのつかない事態を表す。"
  },
  {
    "term": "背水の陣",
    "reading": "はいすいのじん",
    "meaning": "退路を断って全力で取り組むこと",
    "category": "慣用句",
    "difficulty": "標準",
    "note": "後に引けない状況で覚悟して臨む意味。"
  },
  {
    "term": "玉石混交",
    "reading": "ぎょくせきこんこう",
    "meaning": "よいものと悪いものが入り混じっていること",
    "category": "四字熟語",
    "difficulty": "やや難",
    "note": "玉は価値あるもの、石は価値の低いものを指す。"
  },
  {
    "term": "朝令暮改",
    "reading": "ちょうれいぼかい",
    "meaning": "命令や方針が頻繁に変わること",
    "category": "四字熟語",
    "difficulty": "やや難",
    "note": "朝出した命令を夕方に改めるほど変化が激しい意味。"
  },
  {
    "term": "付和雷同",
    "reading": "ふわらいどう",
    "meaning": "自分の考えなく他人の意見に同調すること",
    "category": "四字熟語",
    "difficulty": "やや難",
    "note": "周囲に流される態度を表す。"
  },
  {
    "term": "言語道断",
    "reading": "ごんごどうだん",
    "meaning": "とんでもなくひどく、言葉で言い表せないこと",
    "category": "四字熟語",
    "difficulty": "標準",
    "note": "強い非難を表す語。"
  },
  {
    "term": "自業自得",
    "reading": "じごうじとく",
    "meaning": "自分の行いの結果を自分で受けること",
    "category": "四字熟語",
    "difficulty": "標準",
    "note": "悪い結果について使われることが多い。"
  },
  {
    "term": "本末転倒",
    "reading": "ほんまつてんとう",
    "meaning": "大切なことと些細なことを取り違えること",
    "category": "四字熟語",
    "difficulty": "標準",
    "note": "目的と手段が逆になる場合にも使う。"
  },
  {
    "term": "一朝一夕",
    "reading": "いっちょういっせき",
    "meaning": "わずかな時間",
    "category": "四字熟語",
    "difficulty": "標準",
    "note": "否定形で、簡単にはできないという文脈が多い。"
  },
  {
    "term": "臨機応変",
    "reading": "りんきおうへん",
    "meaning": "状況に応じて適切に対応すること",
    "category": "四字熟語",
    "difficulty": "標準",
    "note": "柔軟な判断力を表す。"
  },
  {
    "term": "優柔不断",
    "reading": "ゆうじゅうふだん",
    "meaning": "決断力に乏しく迷いやすいこと",
    "category": "四字熟語",
    "difficulty": "標準",
    "note": "逡巡と近いが、人の性質として使いやすい。"
  },
  {
    "term": "支離滅裂",
    "reading": "しりめつれつ",
    "meaning": "ばらばらで筋道が立っていないこと",
    "category": "四字熟語",
    "difficulty": "標準",
    "note": "発言や文章に一貫性がない場合に使う。"
  },
  {
    "term": "針小棒大",
    "reading": "しんしょうぼうだい",
    "meaning": "小さなことを大げさに言うこと",
    "category": "四字熟語",
    "difficulty": "やや難",
    "note": "事実を誇張する意味。"
  },
  {
    "term": "五里霧中",
    "reading": "ごりむちゅう",
    "meaning": "方針や手がかりがなく迷っていること",
    "category": "四字熟語",
    "difficulty": "標準",
    "note": "見通しが立たない状態を表す。"
  },
  {
    "term": "紆余曲折",
    "reading": "うよきょくせつ",
    "meaning": "物事が順調に進まず複雑な経過をたどること",
    "category": "四字熟語",
    "difficulty": "やや難",
    "note": "曲がりくねった道筋の比喩。"
  },
  {
    "term": "疑心暗鬼",
    "reading": "ぎしんあんき",
    "meaning": "疑いの心から何でも恐ろしく感じること",
    "category": "四字熟語",
    "difficulty": "標準",
    "note": "疑いが疑いを生む心理状態。"
  },
  {
    "term": "千載一遇",
    "reading": "せんざいいちぐう",
    "meaning": "めったにないよい機会",
    "category": "四字熟語",
    "difficulty": "やや難",
    "note": "千年に一度会うほど貴重な機会という意味。"
  },
  {
    "term": "荒唐無稽",
    "reading": "こうとうむけい",
    "meaning": "根拠がなく現実離れしていること",
    "category": "四字熟語",
    "difficulty": "難",
    "note": "話や計画がでたらめで信じがたい場合に使う。"
  },
  {
    "term": "杞人天憂",
    "reading": "きじんてんゆう",
    "meaning": "取り越し苦労をすること",
    "category": "四字熟語",
    "difficulty": "難",
    "note": "杞憂と同じ由来を持つ表現。"
  },
  {
    "term": "なおざり",
    "reading": "なおざり",
    "meaning": "十分に注意を払わずいい加減にすること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "おろそかにする意味。"
  },
  {
    "term": "おざなり",
    "reading": "おざなり",
    "meaning": "その場だけの間に合わせで済ませること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "なおざりと似るが、その場しのぎの対応に重点がある。"
  },
  {
    "term": "やぶさかでない",
    "reading": "やぶさかでない",
    "meaning": "喜んで引き受ける気持ちがあること",
    "category": "語句の意味",
    "difficulty": "やや難",
    "note": "消極的な否定ではなく、前向きな承諾を表す。"
  },
  {
    "term": "あながち",
    "reading": "あながち",
    "meaning": "必ずしも一概には言えないさま",
    "category": "副詞",
    "difficulty": "標準",
    "note": "否定を伴って、完全には否定できない意味になる。"
  },
  {
    "term": "おもむろに",
    "reading": "おもむろに",
    "meaning": "落ち着いてゆっくりと動作を始めるさま",
    "category": "副詞",
    "difficulty": "標準",
    "note": "突然という意味ではないので注意。"
  },
  {
    "term": "つぶさに",
    "reading": "つぶさに",
    "meaning": "細かく詳しく",
    "category": "副詞",
    "difficulty": "やや難",
    "note": "状況を詳しく見る・調べる場合に使う。"
  },
  {
    "term": "すべからく",
    "reading": "すべからく",
    "meaning": "当然そうすべきであるという意味で用いる語",
    "category": "副詞",
    "difficulty": "難",
    "note": "「すべて」という意味ではない。"
  },
  {
    "term": "さしずめ",
    "reading": "さしずめ",
    "meaning": "今のところ、結局のところ",
    "category": "副詞",
    "difficulty": "やや難",
    "note": "当面の判断を述べるときに使う。"
  },
  {
    "term": "ひいては",
    "reading": "ひいては",
    "meaning": "さらに進んでは、その結果として",
    "category": "副詞",
    "difficulty": "標準",
    "note": "影響が広がる先を示す接続表現。"
  },
  {
    "term": "かねて",
    "reading": "かねて",
    "meaning": "以前から",
    "category": "副詞",
    "difficulty": "標準",
    "note": "かねてより、という形でよく使う。"
  },
  {
    "term": "おしなべて",
    "reading": "おしなべて",
    "meaning": "全体的に見て、だいたい",
    "category": "副詞",
    "difficulty": "やや難",
    "note": "例外を細かく見ず、全体傾向を述べる語。"
  },
  {
    "term": "すこぶる",
    "reading": "すこぶる",
    "meaning": "非常に、たいへん",
    "category": "副詞",
    "difficulty": "標準",
    "note": "程度が大きいことを表す。"
  },
  {
    "term": "おおむね",
    "reading": "おおむね",
    "meaning": "だいたい、全体として",
    "category": "副詞",
    "difficulty": "標準",
    "note": "完全ではないが大筋で合っている意味。"
  },
  {
    "term": "かろうじて",
    "reading": "かろうじて",
    "meaning": "やっとのことで",
    "category": "副詞",
    "difficulty": "標準",
    "note": "余裕がなくぎりぎり達成する意味。"
  },
  {
    "term": "ことさら",
    "reading": "ことさら",
    "meaning": "わざわざ、特に",
    "category": "副詞",
    "difficulty": "標準",
    "note": "意図的に強調する場合に使う。"
  },
  {
    "term": "あまつさえ",
    "reading": "あまつさえ",
    "meaning": "そのうえ、さらに悪いことに",
    "category": "副詞",
    "difficulty": "難",
    "note": "悪い内容を重ねるときに使うことが多い。"
  },
  {
    "term": "いみじくも",
    "reading": "いみじくも",
    "meaning": "実に適切に、巧みに",
    "category": "副詞",
    "difficulty": "難",
    "note": "発言や表現が本質を突いている場合に使う。"
  },
  {
    "term": "けげん",
    "reading": "けげん",
    "meaning": "不思議に思い納得できないさま",
    "category": "形容動詞",
    "difficulty": "標準",
    "note": "漢字では怪訝。読みが難しい語として出やすい。"
  },
  {
    "term": "したたか",
    "reading": "したたか",
    "meaning": "手ごわく、簡単には屈しないさま",
    "category": "形容動詞",
    "difficulty": "標準",
    "note": "強くしぶとい性質を表す。"
  },
  {
    "term": "あざとい",
    "reading": "あざとい",
    "meaning": "抜け目がなく、やり方が露骨であるさま",
    "category": "形容詞",
    "difficulty": "標準",
    "note": "計算高さやわざとらしさを含む。"
  },
  {
    "term": "いぶかしい",
    "reading": "いぶかしい",
    "meaning": "疑わしく不審に思われるさま",
    "category": "形容詞",
    "difficulty": "やや難",
    "note": "理由がわからず怪しく感じる意味。"
  },
  {
    "term": "おぼつかない",
    "reading": "おぼつかない",
    "meaning": "頼りなく不安であるさま",
    "category": "形容詞",
    "difficulty": "標準",
    "note": "足取り・記憶・見通しなどに使う。"
  },
  {
    "term": "やにわに",
    "reading": "やにわに",
    "meaning": "その場ですぐに、突然",
    "category": "副詞",
    "difficulty": "難",
    "note": "動作が急に始まるさまを表す。"
  },
  {
    "term": "しどろもどろ",
    "reading": "しどろもどろ",
    "meaning": "話し方が乱れてまとまらないさま",
    "category": "副詞",
    "difficulty": "標準",
    "note": "慌てて説明が支離滅裂になる状態。"
  },
  {
    "term": "ままならない",
    "reading": "ままならない",
    "meaning": "思いどおりにならないこと",
    "category": "語句の意味",
    "difficulty": "標準",
    "note": "状況を自由に動かせない場合に使う。"
  },
  {
    "term": "あえなく",
    "reading": "あえなく",
    "meaning": "期待に反して簡単にだめになるさま",
    "category": "副詞",
    "difficulty": "標準",
    "note": "失敗や敗北があっけなく起こる意味。"
  },
  {
    "term": "おもねる",
    "reading": "おもねる",
    "meaning": "人の気に入るようにへつらうこと",
    "category": "動詞",
    "difficulty": "やや難",
    "note": "迎合に近く、相手に取り入ろうとする意味。"
  },
  {
    "term": "いなす",
    "reading": "いなす",
    "meaning": "相手の勢いをうまくそらすこと",
    "category": "動詞",
    "difficulty": "やや難",
    "note": "攻撃や追及を正面から受けずにかわす意味。"
  },
  {
    "term": "あしらう",
    "reading": "あしらう",
    "meaning": "相手を適当に扱うこと",
    "category": "動詞",
    "difficulty": "標準",
    "note": "丁寧に対応しないニュアンスがある。"
  },
  {
    "term": "はぐらかす",
    "reading": "はぐらかす",
    "meaning": "話の焦点をそらしてごまかすこと",
    "category": "動詞",
    "difficulty": "標準",
    "note": "質問に正面から答えない場合に使う。"
  },
  {
    "term": "取り繕う",
    "reading": "とりつくろう",
    "meaning": "欠点や失敗が目立たないように表面だけ整えること",
    "category": "動詞",
    "difficulty": "標準",
    "note": "その場をうまく見せかける意味。"
  },
  {
    "term": "見限る",
    "reading": "みかぎる",
    "meaning": "見込みがないとしてあきらめること",
    "category": "動詞",
    "difficulty": "標準",
    "note": "期待を捨てる判断を表す。"
  },
  {
    "term": "見据える",
    "reading": "みすえる",
    "meaning": "将来や本質をしっかり見定めること",
    "category": "動詞",
    "difficulty": "標準",
    "note": "長期的な視点で考える意味。"
  },
  {
    "term": "見込む",
    "reading": "みこむ",
    "meaning": "将来そうなると予想すること",
    "category": "動詞",
    "difficulty": "標準",
    "note": "売上や効果を予測する場面でも使う。"
  },
  {
    "term": "かこつける",
    "reading": "かこつける",
    "meaning": "別のことを口実にすること",
    "category": "動詞",
    "difficulty": "やや難",
    "note": "本当の理由を隠して理由づけする意味。"
  },
  {
    "term": "取り沙汰する",
    "reading": "とりざたする",
    "meaning": "世間で話題にすること",
    "category": "動詞",
    "difficulty": "やや難",
    "note": "うわさや評判として取り上げる意味。"
  },
  {
    "term": "うがった見方",
    "reading": "うがったみかた",
    "meaning": "物事の本質を的確にとらえた見方",
    "category": "語句の意味",
    "difficulty": "難",
    "note": "本来は疑い深い見方ではなく、核心を突く見方。"
  },
  {
    "term": "照準",
    "reading": "しょうじゅん",
    "meaning": "ねらいを定めること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "ねらいを定めること"
  },
  {
    "term": "蹂躙",
    "reading": "じゅうりん",
    "meaning": "踏みにじったり侵害したりすること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "踏みにじったり侵害したりすること"
  },
  {
    "term": "苦笑",
    "reading": "くしょう",
    "meaning": "怒りや不快感を持ちながらしかたなく笑うこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "怒りや不快感を持ちながらしかたなく笑うこと"
  },
  {
    "term": "強記",
    "reading": "きょうき",
    "meaning": "記憶力が優れていること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "記憶力が優れていること"
  },
  {
    "term": "領袖",
    "reading": "りょうしゅう",
    "meaning": "ある集団を率いる人物",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "ある集団を率いる人物"
  },
  {
    "term": "垂涎",
    "reading": "すいぜん",
    "meaning": "ある物をしきりに欲しがること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "ある物をしきりに欲しがること"
  },
  {
    "term": "刮目",
    "reading": "かつもく",
    "meaning": "目をこすってよく見ること。注目すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "目をこすってよく見ること。注目すること"
  },
  {
    "term": "催事",
    "reading": "さいじ",
    "meaning": "特別に行われる催しもの",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "特別に行われる催しもの"
  },
  {
    "term": "流布",
    "reading": "るふ",
    "meaning": "世に広まること。広く知れ渡ること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "世に広まること。広く知れ渡ること"
  },
  {
    "term": "驚嘆",
    "reading": "きょうたん",
    "meaning": "ひどく感心すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "ひどく感心すること"
  },
  {
    "term": "心服",
    "reading": "しんぷく",
    "meaning": "心から尊敬して従うこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "心から尊敬して従うこと"
  },
  {
    "term": "参画",
    "reading": "さんかく",
    "meaning": "計画段階から参加すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "計画段階から参加すること"
  },
  {
    "term": "鎬",
    "reading": "しのぎ",
    "meaning": "激しく争うこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "激しく争うこと"
  },
  {
    "term": "鳩首",
    "reading": "きゅうしゅ",
    "meaning": "人々が集まって額を寄せ合い相談すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "人々が集まって額を寄せ合い相談すること"
  },
  {
    "term": "木鐸",
    "reading": "ぼくたく",
    "meaning": "世の人を教え導く人。指導者",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "世の人を教え導く人。指導者"
  },
  {
    "term": "陥穽",
    "reading": "かんせい",
    "meaning": "人をおとしいれるはかりごと。落とし穴",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "人をおとしいれるはかりごと。落とし穴"
  },
  {
    "term": "義憤",
    "reading": "ぎふん",
    "meaning": "不正なことにいきどおること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "不正なことにいきどおること"
  },
  {
    "term": "謳歌",
    "reading": "おうか",
    "meaning": "恵まれた境遇を大いに楽しみ、表現すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "恵まれた境遇を大いに楽しみ、表現すること"
  },
  {
    "term": "粉飾",
    "reading": "ふんしょく",
    "meaning": "立派に見せようとしてうわべを飾ること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "立派に見せようとしてうわべを飾ること"
  },
  {
    "term": "因習",
    "reading": "いんしゅう",
    "meaning": "古くから伝えられている風習",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "古くから伝えられている風習"
  },
  {
    "term": "言下",
    "reading": "げんか",
    "meaning": "言い終わるか終わらない時。即座",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "言い終わるか終わらない時。即座"
  },
  {
    "term": "居丈高",
    "reading": "いたけだか",
    "meaning": "人を威圧するような態度",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "人を威圧するような態度"
  },
  {
    "term": "梗概",
    "reading": "こうがい",
    "meaning": "あらすじ",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "あらすじ"
  },
  {
    "term": "瞠目",
    "reading": "どうもく",
    "meaning": "驚いたり感心したりして目をみはること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "驚いたり感心したりして目をみはること"
  },
  {
    "term": "保身",
    "reading": "ほしん",
    "meaning": "自分の地位や名声などの安全をはかること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "自分の地位や名声などの安全をはかること"
  },
  {
    "term": "跋扈",
    "reading": "ばっこ",
    "meaning": "勝手にはねまわること。悪がのさばること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "勝手にはねまわること。悪がのさばること"
  },
  {
    "term": "履行",
    "reading": "りこう",
    "meaning": "約束されたことなどを実際に行うこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "約束されたことなどを実際に行うこと"
  },
  {
    "term": "安閑",
    "reading": "あんかん",
    "meaning": "安らかで静かなさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "安らかで静かなさま"
  },
  {
    "term": "私淑",
    "reading": "ししゅく",
    "meaning": "ひそかに尊敬し、師と仰ぐこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "ひそかに尊敬し、師と仰ぐこと"
  },
  {
    "term": "高尚",
    "reading": "こうしょう",
    "meaning": "学問・言行などの程度が高く上品なこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "学問・言行などの程度が高く上品なこと"
  },
  {
    "term": "即妙",
    "reading": "そくみょう",
    "meaning": "気がきいていること。当意即妙の略",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "気がきいていること。当意即妙の略"
  },
  {
    "term": "崇高",
    "reading": "すうこう",
    "meaning": "気高く尊いさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "気高く尊いさま"
  },
  {
    "term": "出仕",
    "reading": "しゅっし",
    "meaning": "役所などに勤めること。官職につくこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "役所などに勤めること。官職につくこと"
  },
  {
    "term": "射幸",
    "reading": "しゃこう",
    "meaning": "偶然の利益や成功を当てにすること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "偶然の利益や成功を当てにすること"
  },
  {
    "term": "蔓延",
    "reading": "まんえん",
    "meaning": "好ましくないことがはびこること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "好ましくないことがはびこること"
  },
  {
    "term": "落成",
    "reading": "らくせい",
    "meaning": "工事が完了して建築物などができあがること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "工事が完了して建築物などができあがること"
  },
  {
    "term": "言外",
    "reading": "げんがい",
    "meaning": "直接は言葉に出さない部分",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "直接は言葉に出さない部分"
  },
  {
    "term": "膠着",
    "reading": "こうちゃく",
    "meaning": "ある状態に固定して進展しないこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "ある状態に固定して進展しないこと"
  },
  {
    "term": "言質",
    "reading": "げんち",
    "meaning": "後で証拠となる言葉",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "後で証拠となる言葉"
  },
  {
    "term": "博覧",
    "reading": "はくらん",
    "meaning": "広く一般の人が見ること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "広く一般の人が見ること"
  },
  {
    "term": "画策",
    "reading": "かくさく",
    "meaning": "考えて実行すること。計画すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "考えて実行すること。計画すること"
  },
  {
    "term": "慇懃",
    "reading": "いんぎん",
    "meaning": "礼儀正しいこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "礼儀正しいこと"
  },
  {
    "term": "果断",
    "reading": "かだん",
    "meaning": "ためらわずに思い切って行うさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "ためらわずに思い切って行うさま"
  },
  {
    "term": "慧眼",
    "reading": "けいがん",
    "meaning": "物事の本質を見抜く優れた眼力",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "物事の本質を見抜く優れた眼力"
  },
  {
    "term": "省察",
    "reading": "せいさつ",
    "meaning": "自身を反省して考えること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "自身を反省して考えること"
  },
  {
    "term": "喟息",
    "reading": "きそく",
    "meaning": "なげいて、ため息をつくこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "なげいて、ため息をつくこと"
  },
  {
    "term": "意匠",
    "reading": "いしょう",
    "meaning": "工夫をめぐらすこと。デザイン",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "工夫をめぐらすこと。デザイン"
  },
  {
    "term": "具備",
    "reading": "ぐび",
    "meaning": "十分に備えていること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "十分に備えていること"
  },
  {
    "term": "銘記",
    "reading": "めいき",
    "meaning": "心に刻み込むこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "心に刻み込むこと"
  },
  {
    "term": "断腸",
    "reading": "だんちょう",
    "meaning": "非常に辛いこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "非常に辛いこと"
  },
  {
    "term": "仮託",
    "reading": "かたく",
    "meaning": "他の物事を借りて言い表すこと。かこつけること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "他の物事を借りて言い表すこと。かこつけること"
  },
  {
    "term": "雄飛",
    "reading": "ゆうひ",
    "meaning": "勢い盛んに活動すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "勢い盛んに活動すること"
  },
  {
    "term": "晦日",
    "reading": "みそか",
    "meaning": "月の最後の日",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "月の最後の日"
  },
  {
    "term": "忖度",
    "reading": "そんたく",
    "meaning": "相手の事情や心情などをくみとること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "相手の事情や心情などをくみとること"
  },
  {
    "term": "付度",
    "reading": "ふたく",
    "meaning": "相手の心中をおしはかること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "相手の心中をおしはかること"
  },
  {
    "term": "不埒",
    "reading": "ふらち",
    "meaning": "道理にはずれていて、けしからぬこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "道理にはずれていて、けしからぬこと"
  },
  {
    "term": "祈念",
    "reading": "きねん",
    "meaning": "心から願うこと。強く希望すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "心から願うこと。強く希望すること"
  },
  {
    "term": "拮抗",
    "reading": "きっこう",
    "meaning": "力がほぼ等しくて優劣のないこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "力がほぼ等しくて優劣のないこと"
  },
  {
    "term": "先達",
    "reading": "せんだつ",
    "meaning": "先にその分野に進んで他を導く人",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "先にその分野に進んで他を導く人"
  },
  {
    "term": "督励",
    "reading": "とくれい",
    "meaning": "監督し励ますこと。指図して元気づけること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "監督し励ますこと。指図して元気づけること"
  },
  {
    "term": "超然",
    "reading": "ちょうぜん",
    "meaning": "俗事にこだわらず、ゆうゆうとしているさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "俗事にこだわらず、ゆうゆうとしているさま"
  },
  {
    "term": "杜撰",
    "reading": "ずさん",
    "meaning": "いい加減。手抜き。おざなり",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "いい加減。手抜き。おざなり"
  },
  {
    "term": "円熟",
    "reading": "えんじゅく",
    "meaning": "十分に熟達して豊かな内容をもつこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "十分に熟達して豊かな内容をもつこと"
  },
  {
    "term": "老成",
    "reading": "ろうせい",
    "meaning": "経験を積んで円熟すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "経験を積んで円熟すること"
  },
  {
    "term": "至言",
    "reading": "しげん",
    "meaning": "的を射た言葉。本質を突いた言葉",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "的を射た言葉。本質を突いた言葉"
  },
  {
    "term": "適宜",
    "reading": "てきぎ",
    "meaning": "その場の状況に合っていること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "その場の状況に合っていること"
  },
  {
    "term": "僭越",
    "reading": "せんえつ",
    "meaning": "さしでがましいこと。出過ぎたこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "さしでがましいこと。出過ぎたこと"
  },
  {
    "term": "裁量",
    "reading": "さいりょう",
    "meaning": "本人の考えで判断し処理すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "本人の考えで判断し処理すること"
  },
  {
    "term": "気概",
    "reading": "きがい",
    "meaning": "困難に負けない強い気性・意志",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "困難に負けない強い気性・意志"
  },
  {
    "term": "笑殺",
    "reading": "しょうさつ",
    "meaning": "問題にしないこと。一笑に付すこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "問題にしないこと。一笑に付すこと"
  },
  {
    "term": "希有",
    "reading": "けう",
    "meaning": "めったにないこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "めったにないこと"
  },
  {
    "term": "証左",
    "reading": "しょうさ",
    "meaning": "証拠。あかし",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "証拠。あかし"
  },
  {
    "term": "気丈",
    "reading": "きじょう",
    "meaning": "気持ちがしっかりしていること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "気持ちがしっかりしていること"
  },
  {
    "term": "早晩",
    "reading": "そうばん",
    "meaning": "いずれ。遅かれ早かれ。近い将来",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "いずれ。遅かれ早かれ。近い将来"
  },
  {
    "term": "幇間",
    "reading": "ほうかん",
    "meaning": "太鼓持ち。客の機嫌をとって場を盛り上げる職業",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "太鼓持ち。客の機嫌をとって場を盛り上げる職業"
  },
  {
    "term": "暁通",
    "reading": "ぎょうつう",
    "meaning": "すみずみまで詳しく知っていること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "すみずみまで詳しく知っていること"
  },
  {
    "term": "姑息",
    "reading": "こそく",
    "meaning": "その場しのぎの間に合わせ",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "その場しのぎの間に合わせ"
  },
  {
    "term": "営営",
    "reading": "えいえい",
    "meaning": "こつこつと励むさま。せっせと働く様子",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "こつこつと励むさま。せっせと働く様子"
  },
  {
    "term": "恬淡",
    "reading": "てんたん",
    "meaning": "欲がなくあっさりしているさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "欲がなくあっさりしているさま"
  },
  {
    "term": "闊達",
    "reading": "かったつ",
    "meaning": "度量が広く小事にこだわらないさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "度量が広く小事にこだわらないさま"
  },
  {
    "term": "馴致",
    "reading": "じゅんち",
    "meaning": "なれさせること。なじませること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "なれさせること。なじませること"
  },
  {
    "term": "卓越",
    "reading": "たくえつ",
    "meaning": "他よりはるかに優れていること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "他よりはるかに優れていること"
  },
  {
    "term": "伝播",
    "reading": "でんぱ",
    "meaning": "伝わり広がっていくこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "伝わり広がっていくこと"
  },
  {
    "term": "煌煌",
    "reading": "こうこう",
    "meaning": "光り輝くさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "光り輝くさま"
  },
  {
    "term": "秘匿",
    "reading": "ひとく",
    "meaning": "秘密にして隠しておくこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "秘密にして隠しておくこと"
  },
  {
    "term": "奢侈",
    "reading": "しゃし",
    "meaning": "過度のぜいたく。身分不相応なぜいたく",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "過度のぜいたく。身分不相応なぜいたく"
  },
  {
    "term": "法外",
    "reading": "ほうがい",
    "meaning": "並外れていて普通の程度をこえていること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "並外れていて普通の程度をこえていること"
  },
  {
    "term": "滔滔",
    "reading": "とうとう",
    "meaning": "次から次へとよどみなく話すさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "次から次へとよどみなく話すさま"
  },
  {
    "term": "蜿蜿",
    "reading": "えんえん",
    "meaning": "うねうねと長く続くさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "うねうねと長く続くさま"
  },
  {
    "term": "疎通",
    "reading": "そつう",
    "meaning": "意思や考えが支障なく相手に通じること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "意思や考えが支障なく相手に通じること"
  },
  {
    "term": "直言",
    "reading": "ちょくげん",
    "meaning": "自分の考えや信念を遠慮せず言うこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "自分の考えや信念を遠慮せず言うこと"
  },
  {
    "term": "進言",
    "reading": "しんげん",
    "meaning": "上位の者に意見を申し述べること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "上位の者に意見を申し述べること"
  },
  {
    "term": "咀嚼",
    "reading": "そしゃく",
    "meaning": "内容をよく考えて十分に理解し味わうこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "内容をよく考えて十分に理解し味わうこと"
  },
  {
    "term": "歴然",
    "reading": "れきぜん",
    "meaning": "はっきりとして明白なさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "はっきりとして明白なさま"
  },
  {
    "term": "恭順",
    "reading": "きょうじゅん",
    "meaning": "つつしんで命令などに従うこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "つつしんで命令などに従うこと"
  },
  {
    "term": "大綱",
    "reading": "たいこう",
    "meaning": "事柄の根本。大づかみの内容",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "事柄の根本。大づかみの内容"
  },
  {
    "term": "蹉跌",
    "reading": "さてつ",
    "meaning": "物事がうまくいかず、しくじること。失敗",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "物事がうまくいかず、しくじること。失敗"
  },
  {
    "term": "漸減",
    "reading": "ぜんげん",
    "meaning": "だんだん少なくなること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "だんだん少なくなること"
  },
  {
    "term": "閨秀",
    "reading": "けいしゅう",
    "meaning": "学問や芸術などに優れた女性",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "学問や芸術などに優れた女性"
  },
  {
    "term": "意表",
    "reading": "いひょう",
    "meaning": "まったく考えてもいないこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "まったく考えてもいないこと"
  },
  {
    "term": "軋轢",
    "reading": "あつれき",
    "meaning": "仲が悪くなること。不和",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "仲が悪くなること。不和"
  },
  {
    "term": "労",
    "reading": "ろう",
    "meaning": "苦労・努力・ほねおり",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "苦労・努力・ほねおり"
  },
  {
    "term": "典拠",
    "reading": "てんきょ",
    "meaning": "よりどころとなる文献。引用した資料",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "よりどころとなる文献。引用した資料"
  },
  {
    "term": "枢軸",
    "reading": "すうじく",
    "meaning": "物事の中心となる重要な部分",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "物事の中心となる重要な部分"
  },
  {
    "term": "泰斗",
    "reading": "たいと",
    "meaning": "その道で最も権威のある人",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "その道で最も権威のある人"
  },
  {
    "term": "比肩",
    "reading": "ひけん",
    "meaning": "同等のものとして並ぶこと。匹敵すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "同等のものとして並ぶこと。匹敵すること"
  },
  {
    "term": "懸案",
    "reading": "けんあん",
    "meaning": "問題になっていながら解決がつかない事柄",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "問題になっていながら解決がつかない事柄"
  },
  {
    "term": "宥和",
    "reading": "ゆうわ",
    "meaning": "対立する相手をゆるし、仲よくすること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "対立する相手をゆるし、仲よくすること"
  },
  {
    "term": "遁走",
    "reading": "とんそう",
    "meaning": "逃げ出すこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "逃げ出すこと"
  },
  {
    "term": "虚心",
    "reading": "きょしん",
    "meaning": "先入観を持たない、すなおな態度",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "先入観を持たない、すなおな態度"
  },
  {
    "term": "中原",
    "reading": "ちゅうげん",
    "meaning": "天下の中央。中心の地",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "天下の中央。中心の地"
  },
  {
    "term": "演繹",
    "reading": "えんえき",
    "meaning": "一般論から個別のものを推論・説明すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "一般論から個別のものを推論・説明すること"
  },
  {
    "term": "知遇",
    "reading": "ちぐう",
    "meaning": "力を認められて厚く待遇されること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "力を認められて厚く待遇されること"
  },
  {
    "term": "失笑",
    "reading": "しっしょう",
    "meaning": "思わず笑ってしまうこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "思わず笑ってしまうこと"
  },
  {
    "term": "斯界",
    "reading": "しかい",
    "meaning": "この分野。この専門の方面",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "この分野。この専門の方面"
  },
  {
    "term": "耽読",
    "reading": "たんどく",
    "meaning": "夢中になって読むこと。読みふけること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "夢中になって読むこと。読みふけること"
  },
  {
    "term": "着着",
    "reading": "ちゃくちゃく",
    "meaning": "物事が予定通り順調に進むさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "物事が予定通り順調に進むさま"
  },
  {
    "term": "諸般",
    "reading": "しょはん",
    "meaning": "さまざま。いろいろ",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "さまざま。いろいろ"
  },
  {
    "term": "這般",
    "reading": "しゃはん",
    "meaning": "これら。この辺。このたび",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "これら。この辺。このたび"
  },
  {
    "term": "佳境",
    "reading": "かきょう",
    "meaning": "物事の面白くなったところ。興味深い場面",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "物事の面白くなったところ。興味深い場面"
  },
  {
    "term": "気脈",
    "reading": "きみゃく",
    "meaning": "連絡。気持ちのつながり",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "連絡。気持ちのつながり"
  },
  {
    "term": "隠匿",
    "reading": "いんとく",
    "meaning": "人に見つからないように隠すこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "人に見つからないように隠すこと"
  },
  {
    "term": "増長",
    "reading": "ぞうちょう",
    "meaning": "だんだんいい気になってつけ上がること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "だんだんいい気になってつけ上がること"
  },
  {
    "term": "咽喉",
    "reading": "いんこう",
    "meaning": "のど。転じて重要な通路",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "のど。転じて重要な通路"
  },
  {
    "term": "回顧",
    "reading": "かいこ",
    "meaning": "過去をふりかえってみること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "過去をふりかえってみること"
  },
  {
    "term": "看破",
    "reading": "かんぱ",
    "meaning": "真相などを見破ること。見抜くこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "真相などを見破ること。見抜くこと"
  },
  {
    "term": "打診",
    "reading": "だしん",
    "meaning": "相手の反応を見るために事前に伝えること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "相手の反応を見るために事前に伝えること"
  },
  {
    "term": "標榜",
    "reading": "ひょうぼう",
    "meaning": "主義・主張などを公然と表すこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "主義・主張などを公然と表すこと"
  },
  {
    "term": "峻別",
    "reading": "しゅんべつ",
    "meaning": "厳しく区別すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "厳しく区別すること"
  },
  {
    "term": "吹聴",
    "reading": "ふいちょう",
    "meaning": "言いふらすこと。言い広めること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "言いふらすこと。言い広めること"
  },
  {
    "term": "寡聞",
    "reading": "かぶん",
    "meaning": "見聞が狭くて知識をもたないこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "見聞が狭くて知識をもたないこと"
  },
  {
    "term": "肝要",
    "reading": "かんよう",
    "meaning": "非常に大切なこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "非常に大切なこと"
  },
  {
    "term": "消長",
    "reading": "しょうちょう",
    "meaning": "衰えたり栄えたりすること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "衰えたり栄えたりすること"
  },
  {
    "term": "遜色",
    "reading": "そんしょく",
    "meaning": "見劣りすること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "見劣りすること"
  },
  {
    "term": "卑近",
    "reading": "ひきん",
    "meaning": "身近でありふれていること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "身近でありふれていること"
  },
  {
    "term": "腐心",
    "reading": "ふしん",
    "meaning": "事を成し遂げようと心を痛め悩ますこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "事を成し遂げようと心を痛め悩ますこと"
  },
  {
    "term": "内内",
    "reading": "ないない",
    "meaning": "こっそり。うちわ。内密",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "こっそり。うちわ。内密"
  },
  {
    "term": "憐憫",
    "reading": "れんびん",
    "meaning": "かわいそうに思うこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "かわいそうに思うこと"
  },
  {
    "term": "造詣",
    "reading": "ぞうけい",
    "meaning": "その分野についての深い知識や優れた技量",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "その分野についての深い知識や優れた技量"
  },
  {
    "term": "閉口",
    "reading": "へいこう",
    "meaning": "手に負えなくて困ること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "手に負えなくて困ること"
  },
  {
    "term": "喧伝",
    "reading": "けんでん",
    "meaning": "言いふらして広く知らせること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "言いふらして広く知らせること"
  },
  {
    "term": "漸次",
    "reading": "ぜんじ",
    "meaning": "だんだん。次第に",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "だんだん。次第に"
  },
  {
    "term": "招致",
    "reading": "しょうち",
    "meaning": "招き寄せること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "招き寄せること"
  },
  {
    "term": "英気",
    "reading": "えいき",
    "meaning": "何かをしようとする元気。優れた才気",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "何かをしようとする元気。優れた才気"
  },
  {
    "term": "市井",
    "reading": "しせい",
    "meaning": "人家が集まっている所。ちまた",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "人家が集まっている所。ちまた"
  },
  {
    "term": "披瀝",
    "reading": "ひれき",
    "meaning": "気持ちなどを隠さずすべて打ち明けること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "気持ちなどを隠さずすべて打ち明けること"
  },
  {
    "term": "謬見",
    "reading": "びゅうけん",
    "meaning": "誤った意見、考え",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "誤った意見、考え"
  },
  {
    "term": "出色",
    "reading": "しゅっしょく",
    "meaning": "他より目立って優れていること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "他より目立って優れていること"
  },
  {
    "term": "異彩",
    "reading": "いさい",
    "meaning": "普通とは異なっていて目立つ様子",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "普通とは異なっていて目立つ様子"
  },
  {
    "term": "折半",
    "reading": "せっぱん",
    "meaning": "二等分にすること。半分に分けること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "二等分にすること。半分に分けること"
  },
  {
    "term": "度外視",
    "reading": "どがいし",
    "meaning": "まったく問題にしないこと。無視すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "まったく問題にしないこと。無視すること"
  },
  {
    "term": "辟易",
    "reading": "へきえき",
    "meaning": "うんざりして嫌になること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "うんざりして嫌になること"
  },
  {
    "term": "予見",
    "reading": "よけん",
    "meaning": "前もって見通すこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "前もって見通すこと"
  },
  {
    "term": "畏敬",
    "reading": "いけい",
    "meaning": "かしこまりうやまうこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "かしこまりうやまうこと"
  },
  {
    "term": "研鑽",
    "reading": "けんさん",
    "meaning": "学問などを深く究めること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "学問などを深く究めること"
  },
  {
    "term": "必至",
    "reading": "ひっし",
    "meaning": "そうなることが避けられないこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "そうなることが避けられないこと"
  },
  {
    "term": "逆鱗",
    "reading": "げきりん",
    "meaning": "目上の人の怒り",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "目上の人の怒り"
  },
  {
    "term": "緊迫",
    "reading": "きんぱく",
    "meaning": "きびしくさしせまること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "きびしくさしせまること"
  },
  {
    "term": "僥倖",
    "reading": "ぎょうこう",
    "meaning": "思いがけない幸運。偶然に得る幸い",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "思いがけない幸運。偶然に得る幸い"
  },
  {
    "term": "隘路",
    "reading": "あいろ",
    "meaning": "狭くて困難な道。進行の妨げとなるもの",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "狭くて困難な道。進行の妨げとなるもの"
  },
  {
    "term": "愁眉",
    "reading": "しゅうび",
    "meaning": "心配そうな顔。うれいを含んだまゆ",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "心配そうな顔。うれいを含んだまゆ"
  },
  {
    "term": "焦眉",
    "reading": "しょうび",
    "meaning": "眉が焦げるほどの火の接近。切迫した危険",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "眉が焦げるほどの火の接近。切迫した危険"
  },
  {
    "term": "一瞥",
    "reading": "いちべつ",
    "meaning": "ちらっと見ること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "ちらっと見ること"
  },
  {
    "term": "薫陶",
    "reading": "くんとう",
    "meaning": "人徳で人を感化してよい方に導くこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "人徳で人を感化してよい方に導くこと"
  },
  {
    "term": "随意",
    "reading": "ずいい",
    "meaning": "制限を受けず自分の思うままであること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "制限を受けず自分の思うままであること"
  },
  {
    "term": "桎梏",
    "reading": "しっこく",
    "meaning": "手かせ足かせ。自由を束縛するもの",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "手かせ足かせ。自由を束縛するもの"
  },
  {
    "term": "洒脱",
    "reading": "しゃだつ",
    "meaning": "気取りなくさっぱりと洗練されているさま",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "気取りなくさっぱりと洗練されているさま"
  },
  {
    "term": "収斂",
    "reading": "しゅうれん",
    "meaning": "同質・同等にまとまること。縮むこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "同質・同等にまとまること。縮むこと"
  },
  {
    "term": "浚渫",
    "reading": "しゅんせつ",
    "meaning": "海底・河床などの土砂を掘削すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "海底・河床などの土砂を掘削すること"
  },
  {
    "term": "子細",
    "reading": "しさい",
    "meaning": "物事の詳しい事情",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "物事の詳しい事情"
  },
  {
    "term": "粗忽",
    "reading": "そこつ",
    "meaning": "軽はずみでそそっかしいこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "軽はずみでそそっかしいこと"
  },
  {
    "term": "詮議",
    "reading": "せんぎ",
    "meaning": "話し合って物事を明らかにすること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "話し合って物事を明らかにすること"
  },
  {
    "term": "糊塗",
    "reading": "こと",
    "meaning": "一時しのぎにごまかして取り繕うこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "一時しのぎにごまかして取り繕うこと"
  },
  {
    "term": "奉職",
    "reading": "ほうしょく",
    "meaning": "公の職務につくこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "公の職務につくこと"
  },
  {
    "term": "籠絡",
    "reading": "ろうらく",
    "meaning": "まるめこんで思い通りにあやつること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "まるめこんで思い通りにあやつること"
  },
  {
    "term": "重畳",
    "reading": "ちょうじょう",
    "meaning": "良い事が重なること。大変喜ばしいこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "良い事が重なること。大変喜ばしいこと"
  },
  {
    "term": "依拠",
    "reading": "いきょ",
    "meaning": "よりどころとすること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "よりどころとすること"
  },
  {
    "term": "頓挫",
    "reading": "とんざ",
    "meaning": "進行が急にくじけること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "進行が急にくじけること"
  },
  {
    "term": "獰悪",
    "reading": "どうあく",
    "meaning": "性質や姿が凶悪で荒々しいこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "性質や姿が凶悪で荒々しいこと"
  },
  {
    "term": "角",
    "reading": "かど",
    "meaning": "言動・性格が円満でないこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "言動・性格が円満でないこと"
  },
  {
    "term": "識見",
    "reading": "しきけん",
    "meaning": "物事を正しく判断する力",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "物事を正しく判断する力"
  },
  {
    "term": "溜飲",
    "reading": "りゅういん",
    "meaning": "胸のつかえ。気を晴らすこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "胸のつかえ。気を晴らすこと"
  },
  {
    "term": "符合",
    "reading": "ふごう",
    "meaning": "二つ以上の事柄がぴったりと一致すること",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "二つ以上の事柄がぴったりと一致すること"
  },
  {
    "term": "猜疑",
    "reading": "さいぎ",
    "meaning": "何か裏があるのではないかと疑うこと",
    "category": "PDF頻出語句",
    "difficulty": "標準",
    "note": "何か裏があるのではないかと疑うこと"
  },
  {
    "term": "すげない",
    "reading": "すげない",
    "meaning": "思いやりがない。冷たい態度をとる。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "思いやりがない。冷たい態度をとる。"
  },
  {
    "term": "変遷",
    "reading": "へんせん",
    "meaning": "時代や状況の移り変わり。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "時代や状況の移り変わり。"
  },
  {
    "term": "壮途",
    "reading": "そうと",
    "meaning": "前途有望な旅立ちや出発。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "前途有望な旅立ちや出発。"
  },
  {
    "term": "通暁",
    "reading": "つうぎょう",
    "meaning": "深く知り尽くしていること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "深く知り尽くしていること。"
  },
  {
    "term": "要衝",
    "reading": "ようしょう",
    "meaning": "戦略や交通などの重要な地点。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "戦略や交通などの重要な地点。"
  },
  {
    "term": "数奇",
    "reading": "すうき",
    "meaning": "運命が変転しやすく不遇なこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "運命が変転しやすく不遇なこと。"
  },
  {
    "term": "喫緊",
    "reading": "きっきん",
    "meaning": "差し迫って重要なさま。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "差し迫って重要なさま。"
  },
  {
    "term": "宿願",
    "reading": "しゅくがん",
    "meaning": "以前からの願い。長年の望み。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "以前からの願い。長年の望み。"
  },
  {
    "term": "減退",
    "reading": "げんたい",
    "meaning": "力や勢いが弱まること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "力や勢いが弱まること。"
  },
  {
    "term": "風間",
    "reading": "ふうかん",
    "meaning": "うわさ。人づての話。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "うわさ。人づての話。"
  },
  {
    "term": "酒脱",
    "reading": "しゃだつ",
    "meaning": "あかぬけていて洗練されたさま。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "あかぬけていて洗練されたさま。"
  },
  {
    "term": "呻吟",
    "reading": "しんぎん",
    "meaning": "苦しんでうめくこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "苦しんでうめくこと。"
  },
  {
    "term": "寸志",
    "reading": "すんし",
    "meaning": "ほんの少しの心づけ。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ほんの少しの心づけ。"
  },
  {
    "term": "脱稿",
    "reading": "だっこう",
    "meaning": "原稿を書き終えること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "原稿を書き終えること。"
  },
  {
    "term": "凋落",
    "reading": "ちょうらく",
    "meaning": "衰えること、落ちぶれること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "衰えること、落ちぶれること"
  },
  {
    "term": "泰然",
    "reading": "たいぜん",
    "meaning": "落ち着いていて物事に驚かないさま",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "落ち着いていて物事に驚かないさま"
  },
  {
    "term": "斡旋",
    "reading": "あっせん",
    "meaning": "間に入って双方をうまく取り持つこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "間に入って双方をうまく取り持つこと"
  },
  {
    "term": "生粋",
    "reading": "きっすい",
    "meaning": "純粋で混ざり気のないこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "純粋で混ざり気のないこと"
  },
  {
    "term": "符号",
    "reading": "ふごう",
    "meaning": "ある情報を伝達するために体系的に使われる記号",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ある情報を伝達するために体系的に使われる記号"
  },
  {
    "term": "営々",
    "reading": "えいえい",
    "meaning": "せっせと休みなく励むこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "せっせと休みなく励むこと"
  },
  {
    "term": "気鋭",
    "reading": "きえい",
    "meaning": "気力があって、意気込みが鋭いこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "気力があって、意気込みが鋭いこと"
  },
  {
    "term": "鳥瞰",
    "reading": "ちょうかん",
    "meaning": "全体を一目で観察すること、高いところから広い範囲を見ること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "全体を一目で観察すること、高いところから広い範囲を見ること"
  },
  {
    "term": "協議",
    "reading": "きょうぎ",
    "meaning": "集まって相談すること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "集まって相談すること"
  },
  {
    "term": "専横",
    "reading": "せんおう",
    "meaning": "わがままで横暴な振舞い・態度",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "わがままで横暴な振舞い・態度"
  },
  {
    "term": "度量",
    "reading": "どりょう",
    "meaning": "心の広さ",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "心の広さ"
  },
  {
    "term": "英断",
    "reading": "えいだん",
    "meaning": "きっぱりと事を決めること、すぐれた決断",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "きっぱりと事を決めること、すぐれた決断"
  },
  {
    "term": "機知",
    "reading": "きち",
    "meaning": "その場に応じて、とっさに適切な発言ができるような鋭い才知",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "その場に応じて、とっさに適切な発言ができるような鋭い才知"
  },
  {
    "term": "進取",
    "reading": "しんしゅ",
    "meaning": "みずから進んで物事に取り組むこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "みずから進んで物事に取り組むこと"
  },
  {
    "term": "謙遜",
    "reading": "けんそん",
    "meaning": "控えめな態度をとること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "控えめな態度をとること"
  },
  {
    "term": "悠長",
    "reading": "ゆうちょう",
    "meaning": "急がずのんびりしていること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "急がずのんびりしていること"
  },
  {
    "term": "強靭",
    "reading": "きょうじん",
    "meaning": "しなやかで強いこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "しなやかで強いこと"
  },
  {
    "term": "引見",
    "reading": "いんけん",
    "meaning": "目上の人が人を呼んで会うこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "目上の人が人を呼んで会うこと"
  },
  {
    "term": "膾炙",
    "reading": "かいしゃ",
    "meaning": "世間に広く知れ渡ること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "世間に広く知れ渡ること"
  },
  {
    "term": "卓見",
    "reading": "たっけん",
    "meaning": "優れた意見",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "優れた意見"
  },
  {
    "term": "大度",
    "reading": "たいど",
    "meaning": "度量が大きいこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "度量が大きいこと"
  },
  {
    "term": "融合",
    "reading": "ゆうごう",
    "meaning": "いくつかのものがとけ合って一つになること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "いくつかのものがとけ合って一つになること"
  },
  {
    "term": "跳梁",
    "reading": "ちょうりょう",
    "meaning": "悪者などが勝手にはね回ること、悪のはびこること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "悪者などが勝手にはね回ること、悪のはびこること"
  },
  {
    "term": "助勢",
    "reading": "じょせい",
    "meaning": "力を貸して助けること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "力を貸して助けること"
  },
  {
    "term": "邁進",
    "reading": "まいしん",
    "meaning": "ひるまず勢いよく進むこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ひるまず勢いよく進むこと"
  },
  {
    "term": "機軸",
    "reading": "きじく",
    "meaning": "物事の中心となる考えや仕組み",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事の中心となる考えや仕組み"
  },
  {
    "term": "嘆息",
    "reading": "たんそく",
    "meaning": "なげいてため息をつくこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "なげいてため息をつくこと"
  },
  {
    "term": "不肖",
    "reading": "ふしょう",
    "meaning": "未熟であること、自分をへりくだっていう語",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "未熟であること、自分をへりくだっていう語"
  },
  {
    "term": "慚愧",
    "reading": "ざんき",
    "meaning": "恥ずかしく思うこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "恥ずかしく思うこと"
  },
  {
    "term": "熱情",
    "reading": "ねつじょう",
    "meaning": "強く激しい情熱",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "強く激しい情熱"
  },
  {
    "term": "先陣",
    "reading": "せんじん",
    "meaning": "先頭に立って物事を進めること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "先頭に立って物事を進めること"
  },
  {
    "term": "躍動",
    "reading": "やくどう",
    "meaning": "生き生きと動くこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "生き生きと動くこと"
  },
  {
    "term": "執拗",
    "reading": "しつよう",
    "meaning": "しつこいこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "しつこいこと"
  },
  {
    "term": "円満",
    "reading": "えんまん",
    "meaning": "欠けたところがなく、穏やかなこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "欠けたところがなく、穏やかなこと"
  },
  {
    "term": "老獪",
    "reading": "ろうかい",
    "meaning": "経験を積んでいて悪賢いこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "経験を積んでいて悪賢いこと"
  },
  {
    "term": "迂遠",
    "reading": "うえん",
    "meaning": "回りくどく、すぐに役立たないこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "回りくどく、すぐに役立たないこと"
  },
  {
    "term": "道程",
    "reading": "どうてい",
    "meaning": "ある地点までの道のり、物事の過程",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ある地点までの道のり、物事の過程"
  },
  {
    "term": "倨傲",
    "reading": "きょごう",
    "meaning": "おごり高ぶっていること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "おごり高ぶっていること"
  },
  {
    "term": "感慨",
    "reading": "かんがい",
    "meaning": "心に深く感じること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "心に深く感じること"
  },
  {
    "term": "矢継ぎ早",
    "reading": "やつぎばや",
    "meaning": "次々と続けざまに行うこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "次々と続けざまに行うこと"
  },
  {
    "term": "精髄",
    "reading": "せいずい",
    "meaning": "物事の最も重要な部分",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事の最も重要な部分"
  },
  {
    "term": "健全",
    "reading": "けんぜん",
    "meaning": "心身や状態が正常でしっかりしていること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "心身や状態が正常でしっかりしていること"
  },
  {
    "term": "冗漫",
    "reading": "じょうまん",
    "meaning": "無駄が多く、まとまりがないこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "無駄が多く、まとまりがないこと"
  },
  {
    "term": "訴追",
    "reading": "そつい",
    "meaning": "法律上の手続きによって責任を追及すること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "法律上の手続きによって責任を追及すること"
  },
  {
    "term": "歌謡",
    "reading": "かよう",
    "meaning": "歌、または歌われる文芸",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "歌、または歌われる文芸"
  },
  {
    "term": "陰鬱",
    "reading": "いんうつ",
    "meaning": "暗く晴れ晴れしないこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "暗く晴れ晴れしないこと"
  },
  {
    "term": "拡充",
    "reading": "かくじゅう",
    "meaning": "広げて充実させること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "広げて充実させること"
  },
  {
    "term": "棄却",
    "reading": "ききゃく",
    "meaning": "取り上げずに退けること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "取り上げずに退けること"
  },
  {
    "term": "退去",
    "reading": "たいきょ",
    "meaning": "その場から立ち去ること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "その場から立ち去ること"
  },
  {
    "term": "開業",
    "reading": "かいぎょう",
    "meaning": "事業や商売を始めること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "事業や商売を始めること"
  },
  {
    "term": "清濁",
    "reading": "せいだく",
    "meaning": "善と悪、清いことと濁ったこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "善と悪、清いことと濁ったこと"
  },
  {
    "term": "詰責",
    "reading": "きっせき",
    "meaning": "問い詰めて責めること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "問い詰めて責めること"
  },
  {
    "term": "追跡",
    "reading": "ついせき",
    "meaning": "あとを追うこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "あとを追うこと"
  },
  {
    "term": "徒労",
    "reading": "とろう",
    "meaning": "無駄な骨折り",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "無駄な骨折り"
  },
  {
    "term": "加味",
    "reading": "かみ",
    "meaning": "ある要素を付け加えて考えること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ある要素を付け加えて考えること"
  },
  {
    "term": "識別",
    "reading": "しきべつ",
    "meaning": "見分けること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "見分けること"
  },
  {
    "term": "忠告",
    "reading": "ちゅうこく",
    "meaning": "相手のために注意を与えること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "相手のために注意を与えること"
  },
  {
    "term": "精進",
    "reading": "しょうじん",
    "meaning": "一つのことに励み努力すること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "一つのことに励み努力すること"
  },
  {
    "term": "披露",
    "reading": "ひろう",
    "meaning": "人に知らせたり見せたりすること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "人に知らせたり見せたりすること"
  },
  {
    "term": "墨守",
    "reading": "ぼくしゅ",
    "meaning": "古い考えや習慣を固く守ること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "古い考えや習慣を固く守ること"
  },
  {
    "term": "見劣り",
    "reading": "みおとり",
    "meaning": "他と比べて劣って見えること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "他と比べて劣って見えること"
  },
  {
    "term": "長夜",
    "reading": "ちょうや",
    "meaning": "長い夜、または眠れない夜",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "長い夜、または眠れない夜"
  },
  {
    "term": "渋面",
    "reading": "じゅうめん",
    "meaning": "不満そうな顔つき",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "不満そうな顔つき"
  },
  {
    "term": "繁迫",
    "reading": "はんぱく",
    "meaning": "差し迫って忙しいこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "差し迫って忙しいこと"
  },
  {
    "term": "険路",
    "reading": "けんろ",
    "meaning": "険しい道、困難な道",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "険しい道、困難な道"
  },
  {
    "term": "秋霜",
    "reading": "しゅうそう",
    "meaning": "厳しく冷たいもののたとえ",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "厳しく冷たいもののたとえ"
  },
  {
    "term": "相承",
    "reading": "そうしょう",
    "meaning": "受け継ぐこと",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "受け継ぐこと"
  },
  {
    "term": "雌雄",
    "reading": "しゆう",
    "meaning": "勝ち負け、優劣",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "勝ち負け、優劣"
  },
  {
    "term": "注進",
    "reading": "ちゅうしん",
    "meaning": "事件などを急いで知らせること",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "事件などを急いで知らせること"
  },
  {
    "term": "帰趨",
    "reading": "きすう",
    "meaning": "物事が最終的に落ち着くところ",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事が最終的に落ち着くところ"
  },
  {
    "term": "先鋭",
    "reading": "せんえい",
    "meaning": "考え方や主張が、他よりもはっきり強く尖っていること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "考え方や主張が、他よりもはっきり強く尖っていること。"
  },
  {
    "term": "措置",
    "reading": "そち",
    "meaning": "状況に応じて取る具体的な処置や対応。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "状況に応じて取る具体的な処置や対応。"
  },
  {
    "term": "俊敏",
    "reading": "しゅんびん",
    "meaning": "動きや判断がすばやく、機敏であること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "動きや判断がすばやく、機敏であること。"
  },
  {
    "term": "詳述",
    "reading": "しょうじゅつ",
    "meaning": "細かいところまで詳しく書いたり説明したりすること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "細かいところまで詳しく書いたり説明したりすること。"
  },
  {
    "term": "深慮",
    "reading": "しんりょ",
    "meaning": "浅く判断せず、深くよく考えること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "浅く判断せず、深くよく考えること。"
  },
  {
    "term": "精査",
    "reading": "せいさ",
    "meaning": "細かな点まで丁寧に調べ、正確に確かめること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "細かな点まで丁寧に調べ、正確に確かめること。"
  },
  {
    "term": "訴求",
    "reading": "そきゅう",
    "meaning": "相手の気持ちや関心に働きかけて、行動を促すこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "相手の気持ちや関心に働きかけて、行動を促すこと。"
  },
  {
    "term": "堆積",
    "reading": "たいせき",
    "meaning": "積み重なってたまること。知識や経験にも比喩的に使う。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "積み重なってたまること。知識や経験にも比喩的に使う。"
  },
  {
    "term": "担保",
    "reading": "たんぽ",
    "meaning": "ある結果や信用が確実に保たれるように支えること。金銭以外にも使う。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ある結果や信用が確実に保たれるように支えること。金銭以外にも使う。"
  },
  {
    "term": "沈静",
    "reading": "ちんせい",
    "meaning": "高まっていた感情や混乱が落ち着くこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "高まっていた感情や混乱が落ち着くこと。"
  },
  {
    "term": "陳腐",
    "reading": "ちんぷ",
    "meaning": "ありふれていて新しさがなく、古くさく感じられること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ありふれていて新しさがなく、古くさく感じられること。"
  },
  {
    "term": "抵触",
    "reading": "ていしょく",
    "meaning": "ルールや方針にぶつかって、合わなくなること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ルールや方針にぶつかって、合わなくなること。"
  },
  {
    "term": "内包",
    "reading": "ないほう",
    "meaning": "内側に含み持っていること。表面に出ていなくても中にあること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "内側に含み持っていること。表面に出ていなくても中にあること。"
  },
  {
    "term": "白眉",
    "reading": "はくび",
    "meaning": "多くの中でも特にすぐれているもののたとえ。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "多くの中でも特にすぐれているもののたとえ。"
  },
  {
    "term": "判然",
    "reading": "はんぜん",
    "meaning": "はっきりと区別でき、明らかであること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "はっきりと区別でき、明らかであること。"
  },
  {
    "term": "包摂",
    "reading": "ほうせつ",
    "meaning": "別々のものを、より大きな枠組みの中に含めること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "別々のものを、より大きな枠組みの中に含めること。"
  },
  {
    "term": "補完",
    "reading": "ほかん",
    "meaning": "足りない部分を補って、全体として成り立たせること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "足りない部分を補って、全体として成り立たせること。"
  },
  {
    "term": "明晰",
    "reading": "めいせき",
    "meaning": "考え方や説明が、はっきりしていて分かりやすいこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "考え方や説明が、はっきりしていて分かりやすいこと。"
  },
  {
    "term": "利便",
    "reading": "りべん",
    "meaning": "都合がよく、使いやすくて便利であること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "都合がよく、使いやすくて便利であること。"
  },
  {
    "term": "委嘱",
    "reading": "いしょく",
    "meaning": "ある仕事や役目を、正式に人に頼んで任せること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ある仕事や役目を、正式に人に頼んで任せること。"
  },
  {
    "term": "援用",
    "reading": "えんよう",
    "meaning": "自分の主張を裏づけるために、他の例や考え方を引いて使うこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "自分の主張を裏づけるために、他の例や考え方を引いて使うこと。"
  },
  {
    "term": "帰結",
    "reading": "きけつ",
    "meaning": "ある原因や流れの先に、最終的にたどり着く結果。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ある原因や流れの先に、最終的にたどり着く結果。"
  },
  {
    "term": "奇特",
    "reading": "きとく",
    "meaning": "行いが感心するほど立派で、めずらしいこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "行いが感心するほど立派で、めずらしいこと。"
  },
  {
    "term": "曲解",
    "reading": "きょっかい",
    "meaning": "本来の意味とは違う方向に、ねじ曲げて理解すること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "本来の意味とは違う方向に、ねじ曲げて理解すること。"
  },
  {
    "term": "苦慮",
    "reading": "くりょ",
    "meaning": "どうすればよいか分からず、苦しみながら考えること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "どうすればよいか分からず、苦しみながら考えること。"
  },
  {
    "term": "建前",
    "reading": "たてまえ",
    "meaning": "表向きに示す理由や考え。本音とは異なる場合がある。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "表向きに示す理由や考え。本音とは異なる場合がある。"
  },
  {
    "term": "踏襲",
    "reading": "とうしゅう",
    "meaning": "今までのやり方や考え方を、そのまま受け継いで続けること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "今までのやり方や考え方を、そのまま受け継いで続けること。"
  },
  {
    "term": "特筆",
    "reading": "とくひつ",
    "meaning": "特に取り上げて書く価値があるほど、目立っていること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "特に取り上げて書く価値があるほど、目立っていること。"
  },
  {
    "term": "難色",
    "reading": "なんしょく",
    "meaning": "気が進まない様子を示し、賛成しにくい気持ちを表すこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "気が進まない様子を示し、賛成しにくい気持ちを表すこと。"
  },
  {
    "term": "破綻",
    "reading": "はたん",
    "meaning": "まとまりや仕組みが成り立たなくなり、うまくいかなくなること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "まとまりや仕組みが成り立たなくなり、うまくいかなくなること。"
  },
  {
    "term": "汎用",
    "reading": "はんよう",
    "meaning": "一つの場面だけでなく、広い用途に使えること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "一つの場面だけでなく、広い用途に使えること。"
  },
  {
    "term": "逼迫",
    "reading": "ひっぱく",
    "meaning": "余裕がなくなり、差し迫った苦しい状態になること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "余裕がなくなり、差し迫った苦しい状態になること。"
  },
  {
    "term": "付随",
    "reading": "ふずい",
    "meaning": "主となるものに伴って、自然についてくること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "主となるものに伴って、自然についてくること。"
  },
  {
    "term": "本懐",
    "reading": "ほんかい",
    "meaning": "長く願っていたことがかなって、満足できる本当の望み。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "長く願っていたことがかなって、満足できる本当の望み。"
  },
  {
    "term": "慢心",
    "reading": "まんしん",
    "meaning": "自分に実力があると思い込み、気がゆるんでしまうこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "自分に実力があると思い込み、気がゆるんでしまうこと。"
  },
  {
    "term": "有終",
    "reading": "ゆうしゅう",
    "meaning": "物事を最後まで立派にやり通して終えること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事を最後まで立派にやり通して終えること。"
  },
  {
    "term": "猶予",
    "reading": "ゆうよ",
    "meaning": "すぐには決めず、しばらく待ったり先に延ばしたりする時間。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "すぐには決めず、しばらく待ったり先に延ばしたりする時間。"
  },
  {
    "term": "抑止",
    "reading": "よくし",
    "meaning": "よくない行動が起きないように、前もって食い止めること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "よくない行動が起きないように、前もって食い止めること。"
  },
  {
    "term": "離反",
    "reading": "りはん",
    "meaning": "それまで従っていた側から離れて、反対側に回ること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "それまで従っていた側から離れて、反対側に回ること。"
  },
  {
    "term": "漏洩",
    "reading": "ろうえい",
    "meaning": "秘密や情報が外へ漏れること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "秘密や情報が外へ漏れること。"
  },
  {
    "term": "廉価",
    "reading": "れんか",
    "meaning": "値段が安いこと。ただし「安っぽい」という意味ではない。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "値段が安いこと。ただし「安っぽい」という意味ではない。"
  },
  {
    "term": "流転",
    "reading": "るてん",
    "meaning": "一箇所にとどまらず移り変わること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "一箇所にとどまらず移り変わること。"
  },
  {
    "term": "不憫",
    "reading": "ふびん",
    "meaning": "可哀想で哀れむべき様子。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "可哀想で哀れむべき様子。"
  },
  {
    "term": "吐露",
    "reading": "とろ",
    "meaning": "心のうちを包み隠さず言葉に出すこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "心のうちを包み隠さず言葉に出すこと。"
  },
  {
    "term": "呵責",
    "reading": "かしゃく",
    "meaning": "厳しく責めること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "厳しく責めること。"
  },
  {
    "term": "反目",
    "reading": "はんもく",
    "meaning": "仲が悪く互いに対立し合うこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "仲が悪く互いに対立し合うこと。"
  },
  {
    "term": "困憊",
    "reading": "こんぱい",
    "meaning": "疲れ果てて、エネルギーが尽きること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "疲れ果てて、エネルギーが尽きること。"
  },
  {
    "term": "具に",
    "reading": "つぶさに",
    "meaning": "細かく、詳細に。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "細かく、詳細に。"
  },
  {
    "term": "悠然",
    "reading": "ゆうぜん",
    "meaning": "ゆったりと構えて落ち着いている様子。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ゆったりと構えて落ち着いている様子。"
  },
  {
    "term": "資する",
    "reading": "しする",
    "meaning": "何かの役に立つこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "何かの役に立つこと。"
  },
  {
    "term": "与する",
    "reading": "くみする",
    "meaning": "仲間になること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "仲間になること。"
  },
  {
    "term": "再三",
    "reading": "さいさん",
    "meaning": "たびたび。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "たびたび。"
  },
  {
    "term": "在野",
    "reading": "ざいや",
    "meaning": "公職ではなく、民間にいること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "公職ではなく、民間にいること。"
  },
  {
    "term": "甘受",
    "reading": "かんじゅ",
    "meaning": "甘んじて受け入れること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "甘んじて受け入れること。"
  },
  {
    "term": "皮相",
    "reading": "ひそう",
    "meaning": "うわっつら。表面だけであること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "うわっつら。表面だけであること。"
  },
  {
    "term": "潮時",
    "reading": "しおどき",
    "meaning": "物事をするのにちょうどよいタイミング。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事をするのにちょうどよいタイミング。"
  },
  {
    "term": "凱旋",
    "reading": "がいせん",
    "meaning": "戦いに勝って意気揚々と帰ること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "戦いに勝って意気揚々と帰ること。"
  },
  {
    "term": "議見",
    "reading": "ぎけん",
    "meaning": "物事に対する意見や見解。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事に対する意見や見解。"
  },
  {
    "term": "過分",
    "reading": "かぶん",
    "meaning": "自分の身分や能力以上であること。身に余ること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "自分の身分や能力以上であること。身に余ること。"
  },
  {
    "term": "更迭",
    "reading": "こうてつ",
    "meaning": "職や地位についている人を替えること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "職や地位についている人を替えること。"
  },
  {
    "term": "昵懇",
    "reading": "じっこん",
    "meaning": "親しくつきあう間柄。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "親しくつきあう間柄。"
  },
  {
    "term": "慟哭",
    "reading": "どうこく",
    "meaning": "声をあげて激しく泣くこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "声をあげて激しく泣くこと。"
  },
  {
    "term": "器量",
    "reading": "きりょう",
    "meaning": "物の役に立つべき才能と徳。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物の役に立つべき才能と徳。"
  },
  {
    "term": "感服",
    "reading": "かんぷく",
    "meaning": "深く感心して尊敬の気持ちを抱くこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "深く感心して尊敬の気持ちを抱くこと。"
  },
  {
    "term": "背反",
    "reading": "はいはん",
    "meaning": "道理に背くこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "道理に背くこと。"
  },
  {
    "term": "寡少",
    "reading": "かしょう",
    "meaning": "非常に少ないこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "非常に少ないこと。"
  },
  {
    "term": "落伍",
    "reading": "らくご",
    "meaning": "集団から遅れてついていけなくなること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "集団から遅れてついていけなくなること。"
  },
  {
    "term": "殊勝",
    "reading": "しゅしょう",
    "meaning": "心がけや行動が感心なさま。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "心がけや行動が感心なさま。"
  },
  {
    "term": "変節",
    "reading": "へんせつ",
    "meaning": "それまでの主義や信念を変えること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "それまでの主義や信念を変えること。"
  },
  {
    "term": "奸智",
    "reading": "かんち",
    "meaning": "ずる賢い知恵。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ずる賢い知恵。"
  },
  {
    "term": "健気",
    "reading": "けなげ",
    "meaning": "心がけや態度がしっかりしている様子。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "心がけや態度がしっかりしている様子。"
  },
  {
    "term": "傀儡",
    "reading": "かいらい",
    "meaning": "操り人形、人の手先で使われる人。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "操り人形、人の手先で使われる人。"
  },
  {
    "term": "汗顔",
    "reading": "かんがん",
    "meaning": "恥じて顔に汗をかくこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "恥じて顔に汗をかくこと。"
  },
  {
    "term": "金言",
    "reading": "きんげん",
    "meaning": "模範となるような優れた格言。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "模範となるような優れた格言。"
  },
  {
    "term": "達観",
    "reading": "たっかん",
    "meaning": "物事の本質を見通すこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事の本質を見通すこと。"
  },
  {
    "term": "新鋭",
    "reading": "しんえい",
    "meaning": "新しく現れてきて勢いが鋭いこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "新しく現れてきて勢いが鋭いこと。"
  },
  {
    "term": "沿革",
    "reading": "えんかく",
    "meaning": "物事の移り変わり。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事の移り変わり。"
  },
  {
    "term": "多寡",
    "reading": "たか",
    "meaning": "多いことと少ないこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "多いことと少ないこと。"
  },
  {
    "term": "閑談",
    "reading": "かんだん",
    "meaning": "ひまつぶしのむだばなし。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ひまつぶしのむだばなし。"
  },
  {
    "term": "招聘",
    "reading": "しょうへい",
    "meaning": "人を丁重な態度で招くこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "人を丁重な態度で招くこと。"
  },
  {
    "term": "邪険",
    "reading": "じゃけん",
    "meaning": "意地悪く無慈悲で荒々しいこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "意地悪く無慈悲で荒々しいこと。"
  },
  {
    "term": "酩酊",
    "reading": "めいてい",
    "meaning": "ひどく酒に酔うこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ひどく酒に酔うこと。"
  },
  {
    "term": "諧謔",
    "reading": "かいぎゃく",
    "meaning": "面白い気のきいた冗談。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "面白い気のきいた冗談。"
  },
  {
    "term": "誹謗",
    "reading": "ひぼう",
    "meaning": "そしること。悪口を言うこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "そしること。悪口を言うこと。"
  },
  {
    "term": "眺望",
    "reading": "ちょうぼう",
    "meaning": "ながめ。見晴らし。広く遠くまで見晴らすこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ながめ。見晴らし。広く遠くまで見晴らすこと。"
  },
  {
    "term": "見識",
    "reading": "けんしき",
    "meaning": "物事について鋭い判断をもち、それに基づいて立てた、すぐれた考え・意見。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事について鋭い判断をもち、それに基づいて立てた、すぐれた考え・意見。"
  },
  {
    "term": "輻輳",
    "reading": "ふくそう",
    "meaning": "いろいろなものが同じ箇所に集中して混雑する状況のこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "いろいろなものが同じ箇所に集中して混雑する状況のこと。"
  },
  {
    "term": "ぞんざい",
    "reading": "ぞんざい",
    "meaning": "投げやりで乱暴なこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "投げやりで乱暴なこと。"
  },
  {
    "term": "後逸",
    "reading": "こういつ",
    "meaning": "球を受けそこなって後ろにのがすこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "球を受けそこなって後ろにのがすこと。"
  },
  {
    "term": "禍根",
    "reading": "かこん",
    "meaning": "わざわいの起こるおおもと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "わざわいの起こるおおもと。"
  },
  {
    "term": "凶兆",
    "reading": "きょうちょう",
    "meaning": "不吉な前兆。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "不吉な前兆。"
  },
  {
    "term": "災厄",
    "reading": "さいやく",
    "meaning": "わざわい。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "わざわい。"
  },
  {
    "term": "難儀",
    "reading": "なんぎ",
    "meaning": "困難。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "困難。"
  },
  {
    "term": "不吉",
    "reading": "ふきつ",
    "meaning": "縁起が悪いこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "縁起が悪いこと。"
  },
  {
    "term": "大勢",
    "reading": "たいせい",
    "meaning": "物事の大筋となる形勢。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事の大筋となる形勢。"
  },
  {
    "term": "情勢",
    "reading": "じょうせい",
    "meaning": "物事の事情やなりゆき。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事の事情やなりゆき。"
  },
  {
    "term": "大局",
    "reading": "たいきょく",
    "meaning": "全体を見渡した場合の状況。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "全体を見渡した場合の状況。"
  },
  {
    "term": "心酔",
    "reading": "しんすい",
    "meaning": "心から慕って感心すること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "心から慕って感心すること。"
  },
  {
    "term": "瓦解",
    "reading": "がかい",
    "meaning": "一部から全体が壊れること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "一部から全体が壊れること。"
  },
  {
    "term": "鼓吹",
    "reading": "こすい",
    "meaning": "意見を主張し、相手に吹き込むこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "意見を主張し、相手に吹き込むこと。"
  },
  {
    "term": "転機",
    "reading": "てんき",
    "meaning": "人生や物事の流れが大きく変わるきっかけとなる出来事。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "人生や物事の流れが大きく変わるきっかけとなる出来事。"
  },
  {
    "term": "徹底",
    "reading": "てってい",
    "meaning": "中途半端にせず、細部までしっかりやり切ること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "中途半端にせず、細部までしっかりやり切ること。"
  },
  {
    "term": "同調",
    "reading": "どうちょう",
    "meaning": "自分の意見や態度を、周囲の考えに合わせること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "自分の意見や態度を、周囲の考えに合わせること。"
  },
  {
    "term": "内在",
    "reading": "ないざい",
    "meaning": "外から加わるのではなく、もともと内側に含まれていること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "外から加わるのではなく、もともと内側に含まれていること。"
  },
  {
    "term": "難解",
    "reading": "なんかい",
    "meaning": "内容が複雑で、理解するのが難しいこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "内容が複雑で、理解するのが難しいこと。"
  },
  {
    "term": "把持",
    "reading": "はじ",
    "meaning": "物や状態をしっかり保ち続けること。単に持つより硬い表現。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物や状態をしっかり保ち続けること。単に持つより硬い表現。"
  },
  {
    "term": "排他",
    "reading": "はいた",
    "meaning": "自分以外のものを受け入れず、外へしめ出すこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "自分以外のものを受け入れず、外へしめ出すこと。"
  },
  {
    "term": "反復",
    "reading": "はんぷく",
    "meaning": "同じことを何度も繰り返すこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "同じことを何度も繰り返すこと。"
  },
  {
    "term": "比重",
    "reading": "ひじゅう",
    "meaning": "全体の中で、どれくらい重要な割合を占めるか。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "全体の中で、どれくらい重要な割合を占めるか。"
  },
  {
    "term": "付加",
    "reading": "ふか",
    "meaning": "もともとあるものに、新しい価値や機能を付け加えること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "もともとあるものに、新しい価値や機能を付け加えること。"
  },
  {
    "term": "普及",
    "reading": "ふきゅう",
    "meaning": "新しい考え方や商品などが、広く世の中に行き渡ること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "新しい考え方や商品などが、広く世の中に行き渡ること。"
  },
  {
    "term": "分岐",
    "reading": "ぶんき",
    "meaning": "一つの流れや道筋が、複数の方向に分かれること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "一つの流れや道筋が、複数の方向に分かれること。"
  },
  {
    "term": "補助",
    "reading": "ほじょ",
    "meaning": "中心となるものを助け、足りない部分を支えること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "中心となるものを助け、足りない部分を支えること。"
  },
  {
    "term": "本来",
    "reading": "ほんらい",
    "meaning": "もともとの性質やあるべき姿。今の状態と比べる時にも使う。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "もともとの性質やあるべき姿。今の状態と比べる時にも使う。"
  },
  {
    "term": "無為",
    "reading": "むい",
    "meaning": "何もしないこと。成果につながる行動を取らない状態。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "何もしないこと。成果につながる行動を取らない状態。"
  },
  {
    "term": "明瞭",
    "reading": "めいりょう",
    "meaning": "内容や意味がはっきりしていて、分かりやすいこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "内容や意味がはっきりしていて、分かりやすいこと。"
  },
  {
    "term": "誘導",
    "reading": "ゆうどう",
    "meaning": "相手をある方向へ導くこと。意図的に行動させる場合にも使う。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "相手をある方向へ導くこと。意図的に行動させる場合にも使う。"
  },
  {
    "term": "有益",
    "reading": "ゆうえき",
    "meaning": "役に立ち、良い結果につながること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "役に立ち、良い結果につながること。"
  },
  {
    "term": "要素",
    "reading": "ようそ",
    "meaning": "物事を成り立たせている一つ一つの部分。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事を成り立たせている一つ一つの部分。"
  },
  {
    "term": "抑圧",
    "reading": "よくあつ",
    "meaning": "力で押さえつけ、自由な行動や感情を出しにくくすること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "力で押さえつけ、自由な行動や感情を出しにくくすること。"
  },
  {
    "term": "利害",
    "reading": "りがい",
    "meaning": "利益と損失のこと。人や組織の立場の違いを表す時に使う。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "利益と損失のこと。人や組織の立場の違いを表す時に使う。"
  },
  {
    "term": "流動",
    "reading": "りゅうどう",
    "meaning": "状態が固定されず、変わりやすいこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "状態が固定されず、変わりやすいこと。"
  },
  {
    "term": "類推",
    "reading": "るいすい",
    "meaning": "似ているものを手がかりにして、別のことを推測すること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "似ているものを手がかりにして、別のことを推測すること。"
  },
  {
    "term": "連動",
    "reading": "れんどう",
    "meaning": "一つの動きに合わせて、別のものもつながって動くこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "一つの動きに合わせて、別のものもつながって動くこと。"
  },
  {
    "term": "論拠",
    "reading": "ろんきょ",
    "meaning": "自分の主張を支える理由や証拠。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "自分の主張を支える理由や証拠。"
  },
  {
    "term": "逸失",
    "reading": "いっしつ",
    "meaning": "得られるはずだった利益や機会を失うこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "得られるはずだった利益や機会を失うこと。"
  },
  {
    "term": "精度",
    "reading": "せいど",
    "meaning": "結果や測定がどれだけ正確かを表す度合い。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "結果や測定がどれだけ正確かを表す度合い。"
  },
  {
    "term": "即応",
    "reading": "そくおう",
    "meaning": "状況の変化に対して、すぐに対応すること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "状況の変化に対して、すぐに対応すること。"
  },
  {
    "term": "確証",
    "reading": "かくしょう",
    "meaning": "間違いないと判断できる、はっきりした証拠。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "間違いないと判断できる、はっきりした証拠。"
  },
  {
    "term": "異論",
    "reading": "いろん",
    "meaning": "他の人と違う意見や反対の考え。単なる感想ではなく、主張の違いを指す。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "他の人と違う意見や反対の考え。単なる感想ではなく、主張の違いを指す。"
  },
  {
    "term": "一掃",
    "reading": "いっそう",
    "meaning": "不要なものや悪い状態を、まとめてすべて取り除くこと。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "不要なものや悪い状態を、まとめてすべて取り除くこと。"
  },
  {
    "term": "逸話",
    "reading": "いつわ",
    "meaning": "その人や物事の特徴がよく表れた、興味深い短い話。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "その人や物事の特徴がよく表れた、興味深い短い話。"
  },
  {
    "term": "営為",
    "reading": "えいい",
    "meaning": "人が目的を持って続ける行いや活動。仕事や生活の行動にも使う。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "人が目的を持って続ける行いや活動。仕事や生活の行動にも使う。"
  },
  {
    "term": "遠隔",
    "reading": "えんかく",
    "meaning": "場所が離れていること。直接会わず、離れた場所から行う場合に使う。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "場所が離れていること。直接会わず、離れた場所から行う場合に使う。"
  },
  {
    "term": "概念",
    "reading": "がいねん",
    "meaning": "物事を大きくとらえるための考え方や意味のまとまり。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事を大きくとらえるための考え方や意味のまとまり。"
  },
  {
    "term": "慣例",
    "reading": "かんれい",
    "meaning": "明確な決まりではないが、昔から続いているやり方や習慣。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "明確な決まりではないが、昔から続いているやり方や習慣。"
  },
  {
    "term": "起点",
    "reading": "きてん",
    "meaning": "物事が始まる場所やタイミング。考え方の出発点にも使う。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事が始まる場所やタイミング。考え方の出発点にも使う。"
  },
  {
    "term": "機転",
    "reading": "きてん",
    "meaning": "その場の状況をすぐ判断し、うまく対応する力。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "その場の状況をすぐ判断し、うまく対応する力。"
  },
  {
    "term": "契機",
    "reading": "けいき",
    "meaning": "物事が始まったり変化したりするきっかけ。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事が始まったり変化したりするきっかけ。"
  },
  {
    "term": "見解",
    "reading": "けんかい",
    "meaning": "ある物事に対する考え方や判断。意見より少し改まった表現。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "ある物事に対する考え方や判断。意見より少し改まった表現。"
  },
  {
    "term": "効率",
    "reading": "こうりつ",
    "meaning": "少ない時間や労力で、どれだけ成果を出せるかという度合い。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "少ない時間や労力で、どれだけ成果を出せるかという度合い。"
  },
  {
    "term": "拘束",
    "reading": "こうそく",
    "meaning": "行動や自由を制限すること。ルールや条件に縛られる場合にも使う。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "行動や自由を制限すること。ルールや条件に縛られる場合にも使う。"
  },
  {
    "term": "根底",
    "reading": "こんてい",
    "meaning": "物事を支えている最も基本的な部分。表面ではなく土台の考え。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "物事を支えている最も基本的な部分。表面ではなく土台の考え。"
  },
  {
    "term": "指標",
    "reading": "しひょう",
    "meaning": "判断や評価をするための目安となる数値や基準。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "判断や評価をするための目安となる数値や基準。"
  },
  {
    "term": "主張",
    "reading": "しゅちょう",
    "meaning": "自分の考えを、理由を持ってはっきり述べること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "自分の考えを、理由を持ってはっきり述べること。"
  },
  {
    "term": "制約",
    "reading": "せいやく",
    "meaning": "自由にできる範囲を狭める条件や決まり。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "自由にできる範囲を狭める条件や決まり。"
  },
  {
    "term": "総括",
    "reading": "そうかつ",
    "meaning": "全体を振り返ってまとめること。反省や評価を含むこともある。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "全体を振り返ってまとめること。反省や評価を含むこともある。"
  },
  {
    "term": "相関",
    "reading": "そうかん",
    "meaning": "二つの物事が互いに関係して変化すること。原因とは限らない。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "二つの物事が互いに関係して変化すること。原因とは限らない。"
  },
  {
    "term": "定義",
    "reading": "ていぎ",
    "meaning": "言葉や物事の意味を、はっきり決めて説明すること。",
    "category": "Excel語句リスト",
    "difficulty": "標準",
    "note": "言葉や物事の意味を、はっきり決めて説明すること。"
  },
  {
    "term": "拘泥",
    "meaning": "「固執」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "拘泥は、必要以上にこだわること。"
  },
  {
    "term": "稀有",
    "meaning": "「希少」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "稀有は、めったにないこと。"
  },
  {
    "term": "静謐",
    "meaning": "「閑静」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "静謐は、静かで落ち着いていること。"
  },
  {
    "term": "逓減",
    "meaning": "「漸減」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "逓減は、次第に減っていくこと。"
  },
  {
    "term": "俯瞰",
    "meaning": "「概観」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "俯瞰は、高い視点から全体を見渡すこと。"
  },
  {
    "term": "狡猾",
    "meaning": "「老獪」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "狡猾は、ずるく悪賢いこと。"
  },
  {
    "term": "瑕疵",
    "meaning": "「欠陥」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "瑕疵は、欠点や欠陥のこと。"
  },
  {
    "term": "嚆矢",
    "meaning": "「先駆」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "嚆矢は、物事の始まりや先駆けのこと。"
  },
  {
    "term": "醸成",
    "meaning": "「形成」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "醸成は、気運や雰囲気を徐々に作り出すこと。"
  },
  {
    "term": "独善",
    "meaning": "「独りよがり」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "独善は、自分だけが正しいと思い込むこと。"
  },
  {
    "term": "夭折",
    "meaning": "「早世」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "夭折は、若くして亡くなること。"
  },
  {
    "term": "雄弁",
    "meaning": "「能弁」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "雄弁は、説得力をもってよく話すこと。"
  },
  {
    "term": "罷免",
    "meaning": "「解任」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "罷免は、職をやめさせること。"
  },
  {
    "term": "連綿",
    "meaning": "「継続」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "連綿は、長く続いて絶えないこと。"
  },
  {
    "term": "葛藤",
    "meaning": "「相克」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "葛藤は、対立する感情や力がせめぎ合うこと。"
  },
  {
    "term": "進捗",
    "meaning": "「進展」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "進捗は、物事が進みはかどること。"
  },
  {
    "term": "論駁",
    "meaning": "「反駁」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "論駁は、相手の論を論じて退けること。"
  },
  {
    "term": "折衝",
    "meaning": "「交渉」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "折衝は、利害が異なる相手と話し合って調整すること。"
  },
  {
    "term": "所与",
    "meaning": "「前提」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "所与は、あらかじめ与えられているもの。"
  },
  {
    "term": "散逸",
    "meaning": "「消散」とほぼ同じ意味",
    "category": "外部データ・同意語",
    "difficulty": "標準",
    "note": "散逸は、まとまっていたものが散ってなくなること。"
  },
  {
    "term": "恣意的",
    "meaning": "「客観的」と反対の意味",
    "category": "外部データ・反意語",
    "difficulty": "標準",
    "note": "恣意的は自分勝手な判断に基づくこと。反対は客観的。"
  },
  {
    "term": "明示",
    "meaning": "「暗示」と反対の意味",
    "category": "外部データ・反意語",
    "difficulty": "標準",
    "note": "明示ははっきり示すこと。反対はそれとなく示す暗示。"
  },
  {
    "term": "先天",
    "meaning": "「後天」と反対の意味",
    "category": "外部データ・反意語",
    "difficulty": "標準",
    "note": "先天は生まれつき。反対は生後に身につく後天。"
  },
  {
    "term": "過剰",
    "meaning": "「不足」と反対の意味",
    "category": "外部データ・反意語",
    "difficulty": "標準",
    "note": "過剰の反対は、足りないことを表す不足。"
  },
  {
    "term": "沈滞",
    "meaning": "「活況」と反対の意味",
    "category": "外部データ・反意語",
    "difficulty": "標準",
    "note": "沈滞は活気がなく滞ること。反対は活況。"
  },
  {
    "term": "融和",
    "meaning": "「対立」と反対の意味",
    "category": "外部データ・反意語",
    "difficulty": "標準",
    "note": "融和はとけ合って和むこと。反対は対立。"
  },
  {
    "term": "謙抑",
    "meaning": "「尊大」と反対の意味",
    "category": "外部データ・反意語",
    "difficulty": "標準",
    "note": "謙抑は控えめなこと。反対は偉そうな尊大。"
  },
  {
    "term": "単純",
    "meaning": "「複雑」と反対の意味",
    "category": "外部データ・反意語",
    "difficulty": "標準",
    "note": "単純の反対は、入り組んでいる複雑。"
  },
  {
    "term": "専制",
    "meaning": "「民主」と反対の意味",
    "category": "外部データ・反意語",
    "difficulty": "標準",
    "note": "専制は支配者が独断で行う政治。反対は民主。"
  },
  {
    "term": "妥結",
    "meaning": "話し合いがまとまること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "妥結は、互いに譲り合って話がまとまること。"
  },
  {
    "term": "形骸化",
    "meaning": "実質が失われ形だけになること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "形骸化は、中身や実質が失われ形だけになること。"
  },
  {
    "term": "相殺",
    "meaning": "差し引いて帳消しにすること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "相殺は、互いの損得を差し引いて消すこと。"
  },
  {
    "term": "瀬戸際",
    "meaning": "成否や安危の分かれ目",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "瀬戸際は、事態が決まるぎりぎりの分かれ目。"
  },
  {
    "term": "帰納",
    "meaning": "個別の事実から一般的な結論を導くこと",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "帰納は、具体例から一般的な法則を導く考え方。"
  },
  {
    "term": "蓋然性",
    "meaning": "ある事柄が起こりそうな見込み",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "蓋然性は、確実ではないが起こりそうな可能性の高さ。"
  },
  {
    "term": "牽制",
    "meaning": "相手の動きを抑えるため警戒させること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "牽制は、相手が自由に動けないように警戒させること。"
  },
  {
    "term": "媒介",
    "meaning": "二つのものの間に立って関係を取り持つこと",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "媒介は、間に入って関係を成立させること。"
  },
  {
    "term": "統轄",
    "meaning": "全体をまとめて管轄すること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "統轄は、全体を一つにまとめて管理すること。"
  },
  {
    "term": "誘因",
    "meaning": "ある行動や結果を引き起こす要因",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "誘因は、物事を引き起こすきっかけや原因。"
  },
  {
    "term": "堪能",
    "meaning": "技芸などに優れていること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "堪能は、技芸や学問などに熟達していること。"
  },
  {
    "term": "需要 : 供給",
    "meaning": "同じ関係になる組み合わせは「権利 : 義務」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "需要と供給は対になる概念。権利と義務も対になる概念です。"
  },
  {
    "term": "序論 : 結論",
    "meaning": "同じ関係になる組み合わせは「入口 : 出口」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "序論と結論は始まりと終わり。入口と出口も対応します。"
  },
  {
    "term": "予防 : 発病",
    "meaning": "同じ関係になる組み合わせは「防火 : 火災」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "予防は発病を防ぐこと。防火は火災を防ぐことです。"
  },
  {
    "term": "編集 : 原稿",
    "meaning": "同じ関係になる組み合わせは「校正 : 誤字」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "編集は原稿を整える作業。校正は誤字を正す作業です。"
  },
  {
    "term": "水 : 液体",
    "meaning": "同じ関係になる組み合わせは「鉄 : 金属」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "水は液体の一種。鉄は金属の一種です。"
  },
  {
    "term": "耳 : 聴覚",
    "meaning": "同じ関係になる組み合わせは「舌 : 味覚」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "耳は聴覚に関わる器官。舌は味覚に関わる器官です。"
  },
  {
    "term": "酸素 : 呼吸",
    "meaning": "同じ関係になる組み合わせは「燃料 : 燃焼」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "酸素は呼吸に必要。燃料は燃焼に必要です。"
  },
  {
    "term": "鍵 : 扉",
    "meaning": "同じ関係になる組み合わせは「暗証番号 : 金庫」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "鍵で扉を開ける。暗証番号で金庫を開けます。"
  },
  {
    "term": "脚本 : 映画",
    "meaning": "同じ関係になる組み合わせは「設計図 : 建物」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "脚本をもとに映画を作る。設計図をもとに建物を作ります。"
  },
  {
    "term": "裁判官 : 判決",
    "meaning": "同じ関係になる組み合わせは「医師 : 診断」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "裁判官が下すものは判決。医師が下すものは診断です。"
  },
  {
    "term": "種子 : 発芽",
    "meaning": "同じ関係になる組み合わせは「卵 : 孵化」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "種子が発芽する。卵が孵化します。"
  },
  {
    "term": "辞書 : 語義",
    "meaning": "同じ関係になる組み合わせは「地図 : 位置」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "辞書で語義を調べる。地図で位置を調べます。"
  },
  {
    "term": "仮説 : 検証",
    "meaning": "同じ関係になる組み合わせは「計画 : 実行」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "仮説は検証されるもの。計画は実行されるものです。"
  },
  {
    "term": "概念 : 具体例",
    "meaning": "同じ関係になる組み合わせは「法則 : 事例」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "概念は具体例で示せる。法則は事例で示せます。"
  },
  {
    "term": "推敲 : 文章",
    "meaning": "同じ関係になる組み合わせは「校閲 : 原稿」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "推敲は文章を練り直すこと。校閲は原稿を確認し正すことです。"
  },
  {
    "term": "蒸発 : 液体",
    "meaning": "同じ関係になる組み合わせは「昇華 : 固体」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "蒸発は液体が気体になること。昇華は固体が気体になることです。"
  },
  {
    "term": "過失 : 責任",
    "meaning": "同じ関係になる組み合わせは「功績 : 評価」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "過失は責任につながる。功績は評価につながります。"
  },
  {
    "term": "目的 : 手段",
    "meaning": "同じ関係になる組み合わせは「理念 : 施策」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "目的を達するために手段がある。理念を実現するために施策があります。"
  },
  {
    "term": "医薬品 : 治療",
    "meaning": "同じ関係になる組み合わせは「肥料 : 栽培」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "医薬品は治療に用いる。肥料は栽培に用います。"
  },
  {
    "term": "憲法 : 法律",
    "meaning": "同じ関係になる組み合わせは「基本方針 : 個別施策」",
    "category": "外部データ・二語関係",
    "difficulty": "標準",
    "note": "憲法は法律の上位にある基本規範。基本方針は個別施策の上位方針です。"
  },
  {
    "term": "確執",
    "meaning": "互いに譲らず対立すること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "確執は、意見や感情が合わず対立が続くこと。"
  },
  {
    "term": "具申",
    "meaning": "上位者に意見や事情を詳しく申し述べること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "具申は、上司などに具体的に意見を述べること。"
  },
  {
    "term": "奔放",
    "meaning": "世間の型にとらわれず自由に振る舞うこと",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "奔放は、制約にとらわれず自由なさま。"
  },
  {
    "term": "追随",
    "meaning": "人の後について従うこと",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "追随は、他人の後について従うこと。"
  },
  {
    "term": "凌駕",
    "meaning": "他を上回ること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "凌駕は、他より優れて上回ること。"
  },
  {
    "term": "拙劣",
    "meaning": "出来が悪く巧みでないこと",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "拙劣は、技術や出来が劣っていること。"
  },
  {
    "term": "厭世",
    "meaning": "世の中を嫌なものとして悲観すること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "厭世は、世の中を嫌い悲観する考え方。"
  },
  {
    "term": "諫言",
    "meaning": "目上の人の過ちをいさめること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "諫言は、上位者に対して過ちを改めるよう忠告すること。"
  },
  {
    "term": "慰撫",
    "meaning": "なぐさめて不安や不満をしずめること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "慰撫は、なぐさめて心を落ち着かせること。"
  },
  {
    "term": "懲戒",
    "meaning": "不正や違反をこらしめるため処分すること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "懲戒は、規律違反などを戒める処分。"
  },
  {
    "term": "失墜",
    "meaning": "名誉や信用などが落ちること",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "失墜は、評判や信用が低下すること。"
  },
  {
    "term": "粛然",
    "meaning": "静まりかえって厳かなさま",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "粛然は、静かでおごそかな様子。"
  },
  {
    "term": "窮余",
    "meaning": "追い詰められて他に方法がない状態",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "窮余は、困り果てた末という意味で使われます。"
  },
  {
    "term": "濫觴",
    "meaning": "物事の始まり",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "濫觴は、物事の起こりや始まり。"
  },
  {
    "term": "沈潜",
    "meaning": "表に出ず深く打ち込むこと",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "沈潜は、内面や一つの物事に深く入り込むこと。"
  },
  {
    "term": "随想",
    "meaning": "折々に感じたことを書いた文章",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "随想は、気ままに思ったことを書いた文章。"
  },
  {
    "term": "機微",
    "meaning": "表面からは分かりにくい微妙な事情や心の動き",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "機微は、微妙な事情や心の動き。"
  },
  {
    "term": "論旨",
    "meaning": "議論や文章の中心となる筋道",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "論旨は、論の趣旨や筋道。"
  },
  {
    "term": "審美",
    "meaning": "美しさを見分け味わうこと",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "審美は、美を判断し味わうこと。"
  },
  {
    "term": "傍証",
    "meaning": "間接的に事実を支える証拠",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "傍証は、直接ではないが事実を支える証拠。"
  },
  {
    "term": "含蓄",
    "meaning": "表面に出ない深い意味や味わい",
    "category": "外部データ・語句",
    "difficulty": "標準",
    "note": "含蓄は、奥深い意味や味わいを含んでいること。"
  }
];

const IDIOM_QUESTIONS = [
  {
    "term": "豪遊",
    "reading": "ごうゆう",
    "meaning": "惜しげもなく金を使って派手に遊ぶこと",
    "category": "熟語",
    "difficulty": "標準",
    "note": "豪は勢いが盛んなこと。派手に遊興する意味。"
  },
  {
    "term": "富裕",
    "reading": "ふゆう",
    "meaning": "財産が多く生活に余裕があること",
    "category": "熟語",
    "difficulty": "標準",
    "note": "裕福に近い意味。"
  },
  {
    "term": "優柔",
    "reading": "ゆうじゅう",
    "meaning": "決断力に乏しくぐずぐずすること",
    "category": "熟語",
    "difficulty": "標準",
    "note": "優柔不断の形でよく使われる。"
  },
  {
    "term": "緩慢",
    "reading": "かんまん",
    "meaning": "動きや進み方がゆっくりで締まりがないこと",
    "category": "熟語",
    "difficulty": "標準",
    "note": "動作や変化が遅い場合に使う。"
  },
  {
    "term": "頑迷",
    "reading": "がんめい",
    "meaning": "考えに固執して道理を受け入れないこと",
    "category": "熟語",
    "difficulty": "やや難",
    "note": "頑固で聞き分けがない意味。"
  },
  {
    "term": "隆盛",
    "reading": "りゅうせい",
    "meaning": "勢いが盛んで栄えていること",
    "category": "熟語",
    "difficulty": "標準",
    "note": "産業や文化が発展している状態。"
  },
  {
    "term": "衰微",
    "reading": "すいび",
    "meaning": "勢いが弱まり衰えること",
    "category": "熟語",
    "difficulty": "やや難",
    "note": "隆盛の対義として覚えやすい。"
  },
  {
    "term": "堅牢",
    "reading": "けんろう",
    "meaning": "作りがしっかりしていて丈夫なこと",
    "category": "熟語",
    "difficulty": "やや難",
    "note": "建物・構造・仕組みの強さに使う。"
  },
  {
    "term": "荘厳",
    "reading": "そうごん",
    "meaning": "重々しく立派でおごそかなこと",
    "category": "熟語",
    "difficulty": "標準",
    "note": "建築・儀式・雰囲気などに使う。"
  },
  {
    "term": "狼狽",
    "reading": "ろうばい",
    "meaning": "慌てふためいてうろたえること",
    "category": "熟語",
    "difficulty": "標準",
    "note": "予想外の事態に動揺する意味。"
  }
];

const USAGE_QUESTIONS = [
  {
    "id": "usage:ageru:present",
    "term": "あげる",
    "target": "あげる",
    "sentence": "改善案をあげる",
    "meaning": "提示する・例示する",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "ここでの「あげる」は、案や例を提示する意味。",
    "choices": [
      {
        "text": "候補をあげる",
        "correct": true,
        "note": "候補を提示する意味。"
      },
      {
        "text": "旗をあげる",
        "correct": false,
        "note": "上に持ち上げる意味。"
      },
      {
        "text": "腕をあげる",
        "correct": false,
        "note": "上達する意味。"
      },
      {
        "text": "利益をあげる",
        "correct": false,
        "note": "成果を得る意味。"
      },
      {
        "text": "歓声をあげる",
        "correct": false,
        "note": "声を発する意味。"
      }
    ]
  },
  {
    "id": "usage:de:tool",
    "term": "で",
    "target": "で",
    "sentence": "鉛筆で線を引く",
    "meaning": "手段・道具",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "この「で」は、何を用いるかを表す手段・道具の用法。",
    "choices": [
      {
        "text": "電車で会社へ行く",
        "correct": true,
        "note": "移動手段を表す。"
      },
      {
        "text": "会議室で話し合う",
        "correct": false,
        "note": "場所を表す。"
      },
      {
        "text": "病気で休む",
        "correct": false,
        "note": "原因を表す。"
      },
      {
        "text": "一人で調べる",
        "correct": false,
        "note": "人数や状態を表す。"
      },
      {
        "text": "三日で仕上げる",
        "correct": false,
        "note": "期間を表す。"
      }
    ]
  },
  {
    "id": "usage:ni:purpose",
    "term": "に",
    "target": "に",
    "sentence": "資料を借りに行く",
    "meaning": "目的",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "この「に」は、行く目的を表す用法。",
    "choices": [
      {
        "text": "友人に会いに行く",
        "correct": true,
        "note": "行く目的を表す。"
      },
      {
        "text": "机に本を置く",
        "correct": false,
        "note": "到達点・場所を表す。"
      },
      {
        "text": "三時に始まる",
        "correct": false,
        "note": "時を表す。"
      },
      {
        "text": "父に似ている",
        "correct": false,
        "note": "比較対象を表す。"
      },
      {
        "text": "静かに話す",
        "correct": false,
        "note": "様子を表す。"
      }
    ]
  },
  {
    "id": "usage:kakeru:call",
    "term": "かける",
    "target": "かける",
    "sentence": "電話をかける",
    "meaning": "通信・働きかけをする",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "この「かける」は、相手へ働きかける動作を表す。",
    "choices": [
      {
        "text": "声をかける",
        "correct": true,
        "note": "相手に働きかける意味。"
      },
      {
        "text": "橋をかける",
        "correct": false,
        "note": "渡す・架設する意味。"
      },
      {
        "text": "椅子に腰をかける",
        "correct": false,
        "note": "座る意味。"
      },
      {
        "text": "壁に時計をかける",
        "correct": false,
        "note": "掛けて固定する意味。"
      },
      {
        "text": "費用をかける",
        "correct": false,
        "note": "費やす意味。"
      }
    ]
  },
  {
    "id": "usage:toru:reserve",
    "term": "取る",
    "target": "取る",
    "sentence": "予約を取る",
    "meaning": "確保する",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "この「取る」は、必要なものを確保する意味。",
    "choices": [
      {
        "text": "席を取る",
        "correct": true,
        "note": "場所を確保する意味。"
      },
      {
        "text": "写真を取る",
        "correct": false,
        "note": "撮影する意味。通常は「撮る」。"
      },
      {
        "text": "皿を取る",
        "correct": false,
        "note": "手に持つ意味。"
      },
      {
        "text": "年を取る",
        "correct": false,
        "note": "年齢が増える意味。"
      },
      {
        "text": "責任を取る",
        "correct": false,
        "note": "引き受ける意味。"
      }
    ]
  },
  {
    "id": "usage:utsu:measure",
    "term": "打つ",
    "target": "打つ",
    "sentence": "対策を打つ",
    "meaning": "手段を講じる",
    "category": "語句の用法",
    "difficulty": "やや難",
    "note": "この「打つ」は、必要な手段を実行する意味。",
    "choices": [
      {
        "text": "手を打つ",
        "correct": true,
        "note": "対策を講じる意味。"
      },
      {
        "text": "太鼓を打つ",
        "correct": false,
        "note": "たたく意味。"
      },
      {
        "text": "電報を打つ",
        "correct": false,
        "note": "送る意味。"
      },
      {
        "text": "心を打つ",
        "correct": false,
        "note": "感動させる意味。"
      },
      {
        "text": "くぎを打つ",
        "correct": false,
        "note": "打ち込む意味。"
      }
    ]
  },
  {
    "id": "usage:tsuku:judge",
    "term": "つく",
    "target": "つく",
    "sentence": "見当がつく",
    "meaning": "判断できる・分かる",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "この「つく」は、考えや判断がまとまる意味。",
    "choices": [
      {
        "text": "区別がつく",
        "correct": true,
        "note": "判断できる意味。"
      },
      {
        "text": "火がつく",
        "correct": false,
        "note": "燃え始める意味。"
      },
      {
        "text": "駅に着く",
        "underline": "着く",
        "correct": false,
        "note": "到着する意味。漢字も異なる。"
      },
      {
        "text": "汚れがつく",
        "correct": false,
        "note": "付着する意味。"
      },
      {
        "text": "味方につく",
        "correct": false,
        "note": "所属する意味。"
      }
    ]
  },
  {
    "id": "usage:ireru:include",
    "term": "入れる",
    "target": "入れる",
    "sentence": "予定に入れる",
    "meaning": "含める",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "この「入れる」は、範囲や計画の中に含める意味。",
    "choices": [
      {
        "text": "候補に入れる",
        "correct": true,
        "note": "対象に含める意味。"
      },
      {
        "text": "箱に入れる",
        "correct": false,
        "note": "中へ移す意味。"
      },
      {
        "text": "電源を入れる",
        "correct": false,
        "note": "作動させる意味。"
      },
      {
        "text": "力を入れる",
        "correct": false,
        "note": "力を注ぐ意味。"
      },
      {
        "text": "茶を入れる",
        "correct": false,
        "note": "飲み物を用意する意味。"
      }
    ]
  },
  {
    "id": "usage:miru:try",
    "term": "みる",
    "target": "みる",
    "sentence": "試してみる",
    "meaning": "試しに行う",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "補助動詞の「みる」で、試しに行う意味。",
    "choices": [
      {
        "text": "考えてみる",
        "correct": true,
        "note": "試しに考える意味。"
      },
      {
        "text": "景色を見る",
        "underline": "見る",
        "correct": false,
        "note": "目で見る意味。"
      },
      {
        "text": "面倒を見る",
        "underline": "見る",
        "correct": false,
        "note": "世話をする意味。"
      },
      {
        "text": "夢を見る",
        "underline": "見る",
        "correct": false,
        "note": "夢を体験する意味。"
      },
      {
        "text": "資料を見る",
        "underline": "見る",
        "correct": false,
        "note": "確認する意味。"
      }
    ]
  },
  {
    "id": "usage:ataru:correspond",
    "term": "あたる",
    "target": "あたる",
    "sentence": "担当にあたる",
    "meaning": "役割を引き受ける",
    "category": "語句の用法",
    "difficulty": "やや難",
    "note": "この「あたる」は、役目として受け持つ意味。",
    "choices": [
      {
        "text": "警備にあたる",
        "correct": true,
        "note": "任務として担当する意味。"
      },
      {
        "text": "日があたる",
        "correct": false,
        "note": "光が届く意味。"
      },
      {
        "text": "くじにあたる",
        "correct": false,
        "note": "当選する意味。"
      },
      {
        "text": "壁にあたる",
        "correct": false,
        "note": "ぶつかる意味。"
      },
      {
        "text": "予想があたる",
        "correct": false,
        "note": "的中する意味。"
      }
    ]
  },
  {
    "id": "usage:hiku:quote",
    "term": "引く",
    "target": "引く",
    "sentence": "辞書を引く",
    "meaning": "調べる",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "この「引く」は、辞書などで調べる意味。",
    "choices": [
      {
        "text": "索引を引く",
        "correct": true,
        "note": "調べる意味。"
      },
      {
        "text": "線を引く",
        "correct": false,
        "note": "線を書く意味。"
      },
      {
        "text": "手を引く",
        "correct": false,
        "note": "退く・やめる意味。"
      },
      {
        "text": "荷車を引く",
        "correct": false,
        "note": "引っ張る意味。"
      },
      {
        "text": "風邪を引く",
        "correct": false,
        "note": "病気にかかる意味。"
      }
    ]
  },
  {
    "id": "usage:osu:recommend",
    "term": "押す",
    "target": "押す",
    "sentence": "候補者を押す",
    "meaning": "推薦する・支持する",
    "category": "語句の用法",
    "difficulty": "やや難",
    "note": "この「押す」は、推薦して後押しする意味。",
    "choices": [
      {
        "text": "企画案を押す",
        "correct": true,
        "note": "支持して推す意味。"
      },
      {
        "text": "扉を押す",
        "correct": false,
        "note": "力を加える意味。"
      },
      {
        "text": "印鑑を押す",
        "correct": false,
        "note": "押印する意味。"
      },
      {
        "text": "念を押す",
        "correct": false,
        "note": "確認する意味。"
      },
      {
        "text": "時間に押される",
        "underline": "押される",
        "correct": false,
        "note": "余裕がなくなる意味。"
      }
    ]
  },
  {
    "id": "external-usage:暫定:暫定の結論として、来月再検討する",
    "term": "暫定",
    "target": "暫定",
    "sentence": "暫定の結論として、来月再検討する",
    "meaning": "「暫定」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "暫定は、正式決定まで仮に定めることを表します。",
    "choices": [
      {
        "text": "暫定の結論として、来月再検討する",
        "underline": "暫定",
        "correct": true,
        "note": "暫定は、正式決定まで仮に定めることを表します。"
      },
      {
        "text": "暫定な雨が一日中降った",
        "underline": "暫定",
        "correct": false,
        "note": "「暫定」の適切な用法ではありません。"
      },
      {
        "text": "暫定を食べて元気になった",
        "underline": "暫定",
        "correct": false,
        "note": "「暫定」の適切な用法ではありません。"
      },
      {
        "text": "暫定の音が遠くから聞こえた",
        "underline": "暫定",
        "correct": false,
        "note": "「暫定」の適切な用法ではありません。"
      },
      {
        "text": "彼は暫定に走るのが速い",
        "underline": "暫定",
        "correct": false,
        "note": "「暫定」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:緩和:規制を緩和して参入しやすくする",
    "term": "緩和",
    "target": "緩和",
    "sentence": "規制を緩和して参入しやすくする",
    "meaning": "「緩和」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "緩和は、厳しさや激しさをゆるめること。",
    "choices": [
      {
        "text": "規制を緩和して参入しやすくする",
        "underline": "緩和",
        "correct": true,
        "note": "緩和は、厳しさや激しさをゆるめること。"
      },
      {
        "text": "会議を緩和して資料を配る",
        "underline": "緩和",
        "correct": false,
        "note": "「緩和」の適切な用法ではありません。"
      },
      {
        "text": "緩和を机の上に置いた",
        "underline": "緩和",
        "correct": false,
        "note": "「緩和」の適切な用法ではありません。"
      },
      {
        "text": "駅まで緩和に歩いた",
        "underline": "緩和",
        "correct": false,
        "note": "「緩和」の適切な用法ではありません。"
      },
      {
        "text": "彼は緩和な料理を作った",
        "underline": "緩和",
        "correct": false,
        "note": "「緩和」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:喚起:利用者に注意を喚起する",
    "term": "喚起",
    "target": "喚起",
    "sentence": "利用者に注意を喚起する",
    "meaning": "「喚起」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "喚起は、注意や関心を呼び起こすこと。",
    "choices": [
      {
        "text": "利用者に注意を喚起する",
        "underline": "喚起",
        "correct": true,
        "note": "喚起は、注意や関心を呼び起こすこと。"
      },
      {
        "text": "机を喚起して部屋を片付ける",
        "underline": "喚起",
        "correct": false,
        "note": "「喚起」の適切な用法ではありません。"
      },
      {
        "text": "喚起な天気が続く",
        "underline": "喚起",
        "correct": false,
        "note": "「喚起」の適切な用法ではありません。"
      },
      {
        "text": "彼は喚起を飲み干した",
        "underline": "喚起",
        "correct": false,
        "note": "「喚起」の適切な用法ではありません。"
      },
      {
        "text": "資料を喚起に印刷した",
        "underline": "喚起",
        "correct": false,
        "note": "「喚起」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:踏襲:従来の方針を踏襲する",
    "term": "踏襲",
    "target": "踏襲",
    "sentence": "従来の方針を踏襲する",
    "meaning": "「踏襲」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "踏襲は、前からのやり方や方針を受け継ぐこと。",
    "choices": [
      {
        "text": "従来の方針を踏襲する",
        "underline": "踏襲",
        "correct": true,
        "note": "踏襲は、前からのやり方や方針を受け継ぐこと。"
      },
      {
        "text": "足元の石を踏襲する",
        "underline": "踏襲",
        "correct": false,
        "note": "「踏襲」の適切な用法ではありません。"
      },
      {
        "text": "踏襲の料理を注文する",
        "underline": "踏襲",
        "correct": false,
        "note": "「踏襲」の適切な用法ではありません。"
      },
      {
        "text": "風が踏襲に吹く",
        "underline": "踏襲",
        "correct": false,
        "note": "「踏襲」の適切な用法ではありません。"
      },
      {
        "text": "踏襲を昨日まで延期する",
        "underline": "踏襲",
        "correct": false,
        "note": "「踏襲」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:堅持:基本方針を堅持する",
    "term": "堅持",
    "target": "堅持",
    "sentence": "基本方針を堅持する",
    "meaning": "「堅持」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "堅持は、かたく守り続けること。",
    "choices": [
      {
        "text": "基本方針を堅持する",
        "underline": "堅持",
        "correct": true,
        "note": "堅持は、かたく守り続けること。"
      },
      {
        "text": "堅持な水を飲む",
        "underline": "堅持",
        "correct": false,
        "note": "「堅持」の適切な用法ではありません。"
      },
      {
        "text": "堅持を部屋に飾る",
        "underline": "堅持",
        "correct": false,
        "note": "「堅持」の適切な用法ではありません。"
      },
      {
        "text": "彼は堅持に眠った",
        "underline": "堅持",
        "correct": false,
        "note": "「堅持」の適切な用法ではありません。"
      },
      {
        "text": "荷物を堅持から降ろす",
        "underline": "堅持",
        "correct": false,
        "note": "「堅持」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:弊害:過度な競争の弊害が指摘された",
    "term": "弊害",
    "target": "弊害",
    "sentence": "過度な競争の弊害が指摘された",
    "meaning": "「弊害」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "弊害は、悪い影響や害となること。",
    "choices": [
      {
        "text": "過度な競争の弊害が指摘された",
        "underline": "弊害",
        "correct": true,
        "note": "弊害は、悪い影響や害となること。"
      },
      {
        "text": "弊害を食卓に並べる",
        "underline": "弊害",
        "correct": false,
        "note": "「弊害」の適切な用法ではありません。"
      },
      {
        "text": "彼は弊害に駅へ向かった",
        "underline": "弊害",
        "correct": false,
        "note": "「弊害」の適切な用法ではありません。"
      },
      {
        "text": "弊害な色を選ぶ",
        "underline": "弊害",
        "correct": false,
        "note": "「弊害」の適切な用法ではありません。"
      },
      {
        "text": "書類を弊害して提出した",
        "underline": "弊害",
        "correct": false,
        "note": "「弊害」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:洞察:市場の変化を鋭く洞察する",
    "term": "洞察",
    "target": "洞察",
    "sentence": "市場の変化を鋭く洞察する",
    "meaning": "「洞察」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "洞察は、物事の本質を見抜くこと。",
    "choices": [
      {
        "text": "市場の変化を鋭く洞察する",
        "underline": "洞察",
        "correct": true,
        "note": "洞察は、物事の本質を見抜くこと。"
      },
      {
        "text": "洞察を机に置いて帰る",
        "underline": "洞察",
        "correct": false,
        "note": "「洞察」の適切な用法ではありません。"
      },
      {
        "text": "洞察な道を歩く",
        "underline": "洞察",
        "correct": false,
        "note": "「洞察」の適切な用法ではありません。"
      },
      {
        "text": "彼は洞察を飲み干した",
        "underline": "洞察",
        "correct": false,
        "note": "「洞察」の適切な用法ではありません。"
      },
      {
        "text": "会議を洞察に延期する",
        "underline": "洞察",
        "correct": false,
        "note": "「洞察」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:契機:留学を契機に考え方が変わった",
    "term": "契機",
    "target": "契機",
    "sentence": "留学を契機に考え方が変わった",
    "meaning": "「契機」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "契機は、物事が始まるきっかけ。",
    "choices": [
      {
        "text": "留学を契機に考え方が変わった",
        "underline": "契機",
        "correct": true,
        "note": "契機は、物事が始まるきっかけ。"
      },
      {
        "text": "契機を三つ買って帰った",
        "underline": "契機",
        "correct": false,
        "note": "「契機」の適切な用法ではありません。"
      },
      {
        "text": "契機な音が聞こえた",
        "underline": "契機",
        "correct": false,
        "note": "「契機」の適切な用法ではありません。"
      },
      {
        "text": "駅まで契機に歩く",
        "underline": "契機",
        "correct": false,
        "note": "「契機」の適切な用法ではありません。"
      },
      {
        "text": "契機を冷蔵庫に入れる",
        "underline": "契機",
        "correct": false,
        "note": "「契機」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:是正:不適切な表示を是正する",
    "term": "是正",
    "target": "是正",
    "sentence": "不適切な表示を是正する",
    "meaning": "「是正」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "是正は、悪い点を改め正すこと。",
    "choices": [
      {
        "text": "不適切な表示を是正する",
        "underline": "是正",
        "correct": true,
        "note": "是正は、悪い点を改め正すこと。"
      },
      {
        "text": "是正を机に並べる",
        "underline": "是正",
        "correct": false,
        "note": "「是正」の適切な用法ではありません。"
      },
      {
        "text": "彼は是正に眠った",
        "underline": "是正",
        "correct": false,
        "note": "「是正」の適切な用法ではありません。"
      },
      {
        "text": "雨が是正に降った",
        "underline": "是正",
        "correct": false,
        "note": "「是正」の適切な用法ではありません。"
      },
      {
        "text": "是正な音が響いた",
        "underline": "是正",
        "correct": false,
        "note": "「是正」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:齟齬:説明と実態に齟齬がある",
    "term": "齟齬",
    "target": "齟齬",
    "sentence": "説明と実態に齟齬がある",
    "meaning": "「齟齬」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "齟齬は、食い違いが生じている状態。",
    "choices": [
      {
        "text": "説明と実態に齟齬がある",
        "underline": "齟齬",
        "correct": true,
        "note": "齟齬は、食い違いが生じている状態。"
      },
      {
        "text": "齟齬を冷蔵庫に入れる",
        "underline": "齟齬",
        "correct": false,
        "note": "「齟齬」の適切な用法ではありません。"
      },
      {
        "text": "齟齬な速度で走る",
        "underline": "齟齬",
        "correct": false,
        "note": "「齟齬」の適切な用法ではありません。"
      },
      {
        "text": "書類を齟齬して提出する",
        "underline": "齟齬",
        "correct": false,
        "note": "「齟齬」の適切な用法ではありません。"
      },
      {
        "text": "彼は齟齬に笑った",
        "underline": "齟齬",
        "correct": false,
        "note": "「齟齬」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:忌避:投資家は過度なリスクを忌避する",
    "term": "忌避",
    "target": "忌避",
    "sentence": "投資家は過度なリスクを忌避する",
    "meaning": "「忌避」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "忌避は、嫌って避けること。",
    "choices": [
      {
        "text": "投資家は過度なリスクを忌避する",
        "underline": "忌避",
        "correct": true,
        "note": "忌避は、嫌って避けること。"
      },
      {
        "text": "忌避に資料を読んだ",
        "underline": "忌避",
        "correct": false,
        "note": "「忌避」の適切な用法ではありません。"
      },
      {
        "text": "忌避の花が庭に咲いた",
        "underline": "忌避",
        "correct": false,
        "note": "「忌避」の適切な用法ではありません。"
      },
      {
        "text": "道路を忌避して横断する",
        "underline": "忌避",
        "correct": false,
        "note": "「忌避」の適切な用法ではありません。"
      },
      {
        "text": "忌避を冷蔵庫に入れる",
        "underline": "忌避",
        "correct": false,
        "note": "「忌避」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:形骸化:制度が形だけになり形骸化する",
    "term": "形骸化",
    "target": "形骸化",
    "sentence": "制度が形だけになり形骸化する",
    "meaning": "「形骸化」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "形骸化は、実質が失われて形だけになること。",
    "choices": [
      {
        "text": "制度が形だけになり形骸化する",
        "underline": "形骸化",
        "correct": true,
        "note": "形骸化は、実質が失われて形だけになること。"
      },
      {
        "text": "荷物が重くて形骸化する",
        "underline": "形骸化",
        "correct": false,
        "note": "「形骸化」の適切な用法ではありません。"
      },
      {
        "text": "夕食を形骸化して食べる",
        "underline": "形骸化",
        "correct": false,
        "note": "「形骸化」の適切な用法ではありません。"
      },
      {
        "text": "形骸化な風が吹く",
        "underline": "形骸化",
        "correct": false,
        "note": "「形骸化」の適切な用法ではありません。"
      },
      {
        "text": "彼は形骸化に笑った",
        "underline": "形骸化",
        "correct": false,
        "note": "「形骸化」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:牽制:相手陣営の動きを牽制する",
    "term": "牽制",
    "target": "牽制",
    "sentence": "相手陣営の動きを牽制する",
    "meaning": "「牽制」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "牽制は、相手の動きを抑えるよう警戒させること。",
    "choices": [
      {
        "text": "相手陣営の動きを牽制する",
        "underline": "牽制",
        "correct": true,
        "note": "牽制は、相手の動きを抑えるよう警戒させること。"
      },
      {
        "text": "牽制の料理を注文する",
        "underline": "牽制",
        "correct": false,
        "note": "「牽制」の適切な用法ではありません。"
      },
      {
        "text": "牽制に熟睡する",
        "underline": "牽制",
        "correct": false,
        "note": "「牽制」の適切な用法ではありません。"
      },
      {
        "text": "机を牽制して掃除する",
        "underline": "牽制",
        "correct": false,
        "note": "「牽制」の適切な用法ではありません。"
      },
      {
        "text": "牽制な青空が広がる",
        "underline": "牽制",
        "correct": false,
        "note": "「牽制」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:敷衍:抽象的な説明を具体例で敷衍する",
    "term": "敷衍",
    "target": "敷衍",
    "sentence": "抽象的な説明を具体例で敷衍する",
    "meaning": "「敷衍」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "敷衍は、内容を広げて詳しく説明すること。",
    "choices": [
      {
        "text": "抽象的な説明を具体例で敷衍する",
        "underline": "敷衍",
        "correct": true,
        "note": "敷衍は、内容を広げて詳しく説明すること。"
      },
      {
        "text": "敷衍を駅まで歩いた",
        "underline": "敷衍",
        "correct": false,
        "note": "「敷衍」の適切な用法ではありません。"
      },
      {
        "text": "敷衍な温度で冷やす",
        "underline": "敷衍",
        "correct": false,
        "note": "「敷衍」の適切な用法ではありません。"
      },
      {
        "text": "書類を敷衍に閉じる",
        "underline": "敷衍",
        "correct": false,
        "note": "「敷衍」の適切な用法ではありません。"
      },
      {
        "text": "敷衍を飲み干した",
        "underline": "敷衍",
        "correct": false,
        "note": "「敷衍」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:帰結:議論の帰結を慎重に見極める",
    "term": "帰結",
    "target": "帰結",
    "sentence": "議論の帰結を慎重に見極める",
    "meaning": "「帰結」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "帰結は、物事の結果として行き着くところ。",
    "choices": [
      {
        "text": "議論の帰結を慎重に見極める",
        "underline": "帰結",
        "correct": true,
        "note": "帰結は、物事の結果として行き着くところ。"
      },
      {
        "text": "帰結を棚に飾る",
        "underline": "帰結",
        "correct": false,
        "note": "「帰結」の適切な用法ではありません。"
      },
      {
        "text": "彼は帰結に泳いだ",
        "underline": "帰結",
        "correct": false,
        "note": "「帰結」の適切な用法ではありません。"
      },
      {
        "text": "帰結の椅子に座る",
        "underline": "帰結",
        "correct": false,
        "note": "「帰結」の適切な用法ではありません。"
      },
      {
        "text": "雨を帰結して待つ",
        "underline": "帰結",
        "correct": false,
        "note": "「帰結」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:斟酌:相手の事情を斟酌して判断する",
    "term": "斟酌",
    "target": "斟酌",
    "sentence": "相手の事情を斟酌して判断する",
    "meaning": "「斟酌」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "斟酌は、事情や心情をくみ取って考えること。",
    "choices": [
      {
        "text": "相手の事情を斟酌して判断する",
        "underline": "斟酌",
        "correct": true,
        "note": "斟酌は、事情や心情をくみ取って考えること。"
      },
      {
        "text": "斟酌な坂道を登る",
        "underline": "斟酌",
        "correct": false,
        "note": "「斟酌」の適切な用法ではありません。"
      },
      {
        "text": "斟酌を食べて休む",
        "underline": "斟酌",
        "correct": false,
        "note": "「斟酌」の適切な用法ではありません。"
      },
      {
        "text": "駅まで斟酌に走る",
        "underline": "斟酌",
        "correct": false,
        "note": "「斟酌」の適切な用法ではありません。"
      },
      {
        "text": "花瓶を斟酌する",
        "underline": "斟酌",
        "correct": false,
        "note": "「斟酌」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:相殺:利益と損失を相殺して計算する",
    "term": "相殺",
    "target": "相殺",
    "sentence": "利益と損失を相殺して計算する",
    "meaning": "「相殺」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "相殺は、差し引いて帳消しにすること。",
    "choices": [
      {
        "text": "利益と損失を相殺して計算する",
        "underline": "相殺",
        "correct": true,
        "note": "相殺は、差し引いて帳消しにすること。"
      },
      {
        "text": "相殺の靴を履く",
        "underline": "相殺",
        "correct": false,
        "note": "「相殺」の適切な用法ではありません。"
      },
      {
        "text": "会議を相殺に開く",
        "underline": "相殺",
        "correct": false,
        "note": "「相殺」の適切な用法ではありません。"
      },
      {
        "text": "資料を相殺な色にする",
        "underline": "相殺",
        "correct": false,
        "note": "「相殺」の適切な用法ではありません。"
      },
      {
        "text": "相殺を庭に植える",
        "underline": "相殺",
        "correct": false,
        "note": "「相殺」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:逓減:利用者数が年度ごとに逓減している",
    "term": "逓減",
    "target": "逓減",
    "sentence": "利用者数が年度ごとに逓減している",
    "meaning": "「逓減」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "逓減は、次第に減っていくこと。",
    "choices": [
      {
        "text": "利用者数が年度ごとに逓減している",
        "underline": "逓減",
        "correct": true,
        "note": "逓減は、次第に減っていくこと。"
      },
      {
        "text": "逓減な太陽が昇る",
        "underline": "逓減",
        "correct": false,
        "note": "「逓減」の適切な用法ではありません。"
      },
      {
        "text": "資料を逓減に配る",
        "underline": "逓減",
        "correct": false,
        "note": "「逓減」の適切な用法ではありません。"
      },
      {
        "text": "彼は逓減を飲み干した",
        "underline": "逓減",
        "correct": false,
        "note": "「逓減」の適切な用法ではありません。"
      },
      {
        "text": "机を逓減して運ぶ",
        "underline": "逓減",
        "correct": false,
        "note": "「逓減」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:拮抗:両社の販売シェアが拮抗している",
    "term": "拮抗",
    "target": "拮抗",
    "sentence": "両社の販売シェアが拮抗している",
    "meaning": "「拮抗」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "拮抗は、互いの力が同じくらいで張り合うこと。",
    "choices": [
      {
        "text": "両社の販売シェアが拮抗している",
        "underline": "拮抗",
        "correct": true,
        "note": "拮抗は、互いの力が同じくらいで張り合うこと。"
      },
      {
        "text": "拮抗を財布に入れる",
        "underline": "拮抗",
        "correct": false,
        "note": "「拮抗」の適切な用法ではありません。"
      },
      {
        "text": "拮抗な香りを食べる",
        "underline": "拮抗",
        "correct": false,
        "note": "「拮抗」の適切な用法ではありません。"
      },
      {
        "text": "駅まで拮抗に歩く",
        "underline": "拮抗",
        "correct": false,
        "note": "「拮抗」の適切な用法ではありません。"
      },
      {
        "text": "拮抗を昨日まで延期する",
        "underline": "拮抗",
        "correct": false,
        "note": "「拮抗」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:折衝:取引条件について相手先と折衝する",
    "term": "折衝",
    "target": "折衝",
    "sentence": "取引条件について相手先と折衝する",
    "meaning": "「折衝」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "折衝は、利害の違う相手と話し合って調整すること。",
    "choices": [
      {
        "text": "取引条件について相手先と折衝する",
        "underline": "折衝",
        "correct": true,
        "note": "折衝は、利害の違う相手と話し合って調整すること。"
      },
      {
        "text": "折衝を冷蔵庫で冷やす",
        "underline": "折衝",
        "correct": false,
        "note": "「折衝」の適切な用法ではありません。"
      },
      {
        "text": "折衝な山道を進む",
        "underline": "折衝",
        "correct": false,
        "note": "「折衝」の適切な用法ではありません。"
      },
      {
        "text": "折衝に眠り込む",
        "underline": "折衝",
        "correct": false,
        "note": "「折衝」の適切な用法ではありません。"
      },
      {
        "text": "折衝を机から落とす",
        "underline": "折衝",
        "correct": false,
        "note": "「折衝」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:照準:若年層に照準を合わせて商品を企画する",
    "term": "照準",
    "target": "照準",
    "sentence": "若年層に照準を合わせて商品を企画する",
    "meaning": "「照準」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "照準を合わせるは、ねらいや対象を定めること。",
    "choices": [
      {
        "text": "若年層に照準を合わせて商品を企画する",
        "underline": "照準",
        "correct": true,
        "note": "照準を合わせるは、ねらいや対象を定めること。"
      },
      {
        "text": "照準を合わせて昼食をとる",
        "underline": "照準",
        "correct": false,
        "note": "「照準」の適切な用法ではありません。"
      },
      {
        "text": "照準な雨が降り続く",
        "underline": "照準",
        "correct": false,
        "note": "「照準」の適切な用法ではありません。"
      },
      {
        "text": "書類を照準に保管する",
        "underline": "照準",
        "correct": false,
        "note": "「照準」の適切な用法ではありません。"
      },
      {
        "text": "照準を眠って忘れる",
        "underline": "照準",
        "correct": false,
        "note": "「照準」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:蹂躙:人権を蹂躙する行為は許されない",
    "term": "蹂躙",
    "target": "蹂躙",
    "sentence": "人権を蹂躙する行為は許されない",
    "meaning": "「蹂躙」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "蹂躙は、踏みにじって侵害すること。",
    "choices": [
      {
        "text": "人権を蹂躙する行為は許されない",
        "underline": "蹂躙",
        "correct": true,
        "note": "蹂躙は、踏みにじって侵害すること。"
      },
      {
        "text": "人権を蹂躙して守る",
        "underline": "蹂躙",
        "correct": false,
        "note": "「蹂躙」の適切な用法ではありません。"
      },
      {
        "text": "資料を蹂躙に並べる",
        "underline": "蹂躙",
        "correct": false,
        "note": "「蹂躙」の適切な用法ではありません。"
      },
      {
        "text": "蹂躙な説明で理解する",
        "underline": "蹂躙",
        "correct": false,
        "note": "「蹂躙」の適切な用法ではありません。"
      },
      {
        "text": "蹂躙を食卓に出す",
        "underline": "蹂躙",
        "correct": false,
        "note": "「蹂躙」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:苦笑:思わず苦笑するしかなかった",
    "term": "苦笑",
    "target": "苦笑",
    "sentence": "思わず苦笑するしかなかった",
    "meaning": "「苦笑」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "苦笑は、不快さや困惑を含みながらしかたなく笑うこと。",
    "choices": [
      {
        "text": "思わず苦笑するしかなかった",
        "underline": "苦笑",
        "correct": true,
        "note": "苦笑は、不快さや困惑を含みながらしかたなく笑うこと。"
      },
      {
        "text": "苦笑を机に置く",
        "underline": "苦笑",
        "correct": false,
        "note": "「苦笑」の適切な用法ではありません。"
      },
      {
        "text": "苦笑な計画を印刷する",
        "underline": "苦笑",
        "correct": false,
        "note": "「苦笑」の適切な用法ではありません。"
      },
      {
        "text": "駅まで苦笑に走る",
        "underline": "苦笑",
        "correct": false,
        "note": "「苦笑」の適切な用法ではありません。"
      },
      {
        "text": "苦笑を契約する",
        "underline": "苦笑",
        "correct": false,
        "note": "「苦笑」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:悠長:危機が迫る中で悠長に構えてはいられない",
    "term": "悠長",
    "target": "悠長",
    "sentence": "危機が迫る中で悠長に構えてはいられない",
    "meaning": "「悠長」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "悠長は、落ち着き過ぎて急がないさま。",
    "choices": [
      {
        "text": "危機が迫る中で悠長に構えてはいられない",
        "underline": "悠長",
        "correct": true,
        "note": "悠長は、落ち着き過ぎて急がないさま。"
      },
      {
        "text": "悠長を提出する",
        "underline": "悠長",
        "correct": false,
        "note": "「悠長」の適切な用法ではありません。"
      },
      {
        "text": "悠長な石を食べる",
        "underline": "悠長",
        "correct": false,
        "note": "「悠長」の適切な用法ではありません。"
      },
      {
        "text": "悠長に契約を履行する",
        "underline": "悠長",
        "correct": false,
        "note": "「悠長」の適切な用法ではありません。"
      },
      {
        "text": "悠長を棚に飾る",
        "underline": "悠長",
        "correct": false,
        "note": "「悠長」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:強記:彼の博覧強記ぶりに驚かされた",
    "term": "強記",
    "target": "強記",
    "sentence": "彼の博覧強記ぶりに驚かされた",
    "meaning": "「強記」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "強記は、記憶力が非常に優れていること。",
    "choices": [
      {
        "text": "彼の博覧強記ぶりに驚かされた",
        "underline": "強記",
        "correct": true,
        "note": "強記は、記憶力が非常に優れていること。"
      },
      {
        "text": "強記な料理を注文する",
        "underline": "強記",
        "correct": false,
        "note": "「強記」の適切な用法ではありません。"
      },
      {
        "text": "強記を冷蔵庫で冷やす",
        "underline": "強記",
        "correct": false,
        "note": "「強記」の適切な用法ではありません。"
      },
      {
        "text": "強記に眠り込む",
        "underline": "強記",
        "correct": false,
        "note": "「強記」の適切な用法ではありません。"
      },
      {
        "text": "道を強記して曲がる",
        "underline": "強記",
        "correct": false,
        "note": "「強記」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:領袖:派閥の領袖として発言力を持つ",
    "term": "領袖",
    "target": "領袖",
    "sentence": "派閥の領袖として発言力を持つ",
    "meaning": "「領袖」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "領袖は、集団を率いる中心人物。",
    "choices": [
      {
        "text": "派閥の領袖として発言力を持つ",
        "underline": "領袖",
        "correct": true,
        "note": "領袖は、集団を率いる中心人物。"
      },
      {
        "text": "領袖を三冊買う",
        "underline": "領袖",
        "correct": false,
        "note": "「領袖」の適切な用法ではありません。"
      },
      {
        "text": "領袖な天気が続く",
        "underline": "領袖",
        "correct": false,
        "note": "「領袖」の適切な用法ではありません。"
      },
      {
        "text": "領袖に水を注ぐ",
        "underline": "領袖",
        "correct": false,
        "note": "「領袖」の適切な用法ではありません。"
      },
      {
        "text": "駅まで領袖で歩く",
        "underline": "領袖",
        "correct": false,
        "note": "「領袖」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:垂涎:その限定品は愛好家にとって垂涎の的だ",
    "term": "垂涎",
    "target": "垂涎",
    "sentence": "その限定品は愛好家にとって垂涎の的だ",
    "meaning": "「垂涎」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "垂涎は、非常に欲しがること。",
    "choices": [
      {
        "text": "その限定品は愛好家にとって垂涎の的だ",
        "underline": "垂涎",
        "correct": true,
        "note": "垂涎は、非常に欲しがること。"
      },
      {
        "text": "垂涎を実印で押す",
        "underline": "垂涎",
        "correct": false,
        "note": "「垂涎」の適切な用法ではありません。"
      },
      {
        "text": "垂涎な坂を登る",
        "underline": "垂涎",
        "correct": false,
        "note": "「垂涎」の適切な用法ではありません。"
      },
      {
        "text": "垂涎に眠る",
        "underline": "垂涎",
        "correct": false,
        "note": "「垂涎」の適切な用法ではありません。"
      },
      {
        "text": "垂涎を雨で濡らす",
        "underline": "垂涎",
        "correct": false,
        "note": "「垂涎」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:刮目:彼は刮目に値する成果を上げた",
    "term": "刮目",
    "target": "刮目",
    "sentence": "彼は刮目に値する成果を上げた",
    "meaning": "「刮目」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "刮目は、目をこすってよく見るほど注目すること。",
    "choices": [
      {
        "text": "彼は刮目に値する成果を上げた",
        "underline": "刮目",
        "correct": true,
        "note": "刮目は、目をこすってよく見るほど注目すること。"
      },
      {
        "text": "刮目を冷凍する",
        "underline": "刮目",
        "correct": false,
        "note": "「刮目」の適切な用法ではありません。"
      },
      {
        "text": "刮目な椅子に座る",
        "underline": "刮目",
        "correct": false,
        "note": "「刮目」の適切な用法ではありません。"
      },
      {
        "text": "刮目に契約を破る",
        "underline": "刮目",
        "correct": false,
        "note": "「刮目」の適切な用法ではありません。"
      },
      {
        "text": "刮目を駅で降りる",
        "underline": "刮目",
        "correct": false,
        "note": "「刮目」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:催事:デパートの催事で地方物産展が開かれた",
    "term": "催事",
    "target": "催事",
    "sentence": "デパートの催事で地方物産展が開かれた",
    "meaning": "「催事」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "催事は、特別に行われる催し物。",
    "choices": [
      {
        "text": "デパートの催事で地方物産展が開かれた",
        "underline": "催事",
        "correct": true,
        "note": "催事は、特別に行われる催し物。"
      },
      {
        "text": "催事を飲み干す",
        "underline": "催事",
        "correct": false,
        "note": "「催事」の適切な用法ではありません。"
      },
      {
        "text": "催事な声で眠る",
        "underline": "催事",
        "correct": false,
        "note": "「催事」の適切な用法ではありません。"
      },
      {
        "text": "催事に計算を間違える",
        "underline": "催事",
        "correct": false,
        "note": "「催事」の適切な用法ではありません。"
      },
      {
        "text": "催事を靴に入れる",
        "underline": "催事",
        "correct": false,
        "note": "「催事」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:気鋭:気鋭の評論家が新説を発表した",
    "term": "気鋭",
    "target": "気鋭",
    "sentence": "気鋭の評論家が新説を発表した",
    "meaning": "「気鋭」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "気鋭は、意気込みが鋭く勢いがあること。",
    "choices": [
      {
        "text": "気鋭の評論家が新説を発表した",
        "underline": "気鋭",
        "correct": true,
        "note": "気鋭は、意気込みが鋭く勢いがあること。"
      },
      {
        "text": "気鋭を机に置く",
        "underline": "気鋭",
        "correct": false,
        "note": "「気鋭」の適切な用法ではありません。"
      },
      {
        "text": "気鋭な水を飲む",
        "underline": "気鋭",
        "correct": false,
        "note": "「気鋭」の適切な用法ではありません。"
      },
      {
        "text": "気鋭に昨日を延期する",
        "underline": "気鋭",
        "correct": false,
        "note": "「気鋭」の適切な用法ではありません。"
      },
      {
        "text": "気鋭を坂で拾う",
        "underline": "気鋭",
        "correct": false,
        "note": "「気鋭」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:流布:根拠のない噂が流布する",
    "term": "流布",
    "target": "流布",
    "sentence": "根拠のない噂が流布する",
    "meaning": "「流布」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "流布は、世間に広く知れ渡ること。",
    "choices": [
      {
        "text": "根拠のない噂が流布する",
        "underline": "流布",
        "correct": true,
        "note": "流布は、世間に広く知れ渡ること。"
      },
      {
        "text": "流布を冷やして食べる",
        "underline": "流布",
        "correct": false,
        "note": "「流布」の適切な用法ではありません。"
      },
      {
        "text": "流布な靴を履く",
        "underline": "流布",
        "correct": false,
        "note": "「流布」の適切な用法ではありません。"
      },
      {
        "text": "会議を流布に閉じる",
        "underline": "流布",
        "correct": false,
        "note": "「流布」の適切な用法ではありません。"
      },
      {
        "text": "流布を封筒に眠る",
        "underline": "流布",
        "correct": false,
        "note": "「流布」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:驚嘆:彼の勇気に驚嘆した",
    "term": "驚嘆",
    "target": "驚嘆",
    "sentence": "彼の勇気に驚嘆した",
    "meaning": "「驚嘆」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "驚嘆は、非常に感心して驚くこと。",
    "choices": [
      {
        "text": "彼の勇気に驚嘆した",
        "underline": "驚嘆",
        "correct": true,
        "note": "驚嘆は、非常に感心して驚くこと。"
      },
      {
        "text": "驚嘆を机に畳む",
        "underline": "驚嘆",
        "correct": false,
        "note": "「驚嘆」の適切な用法ではありません。"
      },
      {
        "text": "驚嘆な道路を渡る",
        "underline": "驚嘆",
        "correct": false,
        "note": "「驚嘆」の適切な用法ではありません。"
      },
      {
        "text": "驚嘆に資料を配る",
        "underline": "驚嘆",
        "correct": false,
        "note": "「驚嘆」の適切な用法ではありません。"
      },
      {
        "text": "驚嘆を郵送する",
        "underline": "驚嘆",
        "correct": false,
        "note": "「驚嘆」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:心服:師として心服する人物に出会った",
    "term": "心服",
    "target": "心服",
    "sentence": "師として心服する人物に出会った",
    "meaning": "「心服」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "心服は、心から尊敬して従うこと。",
    "choices": [
      {
        "text": "師として心服する人物に出会った",
        "underline": "心服",
        "correct": true,
        "note": "心服は、心から尊敬して従うこと。"
      },
      {
        "text": "心服を燃料にする",
        "underline": "心服",
        "correct": false,
        "note": "「心服」の適切な用法ではありません。"
      },
      {
        "text": "心服な雨が降る",
        "underline": "心服",
        "correct": false,
        "note": "「心服」の適切な用法ではありません。"
      },
      {
        "text": "心服に椅子を並べる",
        "underline": "心服",
        "correct": false,
        "note": "「心服」の適切な用法ではありません。"
      },
      {
        "text": "心服を昨日まで延ばす",
        "underline": "心服",
        "correct": false,
        "note": "「心服」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:進取:進取の精神で新規事業に挑む",
    "term": "進取",
    "target": "進取",
    "sentence": "進取の精神で新規事業に挑む",
    "meaning": "「進取」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "進取は、自ら進んで新しいことをすること。",
    "choices": [
      {
        "text": "進取の精神で新規事業に挑む",
        "underline": "進取",
        "correct": true,
        "note": "進取は、自ら進んで新しいことをすること。"
      },
      {
        "text": "進取を棚に飾る",
        "underline": "進取",
        "correct": false,
        "note": "「進取」の適切な用法ではありません。"
      },
      {
        "text": "進取な睡眠を飲む",
        "underline": "進取",
        "correct": false,
        "note": "「進取」の適切な用法ではありません。"
      },
      {
        "text": "進取に道路を横断する",
        "underline": "進取",
        "correct": false,
        "note": "「進取」の適切な用法ではありません。"
      },
      {
        "text": "進取を箱に詰める",
        "underline": "進取",
        "correct": false,
        "note": "「進取」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:卓見:会議で将来を見通した卓見を述べた",
    "term": "卓見",
    "target": "卓見",
    "sentence": "会議で将来を見通した卓見を述べた",
    "meaning": "「卓見」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "卓見は、優れた意見や見識。",
    "choices": [
      {
        "text": "会議で将来を見通した卓見を述べた",
        "underline": "卓見",
        "correct": true,
        "note": "卓見は、優れた意見や見識。"
      },
      {
        "text": "卓見を冷蔵庫で冷やす",
        "underline": "卓見",
        "correct": false,
        "note": "「卓見」の適切な用法ではありません。"
      },
      {
        "text": "卓見な坂道で転ぶ",
        "underline": "卓見",
        "correct": false,
        "note": "「卓見」の適切な用法ではありません。"
      },
      {
        "text": "卓見に昼食を食べる",
        "underline": "卓見",
        "correct": false,
        "note": "「卓見」の適切な用法ではありません。"
      },
      {
        "text": "卓見を契約書に挟む",
        "underline": "卓見",
        "correct": false,
        "note": "「卓見」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:参画:法案の作成に専門家が参画する",
    "term": "参画",
    "target": "参画",
    "sentence": "法案の作成に専門家が参画する",
    "meaning": "「参画」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "参画は、計画段階から参加すること。",
    "choices": [
      {
        "text": "法案の作成に専門家が参画する",
        "underline": "参画",
        "correct": true,
        "note": "参画は、計画段階から参加すること。"
      },
      {
        "text": "参画を靴に入れる",
        "underline": "参画",
        "correct": false,
        "note": "「参画」の適切な用法ではありません。"
      },
      {
        "text": "参画な料理を食べる",
        "underline": "参画",
        "correct": false,
        "note": "「参画」の適切な用法ではありません。"
      },
      {
        "text": "参画に窓を閉める",
        "underline": "参画",
        "correct": false,
        "note": "「参画」の適切な用法ではありません。"
      },
      {
        "text": "参画を雨で洗う",
        "underline": "参画",
        "correct": false,
        "note": "「参画」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:鎬:二党が鎬を削る激しい選挙戦となった",
    "term": "鎬",
    "target": "鎬",
    "sentence": "二党が鎬を削る激しい選挙戦となった",
    "meaning": "「鎬」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "鎬を削るは、互いに激しく争うこと。",
    "choices": [
      {
        "text": "二党が鎬を削る激しい選挙戦となった",
        "underline": "鎬",
        "correct": true,
        "note": "鎬を削るは、互いに激しく争うこと。"
      },
      {
        "text": "鎬を削って昼食を作る",
        "underline": "鎬",
        "correct": false,
        "note": "「鎬」の適切な用法ではありません。"
      },
      {
        "text": "鎬な記録をつける",
        "underline": "鎬",
        "correct": false,
        "note": "「鎬」の適切な用法ではありません。"
      },
      {
        "text": "鎬に契約を履行する",
        "underline": "鎬",
        "correct": false,
        "note": "「鎬」の適切な用法ではありません。"
      },
      {
        "text": "鎬を合わせて照準を定める",
        "underline": "鎬",
        "correct": false,
        "note": "「鎬」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:鳩首:関係者が鳩首協議を重ねた",
    "term": "鳩首",
    "target": "鳩首",
    "sentence": "関係者が鳩首協議を重ねた",
    "meaning": "「鳩首」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "鳩首は、人々が集まって額を寄せ合うこと。",
    "choices": [
      {
        "text": "関係者が鳩首協議を重ねた",
        "underline": "鳩首",
        "correct": true,
        "note": "鳩首は、人々が集まって額を寄せ合うこと。"
      },
      {
        "text": "鳩首を机に眠る",
        "underline": "鳩首",
        "correct": false,
        "note": "「鳩首」の適切な用法ではありません。"
      },
      {
        "text": "鳩首な天気を選ぶ",
        "underline": "鳩首",
        "correct": false,
        "note": "「鳩首」の適切な用法ではありません。"
      },
      {
        "text": "鳩首を水で割る",
        "underline": "鳩首",
        "correct": false,
        "note": "「鳩首」の適切な用法ではありません。"
      },
      {
        "text": "鳩首に切符を買う",
        "underline": "鳩首",
        "correct": false,
        "note": "「鳩首」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:木鐸:新聞は社会の木鐸であるべきだ",
    "term": "木鐸",
    "target": "木鐸",
    "sentence": "新聞は社会の木鐸であるべきだ",
    "meaning": "「木鐸」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "木鐸は、世の人を教え導く人や機関をたとえる語。",
    "choices": [
      {
        "text": "新聞は社会の木鐸であるべきだ",
        "underline": "木鐸",
        "correct": true,
        "note": "木鐸は、世の人を教え導く人や機関をたとえる語。"
      },
      {
        "text": "木鐸を食器棚にしまう",
        "underline": "木鐸",
        "correct": false,
        "note": "「木鐸」の適切な用法ではありません。"
      },
      {
        "text": "木鐸な速度で走る",
        "underline": "木鐸",
        "correct": false,
        "note": "「木鐸」の適切な用法ではありません。"
      },
      {
        "text": "木鐸に眠り込む",
        "underline": "木鐸",
        "correct": false,
        "note": "「木鐸」の適切な用法ではありません。"
      },
      {
        "text": "木鐸を雨に濡らす",
        "underline": "木鐸",
        "correct": false,
        "note": "「木鐸」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:陥穽:甘い誘いの陥穽にはまった",
    "term": "陥穽",
    "target": "陥穽",
    "sentence": "甘い誘いの陥穽にはまった",
    "meaning": "「陥穽」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "陥穽は、人をおとし入れる落とし穴やわな。",
    "choices": [
      {
        "text": "甘い誘いの陥穽にはまった",
        "underline": "陥穽",
        "correct": true,
        "note": "陥穽は、人をおとし入れる落とし穴やわな。"
      },
      {
        "text": "陥穽を履いて出かける",
        "underline": "陥穽",
        "correct": false,
        "note": "「陥穽」の適切な用法ではありません。"
      },
      {
        "text": "陥穽な料理を選ぶ",
        "underline": "陥穽",
        "correct": false,
        "note": "「陥穽」の適切な用法ではありません。"
      },
      {
        "text": "陥穽に会議を印刷する",
        "underline": "陥穽",
        "correct": false,
        "note": "「陥穽」の適切な用法ではありません。"
      },
      {
        "text": "陥穽を机で眠る",
        "underline": "陥穽",
        "correct": false,
        "note": "「陥穽」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:義憤:不正な処分に義憤を覚えた",
    "term": "義憤",
    "target": "義憤",
    "sentence": "不正な処分に義憤を覚えた",
    "meaning": "「義憤」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "義憤は、不正に対して起こる正義感からの怒り。",
    "choices": [
      {
        "text": "不正な処分に義憤を覚えた",
        "underline": "義憤",
        "correct": true,
        "note": "義憤は、不正に対して起こる正義感からの怒り。"
      },
      {
        "text": "義憤を冷やして飲む",
        "underline": "義憤",
        "correct": false,
        "note": "「義憤」の適切な用法ではありません。"
      },
      {
        "text": "義憤な駅に着く",
        "underline": "義憤",
        "correct": false,
        "note": "「義憤」の適切な用法ではありません。"
      },
      {
        "text": "義憤に書類を重ねる",
        "underline": "義憤",
        "correct": false,
        "note": "「義憤」の適切な用法ではありません。"
      },
      {
        "text": "義憤を靴で洗う",
        "underline": "義憤",
        "correct": false,
        "note": "「義憤」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:謳歌:青春を謳歌する",
    "term": "謳歌",
    "target": "謳歌",
    "sentence": "青春を謳歌する",
    "meaning": "「謳歌」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "謳歌は、恵まれた状態を大いに楽しみ表すこと。",
    "choices": [
      {
        "text": "青春を謳歌する",
        "underline": "謳歌",
        "correct": true,
        "note": "謳歌は、恵まれた状態を大いに楽しみ表すこと。"
      },
      {
        "text": "謳歌を契約する",
        "underline": "謳歌",
        "correct": false,
        "note": "「謳歌」の適切な用法ではありません。"
      },
      {
        "text": "謳歌な雨が降る",
        "underline": "謳歌",
        "correct": false,
        "note": "「謳歌」の適切な用法ではありません。"
      },
      {
        "text": "謳歌に資料を留める",
        "underline": "謳歌",
        "correct": false,
        "note": "「謳歌」の適切な用法ではありません。"
      },
      {
        "text": "謳歌を机に塗る",
        "underline": "謳歌",
        "correct": false,
        "note": "「謳歌」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:粉飾:決算を粉飾して業績をよく見せた",
    "term": "粉飾",
    "target": "粉飾",
    "sentence": "決算を粉飾して業績をよく見せた",
    "meaning": "「粉飾」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "粉飾は、実態をよく見せようと飾ること。",
    "choices": [
      {
        "text": "決算を粉飾して業績をよく見せた",
        "underline": "粉飾",
        "correct": true,
        "note": "粉飾は、実態をよく見せようと飾ること。"
      },
      {
        "text": "粉飾を夕食にする",
        "underline": "粉飾",
        "correct": false,
        "note": "「粉飾」の適切な用法ではありません。"
      },
      {
        "text": "粉飾な駅で降りる",
        "underline": "粉飾",
        "correct": false,
        "note": "「粉飾」の適切な用法ではありません。"
      },
      {
        "text": "粉飾に眠って忘れる",
        "underline": "粉飾",
        "correct": false,
        "note": "「粉飾」の適切な用法ではありません。"
      },
      {
        "text": "粉飾を契約として守る",
        "underline": "粉飾",
        "correct": false,
        "note": "「粉飾」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:因習:古い因習を打ち破る",
    "term": "因習",
    "target": "因習",
    "sentence": "古い因習を打ち破る",
    "meaning": "「因習」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "因習は、昔から続く古いしきたりや習慣。",
    "choices": [
      {
        "text": "古い因習を打ち破る",
        "underline": "因習",
        "correct": true,
        "note": "因習は、昔から続く古いしきたりや習慣。"
      },
      {
        "text": "因習を冷蔵庫に入れる",
        "underline": "因習",
        "correct": false,
        "note": "「因習」の適切な用法ではありません。"
      },
      {
        "text": "因習な水を飲む",
        "underline": "因習",
        "correct": false,
        "note": "「因習」の適切な用法ではありません。"
      },
      {
        "text": "因習に電車へ乗る",
        "underline": "因習",
        "correct": false,
        "note": "「因習」の適切な用法ではありません。"
      },
      {
        "text": "因習を机で洗う",
        "underline": "因習",
        "correct": false,
        "note": "「因習」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:大度:寛仁大度な態度で相手を許す",
    "term": "大度",
    "target": "大度",
    "sentence": "寛仁大度な態度で相手を許す",
    "meaning": "「大度」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "大度は、度量が大きく細事にこだわらないこと。",
    "choices": [
      {
        "text": "寛仁大度な態度で相手を許す",
        "underline": "大度",
        "correct": true,
        "note": "大度は、度量が大きく細事にこだわらないこと。"
      },
      {
        "text": "大度を封筒に貼る",
        "underline": "大度",
        "correct": false,
        "note": "「大度」の適切な用法ではありません。"
      },
      {
        "text": "大度な速度で眠る",
        "underline": "大度",
        "correct": false,
        "note": "「大度」の適切な用法ではありません。"
      },
      {
        "text": "大度に靴を磨く",
        "underline": "大度",
        "correct": false,
        "note": "「大度」の適切な用法ではありません。"
      },
      {
        "text": "大度を駅で拾う",
        "underline": "大度",
        "correct": false,
        "note": "「大度」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:言下:彼はその提案を言下に否定した",
    "term": "言下",
    "target": "言下",
    "sentence": "彼はその提案を言下に否定した",
    "meaning": "「言下」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "言下は、言い終わるか終わらないかのすぐその時。",
    "choices": [
      {
        "text": "彼はその提案を言下に否定した",
        "underline": "言下",
        "correct": true,
        "note": "言下は、言い終わるか終わらないかのすぐその時。"
      },
      {
        "text": "言下を三つ食べる",
        "underline": "言下",
        "correct": false,
        "note": "「言下」の適切な用法ではありません。"
      },
      {
        "text": "言下な青空が続く",
        "underline": "言下",
        "correct": false,
        "note": "「言下」の適切な用法ではありません。"
      },
      {
        "text": "言下に椅子を冷やす",
        "underline": "言下",
        "correct": false,
        "note": "「言下」の適切な用法ではありません。"
      },
      {
        "text": "言下を靴で履く",
        "underline": "言下",
        "correct": false,
        "note": "「言下」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:居丈高:相手は居丈高な態度に出た",
    "term": "居丈高",
    "target": "居丈高",
    "sentence": "相手は居丈高な態度に出た",
    "meaning": "「居丈高」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "居丈高は、人を威圧するような態度。",
    "choices": [
      {
        "text": "相手は居丈高な態度に出た",
        "underline": "居丈高",
        "correct": true,
        "note": "居丈高は、人を威圧するような態度。"
      },
      {
        "text": "居丈高を郵送する",
        "underline": "居丈高",
        "correct": false,
        "note": "「居丈高」の適切な用法ではありません。"
      },
      {
        "text": "居丈高な水を飲む",
        "underline": "居丈高",
        "correct": false,
        "note": "「居丈高」の適切な用法ではありません。"
      },
      {
        "text": "居丈高に契約を履く",
        "underline": "居丈高",
        "correct": false,
        "note": "「居丈高」の適切な用法ではありません。"
      },
      {
        "text": "居丈高を机に植える",
        "underline": "居丈高",
        "correct": false,
        "note": "「居丈高」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:瞠目:瞠目すべき活躍を見せた",
    "term": "瞠目",
    "target": "瞠目",
    "sentence": "瞠目すべき活躍を見せた",
    "meaning": "「瞠目」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "瞠目は、驚いたり感心したりして目を見張ること。",
    "choices": [
      {
        "text": "瞠目すべき活躍を見せた",
        "underline": "瞠目",
        "correct": true,
        "note": "瞠目は、驚いたり感心したりして目を見張ること。"
      },
      {
        "text": "瞠目を棚に飾る",
        "underline": "瞠目",
        "correct": false,
        "note": "「瞠目」の適切な用法ではありません。"
      },
      {
        "text": "瞠目な靴を買う",
        "underline": "瞠目",
        "correct": false,
        "note": "「瞠目」の適切な用法ではありません。"
      },
      {
        "text": "瞠目に資料を冷やす",
        "underline": "瞠目",
        "correct": false,
        "note": "「瞠目」の適切な用法ではありません。"
      },
      {
        "text": "瞠目を駅で眠る",
        "underline": "瞠目",
        "correct": false,
        "note": "「瞠目」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:保身:責任追及を恐れて保身に走った",
    "term": "保身",
    "target": "保身",
    "sentence": "責任追及を恐れて保身に走った",
    "meaning": "「保身」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "保身は、自分の地位や安全を守ろうとすること。",
    "choices": [
      {
        "text": "責任追及を恐れて保身に走った",
        "underline": "保身",
        "correct": true,
        "note": "保身は、自分の地位や安全を守ろうとすること。"
      },
      {
        "text": "保身を水で割る",
        "underline": "保身",
        "correct": false,
        "note": "「保身」の適切な用法ではありません。"
      },
      {
        "text": "保身な花を植える",
        "underline": "保身",
        "correct": false,
        "note": "「保身」の適切な用法ではありません。"
      },
      {
        "text": "保身に皿を洗う",
        "underline": "保身",
        "correct": false,
        "note": "「保身」の適切な用法ではありません。"
      },
      {
        "text": "保身を靴に入れる",
        "underline": "保身",
        "correct": false,
        "note": "「保身」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:跳梁:悪徳業者が跳梁する状況を放置できない",
    "term": "跳梁",
    "target": "跳梁",
    "sentence": "悪徳業者が跳梁する状況を放置できない",
    "meaning": "「跳梁」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "跳梁は、悪者などが勝手にのさばること。",
    "choices": [
      {
        "text": "悪徳業者が跳梁する状況を放置できない",
        "underline": "跳梁",
        "correct": true,
        "note": "跳梁は、悪者などが勝手にのさばること。"
      },
      {
        "text": "跳梁を冷やして食べる",
        "underline": "跳梁",
        "correct": false,
        "note": "「跳梁」の適切な用法ではありません。"
      },
      {
        "text": "跳梁な資料を読む",
        "underline": "跳梁",
        "correct": false,
        "note": "「跳梁」の適切な用法ではありません。"
      },
      {
        "text": "跳梁に眠り込む",
        "underline": "跳梁",
        "correct": false,
        "note": "「跳梁」の適切な用法ではありません。"
      },
      {
        "text": "跳梁を契約に結ぶ",
        "underline": "跳梁",
        "correct": false,
        "note": "「跳梁」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:履行:契約を履行する義務がある",
    "term": "履行",
    "target": "履行",
    "sentence": "契約を履行する義務がある",
    "meaning": "「履行」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "履行は、約束や契約を実際に行うこと。",
    "choices": [
      {
        "text": "契約を履行する義務がある",
        "underline": "履行",
        "correct": true,
        "note": "履行は、約束や契約を実際に行うこと。"
      },
      {
        "text": "履行を食卓に並べる",
        "underline": "履行",
        "correct": false,
        "note": "「履行」の適切な用法ではありません。"
      },
      {
        "text": "履行な坂を登る",
        "underline": "履行",
        "correct": false,
        "note": "「履行」の適切な用法ではありません。"
      },
      {
        "text": "履行に眠る",
        "underline": "履行",
        "correct": false,
        "note": "「履行」の適切な用法ではありません。"
      },
      {
        "text": "履行を机で洗う",
        "underline": "履行",
        "correct": false,
        "note": "「履行」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:安閑:被害が広がる中で安閑としてはいられない",
    "term": "安閑",
    "target": "安閑",
    "sentence": "被害が広がる中で安閑としてはいられない",
    "meaning": "「安閑」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "安閑は、安らかで静かにしているさま。",
    "choices": [
      {
        "text": "被害が広がる中で安閑としてはいられない",
        "underline": "安閑",
        "correct": true,
        "note": "安閑は、安らかで静かにしているさま。"
      },
      {
        "text": "安閑を郵送する",
        "underline": "安閑",
        "correct": false,
        "note": "「安閑」の適切な用法ではありません。"
      },
      {
        "text": "安閑な料理を飲む",
        "underline": "安閑",
        "correct": false,
        "note": "「安閑」の適切な用法ではありません。"
      },
      {
        "text": "安閑に書類を洗う",
        "underline": "安閑",
        "correct": false,
        "note": "「安閑」の適切な用法ではありません。"
      },
      {
        "text": "安閑を駅に置く",
        "underline": "安閑",
        "correct": false,
        "note": "「安閑」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:私淑:彼は若い頃からその作家に私淑していた",
    "term": "私淑",
    "target": "私淑",
    "sentence": "彼は若い頃からその作家に私淑していた",
    "meaning": "「私淑」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "私淑は、直接教えを受けていない人をひそかに尊敬し師と仰ぐこと。",
    "choices": [
      {
        "text": "彼は若い頃からその作家に私淑していた",
        "underline": "私淑",
        "correct": true,
        "note": "私淑は、直接教えを受けていない人をひそかに尊敬し師と仰ぐこと。"
      },
      {
        "text": "私淑を冷凍する",
        "underline": "私淑",
        "correct": false,
        "note": "「私淑」の適切な用法ではありません。"
      },
      {
        "text": "私淑な雨を食べる",
        "underline": "私淑",
        "correct": false,
        "note": "「私淑」の適切な用法ではありません。"
      },
      {
        "text": "私淑に机を洗う",
        "underline": "私淑",
        "correct": false,
        "note": "「私淑」の適切な用法ではありません。"
      },
      {
        "text": "私淑を靴で履く",
        "underline": "私淑",
        "correct": false,
        "note": "「私淑」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:鼓舞:監督の言葉が選手の士気を鼓舞した",
    "term": "鼓舞",
    "target": "鼓舞",
    "sentence": "監督の言葉が選手の士気を鼓舞した",
    "meaning": "「鼓舞」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "鼓舞は、励まして奮い立たせること。",
    "choices": [
      {
        "text": "監督の言葉が選手の士気を鼓舞した",
        "underline": "鼓舞",
        "correct": true,
        "note": "鼓舞は、励まして奮い立たせること。"
      },
      {
        "text": "鼓舞を封筒で眠る",
        "underline": "鼓舞",
        "correct": false,
        "note": "「鼓舞」の適切な用法ではありません。"
      },
      {
        "text": "鼓舞な天気を飲む",
        "underline": "鼓舞",
        "correct": false,
        "note": "「鼓舞」の適切な用法ではありません。"
      },
      {
        "text": "鼓舞に靴を置く",
        "underline": "鼓舞",
        "correct": false,
        "note": "「鼓舞」の適切な用法ではありません。"
      },
      {
        "text": "鼓舞を昨日に延期する",
        "underline": "鼓舞",
        "correct": false,
        "note": "「鼓舞」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:当意即妙:記者会見で当意即妙な受け答えをした",
    "term": "当意即妙",
    "target": "当意即妙",
    "sentence": "記者会見で当意即妙な受け答えをした",
    "meaning": "「当意即妙」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "当意即妙は、その場に応じて機転がきくこと。",
    "choices": [
      {
        "text": "記者会見で当意即妙な受け答えをした",
        "underline": "当意即妙",
        "correct": true,
        "note": "当意即妙は、その場に応じて機転がきくこと。"
      },
      {
        "text": "当意即妙を冷蔵庫に入れる",
        "underline": "当意即妙",
        "correct": false,
        "note": "「当意即妙」の適切な用法ではありません。"
      },
      {
        "text": "当意即妙な靴を履く",
        "underline": "当意即妙",
        "correct": false,
        "note": "「当意即妙」の適切な用法ではありません。"
      },
      {
        "text": "当意即妙に水をこぼす",
        "underline": "当意即妙",
        "correct": false,
        "note": "「当意即妙」の適切な用法ではありません。"
      },
      {
        "text": "当意即妙を封筒で送る",
        "underline": "当意即妙",
        "correct": false,
        "note": "「当意即妙」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:崇高:崇高な理想を抱いて活動する",
    "term": "崇高",
    "target": "崇高",
    "sentence": "崇高な理想を抱いて活動する",
    "meaning": "「崇高」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "崇高は、気高く尊いこと。",
    "choices": [
      {
        "text": "崇高な理想を抱いて活動する",
        "underline": "崇高",
        "correct": true,
        "note": "崇高は、気高く尊いこと。"
      },
      {
        "text": "崇高を食べて休む",
        "underline": "崇高",
        "correct": false,
        "note": "「崇高」の適切な用法ではありません。"
      },
      {
        "text": "崇高な駅を渡る",
        "underline": "崇高",
        "correct": false,
        "note": "「崇高」の適切な用法ではありません。"
      },
      {
        "text": "崇高に椅子を洗う",
        "underline": "崇高",
        "correct": false,
        "note": "「崇高」の適切な用法ではありません。"
      },
      {
        "text": "崇高を契約する",
        "underline": "崇高",
        "correct": false,
        "note": "「崇高」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:出仕:若くして官庁に出仕した",
    "term": "出仕",
    "target": "出仕",
    "sentence": "若くして官庁に出仕した",
    "meaning": "「出仕」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "出仕は、役所などに勤めること。",
    "choices": [
      {
        "text": "若くして官庁に出仕した",
        "underline": "出仕",
        "correct": true,
        "note": "出仕は、役所などに勤めること。"
      },
      {
        "text": "出仕を冷やして飲む",
        "underline": "出仕",
        "correct": false,
        "note": "「出仕」の適切な用法ではありません。"
      },
      {
        "text": "出仕な机を買う",
        "underline": "出仕",
        "correct": false,
        "note": "「出仕」の適切な用法ではありません。"
      },
      {
        "text": "出仕に雨を畳む",
        "underline": "出仕",
        "correct": false,
        "note": "「出仕」の適切な用法ではありません。"
      },
      {
        "text": "出仕を棚に眠る",
        "underline": "出仕",
        "correct": false,
        "note": "「出仕」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:射幸:射幸心をあおる広告には注意が必要だ",
    "term": "射幸",
    "target": "射幸",
    "sentence": "射幸心をあおる広告には注意が必要だ",
    "meaning": "「射幸」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "射幸は、偶然の利益や成功を当てにすること。",
    "choices": [
      {
        "text": "射幸心をあおる広告には注意が必要だ",
        "underline": "射幸",
        "correct": true,
        "note": "射幸は、偶然の利益や成功を当てにすること。"
      },
      {
        "text": "射幸を皿に盛る",
        "underline": "射幸",
        "correct": false,
        "note": "「射幸」の適切な用法ではありません。"
      },
      {
        "text": "射幸な雨を浴びる",
        "underline": "射幸",
        "correct": false,
        "note": "「射幸」の適切な用法ではありません。"
      },
      {
        "text": "射幸に机を磨く",
        "underline": "射幸",
        "correct": false,
        "note": "「射幸」の適切な用法ではありません。"
      },
      {
        "text": "射幸を駅で拾う",
        "underline": "射幸",
        "correct": false,
        "note": "「射幸」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:蔓延:汚職が蔓延している組織を改革する",
    "term": "蔓延",
    "target": "蔓延",
    "sentence": "汚職が蔓延している組織を改革する",
    "meaning": "「蔓延」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "蔓延は、好ましくないことが広がること。",
    "choices": [
      {
        "text": "汚職が蔓延している組織を改革する",
        "underline": "蔓延",
        "correct": true,
        "note": "蔓延は、好ましくないことが広がること。"
      },
      {
        "text": "蔓延を靴で履く",
        "underline": "蔓延",
        "correct": false,
        "note": "「蔓延」の適切な用法ではありません。"
      },
      {
        "text": "蔓延な説明を冷やす",
        "underline": "蔓延",
        "correct": false,
        "note": "「蔓延」の適切な用法ではありません。"
      },
      {
        "text": "蔓延に昼食を眠る",
        "underline": "蔓延",
        "correct": false,
        "note": "「蔓延」の適切な用法ではありません。"
      },
      {
        "text": "蔓延を机で食べる",
        "underline": "蔓延",
        "correct": false,
        "note": "「蔓延」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:落成:新社屋が落成し記念式典が開かれた",
    "term": "落成",
    "target": "落成",
    "sentence": "新社屋が落成し記念式典が開かれた",
    "meaning": "「落成」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "落成は、工事が完了して建物などができあがること。",
    "choices": [
      {
        "text": "新社屋が落成し記念式典が開かれた",
        "underline": "落成",
        "correct": true,
        "note": "落成は、工事が完了して建物などができあがること。"
      },
      {
        "text": "落成を冷蔵庫に入れる",
        "underline": "落成",
        "correct": false,
        "note": "「落成」の適切な用法ではありません。"
      },
      {
        "text": "落成な声で走る",
        "underline": "落成",
        "correct": false,
        "note": "「落成」の適切な用法ではありません。"
      },
      {
        "text": "落成に椅子を洗う",
        "underline": "落成",
        "correct": false,
        "note": "「落成」の適切な用法ではありません。"
      },
      {
        "text": "落成を契約で眠る",
        "underline": "落成",
        "correct": false,
        "note": "「落成」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:言外:彼は不満を言外ににおわせた",
    "term": "言外",
    "target": "言外",
    "sentence": "彼は不満を言外ににおわせた",
    "meaning": "「言外」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "言外は、直接は言葉に出さない部分。",
    "choices": [
      {
        "text": "彼は不満を言外ににおわせた",
        "underline": "言外",
        "correct": true,
        "note": "言外は、直接は言葉に出さない部分。"
      },
      {
        "text": "言外を食卓に出す",
        "underline": "言外",
        "correct": false,
        "note": "「言外」の適切な用法ではありません。"
      },
      {
        "text": "言外な坂を飲む",
        "underline": "言外",
        "correct": false,
        "note": "「言外」の適切な用法ではありません。"
      },
      {
        "text": "言外に靴を履く",
        "underline": "言外",
        "correct": false,
        "note": "「言外」の適切な用法ではありません。"
      },
      {
        "text": "言外を机で洗う",
        "underline": "言外",
        "correct": false,
        "note": "「言外」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:言質:交渉相手から言質をとる",
    "term": "言質",
    "target": "言質",
    "sentence": "交渉相手から言質をとる",
    "meaning": "「言質」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "言質は、後で証拠となる言葉。",
    "choices": [
      {
        "text": "交渉相手から言質をとる",
        "underline": "言質",
        "correct": true,
        "note": "言質は、後で証拠となる言葉。"
      },
      {
        "text": "言質を水で割る",
        "underline": "言質",
        "correct": false,
        "note": "「言質」の適切な用法ではありません。"
      },
      {
        "text": "言質な花を飾る",
        "underline": "言質",
        "correct": false,
        "note": "「言質」の適切な用法ではありません。"
      },
      {
        "text": "言質に眠り込む",
        "underline": "言質",
        "correct": false,
        "note": "「言質」の適切な用法ではありません。"
      },
      {
        "text": "言質を駅で履く",
        "underline": "言質",
        "correct": false,
        "note": "「言質」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:博覧:資料を博覧に供する",
    "term": "博覧",
    "target": "博覧",
    "sentence": "資料を博覧に供する",
    "meaning": "「博覧」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "博覧に供するは、広く一般の人が見られるようにすること。",
    "choices": [
      {
        "text": "資料を博覧に供する",
        "underline": "博覧",
        "correct": true,
        "note": "博覧に供するは、広く一般の人が見られるようにすること。"
      },
      {
        "text": "博覧を飲み干す",
        "underline": "博覧",
        "correct": false,
        "note": "「博覧」の適切な用法ではありません。"
      },
      {
        "text": "博覧な靴を選ぶ",
        "underline": "博覧",
        "correct": false,
        "note": "「博覧」の適切な用法ではありません。"
      },
      {
        "text": "博覧に椅子を洗う",
        "underline": "博覧",
        "correct": false,
        "note": "「博覧」の適切な用法ではありません。"
      },
      {
        "text": "博覧を契約に履く",
        "underline": "博覧",
        "correct": false,
        "note": "「博覧」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:画策:勢力拡大を実現しようと画策する",
    "term": "画策",
    "target": "画策",
    "sentence": "勢力拡大を実現しようと画策する",
    "meaning": "「画策」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "画策は、計画を立てて実行しようとすること。",
    "choices": [
      {
        "text": "勢力拡大を実現しようと画策する",
        "underline": "画策",
        "correct": true,
        "note": "画策は、計画を立てて実行しようとすること。"
      },
      {
        "text": "画策を食べて休む",
        "underline": "画策",
        "correct": false,
        "note": "「画策」の適切な用法ではありません。"
      },
      {
        "text": "画策な水を飲む",
        "underline": "画策",
        "correct": false,
        "note": "「画策」の適切な用法ではありません。"
      },
      {
        "text": "画策に机を洗う",
        "underline": "画策",
        "correct": false,
        "note": "「画策」の適切な用法ではありません。"
      },
      {
        "text": "画策を駅で拾う",
        "underline": "画策",
        "correct": false,
        "note": "「画策」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:慇懃:来客に慇懃に応対する",
    "term": "慇懃",
    "target": "慇懃",
    "sentence": "来客に慇懃に応対する",
    "meaning": "「慇懃」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "慇懃は、礼儀正しく丁寧なこと。",
    "choices": [
      {
        "text": "来客に慇懃に応対する",
        "underline": "慇懃",
        "correct": true,
        "note": "慇懃は、礼儀正しく丁寧なこと。"
      },
      {
        "text": "慇懃を冷凍する",
        "underline": "慇懃",
        "correct": false,
        "note": "「慇懃」の適切な用法ではありません。"
      },
      {
        "text": "慇懃な坂を飲む",
        "underline": "慇懃",
        "correct": false,
        "note": "「慇懃」の適切な用法ではありません。"
      },
      {
        "text": "慇懃に皿を履く",
        "underline": "慇懃",
        "correct": false,
        "note": "「慇懃」の適切な用法ではありません。"
      },
      {
        "text": "慇懃を封筒に眠る",
        "underline": "慇懃",
        "correct": false,
        "note": "「慇懃」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:果断:果断な対応が功を奏した",
    "term": "果断",
    "target": "果断",
    "sentence": "果断な対応が功を奏した",
    "meaning": "「果断」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "果断は、ためらわず思い切って行うさま。",
    "choices": [
      {
        "text": "果断な対応が功を奏した",
        "underline": "果断",
        "correct": true,
        "note": "果断は、ためらわず思い切って行うさま。"
      },
      {
        "text": "果断を机で飲む",
        "underline": "果断",
        "correct": false,
        "note": "「果断」の適切な用法ではありません。"
      },
      {
        "text": "果断な眠りを食べる",
        "underline": "果断",
        "correct": false,
        "note": "「果断」の適切な用法ではありません。"
      },
      {
        "text": "果断に雨を保存する",
        "underline": "果断",
        "correct": false,
        "note": "「果断」の適切な用法ではありません。"
      },
      {
        "text": "果断を駅に冷やす",
        "underline": "果断",
        "correct": false,
        "note": "「果断」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:省察:自らの言動を省察する",
    "term": "省察",
    "target": "省察",
    "sentence": "自らの言動を省察する",
    "meaning": "「省察」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "省察は、自分自身を反省して考えること。",
    "choices": [
      {
        "text": "自らの言動を省察する",
        "underline": "省察",
        "correct": true,
        "note": "省察は、自分自身を反省して考えること。"
      },
      {
        "text": "省察を机に植える",
        "underline": "省察",
        "correct": false,
        "note": "「省察」の適切な用法ではありません。"
      },
      {
        "text": "省察な速度で眠る",
        "underline": "省察",
        "correct": false,
        "note": "「省察」の適切な用法ではありません。"
      },
      {
        "text": "省察に水を食べる",
        "underline": "省察",
        "correct": false,
        "note": "「省察」の適切な用法ではありません。"
      },
      {
        "text": "省察を契約で履く",
        "underline": "省察",
        "correct": false,
        "note": "「省察」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:嘆息:失敗の知らせに嘆息をもらした",
    "term": "嘆息",
    "target": "嘆息",
    "sentence": "失敗の知らせに嘆息をもらした",
    "meaning": "「嘆息」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "嘆息は、なげいてため息をつくこと。",
    "choices": [
      {
        "text": "失敗の知らせに嘆息をもらした",
        "underline": "嘆息",
        "correct": true,
        "note": "嘆息は、なげいてため息をつくこと。"
      },
      {
        "text": "嘆息を冷蔵庫に入れる",
        "underline": "嘆息",
        "correct": false,
        "note": "「嘆息」の適切な用法ではありません。"
      },
      {
        "text": "嘆息な道路を走る",
        "underline": "嘆息",
        "correct": false,
        "note": "「嘆息」の適切な用法ではありません。"
      },
      {
        "text": "嘆息に資料を洗う",
        "underline": "嘆息",
        "correct": false,
        "note": "「嘆息」の適切な用法ではありません。"
      },
      {
        "text": "嘆息を机で履く",
        "underline": "嘆息",
        "correct": false,
        "note": "「嘆息」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:意匠:照明に意匠を凝らした店舗",
    "term": "意匠",
    "target": "意匠",
    "sentence": "照明に意匠を凝らした店舗",
    "meaning": "「意匠」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "意匠は、工夫をめぐらしたデザインや考案。",
    "choices": [
      {
        "text": "照明に意匠を凝らした店舗",
        "underline": "意匠",
        "correct": true,
        "note": "意匠は、工夫をめぐらしたデザインや考案。"
      },
      {
        "text": "意匠を昼食にする",
        "underline": "意匠",
        "correct": false,
        "note": "「意匠」の適切な用法ではありません。"
      },
      {
        "text": "意匠な雨を飲む",
        "underline": "意匠",
        "correct": false,
        "note": "「意匠」の適切な用法ではありません。"
      },
      {
        "text": "意匠に駅へ眠る",
        "underline": "意匠",
        "correct": false,
        "note": "「意匠」の適切な用法ではありません。"
      },
      {
        "text": "意匠を靴に履く",
        "underline": "意匠",
        "correct": false,
        "note": "「意匠」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:迎合:時代の風潮に迎合する発言が目立つ",
    "term": "迎合",
    "target": "迎合",
    "sentence": "時代の風潮に迎合する発言が目立つ",
    "meaning": "「迎合」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "迎合は、相手や世間に調子を合わせること。",
    "choices": [
      {
        "text": "時代の風潮に迎合する発言が目立つ",
        "underline": "迎合",
        "correct": true,
        "note": "迎合は、相手や世間に調子を合わせること。"
      },
      {
        "text": "迎合を机で飲む",
        "underline": "迎合",
        "correct": false,
        "note": "「迎合」の適切な用法ではありません。"
      },
      {
        "text": "迎合な靴を食べる",
        "underline": "迎合",
        "correct": false,
        "note": "「迎合」の適切な用法ではありません。"
      },
      {
        "text": "迎合に契約を冷やす",
        "underline": "迎合",
        "correct": false,
        "note": "「迎合」の適切な用法ではありません。"
      },
      {
        "text": "迎合を雨で眠る",
        "underline": "迎合",
        "correct": false,
        "note": "「迎合」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:完備:条件を完備した立地を選ぶ",
    "term": "完備",
    "target": "完備",
    "sentence": "条件を完備した立地を選ぶ",
    "meaning": "「完備」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "完備は、必要なものが十分に備わっていること。",
    "choices": [
      {
        "text": "条件を完備した立地を選ぶ",
        "underline": "完備",
        "correct": true,
        "note": "完備は、必要なものが十分に備わっていること。"
      },
      {
        "text": "完備を食べて休む",
        "underline": "完備",
        "correct": false,
        "note": "「完備」の適切な用法ではありません。"
      },
      {
        "text": "完備な雨を履く",
        "underline": "完備",
        "correct": false,
        "note": "「完備」の適切な用法ではありません。"
      },
      {
        "text": "完備に机を眠る",
        "underline": "完備",
        "correct": false,
        "note": "「完備」の適切な用法ではありません。"
      },
      {
        "text": "完備を昨日に延期する",
        "underline": "完備",
        "correct": false,
        "note": "「完備」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:銘記:師の教えを胸に銘記する",
    "term": "銘記",
    "target": "銘記",
    "sentence": "師の教えを胸に銘記する",
    "meaning": "「銘記」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "銘記は、心に刻み込むこと。",
    "choices": [
      {
        "text": "師の教えを胸に銘記する",
        "underline": "銘記",
        "correct": true,
        "note": "銘記は、心に刻み込むこと。"
      },
      {
        "text": "銘記を冷やして食べる",
        "underline": "銘記",
        "correct": false,
        "note": "「銘記」の適切な用法ではありません。"
      },
      {
        "text": "銘記な駅に座る",
        "underline": "銘記",
        "correct": false,
        "note": "「銘記」の適切な用法ではありません。"
      },
      {
        "text": "銘記に皿を洗う",
        "underline": "銘記",
        "correct": false,
        "note": "「銘記」の適切な用法ではありません。"
      },
      {
        "text": "銘記を靴で眠る",
        "underline": "銘記",
        "correct": false,
        "note": "「銘記」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:断腸:断腸の思いで店を手放した",
    "term": "断腸",
    "target": "断腸",
    "sentence": "断腸の思いで店を手放した",
    "meaning": "「断腸」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "断腸は、非常につらく悲しいこと。",
    "choices": [
      {
        "text": "断腸の思いで店を手放した",
        "underline": "断腸",
        "correct": true,
        "note": "断腸は、非常につらく悲しいこと。"
      },
      {
        "text": "断腸を昼食にする",
        "underline": "断腸",
        "correct": false,
        "note": "「断腸」の適切な用法ではありません。"
      },
      {
        "text": "断腸な靴を履く",
        "underline": "断腸",
        "correct": false,
        "note": "「断腸」の適切な用法ではありません。"
      },
      {
        "text": "断腸に資料を冷やす",
        "underline": "断腸",
        "correct": false,
        "note": "「断腸」の適切な用法ではありません。"
      },
      {
        "text": "断腸を机で洗う",
        "underline": "断腸",
        "correct": false,
        "note": "「断腸」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:仮託:神話に仮託して現代社会を語る",
    "term": "仮託",
    "target": "仮託",
    "sentence": "神話に仮託して現代社会を語る",
    "meaning": "「仮託」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "仮託は、他の物事を借りて言い表すこと。",
    "choices": [
      {
        "text": "神話に仮託して現代社会を語る",
        "underline": "仮託",
        "correct": true,
        "note": "仮託は、他の物事を借りて言い表すこと。"
      },
      {
        "text": "仮託を食卓に並べる",
        "underline": "仮託",
        "correct": false,
        "note": "「仮託」の適切な用法ではありません。"
      },
      {
        "text": "仮託な水を飲む",
        "underline": "仮託",
        "correct": false,
        "note": "「仮託」の適切な用法ではありません。"
      },
      {
        "text": "仮託に駅を洗う",
        "underline": "仮託",
        "correct": false,
        "note": "「仮託」の適切な用法ではありません。"
      },
      {
        "text": "仮託を靴で履く",
        "underline": "仮託",
        "correct": false,
        "note": "「仮託」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:雄飛:海外に雄飛して事業を広げる",
    "term": "雄飛",
    "target": "雄飛",
    "sentence": "海外に雄飛して事業を広げる",
    "meaning": "「雄飛」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "雄飛は、勢い盛んに活動すること。",
    "choices": [
      {
        "text": "海外に雄飛して事業を広げる",
        "underline": "雄飛",
        "correct": true,
        "note": "雄飛は、勢い盛んに活動すること。"
      },
      {
        "text": "雄飛を冷蔵庫に入れる",
        "underline": "雄飛",
        "correct": false,
        "note": "「雄飛」の適切な用法ではありません。"
      },
      {
        "text": "雄飛な椅子を食べる",
        "underline": "雄飛",
        "correct": false,
        "note": "「雄飛」の適切な用法ではありません。"
      },
      {
        "text": "雄飛に契約を洗う",
        "underline": "雄飛",
        "correct": false,
        "note": "「雄飛」の適切な用法ではありません。"
      },
      {
        "text": "雄飛を昨日で眠る",
        "underline": "雄飛",
        "correct": false,
        "note": "「雄飛」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:晦日:晦日前で店は忙しい",
    "term": "晦日",
    "target": "晦日",
    "sentence": "晦日前で店は忙しい",
    "meaning": "「晦日」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "晦日は、月の最後の日。",
    "choices": [
      {
        "text": "晦日前で店は忙しい",
        "underline": "晦日",
        "correct": true,
        "note": "晦日は、月の最後の日。"
      },
      {
        "text": "晦日を靴で履く",
        "underline": "晦日",
        "correct": false,
        "note": "「晦日」の適切な用法ではありません。"
      },
      {
        "text": "晦日な料理を冷やす",
        "underline": "晦日",
        "correct": false,
        "note": "「晦日」の適切な用法ではありません。"
      },
      {
        "text": "晦日に机を飲む",
        "underline": "晦日",
        "correct": false,
        "note": "「晦日」の適切な用法ではありません。"
      },
      {
        "text": "晦日を駅で眠る",
        "underline": "晦日",
        "correct": false,
        "note": "「晦日」の適切な用法ではありません。"
      }
    ]
  },
  {
    "id": "external-usage:不埒:不埒な振る舞いを厳しく注意する",
    "term": "不埒",
    "target": "不埒",
    "sentence": "不埒な振る舞いを厳しく注意する",
    "meaning": "「不埒」の使い方",
    "category": "語句の用法",
    "difficulty": "標準",
    "note": "不埒は、道理に外れていてけしからぬこと。",
    "choices": [
      {
        "text": "不埒な振る舞いを厳しく注意する",
        "underline": "不埒",
        "correct": true,
        "note": "不埒は、道理に外れていてけしからぬこと。"
      },
      {
        "text": "不埒を食べて休む",
        "underline": "不埒",
        "correct": false,
        "note": "「不埒」の適切な用法ではありません。"
      },
      {
        "text": "不埒な雨を飲む",
        "underline": "不埒",
        "correct": false,
        "note": "「不埒」の適切な用法ではありません。"
      },
      {
        "text": "不埒に椅子を洗う",
        "underline": "不埒",
        "correct": false,
        "note": "「不埒」の適切な用法ではありません。"
      },
      {
        "text": "不埒を契約に履く",
        "underline": "不埒",
        "correct": false,
        "note": "「不埒」の適切な用法ではありません。"
      }
    ]
  }
];

const state = {
  mode: "all",
  direction: "term-to-meaning",
  current: null,
  reviewingQuestionId: null,
  started: false,
  answeredThisSession: 0,
  setSize: 10,
  activeSetSize: 10,
  activeQuestions: [],
  activeReviewQuestionIds: [],
  setResults: [],
  showingSummary: false,
  pendingSetSummary: false,
  locked: false,
  progress: loadProgress(),
  reviewQueue: loadReviewQueue()
};

const els = {
  accuracy: document.querySelector("#accuracy"),
  answeredCount: document.querySelector("#answeredCount"),
  correctCount: document.querySelector("#correctCount"),
  weakCount: document.querySelector("#weakCount"),
  totalCount: document.querySelector("#totalCount"),
  sessionProgress: document.querySelector("#sessionProgress"),
  sessionCount: document.querySelector("#sessionCount"),
  addToReview: document.querySelector("#addToReview"),
  homeButton: document.querySelector("#homeButton"),
  nextQuestion: document.querySelector("#nextQuestion"),
  categoryBadge: document.querySelector("#categoryBadge"),
  difficultyBadge: document.querySelector("#difficultyBadge"),
  promptLabel: document.querySelector("#promptLabel"),
  questionText: document.querySelector("#questionText"),
  choices: document.querySelector("#choices"),
  feedback: document.querySelector("#feedback"),
  startSet: document.querySelector("#startSet"),
  resetProgress: document.querySelector("#resetProgress"),
  clearWeak: document.querySelector("#clearWeak"),
  reviewList: document.querySelector("#reviewList"),
  choiceTemplate: document.querySelector("#choiceTemplate")
};

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    document.querySelectorAll(".mode-button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    renderHome();
  });
});

document.querySelectorAll(".direction-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.direction = button.dataset.direction;
    document.querySelectorAll(".direction-button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    renderHome();
  });
});
document.querySelectorAll(".set-size-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.setSize = Number(button.dataset.setSize);
    document.querySelectorAll(".set-size-button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    resetSet();
    renderHome();
  });
});
els.startSet.addEventListener("click", () => startSet());

els.homeButton.addEventListener("click", () => renderHome());

els.addToReview.addEventListener("click", () => {
  if (!state.current || state.showingSummary) return;
  addCurrentQuestionToReview();
});

els.nextQuestion.addEventListener("click", () => {
  if (!state.locked) return;
  if (state.pendingSetSummary) {
    renderSetSummary();
    return;
  }
  if (state.showingSummary) {
    startSet();
    return;
  }
  renderNextQuestion();
});

els.resetProgress.addEventListener("click", () => {
  if (!confirm("学習状況をリセットしますか？")) return;
  state.progress = {};
  state.reviewQueue = [];
  resetSet();
  saveProgress();
  saveReviewQueue();
  renderStats();
  renderReview();
  renderHome();
});

els.clearWeak.addEventListener("click", () => {
  Object.values(state.progress).forEach((entry) => {
    entry.wrong = 0;
    entry.review = false;
  });
  state.reviewQueue = [];
  saveProgress();
  saveReviewQueue();
  renderStats();
  renderReview();
});

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem("spi-vocab-progress") || "{}");
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem("spi-vocab-progress", JSON.stringify(state.progress));
}

function loadReviewQueue() {
  try {
    const queue = JSON.parse(localStorage.getItem("spi-vocab-review-queue") || "[]");
    return Array.isArray(queue) ? queue : [];
  } catch {
    return [];
  }
}

function saveReviewQueue() {
  localStorage.setItem("spi-vocab-review-queue", JSON.stringify(state.reviewQueue));
}

function appendToReviewQueue(questionId) {
  if (state.reviewQueue.includes(questionId)) return;
  state.reviewQueue.push(questionId);
  saveReviewQueue();
}

function removeFromReviewQueue(questionId) {
  const nextQueue = state.reviewQueue.filter((id) => id !== questionId);
  if (nextQueue.length === state.reviewQueue.length) return;
  state.reviewQueue = nextQueue;
  saveReviewQueue();
}

function startSet(questions = null, reviewQuestionIds = []) {
  syncReviewQueue();
  const nextQuestions = questions || buildQuestionSet();
  if (!nextQuestions.length) {
    const message = state.mode === "weak"
      ? "復習リストに問題がありません"
      : "出題できる問題がありません";
    renderHome(message);
    return;
  }

  const nextReviewQuestionIds = reviewQuestionIds.length
    ? reviewQuestionIds
    : state.mode === "weak"
      ? nextQuestions.map((question) => getQuestionId(question))
      : [];

  resetSet();
  state.started = true;
  state.activeQuestions = nextQuestions;
  state.activeSetSize = nextQuestions.length;
  state.activeReviewQuestionIds = nextReviewQuestionIds;
  renderQuestion(nextQuestions[0]);
  document.querySelector(".quiz-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildQuestionSet() {
  if (state.mode === "weak") {
    return getReviewQuestions().slice(0, state.setSize);
  }

  const pool = getPool();
  const questions = pickQuestions(pool, state.setSize);
  if (questions.length >= state.setSize || state.mode !== "fresh") return questions;

  const used = new Set(questions.map((question) => getQuestionId(question)));
  const fallback = getQuestionsByGenre().filter((question) => !used.has(getQuestionId(question)));
  return [...questions, ...pickQuestions(fallback, state.setSize - questions.length)];
}

function pickQuestions(pool, count) {
  const available = [...pool];
  const selected = [];
  while (available.length && selected.length < count) {
    const next = pickWeightedQuestion(available);
    selected.push(next);
    const nextId = getQuestionId(next);
    const index = available.findIndex((question) => getQuestionId(question) === nextId);
    if (index >= 0) available.splice(index, 1);
  }
  return selected;
}

function pickWeightedQuestion(pool) {
  const weighted = pool.flatMap((question) => {
    const entry = state.progress[getQuestionId(question)] || {};
    const weight = 1 + Math.min(entry.wrong || 0, 4);
    return Array.from({ length: weight }, () => question);
  });
  return weighted[Math.floor(Math.random() * weighted.length)];
}

function getPool() {
  const all = getQuestionsByGenre();
  if (state.mode === "fresh") {
    const fresh = all.filter((question) => !state.progress[getQuestionId(question)]?.answered);
    return fresh.length ? fresh : all;
  }
  return all;
}

function renderNextQuestion() {
  const next = state.activeQuestions[state.answeredThisSession];
  if (!next) {
    renderSetSummary();
    return;
  }
  renderQuestion(next);
}

function renderHome(message = "設定を選んで開始してください") {
  state.started = false;
  state.current = null;
  state.reviewingQuestionId = null;
  state.activeQuestions = [];
  state.activeReviewQuestionIds = [];
  state.activeSetSize = state.setSize;
  state.showingSummary = false;
  state.pendingSetSummary = false;
  state.locked = false;
  resetSet();
  els.categoryBadge.textContent = "準備";
  els.difficultyBadge.textContent = "設定";
  els.promptLabel.textContent = "出題モード・問題形式・セット数を選んでください。";
  els.questionText.classList.remove("is-sentence");
  els.questionText.textContent = "開始ボタンで出題します";
  els.choices.replaceChildren();
  els.feedback.textContent = message;
  els.addToReview.hidden = true;
  els.homeButton.hidden = true;
  els.nextQuestion.hidden = true;
  updateSessionProgress();
}

function renderQuestion(nextQuestion) {
  if (!nextQuestion) {
    renderHome();
    return;
  }
  state.showingSummary = false;
  state.pendingSetSummary = false;
  state.locked = false;
  state.current = nextQuestion;
  const questionId = getQuestionId(state.current);
  state.reviewingQuestionId = state.activeReviewQuestionIds.includes(questionId) ? questionId : null;
  els.addToReview.hidden = false;
  els.homeButton.hidden = true;
  els.nextQuestion.hidden = false;
  els.questionText.classList.toggle("is-sentence", isUsageQuestion(state.current));

  if (isUsageQuestion(state.current)) {
    renderUsageQuestion();
    updateSessionProgress();
    return;
  }

  const reverse = state.direction === "meaning-to-term";
  const answer = reverse ? state.current.term : state.current.meaning;
  const decoys = getSimpleQuestions()
    .filter((word) => word.term !== state.current.term)
    .map((word) => (reverse ? word.term : word.meaning));
  const choices = [answer, ...shuffle(decoys).slice(0, 3)];
  const orderedChoices = shuffle(choices);

  els.categoryBadge.textContent = state.current.category;
  els.difficultyBadge.textContent = state.current.difficulty;
  els.promptLabel.textContent = reverse
    ? "次の意味に合う語句として最も近いものを選んでください。"
    : "次の語句の意味として最も近いものを選んでください。";
  els.questionText.textContent = reverse ? state.current.meaning : state.current.term;
  els.choices.replaceChildren();
  els.feedback.textContent = "";
  resetQuestionActions();

  orderedChoices.forEach((choice) => {
    const button = els.choiceTemplate.content.firstElementChild.cloneNode(true);
    button.textContent = choice;
    button.dataset.correct = String(choice === answer);
    button.dataset.answerLabel = choice;
    button.addEventListener("click", () => answerQuestion(button));
    els.choices.append(button);
  });

  updateSessionProgress();
}

function renderUsageQuestion() {
  const question = state.current;
  const orderedChoices = shuffle(question.choices);

  els.categoryBadge.textContent = question.category;
  els.difficultyBadge.textContent = question.difficulty;
  els.promptLabel.textContent = "下線部の語句と用法が最も近いものを1つ選んでください。";
  els.questionText.innerHTML = underlineTarget(question.sentence, question.target);
  els.choices.replaceChildren();
  els.feedback.textContent = "";
  resetQuestionActions();

  orderedChoices.forEach((choice) => {
    const button = els.choiceTemplate.content.firstElementChild.cloneNode(true);
    button.innerHTML = underlineTarget(choice.text, choice.underline || question.target);
    button.dataset.correct = String(choice.correct);
    button.dataset.answerLabel = choice.text;
    button.dataset.note = choice.note;
    button.addEventListener("click", () => answerQuestion(button));
    els.choices.append(button);
  });
}

function answerQuestion(button) {
  if (state.locked) return;
  state.locked = true;

  const isCorrect = button.dataset.correct === "true";
  const questionId = getQuestionId(state.current);
  const entry = state.progress[questionId] || { answered: 0, correct: 0, wrong: 0 };
  entry.answered += 1;
  entry.correct += isCorrect ? 1 : 0;
  entry.wrong = Math.max(0, (entry.wrong || 0) + (isCorrect ? -1 : 1));
  if (state.reviewingQuestionId === questionId && isCorrect) {
    removeFromReviewQueue(questionId);
    entry.review = false;
    entry.wrong = 0;
  } else if (!isCorrect) {
    if (state.reviewingQuestionId === questionId) removeFromReviewQueue(questionId);
    appendToReviewQueue(questionId);
    entry.review = true;
  }
  state.reviewingQuestionId = null;
  state.progress[questionId] = entry;
  state.answeredThisSession += 1;
  recordSetResult(button, isCorrect);

  [...els.choices.children].forEach((choiceButton) => {
    choiceButton.disabled = true;
    if (choiceButton.dataset.correct === "true") choiceButton.classList.add("is-correct");
  });
  if (!isCorrect) button.classList.add("is-wrong");

  const answerLabel = getAnswerLabel(state.current);
  const readingHint = state.current.reading ? " 読み：" + state.current.reading + "。" : "";
  const usageHint = isUsageQuestion(state.current) ? " " + state.current.note : state.current.note;
  els.feedback.innerHTML = isCorrect
    ? "<strong>正解。</strong>" + readingHint + usageHint
    : "<strong>正解は「" + answerLabel + "」。</strong>" + readingHint + usageHint;

  saveProgress();
  renderStats();
  renderReview();
  updateSessionProgress();
  els.addToReview.disabled = false;
  els.addToReview.textContent = isInManualReview(state.current) ? "復習に追加済み" : "復習に追加";
  els.nextQuestion.disabled = false;
  if (state.answeredThisSession >= state.activeSetSize) {
    state.pendingSetSummary = true;
    els.nextQuestion.querySelector("span").textContent = "セット終了";
    return;
  }
  els.nextQuestion.querySelector("span").textContent = "次の問題";
}

function recordSetResult(button, isCorrect) {
  state.setResults.push({
    question: state.current,
    correct: isCorrect,
    selected: button.dataset.answerLabel || button.textContent,
    answer: getAnswerLabel(state.current),
    explanation: getExplanation(state.current),
    prompt: getQuestionPrompt(state.current)
  });
}

function renderSetSummary() {
  state.showingSummary = true;
  state.pendingSetSummary = false;
  const total = state.setResults.length;
  const correct = state.setResults.filter((item) => item.correct).length;
  const wrong = state.setResults.filter((item) => !item.correct);
  const accuracy = total ? Math.round((correct / total) * 100) : 0;

  els.categoryBadge.textContent = "セット結果";
  els.difficultyBadge.textContent = correct + " / " + total;
  els.promptLabel.textContent = "1セットの結果";
  els.questionText.classList.remove("is-sentence");
  els.questionText.textContent = "正答率 " + accuracy + "%";
  els.choices.replaceChildren();
  els.feedback.innerHTML = buildSummaryHtml(wrong);
  els.addToReview.hidden = true;
  els.addToReview.disabled = true;
  els.addToReview.textContent = "復習に追加";
  els.homeButton.hidden = false;
  els.nextQuestion.hidden = false;
  els.nextQuestion.disabled = false;
  els.nextQuestion.querySelector("span").textContent = "次のセットを開始";
}

function buildSummaryHtml(wrong) {
  if (!wrong.length) {
    return '<div class="summary-panel"><h3>間違えた問題</h3><p>このセットの間違いはありません。</p></div>';
  }

  const items = wrong
    .map(
      (item, index) => '<li><strong>' + (index + 1) + '. ' + escapeHtml(item.prompt) + '</strong><span>あなたの回答：' + escapeHtml(item.selected) + '</span><span>正解：' + escapeHtml(item.answer) + '</span><p>' + escapeHtml(item.explanation) + '</p></li>'
    )
    .join('');
  return '<div class="summary-panel"><h3>間違えた問題</h3><ol>' + items + '</ol></div>';
}

function resetSet() {
  state.answeredThisSession = 0;
  state.setResults = [];
  state.showingSummary = false;
  state.pendingSetSummary = false;
  state.activeSetSize = state.started ? state.activeSetSize : state.setSize;
  updateSessionProgress();
}

function addCurrentQuestionToReview() {
  const questionId = getQuestionId(state.current);
  const entry = state.progress[questionId] || { answered: 0, correct: 0, wrong: 0 };
  entry.review = true;
  state.progress[questionId] = entry;
  appendToReviewQueue(questionId);
  saveProgress();
  renderStats();
  renderReview();
  els.addToReview.disabled = true;
  els.addToReview.textContent = "復習に追加済み";
}

function isInManualReview(question) {
  return Boolean(state.progress[getQuestionId(question)]?.review);
}

function resetQuestionActions() {
  els.addToReview.hidden = false;
  els.homeButton.hidden = true;
  els.nextQuestion.hidden = false;
  els.addToReview.disabled = true;
  els.addToReview.textContent = "復習に追加";
  els.nextQuestion.disabled = true;
  els.nextQuestion.querySelector("span").textContent = "次の問題";
}

function renderStats() {
  const values = Object.values(state.progress);
  const answered = values.reduce((sum, item) => sum + (item.answered || 0), 0);
  const correct = values.reduce((sum, item) => sum + (item.correct || 0), 0);
  const weak = getReviewQuestions().length;

  els.answeredCount.textContent = answered;
  els.correctCount.textContent = correct;
  els.weakCount.textContent = weak;
  els.totalCount.textContent = getQuestionsByGenre().length;
  els.accuracy.textContent = answered ? Math.round((correct / answered) * 100) + "%" : "--%";
}

function renderReview() {
  syncReviewQueue();
  const weakWords = getReviewQuestions();

  if (!weakWords.length) {
    els.reviewList.innerHTML = `<p class="empty-state">間違えた語句がここに表示されます。</p>`;
    return;
  }

  els.reviewList.replaceChildren(
    ...weakWords.map((word) => {
      const item = document.createElement("button");
      item.className = "review-item";
      item.type = "button";
      item.textContent = word.term;
      item.addEventListener("click", () => startReviewQuestion(word));
      return item;
    })
  );
}

function getReviewQuestions() {
  const byId = new Map(getQuestionsByGenre().map((question) => [getQuestionId(question), question]));
  return state.reviewQueue.map((id) => byId.get(id)).filter(Boolean);
}

function syncReviewQueue() {
  const allIds = new Set(getQuestionsByGenre().map((question) => getQuestionId(question)));
  const migratedIds = getQuestionsByGenre()
    .filter((question) => isReviewTarget(question))
    .map((question) => getQuestionId(question));
  const nextQueue = [...state.reviewQueue, ...migratedIds].filter((id, index, queue) => allIds.has(id) && queue.indexOf(id) === index);
  if (nextQueue.length !== state.reviewQueue.length || nextQueue.some((id, index) => id !== state.reviewQueue[index])) {
    state.reviewQueue = nextQueue;
    saveReviewQueue();
  }
}

function startReviewQuestion(question) {
  const questionId = getQuestionId(question);
  startSet([question], [questionId]);
}

function isReviewTarget(question) {
  const entry = state.progress[getQuestionId(question)] || {};
  return (entry.wrong || 0) > 0 || Boolean(entry.review);
}

function updateSessionProgress() {
  const total = state.activeSetSize || state.setSize;
  const width = Math.min(100, (state.answeredThisSession / total) * 100);
  els.sessionProgress.style.width = width + "%";
  els.sessionCount.textContent = Math.min(state.answeredThisSession, total) + " / " + total;
}

function getQuestionPrompt(question) {
  if (isUsageQuestion(question)) return question.sentence;
  return state.direction === "meaning-to-term" ? question.meaning : question.term;
}

function getExplanation(question) {
  const readingHint = question.reading ? "読み：" + question.reading + "。" : "";
  return readingHint + question.note;
}

function formatAnswerLabel(word) {
  return word.reading ? `${word.term}（${word.reading}）` : word.term;
}

function getAnswerLabel(question) {
  if (isUsageQuestion(question)) {
    const correct = question.choices.find((choice) => choice.correct);
    return correct ? correct.text : question.term;
  }
  return state.direction === "meaning-to-term" ? formatAnswerLabel(question) : question.meaning;
}

function isUsageQuestion(question) {
  return question.category === "語句の用法";
}

function getQuestionId(question) {
  return question.id || `${question.category}:${question.term}`;
}

function getQuestionsByGenre() {
  return getAllQuestions();
}

function getAllQuestions() {
  return [...WORDS, ...IDIOM_QUESTIONS, ...USAGE_QUESTIONS];
}

function getSimpleQuestions() {
  return [...WORDS, ...IDIOM_QUESTIONS];
}

function underlineTarget(text, target) {
  const escapedText = escapeHtml(text);
  const escapedTarget = escapeHtml(target);
  return escapedText.replace(escapedTarget, `<span class="underlined-term">${escapedTarget}</span>`);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

renderReview();
renderStats();
renderHome();
