var banelBackgroundColor = "#222"; //パネルの標準背景色
var zoomDefalut = 1;
var unitSum = 1; //筐体の台数

var unitRoundRadius = 40;

unitDivSetting = [
	["wigwagleft", 0, 103, 116, 40],
	["wigwagright", 1616, 103, 116, 40],
	["headeroneImg", 108, 0, 247, 70],
	["headertwoImg", 392, 0, 69, 70],
	["headerthreeImg", 604, 0, 247, 70],
	["headerfourImg", 888, 0, 247, 70],
	["headerfiveImg", 1172, 0, 247, 70],
	["headersixImg", 1359, 0, 247, 70],
	["headersevenImg", 1534, 0, 82, 70]
];

var panelData = {};

//1----------------------------------------------------------------
//1----------------------------------------------------------------
//1----------------------------------------------------------------
//1----------------------------------------------------------------
//1----------------------------------------------------------------
//1----------------------------------------------------------------
//1----------------------------------------------------------------
//1----------------------------------------------------------------
//1----------------------------------------------------------------
//1----------------------------------------------------------------
//1----------------------------------------------------------------
//(1)船公司
panelData.carrier = {};
panelData.carrier.name   = "carrier";
panelData.carrier.left   = 108;
panelData.carrier.top    = 100;
panelData.carrier.width  = 247;
panelData.carrier.height = 43;
panelData.carrier.selectIndex = 0; //選択中のデータ
panelData.carrier.panelCount = 0;
panelData.carrier.currentUpdatePanel = 0;
panelData.carrier.beforeCurrentUpdatePanel = 0;
panelData.carrier.updatePanelTimeout = 0;
////panelData.carrier.imgLeft   = 340;
//panelData.carrier.imgTop    = 129;
panelData.carrier.list = [
	["img/carrier/dSTS.png",		"STS 信德船務"],
	["img/carrier/dFEH.png",		"FEH 遠東水翼船"],
	["img/carrier/dHMH.png",		"HMH 港澳飛翼船"],
	["img/carrier/dHSF.png",		"HSF 快達輪"],
	["img/carrier/dSLK.png",		"SLK 海聯船務"],
	["img/null.png",				"----"],
	["img/carrier/dCMD.png",		"CMD 招商船務"],
	["img/null.png",				"----"],
	["img/carrier/dEAA.png",		"EAA 亞太航空"],
	["img/null.png",				"----"],
	["img/carrier/dHKF.png",		"HKF 香港小輪"],
	["img/null.png",				"----"],
	["img/null.png",				"----"],
	["img/null.png",				"----"],
	["img/null.png",				"----"],
	["img/carrier/dTC.png",			"Turbo Cat 港澳飛航船"],
	["img/null.png",				"----"],
	["img/carrier/dCKS.png",		"CKS 珠江船務"],
	["img/null.png",				"----"],
	["img/carrier/dTURBOJET.png",	"TurboJet 噴射飛航"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"]
	];
//----------------------------------------------------------------
//(2－1)航號1
panelData.leftone = {};
panelData.leftone.name   = "leftone";
panelData.leftone.left   = 392;
panelData.leftone.top    = 100;
panelData.leftone.width  = 31;
panelData.leftone.height = 43;
panelData.leftone.selectIndex = 0; //選択中のデータ
panelData.leftone.panelCount = 0;
panelData.leftone.currentUpdatePanel = 0;
panelData.leftone.beforeCurrentUpdatePanel = 0;
panelData.leftone.updatePanelTimeout = 0;
////panelData.leftone.imgLeft   = 340;
//panelData.leftone.imgTop    = 129;
panelData.leftone.list = [
	["img/hour/1.png",	"1"],
	["img/hour/2.png",	"2"],
	["img/hour/3.png",	"3"],
	["img/hour/4.png",	"4"],
	["img/hour/5.png",	"5"],
	["img/hour/6.png",	"6"],
	["img/hour/7.png",	"7"],
	["img/hour/8.png",	"8"],
	["img/hour/9.png",	"9"],
	["img/hour/0.png",	"0"],
	["img/hour/A.png",	"A"],
	["img/hour/B.png",	"B"],
	["img/hour/C.png",	"C"],
	["img/hour/D.png",	"D"],
	["img/hour/E.png",	"E"],
	["img/hour/F.png",	"F"],
	["img/hour/G.png",	"G"],
	["img/hour/H.png",	"H"],
	["img/hour/I.png",	"I"],
	["img/hour/J.png",	"J"],
	["img/hour/K.png",	"K"],
	["img/hour/L.png",	"L"],
	["img/hour/M.png",	"M"],
	["img/hour/N.png",	"N"],
	["img/hour/O.png",	"O"],
	["img/hour/P.png",	"P"],
	["img/hour/Q.png",	"Q"],
	["img/hour/R.png",	"R"],
	["img/hour/S.png",	"S"],
	["img/hour/T.png",	"T"],
	["img/hour/U.png",	"U"],
	["img/hour/V.png",	"V"],
	["img/hour/W.png",	"W"],
	["img/hour/X.png",	"X"],
	["img/hour/Y.png",	"Y"],
	["img/hour/Z.png",	"Z"],
	["img/hour/dash.png",	"DASH"],
	["img/hour/dot.png",	"DOT"],
	["img/hour/slash.png",	"SLASH"],
	["img/null.png",		"BLANK"]
];
//----------------------------------------------------------------
//(2－2)航號2
panelData.lefttwo = {};
panelData.lefttwo.name   = "lefttwo";
panelData.lefttwo.left   = 428;
panelData.lefttwo.top    = 100;
panelData.lefttwo.width  = 31;
panelData.lefttwo.height = 43;
panelData.lefttwo.selectIndex = 0; //選択中のデータ
panelData.lefttwo.panelCount = 0;
panelData.lefttwo.currentUpdatePanel = 0;
panelData.lefttwo.beforeCurrentUpdatePanel = 0;
panelData.lefttwo.updatePanelTimeout = 0;
////panelData.lefttwo.imgLeft   = 340;
//panelData.lefttwo.imgTop    = 129;
panelData.lefttwo.list = panelData.leftone.list;
//----------------------------------------------------------------
//(2－3)航號3
panelData.leftthree = {};
panelData.leftthree.name   = "leftthree";
panelData.leftthree.left   = 464;
panelData.leftthree.top    = 100;
panelData.leftthree.width  = 31;
panelData.leftthree.height = 43;
panelData.leftthree.selectIndex = 0; //選択中のデータ
panelData.leftthree.panelCount = 0;
panelData.leftthree.currentUpdatePanel = 0;
panelData.leftthree.beforeCurrentUpdatePanel = 0;
panelData.leftthree.updatePanelTimeout = 0;
////panelData.lefttwo.imgLeft   = 340;
//panelData.lefttwo.imgTop    = 129;
panelData.leftthree.list = panelData.leftone.list;
//----------------------------------------------------------------
//(2－4)航號4
panelData.leftfour = {};
panelData.leftfour.name   = "leftfour";
panelData.leftfour.left   = 500;
panelData.leftfour.top    = 100;
panelData.leftfour.width  = 31;
panelData.leftfour.height = 43;
panelData.leftfour.selectIndex = 0; //選択中のデータ
panelData.leftfour.panelCount = 0;
panelData.leftfour.currentUpdatePanel = 0;
panelData.leftfour.beforeCurrentUpdatePanel = 0;
panelData.leftfour.updatePanelTimeout = 0;
////panelData.leftfour.imgLeft   = 340;
//panelData.leftfour.imgTop    = 129;
panelData.leftfour.list = panelData.leftone.list;
//----------------------------------------------------------------
//(2－5)航號5
panelData.leftfive = {};
panelData.leftfive.name   = "leftfive";
panelData.leftfive.left   = 536;
panelData.leftfive.top    = 100;
panelData.leftfive.width  = 31;
panelData.leftfive.height = 43;
panelData.leftfive.selectIndex = 0; //選択中のデータ
panelData.leftfive.panelCount = 0;
panelData.leftfive.currentUpdatePanel = 0;
panelData.leftfive.beforeCurrentUpdatePanel = 0;
panelData.leftfive.updatePanelTimeout = 0;
////panelData.leftfive.imgLeft   = 340;
//panelData.leftfive.imgTop    = 129;
panelData.leftfive.list = panelData.leftone.list;
//----------------------------------------------------------------
//（3）目的地
panelData.ferryto = {};
panelData.ferryto.name   = "ferryto";
panelData.ferryto.left   = 604;
panelData.ferryto.top    = 100;
panelData.ferryto.width  = 247;
panelData.ferryto.height = 43;
panelData.ferryto.selectIndex = 0; //選択中のデータ
panelData.ferryto.panelCount = 0;
panelData.ferryto.currentUpdatePanel = 0;
panelData.ferryto.beforeCurrentUpdatePanel = 0;
panelData.ferryto.updatePanelTimeout = 0;
////panelData.ferryto.imgLeft   = 340;
//panelData.ferryto.imgTop    = 129;
panelData.ferryto.list = [
	["img/destination/tMacau.png",	"MACAU 澳門"],
	["img/destination/tShekou.png",	"SHEKOU 蛇口"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/destination/tZhuhai.png",	"ZHU HAI 珠海"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/destination/tZhongshan.png",	"ZHONGSHAN 中山"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/destination/tShenzhen.png",	"SHENZHEN 深圳"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"]
	];
//----------------------------------------------------------------
//（4）注意事項
panelData.bstatus = {};
panelData.bstatus.name   = "bstatus";
panelData.bstatus.left   = 888;
panelData.bstatus.top    = 100;
panelData.bstatus.width  = 247;
panelData.bstatus.height = 43;
panelData.bstatus.selectIndex = 0; //選択中のデータ
panelData.bstatus.panelCount = 0;
panelData.bstatus.currentUpdatePanel = 0;
panelData.bstatus.beforeCurrentUpdatePanel = 0;
panelData.bstatus.updatePanelTimeout = 0;
////panelData.bstatus.imgLeft   = 340;
//panelData.bstatus.imgTop    = 129;
panelData.bstatus.list = [
	["img/bstatus/bBoarding.png",		"BOARDING 速入閘"],
	["img/bstatus/bCancelled.png",		"CANCELLED 已取消"],
	["img/bstatus/bDelayed.png",		"DELAYED 延遲"],
	["img/bstatus/bBoardingSoon.png",		"BOARDING SOON 將入閘"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"],
	["img/null.png",	"----"]
	];
//----------------------------------------------------------------
//(5－1)時間1
panelData.timeone = {};
panelData.timeone.name   = "timeone";
panelData.timeone.left   = 1172;
panelData.timeone.top    = 100;
panelData.timeone.width  = 31;
panelData.timeone.height = 43;
panelData.timeone.selectIndex = 0; //選択中のデータ
panelData.timeone.panelCount = 0;
panelData.timeone.currentUpdatePanel = 0;
panelData.timeone.beforeCurrentUpdatePanel = 0;
panelData.timeone.updatePanelTimeout = 0;
////panelData.timeone.imgLeft   = 340;
//panelData.timeone.imgTop    = 129;
panelData.timeone.list = panelData.leftone.list;
//----------------------------------------------------------------
//(5－2)時間2
panelData.timetwo = {};
panelData.timetwo.name   = "timetwo";
panelData.timetwo.left   = 1208;
panelData.timetwo.top    = 100;
panelData.timetwo.width  = 31;
panelData.timetwo.height = 43;
panelData.timetwo.selectIndex = 0; //選択中のデータ
panelData.timetwo.panelCount = 0;
panelData.timetwo.currentUpdatePanel = 0;
panelData.timetwo.beforeCurrentUpdatePanel = 0;
panelData.timetwo.updatePanelTimeout = 0;
////panelData.timetwo.imgLeft   = 340;
//panelData.timetwo.imgTop    = 129;
panelData.timetwo.list = panelData.leftone.list;
//----------------------------------------------------------------
//(5－3)時間3
panelData.timethree = {};
panelData.timethree.name   = "timethree";
panelData.timethree.left   = 1249;
panelData.timethree.top    = 100;
panelData.timethree.width  = 31;
panelData.timethree.height = 43;
panelData.timethree.selectIndex = 0; //選択中のデータ
panelData.timethree.panelCount = 0;
panelData.timethree.currentUpdatePanel = 0;
panelData.timethree.beforeCurrentUpdatePanel = 0;
panelData.timethree.updatePanelTimeout = 0;
////panelData.timethree.imgLeft   = 340;
//panelData.timethree.imgTop    = 129;
panelData.timethree.list = panelData.leftone.list;
//----------------------------------------------------------------
//(5－4)時間4
panelData.timefour = {};
panelData.timefour.name   = "timefour";
panelData.timefour.left   = 1285;
panelData.timefour.top    = 100;
panelData.timefour.width  = 31;
panelData.timefour.height = 43;
panelData.timefour.selectIndex = 0; //選択中のデータ
panelData.timefour.panelCount = 0;
panelData.timefour.currentUpdatePanel = 0;
panelData.timefour.beforeCurrentUpdatePanel = 0;
panelData.timefour.updatePanelTimeout = 0;
////panelData.timefour.imgLeft   = 340;
//panelData.timefour.imgTop    = 129;
panelData.timefour.list = panelData.leftone.list;
//----------------------------------------------------------------
//(6－1)更改時間1
panelData.rescheduleone = {};
panelData.rescheduleone.name   = "rescheduleone";
panelData.rescheduleone.left   = 1353;
panelData.rescheduleone.top    = 100;
panelData.rescheduleone.width  = 31;
panelData.rescheduleone.height = 43;
panelData.rescheduleone.selectIndex = 0; //選択中のデータ
panelData.rescheduleone.panelCount = 0;
panelData.rescheduleone.currentUpdatePanel = 0;
panelData.rescheduleone.beforeCurrentUpdatePanel = 0;
panelData.rescheduleone.updatePanelTimeout = 0;
////panelData.rescheduleone.imgLeft   = 340;
//panelData.rescheduleone.imgTop    = 129;
panelData.rescheduleone.list = panelData.leftone.list;
//----------------------------------------------------------------
//(6－2)更改時間2
panelData.rescheduletwo = {};
panelData.rescheduletwo.name   = "rescheduletwo";
panelData.rescheduletwo.left   = 1389;
panelData.rescheduletwo.top    = 100;
panelData.rescheduletwo.width  = 31;
panelData.rescheduletwo.height = 43;
panelData.rescheduletwo.selectIndex = 0; //選択中のデータ
panelData.rescheduletwo.panelCount = 0;
panelData.rescheduletwo.currentUpdatePanel = 0;
panelData.rescheduletwo.beforeCurrentUpdatePanel = 0;
panelData.rescheduletwo.updatePanelTimeout = 0;
////panelData.rescheduletwo.imgLeft   = 340;
//panelData.rescheduletwo.imgTop    = 129;
panelData.rescheduletwo.list = panelData.leftone.list;
//----------------------------------------------------------------
//(6－3)更改時間3
panelData.reschedulethree = {};
panelData.reschedulethree.name   = "reschedulethree";
panelData.reschedulethree.left   = 1430;
panelData.reschedulethree.top    = 100;
panelData.reschedulethree.width  = 31;
panelData.reschedulethree.height = 43;
panelData.reschedulethree.selectIndex = 0; //選択中のデータ
panelData.reschedulethree.panelCount = 0;
panelData.reschedulethree.currentUpdatePanel = 0;
panelData.reschedulethree.beforeCurrentUpdatePanel = 0;
panelData.reschedulethree.updatePanelTimeout = 0;
////panelData.reschedulethree.imgLeft   = 340;
//panelData.reschedulethree.imgTop    = 129;
panelData.reschedulethree.list = panelData.leftone.list;
//----------------------------------------------------------------
//(6－4)更改時間4
panelData.reschedulefour = {};
panelData.reschedulefour.name   = "reschedulefour";
panelData.reschedulefour.left   = 1466;
panelData.reschedulefour.top    = 100;
panelData.reschedulefour.width  = 31;
panelData.reschedulefour.height = 43;
panelData.reschedulefour.selectIndex = 0; //選択中のデータ
panelData.reschedulefour.panelCount = 0;
panelData.reschedulefour.currentUpdatePanel = 0;
panelData.reschedulefour.beforeCurrentUpdatePanel = 0;
panelData.reschedulefour.updatePanelTimeout = 0;
////panelData.reschedulefour.imgLeft   = 340;
//panelData.reschedulefour.imgTop    = 129;
panelData.reschedulefour.list = panelData.leftone.list;
//----------------------------------------------------------------
//(6－4)更改時間4
panelData.gateno = {};
panelData.gateno.name   = "gateno";
panelData.gateno.left   = 1534;
panelData.gateno.top    = 100;
panelData.gateno.width  = 31;
panelData.gateno.height = 43;
panelData.gateno.selectIndex = 0; //選択中のデータ
panelData.gateno.panelCount = 0;
panelData.gateno.currentUpdatePanel = 0;
panelData.gateno.beforeCurrentUpdatePanel = 0;
panelData.gateno.updatePanelTimeout = 0;
////panelData.gateno.imgLeft   = 340;
//panelData.gateno.imgTop    = 129;
panelData.gateno.list = panelData.leftone.list;
//2----------------------------------------------------------------
//2----------------------------------------------------------------
//2----------------------------------------------------------------
//2----------------------------------------------------------------
//2----------------------------------------------------------------
//2----------------------------------------------------------------
//2----------------------------------------------------------------
//2----------------------------------------------------------------
//2----------------------------------------------------------------
//2----------------------------------------------------------------
