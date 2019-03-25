/*
Navicat MySQL Data Transfer

Source Server         : 12w
Source Server Version : 50724
Source Host           : localhost:3306
Source Database       : kxrdb

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2019-03-23 20:55:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for gwc
-- ----------------------------
DROP TABLE IF EXISTS `gwc`;
CREATE TABLE `gwc` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `num` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `nums` int(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of gwc
-- ----------------------------
INSERT INTO `gwc` VALUES ('2', 'P000025x', '320', '希爱力 他达拉非..', '880.23', '1');
INSERT INTO `gwc` VALUES ('6', 'K9904025x', '320', '康美枸杞子150g..', '59.01', '1');
INSERT INTO `gwc` VALUES ('7', 'O0123025x', '320', '【顺丰包邮】北京同仁堂冬虫夏草', '118.09', '1');
INSERT INTO `gwc` VALUES ('8', 'J45884025x', '320', '康美 党参片 15..', '123.89', '1');

-- ----------------------------
-- Table structure for indexgoodslist
-- ----------------------------
DROP TABLE IF EXISTS `indexgoodslist`;
CREATE TABLE `indexgoodslist` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `products` varchar(255) NOT NULL,
  `info` varchar(255) NOT NULL,
  `price` float(10,2) NOT NULL,
  `marketprice` float(10,2) DEFAULT NULL,
  `discount` float(10,2) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of indexgoodslist
-- ----------------------------
INSERT INTO `indexgoodslist` VALUES ('1', 'images/ea14f8a9787340eb82016bd2a9f787a4.jpg', '万艾可 枸橼酸西地..', '10余年历史见证就..', '115.01', '150.99', '35.98', 'Q27504025x');
INSERT INTO `indexgoodslist` VALUES ('2', 'images/9ac4eced00f5444d97414905735d8530.jpg', '希爱力 他达拉非..', '用于勃起功能障碍', '880.23', '100.98', '22.75', 'P000025x');
INSERT INTO `indexgoodslist` VALUES ('3', 'images/b0433348437d4bba96bd0d0f266bf650.jpg', '启悦 非那雄胺片..', '用于治疗男性雄激素..', '480.02', '500.03', '20.01', 'S099904025x');
INSERT INTO `indexgoodslist` VALUES ('4', 'images/2c4c1c4376df495cb6d8b0bddd6c269d.jpg', '同仁堂 六味地黄丸..', '阴补肾。用于肾阴亏损', '15.02', '20.03', '5.01', 'Z08875025x');
INSERT INTO `indexgoodslist` VALUES ('5', 'images/6800257b6406433e8dadab752fb12c48.jpg', '北京同仁堂总统西洋..', '非质量问题，不支持..', '518.04', '530.05', '12.01', 'H2311004025x');
INSERT INTO `indexgoodslist` VALUES ('6', 'images/60d4c5fd2978433a85e5c3e5bd61a542.jpg', '康美枸杞子150g..', '滋补肝肾，益精明目..', '59.01', '60.02', '1.01', 'K9904025x');
INSERT INTO `indexgoodslist` VALUES ('7', 'images/aff826f1779945c18a7146ca9d057d5a.jpg', '【顺丰包邮】北京同仁堂冬虫夏草', '非质量问题，不支持退款', '118.09', '120.09', '2.01', 'O0123025x');
INSERT INTO `indexgoodslist` VALUES ('8', 'images/46e511a349ed4f76b4eb61e9638b0a26.jpg', '康美 党参片 15..', '健脾益肺，养血生津..', '123.89', '150.89', '27.09', 'J45884025x');
INSERT INTO `indexgoodslist` VALUES ('9', 'images/8bbc76422edc4b499e8218eda23748a6.jpg', '999感冒灵颗粒', '用于感冒引起的头痛', '9.99', '15.99', '6.99', 'V8972025x');
INSERT INTO `indexgoodslist` VALUES ('10', 'images/8d7210bdee3a48e98502f7c7a8f2f889.jpg', '洁尔阴洗液', '非质量问题，不支持退换', '23.99', '25.01', '2.88', 'T09025kk');
INSERT INTO `indexgoodslist` VALUES ('11', 'images/26a75992c7364367b09fbdb52daa35fe.JPG', '淑女早孕试纸', '人绒毛膜促性腺激素检查试纸', '28.02', '38.03', '10.01', 'T0f15222');
INSERT INTO `indexgoodslist` VALUES ('12', 'images/36a6a00f81a54c32ac9524a8f6c7b119.jpg', '杜密克乳果糖口服溶液', '用于慢性功能性便秘', '10.23', '15.24', '5.01', 'X2100085');
INSERT INTO `indexgoodslist` VALUES ('13', 'images/40acc2fb0d374271af55b6bddaab82e7.JPG', '北京同仁堂补中益气丸', '主要用于治疗脾胃虚弱', '33.99', '35.99', '2.01', 'P314765');
INSERT INTO `indexgoodslist` VALUES ('14', 'images/42eaa1c2e4bb49ee916d54d000a99cb8.jpg', '达因伊可新维生素AD滴剂', '用于预防和治疗维生素缺乏症', '89.99', '99.10', '10.01', 'K09075768666');
INSERT INTO `indexgoodslist` VALUES ('15', 'images/60af802574c847fc814e1835878f8388.jpg', '草晶华破壁草本淫羊藿', '增强免疫力，延缓衰老', '189.02', '120.03', '30.01', 'N058572565786');
INSERT INTO `indexgoodslist` VALUES ('16', 'images/67be2936609a49ad879159b235daef09.JPG', '贺普丁拉米夫定片', '本品主要成份为拉米夫定', '69.35', '75.36', '6.01', 'M1157858');
INSERT INTO `indexgoodslist` VALUES ('17', 'images/70b660b0b0124fef8623dc8ea9e5d3a1.jpg', '同仁堂乌鸡白凤丸', '补气养血 调经止带', '36.01', '59.02', '23.01', 'P255278');
INSERT INTO `indexgoodslist` VALUES ('18', 'images/80d2ef45c87b4fc28a1afa6f45c3d38f.jpg', '定坤丹', '美容养颜 补气养血', '55.03', '55.99', '0.96', 'P09004025x77');
INSERT INTO `indexgoodslist` VALUES ('19', 'images/84f84efc273640d3b3bf137cd6bfa097.jpg', '康美中药黄芪', '非质量问题不支持退换', '159.06', '168.07', '7.01', 'I478785ss');
INSERT INTO `indexgoodslist` VALUES ('20', 'images/90f46463f6874aedbf8b2710390e3405.jpg', '21金维他', '补充微量元素和维生素', '189.22', '190.99', '1.77', 'Y1775862');
INSERT INTO `indexgoodslist` VALUES ('21', 'images/94fd948b9c294cf1a89e8c7fe75f3cec.jpg', '斯利安叶酸片', '补充叶酸多维保证胎儿营养', '93.09', '120.12', '7.11', 'Y175785587');
INSERT INTO `indexgoodslist` VALUES ('22', 'images/96dd15c5469542ed9631fcecc48010b8.jpg', '葡立盐酸氨基葡萄糖胶囊', '买3盒赠麝香壮骨膏', '99.09', '150.99', '51.01', 'Y58675252a');
INSERT INTO `indexgoodslist` VALUES ('23', 'images/294da4ed3f434c949dbadee5c802c0fc.jpg', '达喜铝碳酸镁片', '用于慢性胃炎 缓解胃不适', '49.14', '59.16', '10.02', 'E58142552');
INSERT INTO `indexgoodslist` VALUES ('24', 'images/654e60aec7aa41fab8a2b9b23a2b4e4c.jpg', '达克宁硝酸咪康栓', '治疗念珠菌性外阴阴道炎', '99.06', '120.08', '21.02', 'S0904745415z');
INSERT INTO `indexgoodslist` VALUES ('25', 'images/5758c501eac44909827f35eba25d65e1.jpg', '羚锐关节止痛膏', '活血散瘀，温经镇痛。用于寒湿瘀阻经络所致风湿关节痛及关节扭伤。', '26.59', '35.66', '9.55', 'A0900784415');
INSERT INTO `indexgoodslist` VALUES ('26', 'images/8908bfcfbc304777bcefffc2165fb493.jpg', '优思明屈螺酮决雌醇片', '用于女性避孕口服', '56.23', '85.99', '29.26', 'A08282025');
INSERT INTO `indexgoodslist` VALUES ('27', 'images/557008f505bd40d29b0da77cf6ed697e_800x600.jpg', '布地奈德鼻喷雾剂', '此类药物可减轻鼻粘膜充血和肿胀，缓解鼻塞症状', '69.01', '150.26', '86.08', 'F08777725x');
INSERT INTO `indexgoodslist` VALUES ('28', 'images/616429f69b6c44728c7a5c052a7d56d8.jpg', '黄氏响声丸', '用于治疗急，慢性喉炎', '25.69', '50.99', '25.31', 'D96929255');
INSERT INTO `indexgoodslist` VALUES ('29', 'images/9744721b75e643bd96da82b714f11bc8.jpg', '麻仁润肠丸', '具有润肠通便之功效。主治肠胃积热胸腹胀满，大便秘结', '14.59', '56.23', '42.23', 'D09985025x');
INSERT INTO `indexgoodslist` VALUES ('30', 'images/8257450992b144cfafe5bc7a42c8e3e7.jpg', '葵花小儿肺热咳喘口服液', '清热解毒，宣肺化痰', '15.23', '36.66', '21.43', 'Botob12515');
INSERT INTO `indexgoodslist` VALUES ('31', 'images/2397879590db4295b7191b7345020cf9.jpg', '妇科千金片', '清热除湿，益气化瘀', '36.66', '56.33', '10.77', 'C09025x');
INSERT INTO `indexgoodslist` VALUES ('32', 'images/9524460182574abea8050397dca0db4b.jpg', '云南白药酊', '活血散瘀，消肿止痛 用于跌打损伤', '30.56', '80.69', '50.13', 'A090zzz000');

-- ----------------------------
-- Table structure for sygoodslist
-- ----------------------------
DROP TABLE IF EXISTS `sygoodslist`;
CREATE TABLE `sygoodslist` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `products` varchar(255) NOT NULL,
  `info` varchar(255) NOT NULL,
  `price` float(10,2) NOT NULL,
  `marketprice` float(10,2) DEFAULT NULL,
  `discount` float(10,2) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of sygoodslist
-- ----------------------------
INSERT INTO `sygoodslist` VALUES ('1', '../images/ea14f8a9787340eb82016bd2a9f787a4.jpg', '万艾可 枸橼酸西地..', '10余年历史见证就..', '115.01', '150.99', '35.98', 'Q27504025x');
INSERT INTO `sygoodslist` VALUES ('2', '../images/9ac4eced00f5444d97414905735d8530.jpg', '希爱力 他达拉非..', '用于勃起功能障碍', '880.23', '100.98', '22.75', 'P000025x');
INSERT INTO `sygoodslist` VALUES ('3', '../images/b0433348437d4bba96bd0d0f266bf650.jpg', '启悦 非那雄胺片..', '用于治疗男性雄激素..', '480.02', '500.03', '20.01', 'S099904025x');
INSERT INTO `sygoodslist` VALUES ('4', '../images/2c4c1c4376df495cb6d8b0bddd6c269d.jpg', '同仁堂 六味地黄丸..', '阴补肾。用于肾阴亏损', '15.02', '20.03', '5.01', 'Z08875025x');
INSERT INTO `sygoodslist` VALUES ('5', '../images/6800257b6406433e8dadab752fb12c48.jpg', '北京同仁堂总统西洋..', '非质量问题，不支持..', '518.04', '530.05', '12.01', 'H2311004025x');
INSERT INTO `sygoodslist` VALUES ('6', '../images/60d4c5fd2978433a85e5c3e5bd61a542.jpg', '康美枸杞子150g..', '滋补肝肾，益精明目..', '59.01', '60.02', '1.01', 'K9904025x');
INSERT INTO `sygoodslist` VALUES ('7', '../images/aff826f1779945c18a7146ca9d057d5a.jpg', '【顺丰包邮】北京同仁堂冬虫夏草', '非质量问题，不支持退款', '118.09', '120.09', '2.01', 'O0123025x');
INSERT INTO `sygoodslist` VALUES ('8', '../images/46e511a349ed4f76b4eb61e9638b0a26.jpg', '康美 党参片 15..', '健脾益肺，养血生津..', '123.89', '150.89', '27.09', 'J45884025x');
INSERT INTO `sygoodslist` VALUES ('9', '../images/8bbc76422edc4b499e8218eda23748a6.jpg', '999感冒灵颗粒', '用于感冒引起的头痛', '9.99', '15.99', '6.99', 'V8972025x');
INSERT INTO `sygoodslist` VALUES ('10', '../images/8d7210bdee3a48e98502f7c7a8f2f889.jpg', '洁尔阴洗液', '非质量问题，不支持退换', '23.99', '25.01', '2.88', 'T09025kk');
INSERT INTO `sygoodslist` VALUES ('11', '../images/26a75992c7364367b09fbdb52daa35fe.JPG', '淑女早孕试纸', '人绒毛膜促性腺激素检查试纸', '28.02', '38.03', '10.01', 'T0f15222');
INSERT INTO `sygoodslist` VALUES ('12', '../images/36a6a00f81a54c32ac9524a8f6c7b119.jpg', '杜密克乳果糖口服溶液', '用于慢性功能性便秘', '10.23', '15.24', '5.01', 'X2100085');
INSERT INTO `sygoodslist` VALUES ('13', '../images/40acc2fb0d374271af55b6bddaab82e7.JPG', '北京同仁堂补中益气丸', '主要用于治疗脾胃虚弱', '33.99', '35.99', '2.01', 'P314765');
INSERT INTO `sygoodslist` VALUES ('14', '../images/42eaa1c2e4bb49ee916d54d000a99cb8.jpg', '达因伊可新维生素AD滴剂', '用于预防和治疗维生素缺乏症', '89.99', '99.10', '10.01', 'K09075768666');
INSERT INTO `sygoodslist` VALUES ('15', '../images/60af802574c847fc814e1835878f8388.jpg', '草晶华破壁草本淫羊藿', '增强免疫力，延缓衰老', '189.02', '120.03', '30.01', 'N058572565786');
INSERT INTO `sygoodslist` VALUES ('16', '../images/67be2936609a49ad879159b235daef09.JPG', '贺普丁拉米夫定片', '本品主要成份为拉米夫定', '69.35', '75.36', '6.01', 'M1157858');
INSERT INTO `sygoodslist` VALUES ('17', '../images/70b660b0b0124fef8623dc8ea9e5d3a1.jpg', '同仁堂乌鸡白凤丸', '补气养血 调经止带', '36.01', '59.02', '23.01', 'P255278');
INSERT INTO `sygoodslist` VALUES ('18', '../images/80d2ef45c87b4fc28a1afa6f45c3d38f.jpg', '定坤丹', '美容养颜 补气养血', '55.03', '55.99', '0.96', 'P09004025x77');
INSERT INTO `sygoodslist` VALUES ('19', '../images/84f84efc273640d3b3bf137cd6bfa097.jpg', '康美中药黄芪', '非质量问题不支持退换', '159.06', '168.07', '7.01', 'I478785ss');
INSERT INTO `sygoodslist` VALUES ('20', '../images/90f46463f6874aedbf8b2710390e3405.jpg', '21金维他', '补充微量元素和维生素', '189.22', '190.99', '1.77', 'Y1775862');
INSERT INTO `sygoodslist` VALUES ('21', '../images/94fd948b9c294cf1a89e8c7fe75f3cec.jpg', '斯利安叶酸片', '补充叶酸多维保证胎儿营养', '93.09', '120.12', '7.11', 'Y175785587');
INSERT INTO `sygoodslist` VALUES ('22', '../images/96dd15c5469542ed9631fcecc48010b8.jpg', '葡立盐酸氨基葡萄糖胶囊', '买3盒赠麝香壮骨膏', '99.09', '150.99', '51.01', 'Y58675252a');
INSERT INTO `sygoodslist` VALUES ('23', '../images/294da4ed3f434c949dbadee5c802c0fc.jpg', '达喜铝碳酸镁片', '用于慢性胃炎 缓解胃不适', '49.14', '59.16', '10.02', 'E58142552');
INSERT INTO `sygoodslist` VALUES ('24', '../images/654e60aec7aa41fab8a2b9b23a2b4e4c.jpg', '达克宁硝酸咪康栓', '治疗念珠菌性外阴阴道炎', '99.06', '120.08', '21.02', 'S0904745415z');
INSERT INTO `sygoodslist` VALUES ('25', '../images/5758c501eac44909827f35eba25d65e1.jpg', '羚锐关节止痛膏', '活血散瘀，温经镇痛。用于寒湿瘀阻经络所致风湿关节痛及关节扭伤。', '26.59', '35.66', '9.55', 'A0900784415');
INSERT INTO `sygoodslist` VALUES ('26', '../images/8908bfcfbc304777bcefffc2165fb493.jpg', '优思明屈螺酮决雌醇片', '用于女性避孕口服', '56.23', '85.99', '29.26', 'A08282025');
INSERT INTO `sygoodslist` VALUES ('27', '../images/557008f505bd40d29b0da77cf6ed697e_800x600.jpg', '布地奈德鼻喷雾剂', '此类药物可减轻鼻粘膜充血和肿胀，缓解鼻塞症状', '69.01', '150.26', '86.08', 'F08777725x');
INSERT INTO `sygoodslist` VALUES ('28', '../images/616429f69b6c44728c7a5c052a7d56d8.jpg', '黄氏响声丸', '用于治疗急，慢性喉炎', '25.69', '50.99', '25.31', 'D96929255');
INSERT INTO `sygoodslist` VALUES ('29', '../images/9744721b75e643bd96da82b714f11bc8.jpg', '麻仁润肠丸', '具有润肠通便之功效。主治肠胃积热胸腹胀满，大便秘结', '14.59', '56.23', '42.23', 'D09985025x');
INSERT INTO `sygoodslist` VALUES ('30', '../images/8257450992b144cfafe5bc7a42c8e3e7.jpg', '葵花小儿肺热咳喘口服液', '清热解毒，宣肺化痰', '15.23', '36.66', '21.43', 'Botob12515');
INSERT INTO `sygoodslist` VALUES ('31', '../images/2397879590db4295b7191b7345020cf9.jpg', '妇科千金片', '清热除湿，益气化瘀', '36.66', '56.33', '10.77', 'C09025x');
INSERT INTO `sygoodslist` VALUES ('32', '../images/9524460182574abea8050397dca0db4b.jpg', '云南白药酊', '活血散瘀，消肿止痛 用于跌打损伤', '30.56', '80.69', '50.13', 'A090zzz000');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(30) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'jacky123', 'jacky123', '10102356@qq.com');
INSERT INTO `user` VALUES ('2', 'sunny1', 'sunny1', '110110110@qq.com');
INSERT INTO `user` VALUES ('17', 'monanna', 'monanna', '231011@qq.com');
INSERT INTO `user` VALUES ('4', 'a88888888', 'a888888', '231011@qq.com');
INSERT INTO `user` VALUES ('16', 'shenle', 'shenle', '231011@qq.com');
INSERT INTO `user` VALUES ('15', 'yinsang', 'yinsang', '231011@qq.com');
INSERT INTO `user` VALUES ('14', 'jackson', 'jackson', '2310118347@qq.xom');
INSERT INTO `user` VALUES ('18', 'jacksonwang', 'jacksonwang', '231011@qq.com');
SET FOREIGN_KEY_CHECKS=1;
