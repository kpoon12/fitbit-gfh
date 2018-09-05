/*
 * Entry point for the watch app
*/
import document from "document";
//import * as SongPage from "datagfh.js";

var all = [
"1.保護性及祝福的禱告\n\n「阿爸，感謝祢榮耀、美麗的新一天。」\n「主啊，感謝祢終日與我特別同在。」\n「主啊，感謝祢聽我的禱告。」\n「阿爸，求祢大大與我同在，最大祝福我。」\n「阿爸，求祢將最大的恩惠、憐憫、平安、慈愛、喜樂賜給我。」\n「主啊，求祢保守我及家人不受任何災害所傷害，保護我及家人不會受任何病菌、病毒感染而生病。」\n「主啊，求祢醫治我的……(疾病或毛病),使我身體健康。」 ",
"2.幫我們勝過仇敵、心靈釋放的禱告\n\n「哈利路亞！主已經復活了，祂已經勝過死亡，打敗魔鬼。」\n「太寶貴，我們真是神的親孩子，一天我們要與祂一同作王。」(拍掌)\n「太寶貴，主救了我，大大賜福與我。」\n「主啊，懇切求祢綑綁、驅逐魔鬼與一切差役、邪靈、污鬼遠遠離開我，絕對不准他們絲毫挨近我，干擾我，試探我和控告我。」\n「如果當中有祢所容許的，求祢藉聖靈各方面最大的幫助，聖靈驅退他們，聖靈開我心眼，聖靈啟示祢在我心中，聖靈加我力量，並祢各方面最大的幫助，祢斥退他們。」\n「祢的保護，祢的開路，使我得勝一切有餘，祢更加絕對不准他們傷害我。」\n「懇切求祢救我脫離一切惡人、一切惡者和那惡者。」",
"3.心靈祝福的禱告\n\n「神啊，感謝祢是我真阿爸，我是祢親愛的孩子。」(向父唱詩) \n「親愛主，多寶貴祢是我真良人，是我最好的朋友，我是祢至愛的佳偶。」(向主唱詩)\n「主啊，我需要祢的愛鼓勵、吸引我。」\n「阿爸，求祢使孩子真知道祢，真知道主，真知道聖靈。」\n「主啊，求祢賜聖靈更大充滿我，厚厚在我身上。」\n「主啊，求祢使我的心與祢的心最近最近。」\n「主啊，求祢幫助我更深明白祢的話，變化我更像祢，幫助我終日敬拜祢，跟祢一同生活。」 ",
"4.為完成主心意的禱告\n\n「主，感謝祢拯救我，又將我帶進神的家中。」\n「主，寶貴祢要用我祝福、幫助我的家人、朋友認識祢。」\n「主，寶貴祢託付我，要用我祝福世界，建造合祢心意的教會。」\n「主啊，求祢使用我拯救我的家人、朋友(例如你的兒女、朋友的名字)，並帶他們去教會。」\n「主啊，求祢祝福我們星期日的聚會及其他聚會。」\n「主啊，求祢幫助教會年長同工知道怎樣為祢作工。」",
"5.榮耀的盼望\n\n「哈利路亞！主真的快回來!」\n「主啊，多寶貴一天我要與祢面對面。」\n「主耶穌啊，願祢快來!」\n「阿爸，願祢的國降臨!」(拍掌)",
"父\n\n  1. 差遣捨棄他愛子\n  2. 至深親情(呼叫阿爸）\n  3. 父愛子的愛\n  4. 生命相連\n  5. 宇宙中最特別的同在\n  6. 連連親嘴，喜悅歡呼\n  7. 恆動的父愛與想念",
"主\n\n  1. 主永為人\n  2. 血的情\n  3. 永住我心，至深聯合\n  4. 宇宙中最特別的同在\n  5. 個人全心全意的愛\n  6. 起初原有、戀慕烈焰的愛\n  7. 恆動的情心、愛念",
"宇宙七奇\n\n 1.主永為人\n 2.主為我釘十字架\n 3.主復活\n 4.主為我升天\n 5.聖靈降臨，父、主、聖靈永住我心\n 6.主再來提接我們\n 7.我們與主一同降臨"
];

var SongPage =  [
                {
                    "Book": "第一冊",
                    "Title": "1父的名",
                    "Context": "\n1.主的父是我的父，\n主的神是我的神，\n我是父疼愛的孩子，\n祂愛懷是我安息。\n雖多遭憂患嘗苦杯，\n父安排是最美善，\n祂計劃我一生路程，\n經苦難進入榮耀。\n\n2.時間表在父手裡，\n萬事到時顯美好，\n經幽谷我心不害怕，\n黎明必定會來到。\n父意念眾多又寶貴，\n雨後彩虹更美麗，\n父道路高過人道路，\n父慈愛比天更高。\n\n3.父愛我像愛我主，\n父看顧無微不至，\n我頭髮祂仔細數過，\n我困苦祂全知道。\n父在我右邊扶持我，\n我的腳必不搖動，\n我無憂心靈常快樂，\n安祥地走完世程。\n\n4.在世我享父同在，\n父前跳躍常誇耀，\n我的心坦然又釋放，\n與父密談多甘甜。\n有一天主來提接我，\n見父面喜樂滿足，\n天家裡同主為後嗣，\n承受萬有樂永久。\n\n",
                    "Page": "1",
                    "Mp3": ""
                },
                {
                    "Book": "第一冊",
                    "Title": "2可敬可親的神",
                    "Context": "\n1.全能的神你是烈火\n充滿威嚴權柄\n你的作為大哉奇哉\n道途義哉誠哉\n\n2.無限的神至聖至榮\n誰敢不敬畏你\n在你面前俯伏希奇\n瞻仰敬拜讚美\n\n3.慈愛的父我感謝你\n因你可親可近\n你抹我淚你撫我心\n你懷是我安息\n\n",
                    "Page": "2",
                    "Mp3": ""
                },
                {
                    "Book": "第一冊",
                    "Title": "3宇宙講故事",
                    "Context": "\n彎彎月，閃閃星，佈滿在宇宙中，\n同顯明神偉大，並祂智慧權柄。\n大海洋，高山崗，都正在講故事，\n同顯明神偉大，並祂慈愛公義。\n\n",
                    "Page": "3",
                    "Mp3": ""
                },
                {
                    "Book": "第一冊",
                    "Title": "4哈哈歌",
                    "Context": "\n1.這是天父世界，\n我可無憂無慮，\n好像雀鳥跳舞歌唱，\n頌讚天父看顧。\n這是天父世界，\n我可哈哈哈哈，\n我是祂的掌上明珠，\n是祂眼中的瞳人。\n\n2.主已勝過魔鬼，\n主已得勝世界，\n祂已復活升天掌權，\n為我作萬有之首\n哈哈哈哈哈哈！\n我良人已經得勝，\n哈哈哈哈哈哈哈哈！\n我的大哥掌權。\n\n",
                    "Page": "4",
                    "Mp3": ""
                },
                {
                    "Book": "第一冊",
                    "Title": "5天父愛我",
                    "Context": "\n1.天父愛我，看顧我細緻，\n使我明白，何謂真的愛，\n渴望我與祂相親，\n我要在祂懷。\n\n2.甘甜喜樂，真是說不盡，\n安慰勸勉，乃從祂口出，\n祂滿有體恤憐憫，恩慈浩大。\n我對祂要有愛回應，\n為愛祂要努力向前衝，\n祂用大能手，拖著我的小手，\n不怕仇敵任何的驚嚇。\n（再唱1節）\n\n",
                    "Page": "5",
                    "Mp3": ""
                },
                {
                    "Book": "第一冊",
                    "Title": "6與父相親",
                    "Context": "\n1.父阿，我愛孤單獨處，\n與你無阻暢談，\n你每晨施新鮮恩愛，\n更新我的心靈。\n\n2.何等甜蜜與你獨處，\n在禱告的園地，\n全能的父在你座前，\n敞開我的心胸。\n\n3.在你面前我無隱瞞，\n赤露我的心田，\n你有體恤了解同情，\n我樂向你傾吐。\n\n4.你的孩子全心投靠，\n在你愛的懷抱，\n父子親情滿足我心，\n除我愁悶不安。\n\n5.與你獨處我心釋放，\n無論苦樂哭笑，\n我願常離良朋密友，\n與你獨自相親。\n\n6.一日新郎榮耀顯現，\n接我回到父前，\n與父會面其樂無窮，\n在那永恆天家。\n\n",
                    "Page": "6",
                    "Mp3": ""
                },
                {
                    "Book": "第一冊",
                    "Title": "7父愛",
                    "Context": "\n1.在父懷中我為寵兒，\n我是祂喜樂詩歌\n我的頭髮祂已數過，\n我比飛鳥貴重多\n祂向我懷寶貴意念，\n比海沙天星更多\n無論起坐或是躺臥，\n祂心怎能忘記我。\n\n2.從幼到老祂保抱我，\n終身事在祂手中。\n我與基督同為後嗣，\n享受父豐富預備。\n在世雖有打擊淚谷，\n父賜諸般的安慰。\n祂牽我手走完世程，\n在天享父家豐盛。\n\n",
                    "Page": "7",
                    "Mp3": ""
                },
                {
                    "Book": "第一冊",
                    "Title": "8寶貴的阿爸",
                    "Context": "\n何等興奮因我有父！\n何等甘甜父愛我！\n何等舒暢父保抱我！\n何等盼望父賜我！\n創世之前父已愛我，\n父將我賜祂愛子！\n我要以父的事為念，\n與父同心完父工。\n\n",
                    "Page": "8",
                    "Mp3": ""
                }
 
            ];


var point = 0;
document.onkeypress = function(e) {
  console.log("Key pressed: " + e.key);
  let demo = document.getElementById("test1");
  if(e.key === "up")
  {
    if(point > 0)
      point--;
  }
  else if(e.key === "down")
  {
    if(point < SongPage.length-1)
      point++;
  }
  demo.text = SongPage[point].Context.length + "\n" + SongPage[point].Context;
  document.getElementById("sv").value = 0;
}