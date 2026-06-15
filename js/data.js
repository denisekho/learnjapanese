/* ============================================================
   Course data for "げんきに日本語!" — a Japanese 1 companion course.
   Curriculum is aligned with the chapter sequence of Genki I
   (Lessons 1–6, a typical one-semester Japanese 1 course).
   All explanations, dialogues, passages, and exercises here are
   ORIGINAL content written for this app; students still need
   their own copy of the textbook for class.
   ============================================================ */

const KANA = {
  hiragana: {
    title: "Hiragana ひらがな",
    intro: "Hiragana is the core Japanese syllabary. Every Japanese word can be written in hiragana, and all grammar endings use it. Master it in the first two weeks — quizzes after week 2 will not show romaji. Click any character to hear it.",
    rows: [
      { label: "a row", cells: [["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"]] },
      { label: "k", cells: [["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"]] },
      { label: "s", cells: [["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"]] },
      { label: "t", cells: [["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"]] },
      { label: "n", cells: [["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"]] },
      { label: "h", cells: [["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"]] },
      { label: "m", cells: [["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"]] },
      { label: "y", cells: [["や","ya"],null,["ゆ","yu"],null,["よ","yo"]] },
      { label: "r", cells: [["ら","ra"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"]] },
      { label: "w", cells: [["わ","wa"],null,null,null,["を","o (particle)"]] },
      { label: "", cells: [["ん","n"],null,null,null,null] }
    ],
    voiced: [
      { label: "g", cells: [["が","ga"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"]] },
      { label: "z", cells: [["ざ","za"],["じ","ji"],["ず","zu"],["ぜ","ze"],["ぞ","zo"]] },
      { label: "d", cells: [["だ","da"],["ぢ","ji"],["づ","zu"],["で","de"],["ど","do"]] },
      { label: "b", cells: [["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"]] },
      { label: "p", cells: [["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"]] }
    ],
    combos: [
      { label: "ky", cells: [["きゃ","kya"],null,["きゅ","kyu"],null,["きょ","kyo"]] },
      { label: "sh", cells: [["しゃ","sha"],null,["しゅ","shu"],null,["しょ","sho"]] },
      { label: "ch", cells: [["ちゃ","cha"],null,["ちゅ","chu"],null,["ちょ","cho"]] },
      { label: "ny", cells: [["にゃ","nya"],null,["にゅ","nyu"],null,["にょ","nyo"]] },
      { label: "hy", cells: [["ひゃ","hya"],null,["ひゅ","hyu"],null,["ひょ","hyo"]] },
      { label: "my", cells: [["みゃ","mya"],null,["みゅ","myu"],null,["みょ","myo"]] },
      { label: "ry", cells: [["りゃ","rya"],null,["りゅ","ryu"],null,["りょ","ryo"]] },
      { label: "gy", cells: [["ぎゃ","gya"],null,["ぎゅ","gyu"],null,["ぎょ","gyo"]] },
      { label: "j", cells: [["じゃ","ja"],null,["じゅ","ju"],null,["じょ","jo"]] },
      { label: "by", cells: [["びゃ","bya"],null,["びゅ","byu"],null,["びょ","byo"]] },
      { label: "py", cells: [["ぴゃ","pya"],null,["ぴゅ","pyu"],null,["ぴょ","pyo"]] }
    ],
    notes: [
      "Small っ doubles the following consonant: きって (kitte, stamp). Hold the pause for one full beat.",
      "Long vowels get a full extra beat: おばさん (aunt) vs. おばあさん (grandmother) are different words!",
      "は is read \"wa\" when used as the topic particle; へ is read \"e\" when used as the direction particle.",
      "を is only used as the object particle and is pronounced \"o\"."
    ]
  },
  katakana: {
    title: "Katakana カタカナ",
    intro: "Katakana writes loanwords (コーヒー coffee), foreign names (your name!), and emphasis. The sounds are identical to hiragana. Click any character to hear it.",
    rows: [
      { label: "a row", cells: [["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"]] },
      { label: "k", cells: [["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"]] },
      { label: "s", cells: [["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"]] },
      { label: "t", cells: [["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"]] },
      { label: "n", cells: [["ナ","na"],["ニ","ni"],["ヌ","nu"],["ネ","ne"],["ノ","no"]] },
      { label: "h", cells: [["ハ","ha"],["ヒ","hi"],["フ","fu"],["ヘ","he"],["ホ","ho"]] },
      { label: "m", cells: [["マ","ma"],["ミ","mi"],["ム","mu"],["メ","me"],["モ","mo"]] },
      { label: "y", cells: [["ヤ","ya"],null,["ユ","yu"],null,["ヨ","yo"]] },
      { label: "r", cells: [["ラ","ra"],["リ","ri"],["ル","ru"],["レ","re"],["ロ","ro"]] },
      { label: "w", cells: [["ワ","wa"],null,null,null,["ヲ","o"]] },
      { label: "", cells: [["ン","n"],null,null,null,null] }
    ],
    voiced: [
      { label: "g", cells: [["ガ","ga"],["ギ","gi"],["グ","gu"],["ゲ","ge"],["ゴ","go"]] },
      { label: "z", cells: [["ザ","za"],["ジ","ji"],["ズ","zu"],["ゼ","ze"],["ゾ","zo"]] },
      { label: "d", cells: [["ダ","da"],["ヂ","ji"],["ヅ","zu"],["デ","de"],["ド","do"]] },
      { label: "b", cells: [["バ","ba"],["ビ","bi"],["ブ","bu"],["ベ","be"],["ボ","bo"]] },
      { label: "p", cells: [["パ","pa"],["ピ","pi"],["プ","pu"],["ペ","pe"],["ポ","po"]] }
    ],
    combos: [
      { label: "sh", cells: [["シャ","sha"],null,["シュ","shu"],null,["ショ","sho"]] },
      { label: "ch", cells: [["チャ","cha"],null,["チュ","chu"],null,["チョ","cho"]] },
      { label: "j", cells: [["ジャ","ja"],null,["ジュ","ju"],null,["ジョ","jo"]] },
      { label: "new", cells: [["ファ","fa"],["ティ","ti"],["ヴ","vu"],["ェ","e"],["フォ","fo"]] }
    ],
    notes: [
      "The long-vowel mark ー stretches the previous vowel: コーヒー (kōhī, coffee).",
      "Watch the look-alikes: シ(shi) vs ツ(tsu), ソ(so) vs ン(n). The stroke angle is the clue.",
      "Loanwords get re-shaped to Japanese sounds: \"McDonald's\" → マクドナルド (ma-ku-do-na-ru-do)."
    ]
  }
};

/* Drill banks for kana quizzes: [kana, correct romaji, distractors...] */
const KANA_DRILLS = {
  hiragana: [
    ["あ","a","o","u"],["き","ki","sa","chi"],["す","su","mu","tsu"],["ね","ne","re","wa"],
    ["は","ha","ho","fu"],["め","me","nu","mu"],["ら","ra","chi","ro"],["を","o (particle)","wa","n"],
    ["しゃ","sha","sho","ja"],["つ","tsu","su","shi"],["ん","n","so","i"],["ふ","fu","tsu","wa"],
    ["よ","yo","ya","mo"],["れ","re","ne","wa"],["ぬ","nu","me","no"],["ち","chi","sa","ki"],
    ["ぎゅ","gyu","kyu","ju"],["ぼ","bo","po","ho"],["ぱ","pa","ba","ha"],["じ","ji","zu","chi"]
  ],
  katakana: [
    ["ア","a","ya","ma"],["シ","shi","tsu","so"],["ツ","tsu","shi","n"],["ソ","so","n","ri"],
    ["ン","n","so","su"],["コ","ko","yu","ro"],["ヒ","hi","ko","to"],["メ","me","nu","ta"],
    ["ワ","wa","u","fu"],["ル","ru","re","ro"],["チ","chi","te","ti"],["ネ","ne","ho","re"],
    ["ジャ","ja","ji","sha"],["フォ","fo","ho","fu"],["ヴ","vu","u","bu"],["ヨ","yo","ya","mo"],
    ["ク","ku","ta","wa"],["ケ","ke","ku","ki"],["ホ","ho","ki","o"],["ミ","mi","shi","ni"]
  ]
};

const PRONUNCIATION_GUIDE = {
  title: "Pronunciation Guide",
  sections: [
    {
      heading: "The five vowels — short and crisp",
      body: "Japanese has exactly five vowel sounds, and they never change: a (ah), i (ee), u (oo, lips relaxed), e (eh), o (oh). Unlike English, vowels are never reduced or drawled. Say each example aloud after the audio.",
      examples: [
        ["あお", "ao", "blue — two separate vowels: a-o"],
        ["いえ", "ie", "house — i-e, two beats"],
        ["うえ", "ue", "up/above"]
      ]
    },
    {
      heading: "Every syllable gets one beat (mora timing)",
      body: "Japanese rhythm is like a metronome: each kana = one beat. ん, small っ, and long vowels each take their own beat. とけい (to-ke-i) is 3 beats; がっこう (ga-k-ko-u) is 4 beats.",
      examples: [
        ["がっこう", "gakkō", "school — 4 beats, pause on the small っ"],
        ["おばあさん", "obāsan", "grandmother — 5 beats; おばさん (4 beats) means aunt"],
        ["きって", "kitte", "stamp — hold the silent beat before -te"]
      ]
    },
    {
      heading: "The Japanese r",
      body: "Japanese ら り る れ ろ is a quick tongue-tap on the ridge behind your teeth — between English l, r, and d. Think of the quick d sound in the American pronunciation of \"water.\"",
      examples: [
        ["れい", "rei", "example; zero"],
        ["とり", "tori", "bird"],
        ["るす", "rusu", "away from home"]
      ]
    },
    {
      heading: "ふ and the breathy f",
      body: "ふ (fu) is made by blowing air gently between your lips, like blowing out a candle — not biting your lip like the English f.",
      examples: [
        ["ふゆ", "fuyu", "winter"],
        ["ふたつ", "futatsu", "two (things)"]
      ]
    },
    {
      heading: "Devoiced vowels — the 'disappearing' i and u",
      body: "Between voiceless consonants (k, s, t, h, p) or at the end of a word, i and u often whisper away. です sounds like \"des,\" ます like \"mas,\" した like \"shta.\"",
      examples: [
        ["がくせいです", "gakusei desu", "am a student — final u in desu is whispered"],
        ["すきです", "suki desu", "like it — the u in su nearly disappears"]
      ]
    },
    {
      heading: "Pitch, not stress",
      body: "Japanese words rise and fall in pitch instead of stressing one syllable. Don't punch a syllable the English way — keep volume even and copy the melody of the audio. はし with high-low pitch is \"chopsticks\"; low-high is \"bridge.\" Listen and shadow often.",
      examples: [
        ["はし", "hashi", "chopsticks / bridge — meaning changes with pitch"],
        ["あめ", "ame", "rain (high-low) / candy (low-high)"]
      ]
    },
    {
      heading: "How to practice with this site",
      body: "Every Japanese word and sentence here has a 🔊 button (your browser's Japanese voice). Use the 3-step shadow method: (1) Listen once. (2) Listen and repeat half a second behind the voice. (3) Say it alone, then check yourself with the 🎤 speaking checker.",
      examples: []
    }
  ]
};

/* ============================================================
   LESSONS — aligned with the Genki I chapter sequence (1–6)
   ============================================================ */
const LESSONS = [

/* ---------------- LESSON 1 ---------------- */
{
  id: 1,
  title: "New Friends",
  jpTitle: "あたらしいともだち",
  jpTitleRomaji: "atarashii tomodachi",
  genkiRef: "Pairs with Genki I, Lesson 1",
  summary: "Introduce yourself, greet people, exchange majors and phone numbers, and tell time. Core grammar: X は Y です.",
  objectives: [
    "Greet people appropriately for the time of day",
    "Introduce yourself (name, school year, major, nationality)",
    "Ask and answer questions with か",
    "Use numbers 0–100; ask for and give phone numbers and times",
    "Connect nouns with の (e.g., 'college student' = だいがくの がくせい)"
  ],
  vocab: [
    ["おはようございます","ohayō gozaimasu","good morning (polite)"],
    ["こんにちは","konnichiwa","good afternoon; hello"],
    ["こんばんは","konbanwa","good evening"],
    ["さようなら","sayōnara","goodbye"],
    ["ありがとうございます","arigatō gozaimasu","thank you (polite)"],
    ["すみません","sumimasen","excuse me; I'm sorry"],
    ["はじめまして","hajimemashite","nice to meet you (lit. 'first time')"],
    ["どうぞよろしくおねがいします","dōzo yoroshiku onegaishimasu","please be kind to me (used in introductions)"],
    ["はい","hai","yes"],
    ["いいえ","iie","no"],
    ["わたし","watashi","I; me"],
    ["なまえ","namae","name"],
    ["せんせい","sensei","teacher; professor"],
    ["がくせい","gakusei","student"],
    ["りゅうがくせい","ryūgakusei","international student"],
    ["だいがく","daigaku","college; university"],
    ["〜ねんせい","-nensei","...year student (いちねんせい = freshman)"],
    ["せんこう","senkō","major"],
    ["にほん","nihon","Japan"],
    ["にほんご","nihongo","Japanese language"],
    ["アメリカ","amerika","U.S.A."],
    ["カリフォルニア","kariforunia","California"],
    ["いま","ima","now"],
    ["〜じ","-ji","...o'clock"],
    ["はん","han","half (past) — にじはん = 2:30"],
    ["でんわばんごう","denwa bangō","phone number"],
    ["〜さい","-sai","...years old"],
    ["ともだち","tomodachi","friend"]
  ],
  dialogue: {
    setting: "First day of Japanese 1 at a California community college. Maria sits down next to Kenta.",
    lines: [
      ["マリア","はじめまして。マリアです。","Hajimemashite. Maria desu.","Nice to meet you. I'm Maria."],
      ["けんた","はじめまして。けんたです。どうぞよろしく。","Hajimemashite. Kenta desu. Dōzo yoroshiku.","Nice to meet you. I'm Kenta. Pleased to meet you."],
      ["マリア","けんたさんは りゅうがくせいですか。","Kenta-san wa ryūgakusei desu ka.","Kenta, are you an international student?"],
      ["けんた","はい、にほんの りゅうがくせいです。マリアさんは？","Hai, nihon no ryūgakusei desu. Maria-san wa?","Yes, I'm an international student from Japan. How about you, Maria?"],
      ["マリア","わたしは いちねんせいです。せんこうは コンピューターです。","Watashi wa ichinensei desu. Senkō wa konpyūtā desu.","I'm a freshman. My major is computer science."],
      ["けんた","そうですか。あ、すみません、いま なんじですか。","Sō desu ka. A, sumimasen, ima nanji desu ka.","I see. Oh, excuse me — what time is it now?"],
      ["マリア","くじはんです。","Kuji han desu.","It's nine thirty."],
      ["けんた","ありがとうございます。","Arigatō gozaimasu.","Thank you."]
    ]
  },
  grammar: [
    {
      title: "X は Y です — \"X is Y\"",
      explanation: "です works like English \"am / is / are.\" The particle は (written は, read \"wa\") marks the topic — what you're talking about. Pattern: [Topic] は [Description] です。Japanese drops the topic when it's obvious, so 「がくせいです」 alone can mean \"I'm a student.\"",
      examples: [
        ["わたしは がくせいです。","Watashi wa gakusei desu.","I am a student."],
        ["せんこうは にほんごです。","Senkō wa nihongo desu.","My major is Japanese."]
      ]
    },
    {
      title: "Questions with か",
      explanation: "Add か to the end of a statement to make it a yes/no question — no word-order change, no question mark needed. Question words like なん (what) just sit in the sentence where the answer would go.",
      examples: [
        ["けんたさんは がくせいですか。","Kenta-san wa gakusei desu ka.","Kenta, are you a student?"],
        ["せんこうは なんですか。","Senkō wa nan desu ka.","What is your major?"]
      ]
    },
    {
      title: "noun の noun — connecting nouns",
      explanation: "の links two nouns; the first noun describes the second. だいがくの がくせい = \"a college student\" (a student of college). The order is the reverse of English \"of\": にほんごの せんせい = teacher OF Japanese.",
      examples: [
        ["わたしは シエラだいがくの がくせいです。","Watashi wa Shiera daigaku no gakusei desu.","I'm a student at Sierra College."],
        ["やまだ せんせいは にほんごの せんせいです。","Yamada sensei wa nihongo no sensei desu.","Professor Yamada is a Japanese teacher."]
      ]
    },
    {
      title: "Numbers and time",
      explanation: "Learn 0–10 cold and you can build to 99: 14 = じゅうよん (10+4), 40 = よんじゅう (4×10). Time = number + じ: いちじ (1:00), にじはん (2:30). Watch the irregulars: 4:00 = よじ, 7:00 = しちじ, 9:00 = くじ.",
      examples: [
        ["いま よじはんです。","Ima yoji han desu.","It's 4:30 now."],
        ["でんわばんごうは ごいちろくの さんよんはちきゅうです。","Denwa bangō wa go-ichi-roku no san-yon-hachi-kyū desu.","The phone number is 516-3489."]
      ]
    }
  ],
  homework: {
    reading: {
      instructions: "Read Yui's self-introduction, listen to the audio, then answer the questions.",
      passage: "はじめまして。ゆいです。にほんの りゅうがくせいです。いま、カリフォルニアの だいがくの いちねんせいです。せんこうは えいご（English）です。どうぞよろしくおねがいします。",
      romaji: "Hajimemashite. Yui desu. Nihon no ryūgakusei desu. Ima, Kariforunia no daigaku no ichinensei desu. Senkō wa eigo desu. Dōzo yoroshiku onegaishimasu.",
      questions: [
        { q: "Where is Yui from?", choices: ["Japan","California","America","China"], answer: 0 },
        { q: "What year of school is Yui in?", choices: ["First year","Second year","Third year","Fourth year"], answer: 0 },
        { q: "What is Yui's major?", choices: ["English","Japanese","Computer science","Math"], answer: 0 }
      ]
    },
    writing: {
      instructions: "Type the Japanese. Hiragana is expected, but romaji is accepted in Lesson 1 only. (です = desu)",
      items: [
        { prompt: "Say: \"I am a student.\"", accept: ["わたしはがくせいです","がくせいです","watashi wa gakusei desu","watashiwagakuseidesu","gakusei desu","gakuseidesu"], hint: "watashi wa __ desu" },
        { prompt: "Ask: \"Are you a teacher?\" (use せんせい)", accept: ["せんせいですか","sensei desu ka","senseidesuka"], hint: "End the question with か (ka)." },
        { prompt: "Say: \"It is 9 o'clock now.\" (use いま)", accept: ["いまくじです","ima kuji desu","imakujidesu"], hint: "9:00 is the irregular くじ (kuji)." },
        { prompt: "Say: \"My major is Japanese.\" (start with せんこう)", accept: ["せんこうはにほんごです","senkou wa nihongo desu","senkō wa nihongo desu","senkouwanihongodesu"], hint: "senkō wa __ desu" },
        { prompt: "Connect with の: \"a college student\" (college = だいがく)", accept: ["だいがくのがくせい","daigaku no gakusei","daigakunogakusei"], hint: "noun + no + noun" }
      ]
    },
    speaking: {
      instructions: "Shadow each line: listen 🔊, repeat aloud, then press 🎤 and say it. Aim for even, metronome-like beats. Finally, record your own 4-line self-introduction for class.",
      items: [
        { jp: "はじめまして。", romaji: "Hajimemashite.", en: "Nice to meet you." },
        { jp: "わたしは がくせいです。", romaji: "Watashi wa gakusei desu.", en: "I am a student." },
        { jp: "せんこうは にほんごです。", romaji: "Senkō wa nihongo desu.", en: "My major is Japanese." },
        { jp: "どうぞよろしくおねがいします。", romaji: "Dōzo yoroshiku onegaishimasu.", en: "Pleased to meet you." }
      ]
    }
  },
  quiz: [
    { q: "Which greeting is used in the morning?", choices: ["おはようございます","こんばんは","さようなら","こんにちは"], answer: 0 },
    { q: "「わたしは がくせいです。」 means:", choices: ["I am a student.","You are a teacher.","I am a friend.","This is a college."], answer: 0 },
    { q: "How do you turn 「せんせいです」 into a question?", choices: ["せんせいですか。","せんせいですよ。","かせんせいです。","せんせいでは。"], answer: 0 },
    { q: "\"Student of Japanese (language)\" is:", choices: ["にほんごの がくせい","がくせいの にほんご","にほんご がくせいの","の にほんご がくせい"], answer: 0 },
    { q: "The topic particle は is pronounced:", choices: ["wa","ha","e","o"], answer: 0 },
    { q: "9 o'clock is:", choices: ["くじ","きゅうじ","ここのじ","くうじ"], answer: 0 },
    { q: "「いま なんじですか。」 asks:", choices: ["What time is it now?","What is your name?","How old are you?","Where are you now?"], answer: 0 },
    { q: "When you meet someone for the first time, you say:", choices: ["はじめまして","すみません","さようなら","ありがとう"], answer: 0 },
    { q: "4:30 is:", choices: ["よじはん","しじはん","よんじはん","よじごじゅう"], answer: 0 },
    { q: "りゅうがくせい means:", choices: ["international student","first-year student","college student","graduate student"], answer: 0 }
  ]
},

/* ---------------- LESSON 2 ---------------- */
{
  id: 2,
  title: "Shopping",
  jpTitle: "かいもの",
  jpTitleRomaji: "kaimono",
  genkiRef: "Pairs with Genki I, Lesson 2",
  summary: "Point things out, ask what things are and how much they cost. Core grammar: これ/それ/あれ, この/その/あの, ここ/そこ/あそこ, だれの, も, じゃないです.",
  objectives: [
    "Point out objects with これ・それ・あれ and modify nouns with この・その・あの",
    "Ask and give prices (numbers to 10,000; 〜えん)",
    "Say where things and places are with ここ・そこ・あそこ",
    "Ask whose something is with だれの",
    "Negate nouns with じゃないです and agree with も, ね, よ"
  ],
  vocab: [
    ["これ","kore","this one (near me)"],
    ["それ","sore","that one (near you)"],
    ["あれ","are","that one (over there)"],
    ["どれ","dore","which one"],
    ["この〜","kono","this ... (この ほん = this book)"],
    ["その〜","sono","that ..."],
    ["あの〜","ano","that ... over there"],
    ["ここ","koko","here"],
    ["そこ","soko","there"],
    ["あそこ","asoko","over there"],
    ["どこ","doko","where"],
    ["だれ","dare","who"],
    ["なん／なに","nan / nani","what"],
    ["いくら","ikura","how much"],
    ["〜えん","-en","...yen"],
    ["ほん","hon","book"],
    ["じしょ","jisho","dictionary"],
    ["ざっし","zasshi","magazine"],
    ["しんぶん","shinbun","newspaper"],
    ["ノート","nōto","notebook"],
    ["ペン","pen","pen"],
    ["かばん","kaban","bag"],
    ["くつ","kutsu","shoes"],
    ["さいふ","saifu","wallet"],
    ["とけい","tokei","watch; clock"],
    ["じてんしゃ","jitensha","bicycle"],
    ["Tシャツ","tī-shatsu","T-shirt"],
    ["たかい","takai","expensive; high"],
    ["〜も","-mo","also; too"],
    ["〜じゃないです","-ja nai desu","is not ..."],
    ["〜ね","-ne","...right? (seeking agreement)"],
    ["〜よ","-yo","...you know! (giving new info)"]
  ],
  dialogue: {
    setting: "Maria and Kenta browse a Japanese bookstore in Japantown.",
    lines: [
      ["マリア","すみません。これは なんですか。","Sumimasen. Kore wa nan desu ka.","Excuse me, what is this?"],
      ["みせのひと","それは じしょですよ。","Sore wa jisho desu yo.","That's a dictionary."],
      ["マリア","いくらですか。","Ikura desu ka.","How much is it?"],
      ["みせのひと","にせんえんです。","Nisen en desu.","It's 2,000 yen."],
      ["マリア","ちょっと たかいですね。あれも じしょですか。","Chotto takai desu ne. Are mo jisho desu ka.","That's a little expensive, isn't it. Is that one over there also a dictionary?"],
      ["みせのひと","いいえ、あれは じしょじゃないです。ざっしです。","Iie, are wa jisho ja nai desu. Zasshi desu.","No, that's not a dictionary. It's a magazine."],
      ["けんた","マリアさん、この ざっしは ごひゃくえんですよ。","Maria-san, kono zasshi wa gohyaku en desu yo.","Maria, this magazine is 500 yen!"],
      ["マリア","じゃあ、その ざっしを ください。","Jā, sono zasshi o kudasai.","Then I'll take that magazine, please."]
    ]
  },
  grammar: [
    {
      title: "これ・それ・あれ・どれ — this one / that one",
      explanation: "These stand alone like pronouns. これ = near the speaker, それ = near the listener, あれ = far from both, どれ = \"which one?\" Distance is measured from the speaker's point of view.",
      examples: [
        ["これは ほんです。","Kore wa hon desu.","This (near me) is a book."],
        ["あれは なんですか。","Are wa nan desu ka.","What is that over there?"]
      ]
    },
    {
      title: "この・その・あの + noun",
      explanation: "Use この/その/あの when you name the thing directly: この ほん = \"this book.\" They can never stand alone — a noun must follow. これ ほん is wrong; これは ほんです or この ほん.",
      examples: [
        ["この とけいは たかいです。","Kono tokei wa takai desu.","This watch is expensive."],
        ["あの ひとは だれですか。","Ano hito wa dare desu ka.","Who is that person over there?"]
      ]
    },
    {
      title: "ここ・そこ・あそこ — here and there",
      explanation: "Same three-way split, but for places. Asking どこ (where) is the standard way to find anything: トイレは どこですか。",
      examples: [
        ["としょかんは あそこです。","Toshokan wa asoko desu.","The library is over there."],
        ["ここは シエラだいがくです。","Koko wa Shiera daigaku desu.","This (place) is Sierra College."]
      ]
    },
    {
      title: "だれの — whose?",
      explanation: "だれ (who) + の (possessive) = \"whose.\" The answer uses name + の: マリアさんの かばん = Maria's bag. When the object is clear you can drop it: それは マリアさんのです = \"That's Maria's.\"",
      examples: [
        ["これは だれの ペンですか。","Kore wa dare no pen desu ka.","Whose pen is this?"],
        ["それは わたしのです。","Sore wa watashi no desu.","That's mine."]
      ]
    },
    {
      title: "〜も — \"also\"",
      explanation: "も replaces は to say \"too/also.\" わたしは がくせいです。けんたさんも がくせいです。= Kenta is a student TOO. Never combine はも.",
      examples: [
        ["この ほんも にせんえんです。","Kono hon mo nisen en desu.","This book is also 2,000 yen."],
        ["わたしも いちねんせいです。","Watashi mo ichinensei desu.","I'm a freshman too."]
      ]
    },
    {
      title: "〜じゃないです — \"is not\"",
      explanation: "The negative of [noun]です is [noun]じゃないです. More formal writing uses じゃありません — both are fine in this course.",
      examples: [
        ["わたしは にほんじんじゃないです。","Watashi wa nihonjin ja nai desu.","I am not Japanese."],
        ["これは わたしの さいふじゃないです。","Kore wa watashi no saifu ja nai desu.","This is not my wallet."]
      ]
    },
    {
      title: "ね and よ — conversation enders",
      explanation: "ね asks for agreement (\"right?\", \"isn't it?\"); よ adds emphasis when you tell the listener something they don't know (\"I tell you!\"). They make speech sound natural — but don't overuse よ; it can sound pushy.",
      examples: [
        ["たかいですね。","Takai desu ne.","Expensive, isn't it?"],
        ["この ざっしは ごひゃくえんですよ。","Kono zasshi wa gohyaku en desu yo.","This magazine is 500 yen, you know!"]
      ]
    }
  ],
  homework: {
    reading: {
      instructions: "Read the lost-and-found conversation, then answer.",
      passage: "けんた：すみません、その かばんは だれのですか。\nゆい：この かばんですか。マリアさんのですよ。\nけんた：じゃあ、あの とけいも マリアさんのですか。\nゆい：いいえ、あれは マリアさんのじゃないです。せんせいのです。",
      romaji: "Kenta: Sumimasen, sono kaban wa dare no desu ka.\nYui: Kono kaban desu ka. Maria-san no desu yo.\nKenta: Jā, ano tokei mo Maria-san no desu ka.\nYui: Iie, are wa Maria-san no ja nai desu. Sensei no desu.",
      questions: [
        { q: "Whose bag is it?", choices: ["Maria's","Yui's","Kenta's","The teacher's"], answer: 0 },
        { q: "Whose watch is it?", choices: ["The teacher's","Maria's","Yui's","Nobody knows"], answer: 0 },
        { q: "「だれの」 means:", choices: ["whose","where","which","how much"], answer: 0 }
      ]
    },
    writing: {
      instructions: "Type the Japanese in hiragana (katakana where needed).",
      items: [
        { prompt: "Ask: \"What is this?\" (the thing is in your hand)", accept: ["これはなんですか","kore wa nan desu ka","korewanandesuka"], hint: "kore wa __ desu ka" },
        { prompt: "Ask: \"How much is that one (near you)?\"", accept: ["それはいくらですか","sore wa ikura desu ka","sorewaikuradesuka"], hint: "Use それ + いくら." },
        { prompt: "Say: \"This is not my wallet.\" (さいふ)", accept: ["これはわたしのさいふじゃないです","kore wa watashi no saifu ja nai desu","korewawatashinosaifujanaidesu","これはわたしのさいふじゃありません"], hint: "Negate with じゃないです." },
        { prompt: "Ask: \"Whose bicycle is this?\" (じてんしゃ)", accept: ["これはだれのじてんしゃですか","kore wa dare no jitensha desu ka","korewadarenojitenshadesuka"], hint: "dare no + noun" },
        { prompt: "Say: \"That magazine (near you) is also 500 yen.\"", accept: ["そのざっしもごひゃくえんです","sono zasshi mo gohyaku en desu","sonozasshimogohyakuendesu"], hint: "Replace は with も." }
      ]
    },
    speaking: {
      instructions: "Shadow, then check yourself with 🎤. Notice the rising pitch on ですか and the short crisp vowels in いくら.",
      items: [
        { jp: "これは なんですか。", romaji: "Kore wa nan desu ka.", en: "What is this?" },
        { jp: "それは いくらですか。", romaji: "Sore wa ikura desu ka.", en: "How much is that?" },
        { jp: "ちょっと たかいですね。", romaji: "Chotto takai desu ne.", en: "It's a little expensive, isn't it?" },
        { jp: "あれは わたしの じてんしゃじゃないです。", romaji: "Are wa watashi no jitensha ja nai desu.", en: "That over there is not my bicycle." }
      ]
    }
  },
  quiz: [
    { q: "The thing is in YOUR hand. \"What is this?\" =", choices: ["これは なんですか。","それは なんですか。","あれは なんですか。","どれは なんですか。"], answer: 0 },
    { q: "Which is grammatical?", choices: ["この ほんは たかいです。","これ ほんは たかいです。","この は たかいです。","ほん この たかいです。"], answer: 0 },
    { q: "「いくらですか。」 asks:", choices: ["How much is it?","What time is it?","Where is it?","Whose is it?"], answer: 0 },
    { q: "\"That is NOT a dictionary\" =", choices: ["それは じしょじゃないです。","それは じしょですね。","それは じしょですか。","それも じしょです。"], answer: 0 },
    { q: "\"Whose bag is that?\" =", choices: ["それは だれの かばんですか。","それは だれ かばんですか。","だれは その かばんですか。","かばんは それの だれですか。"], answer: 0 },
    { q: "Yui is a student. To add \"Maria is a student, too\":", choices: ["マリアさんも がくせいです。","マリアさんは がくせいです。","マリアさんの がくせいです。","マリアさんね がくせいです。"], answer: 0 },
    { q: "\"The library is over there\" =", choices: ["としょかんは あそこです。","としょかんは あれです。","としょかんは あのです。","あそこは としょかんの です。"], answer: 0 },
    { q: "500 yen is:", choices: ["ごひゃくえん","ごせんえん","ひゃくごえん","ごじゅうえん"], answer: 0 },
    { q: "You just learned a sale price your friend doesn't know. You end the sentence with:", choices: ["よ","ね","か","の"], answer: 0 },
    { q: "とけい means:", choices: ["watch / clock","wallet","shoes","bag"], answer: 0 }
  ]
},

/* ---------------- LESSON 3 ---------------- */
{
  id: 3,
  title: "Making a Date",
  jpTitle: "デートのやくそく",
  jpTitleRomaji: "dēto no yakusoku",
  genkiRef: "Pairs with Genki I, Lesson 3",
  summary: "Talk about daily activities with your first verbs. Core grammar: ます/ません, particles を・で・に・へ, time expressions, invitations with ませんか, frequency adverbs.",
  objectives: [
    "Conjugate ru-verbs, u-verbs, and the irregulars する/くる in present polite form",
    "Use を (object), で (place of action), に/へ (destination), に (time)",
    "Describe your daily and weekly routine",
    "Invite someone with 〜ませんか",
    "Use frequency adverbs: まいにち, よく, ときどき, ぜんぜん〜ません"
  ],
  vocab: [
    ["たべます（たべる）","tabemasu (taberu)","to eat [ru]"],
    ["のみます（のむ）","nomimasu (nomu)","to drink [u]"],
    ["みます（みる）","mimasu (miru)","to see; watch [ru]"],
    ["ききます（きく）","kikimasu (kiku)","to listen; hear [u]"],
    ["よみます（よむ）","yomimasu (yomu)","to read [u]"],
    ["はなします（はなす）","hanashimasu (hanasu)","to speak; talk [u]"],
    ["いきます（いく）","ikimasu (iku)","to go [u]"],
    ["きます（くる）","kimasu (kuru)","to come [irregular]"],
    ["かえります（かえる）","kaerimasu (kaeru)","to return; go home [u!]"],
    ["ねます（ねる）","nemasu (neru)","to sleep [ru]"],
    ["おきます（おきる）","okimasu (okiru)","to get up [ru]"],
    ["べんきょうします","benkyō shimasu","to study [irregular]"],
    ["します（する）","shimasu (suru)","to do [irregular]"],
    ["えいが","eiga","movie"],
    ["おんがく","ongaku","music"],
    ["テレビ","terebi","TV"],
    ["コーヒー","kōhī","coffee"],
    ["おちゃ","ocha","green tea"],
    ["みず","mizu","water"],
    ["あさごはん","asagohan","breakfast"],
    ["ひるごはん","hirugohan","lunch"],
    ["ばんごはん","bangohan","dinner"],
    ["がっこう","gakkō","school"],
    ["としょかん","toshokan","library"],
    ["いえ／うち","ie / uchi","house / home"],
    ["カフェ","kafe","café"],
    ["あさ","asa","morning"],
    ["ばん","ban","evening"],
    ["きょう","kyō","today"],
    ["あした","ashita","tomorrow"],
    ["しゅうまつ","shūmatsu","weekend"],
    ["どようび","doyōbi","Saturday"],
    ["にちようび","nichiyōbi","Sunday"],
    ["まいにち","mainichi","every day"],
    ["よく","yoku","often"],
    ["ときどき","tokidoki","sometimes"],
    ["あまり〜ません","amari -masen","not much (with negative)"],
    ["ぜんぜん〜ません","zenzen -masen","not at all (with negative)"]
  ],
  dialogue: {
    setting: "After class, Kenta works up the courage to ask Maria out.",
    lines: [
      ["けんた","マリアさんは しゅうまつ なにを しますか。","Maria-san wa shūmatsu nani o shimasu ka.","Maria, what do you do on weekends?"],
      ["マリア","うちで にほんごを べんきょうします。それから、ときどき えいがを みます。","Uchi de nihongo o benkyō shimasu. Sorekara, tokidoki eiga o mimasu.","I study Japanese at home. And sometimes I watch movies."],
      ["けんた","そうですか。あの、どようびに カフェで コーヒーを のみませんか。","Sō desu ka. Ano, doyōbi ni kafe de kōhī o nomimasen ka.","I see. Um... would you like to get coffee at a café on Saturday?"],
      ["マリア","いいですね。のみましょう。なんじに いきますか。","Ii desu ne. Nomimashō. Nanji ni ikimasu ka.","Sounds nice! Let's do it. What time shall we go?"],
      ["けんた","じゅういちじは どうですか。","Jūichiji wa dō desu ka.","How about eleven?"],
      ["マリア","いいですよ。じゃあ、どようびに。","Ii desu yo. Jā, doyōbi ni.","Sure. See you Saturday, then."]
    ]
  },
  grammar: [
    {
      title: "Verb types and the polite form",
      explanation: "Japanese verbs come in three families. Ru-verbs: drop る, add ます (たべる → たべます). U-verbs: change the final -u to -i, add ます (のむ → のみます, きく → ききます). Irregulars: する → します, くる → きます. Beware: かえる (return) LOOKS like a ru-verb but is an u-verb → かえります. The polite present covers both \"I eat\" and \"I will eat.\"",
      examples: [
        ["まいにち コーヒーを のみます。","Mainichi kōhī o nomimasu.","I drink coffee every day."],
        ["きょうは べんきょうしません。","Kyō wa benkyō shimasen.","I won't study today."]
      ]
    },
    {
      title: "を — object particle",
      explanation: "を (pronounced \"o\") marks the thing the verb acts on: [thing] を [verb]. The verb always comes LAST in a Japanese sentence.",
      examples: [
        ["ざっしを よみます。","Zasshi o yomimasu.","I read a magazine."],
        ["おんがくを ききます。","Ongaku o kikimasu.","I listen to music."]
      ]
    },
    {
      title: "で — place where the action happens",
      explanation: "で marks WHERE you do something: としょかんで べんきょうします (I study AT the library). Compare with に/へ, which mark where you're GOING.",
      examples: [
        ["カフェで ひるごはんを たべます。","Kafe de hirugohan o tabemasu.","I eat lunch at a café."],
        ["うちで テレビを みます。","Uchi de terebi o mimasu.","I watch TV at home."]
      ]
    },
    {
      title: "に／へ — destination; に — time",
      explanation: "Movement verbs (いく, くる, かえる) take に or へ for the destination: がっこうに いきます. に also pins an action to a clock time or day: くじに おきます, どようびに いきます. Words like きょう/あした/まいにち take NO particle.",
      examples: [
        ["あした としょかんへ いきます。","Ashita toshokan e ikimasu.","Tomorrow I'll go to the library."],
        ["まいにち しちじに おきます。","Mainichi shichiji ni okimasu.","I get up at seven every day."]
      ]
    },
    {
      title: "〜ませんか — \"won't you...?\" (invitation)",
      explanation: "The negative question form politely invites someone: のみませんか = \"Won't you have a drink (with me)?\" Accept with いいですね or 〜ましょう (let's...).",
      examples: [
        ["いっしょに えいがを みませんか。","Issho ni eiga o mimasen ka.","Won't you watch a movie with me?"],
        ["ひるごはんを たべましょう。","Hirugohan o tabemashō.","Let's eat lunch."]
      ]
    },
    {
      title: "Frequency adverbs",
      explanation: "まいにち (every day), よく (often), ときどき (sometimes) go with normal verbs. あまり (not much) and ぜんぜん (not at all) REQUIRE the negative 〜ません.",
      examples: [
        ["よく としょかんで べんきょうします。","Yoku toshokan de benkyō shimasu.","I often study at the library."],
        ["ぜんぜん テレビを みません。","Zenzen terebi o mimasen.","I don't watch TV at all."]
      ]
    }
  ],
  homework: {
    reading: {
      instructions: "Read about Kenta's week, then answer.",
      passage: "けんたさんは まいにち ろくじに おきます。あさ、うちで コーヒーを のみます。あさごはんは あまり たべません。がっこうで えいごを べんきょうします。ばん、としょかんで ほんを よみます。しゅうまつは ぜんぜん べんきょうしません。どようびに えいがを みます。",
      romaji: "Kenta-san wa mainichi rokuji ni okimasu. Asa, uchi de kōhī o nomimasu. Asagohan wa amari tabemasen. Gakkō de eigo o benkyō shimasu. Ban, toshokan de hon o yomimasu. Shūmatsu wa zenzen benkyō shimasen. Doyōbi ni eiga o mimasu.",
      questions: [
        { q: "What time does Kenta get up?", choices: ["6:00","7:00","9:00","11:00"], answer: 0 },
        { q: "How often does he eat breakfast?", choices: ["Not much","Every day","Often","Never"], answer: 0 },
        { q: "Where does he read books in the evening?", choices: ["At the library","At home","At school","At a café"], answer: 0 },
        { q: "What does he do on Saturdays?", choices: ["Watches a movie","Studies English","Drinks coffee","Reads books"], answer: 0 }
      ]
    },
    writing: {
      instructions: "Type the Japanese in hiragana. Pay attention to particles — they are graded!",
      items: [
        { prompt: "Say: \"I drink coffee.\" (コーヒー — katakana OK as kōhī)", accept: ["コーヒーをのみます","こーひーをのみます","koohii o nomimasu","kōhī o nomimasu","koohiionomimasu"], hint: "[thing] を のみます" },
        { prompt: "Say: \"I study Japanese at the library.\"", accept: ["としょかんでにほんごをべんきょうします","toshokan de nihongo o benkyou shimasu","toshokandenihongoobenkyoushimasu"], hint: "Place of action takes で." },
        { prompt: "Say: \"I will go to school tomorrow.\"", accept: ["あしたがっこうにいきます","あしたがっこうへいきます","ashita gakkou ni ikimasu","ashita gakkou e ikimasu","ashitagakkouniikimasu"], hint: "Destination takes に or へ; あした takes no particle." },
        { prompt: "Invite: \"Won't you watch a movie?\" (えいが)", accept: ["えいがをみませんか","eiga o mimasen ka","eigaomimasenka"], hint: "Negative question = invitation." },
        { prompt: "Say: \"I don't watch TV at all.\"", accept: ["ぜんぜんテレビをみません","ぜんぜんてれびをみません","zenzen terebi o mimasen","zenzenterebiomimasen"], hint: "ぜんぜん needs ません." }
      ]
    },
    speaking: {
      instructions: "Shadow each line, then 🎤 check. Keep every syllable one beat: be-n-kyo-u-shi-ma-su.",
      items: [
        { jp: "まいにち コーヒーを のみます。", romaji: "Mainichi kōhī o nomimasu.", en: "I drink coffee every day." },
        { jp: "としょかんで べんきょうします。", romaji: "Toshokan de benkyō shimasu.", en: "I study at the library." },
        { jp: "どようびに えいがを みませんか。", romaji: "Doyōbi ni eiga o mimasen ka.", en: "Won't you watch a movie on Saturday?" },
        { jp: "じゃあ、いきましょう。", romaji: "Jā, ikimashō.", en: "Well then, let's go." }
      ]
    }
  },
  quiz: [
    { q: "たべる is a ru-verb. Its polite form is:", choices: ["たべます","たべります","たべするます","たべいます"], answer: 0 },
    { q: "のむ (u-verb) becomes:", choices: ["のみます","のむます","のべます","のります"], answer: 0 },
    { q: "Pick the correct particle: としょかん＿＿べんきょうします。", choices: ["で","に","を","へ"], answer: 0 },
    { q: "Pick the correct particle: がっこう＿＿いきます。", choices: ["に","で","を","が"], answer: 0 },
    { q: "Pick the correct particle: おんがく＿＿ききます。", choices: ["を","で","に","は"], answer: 0 },
    { q: "\"Won't you have lunch with me?\" =", choices: ["ひるごはんを たべませんか。","ひるごはんを たべますか。","ひるごはんを たべましょう。","ひるごはんは なんですか。"], answer: 0 },
    { q: "ぜんぜん must be followed by:", choices: ["a negative (〜ません)","a question (か)","a past form","ましょう"], answer: 0 },
    { q: "かえる (to go home) conjugates as:", choices: ["かえります","かえます","かえするます","かえいます"], answer: 0 },
    { q: "Which time word takes に?", choices: ["どようび","きょう","あした","まいにち"], answer: 0 },
    { q: "「まいにち しちじに おきます。」 means:", choices: ["I get up at 7 every day.","I sleep at 7 every day.","I go home at 7 today.","I eat at 7 every day."], answer: 0 }
  ]
},

/* ---------------- LESSON 4 ---------------- */
{
  id: 4,
  title: "The First Date",
  jpTitle: "はじめてのデート",
  jpTitleRomaji: "hajimete no dēto",
  genkiRef: "Pairs with Genki I, Lesson 4",
  summary: "Say what exists where, describe locations, and talk about the past. Core grammar: あります/います, location words, past tense of です and verbs, 〜じかん, と.",
  objectives: [
    "Express existence: あります (things) vs. います (people/animals)",
    "Describe location with うえ・した・まえ・うしろ・なか・となり・ちかく",
    "Use the past tense of です (でした) and verbs (〜ました/〜ませんでした)",
    "Express duration with 〜じかん and companionship with と",
    "Use たくさん and the topic-additive も with subjects"
  ],
  vocab: [
    ["あります","arimasu","(a thing) exists; there is"],
    ["います","imasu","(a person/animal) exists; is there"],
    ["うえ","ue","on; above"],
    ["した","shita","under; below"],
    ["まえ","mae","in front of"],
    ["うしろ","ushiro","behind"],
    ["なか","naka","inside"],
    ["となり","tonari","next to"],
    ["ちかく","chikaku","near"],
    ["みぎ","migi","right"],
    ["ひだり","hidari","left"],
    ["つくえ","tsukue","desk"],
    ["いす","isu","chair"],
    ["ねこ","neko","cat"],
    ["いぬ","inu","dog"],
    ["こうえん","kōen","park"],
    ["スーパー","sūpā","supermarket"],
    ["デパート","depāto","department store"],
    ["バスてい","basutei","bus stop"],
    ["びょういん","byōin","hospital"],
    ["ほんや","hon'ya","bookstore"],
    ["レストラン","resutoran","restaurant"],
    ["きっさてん","kissaten","coffee shop"],
    ["おてら","otera","temple"],
    ["じんじゃ","jinja","shrine"],
    ["きのう","kinō","yesterday"],
    ["せんしゅう","senshū","last week"],
    ["〜じかん","-jikan","...hours (duration)"],
    ["ひとりで","hitori de","alone; by oneself"],
    ["たくさん","takusan","many; a lot"],
    ["〜と","-to","together with (a person); and"],
    ["でした","deshita","was (past of です)"]
  ],
  dialogue: {
    setting: "Monday morning. Yui asks Maria about her weekend.",
    lines: [
      ["ゆい","マリアさん、しゅうまつは どうでしたか。","Maria-san, shūmatsu wa dō deshita ka.","Maria, how was your weekend?"],
      ["マリア","たのしかったですよ。どようびに けんたさんと きっさてんに いきました。","Tanoshikatta desu yo. Doyōbi ni Kenta-san to kissaten ni ikimashita.","It was fun! On Saturday I went to a coffee shop with Kenta."],
      ["ゆい","へえ！ きっさてんは どこに ありますか。","Hē! Kissaten wa doko ni arimasu ka.","Oh really! Where is the coffee shop?"],
      ["マリア","ほんやの となりに あります。こうえんの ちかくです。","Hon'ya no tonari ni arimasu. Kōen no chikaku desu.","It's next to the bookstore, near the park."],
      ["ゆい","にちようびも でかけましたか。","Nichiyōbi mo dekakemashita ka.","Did you go out on Sunday too?"],
      ["マリア","いいえ、にちようびは うちに いました。さんじかん にほんごを べんきょうしました。","Iie, nichiyōbi wa uchi ni imashita. Sanjikan nihongo o benkyō shimashita.","No, on Sunday I was at home. I studied Japanese for three hours."],
      ["ゆい","えらいですね。あ、つくえの うえに ねこが いますよ。","Erai desu ne. A, tsukue no ue ni neko ga imasu yo.","Impressive! Oh — there's a cat on the desk!"]
    ]
  },
  grammar: [
    {
      title: "あります / います — existence",
      explanation: "Both mean \"there is / are,\" but Japanese splits them: あります for things and plants, います for people and animals. Pattern: [place] に [thing/person] が あります/います。",
      examples: [
        ["つくえの うえに ほんが あります。","Tsukue no ue ni hon ga arimasu.","There is a book on the desk."],
        ["こうえんに いぬが います。","Kōen ni inu ga imasu.","There is a dog in the park."]
      ]
    },
    {
      title: "Location words with の",
      explanation: "Location words are nouns: attach them with の. [landmark] の [location word] = \"location relative to landmark.\" きっさてんは ほんやの となりです = The coffee shop is next to the bookstore.",
      examples: [
        ["バスていは びょういんの まえに あります。","Basutei wa byōin no mae ni arimasu.","The bus stop is in front of the hospital."],
        ["ねこは いすの したに います。","Neko wa isu no shita ni imasu.","The cat is under the chair."]
      ]
    },
    {
      title: "Past tense of です — でした",
      explanation: "[noun] でした = \"was [noun].\" The negative past is じゃなかったです (or じゃありませんでした). どうでしたか = \"How was it?\" — your go-to question about the past.",
      examples: [
        ["きのうは どようびでした。","Kinō wa doyōbi deshita.","Yesterday was Saturday."],
        ["それは わたしの かばんじゃなかったです。","Sore wa watashi no kaban ja nakatta desu.","That wasn't my bag."]
      ]
    },
    {
      title: "Past tense of verbs — ました / ませんでした",
      explanation: "Verb past tense is beautifully regular: ます → ました (did), ません → ませんでした (didn't). No irregular verbs to memorize here!",
      examples: [
        ["せんしゅう えいがを みました。","Senshū eiga o mimashita.","I watched a movie last week."],
        ["きのう べんきょうしませんでした。","Kinō benkyō shimasen deshita.","I didn't study yesterday."]
      ]
    },
    {
      title: "と — \"together with\"; 〜じかん — duration",
      explanation: "[person] と = \"with [person]\": ともだちと いきました. By yourself is ひとりで. Duration uses 〜じかん with NO particle: さんじかん べんきょうしました = studied for three hours. (Compare: さんじに = AT 3 o'clock.)",
      examples: [
        ["けんたさんと ばんごはんを たべました。","Kenta-san to bangohan o tabemashita.","I ate dinner with Kenta."],
        ["まいにち いちじかん にほんごを べんきょうします。","Mainichi ichijikan nihongo o benkyō shimasu.","I study Japanese one hour every day."]
      ]
    }
  ],
  homework: {
    reading: {
      instructions: "Read Maria's journal entry about her weekend, then answer.",
      passage: "どようびに けんたさんと きっさてんに いきました。きっさてんは ほんやの となりに あります。コーヒーを のみました。それから、こうえんへ いきました。こうえんに ねこが たくさん いました！ にちようびは ひとりで うちに いました。さんじかん べんきょうしました。いい しゅうまつでした。",
      romaji: "Doyōbi ni Kenta-san to kissaten ni ikimashita. Kissaten wa hon'ya no tonari ni arimasu. Kōhī o nomimashita. Sorekara, kōen e ikimashita. Kōen ni neko ga takusan imashita! Nichiyōbi wa hitori de uchi ni imashita. Sanjikan benkyō shimashita. Ii shūmatsu deshita.",
      questions: [
        { q: "Where is the coffee shop?", choices: ["Next to the bookstore","In front of the hospital","Behind the park","Near the school"], answer: 0 },
        { q: "What was in the park?", choices: ["Many cats","Many dogs","A bus stop","A temple"], answer: 0 },
        { q: "Who was Maria with on Sunday?", choices: ["Nobody — she was alone","Kenta","Yui","Her teacher"], answer: 0 },
        { q: "How long did she study?", choices: ["3 hours","3 o'clock","1 hour","All day"], answer: 0 }
      ]
    },
    writing: {
      instructions: "Type the Japanese in hiragana. Choose あります vs. います carefully.",
      items: [
        { prompt: "Say: \"There is a cat under the desk.\"", accept: ["つくえのしたにねこがいます","tsukue no shita ni neko ga imasu","tsukuenoshitaninekogaimasu"], hint: "Animals take います." },
        { prompt: "Say: \"There is a book on the chair.\" (いす)", accept: ["いすのうえにほんがあります","isu no ue ni hon ga arimasu","isunouenihongaarimasu"], hint: "Things take あります." },
        { prompt: "Say: \"I went to the park yesterday.\"", accept: ["きのうこうえんにいきました","きのうこうえんへいきました","kinou kouen ni ikimashita","kinou kouen e ikimashita","kinoukouenniikimashita"], hint: "Past of いきます is いきました." },
        { prompt: "Say: \"I didn't eat breakfast.\" (あさごはん)", accept: ["あさごはんをたべませんでした","asagohan o tabemasen deshita","asagohanotabemasendeshita"], hint: "Negative past = ませんでした." },
        { prompt: "Say: \"I studied with a friend.\" (ともだち)", accept: ["ともだちとべんきょうしました","tomodachi to benkyou shimashita","tomodachitobenkyoushimashita"], hint: "\"with\" = と" }
      ]
    },
    speaking: {
      instructions: "Shadow, then 🎤 check. Stretch the long vowels: きっさてん has a silent beat; こうえん is ko-u-e-n (4 beats).",
      items: [
        { jp: "つくえの うえに ねこが います。", romaji: "Tsukue no ue ni neko ga imasu.", en: "There is a cat on the desk." },
        { jp: "きっさてんは ほんやの となりに あります。", romaji: "Kissaten wa hon'ya no tonari ni arimasu.", en: "The coffee shop is next to the bookstore." },
        { jp: "きのう ともだちと えいがを みました。", romaji: "Kinō tomodachi to eiga o mimashita.", en: "Yesterday I watched a movie with a friend." },
        { jp: "しゅうまつは どうでしたか。", romaji: "Shūmatsu wa dō deshita ka.", en: "How was your weekend?" }
      ]
    }
  },
  quiz: [
    { q: "\"There is a dog\" =", choices: ["いぬが います。","いぬが あります。","いぬは でした。","いぬに います。"], answer: 0 },
    { q: "\"There is a bank (ぎんこう)\" =", choices: ["ぎんこうが あります。","ぎんこうが います。","ぎんこうは いました。","ぎんこうで あります。"], answer: 0 },
    { q: "\"The cat is under the chair\" =", choices: ["ねこは いすの したに います。","ねこは したの いすに います。","いすは ねこの したに います。","ねこは いすに したで います。"], answer: 0 },
    { q: "Past tense of たべます:", choices: ["たべました","たべますした","たべでした","たべまし"], answer: 0 },
    { q: "Negative past of いきます:", choices: ["いきませんでした","いきました","いきないでした","いきませんです"], answer: 0 },
    { q: "\"Yesterday was Sunday\" =", choices: ["きのうは にちようびでした。","きのうは にちようびです。","きのうは にちようびました。","きのうの にちようびです。"], answer: 0 },
    { q: "\"I went with Yui\" =", choices: ["ゆいさんと いきました。","ゆいさんに いきました。","ゆいさんで いきました。","ゆいさんを いきました。"], answer: 0 },
    { q: "\"for three hours\" =", choices: ["さんじかん","さんじに","さんじかんに","さんじ"], answer: 0 },
    { q: "となり means:", choices: ["next to","behind","inside","above"], answer: 0 },
    { q: "「どうでしたか。」 asks:", choices: ["How was it?","Where is it?","What will you do?","Whose was it?"], answer: 0 }
  ]
},

/* ---------------- LESSON 5 ---------------- */
{
  id: 5,
  title: "A Trip to the Coast",
  jpTitle: "うみへのりょこう",
  jpTitleRomaji: "umi e no ryokō",
  genkiRef: "Pairs with Genki I, Lesson 5",
  summary: "Describe people, places, and experiences with adjectives. Core grammar: い/な adjectives (present & past), すき/きらい, 〜ましょう/ましょうか.",
  objectives: [
    "Distinguish い-adjectives from な-adjectives and use both before nouns",
    "Conjugate adjectives: present, negative, past, past-negative",
    "Express likes and dislikes with すき/きらい + が",
    "Make suggestions with 〜ましょう / 〜ましょうか"
  ],
  vocab: [
    ["あたらしい","atarashii","new [i-adj]"],
    ["ふるい","furui","old (things) [i-adj]"],
    ["あつい","atsui","hot [i-adj]"],
    ["さむい","samui","cold (weather) [i-adj]"],
    ["いそがしい","isogashii","busy [i-adj]"],
    ["おおきい","ōkii","big [i-adj]"],
    ["ちいさい","chiisai","small [i-adj]"],
    ["おもしろい","omoshiroi","interesting; funny [i-adj]"],
    ["つまらない","tsumaranai","boring [i-adj]"],
    ["むずかしい","muzukashii","difficult [i-adj]"],
    ["やさしい","yasashii","easy; kind [i-adj]"],
    ["たのしい","tanoshii","fun [i-adj]"],
    ["やすい","yasui","cheap [i-adj]"],
    ["たかい","takai","expensive; tall [i-adj]"],
    ["こわい","kowai","scary [i-adj]"],
    ["いい","ii","good [i-adj, irregular: negative is よくない]"],
    ["すき（な）","suki (na)","fond of; to like [na-adj]"],
    ["きらい（な）","kirai (na)","to dislike [na-adj]"],
    ["しずか（な）","shizuka (na)","quiet [na-adj]"],
    ["にぎやか（な）","nigiyaka (na)","lively [na-adj]"],
    ["げんき（な）","genki (na)","healthy; energetic [na-adj]"],
    ["ひま（な）","hima (na)","free; not busy [na-adj]"],
    ["きれい（な）","kirei (na)","beautiful; clean [na-adj — looks like i-adj!]"],
    ["うみ","umi","sea; ocean"],
    ["やま","yama","mountain"],
    ["てんき","tenki","weather"],
    ["やすみ","yasumi","day off; holiday"],
    ["りょこう","ryokō","trip; travel"],
    ["たべもの","tabemono","food"],
    ["のみもの","nomimono","drink"],
    ["さかな","sakana","fish"]
  ],
  dialogue: {
    setting: "The Japanese club is planning a weekend trip to Santa Cruz.",
    lines: [
      ["ゆい","しゅうまつ、みんなで うみに いきませんか。","Shūmatsu, minna de umi ni ikimasen ka.","Why don't we all go to the beach this weekend?"],
      ["けんた","いいですね！ サンタクルーズは きれいですよ。","Ii desu ne! Santakurūzu wa kirei desu yo.","Great idea! Santa Cruz is beautiful."],
      ["マリア","でも、うみの みずは さむくないですか。","Demo, umi no mizu wa samukunai desu ka.","But isn't the ocean water cold?"],
      ["けんた","ちょっと さむいです。でも、てんきは いいですよ。","Chotto samui desu. Demo, tenki wa ii desu yo.","It's a little cold. But the weather is nice."],
      ["ゆい","マリアさんは うみが すきですか。","Maria-san wa umi ga suki desu ka.","Maria, do you like the ocean?"],
      ["マリア","はい、だいすきです。さかなは ちょっと こわいですが…。","Hai, daisuki desu. Sakana wa chotto kowai desu ga...","Yes, I love it. Though fish are a little scary..."],
      ["けんた","だいじょうぶですよ。じゃあ、どようびに いきましょう！","Daijōbu desu yo. Jā, doyōbi ni ikimashō!","It'll be fine! OK, let's go on Saturday!"]
    ]
  },
  grammar: [
    {
      title: "い-adjectives vs. な-adjectives",
      explanation: "い-adjectives end in 〜い and connect to nouns directly: おもしろい ほん. な-adjectives need な before a noun: しずかな ひと. Trap: きれい and きらい END in -i but are な-adjectives (きれいな うみ). Both types can also end a sentence with です: この ほんは おもしろいです。",
      examples: [
        ["あたらしい くつを かいました。","Atarashii kutsu o kaimashita.","I bought new shoes."],
        ["しずかな としょかんで べんきょうします。","Shizuka na toshokan de benkyō shimasu.","I study in a quiet library."]
      ]
    },
    {
      title: "Conjugating い-adjectives",
      explanation: "Drop the final い, then: negative 〜くないです, past 〜かったです, past-negative 〜くなかったです. さむい → さむくないです → さむかったです → さむくなかったです. The adjective いい is irregular: it conjugates from よ〜 (よくない, よかった).",
      examples: [
        ["きのうは あつかったです。","Kinō wa atsukatta desu.","Yesterday was hot."],
        ["テストは むずかしくなかったです。","Tesuto wa muzukashiku nakatta desu.","The test wasn't difficult."]
      ]
    },
    {
      title: "Conjugating な-adjectives",
      explanation: "な-adjectives behave like nouns: negative 〜じゃないです, past 〜でした, past-negative 〜じゃなかったです. ひまです → ひまじゃないです → ひまでした → ひまじゃなかったです.",
      examples: [
        ["まちは にぎやかでした。","Machi wa nigiyaka deshita.","The town was lively."],
        ["きょうは ひまじゃないです。","Kyō wa hima ja nai desu.","I'm not free today."]
      ]
    },
    {
      title: "すき / きらい — likes and dislikes",
      explanation: "The thing you like takes が, not を: わたしは うみが すきです (lit. \"As for me, the sea is liked\"). Strengthen with だい〜: だいすき (love), だいきらい (hate). Asking back: なにが すきですか。",
      examples: [
        ["にほんの たべものが すきです。","Nihon no tabemono ga suki desu.","I like Japanese food."],
        ["さかなが きらいです。","Sakana ga kirai desu.","I dislike fish."]
      ]
    },
    {
      title: "〜ましょう / 〜ましょうか — \"let's\" / \"shall we?\"",
      explanation: "Swap ます for ましょう to propose doing something together: いきましょう = Let's go. Add か to soften it into a question: なにを たべましょうか = What shall we eat?",
      examples: [
        ["きっさてんで やすみましょう。","Kissaten de yasumimashō.","Let's take a break at the coffee shop."],
        ["なんじに あいましょうか。","Nanji ni aimashō ka.","What time shall we meet?"]
      ]
    }
  ],
  homework: {
    reading: {
      instructions: "Read Maria's postcard from the club trip, then answer.",
      passage: "どようびに クラブの みんなと うみに いきました。てんきは とても よかったです。でも、みずは さむかったです。うみは きれいでした。ひるごはんに さかなを たべました。とても おいしかったです！ わたしは この まちが だいすきです。にぎやかじゃないです。しずかで、きれいな まちです。",
      romaji: "Doyōbi ni kurabu no minna to umi ni ikimashita. Tenki wa totemo yokatta desu. Demo, mizu wa samukatta desu. Umi wa kirei deshita. Hirugohan ni sakana o tabemashita. Totemo oishikatta desu! Watashi wa kono machi ga daisuki desu. Nigiyaka ja nai desu. Shizuka de, kirei na machi desu.",
      questions: [
        { q: "How was the weather?", choices: ["Very good","Cold","Bad","Hot"], answer: 0 },
        { q: "What was cold?", choices: ["The water","The weather","The food","The town"], answer: 0 },
        { q: "How does Maria describe the town?", choices: ["Quiet and beautiful","Lively and big","Boring and old","Busy and new"], answer: 0 },
        { q: "よかった is the past tense of which adjective?", choices: ["いい","よい? both — いい/よい (good)","やすい","きれい"], answer: 0 }
      ]
    },
    writing: {
      instructions: "Type the Japanese in hiragana. Watch the い/な adjective difference.",
      items: [
        { prompt: "Say: \"Yesterday was cold.\" (weather)", accept: ["きのうはさむかったです","kinou wa samukatta desu","kinouwasamukattadesu"], hint: "い-adj past: 〜かったです" },
        { prompt: "Say: \"This book is not interesting.\"", accept: ["このほんはおもしろくないです","kono hon wa omoshirokunai desu","konohonwaomoshirokunaidesu"], hint: "い-adj negative: 〜くないです" },
        { prompt: "Say: \"I like Japanese food.\" (にほんのたべもの)", accept: ["にほんのたべものがすきです","nihon no tabemono ga suki desu","nihonnotabemonogasukidesu"], hint: "The liked thing takes が." },
        { prompt: "Say: \"The library was quiet.\" (しずか)", accept: ["としょかんはしずかでした","toshokan wa shizuka deshita","toshokanwashizukadeshita"], hint: "な-adj past: 〜でした" },
        { prompt: "Suggest: \"Let's go to the mountains.\" (やま)", accept: ["やまにいきましょう","やまへいきましょう","yama ni ikimashou","yama e ikimashou","yamaniikimashou"], hint: "〜ましょう" }
      ]
    },
    speaking: {
      instructions: "Shadow, then 🎤 check. い-adjective endings carry the meaning — pronounce 〜かった and 〜くない clearly.",
      items: [
        { jp: "てんきが いいですね。", romaji: "Tenki ga ii desu ne.", en: "The weather is nice, isn't it?" },
        { jp: "きのうは さむかったです。", romaji: "Kinō wa samukatta desu.", en: "Yesterday was cold." },
        { jp: "わたしは うみが だいすきです。", romaji: "Watashi wa umi ga daisuki desu.", en: "I love the ocean." },
        { jp: "いっしょに いきましょう。", romaji: "Issho ni ikimashō.", en: "Let's go together." }
      ]
    }
  },
  quiz: [
    { q: "Which is a な-adjective?", choices: ["きれい","おもしろい","さむい","あたらしい"], answer: 0 },
    { q: "\"a quiet town\" =", choices: ["しずかな まち","しずかい まち","しずか まち","まちな しずか"], answer: 0 },
    { q: "Past tense of さむいです:", choices: ["さむかったです","さむいでした","さむでした","さむくないです"], answer: 0 },
    { q: "Negative of おもしろいです:", choices: ["おもしろくないです","おもしろいじゃないです","おもしろくありです","おもしろないです"], answer: 0 },
    { q: "The negative of いいです is:", choices: ["よくないです","いくないです","いいじゃないです","よいないです"], answer: 0 },
    { q: "\"I like coffee\" =", choices: ["コーヒーが すきです。","コーヒーを すきです。","コーヒーは すきます。","コーヒーに すきです。"], answer: 0 },
    { q: "Past tense of ひまです (な-adj):", choices: ["ひまでした","ひまかったです","ひまいでした","ひまくなかったです"], answer: 0 },
    { q: "\"Let's eat dinner\" =", choices: ["ばんごはんを たべましょう。","ばんごはんを たべませんか。","ばんごはんを たべました。","ばんごはんを たべますか。"], answer: 0 },
    { q: "つまらない means:", choices: ["boring","scary","busy","difficult"], answer: 0 },
    { q: "「テストは むずかしくなかったです。」 means:", choices: ["The test was not difficult.","The test was difficult.","The test will be difficult.","The test is not interesting."], answer: 0 }
  ]
},

/* ---------------- LESSON 6 ---------------- */
{
  id: 6,
  title: "A Day in the Life",
  jpTitle: "ロバートさんのいちにち",
  jpTitleRomaji: "Robāto-san no ichinichi",
  genkiRef: "Pairs with Genki I, Lesson 6",
  summary: "The te-form unlocks requests, permission, prohibition, and chaining actions. Core grammar: て-form, 〜てください, 〜てもいいです, 〜てはいけません, から.",
  objectives: [
    "Build the て-form of ru-verbs, u-verbs, and irregulars",
    "Make polite requests with 〜てください",
    "Ask and give permission with 〜てもいいですか",
    "Express prohibition with 〜てはいけません",
    "Chain actions with the て-form and give reasons with から"
  ],
  vocab: [
    ["あけます（あける）","akemasu (akeru)","to open [ru]"],
    ["しめます（しめる）","shimemasu (shimeru)","to close [ru]"],
    ["おしえます（おしえる）","oshiemasu (oshieru)","to teach; tell [ru]"],
    ["わすれます（わすれる）","wasuremasu (wasureru)","to forget [ru]"],
    ["かります（かりる）","karimasu (kariru)","to borrow [ru]"],
    ["つかいます（つかう）","tsukaimasu (tsukau)","to use [u]"],
    ["つくります（つくる）","tsukurimasu (tsukuru)","to make [u]"],
    ["まちます（まつ）","machimasu (matsu)","to wait [u]"],
    ["もちます（もつ）","mochimasu (motsu)","to carry; hold [u]"],
    ["やすみます（やすむ）","yasumimasu (yasumu)","to rest; be absent [u]"],
    ["あそびます（あそぶ）","asobimasu (asobu)","to play; hang out [u]"],
    ["いそぎます（いそぐ）","isogimasu (isogu)","to hurry [u]"],
    ["かえします（かえす）","kaeshimasu (kaesu)","to return (a thing) [u]"],
    ["けします（けす）","keshimasu (kesu)","to turn off; erase [u]"],
    ["しにます（しぬ）","shinimasu (shinu)","to die [u]"],
    ["すわります（すわる）","suwarimasu (suwaru)","to sit down [u]"],
    ["たちます（たつ）","tachimasu (tatsu)","to stand up [u]"],
    ["はいります（はいる）","hairimasu (hairu)","to enter [u!]"],
    ["のります（のる）","norimasu (noru)","to get on; ride [u]"],
    ["シャワーをあびます","shawā o abimasu","to take a shower [ru]"],
    ["でんき","denki","electricity; light"],
    ["まど","mado","window"],
    ["ドア","doa","door"],
    ["でんしゃ","densha","train"],
    ["けいたい","keitai","cell phone"],
    ["しゅくだい","shukudai","homework"],
    ["あとで","ato de","later"],
    ["すぐ","sugu","right away"],
    ["ゆっくり","yukkuri","slowly; leisurely"],
    ["〜から","-kara","because ...; so ..."]
  ],
  dialogue: {
    setting: "In the classroom. It's warm, and a quiz is about to start.",
    lines: [
      ["せんせい","あついですね。すみませんが、まどを あけてください。","Atsui desu ne. Sumimasen ga, mado o akete kudasai.","It's hot, isn't it. Sorry, but please open the window."],
      ["けんた","はい。","Hai.","Sure."],
      ["マリア","せんせい、じしょを つかってもいいですか。","Sensei, jisho o tsukatte mo ii desu ka.","Professor, may I use a dictionary?"],
      ["せんせい","いいえ、テストですから、つかってはいけません。","Iie, tesuto desu kara, tsukatte wa ikemasen.","No — it's a test, so you may not use one."],
      ["マリア","じゃあ、けいたいは…。","Jā, keitai wa...","Then... what about my phone?"],
      ["せんせい","けいたいも だめですよ。けして、かばんに いれてください。","Keitai mo dame desu yo. Keshite, kaban ni irete kudasai.","Phones are also out. Please turn it off and put it in your bag."],
      ["マリア","はい、わかりました。","Hai, wakarimashita.","Yes, understood."],
      ["せんせい","じゃあ、はじめましょう。ゆっくり よんで、こたえてください。","Jā, hajimemashō. Yukkuri yonde, kotaete kudasai.","All right, let's begin. Read slowly and answer."]
    ]
  },
  grammar: [
    {
      title: "The て-form",
      explanation: "The て-form is the Swiss-army knife of Japanese. Ru-verbs: る → て (たべる → たべて). Irregulars: する → して, くる → きて. U-verbs follow the dictionary-form ending: う・つ・る → って (かう→かって, まつ→まって, のる→のって); む・ぶ・ぬ → んで (のむ→のんで, あそぶ→あそんで, しぬ→しんで); く → いて (かく→かいて) but いく→いって; ぐ → いで (いそぐ→いそいで); す → して (はなす→はなして). Memorize with the rhythm: tte-tte-tte, nde-nde-nde, ite-ide-shite.",
      examples: [
        ["まって！","Matte!","Wait!"],
        ["にほんごで はなして、こたえてください。","Nihongo de hanashite, kotaete kudasai.","Please speak in Japanese and answer."]
      ]
    },
    {
      title: "〜てください — polite request",
      explanation: "て-form + ください politely asks someone to do something: まどを あけてください = Please open the window. Soften further with すみませんが before it.",
      examples: [
        ["ゆっくり はなしてください。","Yukkuri hanashite kudasai.","Please speak slowly."],
        ["しゅくだいを わすれないでください。","Shukudai o wasurenaide kudasai.","Please don't forget the homework."]
      ]
    },
    {
      title: "〜てもいいです（か） — permission",
      explanation: "て-form + もいいです = \"it's okay to...\"; add か to ask permission. トイレに いってもいいですか = May I go to the bathroom? Granting: いいですよ。",
      examples: [
        ["まどを しめてもいいですか。","Mado o shimete mo ii desu ka.","May I close the window?"],
        ["ここに すわってもいいですよ。","Koko ni suwatte mo ii desu yo.","You may sit here."]
      ]
    },
    {
      title: "〜てはいけません — prohibition",
      explanation: "て-form + はいけません = \"must not.\" This is firm — teachers, signs, and rules use it. ここで たばこを すってはいけません = No smoking here.",
      examples: [
        ["テストで じしょを つかってはいけません。","Tesuto de jisho o tsukatte wa ikemasen.","You must not use a dictionary on the test."],
        ["としょかんで はなしてはいけません。","Toshokan de hanashite wa ikemasen.","You must not talk in the library."]
      ]
    },
    {
      title: "Chaining actions with て; reasons with から",
      explanation: "Join sequential actions by putting all but the last verb in て-form: おきて、シャワーを あびて、がっこうに いきます (I get up, shower, and go to school). [reason] から、[result]: テストですから、べんきょうします = Because there's a test, I'll study.",
      examples: [
        ["うちに かえって、ばんごはんを つくります。","Uchi ni kaette, bangohan o tsukurimasu.","I go home and make dinner."],
        ["あしたは やすみですから、こんばん あそびましょう。","Ashita wa yasumi desu kara, konban asobimashō.","Tomorrow's a day off, so let's hang out tonight."]
      ]
    }
  ],
  homework: {
    reading: {
      instructions: "Read the dorm rules and Robert's morning, then answer.",
      passage: "ロバートさんは まいあさ しちじに おきて、シャワーを あびて、コーヒーを のみます。それから、でんしゃに のって、がっこうに いきます。\n\n〔りょうの ルール〕\n・へやで たばこを すってはいけません。\n・ばん じゅういちじから おんがくを きいてはいけません。\n・ともだちは あそびに きてもいいです。でも、じゅうじに かえってください。",
      romaji: "Robāto-san wa maiasa shichiji ni okite, shawā o abite, kōhī o nomimasu. Sorekara, densha ni notte, gakkō ni ikimasu.\n\n[Ryō no rūru]\n- Heya de tabako o sutte wa ikemasen.\n- Ban jūichiji kara ongaku o kiite wa ikemasen.\n- Tomodachi wa asobi ni kite mo ii desu. Demo, jūji ni kaette kudasai.",
      questions: [
        { q: "What does Robert do right after getting up?", choices: ["Takes a shower","Drinks coffee","Rides the train","Goes to school"], answer: 0 },
        { q: "How does Robert get to school?", choices: ["By train","By bus","By bicycle","He walks"], answer: 0 },
        { q: "Which is prohibited in the dorm?", choices: ["Smoking in your room","Having friends over","Drinking coffee","Getting up early"], answer: 0 },
        { q: "By what time must friends go home?", choices: ["10:00","11:00","7:00","Midnight"], answer: 0 }
      ]
    },
    writing: {
      instructions: "Type the Japanese in hiragana. The て-form is the whole game here — check your endings.",
      items: [
        { prompt: "Request: \"Please open the window.\" (まど)", accept: ["まどをあけてください","mado o akete kudasai","madooaketekudasai"], hint: "あける is a ru-verb: る→て" },
        { prompt: "Request: \"Please wait a little.\" (ちょっと)", accept: ["ちょっとまってください","chotto matte kudasai","chottomattekudasai"], hint: "まつ → って" },
        { prompt: "Ask permission: \"May I use a dictionary?\" (じしょ)", accept: ["じしょをつかってもいいですか","jisho o tsukatte mo ii desu ka","jishootsukattemoiidesuka"], hint: "つかう → つかって" },
        { prompt: "Prohibit: \"You must not talk in the library.\"", accept: ["としょかんではなしてはいけません","toshokan de hanashite wa ikemasen","toshokandehanashitewaikemasen"], hint: "はなす → はなして" },
        { prompt: "Chain: \"I get up and drink coffee.\"", accept: ["おきてコーヒーをのみます","おきて、コーヒーをのみます","おきてこーひーをのみます","okite koohii o nomimasu","okitekoohiionomimasu"], hint: "First verb in て-form, last verb in ます." }
      ]
    },
    speaking: {
      instructions: "Shadow, then 🎤 check. Double consonants (まって, いって) need a full silent beat — clap the rhythm if it helps.",
      items: [
        { jp: "ちょっと まってください。", romaji: "Chotto matte kudasai.", en: "Please wait a moment." },
        { jp: "まどを あけてもいいですか。", romaji: "Mado o akete mo ii desu ka.", en: "May I open the window?" },
        { jp: "ここで しゃしんを とってはいけません。", romaji: "Koko de shashin o totte wa ikemasen.", en: "You must not take photos here." },
        { jp: "うちに かえって、しゅくだいを します。", romaji: "Uchi ni kaette, shukudai o shimasu.", en: "I'll go home and do my homework." }
      ]
    }
  },
  quiz: [
    { q: "て-form of たべる (ru-verb):", choices: ["たべて","たべって","たべんで","たべいて"], answer: 0 },
    { q: "て-form of のむ:", choices: ["のんで","のんて","のみて","のって"], answer: 0 },
    { q: "て-form of まつ:", choices: ["まって","まちて","まんで","まて"], answer: 0 },
    { q: "て-form of いく (exception!):", choices: ["いって","いいて","いんで","いきて"], answer: 0 },
    { q: "て-form of いそぐ:", choices: ["いそいで","いそいて","いそんで","いそって"], answer: 0 },
    { q: "\"Please close the door\" =", choices: ["ドアを しめてください。","ドアを しめください。","ドアを しめますください。","ドアが しめてください。"], answer: 0 },
    { q: "\"May I sit here?\" =", choices: ["ここに すわってもいいですか。","ここに すわりますか。","ここに すわってはいけませんか。","ここに すわりましょうか。"], answer: 0 },
    { q: "「つかってはいけません」 means:", choices: ["You must not use it.","You may use it.","Please use it.","Let's use it."], answer: 0 },
    { q: "\"I get up, shower, and go to school\": the first two verbs are in:", choices: ["て-form","ます-form","dictionary form","past tense"], answer: 0 },
    { q: "「テストですから、べんきょうします。」— から expresses:", choices: ["a reason (because)","a place (from)","a time (after)","permission"], answer: 0 }
  ]
}
];

const SYLLABUS = {
  intro: "A 16-week semester plan matching the pace of a typical California community college Japanese 1 course (Genki I, Lessons 1–6, ~5 units). Each chapter gets roughly two weeks: vocabulary first, grammar mid-week, workbook-style homework due before the chapter quiz.",
  weeks: [
    { wk: "1", topic: "Course intro · Greetings · Hiragana あ〜そ", app: "Pronunciation Guide; Hiragana rows 1–3 + drill", hw: "Hiragana drill until 90%+" },
    { wk: "2", topic: "Hiragana た〜ん, voiced & combo kana · Numbers 0–100", app: "Finish Hiragana unit + full drill", hw: "Hiragana quiz (timed); L1 vocab" },
    { wk: "3", topic: "Lesson 1: XはYです · questions か · の", app: "Lesson 1 Grammar + Dialogue shadowing", hw: "L1 Reading + Writing HW" },
    { wk: "4", topic: "Lesson 1: time & phone numbers · self-introductions", app: "L1 Speaking HW; record self-intro", hw: "Lesson 1 Quiz" },
    { wk: "5", topic: "Lesson 2: これ/それ/あれ · この/その/あの · Katakana begins", app: "Lesson 2 Grammar; Katakana rows 1–5", hw: "L2 Reading + Writing HW" },
    { wk: "6", topic: "Lesson 2: だれの, も, じゃないです · prices", app: "L2 Speaking HW; Katakana drill", hw: "Lesson 2 Quiz; Katakana quiz" },
    { wk: "7", topic: "Lesson 3: verb conjugation (る/う/irregular)", app: "Lesson 3 Grammar 1–2; vocab flashwork", hw: "Verb conjugation worksheet (Writing HW)" },
    { wk: "8", topic: "Lesson 3: particles を・で・に・へ · invitations", app: "L3 Dialogue + Speaking HW", hw: "Lesson 3 Quiz · Midterm review" },
    { wk: "9", topic: "MIDTERM (L1–3) · Lesson 4: あります/います", app: "Progress page review; L4 Grammar 1–2", hw: "Midterm" },
    { wk: "10", topic: "Lesson 4: location words · past tense", app: "L4 Reading + Writing HW", hw: "L4 homework set" },
    { wk: "11", topic: "Lesson 4 wrap-up · weekend journal", app: "L4 Speaking HW", hw: "Lesson 4 Quiz · journal entry" },
    { wk: "12", topic: "Lesson 5: い/な adjectives", app: "L5 Grammar 1–3 + vocab", hw: "Adjective conjugation drill (Writing HW)" },
    { wk: "13", topic: "Lesson 5: すき/きらい · ましょう", app: "L5 Dialogue + Speaking HW", hw: "Lesson 5 Quiz" },
    { wk: "14", topic: "Lesson 6: て-form bootcamp", app: "L6 Grammar 1 + conjugation drills", hw: "て-form worksheet (Writing HW)" },
    { wk: "15", topic: "Lesson 6: てください・てもいいです・てはいけません", app: "L6 Reading + Speaking HW", hw: "Lesson 6 Quiz" },
    { wk: "16", topic: "Review · oral final (self-intro + role play) · FINAL EXAM (L1–6)", app: "Re-take all quizzes on Progress page", hw: "Final exam" }
  ],
  grading: [
    ["Homework (reading / writing / speaking sets)", "25%"],
    ["Chapter quizzes", "25%"],
    ["Kana quizzes (hiragana + katakana)", "10%"],
    ["Midterm (Lessons 1–3)", "15%"],
    ["Oral final (self-introduction + role play)", "10%"],
    ["Final exam (Lessons 1–6)", "15%"]
  ]
};
