export const categories = [
  {
    id: 1,
    name: "Horror",
    books: [
      {
        id: 7,
        title: "حلقة الرعب",
        author: "احمد خالد توفيق",
        authorID: 1,
        cover:
          "https://upload.wikimedia.org/wikipedia/ar/7/7a/%D8%AD%D9%84%D9%82%D8%A9_%D8%A7%D9%84%D8%B1%D8%B9%D8%A8_-_%D8%A7%D9%84%D8%B9%D8%AF%D8%AF_%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1_%D9%85%D8%A7_%D9%88%D8%B1%D8%A7%D8%A1_%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9.png"
      },
      {
        id: 8,
        title: "يوتوبيا ",
        author: "احمد خالد توفيق",
        authorID: 1,
        cover: "https://images.gr-assets.com/books/1510693763l/36595963.jpg"
      },
      {
        id: 9,
        title: "السنجة",
        author: "احمد خالد توفيق",
        authorID: 1,
        cover: "https://images.gr-assets.com/books/1349778839l/16076787.jpg"
      }
    ]
  },
  {
    id: 2,
    name: "Fantasy",
    books: [
      {
        id: 1,
        title: "Gingerbread",
        author: "Helen Oyeyemi",
        authorID: 2,
        cover: "https://images.gr-assets.com/books/1549556368l/40634915.jpg"
      },
      {
        id: 2,
        title: "The Once and Future King",
        author: "Helen Oyeyemi",
        authorID: 2,
        cover: "https://images.gr-assets.com/books/1338741283l/43545.jpg"
      },
      {
        id: 3,
        title: "The Bird King",
        author: "Helen Oyeyemi",
        authorID: 2,
        cover: "https://images.gr-assets.com/books/1530540458l/40642333.jpg"
      }
    ]
  },
  {
    id: 3,
    name: "Science Fiction",
    books: [
      {
        id: 4,
        title: "Superman: Dawnbreaker",
        author: "Matt de la Pena ",
        authorID: 3,
        cover: "https://images.gr-assets.com/books/1529962084l/29749094.jpg"
      },
      {
        id: 5,
        title: "Poison Study",
        author: "Matt de la Pena",
        authorID: 3,
        cover: "https://images.gr-assets.com/books/1535002553s/32075671.jpg"
      },
      {
        id: 6,
        title: "Sharp Objects",
        author: "Matt de la Pena",
        authorID: 3,
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SY180_.jpg"
      }
    ]
  }
];

export const authors = [
  {
    id: 1,
    name: "احمد خالد توفيق",
    Born: "June 10, 1962 ",
    Website: "http://aktowfik.blogspot.com/",
    Genre: "Fantasy, Horror, Science Fiction",
    cover: "https://images.gr-assets.com/authors/1316682283p5/1479015.jpg",
    bio:
      "احمد خالد توفيق فراج طبيب وأديب مصري، ويعتبر أول كاتب عربي في مجال أدب الرعب و الأشهر في مجال أدب الشباب والفانتازيا والخيال العلمي ويلقب بالعراب,ولد بمدينة طنطا عاصمة محافظة الغربية فى اليوم العاشر من شهر يونيو عام 1962، وتخرج من كلية الطب عام 1985، كما حصل على الدكتوراة فى طب المناطق الحارة عام 1997. متزوج من د منال أخصائية صدر في كلية طب طنطا – وهي من المنوفية - ولديه من الأبناء (محمد) و(مريم). بدأ أحمد خالد العمل فى المؤسسة العربية الحديثة عام 1992 ككاتب رعب لسلسلة (ما وراء الطبيعة) حيث تقدم بأولى رواياته (أسطورة مصاص الدماء) ولم تلق في البدء قبولاً في المؤسسة .يعدّ د. أحمد من الكتاب العرب النادرين الذين يكتبون في هذا المجال بمثل هذا التخصص - إن لم يكن أولهم - ( ما وراء الطبيعة ) .. تلك السلسلة التي عشقناها جميعاً ببطلها (رفعت إسماعيل) الساخر العجوز، والذى أظهر لنا د. (أحمد) عن طريقه مدى اعتزازه بعروبته، ومدى تدينه وإلتزامه وعبقريته أيضاً، بعد ذلك أخرج لنا د. (أحمد ) سلسلة (فانتازيا) الرائعة ببطلتها (عبير)، وهذه بينت لنا كم أن د. (أحمد خيالي يكره الواقع. تلتهما سلسلة (سافاري) ببطلها علاء عبد العظيم، وعرفنا من خلال تلك السلسلة المتميزة مدى حب أحمد لمهنته كطبيب، ومدى عشقه وولعه بها.",
    authorBooks: [
      {
        id: 8,
        cover: "https://images.gr-assets.com/books/1510693763l/36595963.jpg",
        title: "يوتوبيا ",
        author: " أحمد خالد توفيق",
        authorID: 1,
        category: "Horror",
        categoryID: 1,
        avgrating: "3.91",
        rating: "4",
        status: "to-read"
      },
      {
        id: 9,
        cover: "https://images.gr-assets.com/books/1349778839l/16076787.jpg",
        title: "السنجة",
        author: " أحمد خالد توفيق",
        authorID: 1,
        category: "Horror",
        categoryID: 1,
        avgrating: "3.81",
        rating: "3 ",
        status: "to-read"
      },
      {
        id: 7,
        cover:
          "https://upload.wikimedia.org/wikipedia/ar/7/7a/%D8%AD%D9%84%D9%82%D8%A9_%D8%A7%D9%84%D8%B1%D8%B9%D8%A8_-_%D8%A7%D9%84%D8%B9%D8%AF%D8%AF_%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1_%D9%85%D8%A7_%D9%88%D8%B1%D8%A7%D8%A1_%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9.png",
        title: "حلقة الرعب",
        author: "احمد خالد توفيق",
        authorID: 1,
        category: "Horror",
        categoryID: 1,
        avgrating: "3.25",
        rating: "3"
      }
    ]
  },
  {
    id: 2,
    name: "Helen Oyeyemi",
    Born: "June 10, 1962 ",
    Website: "http://aktowfik.blogspot.com/",
    Genre: "Fantasy, Horror, Science Fiction",
    cover:
      "https://static01.nyt.com/images/2016/03/20/books/review/20VanDenBerg/20VanDenBerg-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    bio:
      "Helen Oyeyemi is the New York Times best-selling, Newbery-medal-winning author of six young adult novels and four picture books. Matt received his MFA in creative writing from San Diego State University and his BA from the University of the Pacific, where he attended school on a full athletic scholarship for basketball. de la Peña currently lives in Brooklyn, NY. He teaches creative writing and visits high schools and colleges throughout the country.",
    authorBooks: [
      {
        id: 1,
        title: "Gingerbread",
        author: "Helen Oyeyemi",
        authorID: 2,
        category: "Fantasy",
        categoryID: 2,
        cover: "https://images.gr-assets.com/books/1549556368l/40634915.jpg",
        avgrating: "4.54",
        rating: "5"
      },
      {
        id: 2,
        title: "The Once and Future King ",
        author: "Helen Oyeyemi",
        authorID: 2,
        category: "Fantasy",
        categoryID: 2,
        cover: "https://images.gr-assets.com/books/1338741283l/43545.jpg",
        avgrating: "4.54",
        rating: "5"
      },
      {
        id: 3,
        title: "The Bird King",
        author: "Helen Oyeyemi",
        authorID: 2,
        category: "Fantasy",
        categoryID: 2,
        avgrating: "4.54",
        rating: "5",
        cover: "https://images.gr-assets.com/books/1530540458l/40642333.jpg"
      }
    ]
  },
  {
    id: 3,
    name: "Matt de la Pena",
    Born: "June 10, 1962 ",
    Website: "http://aktowfik.blogspot.com/",
    Genre: "Fantasy, Horror, Science Fiction",
    cover: "http://farm4.staticflickr.com/3376/4568691577_11049c0b05_o.jpg",
    bio:
      "Matt de la Pena is the New York Times best-selling, Newbery-medal-winning author of six young adult novels and four picture books. Matt received his MFA in creative writing from San Diego State University and his BA from the University of the Pacific, where he attended school on a full athletic scholarship for basketball. de la Peña currently lives in Brooklyn, NY. He teaches creative writing and visits high schools and colleges throughout the country.",
    authorBooks: [
      {
        id: 4,
        title: "Superman: Dawnbreaker",
        author: "Matt de la Pena ",
        cover: "https://images.gr-assets.com/books/1529962084l/29749094.jpg",
        authorID: 3,
        category: "Science Fiction",
        categoryID: 3,
        avgrating: "4.54",
        rating: "5"
      },
      {
        id: 5,
        title: "Poison Study",
        author: "Matt de la Pena",
        cover: "https://images.gr-assets.com/books/1535002553s/32075671.jpg",
        authorID: 3,
        category: "Science Fiction",
        categoryID: 3,
        avgrating: "4.54",
        rating: "5"
      },
      {
        id: 6,
        title: "Sharp Objects",
        author: "Matt de la Pena",
        cover:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SY180_.jpg",
        authorID: 3,
        category: "Science Fiction",
        categoryID: 3,
        avgrating: "4.54",
        rating: "5"
      }
    ]
  }
];

export const books = [
  {
    id: 1,
    title: "Gingerbread",
    author: "Helen Oyeyemi",
    authorID: 2,
    category: "Fantasy",
    categoryID: 2,
    cover: "https://images.gr-assets.com/books/1549556368l/40634915.jpg",
    avgrating: "4.54",
    rating: "5",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 2,
    title: "The Once and Future King ",
    author: "Helen Oyeyemi",
    authorID: 2,
    category: "Fantasy",
    categoryID: 2,
    cover: "https://images.gr-assets.com/books/1338741283l/43545.jpg",
    avgrating: "4.54",
    rating: "5",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 3,
    title: "The Bird King",
    author: "Helen Oyeyemi",
    authorID: 2,
    category: "Fantasy",
    categoryID: 2,
    avgrating: "4.54",
    rating: "5",
    cover: "https://images.gr-assets.com/books/1530540458l/40642333.jpg",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },

  {
    id: 4,
    title: "Superman: Dawnbreaker",
    author: "Matt de la Pena",
    cover: "https://images.gr-assets.com/books/1529962084l/29749094.jpg",
    authorID: 3,
    category: "Science Fiction",
    categoryID: 3,
    avgrating: "4.54",
    rating: "5",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 5,
    title: "Poison Study",
    author: "Matt de la Pena",
    cover: "https://images.gr-assets.com/books/1535002553s/32075671.jpg",
    authorID: 3,
    category: "Science Fiction",
    categoryID: 3,
    avgrating: "4.54",
    rating: "5",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 6,
    title: "Sharp Objects",
    author: "Matt de la Pena",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SY180_.jpg",
    authorID: 3,
    category: "Science Fiction",
    categoryID: 3,
    avgrating: "4.54",
    rating: "5",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 7,
    cover:
      "https://upload.wikimedia.org/wikipedia/ar/7/7a/%D8%AD%D9%84%D9%82%D8%A9_%D8%A7%D9%84%D8%B1%D8%B9%D8%A8_-_%D8%A7%D9%84%D8%B9%D8%AF%D8%AF_%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1_%D9%85%D8%A7_%D9%88%D8%B1%D8%A7%D8%A1_%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9.png",
    title: "حلقة الرعب",
    author: "احمد خالد توفيق",
    authorID: 1,
    category: "Horror",
    categoryID: 1,
    avgrating: "3.25",
    rating: "3",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 8,
    cover: "https://images.gr-assets.com/books/1510693763l/36595963.jpg",
    title: "يوتوبيا ",
    author: " أحمد خالد توفيق",
    authorID: 1,
    category: "Horror",
    categoryID: 1,
    avgrating: "3.91",
    rating: "4",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 9,
    cover: "https://images.gr-assets.com/books/1349778839l/16076787.jpg",
    title: "السنجة",
    author: "أحمد خالد توفيق",
    authorID: 1,
    category: "Horror",
    categoryID: 1,
    avgrating: "3.81",
    rating: "3 ",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 10,
    cover: "https://images.gr-assets.com/books/1474154022s/3.jpg",
    title: "Harry Potter and the Sorcerer's Stone ",
    author: "Helen Oyeyemi",
    authorID: 2,
    category: "Fantasy",
    categoryID: 2,
    avgrating: "4.6",
    rating: "5 ",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 11,
    cover: "https://images.gr-assets.com/books/1433182986s/25644601.jpg",
    title: "Fifty Shades",
    author: "Helen Oyeyemi",
    authorID: 2,
    category: "Fantasy",
    categoryID: 2,
    avgrating: "3.76",
    rating: "3 ",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 12,
    cover: "https://images.gr-assets.com/books/1507662994s/32024902.jpg",
    title: "Darker ",
    author: "Matt de la Pena",
    authorID: 3,
    category: "Science Ficition",
    categoryID: 3,
    avgrating: "4.11",
    rating: "3",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 13,
    cover: "https://images.gr-assets.com/books/1535002553s/32075671.jpg",
    title: "The Hate U Give",
    author: "Matt de la Pena",
    authorID: 3,
    category: "Science Ficition",
    categoryID: 3,
    avgrating: "4",
    rating: "4 ",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 16,
    cover: "https://images.gr-assets.com/books/1545930757s/43373530.jpg",
    title: "قبر من الملح",
    author: "احمد خالد توفيق",
    authorID: 1,
    category: "Horror",
    categoryID: 1,
    avgrating: "2.54",
    rating: "2",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 17,
    cover: "https://images.gr-assets.com/books/1400091510s/22087871.jpg",
    title: "المعذبون في الأرض",
    author: "احمد خالد توفيق",
    authorID: 1,
    category: "Horror",
    categoryID: 1,
    avgrating: "4.54",
    rating: "5",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 14,
    cover: "https://images.gr-assets.com/books/1388519019s/60510.jpg",
    title: "Poison Study",
    author: "Matt de la Pena",
    authorID: 3,
    category: "Science Ficition",
    categoryID: 3,
    avgrating: "3.54",
    rating: "3",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 15,
    cover: "https://images.gr-assets.com/books/1328559506s/13335037.jpg",
    title: "Divergent",
    author: "Matt de la Pena",
    authorID: 3,
    category: "Science Ficition",
    categoryID: 3,
    avgrating: "5",
    rating: "5",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  },
  {
    id: 18,
    cover: "https://images.gr-assets.com/books/1492239430s/19486412.jpg",
    title: " by Big Little Lies",
    author: "Helen Oyeyemi",
    authorID: 2,
    category: "Fantasy",
    categoryID: 2,
    avgrating: "4.54",
    rating: "4 ",
    description:
      "Fresh from a brief stay at a psych hospital, reporter Camille Preaker faces a troubling assignment: she must return to her tiny hometown to cover the murders of two preteen girls. For years, Camille has hardly spoken to her neurotic, hypochondriac mother or to the half-sister she barely knows: a beautiful thirteen-year-old with an eerie grip on the town. Now, installed in her old bedroom in her family's Victorian mansion, Camille finds herself identifying with the young victims—a bit too strongly. Dogged by her own demons, she must unravel the psychological puzzle of her own past if she wants to get the story—and survive this homecoming.",
    reviews: [
      {
        id: 1,
        name: "RandomAnthony",
        cover: "https://images.gr-assets.com/users/1470919631p2/721021.jpg",
        rate: "4",
        review:
          "Last week I read the fuck out of Gillian Flynn's catalog. Three novels in eight days while my wife and kids were out of town and a sweltering late July marooned me in one of the house's two air conditioned rooms. So although this review is primarily for Sharp Objects, my favorite of Flynn's trio, let me go on record with Gone Girl (four stars, go read another of the zillion of reviews) and Dark Places (three stars, maybe too many narratives perspectives and too willing to wallow in the muck) as well, but I'm not writing reviews for those two."
      },
      {
        id: 2,
        name: "Emily May",
        cover: "https://images.gr-assets.com/users/1528390751p2/4622890.jpg",
        rate: "4",
        review:
          "There is something deeply unhealthy about this book. It's in the characters, in the story, in the relationships, in the sex, and just in the general mood of the novel. Reading this made me feel a little unwell, both physically and mentally, but I am glad I did. If you know me, you'll know I love complex characters with issues that feel raw and real, rather than melodramatic. The people in this novel are majorly fucked up, no one is without a dark past and everyone, it seems, has a horror story."
      }
    ]
  }
];

export const AllBooks = [
  {
    id: 10,
    cover: "https://images.gr-assets.com/books/1474154022s/3.jpg",
    title: "Harry Potter and the Sorcerer's Stone ",
    author: "Helen Oyeyemi",
    authorID: 2,
    category: "Fantasy",
    categoryID: 2,
    avgrating: "4.6",
    rating: "5 ",
    status: "to-read"
  },
  {
    id: 11,
    cover: "https://images.gr-assets.com/books/1433182986s/25644601.jpg",
    title: "Fifty Shades ",
    author: "Helen Oyeyemi",
    authorID: 2,
    category: "Fantasy",
    categoryID: 2,
    avgrating: "3.76",
    rating: "3 ",
    status: "to-read"
  },
  {
    id: 12,
    cover: "https://images.gr-assets.com/books/1507662994s/32024902.jpg",
    title: "Darker ",
    author: "Matt de la Pena ",
    authorID: 3,
    category: "Science Ficition",
    categoryID: 3,
    avgrating: "4.11",
    rating: "3",
    status: "read"
  },
  {
    id: 13,
    cover: "https://images.gr-assets.com/books/1535002553s/32075671.jpg",
    title: "The Hate U Give",
    author: "Matt de la Pena ",
    authorID: 3,
    category: "Science Ficition",
    categoryID: 3,
    avgrating: "4",
    rating: "4 ",
    status: "currently-reading"
  },
  {
    id: 14,
    cover: "https://images.gr-assets.com/books/1388519019s/60510.jpg",
    title: "Poison Study",
    author: "Matt de la Pena ",
    authorID: 3,
    category: "Science Ficition",
    categoryID: 3,
    avgrating: "3.54",
    rating: "3",
    status: "currently-reading"
  },
  {
    id: 15,
    cover: "https://images.gr-assets.com/books/1328559506s/13335037.jpg",
    title: "Divergent",
    author: "Matt de la Pena ",
    authorID: 3,
    category: "Science Ficition",
    categoryID: 3,
    avgrating: "5",
    rating: "5",
    status: "currently-reading"
  },

  {
    id: 16,
    cover: "https://images.gr-assets.com/books/1545930757s/43373530.jpg",
    title: "قبر من الملح",
    author: "احمد خالد توفيق",
    authorID: 1,
    category: "Horror",
    categoryID: 1,
    avgrating: "2.54",
    rating: "2",
    status: "read"
  },
  {
    id: 17,
    cover: "https://images.gr-assets.com/books/1400091510s/22087871.jpg",
    title: "المعذبون في الأرض",
    author: "احمد خالد توفيق",
    authorID: 1,
    category: "Horror",
    categoryID: 1,
    avgrating: "4.54",
    rating: "5",
    status: "to-read"
  },
  {
    id: 18,
    cover: "https://images.gr-assets.com/books/1492239430s/19486412.jpg",
    title: " by Big Little Lies",
    author: "Helen Oyeyemi",
    authorID: 2,
    category: "Fantasy",
    categoryID: 2,
    avgrating: "4.54",
    rating: "4 ",
    status: "to-read"
  },
  {
    id: 6,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SY180_.jpg",
    title: "Sharp Objects",
    author: "by Gillian Flynn",
    authorID: 1,
    category: "Fantasy",
    categoryID: 1,
    avgrating: "4.54",
    rating: "5",
    status: "read"
  }
];

export const users = [
  {
    firstname: "Sarah",
    lastname: "Refaat",
    password: "12345",
    admin: true,
    id:1
  },
  {
    firstname: "Mohammad",
    lastname: "Refaat",
    password: "1234",
    admin: false,
    id:2
  },
  {
    firstname: "Aya",
    lastname: "Refaat",
    password: "123456",
    admin: true,
    id:3
  }
];
