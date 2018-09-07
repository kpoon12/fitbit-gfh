/*
 * Entry point for the watch app
*/
import document from "document";
import { SongPage } from "./datagfh.js";

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

let demo1 = document.getElementById("test1");
let demo2 = document.getElementById("test2");
let demo3 = document.getElementById("test3");
let demo4 = document.getElementById("test4");
var menu = document.getElementById("menu");
  

var point = 0;

function update(str)
{
    let v = str;//SongPage[point].Context;
    let l = str.length;//SongPage[point].Context.length;
    let x = 90;
  
    demo1.style.display = 'inline';
    demo1.text = v.slice(0, x);
    l = l - x;
    if(l > 0)
      demo2.style.display = 'inline';
    demo2.text = v.slice(x, 2*x);
    l = l - x;
    if(l > 0)
      demo3.style.display = 'inline';
    demo3.text = v.slice(2*x, 3*x);
    l = l - x;
    if(l > 0)
      demo4.style.display = 'inline';
    demo4.text = v.slice(3*x, 4*x);
    
    document.getElementById("sv").value = 0;
}

document.onkeypress = function(e) {
  console.log("Key pressed: " + e.key);

  demo1.style.display = "none";
  demo2.style.display = "none";
  demo3.style.display = "none";
  demo4.style.display = "none";

  if(e.key === "up")
  {
    //menu.style.display = "none";
    if(point > 0)
      point--;
  }
  else if(e.key === "down")
  {
    //menu.style.display = "inline";
    if(point < SongPage.length-1)
      point++;
  }
  update(SongPage[point].Context);
}

menu.style.display = "none";