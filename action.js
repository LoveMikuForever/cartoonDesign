window.addEventListener('load', function () {
    var opacity = document.querySelector('#opacity');
    var picture1 = document.querySelector('#picture1');
    var picture2 = document.querySelector('#picture2');
    var pic1, pic2;
    var cat = document.querySelector('#cat');
    var test = document.querySelector('#test');
    var content = document.querySelector('#content');
    var position = document.querySelector('#position');
    var li = document.querySelectorAll('li');
    var No1 = document.querySelectorAll('.No1');
    var No2 = document.querySelectorAll('.No2');
    var cartoon = document.querySelector('#cartoon');
    var returnTop = document.querySelector('#return');
    var music = document.querySelector('#music');
    var Music1 = document.querySelector('#Music1');
    var Music2 = document.querySelector('#Music2');
    var Music3 = document.querySelector('#Music3');
    var play = document.querySelector('#play');
    var stop = document.querySelector('#stop');
    var replay = document.querySelector('#replay');
    var next = this.document.querySelector('#next');
    var blackboard = document.querySelector('#blackboard');
    var p = document.querySelectorAll(".p");
    var cartooncontent = document.querySelector('#cartooncontent');
    var foot1 = document.querySelector('#foot1');
    var foot2 = document.querySelector('#foot2');
    var meng = document.querySelector('#meng');
    var dong = document.querySelector('#dong');
    var si = document.querySelector('#si');
    var yue = document.querySelector('#yue');
    var left = document.querySelector('#left');
    var right = document.querySelector('#right');
    var leftright = document.querySelector('#leftright');
    var main = document.querySelector('#main');
    var memory;
    function link1() {
        window.open('http://www.dilidili.wang/anime/3dkanojo/?1');
    }
    function link2() {
        window.open('http://www.dilidili.wang/anime/aliceoralice/?1');
    }
    function link3() {
        window.open('http://www.dilidili.wang/anime/sao-gungale/');
    }
    function link4() {
        window.open('http://www.dilidili.wang/anime/steinsgate0/?1');
    }
    function link5() {
        window.open('http://www.dilidili.wang/anime/tadakoi/?1');
    }
    function link6() {
        window.open('http://www.dilidili.wang/anime/wotakoi/?1');
    }
    function link7() {
        window.open('http://www.dilidili.wang/anime/haremking/?1');
    }
    function link8() {
        window.open('http://www.dilidili.wang/anime/heroaca3/');
    }
    function link9() {
        window.open('http://www.dilidili.wang/anime/hina-matsuri/?1');
    }
    function link10() {
        window.open('http://www.dilidili.wang/anime/shokugekisoma3-yylc/?1');
    }
    setTimeout(function(){
        leftright.style.opacity = 1;
        leftright.style.transition = "2s";
    })
    setTimeout(function(){
        meng.style.left = "30%";
        meng.style.transform = "rotate(360deg)";
    },100)
    setTimeout(function(){
        dong.style.top = "35%";
        dong.style.transform = "rotate(-360deg)";
    },400)
    setTimeout(function(){
        si.style.top = "35%";
        si.style.transform = "rotate(-360deg)";
    },700)
    setTimeout(function(){
        yue.style.right = "30%";
        yue.style.transform = "rotate(360deg)";
    },1000)
    setTimeout(function(){
        leftright.style.opacity = 0;
        meng.style.left = "-20%";
        dong.style.right = "-20%";
        si.style.left = "-20%";
        yue.style.right = "-20%";
        meng.style.opacity = 0;
        dong.style.opacity = 0;
        si.style.opacity= 0;
        yue.style.opacity = 0;
    },1900)
    this.setTimeout(function(){
        main.style.top = 0;
        main.style.opacity = 1;
        leftright.style.zIndex = "0";
    },2501)
    setTimeout(function () {
        for (let i = 0; i < No1.length; i++) {
            No1[i].style.opacity = 1;
            No2[i].style.opacity = 1;
        }
    }, 4201)
    setInterval(function () {
        for (let i = 0; i < No1.length; i++) {
            No1[i].style.top = Math.floor(Math.random() * window.innerHeight) + "px";
            No1[i].style.left = Math.floor(Math.random() * window.innerWidth) + "px";
            No1[i].style.transform = "rotate(" + Math.floor(Math.random() * 721) + "deg)";
            No2[i].style.top = Math.floor(Math.random() * window.innerHeight) + "px";
            No2[i].style.right = Math.floor(Math.random() * window.innerWidth) + "px";
            No2[i].style.transform = "rotate(" + Math.floor(Math.random() * 721) + "deg)";
        }
    }, 3001)
    setTimeout(function () {
        opacity.style.opacity = 0;
    }, 0)
    setTimeout(function () {
        picture1.style.bottom = "100px";
        picture1.style.opacity = 1;
        setTimeout(function () {
            picture1.style.transform = "rotate(3deg)";
        }, 0)
        setTimeout(function () {
            picture1.style.transform = "rotate(-3deg)";
        }, 1001)
    }, 3800)
    setTimeout(function () {
        content.style.opacity = 1;
        content.style.top = 0;
        setTimeout(function () {
            content.style.transform = "rotate(-5deg)";
        }, 300)
        setTimeout(function () {
            content.style.transform = "rotate(-5deg)";
        }, 450)
        setTimeout(function () {
            content.style.transform = "rotate(5deg)";
        }, 500)
        setTimeout(function () {
            content.style.transform = "rotate(-5deg)";
        }, 650)
        setTimeout(function () {
            content.style.transform = "rotate(0deg)";
        }, 800)
    }, 4501)
    setTimeout(function () {
        picture2.style.bottom = "70%";
        picture2.style.left = "-5%";
        picture2.style.transform = "rotate(135deg)";
        picture2.style.opacity = 1;
        setTimeout(function () {
            cat.src = "image/小猫笑.png";
            picture2.style.bottom = "70%";
            picture2.style.left = "80%";
            picture2.style.transform = "rotate(215deg)";
            setTimeout(function () {
                cat.src = "image/小猫晕.png";
                picture2.style.bottom = "-5%";
                picture2.style.left = "80%";
                picture2.style.transform = "rotate(-55deg)";
                setTimeout(function () {
                    cat.src = "image/小猫.png";
                    picture2.style.bottom = "-5%";
                    picture2.style.left = "-3%";
                    picture2.style.transform = "rotate(35deg)";
                }, 700)
            }, 700)
        }, 700)
    }, 1000)
    pic1 = setInterval(function () {
        setTimeout(function () {
            picture1.style.transform = "rotate(3deg)";
        }, 0)
        setTimeout(function () {
            picture1.style.transform = "rotate(-3deg)";
        }, 1025)
    }, 2050)
    setInterval(function () {
        setTimeout(function () {
            cat.src = "image/小猫.png";
        }, 0)
        setTimeout(function () {
            cat.src = "image/小猫眨眼.png";
        }, 150)
        setTimeout(function () {
            cat.src = "image/小猫.png";
        }, 300)
        setTimeout(function () {
            cat.src = "image/小猫眨眼.png";
        }, 450)
        setTimeout(function () {
            cat.src = "image/小猫.png";
        }, 600)
    }, 3003)
    foot1.addEventListener('mouseenter', function () {
        console.log("Fuck有");
        setTimeout(function () {
            foot1.style.transform = "rotate(-6deg)";
        }, 0)
        setTimeout(function () {
            foot1.style.transform = "rotate(6deg)";
        }, 301)
        setTimeout(function () {
            foot1.style.transform = "rotate(-6deg)";
        }, 602)
        setTimeout(function () {
            foot1.style.transform = "rotate(0deg)";
        }, 903)
    })
    foot2.addEventListener('mouseenter', function () {
        setTimeout(function () {
            foot2.style.transform = "rotate(-6deg)";
        }, 0)
        setTimeout(function () {
            foot2.style.transform = "rotate(6deg)";
        }, 301)
        setTimeout(function () {
            foot2.style.transform = "rotate(-6deg)";
        }, 602)
        setTimeout(function () {
            foot2.style.transform = "rotate(0deg)";
        }, 903)
    })
    picture1.addEventListener('mouseover', function () {
        clearInterval(pic1);
        clearInterval(pic2);
        this.addEventListener('mouseleave', function () {
            clearInterval(pic2);
            pic2 = setInterval(function () {
                setTimeout(function () {
                    picture1.style.transform = "rotate(3deg)";
                }, 0)
                setTimeout(function () {
                    picture1.style.transform = "rotate(-3deg)";
                }, 1025)
            }, 2050)
        })
    })
    setTimeout(function(){
        blackboard.style.top = "-150px";
    },3400)
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('mouseenter', function () {
            var image = this.firstElementChild;
            image.style.top = "-10%";
            image.style.left = "-10%";
            image.style.height = "120%";
            image.style.width = "120%";
            this.addEventListener('mouseleave', function () {
                image.style.top = 0;
                image.style.left = 0;
                image.style.height = "100%";
                image.style.width = "100%";
            })
        })
        li[i].addEventListener('click', function () {
            if (i == 0) {
                cartooncontent.innerHTML = "<h1 class = 'h1'>《3D彼女》</h1><img src = 'image/3D彼女壁纸.jpg' class = 'image'><span>类型:恋爱(狗粮)</span><p class = 'content'>故事简介:高中三年级的筒井光是所谓的御宅族少年。只要有游戏或动画里的二次元女生的话，感觉就能独自一人生活了……但是，他突然被超绝3D（现实）美少女·五十岚色叶告白，并开始了和她的交往！在被奔放的色叶玩弄于股掌之间的同时，筒井也逐渐爱上了她……</p><p class = 'writer'>作为单身狗，我所看的恋爱番剧(吃的狗粮)不在少数，也看过不少很废的男主莫名其妙的被女主喜欢(女主还真**漂亮)，但这部番的其中一个亮点是，男主废的比较符合潮流，死肥宅！当然，并不是指大多数的我们在我看来，男主这种宅已经根深蒂固了。不过，在遇上女主后，似乎又有那么一丝转变。剧中，女主去过几次医院，这。。。。懂的人自然都懂。那结局到底怎么样，还有待期待吧！说到画风，我并不是特别喜欢，感觉制作方的经费貌似有点不够。剧情向以往的恋爱番般套路。推荐的话，喜欢的自然喜欢，不喜欢的可能看一集就弃。</p><span>推荐指数:✮✮✮</span>";
                foot1.removeEventListener('click', memory)
                foot2.removeEventListener('click', memory)
                document.querySelectorAll('.image')[0].addEventListener('click', memory = link1)
                foot1.addEventListener('click', memory)
                foot2.addEventListener('click', memory)
            } else if (i == 1) {
                cartooncontent.innerHTML = "<h1 class = 'h1'>《Alice or Alice》</h1><img src = 'image/alice壁纸.jpg' class = 'image'><span>类型:日常 后宫</span><p class = 'content'>故事简介:描绘双胞胎“璃星”与“蓝璃”以及有些妹控的哥哥之间温馨日常的喜剧作品。吃饭、吵架、和朋友玩……可爱的爱丽丝的心动日常，稍微偷看一下吧？</p><p class = 'writer'>如果是作为一名老司机，那么这种泡面番就一定不能错过啊。满打满的声优福利啊，Q版人物萌死人有木有(十分羡慕这样的男主!!!!)！画风偏向于萌萌哒，日常剧情。十分推荐于各位老司机，对于其他爱好的童鞋可以路过啦。</p><span>推荐指数:✮✮✮✮</span>";
                document.querySelectorAll('.image')[0].style.height = "360px";
                foot1.removeEventListener('click', memory)
                foot2.removeEventListener('click', memory)
                document.querySelectorAll('.image')[0].addEventListener('click', memory = link2)
                foot1.addEventListener('click', memory)
                foot2.addEventListener('click', memory)
            } else if (i == 2) {
                cartooncontent.innerHTML = "<h1 class = 'h1'>《刀剑神域外传GGO》</h1><img src = 'image/刀剑神域GGO壁纸.jpg' class = 'image'><span>类型:热血 科幻</span><p class = 'content'>故事简介:小比类卷香莲是身高183公分的女大学生。身高的自卑感作祟，让她在「现实世界」里无法顺利与人相处，但是VRMMO「GGO」改变了她──获得身高不到150公分的理想「小不点」角色后，香莲就穿着全身粉红色的战斗服，以玩家「莲」的身份驰骋于GGO世界里！这时有一名美女玩家「Pitohui」出现在她眼前。两人都是GGO内稀有的女性玩家，而且也意气相投──某一天，Pitohui询问莲是否愿意跟她一起参加最强枪手决定战「BoB」的小队混战版「Squad Jam」……由时雨泽惠一&黑星红白所呈现的《Sword Art Online刀剑神域》外传登场！</p><p class = 'writer'>《刀剑神域》是我心目中的神剧，不过我并没有十分在意刀剑神域GGO外传这部番剧。画风依旧，剧情不作细评。</p><span>推荐指数:✮✮✮✮</span>";
                foot1.removeEventListener('click', memory)
                foot2.removeEventListener('click', memory)
                document.querySelectorAll('.image')[0].addEventListener('click', memory = link3)
                foot1.addEventListener('click', memory)
                foot2.addEventListener('click', memory)
            } else if (i == 3) {
                cartooncontent.innerHTML = "<h1 class = 'h1'>《命运石之门0》</h1><img src = 'image/命运石之门壁纸.jpg' class = 'image'><span>类型:科幻 悬疑 致郁</span><p class = 'content'>故事简介:冈部伦太郎–中二病的大学生，自称疯狂科学家-凤凰院凶真。他在“未来机械研究所”里发明了“电话烤箱（暂定）”，这个道具有着是类似时空旅行的惊人机能，能够对过去寄送电子邮件。某日，主角遇到了18岁的天才少女-牧瀬红莉栖，但是，就在数个小时前，主角才亲眼目击到她在大厦的屋顶遭到杀害……故事由此展开。</p><p class = 'writer'>命运石之门简称石头门是大家心目中的神作。其新颖的题材至今都没有类似其他题材能够超越。一切一切的开端都是那部可以向未来的自己发信息的机器。男主一开始便走向了不归路，在平行世界中迷失方向。石头门第二季也就是zero，男主回到了正常的世界线上，但经历过无数次绝望的他仍旧是痛苦不堪的，这也导致面对无数熟悉的人却依旧露出担忧、恐惧亦或是愤怒....画风不错，然而人物的描绘我并不是很喜欢。一切都是命运石之门的选择.....</p><span>推荐指数:✮✮✮✮✮</span>";
                foot1.removeEventListener('click', memory)
                foot2.removeEventListener('click', memory)
                document.querySelectorAll('.image')[0].addEventListener('click', memory = link4)
                foot1.addEventListener('click', memory)
                foot2.addEventListener('click', memory)
            } else if (i == 4) {
                cartooncontent.innerHTML = "<h1 class = 'h1'>《多田君不想谈恋爱》</h1><img src = 'image/多田君不谈恋爱壁纸.jpg' class = 'image'><span>类型:恋爱(狗粮)</span><p class = 'content'>故事简介:手持相机、拍摄着盛开樱花的多田光良，与刚来到日本的异国少女德蕾莎相遇。泰瑞莎来自欧洲的拉森堡，为了留学而来到日本，但是她才刚抵达，就与同伴走散迷了路。因缘际会下，帮助了泰瑞莎的光良，就将德蕾莎带往祖父所经营的多田咖啡店……</p><p class = 'writer'>看到这个番名，有没有想到什么？对，没错，这部番的原创作团队创作过《月刊少女野崎君》。在四月番中，这部番并没有想象中的火，其给我的感觉也没有对月刊少女那样的感觉。不过其画风还是很赞的啦，细腻的景色和人物细节绘画。由于我并没有追下去，剧情方面还得由你们去感受。</p><span>推荐指数:✮✮✮</span>";
                foot1.removeEventListener('click', memory)
                foot2.removeEventListener('click', memory)
                document.querySelectorAll('.image')[0].addEventListener('click', memory = link5)
                foot1.addEventListener('click', memory)
                foot2.addEventListener('click', memory)
            } else if (i == 5) {
                cartooncontent.innerHTML = "<h1 class = 'h1'>《宅男腐女谈恋爱真难》</h1><img src = 'image/宅男腐女谈恋爱真难壁纸.jpg' class = 'image'><span>类型:恋爱(狗粮) 职场 喜剧</span><p class = 'content'>故事简介:御宅族腐女桃濑成海在新的公司遇见了电动爱好者的青梅竹马二藤宏嵩，在宏嵩的邀请下两人开始交往。二人和公司的前辈小柳花子与桦仓太郎一起上演了四人互动的恋爱喜剧。</p><p class = 'writer'>又是宅男，不过，与《3D彼女》不同的是，女主也是宅(长得挺可爱)，这样的人设说实话还是很新鲜的。宅男腐女谈恋爱谈何容易，不过正因为兴趣相投，才有机缘走到一起对吧!画风有点类似国漫，剧情符合现实。恋爱喜剧番屡见不鲜，不过依旧是值得推荐的一部番剧。</p><span>推荐指数:✮✮✮✮</span>";
                document.querySelectorAll('.image')[0].style.height = "320px";
                foot1.removeEventListener('click', memory)
                foot2.removeEventListener('click', memory)
                document.querySelectorAll('.image')[0].addEventListener('click', memory = link6)
                foot1.addEventListener('click', memory)
                foot2.addEventListener('click', memory)
            } else if (i == 6) {
                cartooncontent.innerHTML = "<h1 class = 'h1'>《恶魔高校hero》</h1><img src = 'image/恶魔高校壁纸.jpg' class = 'image'><span>类型:恋爱 后宫 科幻 热血</span><p class = 'content'>一诚和莉雅丝、爱西亚、朱乃、小猫、杰诺瓦同在一个屋檐下，尽情享受着同居生活。但这样平稳的日常生活持续不久，超自然研究部利用暑假前往冥界。一诚等人一到达冥界就在阿萨谢尔的命令下进行严苛的修行，而一行人当中只有小猫对自己的力量没有自信。某天，恶魔、天使、堕天使三大势力以及北欧神族阿斯加德举行了对恐怖对策的会议。但在背后，瓦利所率领的祸之团，以及小猫的姐姐黑歌开始展开危险的行动……</p><p class = 'writer'>恶魔高校已经出到了第四季了，这证明了什么!这部番在我们老司机中的火爆程度是多么的高!!第四季换了制作公司，画风较以前有所变化，人物变得更细腻好看了(老司机嘴角乱**上扬)。剧情不多说，懂得自然都懂。说实在的，我并不推荐这番剧，毕竟....  喜欢的可以自己百度找资源看。</p><span>推荐指数:✮✮✮✮</span>";
                foot1.removeEventListener('click', memory)
                foot2.removeEventListener('click', memory)
                document.querySelectorAll('.image')[0].addEventListener('click', memory = link7)
                foot1.addEventListener('click', memory)
                foot2.addEventListener('click', memory)
            } else if (i == 7) {
                cartooncontent.innerHTML = "<h1 class = 'h1'>《我的英雄学园》</h1><img src = 'image/我的英雄学园.jpg' class = 'image'><span>类型:奇幻 冒险 热血</span><p class = 'content'>故事讲述了一个天生无能力的少年绿谷出久追随憧憬的偶像英雄欧尔麦特，在以培养未来英雄为目的的雄英学院中求学、成长的故事。</p><p class = 'writer'>其实我并没有看过这部番剧，而是因为舍友们包括我所知道的一些二次元爱好者们都挺喜欢这部番剧的，而且已经出到第三季了，所以推了上来。有时间我一定从头看看!</p><span>推荐指数:✮✮✮✮</span>";
                foot1.removeEventListener('click', memory)
                foot2.removeEventListener('click', memory)
                document.querySelectorAll('.image')[0].addEventListener('click', memory = link8)
                foot1.addEventListener('click', memory)
                foot2.addEventListener('click', memory)
            } else if (i == 8) {
                cartooncontent.innerHTML = "<h1 class = 'h1'>《黑社会的超能力女儿》</h1><img src = 'image/超能力女儿壁纸.jpg' class = 'image'><span>类型:热血</span><p class = 'content'>黑社会干部和超能力少女的城市生活喜剧。在苇河组干部，新田的房间落下的奇妙的楕圆形的物体，那是所有的开始。在神秘物体里面有一个没表情的少女，雏。用不可抗拒的念动力威胁新田，雏住在了新田家。隐瞒着少女的来历，黑社会干部和超能力少女危险而爆笑的同居生活开始了。</p><p class = 'writer'>天降之物般的女主，黑社会男主 emmmmm..... 这样的展开还是挺新颖的，而且男主还成为女主的老爸了。本以为黑社会中的人都十分凶恶，这男主收养了女主后就直接成为大暖男啊!!!这部番的画风有点类似于欧美画风，属于少见的类型。剧情虽日常，但是穿插着各种各样的笑点(反正我是被着两只给笑死了)，十分适合心情不好的时候观看。也正如此，这部番名列四月番播放量前列。</p><span>推荐指数:✮✮✮✮✮</span>";
                foot1.removeEventListener('click', memory)
                foot2.removeEventListener('click', memory)
                document.querySelectorAll('.image')[0].addEventListener('click', memory = link9)
                foot1.addEventListener('click', memory)
                foot2.addEventListener('click', memory)
            } else if (i == 9) {
                cartooncontent.innerHTML = "<h1 class = 'h1'>《食戟之灵之远月篇》</h1><img src = 'image/食戟之灵壁纸.jpg' class = 'image'><span>类型:热血</span><p class = 'content'>该作以位于日本东京都内的名门料理学校“远月学园”为舞台。讲述一个小镇上的定食屋主人的儿子“幸平创真”为主人公活跃描写的料理美食类漫画。家里经营餐馆的中学生．幸平创真，以料理人的父亲为目标，每天持续磨练自己的厨艺。但是某一天，父亲却要他进入厨艺学校“远月学园”就读。来到远月学园的创真，遇见了一个拥有「神之舌」的少女．薙切绘里奈，但是创真在插班考试中做出的料理，却被绘里奈判定为不合格。</p><p class = 'writer'>作为连追三季药王老司机的我，表示喜欢这种类型的美食番。虽然从始至终都不太懂为什么他们所做的菜能吃到爆衣这种程度(反正我还没试过好吃到这么夸张的菜)，但是男主角那天赋虽浅却不失向上之心是十分令我欣赏的。抛开自己对这部番内在的一些感受，其画风还是符合如今日本动漫番剧画风的潮流的(爆衣那部分还是有点小儿不宜的(*^▽^*))。剧情虽说并没有太多新意，但是总感觉百看不腻。值得推荐！</p><span>推荐指数:✮✮✮✮</span>";
                document.querySelectorAll('.image')[0].style.width = "440px";
                foot1.removeEventListener('click', memory)
                foot2.removeEventListener('click', memory)
                document.querySelectorAll('.image')[0].addEventListener('click', memory = link10)
                foot1.addEventListener('click', memory)
                foot2.addEventListener('click', memory)
            }
            this.parentNode.parentNode.style.height = 0;
            this.parentNode.parentNode.style.transition = "1s";
            this.parentNode.parentNode.style.opacity = 0;
            setTimeout(function () {
                cartoon.style.opacity = 1;
                cartoon.lastElementChild.style.height = "700px";
            }, 1001)
        })
    }
    returnTop.addEventListener('click', function () {
        this.parentNode.style.height = "0";
        this.parentNode.style.overflow = "hidden";
        setTimeout(function () {
            content.style.height = "600px";
            position.style.height = "330px";
            position.style.opacity = 1;
        }, 1001);
    })
    for (let i = 0; i < p.length; i++) {
        p[i].addEventListener('mouseover', function (event) {
            setTimeout(function () {
                event.target.style.transform = "rotate(-5deg)";
            }, 0)
            setTimeout(function () {
                event.target.style.transform = "rotate(5deg)";
            }, 201)
            setTimeout(function () {
                event.target.style.transform = "rotate(0deg)";
            }, 402)
        })
    }
    blackboard.addEventListener('mouseenter', function () {
        this.style.top = 0;
        setTimeout(function () {
            music.style.top = "14%";
        }, 401)
        setTimeout(function () {
            music.style.top = "12%";
        }, 602)
        setTimeout(function () {
            music.style.top = "14%";
        }, 803)
        this.addEventListener('mouseleave', function () {
            music.style.top = "10%";
            this.style.top = "-150px";
        })
    })
    music.addEventListener('click', function (event) {
        if (Music1.paused == false || Music1.currentTime) {
            switch (event.target.id) {
                case "play": Music1.play(); break;
                case "stop": Music1.pause(); break;
                case "replay": Music1.currentTime = 0.1; break;
            }
        } else if (Music2.paused == false || Music2.currentTime) {
            switch (event.target.id) {
                case "play": Music2.play(); break;
                case "stop": Music2.pause(); break;
                case "replay": Music2.currentTime = 0.1; break;
            }
        } else if (Music3.paused == false || Music3.currentTime) {
            switch (event.target.id) {
                case "play": Music3.play(); break;
                case "stop": Music3.pause(); break;
                case "replay": Music3.currentTime = 0.1; break;
            }
        } else {
            switch (event.target.id) {
                case "play": Music1.play(); break;
                case "stop": Music1.pause(); break;
                case "replay": Music1.currentTime = 0.1; break;
            }
        }
    })
    next.addEventListener('click', function () {
        if (Music1.currentTime) {
            Music1.load();
            Music2.play();
        } else if (Music2.currentTime) {
            Music2.load();
            Music3.play();
        } else if (Music3.currentTime) {
            Music3.load();
            Music1.play();
        } else {
            Music1.play();
        }
    })
    Music1.addEventListener('ended', function () {
        Music1.load();
        Music2.play();
    })
    Music2.addEventListener('ended', function () {
        Music2.load();
        Music3.play();
    })
    Music3.addEventListener('ended', function () {
        Music3.load();
        Music1.play();
    })
})
