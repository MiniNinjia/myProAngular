import {Component, OnInit} from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {GlobalPropertyService} from '../../services/global-property.service';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {
  list_data: any;
  skillService: any;
  articleId:any;
  article=[
    {
      'pid' : 1,
      'tit':[{
        'title' : '哈士奇能不能吃海鲜',
        'square' : '关于在沿海城市生活的咱们，海鲜是每日生活中不可少的好菜，咱们在养哈士奇的时候，应当留意哈士奇吃海鲜的问题，哈士奇是十分贪吃的家伙，但是咱们要知道海鲜是不是合适哈士奇吃的，这样才能确保哈士奇吃到海鲜今后不会有不良反应。',
        'articleimag' : '2222.png',
        'style' : '哈士奇',
        'p1' : '海鲜是有营养的好东西，但是并不是合适一切的狗狗，也并不合适当狗狗的主粮。在给狗狗吃海鲜的的时候，仍是少吃的原则，发现问题及时中止。',
        'p2' : '咱们都喜爱给狗狗吃好吃的东西，狗狗又是馋嘴的小家伙，但是狗狗是不是可以吃海鲜呢?海鲜虽然是好东西，但是关于哈士奇而言却是可以损伤它身体的食物。所以希望主人要给哈',
        'p21' : '士奇吃海鲜时，仍是需要稳重，不要让狗狗过量有用海鲜。不过，本来国外现已有很多饲料当中的蛋白质来历就现已选用鱼肉成品，仅仅由于鱼肉饲料的本钱较昂贵，加工也较为繁琐，因而才不普遍运用，',
        'p3' : '宠物狗吃海鲜的时候，咱们应当阻止，由于要了解哈士奇的身体需要，不然的话你的爱犬吃多了海鲜今后，它们还会出现拉肚子的状况。',
        'p31' : '所以为了让哈士奇可以健健康康的生长，咱们就一定要远离这些食物，海鲜是寒性很大的食物  ，这类食物对狗狗的伤害很深',
      }
      ],
    },
    {
      'pid' : 2,
      'tit':[
        {
          'title' : '狗狗饲养需要注意的问题？',
          'square' : '狗狗饲养需要注意的问题？一起来了解下吧。',
          'articleimag' : 'skill2.jpg',
          'style' : '狗狗',
          'p1' : '在肉类食物中钙和磷的比例为1:20,钙少磷多,而犬食物中钙和磷的最合适比例为1.1-1.2:1' +
          ',因此长时间的用肉来喂犬的话,幼犬非常容易发生佝偻病,成犬容易发生骨质疏松症',
          'p2' : '肝脏含很多维生素A,胡萝卜富含很多胡萝素,一个胡萝卜素能在体内分解成两个维生素A,' +
          '长时间的喂容易致使维生素A中毒,也可致使佝偻病或骨质疏松症.',
          'p21' : '有些人为了给犬补钙,很多喂犬吃骨头,犬吃了很多骨头后,易发生吐逆,拉肚子或便秘,' +
          '严峻的会构成肠梗阻.鸡,鸭的小骨头比照尖硬,尽量不喂爱犬,以防扎伤或卡在消化道内.',
          'p3' : '巧克力,洋葱,大葱，葡萄,盐和香料，甜味食物，虾、蟹、墨鱼、章鱼、海蜇等海鲜以及竹笋、' +
          '豆类等高纤维食物，菇类，牛奶，骨头',
          'p31' : '有些人为了给犬补钙,很多喂犬吃骨头,犬吃了很多骨头后,易发生吐逆,拉肚子或便秘,严' +
          '峻的会构成肠梗阻.鸡,鸭的小骨头比照尖硬,尽量不喂爱犬,以防扎伤或卡在消化道内.',
        }
      ],

    },
    {
      'pid' : 3,
      'tit':[
        {
          'title' : '罗福梗犬好养吗 罗福梗犬还是比较好养的',
          'square' : '罗福梗犬好养吗，罗福梗是一种非常好的狩猎犬，当然也可以作为玩赏犬的，' +
          '所以很多人都非常喜欢饲养罗福梗，而如果要说到罗福梗的饲养，那么就需要根据罗福梗的' +
          '不同生长时期来采取不同的饲养方法，而并不能一概而论的一模一样的饲养，那样只会让罗福',
          'articleimag' : 'skill3.jpg',
          'style' : '罗福梗',
          'p1' : '罗福梗犬好养吗，罗福梗是一种非常好的狩猎犬，当然也可以作为玩赏犬的，' +
          '所以很多人都非常喜欢饲养罗福梗，',
          'p2' : '而如果要说到罗福梗的饲养，那么就需要根据罗福梗的不同生长时期来采取不同的饲养方法，' +
          '而并不能一概而论的一模一样的饲养，那样只会让罗福梗受到伤害，也不能饲养好罗福梗的。',
          'p21' : '罗福梗犬幼年时期重要的就是营养只要狗狗的营养跟得上去，你的罗福梗犬有个活泼健康的体魄没问题，' +
          '为什么这样说呢?因为幼年时期的罗福梗犬正是长身体的时候，所要全面的营养平衡是宠友们要照顾好狗狗的要点。',
          'p3' : '对2个月龄的犬仔应喂给高蛋白食物再加上蔬菜等(相当于4~5个月婴儿的食品)。如给以鸡胸肉或含脂肪较少的牛肉，' +
          '再加少量菜，都切成细丝，再加些面包渣或米饭搅拌均匀。每日3~4次喂饲。',
          'p31' : '我们必须任罗福梗犬尽情喝水，才能维持它的健康，减少疾病。罗福梗犬体内的水分挥发快' +
          '(汗腺多数在舌头)尤其是爱活动的小罗福梗犬。如果我们不尽快予以补充，则很容易引起全身"脱水";有病时更是这样。',
        }
      ],

    },
    {
      'pid' : 4,
      'tit':[
        {
          'title' : '圣伯纳犬的食量 圣伯纳犬好养但是食量大',
          'square' : '犬的食量，圣伯纳犬本身就是一种大型的犬种，它正常的体重，成年犬都在一百斤左右，体积很大。' +
          '圣伯纳犬虽然好饲养，但是它的食物量很大 ，有人能说它一顿可以吃七只鸡，可见此犬的食物量之大，' +
          '它体重在一百斤左右，身高可达一米。',
          'articleimag' : 'skill4.jpg',
          'style' : '圣伯纳',
          'p1' : '圣伯纳犬，又名(圣伯纳德犬)原产丹麦，在瑞士也有悠久的历史，但19世纪中叶，数量越来越少几乎到了灭种的地步' +
          '。现在的圣伯纳犬大多是杂交品种。它是一种名副其实的巨型工作犬，体重能达100公斤，身高可高达1米。',
          'p2' : '圣伯纳犬好养但是食量大。圣伯纳犬是超大型犬，个性十分温顺，容易亲近，对小朋友十分宽容。如给予足够的空间、' +
          '食物、运动量，能成为很好的家庭犬。圣伯纳犬以聪明，温顺的家庭犬深得好评。',
          'p21' : '头部：头，盖宽大且圆，额段清楚分明，鼻口部短，厚，平坦的脸颊及长垂的上唇。耳：大小中等，下垂。眼：' +
          '大小中等，古铜色。鼻：鼻子大，黑色，鼻口非常发达。身体：胸部厚实且宽，背部力强，向腰部倾斜。',
          'p3' : '被毛：无论长毛种或短毛种，被毛都丰厚，被毛平躺，颜色有红褐色斑状纹，橙色，或红斑色配头，胸，四肢' +
          '，尾端的白色，或白底上有各种颜色的斑块。四肢：前肢直且长，后肢骨骼粗且有力。足部：非常大，脚尖十分起，' +
          '狼爪应该除掉。尾：尾长，尾根高。',
          'p31' : '肩高，雄性最低肩高为27.5英寸;雌性最低肩高为25.5英寸。雌性的身体结构更漂亮、精致。' +
          '主要缺陷任何背离标准的情况都属于缺陷，例如：下凹的后背，背部长度不合比例，飞节角度太大，过直的后躯，' +
          '脚趾间有向上生长的毛发，肘部外翻，牛肢或软弱的脚腕。',
        }
      ],

    },
    {
      'pid' : 5,
      'tit':[
        {
          'title' : '如何挑选一只好的纯种贵宾幼犬',
          'square' : '贵宾犬分为纯种贵宾与杂交贵宾，可是这两种贵宾外形差别不大（尤其是在狗狗小时候），' +
          '那么如何挑选一条好的纯种贵宾幼犬呢？下面一些挑选纯种贵宾的经验，希望对想购买贵宾的朋友有所帮助。',
          'articleimag' : 'skill5.jpg',
          'style' : '贵宾',
          'p1' : '观察贵宾犬的外观皮毛：检查小狗是不是有过多的皮屑;接着是狗狗的眼睛：仔细观察贵宾犬小狗的眼睛：' +
          '它们应当灵活、明亮、有神。五官：看贵宾犬是否有鼻涕、眼屎，耳朵干净与否，鼻镜是否湿润。身材：' +
          '贵宾犬幼犬的身体应当发育良好，肌肉应当发达匀称。',
          'p2' : '观察其他贵宾犬的健康情况一窝贵宾犬中，不要光注意你想挑选的那只贵宾犬，此外，看看是否有其他生病的狗。' +
          '只要是有一条犬生病，尤其是细菌，那么和它生活在一起的其他贵宾犬极有可能受传染，所以只要你发现有一只不正常，则你就应该慎重考虑一下是否必要购买。',
          'p21' : '购买松狮犬时，还应该看松狮幼犬的父母亲。',
          'p3' : '贵宾犬幼犬是否注射疫苗，注射什么疫苗?注射疫苗是防止狗患上病毒性的唯一的方法。' +
          '不经过疫苗接种的犬，一旦感染了病毒，死亡率便会近近100%，既使是侥幸存活，也会留下终生的后遗症。' +
          '所以一定要重视贵宾犬的疫苗注射情况。',
          'p31' : '贵宾犬分为纯种贵宾与杂交贵宾，可是这两种贵宾外形差别不大(尤其是在狗狗小时候)，' +
          '那么如何挑选一条好的纯种贵宾幼犬呢?下面一些挑选纯种贵宾的经验，希望对想购买贵宾的朋友有所帮助。',
        }
      ]

    },
    {
      'pid' : 6,
      'tit':[
        {
          'title' : '宠物狗哈士奇的饲养方法',
          'square' : '很多主人都想知道，哈士奇怎么养才能让它健康快乐的成长呢?哈士奇是个性好、可爱好相处的犬种，' +
          '但饲养前仍要注意可能的花费照顾工作，才能提高饲养的乐趣。下面一起来看看哈士奇的饲养方法。',
          'articleimag' : 'skill6.jpg',
          'style' : '哈士奇',
          'p1' : '第一：饲养哈士奇的花费：除了每月的饲料需求，另外还要采购各种日用品、玩具、牵绳等。' +
          '此外还要帮哈士奇准备医疗金。经济不独立的人最好避免饲养。',
          'p2' : '第二：充足运动：哈士奇活泼好动，也需要较大的活动空间。除了每天早晚要带它出门散步外，' +
          '家里也要有地方可让它活动。小公寓、套房并不适合饲养。',
          'p21' : '第三：小哈掉毛问题：除了每年两次的大换毛外，金毛也是随时会掉毛。家里必需定期整理，' +
          '同时也要忍受衣物沾染掉毛的情况。',
          'p3' : '第四：哈士奇疾病：在步入老年后，金毛外观及身体机能老化，会变的不漂亮、患上疾病，' +
          '这时就要花费很多精力、金钱照顾。包括髋关节问题、椎间盘疾病等，因此饲养金毛前一定要多加注意。',
          'p31' : '哈士奇的饲养方法。当然，在美容方面也要定期做，哈士奇的毛发短，所以日常的美容工作还是十分简单的。' +
          '只需要一个刷毛用的手套、鬃刷、细齿梳、一块鹿皮，就可以完成每天的清洁美容工作。',
        }
      ]

    },
    {
      'pid' : 7,
      'tit':[
        {
          'title' : '苏格兰牧羊犬眼屎多怎么回事？',
          'square' : '苏格兰牧羊犬眼角偶尔挂着一点眼屎，这也是很正常的事情。就像人每天早晨起床后，' +
          '眼角也会挂着一些眼屎一样。这都是属于身体新陈代谢的正常生理状态。但是，如果苏牧犬眼角的眼屎异常的增多，' +
          '而且粘稠或者坚硬。家长就要注意了，应该立即检查这到底',
          'articleimag' : 'skill7.jpg',
          'style' : '苏格兰牧羊犬',
          'p1' : '通过研究发现，苏格兰牧羊犬眼屎变多的原因会有多种，比如说，上火干火太旺，眼疾(角膜炎等等)，' +
          '眼睛内进入异物，苏牧犬长有倒睫毛等等。',
          'p2' : '在这些情况的影响下，苏牧犬的眼屎就会增多。有时候严重的话，狗狗的眼睛上会附上一层眼屎，' +
          '使得眼睛都没办法睁开。',
          'p21' : '要专业的宠物医生曾经说过，要确定宠物狗眼屎多的真正原因，还有看分泌出来的眼屎症状。',
          'p3' : '比如说，如果眼屎呈现硬结，或者干燥的糊状，这多半是因为狗狗眼睛有炎症或者是上火。如果分泌的眼屎是软糊状' +
          '，那就表示狗狗有虚热。',
          'p31' : '当分泌的眼屎太黄且浓的时候，这多半是因为太燥热了。要缓解苏牧犬的这种“眼屎增多”的情况，' +
          '主要可以从饮食、治疗、清洁护理几个方面去管理。',
        }
      ]

    },
    {
      'pid' : 8,
      'tit':[
        {
          'title' : '苏格兰牧羊犬得了细小怎么办？',
          'square' : '犬瘟、细小对于宠物狗来说，就是凶残的“杀手”，感染后的狗狗死亡率都非常的高。' +
          '针对细小病毒病来说，这并非完全不可治疗，虽然很多狗狗死于细小，但也有一些狗狗治疗后痊愈了' +
          '。如果你养的苏格兰牧羊犬不幸感染了细小又应该怎么办，如何治疗才能挽',
          'articleimag' : 'skill8.jpg',
          'style' : '苏格兰牧羊犬',
          'p1' : '首先，作为家长一定要知道狗狗感染细小后的一些病症，对于这种杀伤力非常巨大的疾病，' +
          '最主要的一点就是及时的进行治疗。简单的说，就是在发现苏牧犬有一些类似于细小病症的时候，' +
          '就应该带它去宠物医院做细小检测，确定后立即隔离然后进行治疗。',
          'p2' : '其次，根据目前的宠物医学水平来看，还没有彻底、有效的治疗细小病的药物。如果宠物狗感染细小，' +
          '其治疗的主要方法是“针对性治疗”和“帮助提高狗狗身体抵抗力”。在帮助提高苏牧犬的抗病能力同时，进行治疗。',
          'p21' : '第三，在苏格兰牧羊犬接受细小治疗的时候，要先给它禁食12-24小时，在治疗期间那些坚硬的食物也要杜绝' +
          '。最好的是按照兽医的吩咐，来合理的喂养患病的苏牧犬。注意，在治疗期间应该及时的为苏牧犬补充一些身体需要的水分。',
          'p3' : '第四，治疗苏格兰牧羊犬细小病的药物也有一些。如庆大霉素的注射液，葡萄糖溶液，诺氟沙星胶囊，' +
          '思密达或者是胃复安。但是家长们应该注意的是，在治疗的过程中，任何药物的使用都应该得到兽医的准许。',
          'p31' : 'PS：治疗苏格兰牧羊犬的细小病毒病需要家长的坚持。虽然狗狗会面临死亡的危险，但是也存在着一' +
          '定的生的希望。患病的过程中，狗狗会遭受到巨大的痛苦，而主人还是应该给它鼓励和希望，毕竟宠物狗也有生的权利哦。',
        }
      ]

    },
  ];
  art:any;
  constructor(private glo: GlobalPropertyService,
              private ds: SkillService,
              private route: ActivatedRoute,
              private _cookieService: CookieService) {
  }

  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('pid');

    this.art=this.article[this.articleId].tit;
    console.log(this.art);
    //this.articleId = this.route.snapshot.paramMap.get('pid');
    // this.postData.cid = this.articleId;
    scrollTo(0, 0);
  }
//pid(i:any){
//  if(this.articleId ==this.article[i].pid){
//    this.articleid=!this.articleid;
//    console.log(this.articleid);
//  }
//}
  skillDetailsdata() {
    const that = this;
    this.ds.getskillDetails(this.skillService, function (result) {
      if (result._body !== 'err') {
        that.list_data.diary = JSON.parse(result._body);
      }
    });
  }

}
