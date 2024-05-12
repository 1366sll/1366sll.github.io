// CLAIM: at least one 'material' type should exist!
var ids = [
    {
        'id' : 'VB001', 'rank' : 'B','rare':3,'type':'valkyrie','name':'领域装·白练','img': 'assets/img/valkyrie/B/VB001.png'
    },
    {
        'id' : 'VB002', 'rank' : 'B','rare':3,'type':'valkyrie','name':'脉冲装·绯红','img': 'assets/img/valkyrie/B/VB002.png'
    },
    {
        'id' : 'VB003', 'rank' : 'B','rare':3,'type':'valkyrie','name':'女武神·战车','img': 'assets/img/valkyrie/B/VB003.png'
    },    
    {
        'id' : 'VB004', 'rank' : 'B','rare':3,'type':'valkyrie','name':'战场疾风','img': 'assets/img/valkyrie/B/VB004.png'
    },
    {
        'id' : 'VA001', 'rank' : 'A','rare':4,'type':'valkyrie','name':'女武神·游侠','img': 'assets/img/valkyrie/A/VA001.png'
    },
    {
        'id' : 'VA002', 'rank' : 'A','rare':4,'type':'valkyrie','name':'圣女祈祷','img': 'assets/img/valkyrie/A/VA002.png'
    },
    {
        'id' : 'VA003', 'rank' : 'A','rare':4,'type':'valkyrie','name':'影舞冲击','img': 'assets/img/valkyrie/A/VA003.png'
    },
    {
        'id' : 'VA004', 'rank' : 'A','rare':4,'type':'valkyrie','name':'女武神·强袭','img': 'assets/img/valkyrie/A/VA004.png'
    },
    {
        'id' : 'VA005', 'rank' : 'A','rare':4,'type':'valkyrie','name':'驱动装·山吹','img': 'assets/img/valkyrie/A/VA005.png'
    },
    {
        'id' : 'VA006', 'rank' : 'A','rare':4,'type':'valkyrie','name':'雪地狙击','img': 'assets/img/valkyrie/A/VA006.png'
    },
    {
        'id' : 'VA007', 'rank' : 'A','rare':4,'type':'valkyrie','name':'融核装·深红','img': 'assets/img/valkyrie/A/VA007.png'
    },
    {
        'id' : 'VA008', 'rank' : 'A','rare':4,'type':'valkyrie','name':'女武神·凯旋','img': 'assets/img/valkyrie/A/VA008.png'
    },    
    {
        'id' : 'VA009', 'rank' : 'A','rare':4,'type':'valkyrie','name':'女武神·誓约','img': 'assets/img/valkyrie/A/VA009.png'
    },
    {
        'id' : 'VA010', 'rank' : 'A','rare':4,'type':'valkyrie','name':'樱火轮舞','img': 'assets/img/valkyrie/A/VA010.png'
    },
    {
        'id' : 'VA011', 'rank' : 'A','rare':4,'type':'valkyrie','name':'女武神·迅羽','img': 'assets/img/valkyrie/A/VA011.png'
    },
    {
        'id' : 'VA012', 'rank' : 'A','rare':4,'type':'valkyrie','name':'白夜执事','img': 'assets/img/valkyrie/A/VA012.png'
    },    
    {
        'id' : 'VA013', 'rank' : 'A','rare':4,'type':'valkyrie','name':'黯蔷薇','img': 'assets/img/valkyrie/A/VA013.png'
    },
    {
        'id' : 'VA014', 'rank' : 'A','rare':4,'type':'valkyrie','name':'猎袭装·影铁','img': 'assets/img/valkyrie/A/VA014.png'
    },
    {
        'id' : 'VA015', 'rank' : 'A','rare':4,'type':'valkyrie','name':'蓝莓特攻','img': 'assets/img/valkyrie/A/VA015.png'
    },
    {
        'id' : 'VA016', 'rank' : 'A','rare':4,'type':'valkyrie','name':'幻海梦蝶','img': 'assets/img/valkyrie/A/VA016.png'
    },  
////////////////////////////////////////////////////////////////////
    {
        'id' : 'AVA001', 'rank' : 'A','rare':5,'type':'valkyrie','name':'圣仪装·今样','img': 'assets/img/valkyrie/A/AVA001.png'
    },
    {
        'id' : 'AVA002', 'rank' : 'A','rare':4,'type':'valkyrie','name':'原罪猎人','img': 'assets/img/valkyrie/A/AVA002.png'
    },
    {
        'id' : 'AVA003', 'rank' : 'A','rare':5,'type':'valkyrie','name':'逆神巫女','img': 'assets/img/valkyrie/A/AVA003.png'
    },
    {
        'id' : 'AVA004', 'rank' : 'A','rare':4,'type':'valkyrie','name':'真炎幸魂','img': 'assets/img/valkyrie/A/AVA004.png'
    },  
    {
        'id' : 'AVA005', 'rank' : 'A','rare':5,'type':'valkyrie','name':'银狼的黎明','img': 'assets/img/valkyrie/A/AVA005.png'
    },
    {
        'id' : 'AVA006', 'rank' : 'A','rare':4,'type':'valkyrie','name':'月下初拥','img': 'assets/img/valkyrie/A/AVA006.png'
    },
    {
        'id' : 'AVA007', 'rank' : 'A','rare':4,'type':'valkyrie','name':'极地战刃','img': 'assets/img/valkyrie/A/AVA007.png'
    },
///////////////////////////////////////////////////////////////////
    {
        'id' : 'VS001', 'rank' : 'S','rare':5,'type':'valkyrie','name':'白骑士·月光','img': 'assets/img/valkyrie/S/VS001.png',
        'special':true
    },
    {
        'id' : 'VS002', 'rank' : 'S','rare':5,'type':'valkyrie','name':'雷电女王的鬼铠','img': 'assets/img/valkyrie/S/VS002.png', 'special':true
    },
    {
        'id' : 'VS003', 'rank' : 'S','rare':5,'type':'valkyrie','name':'次元边界突破','img': 'assets/img/valkyrie/S/VS003.png', 'special':true
    },
    {
        'id' : 'VS004', 'rank' : 'S','rare':5,'type':'valkyrie','name':'血色玫瑰','img': 'assets/img/valkyrie/S/VS004.png', 'special':true
    },
    {
        'id' : 'VS005', 'rank' : 'S','rare':5,'type':'valkyrie','name':'处刑装·紫苑','img': 'assets/img/valkyrie/S/VS005.png', 'special':true
    },
    {
        'id' : 'VS006', 'rank' : 'S','rare':5,'type':'valkyrie','name':'神恩颂歌','img': 'assets/img/valkyrie/S/VS006.png', 'special':true
    },
    {
        'id' : 'VS007', 'rank' : 'S','rare':5,'type':'valkyrie','name':'影骑士·月轮','img': 'assets/img/valkyrie/S/VS007.png', 'special':true
    },
    {
        'id' : 'VS008', 'rank' : 'S','rare':5,'type':'valkyrie','name':'炽翎','img': 'assets/img/valkyrie/S/VS008.png', 'special':true
    },  
    {
        'id' : 'VS009', 'rank' : 'S','rare':5,'type':'valkyrie','name':'苍骑士·月魂','img': 'assets/img/valkyrie/S/VS009.png', 'special':true
    },
    {
        'id' : 'VS010', 'rank' : 'S','rare':5,'type':'valkyrie','name':'樱桃炸弹','img': 'assets/img/valkyrie/S/VS010.png', 'special':true
    },
////////////////////////////////////////////////////////////////////////////////////
    {
        'id' : 'AVS001', 'rank' : 'S','rare':5,'type':'valkyrie','name':'异度黑核侵蚀','img': 'assets/img/valkyrie/S/AVS001.png', 'special':true
    },
    {
        'id' : 'AVS002', 'rank' : 'S','rare':5,'type':'valkyrie','name':'御神装·勿忘','img': 'assets/img/valkyrie/S/AVS002.png', 'special':true
    },
    {
        'id' : 'AVS003', 'rank' : 'S','rare':5,'type':'valkyrie','name':'第六夜想曲','img': 'assets/img/valkyrie/S/AVS003.png', 'special':true
    },   
    {
        'id' : 'AVS004', 'rank' : 'S','rare':5,'type':'valkyrie','name':'空之律者','img': 'assets/img/valkyrie/S/AVS004.png', 'special':true
    },
    {
        'id' : 'AVS005', 'rank' : 'S','rare':5,'type':'valkyrie','name':'真红骑士·月蚀','img': 'assets/img/valkyrie/S/AVS005.png', 'special':true
    },
    {
        'id' : 'AVS006', 'rank' : 'S','rare':5,'type':'valkyrie','name':'理之律者','img': 'assets/img/valkyrie/S/AVS006.png', 'special':true
    },



    ///////////////////////////////////////////////////////////////////////////////////////
    

    
    {
        'id' : 'FB001', 'rank' : 'B','rare':3,'type':'valkyrie_piece','name':'领域装·白练','img': 'assets/img/fragment/B/FB001.png'
    },
    {
        'id' : 'FB002', 'rank' : 'B','rare':3,'type':'valkyrie_piece','name':'脉冲装·绯红','img': 'assets/img/fragment/B/FB002.png'
    },
    {
        'id' : 'FB003', 'rank' : 'B','rare':3,'type':'valkyrie_piece','name':'女武神·战车','img': 'assets/img/fragment/B/FB003.png'
    },    
    {
        'id' : 'FB004', 'rank' : 'B','rare':3,'type':'valkyrie_piece','name':'战场疾风','img': 'assets/img/fragment/B/FB004.png'
    },
    {
        'id' : 'FA001', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'女武神·游侠','img': 'assets/img/fragment/A/FA001.png'
    },
    {
        'id' : 'FA002', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'圣女祈祷','img': 'assets/img/fragment/A/FA002.png'
    },
    {
        'id' : 'FA003', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'影舞冲击','img': 'assets/img/fragment/A/FA003.png'
    },
    {
        'id' : 'FA004', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'女武神·强袭','img': 'assets/img/fragment/A/FA004.png'
    },
    {
        'id' : 'FA005', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'驱动装·山吹','img': 'assets/img/fragment/A/FA005.png'
    },
    {
        'id' : 'FA006', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'雪地狙击','img': 'assets/img/fragment/A/FA006.png'
    },
    {
        'id' : 'FA007', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'融核装·深红','img': 'assets/img/fragment/A/FA007.png'
    },
    {
        'id' : 'FA008', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'女武神·凯旋','img': 'assets/img/fragment/A/FA008.png'
    },    
    {
        'id' : 'FA009', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'女武神·誓约','img': 'assets/img/fragment/A/FA009.png'
    },
    {
        'id' : 'FA010', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'樱火轮舞','img': 'assets/img/fragment/A/FA010.png'
    },
    {
        'id' : 'FA011', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'女武神·迅羽','img': 'assets/img/fragment/A/FA011.png'
    },
    {
        'id' : 'FA012', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'白夜执事','img': 'assets/img/fragment/A/FA012.png'
    },    
    {
        'id' : 'FA013', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'黯蔷薇','img': 'assets/img/fragment/A/FA013.png'
    },
    {
        'id' : 'FA014', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'猎袭装·影铁','img': 'assets/img/fragment/A/FA014.png'
    },
    {
        'id' : 'FA015', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'蓝莓特攻','img': 'assets/img/fragment/A/FA015.png'
    },
    {
        'id' : 'FA016', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'幻海梦蝶','img': 'assets/img/fragment/A/FA016.png'
    },  
////////////////////////////////////////////////////////////////////
    {
        'id' : 'AFA001', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'圣仪装·今样','img': 'assets/img/fragment/A/AFA001.png'
    },
    {
        'id' : 'AFA002', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'原罪猎人','img': 'assets/img/fragment/A/AFA002.png'
    },
    {
        'id' : 'AFA003', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'逆神巫女','img': 'assets/img/fragment/A/AFA003.png'
    },
    {
        'id' : 'AFA004', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'真炎幸魂','img': 'assets/img/fragment/A/AFA004.png'
    },  
    {
        'id' : 'AFA005', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'银狼的黎明','img': 'assets/img/fragment/A/AFA005.png'
    },
    {
        'id' : 'AFA006', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'月下初拥','img': 'assets/img/fragment/A/AFA006.png'
    },
    {
        'id' : 'AFA007', 'rank' : 'A','rare':4,'type':'valkyrie_piece','name':'极地战刃','img': 'assets/img/fragment/A/AFA007.png'
    },
///////////////////////////////////////////////////////////////////
    {
        'id' : 'FS001', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'白骑士·月光','img': 'assets/img/fragment/S/FS001.png'
    },
    {
        'id' : 'FS002', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'雷电女王的鬼铠','img': 'assets/img/fragment/S/FS002.png'
    },
    {
        'id' : 'FS003', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'次元边界突破','img': 'assets/img/fragment/S/FS003.png'
    },
    {
        'id' : 'FS004', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'血色玫瑰','img': 'assets/img/fragment/S/FS004.png'
    },
    {
        'id' : 'FS005', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'处刑装·紫苑','img': 'assets/img/fragment/S/FS005.png'
    },
    {
        'id' : 'FS006', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'神恩颂歌','img': 'assets/img/fragment/S/FS006.png'
    },
    {
        'id' : 'FS007', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'影骑士·月轮','img': 'assets/img/fragment/S/FS007.png'
    },
    {
        'id' : 'FS008', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'炽翎','img': 'assets/img/fragment/S/FS008.png'
    },  
    {
        'id' : 'FS009', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'苍骑士·月魂','img': 'assets/img/fragment/S/FS009.png'
    },
    {
        'id' : 'FS010', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'樱桃炸弹','img': 'assets/img/fragment/S/FS010.png'
    },
////////////////////////////////////////////////////////////////////////////////////
    {
        'id' : 'AFS001', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'异度黑核侵蚀','img': 'assets/img/fragment/S/AFS001.png'
    },
    {
        'id' : 'AFS002', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'御神装·勿忘','img': 'assets/img/fragment/S/AFS002.png'
    },
    {
        'id' : 'AFS003', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'第六夜想曲','img': 'assets/img/fragment/S/AFS003.png'
    },   
    {
        'id' : 'AFS004', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'空之律者','img': 'assets/img/fragment/S/AFS004.png'
    },
    {
        'id' : 'AFS005', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'真红骑士·月蚀','img': 'assets/img/fragment/S/AFS005.png'
    },
    {
        'id' : 'AFS006', 'rank' : 'S','rare':5,'type':'valkyrie_piece','name':'理之律者','img': 'assets/img/fragment/S/AFS006.png'
    },



    ///////////////////////////////////////////////////////////////////////////////////


    {
        'id' : 'EC001','rare':4,'type':'material','name':'芯片','img': 'assets/img/material/char_exp/EC001.png'
    },
    {
        'id' : 'EC002','rare':4,'type':'material','name':'机械芯片','img': 'assets/img/material/char_exp/EC002.png'
    },
    {
        'id' : 'EC003','rare':4,'type':'material','name':'生物芯片','img': 'assets/img/material/char_exp/EC003.png'
    },
    {
        'id' : 'EC004','rare':4,'type':'material','name':'异能芯片','img': 'assets/img/material/char_exp/EC004.png'
    },
    /////////////////////////////////////////////////////////////
    {
        'id' : 'HC001','rare':4,'type':'material','name':'20000金币','img': 'assets/img/material/coin/HC001.png'
    },
    {
        'id' : 'HC002','rare':4,'type':'material','name':'50000金币','img': 'assets/img/material/coin/HC002.png'
    },
    /////////////////////////////////////////////////////////////
    {
        'id' : 'EE001','rare':4,'type':'material','name':'双子灵魂结晶','img': 'assets/img/material/equip_exp/EE001.png'
    },
    {
        'id' : 'EE002','rare':4,'type':'material','name':'双子以太i结晶','img': 'assets/img/material/equip_exp/EE002.png'
    },
    /////////////////////////////////////////////////////////////
    {
        'id' : 'SM001','rare':4,'type':'material','name':'技能材料','img': 'assets/img/material/skill/SM001.png'
    },
    /////////////////////////////////////////////////////////////
    {
        'id' : 'UM001','rare':5,'type':'material','name':'相位偏转仪','img': 'assets/img/material/up_equip/UM001.png'
    },



    ///////////////////////////////////////////////////////////////////////////////////////////////



    {
        'id' : 'RW001','type':'weapon','name':'水妖精Ⅱ型','rare':4,'img': 'assets/img/weapon/rare/RW001.png'
    },
    {
        'id' : 'RW002','type':'weapon','name':'苗刀·电魂','rare':4,'img': 'assets/img/weapon/rare/RW002.png'
    },
    {
        'id' : 'RW003','type':'weapon','name':'马尔科夫A型','rare':4,'img': 'assets/img/weapon/rare/RW003.png'
    },
    {
        'id' : 'RW004','name':'超重剑·冲锋','type':'weapon','rare':4,'img': 'assets/img/weapon/rare/RW004.png'
    },
    {
        'id' : 'RW005','name':'黑色粉碎者','type':'weapon','rare':4,'img': 'assets/img/weapon/rare/RW005.png'
    },
    {
        'id' : 'RW006','name':'CAS-X 圣徒','type':'weapon','rare':4,'img': 'assets/img/weapon/rare/RW006.png'
    },
    {
        'id' : 'RW007','name':'群青风暴','type' : 'weapon','rare':4,'img': 'assets/img/weapon/rare/RW007.png'
    },
    ///////////////////////////////////////////////////////////////////
    {
        'id' : 'EW001','name':'2nd圣遗物','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW001.png'
    },
    {
        'id' : 'EW002','name':'索尔之锤','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW002.png'
    },
    {
        'id' : 'EW003','name':'超电磁手炮','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW003.png'
    },
    {
        'id' : 'EW004','name':'光与影','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW004.png'
    },
    {
        'id' : 'EW005','name':'连山守护','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW005.png'
    },
    {
        'id' : 'EW006','name':'烈焰毁灭者','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW006.png'
    },
    {
        'id' : 'EW007','name':'雷刀·鬼角','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW007.png'
    },
    {
        'id' : 'EW008','name':'能量跃迁者','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW008.png'
    },
    {
        'id' : 'EW009','name':'异型·赫尔之弓','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW009.png'
    },
    {
        'id' : 'EW010','name':'原型·妖精之弓','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW010.png'
    },

    {
        'id' : 'EW011','name':'3rd圣遗物','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW011.png'
    },
    {
        'id' : 'EW012','name':'磁暴·斩','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW012.png'
    },
    {
        'id' : 'EW013','name':'雷切','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW013.png'
    },
    {
        'id' : 'EW014','name':'虚无之刃','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW014.png'
    },
    {
        'id' : 'EW015','name':'高周波切割刀','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW015.png'
    },
    {
        'id' : 'EW016','name':'丹朱剑','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW016.png'
    },
    {
        'id' : 'EW017','name':'反力场打刀11式','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW017.png'
    },
    {
        'id' : 'EW018','name':'灵刀·樱吹雪','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW018.png'
    },
    {
        'id' : 'EW019','name':'仿灵刀·冰昙天','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW019.png'
    },
    {
        'id' : 'EW020','name':'妖刀·赤染樱','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW020.png'
    },
    {
        'id' : 'EW021','name':'藏锋','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW021.png'
    },
    {
        'id' : 'EW022','name':'妖精剑·希尔文','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW022.png'
    },
    {
        'id' : 'EW023','name':'雨后誓言','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW023.png'
    },
    {
        'id' : 'EW024','name':'5th圣遗物','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW024.png'
    },
    {
        'id' : 'EW025','name':'重装小兔19C','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW025.png'
    },
    {
        'id' : 'EW026','name':'百手巨人初型','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW026.png'
    },
    {
        'id' : 'EW027','name':'提尔的断腕','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW027.png'
    },
    {
        'id' : 'EW028','name':'尤弥尔之腕','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW028.png'
    },
    {
        'id' : 'EW029','name':'核心聚能炮Delta','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW029.png'
    },
    {
        'id' : 'EW030','name':'蚩尤巨炮','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW030.png'
    },
    {
        'id' : 'EW031','name':'量子毁灭者‖型','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW031.png'
    },
    {
        'id' : 'EW032','name':'歼星者19C','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW032.png'
    },
    {
        'id' : 'EW033','name':'火刀·真田','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW033.png'
    },
    {
        'id' : 'EW034','name':'7th圣遗物','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW034.png'
    },
    {
        'id' : 'EW035','name':'尼德霍格翼爪','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW035.png'
    },
    {
        'id' : 'EW036','name':'极光斩舰刀','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW036.png'
    },
    {
        'id' : 'EW037','name':'巴鲁蒙格','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW037.png'
    },
    {
        'id' : 'EW038','name':'日炎大剑','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW038.png'
    },
    {
        'id' : 'EW039','name':'鲜血之舞','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW039.png'
    },
    {
        'id' : 'EW040','name':'牛鬼切·长光','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW040.png'
    },
    {
        'id' : 'EW041','name':'犹大的誓约','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW041.png'
    },
    {
        'id' : 'EW042','name':'樱花的誓约','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW042.png'
    },
    {
        'id' : 'EW043','name':'仿犹大·血之拥抱','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW043.png'
    },
    {
        'id' : 'EW044','name':'11th圣遗物','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW044.png'
    },
    {
        'id' : 'EW045','name':'埃琉德尼尔','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW045.png'
    },
    {
        'id' : 'EW046','name':'百鸟问天','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW046.png'
    },
    {
        'id' : 'EW047','name':'断光之努亚达','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW047.png'
    },
    {
        'id' : 'EW048','name':'残火之鸢','type':'weapon','rare':5,'img': 'assets/img/weapon/epic/EW048.png'
    },



    ////////////////////////////////////////////////////////////////////////////////////



    {
        'id' : 'RS001','name':'时雨绮罗(上)','type':'stigmata','rare':4,'img': 'assets/img/stigma/rare/RS001.png'
    },
    {
        'id' : 'RS002','name':'时雨绮罗(上)','type':'stigmata','rare':4,'img': 'assets/img/stigma/rare/RS002.png'
    },
    {
        'id' : 'RS003','name':'时雨绮罗(上)','type':'stigmata','rare':4,'img': 'assets/img/stigma/rare/RS003.png'
    },
    {
        'id' : 'RS004','name':'阿提拉(上)','type':'stigmata','rare':4,'img': 'assets/img/stigma/rare/RS004.png'
    },
    {
        'id' : 'RS005','name':'阿提拉(上)','type':'stigmata','rare':4,'img': 'assets/img/stigma/rare/RS005.png'
    },
    {
        'id' : 'RS006','name':'阿提拉(上)','type':'stigmata','rare':4,'img': 'assets/img/stigma/rare/RS006.png'
    },
    {
        'id' : 'RS007','name':'特斯拉(上)','type':'stigmata','rare':4,'img': 'assets/img/stigma/rare/RS007.png'
    },
    {
        'id' : 'RS008','name':'特斯拉(上)','type':'stigmata','rare':4,'img': 'assets/img/stigma/rare/RS008.png'
    },
    {
        'id' : 'RS009','name':'特斯拉(上)','type':'stigmata','rare':4,'img': 'assets/img/stigma/rare/RS009.png'
    },
    ////////////////////////////////////////////////////////////////////
    {
        'id' : 'ES007','type':'stigmata','name':'克利奥帕特拉(上)','rare':5,'img': 'assets/img/stigma/epic/ES001.png'
    },
    {
        'id' : 'ES002','name':'克利奥帕特拉(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES002.png'
    },
    {
        'id' : 'ES003','name':'克利奥帕特拉(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES003.png'
    },
    {
        'id' : 'ES004','name':'叶卡捷琳娜(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES004.png'
    },
    {
        'id' : 'ES005','name':'叶卡捷琳娜(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES005.png'
    },
    {
        'id' : 'ES006','name':'叶卡捷琳娜(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES006.png'
    },
    {
        'id' : 'ES007','name':'姬轩辕(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES007.png'
    },
    {
        'id' : 'ES008','name':'姬轩辕(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES008.png'
    },
    {
        'id' : 'ES009','name':'姬轩辕(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES009.png'
    },
    {
        'id' : 'ES010','name':'伏羲(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES010.png'
    },
    {
        'id' : 'ES011','name':'伏羲(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES011.png'
    },
    {
        'id' : 'ES012','name':'伏羲(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES012.png'
    },
    {
        'id' : 'ES013','name':'女娲(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES013.png'
    },
    {
        'id' : 'ES014','name':'女娲(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES014.png'
    },
    {
        'id' : 'ES015','name':'女娲(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES015.png'
    },
    {
        'id' : 'ES016','name':'真田幸村(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES016.png'
    },
    {
        'id' : 'ES017','name':'真田幸村(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES017.png'
    },
    {
        'id' : 'ES018','name':'真田幸村(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES018.png'
    },
    {
        'id' : 'ES019','name':'神农(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES019.png'
    },
    {
        'id' : 'ES020','name':'神农(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES020.png'
    },
    {
        'id' : 'ES021','name':'神农(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES021.png'
    },
    {
        'id' : 'ES022','name':'莎士比亚(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES022.png'
    },
    {
        'id' : 'ES023','name':'莎士比亚(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES023.png'
    },
    {
        'id' : 'ES024','name':'莎士比亚(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES024.png'
    },
    {
        'id' : 'ES025','name':'薛定谔(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES025.png'
    },
    {
        'id' : 'ES026','name':'薛定谔(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES026.png'
    },
    {
        'id' : 'ES027','name':'薛定谔(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES027.png'
    },
    {
        'id' : 'ES028','name':'普朗克(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES028.png'
    },
    {
        'id' : 'ES029','name':'普朗克(上)','rare':5,'type':'stigmata','img': 'assets/img/stigma/epic/ES029.png'
    },
    {
        'id' : 'ES030','name':'普朗克(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES030.png'
    },
    {
        'id' : 'ES031','name':'牛顿(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES031.png'
    },
    {
        'id' : 'ES032','name':'牛顿(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES032.png'
    },
    {
        'id' : 'ES033','name':'牛顿(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES033.png'
    },
    {
        'id' : 'ES034','name':'德古拉(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES034.png'
    },
    {
        'id' : 'ES035','name':'德古拉(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES035.png'
    },
    {
        'id' : 'ES036','name':'德古拉(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES036.png'
    },
    {
        'id' : 'ES037','name':'开普勒(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES037.png'
    },
    {
        'id' : 'ES038','name':'开普勒(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES038.png'
    },
    {
        'id' : 'ES039','name':'开普勒(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES039.png'
    },
    {
        'id' : 'ES040','name':'布洛尼亚·黯影(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES040.png'
    },
    {
        'id' : 'ES041','name':'布洛尼亚·黯影(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES041.png'
    },
    {
        'id' : 'ES042','name':'布洛尼亚·黯影(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES042.png'
    },
    {
        'id' : 'ES043','name':'杏·玛尔(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES043.png'
    },
    {
        'id' : 'ES044','name':'杏·玛尔(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES044.png'
    },
    {
        'id' : 'ES045','name':'杏·玛尔(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES045.png'
    },
    {
        'id' : 'ES046','name':'齐格飞(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES046.png'
    },
    {
        'id' : 'ES047','name':'齐格飞(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES047.png'
    },
    {
        'id' : 'ES048','name':'齐格飞(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES048.png'
    },
    {
        'id' : 'ES049','name':'卡莲·颂歌(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES049.png'
    },
    {
        'id' : 'ES050','name':'卡莲·颂歌(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES050.png'
    },
    {
        'id' : 'ES051','name':'卡莲·颂歌(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES051.png'
    },
    {
        'id' : 'ES052','name':'李耳(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES052.png'
    },
    {
        'id' : 'ES053','name':'李耳(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES053.png'
    },
    {
        'id' : 'ES054','name':'李耳(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES054.png'
    },
    {
        'id' : 'ES055','name':'李耳·红(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES055.png'
    },
    {
        'id' : 'ES056','name':'李耳·红(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES056.png'
    },
    {
        'id' : 'ES057','name':'李耳·红(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES057.png'
    },
    {
        'id' : 'ES058','name':'泳装派对(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES058.png'
    },
    {
        'id' : 'ES059','name':'泳装派对(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES059.png'
    },
    {
        'id' : 'ES060','name':'泳装派对(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES060.png'
    },
    {
        'id' : 'ES061','name':'奥托·阿波卡利斯(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES061.png'
    },
    {
        'id' : 'ES062','name':'奥托·阿波卡利斯(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES062.png'
    },
    {
        'id' : 'ES063','name':'奥托·阿波卡利斯(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES063.png'
    },
    {
        'id' : 'ES064','name':'绯玉丸(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES064.png'
    },
    {
        'id' : 'ES065','name':'绯玉丸(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES065.png'
    },
    {
        'id' : 'ES066','name':'绯玉丸(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES066.png'
    },
    {
        'id' : 'ES067','name':'卡莲·神恩(上)','rare':5,'type':'stigmata','img': 'assets/img/stigma/epic/ES067.png'
    },
    {
        'id' : 'ES068','name':'卡莲·神恩(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES068.png'
    },
    {
        'id' : 'ES069','name':'卡莲·神恩(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES069.png'
    },
    {
        'id' : 'ES070','name':'爱因斯坦·乐队(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES070.png'
    },
    {
        'id' : 'ES071','name':'爱因斯坦·乐队(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES071.png'
    },
    {
        'id' : 'ES072','name':'爱因斯坦·乐队(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES072.png'
    },
    {
        'id' : 'ES073','name':'塞西莉亚(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES073.png'
    },
    {
        'id' : 'ES074','name':'塞西莉亚(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES074.png'
    },
    {
        'id' : 'ES075','name':'塞西莉亚(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES075.png'
    },
    {
        'id' : 'ES076','name':'长光(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES076.png'
    },
    {
        'id' : 'ES077','name':'长光(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES077.png'
    },
    {
        'id' : 'ES078','name':'长光(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES078.png'
    },
    {
        'id' : 'ES079','name':'西琳(上)','rare':5,'type':'stigmata','img': 'assets/img/stigma/epic/ES079.png'
    },
    {
        'id' : 'ES080','name':'西琳(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES080.png'
    },
    {
        'id' : 'ES081','name':'西琳(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES081.png'
    },
    {
        'id' : 'ES082','name':'浓姬(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES082.png'
    },
    {
        'id' : 'ES083','name':'浓姬(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES083.png'
    },
    {
        'id' : 'ES084','name':'浓姬(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES084.png'
    },
    {
        'id' : 'ES085','name':'特斯拉·乐队(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES085.png'
    },
    {
        'id' : 'ES086','name':'特斯拉·乐队(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES086.png'
    },
    {
        'id' : 'ES087','name':'特斯拉·乐队(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES087.png'
    },
    {
        'id' : 'ES088','name':'莫奈(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES088.png'
    },
    {
        'id' : 'ES089','name':'莫奈(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES089.png'
    },
    {
        'id' : 'ES090','name':'莫奈(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES090.png'
    },
    {
        'id' : 'ES091','name':'米开朗基罗(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES091.png'
    },
    {
        'id' : 'ES092','name':'米开朗基罗(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES092.png'
    },
    {
        'id' : 'ES093','name':'米开朗基罗(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES093.png'
    },
    {
        'id' : 'ES094','name':'薛定谔·乐队(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES094.png'
    },
    {
        'id' : 'ES095','name':'薛定谔·乐队(上)','rare':5,'type':'stigmata','img': 'assets/img/stigma/epic/ES095.png'
    },
    {
        'id' : 'ES096','name':'薛定谔·乐队(上)','type':'stigmata','rare':5,'img': 'assets/img/stigma/epic/ES096.png'
    },
    // weapons
    {'type':'weapon', 'name':'USP45', 'rare':2, 'img':'weapon/1.png'},
    {'type':'weapon', 'name':'势州村正', 'rare':2, 'img':'weapon/37.png'},
    {'type':'weapon', 'name':'SU-22榴弹炮', 'rare':2, 'img':'weapon/72.png'},
    {'type':'weapon', 'name':'大剑', 'rare':2, 'img':'weapon/claymore.png'},
    {'type':'weapon', 'name':'十字架', 'rare':2, 'img':'weapon/cross.jpg'},
    {'type':'weapon', 'name':'USP改', 'rare':2, 'img':'weapon/2.png'},
    {'type':'weapon', 'name':'M1911', 'rare':2, 'img':'weapon/3.png'},
    {'type':'weapon', 'name':'沙漠之鹰', 'rare':3, 'img':'weapon/4.png'},
    {'type':'weapon', 'name':'柯尔特', 'rare':3, 'img':'weapon/5.png'},
    {'type':'weapon', 'name':'柯尔特巨蟒', 'rare':3, 'img':'weapon/6.png'},
    {'type':'weapon', 'name':'堀川国广', 'rare':3, 'img':'weapon/katana_21.png'},
    {'type':'weapon', 'name':'妖刀雨村', 'rare':3, 'img':'weapon/katana_22.png'},
    {'type':'weapon', 'name':'妖刀村正', 'rare':3, 'img':'weapon/katana_23.png'},
    {'type':'weapon', 'name':'复合刀·朱雀', 'rare':3, 'img':'weapon/katana_24.png'},
    {'type':'weapon', 'name':'复合刀·柳叶', 'rare':3, 'img':'weapon/katana_25.png'},
    {'type':'weapon', 'name':'SU-30加农炮', 'rare':3, 'img':'weapon/cannon_21.png'},
    {'type':'weapon', 'name':'MiG-11诱导弹', 'rare':3, 'img':'weapon/cannon_22.png'},
    {'type':'weapon', 'name':'MiG-13火箭炮', 'rare':3, 'img':'weapon/cannon_23.png'},
    {'type':'weapon', 'name':'Mig-7激光炮', 'rare':3, 'img':'weapon/cannon_25.png'},
    {'type':'weapon', 'name':'狂怒者重炮', 'rare':3, 'img':'weapon/cannon_24.png'},
    {'type':'weapon', 'name':'融核动力剑初型', 'rare':3, 'img':'weapon/claymore_24.png'},
    {'type':'weapon', 'name':'混种大剑27式', 'rare':3, 'img':'weapon/claymore_22.png'},
    {'type':'weapon', 'name':'融核动力剑.改', 'rare':3, 'img':'weapon/claymore_23.png'},
    {'type':'weapon', 'name':'混种大剑16式', 'rare':3, 'img':'weapon/claymore_25.png'},
    {'type':'weapon', 'name':'混种大剑27式', 'rare':3, 'img':'weapon/claymore_21.png'},
    {'type':'weapon', 'name':'十字架·冰弹', 'rare':3, 'img':'weapon/cross_21.png'},
    {'type':'weapon', 'name':'火焰弹发射台', 'rare':3, 'img':'weapon/cross_22.png'},
    {'type':'weapon', 'name':'破甲弹发射台', 'rare':3, 'img':'weapon/cross_23.png'},
    
    // stigmatas
    {'type':'stigmata', 'name':'莎莲娜 (上)', 'rare':2, 'img':'stigmata/Salerno-1_thumb.png'},
    {'type':'stigmata', 'name':'莎莲娜 (中)', 'rare':2, 'img':'stigmata/Salerno-2_thumb.png'},
    {'type':'stigmata', 'name':'莎莲娜 (下)', 'rare':2, 'img':'stigmata/Salerno-3_thumb.png'},
    {'type':'stigmata', 'name':'夏洛特(上)', 'rare':2, 'img':'stigmata/Charlotte-1_thumb.png'},
    {'type':'stigmata', 'name':'夏洛特(中)', 'rare':2, 'img':'stigmata/Charlotte-2_thumb.png'},
    {'type':'stigmata', 'name':'夏洛特(下)', 'rare':2, 'img':'stigmata/Charlotte-3_thumb.png'},
    {'type':'stigmata', 'name':'汉娜 (上)', 'rare':3, 'img':'stigmata/Hanna-1_thumb.png'},
    {'type':'stigmata', 'name':'汉娜 (中)', 'rare':3, 'img':'stigmata/Hanna-2_thumb.png'},
    {'type':'stigmata', 'name':'汉娜 (下)', 'rare':3, 'img':'stigmata/Hanna-3_thumb.png'},
    {'type':'stigmata', 'name':'奥托薇拉 (上)', 'rare':3, 'img':'stigmata/Vera-1_thumb.png'},
    {'type':'stigmata', 'name':'奥托薇拉 (中)', 'rare':3, 'img':'stigmata/Vera-2_thumb.png'},
    {'type':'stigmata', 'name':'奥托薇拉 (下)', 'rare':3, 'img':'stigmata/Vera-3_thumb.png'},
    {'type':'stigmata', 'name':'露西亚(上)', 'rare':3, 'img':'stigmata/Lucia-1_thumb.png'},
    {'type':'stigmata', 'name':'露西亚(中)', 'rare':3, 'img':'stigmata/Lucia-2_thumb.png'},
    {'type':'stigmata', 'name':'露西亚(下)', 'rare':3, 'img':'stigmata/Lucia-3_thumb.png'},
    {'type':'stigmata', 'name':'薇欧拉 (上)', 'rare':3, 'img':'stigmata/Viola-1_thumb.png'},
    {'type':'stigmata', 'name':'薇欧拉 (中)', 'rare':3, 'img':'stigmata/Viola-2_thumb.png'},
    {'type':'stigmata', 'name':'薇欧拉 (下)', 'rare':3, 'img':'stigmata/Viola-3_thumb.png'},
    {'type':'stigmata', 'name':'维多利亚 (上)', 'rare':3, 'img':'stigmata/Victoria-1_thumb.png'},
    {'type':'stigmata', 'name':'维多利亚 (中)', 'rare':3, 'img':'stigmata/Victoria-2_thumb.png'},
    {'type':'stigmata', 'name':'维多利亚 (下)', 'rare':3, 'img':'stigmata/Victoria-3_thumb.png'},
    ];


var gacha_dist_normal = {
    's_valkyrie' : 0.94, // 1.5 --> 0.94
    's_valkyrie_piece': 1.27,
    'a_valkyrie': 8.46,  // 13.5 --> 8.46
    'a_valkyrie_piece': 10.20,
    'b_valkyrie': 5.5,
    's_weapon': 0.46,
    's_stigmata': 0.73,
    'a_weapon': 7.50,
    'a_stigmata': 22.50,
    'b_weapon': 12.44,
    'b_stigmata': 24.40,
    'pickups': [],
    'material': 0,
    'special': false,
    'ensure_type': 'valkyrie',
    'ensure_level': 4,
};

var gacha_dist_valkyrie = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, S_piece, 
    // A, A_piece
    'pickups': [
        0.94, 3.0,   // 1.5 --> 0.94
        2.82, 4.8, 0, 0,   // 4.5 --> 2.82
        1.88, 4.0, 1.88, 4.0, 1.88, 4.0,   // 3 --> 1.88
    ],
    'material': 66,
    'special': false,
    'ensure_type': 'valkyrie',
    'ensure_level': 4,
};

var gacha_dist_valkyrie2 = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, S_piece, 
    // A, A_piece
    'pickups': [
        0.94, 3.0,   // 1.5 --> 0.94
        2.82, 4.8, 2.82, 4.8,   // 4.5 --> 2.82
        1.41, 1.41, 1.41, 1.41, 2.82, 0.94,   // 2.25 --> 1.41
    ],
    'material': 57,
    'special': false,
    'ensure_type': 'valkyrie',
    'ensure_level': 4,
};

var gacha_dist_weapon = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 16.275,
    'a_stigmata': 23.912,
    'b_weapon': 29.239,
    'b_stigmata': 22.179,
    // weapon, stigmata
    // weapon_others,
    // stigmata_others
    'pickups': [
        0.97, 0.485, 0.485, 0.485,
        0.16,0.16,0.16,0.16,0.16,0.16,
        0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,
    ],
    'material': 0,
    'special': false,
    'ensure_type': 'pickups',
    'ensure_level': 5,
};

var gacha_jap_dist_normal = {
    's_valkyrie' : 1.50,
    's_valkyrie_piece': 1.27,
    'a_valkyrie': 13.50,
    'a_valkyrie_piece': 10.20,
    'b_valkyrie': 5.5,
    's_weapon': 0.46,
    's_stigmata': 0.73,
    'a_weapon': 7.50,
    'a_stigmata': 22.50,
    'b_weapon': 12.44,
    'b_stigmata': 24.40,
    'pickups': [],
    'material': 0,
    'special': false,
    'ensure_type': null,
    'ensure_level': 4,
};

var gacha_jap_dist_valkyrie = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, S_piece, 
    // A, A_piece
    'pickups': [
        1.5, 2.5,
        4.5, 7.5, 0, 0, //4.5, 7.5,
        3.0, 3.0, 3.0, 3.0, 3.0, 3.0,
    ],
    'material': 66,
    'special': false,
    'ensure_type': null,
    'ensure_level': 4,
};

var gacha_jap_dist_valkyrie2 = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, S_piece, 
    // A, A_piece
    'pickups': [
        1.5, 2.5,
        4.5, 7.5, 4.5, 7.5, //4.5, 7.5,
        2.25, 2.25, 2.25, 2.25, 4.5, 1.5,
    ],
    'material': 57,
    'special': false,
    'ensure_type': null,
    'ensure_level': 4,
};

var gacha_jap_dist_weapon = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 15.275,
    'a_stigmata': 22.912,
    'b_weapon': 28.239,
    'b_stigmata': 21.179,
    // weapon, stigmata
    // weapon_others,
    // stigmata_others
    'pickups': [
        2.48, 1.24, 1.24, 1.24,
        0.413,0.413,0.413,0.413,0.413,0.413,
        0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.31,
    ],
    'material': 0,
    'special': false,
    'ensure_type': null,
    'ensure_level': 5,
};

/*
 * utility function
 */

function get_gacha_dist(type, all_blue)
{
    var server_normal = {
        'normal': gacha_dist_normal,
        'extended': gacha_dist_valkyrie,
        'extended2': gacha_dist_valkyrie2,
        'weapon': gacha_dist_weapon
    };
    var server_jap = {
        'normal': gacha_jap_dist_normal,
        'extended': gacha_jap_dist_valkyrie,
        'extended2': gacha_jap_dist_valkyrie2,
        'weapon': gacha_jap_dist_weapon
    };
    if (all_blue)
    {
        return server_jap[type];
    } else {
        return server_normal[type];
    }
}

function get_object_idx(name)
{
    for (var i=0; i<ids.length; i++)
    {
        if (ids[i].name == name)
            return i;
    }
    console.error('cannot find name: ' + name);
    return -1;
}




/*
 * main class Gacha
 */

var Gacha = function(dist, pickup_ids)
{
    /*
     * pickup object is excluded from general gacha!
     * (calculated with exclusive probability)
     */

    // ASSERT
    if (dist.pickups.length != pickup_ids.length)
    {
        console.error('pickup length mismatch!!');
        return;
    }

    // ensure 4-STAR gacha per 10 count
    var count = 0;
    // is previously choosed one pick-up?
    var is_pickup = false;
    var ensure_type = null;
    var ensure_level = 4;

    // generate pickup table, according to given distribution
    var range_table = {
        'valkyrie': [0,0,0,0,0],
        'valkyrie_piece': [0,0,0,0,0],
        'weapon': [0,0,0,0,0],
        'stigmata': [0,0,0,0,0],
        'pickups': [ ],
    };
    var pickup_table = {
        'valkyrie': [ [ ],[ ],[ ],[ ],[ ] ],
        'valkyrie_piece': [ [ ],[ ],[ ],[ ],[ ] ],
        'weapon': [ [ ],[ ],[ ],[ ],[ ] ],
        'stigmata': [ [ ],[ ],[ ],[] ,[ ] ],
        'material': [ ],
        'pickups': [ ],
    };
    // generate: category range.
    var prob_accumlated = 0;
    var prob_sum = 0;
    var prob_recalc = {'pickups':[]};
    var prob_dicts = [
        's_valkyrie','a_valkyrie','b_valkyrie',
        's_valkyrie_piece','a_valkyrie_piece',
        's_weapon', 's_stigmata','a_weapon', 'a_stigmata','b_weapon', 'b_stigmata',
        'material',
    ];
    ensure_type = dist['ensure_type'];
    ensure_level = dist['ensure_level'];
    for (var i=0; i<prob_dicts.length; i++)
    {
        var d = prob_dicts[i];
        prob_sum += dist[d];
    }
    for (var i=0; i<dist['pickups'].length; i++)
    {
        prob_sum += dist['pickups'][i];
    }
    for (var i=0; i<prob_dicts.length; i++)
    {
        var d = prob_dicts[i];
        prob_recalc[d] = dist[d] / prob_sum;
    }
    for (var i=0; i<dist['pickups'].length; i++)
    {
        prob_recalc['pickups'].push( dist['pickups'][i] / prob_sum );
    }
    prob_accumlated += prob_recalc['b_valkyrie'];
    range_table['valkyrie'][2] = prob_accumlated;
    prob_accumlated += prob_recalc['a_valkyrie'];
    range_table['valkyrie'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_valkyrie'];
    range_table['valkyrie'][4] = prob_accumlated;
    prob_accumlated += prob_recalc['a_valkyrie_piece'];
    range_table['valkyrie_piece'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_valkyrie_piece'];
    range_table['valkyrie_piece'][4] = prob_accumlated;
    prob_accumlated += prob_recalc['b_weapon'];
    range_table['weapon'][2] = prob_accumlated;
    prob_accumlated += prob_recalc['a_weapon'];
    range_table['weapon'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_weapon'];
    range_table['weapon'][4] = prob_accumlated;
    prob_accumlated += prob_recalc['b_stigmata'];
    range_table['stigmata'][2] = prob_accumlated;
    prob_accumlated += prob_recalc['a_stigmata'];
    range_table['stigmata'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_stigmata'];
    range_table['stigmata'][4] = prob_accumlated;
    // generate: pickup
    for (var i=0; i<prob_recalc['pickups'].length; i++)
    {
        prob_accumlated += prob_recalc['pickups'][i];
        range_table['pickups'].push( prob_accumlated );
    }
    // generate: table lists
    for (var i=0; i<ids.length; i++)
    {
        var obj = ids[i];
        if (i in pickup_ids) { continue; }       // exclude pickup from general list
        if (obj.type == 'material')
        {
            // material - treated differently
            pickup_table[ obj.type ].push(obj);
            continue;
        }
        if (dist.special == false && obj.special == true) {
            // exclude some special characters (ex: sakura yae)
            continue;
        }
        try{pickup_table[ obj.type ][ obj.rare -1 ].push(obj);}
        catch(err){console.log(obj)}
    }
    for (var i=0; i<pickup_ids.length; i++)
    {
        pickup_table['pickups'].push( [ ids[ pickup_ids[i] ] ] );
    }
    console.log(range_table);
    console.log(pickup_table);

    var gacha = new function() {
        this._gacha = function (rnd_val) {
            var types = ['valkyrie', 'valkyrie_piece', 'weapon', 'stigmata', 'pickups'];
            var _rnd = (rnd_val===undefined)?Math.random():rnd_val;
            for (var i=0; i<types.length; i++) {
                var t = range_table[types[i]];
                for (var j=0; j< t.length; j++ )
                {
                    // is category in range?
                    if (_rnd <= t[j])
                    {
                        var lst = pickup_table[types[i]][j];
                        // prevent bug: if indicated table is empty,
                        // then exit loop
                        if (lst.length == 0)
                        {
                            console.error('indicated table is empty: '+types[i]+','+j);
                            break;
                        }
                        // if then, select in that category!
                        var _rnd = Math.random();
                        var _idx = Math.floor(lst.length * _rnd);
                        var obj = lst[_idx];
                        // if valkyrie & rank >= 4,
                        // clear count.
                        if ((types[i] == ensure_type || obj.type == ensure_type) && obj.rare >= ensure_level)
                        {
                            //console.log('가챠 스택 초기화');
                            count = 0;
                            is_pickup = true;
                        } else {
                            is_pickup = false;
                        }
                        return obj;
                    }
                }
            }
            // nothing? then you're in material!
            lst = pickup_table['material'];
            var _rnd = Math.random();
            var _idx = Math.floor(lst.length * _rnd);
            return lst[_idx];
        }

        this.ensure_gacha = function() {
            //return this._gacha(4-1);
            // repeat gacha until get 4 STAR
            while (true)
            {
                var g = this._gacha();
                if (is_pickup)
                    return g;
            }
        }

        this.gacha = function() {
            count ++;
            if (count % 10 == 0 && ensure_type != null) {
                count = 0;
                //console.log('확정 가챠 수행');
                return this.ensure_gacha();
            }
            return this._gacha();
        }
        
        this.gacha_material = function() {
            return this._gacha(999);
        }

        /*
        // re-create object instead of running clear method.
        this.clear = function() {
            count = 0;
        }
        */
    }
    return gacha;
};







/* only for probability test */
function _gacha_test()
{
	var _gacha_stat = {};
	var _gacha_stat_init = function()
	{
		_gacha_stat = {}
	}
	var _gacha_stat_append = function(g)
	{
		var type = g['type'] + g['rare'];
		if (!(type in _gacha_stat))
		{
			_gacha_stat[type] = 0;
		}
		_gacha_stat[type] += 1;
	}
	var _gacha_stat_str = function()
	{
		var tot = 0;
		var g = {};
		for (var k in _gacha_stat)
		{
			tot += _gacha_stat[k];
		}
		for (var k in _gacha_stat)
		{
			g[k] = _gacha_stat[k] / tot;
		}
		var msg = 'valkyrie-5: ' + g['valkyrie5'] + '\n' +
			'valkyrie-4: ' + g['valkyrie4'] + '\n' +
			'weapon-5: ' + g['weapon5'] + '\n' +
			'weapon-4: ' + g['weapon4'] + '\n' +
			'stigmata-5: ' + g['stigmata5'] + '\n' +
			'stigmata-4: ' + g['stigmata4'];
		return msg
	}

	//pickup_weapon
	//pickup_extended
	var epoch = 10000;

	var _g = Gacha(get_gacha_dist('normal', false), []);
	console.log('testing kor ver probability ...');	
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_normal_kor_res = _gacha_stat_str();

	_gacha = Gacha(get_gacha_dist('normal', true), []);
	console.log('testing jap ver probability ...');
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_normal_jap_res = _gacha_stat_str();



	var _g = Gacha(get_gacha_dist('weapon', false), pickup_weapon);
	console.log('testing kor ver probability ...');	
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_w_kor_res = _gacha_stat_str();

	_gacha = Gacha(get_gacha_dist('weapon', true), pickup_weapon);
	console.log('testing jap ver probability ...');
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_w_jap_res = _gacha_stat_str();



	var _g = Gacha(get_gacha_dist('extended', false), pickup_extended);
	console.log('testing kor ver probability ...');	
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_ex_kor_res = _gacha_stat_str();

	_gacha = Gacha(get_gacha_dist('extended', true), pickup_extended);
	console.log('testing jap ver probability ...');
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_ex_jap_res = _gacha_stat_str();



	var _g = Gacha(get_gacha_dist('extended2', false), pickup_extended);
	console.log('testing kor ver probability ...');	
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_ex2_kor_res = _gacha_stat_str();

	_gacha = Gacha(get_gacha_dist('extended2', true), pickup_extended);
	console.log('testing jap ver probability ...');
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_ex2_jap_res = _gacha_stat_str();



	console.log('NORMAL KOR');
	console.log(gacha_normal_kor_res);
	console.log('NORMAL JAP');
	console.log(gacha_normal_jap_res);

	console.log('WEAPON KOR');
	console.log(gacha_w_kor_res);
	console.log('WEAPON JAP');
	console.log(gacha_w_jap_res);

	console.log('EX KOR');
	console.log(gacha_ex_kor_res);
	console.log('EX JAP');
	console.log(gacha_ex_jap_res);

	console.log('EX2 KOR');
	console.log(gacha_ex2_kor_res);
	console.log('EX2 JAP');
	console.log(gacha_ex2_jap_res);
}