export const contents = {
    ja: {
        header: {
            content: `第五人格
感謝祭イベント`,
            download: 'ゲームダウンロード',
        },
        scene1: {
            p: `街中で流れるメロディーに漂う七面鳥の美味しい匂い…..
年に一度の感謝祭がやってきました
今まで「第五人格」に付き添って頂き、ありがとうございます！
エウリュディケ荘園での旅を振り返ってみよう
かつて共に戦ってきた友人と
無数の感動的な瞬間を
まだ記憶に残っているのでしょうか？

これまでの道のりを手紙に記録し
この日に感謝したい友人たちにシェアしてみてください！`,
            button: '書き始める', 
        },
        scene2: {
            p: (year, month, day, index, count) => `<em>${year}</em>年<em>${month}</em>月<em>${day}</em>日
一通の神秘な依頼状が私の手元に届きました
好奇心が抑えられず、雨に風さえ加わったその夜
私は依頼状の案内に従い、エウリュディケ荘園にやってきました
私が荘園の<em>${index}</em>番目の来訪者です
それ以来<em>${count}</em>日経過しました`
        },
        scene3: {
            p1: (count) => count ? `荘園に入った後、私は<em>${count}</em>人の友人と出合いました` : `荘園に入った後、私は一人で演繹するのが好きで、まだ友達に出会っていません。`,
            p2: (count, i1, i2, i3) => `${count ? `初めて出会った友人はまだ荘園で戦っていて、本日は第<em>${i1}</em>日の記念日です
荘園は熱戦の場だけでなく、気の合う仲間と心を交えるところでもあります。` : ``}
${i2 ? `今まで、私は<em>${i2}</em>名の友達と交流したことがあり、
その優しい言葉が暖かさをもたらしてくれました。`: `荘園に入った後、たくさんの友達に出会ったが、一人で演繹するのが好きなので、
まだ友達とともに戦ったことがありません。`}
${ i3 ? `悲しいことに、荘園から<em>${i3.substr(0, 4)+'年'+i3.substr(4, 2) + '月' + i3.substr(6, 2) + '日'}</em>に荘園から離れ、久しく連絡が取れていない友達もいます
その人は今どこで何をしているのでしょう？私のことをまだ覚えているのでしょうか？
いつかまた一緒に荘園で戦いたいなあ！`: ``}`
        },
        scene4: {
            t1: `大切な仲間への祝福`,
            p: `仲間たちの今までのお付き添いに感謝しています！
これからも荘園で掛け替えのない思い出を作りましょう！`,
            bt1: `イベントルール`,
            bt2: `手紙を贈る`,
            greeting: [
                'キャラを使いこなせるように',
                'たくさんの友達と出会えるように！',
                '推理の径を完走するように！',
                '背景推理100%するように！',
                'エンジョイプレイ！',
                '今までありがとうございます！',
                'ご活躍をお祈りします！',
                'ガチャ運アップ！',
                'これからも楽しく遊びましょう！',
                'ランクマッチ勝ち続けるように！',
                '欲しい衣装が引き当てられるように！'
            ]
        },
        scene5: {
            t1: `感謝祭イベント`,
            time: `（11月26日-12月2日）`,
            p: `ルール説明：
ゲームを登録し、感謝祭手紙をシェアすれば、手掛かり*50を獲得できます！
また、7日間以上にゲームに登録していないプレイヤーがシェアすれば、
SSR体験カード(3日)と手掛かり*100を獲得できます！
(賞品の発送はイベント終了後になります)
感謝の気持ちをより多くの仲間たちへ！`,
            bt1: `ゲームダウンロード`,
            bt2: `ダンガンロンパコラボ第二弾`
        },
    },
    ch: {
        header: {
            content: `《第五人格》
感谢祭活动`,
            download: '下载游戏',
        },
        scene1: {
            p: `又是一年感谢祭
欧利蒂丝庄园感谢你一直以来的陪伴
回顾这段庄园之旅
你是否还记得曾经并肩作战的老友
和无数令人感动的瞬间

快来记录在庄园走过的点点滴滴
并分享给在这个节日最想感谢的朋友们吧！`,
            button: '开始写信'
        },
        scene2: {
            p: (year, month, day, index, count) => `<em>${year}</em>年<em>${month}</em>月<em>${day}</em>日
我收到一份神秘的委托信
在那个风雨交加的夜晚 
我第一次踏入庄园
我是庄园的第<em>${index}</em>位来客
距今已整整<em>${count}</em>天`
        },
        scene3: {
            p1: (count) => count ? `来到庄园后，我共结识了<em>${count}</em>位好友` : `进入庄园后，我享受一个人独自演绎，暂时没有添加好友`,
            p2: (count, i1, i2, i3) => `${count ? `我在庄园结识的第一个朋友，
他还在庄园里战斗，我们相识了<em>${i1}</em>天`: ''}
${i2 ? `庄园里不仅有热血沸腾的激战，也有意气相投，可以推心置腹的好友
进入庄园后，我共和<em>${i2}</em>名好友有过亲切交流
每一句温柔的话语都给我带来家一般的温暖`: `进入庄园之后，由于忙于演绎，我还没有来得及和朋友们抽空聊聊天`}
${i3 ? `我有一个很久没有联系的老朋友，
他已经<em>${i3}</em>天没有出现在庄园里了，我很想念他。
感谢朋友们一路以来的陪伴！`: ''}`
        },
        scene4: {
            t1: `感恩节的祝福`,
            p: `感谢朋友们一路以来的陪伴
希望我们在庄园继续创造新的回忆！`,
            bt1: `查看活动规则`,
            bt2: `寄出祝福`,
            greeting: [
                '随机生成祝福语'
            ]
        },
        scene5: {
            t1: `感恩节活动`,
            time: `（11月26日-12月2日）`,
            p: `活动规则：进入游戏生成H5并分享
日常玩家分享H5可以获得50线索 ;
流失玩家分享H5可以获得3天紫皮体验卡100碎片`,
            bt1: `下载游戏`,
            bt2: `弹丸论破第二弹`,
        },
    },
    en: {
        header: {
            content: `Identity V - Thanksgiving Day Event is coming soon!`,
            download: 'Download game',
        },
        scene1: {
            p: `Once again
Thanksgiving Day is arriving
Thanks for your companions with Identity V!
Let's look back on our trips at the Oletus Manor
Do you still remember the moments with the friends you have played together?
Are they still fresh and impressive?
Come on! Record your journey in a letter
Share it with the friends you would like to thank in this day!`,
            button: 'Start your letter'
        },
        scene2: {
            p: (year, month, day, index, count) => `<em>${year}</em>年<em>${month}</em>月<em>${day}</em>日
I have gotten a mysterious letter of request from someone
At that night, it was windy and rainy.
I followed the guidance of the letter and visited Oletus Manor for the first time.
I am the <em>${index}</em> visitor to the manor. 
<em>${count}</em> days have passed since the first time I visited.`
        },
        scene3: {
            p1: (count) => `After entering the manor, I met <em>${count}</em> friends.`,
            p2: (i1, i2, i3) => `The friend I met for the first time is still playing at the manor and we have learned each other for <em>${i1}</em> days.
The manor is not only a place of fierce battles, but also a place to interact with friends.
 I have close relationships with <em>${i2}</em> friends, we have experienced a lot of enjoyable time together.
I have a friend which I haven’t talked with for quite a long time.
He/She has already left the manor for <em>${i3}</em> days. I miss he/her so much!
Thanks so much for all your companions, my dear friends!`
        },
        scene4: {
            t1: `Blessing letter for Thanksgiving Day`,
            p: `I am grateful to my friends for their companions!
Let's continue to make unforgettable memories at the manor!`,
            bt1: `Event rules`,
            bt2: `Send your letter`,
            greeting: [
                'Wish you can play with every character well!',
                'Wish you can meet many friends!',
                'Wish you can pass the logik path!',
                'Wish you a 100% deduction quests!',
                'Wish you always enjoy the game!',
                'Thanks for all your companions!',
                'Looking forward to your better performance!',
                'Good luck in gacha!',
                "Let's continue to have fun in game!",
                'Keep winning in ranking matches!',
                'Wish you can get the costume you want!',
            ]
        },
        scene5: {
            t1: `Thanksgiving Day Event`,
            time: `(11.26 - 12.02)`,
            p: `Event Rules: Log in and share the event, you will receive 50 clues!
If you haven't played game for more than 7 days, you will receive tier A skin trial card (3 days) and 100 fragments instead.`,
            bt1: `Download game`,
            bt2: `Danganronpa collaboration 2.0`,
        },
    },
    th: {
        header: {
            content: `กิจกรรมวันขอบคุณพระเจ้ากำลังมาถึงน้า!
รอคอยคุณเข้าร่วมกันนะ`,
            download: 'ดาวน์โหลดเกม',
        },
        scene1: {
            p: `วันขอบคุณพระเจ้าประจำปีมาถึงแล้ว
ขอขอบคุณที่อยู่เคียงข้างให้คฤหาสน์โอเลตัสเติบโต
คิดย้อนกลับไปการเดินทางของคฤหาสน์
เพื่อนที่เคยร่วมกันต่อสู้
และชั่วพริบตาที่ซาบซึ้งนับไม่ถ้วน
คุณจำได้หรือป่าว

มาร่วมบันทึกการเดินทางของคุณเป็นจดหมาย
แชร์ถึงเพื่อนที่ต้องการขอบคุณมากที่สุดสำหรับวันนี้น่า`,
            button: 'เขียนจดหมาย'
        },
        scene2: {
            p: (day, month, year, index, count) => `<em>วันที่</em>${day}<em>เดือน</em>${month}<em>ปี </em>${year}
ผมได้รับหนังสือว่าจ้างที่ลึกลับ
เมื่อคืนนั้นมีฝนฟ้าคะนองและมรสุม 
ตั้งแต่ผมเข้ามาคฤหาสน์นี้ครั้งแรก
ผมเป็นผู้มาเยี่ยมที่<em>${index}</em>คนของคฤหาสน์
<em>${count}</em>วันที่ผ่านไปนับตั้งแต่ครั้งแรกที่ผมมาเยี่ยม`
        },
        scene3: {
            p1: (count) => `หลังจากเข้ามาคฤหาสน์แล้ว ผมเจอเพื่อนทั้งหมด<em>${count}</em>คน`,
            p2: (i1, i2, i3) => `เพื่อนคนแรกของผมรู้จักกันที่คฤหาสน์
เขายังคงต่อสู้ที่คฤหาสน์อยู่ เรารู้จักกันมี<em>${i1}</em>วันแล้ว
คฤหาสน์ไม่เพียงแค่เป็นสถานที่กล้าเสี่ยงเท้านั้น ยังเป็นสถานที่รู้จักเพื่อนสนิทอีกด้วย
ผมมีมิตรภาพกับเพื่อน<em>${i2}</em>คน
เวลาจะเปลี่ยนไป แต่มิตรภาพไม่เคยเปลี่ยนไป
ผมมีเพื่อนที่ไม่ติดต่อมานานมาก
เขาออกจากคฤหาสน์มา<em>${i3}</em>วันแล้ว ผมคิดถึงเขามากๆ
ขอขอบคุณเพื่อนๆที่อยู่เคียงข้างผมเสมอมา`
        },
        scene4: {
            t1: `จดหมายอวยพรของวันขอบคุณพระเจ้า`,
            p: `ดีใจมีคนเล่นด้วยกันเป็นเพื่อนนะ
มาสร้างความทรงจำที่ไม่รู้ลืมที่คฤหาสน์กันต่อไปนะ`,
            bt1: `ดูกฎกิจกรรม`,
            bt2: `ส่งคำอวยพร`,
            greeting: [
                'ขอให้คุณสามารถใช้แต่ละตัวละครได้อย่างคล่องแคล่วว่องไว',
                'ขออวยพรให้คุณได้พบเจอะเพื่อนสนิทมากๆ',
                'ขอให้คุณได้เดินบนเส้นทางตรรกะให้เสร็จ',
                'ขออวยพรให้การสืบสวนของคุณเล่นไปถึง100%',
                'หวังว่าคุณจะเล่นเกมอย่างสนุกนะ',
                'ขอขอบคุณเพื่อนๆที่อยู่เคียงข้างผมเสมอมา',
                'รอคอยคุณยิ่งเล่นยิ่งได้ประสบการณ์ที่ดี',
                'ขอให้คุณมีโชคดีเมื่อเปิดหีบน้า',
                'มาเล่นIdentityVด้วยกันอย่างมีความสุขตั้งแต่นี้ต่อไป',
                'ขออวยพรให้คุณได้รับชนะสตรีคแมทช์จัดอันดับ',
                'ขออวยพรให้คุณจะฉลากได้เครื่องแต่งกายที่คุณต้องการ',
            ]
        },
        scene5: {
            t1: `กิจกรรมวันขอบคุณพระเจ้า`,
            time: `(11.26 - 12.02)`,
            p: `กฎกิจกรรม：ล็อคอินเกมและแชร์กิจกรรม
คุณจะได้รับ 50 เบาะแส ;
หากคุณไม่ได้เล่นเกมมานานกว่า 7 วันแล้วคุณจะได้รับบัตรทดลองใช้เครื่องแต่งกายระดับ A ( 3 วัน)และ 100 เศษชิ้นส่วน`,
            bt1: `ดาวน์โหลดเกม`,
            bt2: `Danganronpa collaboration 2.0`,
        },
    }
};
