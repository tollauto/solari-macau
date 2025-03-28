//初期化
function init()
{
	judgeUA(); //ユーザエージェントを判別
	//setDefaultData(); //デフォルトでの列車データをセットする

	lineSetup(); //初期のセットアップ
}


//初期のセットアップ
function lineSetup()
{
	//変数初期化
	var c= 0 ;
	for(var value in panelData)
	{
		currentPanelImg[c] = 0; //初期化
		c++;
	}
	
	writeUnitHTML(); //筐体描画
	writeFormHTML(); //制御用フォームのHTML出力
	adjustSize(); //画像の大きさ変更
}

//筐体描画
function writeUnitHTML()
{
	var unit = 0;
	var out = "";

	for(var value in panelData)
	{
		out += "    <div id='panelDiv"+unit+panelData[value].name+"' style='position:absolute; background-color:#111; '>";
		//Upper panel
		out += "      <div id='upperDestinationDiv"+unit+panelData[value].name+"0' style='position:absolute; overflow:hidden; z-index:2; background-color:"+banelBackgroundColor+"; '>";
		out += "        <img id='upperDestinationImg"+unit+panelData[value].name+"0' style='position:absolute; ' src='"+panelData[value].list[0][0]+"' alt='' />";
		out += "      </div>";
		out += "      <div id='upperDestinationDiv"+unit+panelData[value].name+"1' style='position:absolute; overflow:hidden; z-index:1; background-color:"+banelBackgroundColor+"; '>";
		out += "        <img id='upperDestinationImg"+unit+panelData[value].name+"1' style='position:absolute; ' src='"+panelData[value].list[1][0]+"' alt='' />";
		out += "      </div>";
		//Lower panel
		out += "      <div id='bottomDestinationDiv"+unit+panelData[value].name+"0' style='position:absolute; overflow:hidden; z-index:2; background-color:"+banelBackgroundColor+"; '>";
		out += "        <img id='bottomDestinationImg"+unit+panelData[value].name+"0' style='position:absolute; ' src='"+panelData[value].list[1][0]+"' alt='' />";
		out += "      </div>";
		out += "      <div id='bottomDestinationDiv"+unit+panelData[value].name+"1' style='position:absolute; overflow:hidden; z-index:1; background-color:"+banelBackgroundColor+"; '>";
		out += "        <img id='bottomDestinationImg"+unit+panelData[value].name+"1' style='position:absolute; ' src='"+panelData[value].list[0][0]+"' alt='' />";
		out += "      </div>";
		//Cutting line
		out += "      <div id='panelDivisionDiv"+unit+panelData[value].name+"' style='position:absolute; overflow:hidden; z-index:3; background-color:#111; '>";
		out += "      </div>";
		out += "    </div>";
	}
	//Below draws the headers. Positions to change in setting js.
	out += "  <img id='headeroneImg"+unit+"' style='position:absolute; ' src='img/headers/h1ShippingCo.png' alt='' />";
	out += "  <img id='headertwoImg"+unit+"' style='position:absolute; ' src='img/headers/h3No.png' alt='' />";
	out += "  <img id='headerthreeImg"+unit+"' style='position:absolute; ' src='img/headers/h2Destination.png' alt='' />";
	out += "  <img id='headerfourImg"+unit+"' style='position:absolute; ' src='img/headers/h4Information.png' alt='' />";
	out += "  <img id='headerfiveImg"+unit+"' style='position:absolute; ' src='img/headers/h5DepartureTime.png' alt='' />";
	out += "  <img id='headersixImg"+unit+"' style='position:absolute; ' src='img/headers/h6RescheduledTime.png' alt='' />";
	out += "  <img id='headersevenImg"+unit+"' style='position:absolute; ' src='img/headers/h7Gate.png' alt='' />";
	//declare cariable
	var id = "drawDiv";
	//getfunction
	document.getElementById(id).innerHTML = out;
}


//制御用フォームのHTML出力
function writeFormHTML()
{
	for(unit=0 ; unit<unitSum ; unit++)
	{
		var out = "";
		out += "";
		
		//out += "<div style='white-space: nowrap;'>";
		
		for(var value in panelData)
		{
			out += "<select size='1' id='panelInput"+unit+panelData[value].name+"' style='' onChange=''>";
			for(i=0 ; i<panelData[value].list.length ; i++)
			{
				out += "<option value=''>"+(i+1)+": "+panelData[value].list[i][1]+"</option>";
			}
			out += "</select>";
			out += " ";
		}
		out += "";
		out += "";
		out += "";
		out += "";
		out += "";
		
		var id = "formDiv";
		document.getElementById(id).innerHTML = out;
	}
}

//ランダム設定
function setRandom()
{
	//種別をランダム設定にする
	for(unit=0 ; unit<unitSum ; unit++)
	{
		for(var value in panelData)
		{
			var id = "panelInput"+unit+panelData[value].name;
			//(ブランク)以外の選択肢をランダムで選ぶ
			while(true)
			{
				var randomNum = Math.floor(Math.random() * (document.getElementById(id).options.length - 0));
				//(ブランク)の場合は選び直し
				if(panelData[value].list[randomNum][1] != "----")
					break;
			}
			document.getElementById(id).options[randomNum].selected = true;
		}

	}
}

var timeHour = 0;
var timeMinute = 0;
var timeSecond = 0;
var order = new Array();
var destination = new Array();
var approachStatus = new Array();
var setStationNum = 0;

//画像の大きさ変更
function adjustSize()
{
	var id = "zoomInput";
	zoom = document.getElementById(id).value/100 * zoomDefalut;
	
	if(zoom < 0.005)
		zoom = 0.005;
	
	////////筐体関係
	var id = "drawDiv";
	//document.getElementById(id).style.left = zoom*10 + "px";
	//document.getElementById(id).style.top = zoom*10 + "px";
	document.getElementById(id).style.width = zoom*4300 + "px";
	document.getElementById(id).style.height = zoom*600 + "px";
	
	
	for(unit = 0 ; unit < unitSum ; unit++)
	{
		////////筐体関係
		for(j=0 ; j<unitDivSetting.length ; j++)
		{
			var id = unitDivSetting[j][0]+unit;
			document.getElementById(id).style.left = zoom*unitDivSetting[j][1] + "px";
			document.getElementById(id).style.top = zoom*unitDivSetting[j][2] + "px";
			document.getElementById(id).style.width = zoom*unitDivSetting[j][3] + "px";
			document.getElementById(id).style.height = zoom*unitDivSetting[j][4] + "px";
		}
		
		setDefaultPositionPanel(unit, 0);
		setDefaultPositionPanel(unit, 1);
	}
	
}

//パネルをデフォルトの位置に戻す
//1700:3   
baseWidth = 1000;
baseHeigit = 176;
function setDefaultPositionPanel(unit, position)
{
	var count = 0;
	for(var value in panelData)
	{
		//var bottomPanelHeightBuff = [0, panelData[value].height*0.5];
		
		var id = "panelDiv"+unit+panelData[value].name;
		document.getElementById(id).style.left   = zoom*panelData[value].left + "px";
		document.getElementById(id).style.top    = zoom*panelData[value].top + "px";
		document.getElementById(id).style.width  = zoom*panelData[value].width + "px";
		document.getElementById(id).style.height = zoom*panelData[value].height + "px";
		
		for(panel=0 ; panel<2 ; panel++)
		{
			if(position == 0)
			{
				//パネルの上半分
				var id = "upperDestinationDiv"+unit+panelData[value].name+panel;
				document.getElementById(id).style.left   = zoom*0 + "px";
				document.getElementById(id).style.top    = zoom*0 + "px";
				document.getElementById(id).style.width  = zoom*panelData[value].width + "px";
				document.getElementById(id).style.height = zoom*panelData[value].height*0.5 + "px";
				
				var id = "upperDestinationImg"+unit+panelData[value].name+panel;
				document.getElementById(id).style.left   = zoom*0 + "px";
				document.getElementById(id).style.top    = zoom*0 + "px";
				document.getElementById(id).style.width  = zoom*panelData[value].width + "px";
				document.getElementById(id).style.height = zoom*panelData[value].height + "px";
			}
			
			if(position == 1)
			{
				//パネルの下半分
				// panel0は最初から出てる表示、panel1は最初高さゼロで隠し、回転時に徐々に引き伸ばして見せていく
				if(currentPanelImg[count] % 2 == 0)
					heightList = [0, panelData[value].height*0.5];
				else
					heightList = [panelData[value].height*0.5, 0];
				var id = "bottomDestinationDiv"+unit+panelData[value].name+panel;
				document.getElementById(id).style.left   = zoom*0 + "px";
				document.getElementById(id).style.top    = zoom*panelData[value].height*0.5 + "px";
				document.getElementById(id).style.width  = zoom*panelData[value].width + "px";
				document.getElementById(id).style.height = zoom*heightList[panel] + "px";
				
				var id = "bottomDestinationImg"+unit+panelData[value].name+panel;
				document.getElementById(id).style.left   = zoom*0 + "px";
				document.getElementById(id).style.top    = zoom*(-panelData[value].height*0.5) + "px";
				document.getElementById(id).style.width  = zoom*panelData[value].width + "px";
				document.getElementById(id).style.height = zoom*panelData[value].height + "px";
			}
		}
		
		var id = "panelDivisionDiv"+unit+panelData[value].name;
		document.getElementById(id).style.left   = zoom*0 + "px";
		document.getElementById(id).style.top    = zoom*panelData[value].height*0.5 + "px";
		document.getElementById(id).style.width  = zoom*panelData[value].width + "px";
		document.getElementById(id).style.height = zoom*panelData[value].height*0.02 + "px";
		count++;
	}
	
}

var timerRunInterval;

//フォームにセットされているパネルを読み込む
function readFormPanel(unit, parts)
{
	//value = panelData.destination.name;
	value = getArrayData(panelData, parts);
	
	var id = "panelInput"+unit+panelData[value].name;

	panelData[value].selectIndex = document.getElementById(id).selectedIndex;
	
	updatePanel(parts);
}

var updateLoop = false; //無限ループモードONかOFFか
//無限ループ開始
function updatePanelLoop(parts)
{
	updateLoop = true;
	for(i=0 ; i<Object.keys(panelData).length ; i++)
	{
		updatePanel(i);
	}
}


var currentPanelImg = [];
// パネルを更新する
//引数 parts 更新するパネル番号　0発順　1時刻(時)　2時刻(分)　3行先
function updatePanel(parts)
{
	var value = getArrayData(panelData, parts);
	//value = panelData.destination.name;
	
	//パネル枚数の合計
	panelSum = panelData[value].list.length - 0;

	//panelCountに回転の進捗度合いが入っている。これを整数部、小数部に分ける
	//【整数部】現在表示中のパネル 何枚目のパネルか？
	currentPanelImg[parts] = Math.floor(panelData[value].panelCount);
	//【小数部】描画の進捗度合い　0.0-0.5 上半分が降りてきている   0.5-1.0下半分が降りてきている
	var progress = panelData[value].panelCount - Math.floor(panelData[value].panelCount);
	
	panelData[value].beforeCurrentUpdatePanel = panelData[value].currentUpdatePanel; //前回の情報を退避
	
	/*
	//progressが0で、目的表示にすでに設定されている場合は処理を行わない
	log(progress);
	if(progress == 0 && !updateLoop && currentPanelImg[parts]%panelSum == panelData[value].selectIndex)
	{
		return;
	}
	*/
	
	
	
	//if(panelData[value].panelCount > 0.8)
	//	alert("1 "+panelData[value].panelCount);
	//上半分の画像を下方向へ描画中は0
	//下半分の画像を下方向へ描画中は1
	if(progress <= 0.5)
		panelData[value].currentUpdatePanel = 0;
	else if(progress <= 1.0)
		panelData[value].currentUpdatePanel = 1;
	
	
	unit = 0;
	panel = 0;
	
	
	//フォームでの設定値に達した場合、　例：設定値5で、4.9→5.1に変化した場合、5.0に補正して描画しきちんとした位置にした後、ループを止める
	if(panelData[value].beforeCurrentUpdatePanel == 1 && panelData[value].currentUpdatePanel == 0)
	{
		if(!updateLoop && currentPanelImg[parts]%panelSum == panelData[value].selectIndex)
		{
			progress = 0; //小数点以下を切り捨てて0に補正
			panelData[value].panelCount = Math.floor(panelData[value].panelCount);
		}
	}
	
	//--------------------------------------------------------------------------------------------------------------------------------
	//パネルの大きさ表示更新
	upperProgress = progress;
	if(panelData[value].currentUpdatePanel == 0)
	{
		var id = "upperDestinationDiv"+unit+panelData[value].name + currentPanelImg[parts] % 2;
		document.getElementById(id).style.top    = zoom*panelData[value].height*0.5*(upperProgress/0.5) + "px";
		document.getElementById(id).style.height = zoom*panelData[value].height*(0.5-upperProgress) + "px";
		if(backColorChange == 0) //背景色変更ONの場合のみ
		{
			var brightness = 100 - 20*(progress/0.5); //100から20へ
			document.getElementById(id).style.filter = "brightness("+brightness+"%)";
		}
		
		var id = "upperDestinationImg"+unit+panelData[value].name + currentPanelImg[parts] % 2;
		document.getElementById(id).style.top    = zoom*0 + "px";
		document.getElementById(id).style.height = zoom*panelData[value].height*(0.5-upperProgress)/0.5 + "px";
	}
	else if(panelData[value].currentUpdatePanel == 1)
	{
		var id = "bottomDestinationDiv"+unit+panelData[value].name + currentPanelImg[parts] % 2;
		document.getElementById(id).style.top    = zoom*panelData[value].height*0.5 + "px";
		document.getElementById(id).style.height = zoom*panelData[value].height*((progress-0.5)/0.5)*0.5 + "px";
		if(backColorChange == 0) //背景色変更ONの場合のみ
		{
			var brightness = 250 - 150*((progress-0.5)/0.5); //250から100へ
			document.getElementById(id).style.filter = "brightness("+brightness+"%)";
		}
		
		var id = "bottomDestinationImg"+unit+panelData[value].name + currentPanelImg[parts] % 2;
		document.getElementById(id).style.top    = zoom*(-panelData[value].height*0.5)*(progress-0.5)/0.5 + "px";
		document.getElementById(id).style.height = zoom*panelData[value].height*((progress-0.5)/0.5) + "px";
	}
	
	//--------------------------------------------------------------------------------------------------------------------------------
	//パネルの変わり目でのセットアップしなおし
	//中間までアニメーションが進んだとき
	if(panelData[value].beforeCurrentUpdatePanel == 0 && panelData[value].currentUpdatePanel == 1)
	{
		//【即処理を行う】
		//　zindexを入れ替える
		//偶数の場合、パネル0が上→パネル1が上に切り替える
		//奇数の場合はその逆
		if(currentPanelImg[parts] % 2 == 0)
			var zIndexList = [1, 2];
		else
			var zIndexList = [2, 1];
		var id = "upperDestinationDiv"+unit+panelData[value].name+"0";
		document.getElementById(id).style.zIndex = zIndexList[0];
		document.getElementById(id).style.filter = "brightness(100%)";
		var id = "upperDestinationDiv"+unit+panelData[value].name+"1";
		document.getElementById(id).style.zIndex = zIndexList[1];
		document.getElementById(id).style.filter = "brightness(100%)";
		//setDefaultPositionPanel(unit, 0);
		//setTimeout("setDefaultPositionPanel("+unit+", "+1+")", 100);
		
		
		//【少し遅れて処理を行う】
		//　裏側に隠れたパネルの画像を差し替える(次の準備)
		//　裏側に隠れたパネルの画像の高さをもとに戻す
		setTimeout("updatePanelChange("+unit+", '"+value+"', 0, "+parts+")", 30);
	}
	//一番下まで表示更新が進んだとき
	if(panelData[value].beforeCurrentUpdatePanel == 1 && panelData[value].currentUpdatePanel == 0)
	{
		//【即処理を行う】
		//　一番下までパネルを描画する
		//　裏側に隠れたパネルの高さを0にする(次の準備)
		
		//下まで下がってる途中のパネルを下までおろしきる
		var id = "bottomDestinationDiv"+unit+panelData[value].name + (currentPanelImg[parts]+1) % 2;
		document.getElementById(id).style.top    = zoom*panelData[value].height*0.5 + "px";
		document.getElementById(id).style.height = zoom*panelData[value].height*0.5 + "px";
		
		//var id = "bottomDestinationImg"+unit+panelData[value].name + (currentPanelImg[parts]+1) % 2;
		//document.getElementById(id).style.top    = zoom*(-panelData[value].height*0.5) + "px";
		//document.getElementById(id).style.height = zoom*panelData[value].height + "px";
		
		//【少し遅れて処理を行う】
		//　zindexを入れ替える(少し遅れて)
		//　裏側に隠れたパネルの画像を差し替える(次の準備)
		setTimeout("updatePanelChange("+unit+", '"+value+"', 1, "+parts+")", 30);
		
	}
	
	//フォームでの設定値に達したらここで終了
	if(!updateLoop && currentPanelImg[parts]%panelSum == panelData[value].selectIndex)
		return;
	
	//--------------------------------------------------------------------------------------------------------------------------------
	//次回描画タイマーの設定
	//更新頻度を読み込み
	var id = "fpsInput";
	var interval = document.getElementById(id).value;
	var id = "speedInput";
	var speed = document.getElementById(id).value;
	
	if(interval < 0)
		interval = 60; //デフォルト60
	if(speed < 0.01)
		speed = 0.01; //デフォルト
	
	panelData[value].panelCount += speed * 1/interval;
	//panelData[value].panelCount += 0.1*updateSpeed * (progress+0.05); //重力働いている感じver.
	clearTimeout(panelData[value].updatePanelTimeout);
	panelData[value].updatePanelTimeout = setTimeout("updatePanel("+parts+")", 1000/interval);
}

//引数 pattern 0:真ん中まで更新が終わったとき     一番下端まで更新が終わったとき
//引数 parts 更新するパネル番号　0発順　1時刻(時)　2時刻(分)　3行先
function updatePanelChange(unit, value, pattern, parts)
{
	panelSum = panelData[value].list.length - 0;
	if(pattern == 0)
	{
		//　裏側に隠れたパネルの画像を差し替える(次の準備)
		if(currentPanelImg[parts] % 2 == 0)
		{
			var id = "upperDestinationImg"+unit+panelData[value].name+"0";
			document.getElementById(id).src = ""+panelData[value].list[(currentPanelImg[parts]+2)%panelSum][0]+"";
		}
		else
		{
			var id = "upperDestinationImg"+unit+panelData[value].name+"1";
			document.getElementById(id).src = ""+panelData[value].list[(currentPanelImg[parts]+2)%panelSum][0]+"";
		}
		
		//　裏側に隠れたパネルの画像の高さをもとに戻す
		setDefaultPositionPanel(unit, 0);
	}

	if(pattern == 1)
	{
		//下パネルのzindexを更新する
		if(currentPanelImg[parts] % 2 == 0)
			var zIndexList = [2, 1];
		else
			var zIndexList = [1, 2];
		var id = "bottomDestinationDiv"+unit+panelData[value].name+"0";
		document.getElementById(id).style.zIndex = zIndexList[0];
		var id = "bottomDestinationDiv"+unit+panelData[value].name+"1";
		document.getElementById(id).style.zIndex = zIndexList[1];
		
		//画像位置更新
		setDefaultPositionPanel(unit, 1);
		
		//偶数の場合は、パネル1の画像を次の次に切り替える
		if(currentPanelImg[parts] % 2 == 0)
		{
			var id = "bottomDestinationImg"+unit+panelData[value].name+"0";
			document.getElementById(id).src = ""+panelData[value].list[(currentPanelImg[parts]+1)%panelSum][0]+"";
		}
		else
		{
			var id = "bottomDestinationImg"+unit+panelData[value].name+"1";
			document.getElementById(id).src = ""+panelData[value].list[(currentPanelImg[parts]+1)%panelSum][0]+"";
		}
	}
}


function getArrayData(panelData, parts)
{
	var count = 0;
	for(var value in panelData)
	{
		if(count == parts)
			return value;
		
		count++;
	}
	return null;
}

//テキストボックスの値を調整する
function changeTextBox(id, num)
{
	//ズーム倍率の場合は乗算・除算
	if(id == "zoomInput")
	{
		var value = document.getElementById(id).value * 1 * num;
		document.getElementById(id).value = value;
	}
	//それ以外は和算・減算
	else
	{
		var value = document.getElementById(id).value * 1 + num;
		if(value <= 0)
			value = 0;
		document.getElementById(id).value = value;
	}
}

//背景色変更させるか否かの設定
function setBackColorChange()
{
	var id = "backColorChangeSelect";
	backColorChange = document.getElementById(id).selectedIndex;
}
var backColorChange = 0; //背景色変更させるか否か  0:ON　　1:OFF

//回転アニメーションを強制停止
function stopAnime()
{
	for(var value in panelData)
	{
		clearTimeout(panelData[value].updatePanelTimeout);
	}
}

